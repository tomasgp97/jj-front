import {useEffect, useRef} from "react";

export function usePrevious(status) {
    const ref = useRef();
    useEffect(() => {
        ref.current = status;
    });
    return ref.current;
}