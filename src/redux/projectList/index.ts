import { createSlice } from '@reduxjs/toolkit'
import { projectListReducer } from './reducer'

let projectList:any = {}

export const projectListSlice = createSlice({
    name:"projectName",
    initialState: projectList,
    reducers: {
        getProjectList: projectListReducer
    }
})

export const { getProjectList } = projectListSlice.actions