import {createContext, useContext} from "react"

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
}); 

//merging context and provider files using the code below
export const ThemeProvider = ThemeContext.Provider; 


//incorporating all context in the custom hook below to be used by all components
export default function useTheme() {
    return useContext(ThemeContext); 
}