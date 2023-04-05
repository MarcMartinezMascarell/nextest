import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            let item = window.localStorage.getItem(key);
            item = JSON.parse(item)
            if(item.hasOwnProperty("value") && Object.keys(item).length === 1) {
                return item.value
            }
            return item ? item : initialValue
        } catch (error) {
            console.error(error)
            return initialValue
        }
    });

    const setValue = (value) => {
        try {
            let valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            if (typeof window !== "undefined") {
                if(typeof valueToStore !== "Object") {
                    valueToStore = JSON.stringify({value: valueToStore})
                } else {
                    valueToStore = JSON.stringify(valueToStore)
                }
                window.localStorage.setItem(key, valueToStore);
              }
        } catch (error) {
            console.log(error)
        }
    }

    return {
        storedValue,
        setValue
    }
}