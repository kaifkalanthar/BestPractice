import { useQuery } from 'react-query';
import http from '../service/api-url';



const useTodos = <T>(endPoint: string, key: any[]) => {
    const fetchData = () => http.get<T[]>(endPoint).then(res => res.data);
    return useQuery<T[], Error>({
        queryKey: key,
        queryFn: fetchData
    });
}

export default useTodos;