import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState ={
    kodata:[],
    loding : true,
    state : null
}

export const kordata = createAsyncThunk(
    'kordeta/kordata',
    async()=>{
        try {
            const res = await axios.get(`https://gist.githubusercontent.com/Jabchoking/89b047ed80935a36b3dd476b04a541ab/raw/9429041fd5beff9a47b9d048e7ef015260c28406/gistfile1.txt`)
        return res.data
    }catch (err){
        console.log(err)
    }
    })
const kordataslice = createSlice({
    name:'kordata',
    initialState,
    reducers:{},
    extraReducers:(bulider)=>{
        bulider
        .addCase(kordata.pending, (state,action)=>{
            state.state = '로딩중'
            state.loding = true
        } )
        .addCase(kordata.fulfilled, (state,action)=>{
            state.state = '성공'
            state.loding = false
            state.kodata = action.payload
        } )
        .addCase(kordata.rejected, (state,action)=>{
            state.state = '실패'
            state.loding = true
        } )
    }
})

// export const {} = axiosslice.actions
export default kordataslice.reducer



/* https://gist.githubusercontent.com/Jabchoking/89b047ed80935a36b3dd476b04a541ab/raw/9429041fd5beff9a47b9d048e7ef015260c28406/gistfile1.txt */