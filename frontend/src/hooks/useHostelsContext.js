import { HostelsContext } from "../context/HostelContext";
import { useContext } from "react";

export const useHostelsContext = () => {
    const context = useContext(HostelsContext)

    if(!context){
        throw Error('useHostelContext must be used inside a HostelsContextProvider')
    }

    return context
}