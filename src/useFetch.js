import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Create an abort controller to cancel fetch requests
        const abortCont = new AbortController();

        // Perform the fetch request after a timeout
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Could not fetch data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch aborted');
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                });
        }, 1000);

        // Cleanup function to abort the fetch if the component unmounts
        return () => abortCont.abort();
    }, [url]); 

    return { data, isPending, error };
};

export default useFetch;
