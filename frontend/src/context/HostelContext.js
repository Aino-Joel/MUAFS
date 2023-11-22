import { createContext, useReducer } from 'react'

export const HostelsContext = createContext()

export const hostelsReducer = (state, action) => {
    switch(action.type){
        case 'SET_HOSTELS':
            return {
                hostels: action.payload
            }
        case 'CREATE_HOSTEL':
            return {
                hostels: [action.payload, ...state.hostels]
            }
        case 'DELETE_HOSTEL':
            return {
                hostels: state.Hostels.filter((h) => h._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const HostelsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(hostelsReducer, {
        Hostels: null
    })

    return(
        <HostelsContext.Provider value={{...state, dispatch}}>
            { children }
        </HostelsContext.Provider>
    )
}