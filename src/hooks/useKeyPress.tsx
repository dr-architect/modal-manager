import { useEffect } from "react";

export const useKeypress = (key: string, action: () => void, deps: any[]) => {
    useEffect(() => {
        const onKeyup = (e: KeyboardEvent) => {
            if (e.key === key) action();
        }
        window.addEventListener("keyup", onKeyup);
        return () => window.removeEventListener("keyup", onKeyup);
    }, deps);
}
