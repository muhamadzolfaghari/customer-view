import { SetStateAction, useEffect, useRef, useState } from "react";
import ICustomerResult from "../interfaces/ICustomerResult";
import { API_URL } from "../lib/api-url.const";
import axios from 'axios';

export default function useGetCustomerQuery() {
    const [data, setData] = useState<ICustomerResult>();
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const isFirstRender = useRef(true);

    useEffect(() => {
        // When the render is happened twice the process should be break.
        if (!isFirstRender.current) {
            return;
        }

        setHasError(false);
        setIsLoading(true);

        // First rending is finished so this flag should be false to avoid duplicate request.
        isFirstRender.current = false;

        axios.get<ICustomerResult>(API_URL).then((response) => {
            if (!response.data.ok) {
                setHasError(true);
            }

            setHasError(false);
            setIsLoading(false);
            setData(response.data);
        }).catch(() => {
            setHasError(true);
            setIsLoading(false)
        });
    }, []);

    return { hasError, data, isLoading };
}