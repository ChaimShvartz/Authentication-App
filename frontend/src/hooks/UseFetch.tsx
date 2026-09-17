import { useEffect, useState } from "react";

const INITIAL = { data: null, error: null, loading: true };
type StateType<T> = {
    data: T | null;
    error: string | null | unknown;
    loading: boolean;
};
interface UseFetchProps<T> {
    func: () => Promise<T>;
    enabled?: boolean;
}

const UseFetch = <T,>({ func, enabled = true }: UseFetchProps<T>) => {
    const [state, setState] = useState<StateType<T>>(INITIAL);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setState(INITIAL);
                const data = await func();
                setState({ data, error: null, loading: false });
            } catch (error) {
                setState({ data: null, error, loading: false });
            }
        };
        if (!enabled) return;
        fetchData();
    }, [func, enabled]);
    return state;
};

export default UseFetch;
