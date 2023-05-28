import { useQuery } from '@tanstack/react-query';
import http from '../service/api-url';
import { AxiosRequestConfig } from 'axios';

const useData = <T>(endPoint: string, key: any[], requestConfig?: AxiosRequestConfig) => {
    const controller = new AbortController();
    const fetchData = () =>
        http.get<T[]>(endPoint,
            { signal: controller.signal, ...requestConfig })
            .then(res => res.data);
    return useQuery<T[], Error>({
        queryKey: key,
        queryFn: fetchData,
        staleTime: 10 * 1000
    });
}

export default useData;