import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../lib/api-url.const";
import ICustomerResult from "../interfaces/ICustomerResult";

function handleResponse() {

}

function handleError() {

}

export default function useGetCustomerQuery() {
    const [data, setData] = useState<ICustomerResult>();
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get<ICustomerResult>(API_URL).then((response) => {
            if (!response.data.ok) {
                setError(true);
            }

            setIsLoading(false);
            setData(response.data);
        }).catch((error) => {
            setError(true);
            setIsLoading(true)
        });
    }, []);

    return { error, data, isLoading };
}