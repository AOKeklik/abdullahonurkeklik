import { configureStore } from '@reduxjs/toolkit'

import settingSlice from '@/redux/slice/settingSlice'
import serviceSlice from '@/redux/slice/serviceSlice'

export const store = configureStore({
    reducer: {
        setting: settingSlice,
        service: serviceSlice,
    },
})