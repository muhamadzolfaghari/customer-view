import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../lib/api-url.const";
import ICustomerResult from "../interfaces/ICustomerResult";

export default function useGetCustomerQuery() {
    const [data, setData] = useState<ICustomerResult>();
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        axios.get<ICustomerResult>(API_URL).then((response) => {
            if (!response.data.ok) {
                setHasError(true);
            }

            setIsLoading(false);
            setData(response.data);
        }).catch(() => {
            setHasError(true);
            setIsLoading(false)
        });
    }, []);

    return { hasError, data, isLoading };
}