import { createContext, useEffect, useState } from 'react';

export const DarkModeConText = createContext(); //createContext APi

export function DarkModeProvider({children}){
    const storedDarkMode = localStorage.getItem('DarkMode');
    const [DarkMode , setDarkMode] = useState(storedDarkMode === 'true');
    const toggleDarkMode = () =>{
        setDarkMode((prevEvent)=>{
            const newDarkMode = !prevEvent;
            localStorage.setItem('DarkMode' , newDarkMode.toString());
            return newDarkMode;
        });
    }

    useEffect(()=>{
        document.body.className = DarkMode === true ? 'dark' : 'light';
    },[DarkMode]);

    return <DarkModeConText.Provider
        value={{DarkMode, toggleDarkMode}}>{children}
        </DarkModeConText.Provider>
    
}


