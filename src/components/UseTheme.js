import {React, useState, useEffect} from 'react'

function UseTheme() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    useEffect(() => {
        document.body.style.background = theme === "light" ? "#ffffff" : "#000000";
        document.body.style.color = theme === "light" ? "#000000" : "#ffffff";
    }, [theme])

    return { theme, toggleTheme};
  
}

export default UseTheme


