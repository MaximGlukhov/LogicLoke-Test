import { useEffect, useState } from "react";

export const useGetData = (url: string) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [url]);

    return { data, isLoading, isError };
};
