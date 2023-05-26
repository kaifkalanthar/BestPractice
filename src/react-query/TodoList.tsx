import useTodos from '../hooks/useTodos';

interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

const TodoList = () => {

    const { data, error, isLoading } = useTodos<Todo>('/todos', ['todo']);
    if (error) return <p>{error.message}</p>
    return (
        <ul className="list-group p-5">
            {isLoading && <p>Hold tight... </p>}
            {data?.map((todo) => (
                <li key={todo.id} className="list-group-item">
                    {todo.title}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;