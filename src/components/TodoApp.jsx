import { useMemo, useState } from "react";

function TodoApp() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const completedCount = useMemo(
        () => todos.filter(todo => todo.completed).length,
        [todos]
    );
    const totalCount = todos.length;
    const remainingCount = totalCount - completedCount;
    const progress = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;

    function addTodo(e) {
        e.preventDefault();
        if(!task.trim()) return;
        const newTodo = { id: Date.now(), text: task.trim(), completed: false };
        setTodos([...todos, newTodo]);
        setTask("");
    }

    function toggleTodo(id) {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed } : todo
            )
        );
    }

    function deleteTodo(id){
        setTodos(todos.filter(todo =>todo.id !== id));
    }

    return(
        <section className="todo-panel" aria-labelledby="todo-title">
            <div className="todo-header">
                <div>
                    <p className="eyebrow">Daily desk</p>
                    <h1 id="todo-title">Todo App</h1>
                    <p className="subtitle">Plan your next moves and keep the day tidy.</p>
                </div>

                <div
                  className="progress-ring"
                  style={{ "--progress": `${progress}%` }}
                  aria-label={`${progress}% complete`}
                >
                    <span>{progress}%</span>
                </div>
            </div>

            <div className="stats-row" aria-label="Task summary">
                <div>
                    <span>{totalCount}</span>
                    <p>Total</p>
                </div>
                <div>
                    <span>{remainingCount}</span>
                    <p>Open</p>
                </div>
                <div>
                    <span>{completedCount}</span>
                    <p>Done</p>
                </div>
            </div>

            <form className="todo-form" onSubmit={addTodo}>
                <input
                 type="text"
                 value={task}
                 onChange={e => setTask(e.target.value)}
                 placeholder="Enter a task.."
                  aria-label="New task"
                />
                <button type="submit">Add</button>
            </form>

            {todos.length === 0 ? (
                <div className="empty-state">
                    <span aria-hidden="true">+</span>
                    <p>No tasks yet. Add one focused thing to begin.</p>
                </div>
            ) : (
                <ul className="todo-list">
                    {todos.map(todo => (
                        <li
                         key={todo.id}
                         className={todo.completed ? "todo-item is-complete" : "todo-item"}
                        >
                            <button
                              type="button"
                              className="check-button"
                              onClick={() => toggleTodo(todo.id)}
                              aria-label={todo.completed ? "Mark task as open" : "Mark task as complete"}
                            >
                                <span aria-hidden="true">{todo.completed ? "✓" : ""}</span>
                            </button>

                            <span
                              onClick={() => toggleTodo(todo.id)}
                              className={todo.completed ? "task-text line-through" : "task-text"}
                            >
                                {todo.text}
                            </span>

                            <button
                              type="button"
                              onClick={() => deleteTodo(todo.id)}
                              className="delete-button"
                              aria-label={`Delete ${todo.text}`}
                              title="Delete task"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default TodoApp;
