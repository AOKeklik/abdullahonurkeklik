import { axiosClient } from '@/config/axios'
import { API } from '@/config/config'
import { handleError } from '@/config/handleError'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchServices = createAsyncThunk(
    'service/fetchServices',
    async(_, {rejectWithValue}) => {
        try{
            const res = await axiosClient(`${API}/services`)
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
const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.pending, (state) => {
                state.data = {}
                state.loading = true
                state.error = null
            })
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchServices.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            });
    },
});

// ==============================================
// 5. Selectors
// ==============================================
export const selectAllData = (state) => state?.service
export const selectData = (key) => (state) => state?.service?.data?.[key]

export const selectMessage = (state) => state.service?.data?.message
export const selectLoading = (state) => state.service?.loading
export const selectError = (state) => state.service?.error


// ==============================================
// 6. Action Export
// ==============================================
export default serviceSlice.reducer