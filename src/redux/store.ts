import { configureStore } from '@reduxjs/toolkit'
import { projectDetilSlice } from './projectDetil'

const rootStore = {
    projectDetil: projectDetilSlice.reducer
}

const store = configureStore({
    reducer: rootStore
})

export type RootState = ReturnType<typeof store.getState>

export default store