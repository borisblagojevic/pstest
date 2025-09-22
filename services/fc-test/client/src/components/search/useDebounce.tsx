import {useEffect, useState} from "react";

export default function useDebounce<T> (value: T, buffer: number = 200): T
{
    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDebounceValue(value);
        }, buffer);

        return () => {
            clearInterval(intervalID);
        }
    }, [value, buffer]);

    return debounceValue;
}

