import { configureStore } from '@reduxjs/toolkit'
import { projectDetilSlice } from './projectDetil'
import { projectListSlice } from './projectList'

const rootStore = {
    projectDetil: projectDetilSlice.reducer,
    projectList: projectListSlice.reducer
}

const store = configureStore({
    reducer: rootStore
})

export type RootState = ReturnType<typeof store.getState>

export default store