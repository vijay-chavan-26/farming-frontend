import { configureStore } from '@reduxjs/toolkit'
import LanguageSlice from './reducers/LanguageSlice'

export const store = configureStore({
  reducer: {
    lang: LanguageSlice
  },
})