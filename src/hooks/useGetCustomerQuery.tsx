import { useEffect, useRef, useState } from "react";
import ICustomerResult from "../interfaces/ICustomerResult";
import { API_URL } from "../lib/api-url.const";
import axios from 'axios';

/**
 * This hook is responsible to hold request from customer web API.
 * This result insist of three values:
 * 
 * 1- data
 * Data is related to customer and the interface to show that is ICustomerResult
 * 
 * 2- hasError
 * Whenever any exception is occurred the error should be shown on the page.
 * 
 * 3- isLoading 
 * This can lead app to show a loading as let user to be waiting to get details from the web API.
 * @returns result
 */
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