import useData from "./useData";
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const usePost = (userId: number | undefined) =>
    useData<Post>('/posts', userId ? ['users', userId, 'posts'] : ['posts'], {
        params: {
            userId
        }
    });

export default usePost;