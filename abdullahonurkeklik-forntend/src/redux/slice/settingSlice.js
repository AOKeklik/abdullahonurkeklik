import { axiosClient } from '@/config/axios'
import { API } from '@/config/config'
import { handleError } from '@/config/handleError'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSettings = createAsyncThunk(
    'setting/fetchSettings',
    async(_, {rejectWithValue}) => {
        try{
            const res = await axiosClient(`${API}/settings`)
            return res.data
        }catch(err){
            return rejectWithValue(handleError(err))
        }
})

const initialState = {
    data: null,
    loading: false,
    error: null,
}
const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSettings.pending, (state) => {
                state.data = {}
                state.loading = true
                state.error = null
            })
            .addCase(fetchSettings.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchSettings.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            });
    },
});

// ==============================================
// 5. Selectors
// ==============================================
export const selectAllData = (state) => state.setting
export const selectData = (key) => (state) => state?.setting?.data?.[key]

export const selectMessage = (state) => state.setting?.data?.message
export const selectLoading = (state) => state.setting?.loading
export const selectError = (state) => state.setting?.error


// ==============================================
// 6. Action Export
// ==============================================
export default settingSlice.reducer