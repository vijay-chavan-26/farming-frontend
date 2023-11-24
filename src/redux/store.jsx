import { configureStore } from '@reduxjs/toolkit'
import LanguageSlice from './reducers/LanguageSlice'
import UserSlice from './reducers/User'

export const store = configureStore({
  reducer: {
    lang: LanguageSlice,
    user: UserSlice
  },
})