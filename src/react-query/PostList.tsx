import { useState } from "react";
import usePost from "../hooks/usePosts"

const PostList = () => {
    const [userId, setUserId] = useState<number>();
    const { data, error, isLoading } = usePost(userId);
    if (error) return <p>{error.message}</p>
    return (
        <>
            <div className="p-5">
                <select className="form-select" onChange={(event) => setUserId(parseInt(event.currentTarget.value))}>
                    <option value=""></option>
                    <option value="1">User 1</option>
                    <option value="2">User 2</option>
                    <option value="3">User 3</option>
                </select>
            </div>
            <ul className="list-group p-5">
                {isLoading && <p>Loading....</p>}
                {data?.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        {todo.title}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default PostList