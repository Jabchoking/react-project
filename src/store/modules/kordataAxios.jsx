import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    kodata: [],
    korswiper: [],
    loding: true,
    state: null
}

export const kordata = createAsyncThunk(
    'kordeta/kordata',
    async () => {
        try {
            const res = await axios.get(`https://gist.githubusercontent.com/Jabchoking/89b047ed80935a36b3dd476b04a541ab/raw/9429041fd5beff9a47b9d048e7ef015260c28406/gistfile1.txt`)
            return res.data
        } catch (err) {
            console.log(err)
        }
    })
const kordataslice = createSlice({
    name: 'kordata',
    initialState,
    reducers: {
        useswiper(state, action) {
            let totalarr = []
            let arr = []
            state.kodata.map((i,j) => {
                if (j % action.payload === 0&&j!==0) {
                    totalarr.push(arr)
                    arr = [];
                    arr.push(i)
                } else {
                    if(state.kodata.length-1 === j){
                        arr.push(i)
                        totalarr.push(arr)
                        arr = [];
                    
                    }else{
                        arr.push(i)
                    }
                    
                }
            })
            state.korswiper = totalarr
        }
    },
    extraReducers: (bulider) => {
        bulider
            .addCase(kordata.pending, (state, action) => {
                state.state = '로딩중'
                state.loding = true
            })
            .addCase(kordata.fulfilled, (state, action) => {
                state.state = '성공'
                state.loding = false
                state.kodata = action.payload
            })
            .addCase(kordata.rejected, (state, action) => {
                state.state = '실패'
                state.loding = true
            })
    }
})

export const { useswiper } = kordataslice.actions
export default kordataslice.reducer



/* https://gist.githubusercontent.com/Jabchoking/89b047ed80935a36b3dd476b04a541ab/raw/9429041fd5beff9a47b9d048e7ef015260c28406/gistfile1.txt */