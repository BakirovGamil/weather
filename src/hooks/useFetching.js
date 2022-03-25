import { useState } from "react";

function useFetching(callback) {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    async function fetching() {
        try {
            setIsLoading(true);
            await callback();
            setError("");
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [isLoading, fetching, error]
}

export default useFetching;