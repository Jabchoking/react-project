import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState ={
    billboarddata:[],
    loding : true,
    state : null
}

export const billboarddata = createAsyncThunk(
    'billboarddata/billboarddata',
    async()=>{
        try {
            const res = await axios.get(`https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json`)
        return res.data
    }catch (err){
        console.log(err)
    }
    })
const billboarddataslice = createSlice({
    name:'billboarddata',
    initialState,
    reducers:{},
    extraReducers:(bulider)=>{
        bulider
        .addCase(billboarddata.pending, (state,action)=>{
            state.state = '로딩중'
            state.loding = true
        } )
        .addCase(billboarddata.fulfilled, (state,action)=>{
            state.state = '성공'
            state.loding = false
            state.billboarddata = action.payload
        } )
        .addCase(billboarddata.rejected, (state,action)=>{
            state.state = '실패'
            state.loding = true
        } )
    }
})

// export const {} = axiosslice.actions
export default billboarddataslice.reducer