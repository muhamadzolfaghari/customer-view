import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../lib/api-url.const";
import ICustomerResult from "../interfaces/ICustomerResult";

export default function useGetCustomerQuery() {
    const [data, setData] = useState<ICustomerResult>();
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        axios.get<ICustomerResult>(API_URL).then((response) => {
            if (!response.data.ok) {
                setError(true);
            }

            setIsLoading(false);
            setData(response.data);
        }).catch(() => {
            setError(true);
            setIsLoading(false)
        });
    }, []);

    return { error, data, isLoading };
}