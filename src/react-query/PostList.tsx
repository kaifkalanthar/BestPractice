import { useState } from "react";
import usePost from "../hooks/usePosts"

const PostList = () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const { data, error, isLoading } = usePost({ page, pageSize });
    if (error) return <p>{error.message}</p>
    return (
        <>

            <ul className="list-group p-5">
                {isLoading && <p>Loading....</p>}
                {data?.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        {todo.title}
                    </li>
                ))}
            </ul>
            <div className="px-5">
                <button
                    className="btn btn-primary"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}>Prev
                </button>
                <button
                    className="btn btn-primary ms-2"
                    onClick={() => setPage(page + 1)}>Next
                </button>
            </div>
        </>
    )
}

export default PostList