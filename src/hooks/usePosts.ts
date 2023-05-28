import useData from "./useData";
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface PageQuery {
    page: number;
    pageSize: number;
}

const usePost = (query: PageQuery) =>
    useData<Post>('/posts', [query], {
        params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize
        }
    });

export default usePost;