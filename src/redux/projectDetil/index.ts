import { createSlice } from '@reduxjs/toolkit'
import { projectDetilReducer } from './reducer'
import applist from '../../assets/json/appList.json'

export interface ProjectDetil {
    detil: {path: string, id: string}[],
}

const stateValue : ProjectDetil = {
    detil: []
}


applist.appList.forEach(value => {
    const obj = {
        path: `https://www.azhmau.top/img/showApp/${value.title}/${value.picName}`,
        id: value.title
    }
    
    stateValue.detil.push(obj)
})

export const projectDetilSlice = createSlice({
    name: 'projectDetil',
    initialState: stateValue,
    reducers: {
        getProjectDetil: projectDetilReducer
    }
})

export const { getProjectDetil } = projectDetilSlice.actions