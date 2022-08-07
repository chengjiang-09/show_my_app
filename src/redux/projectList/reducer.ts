import { PayloadAction } from '@reduxjs/toolkit'
import applist from '../../assets/json/appList.json'

export const projectListReducer = (state:any, payload: PayloadAction<string>) => {

    const newState = state

    switch(payload.payload){
        case "bookStore":
            newState.bookStore = applist.bookStore
            break
        case "myCenter":
            newState.myCenter = applist.myCenter
            break
        default:
            break
    }
    
    return newState
}

