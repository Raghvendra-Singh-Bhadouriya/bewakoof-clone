import { createContext, useState } from "react";

export const DropContext = createContext();

export const DropProvider = ({children}) => {
    const [manHovered, setManHovered] = useState(false);
    const [womenHovered, setWomenHovered] = useState(false);
    const [mobileHovered, setMobileHovered] = useState(false);

    function manMouseEnter(){
        setManHovered(true)
    }
    function womenMouseEnter(){
        setWomenHovered(true)
    }
    function mobileMouseEnter(){
        setMobileHovered(true)
    }

    function manMouseLeave(){
        setManHovered(false)
    }
    function womenMouseLeave(){
        setWomenHovered(false)
    }
    function mobileMouseLeave(){
        setMobileHovered(false)
    }

    return(
        <DropContext.Provider value={{ manHovered, womenHovered, mobileHovered, manMouseEnter, womenMouseEnter, mobileMouseEnter, manMouseLeave, womenMouseLeave, mobileMouseLeave }}>
            {children}
        </DropContext.Provider>
    )
}