
import { createSlice } from "@reduxjs/toolkit"
import { CommentCardType } from "../../lib/types"

const initialState: CommentCardType[] = []

const commentSlice = createSlice({
    name:'comments', 
    initialState,
    reducers: {
        setComments: (state, action: {payload: CommentCardType[]}) => {
          return state =  action.payload
        },
        addComment: (state, action) => {
          return state =  [...state, action.payload]
        },
        removeComment: (state, action) => {
          state = state.splice(state.findIndex(e => e.id === action.payload))
        },
    }
})

export const {setComments, addComment, removeComment} = commentSlice.actions

export default commentSlice.reducer