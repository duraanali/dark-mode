import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage"

export function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode");
    useEffect(() => {
        if (darkMode === true) {
            document.body.classList.add("dark-mode");
            console.log('Dark mode added')
        }
        else {
            document.body.classList.remove("dark-mode");
            console.log('Dark mode removed')
        };

    }, [darkMode]);

    return [darkMode, setDarkMode]
}