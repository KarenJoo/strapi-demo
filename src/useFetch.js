import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [Error, setError] = useState(null);

   
    useEffect(() => {
        setTimeout(() => { 
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch data');
            }
            return res.json()
        })
        .then(data => {
            console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
        })
    }, 1000);
    }, [url]); 

    return { data, isPending, Error }
}

export default useFetch;