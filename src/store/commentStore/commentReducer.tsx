
import { createSlice } from "@reduxjs/toolkit"
import { CommentCardType } from "../../lib/types"
import { commentsPlaceholder } from "../../lib/commentsPlaceholder"

const initialState: CommentCardType[] = []

const commentSlice = createSlice({
    name:'comments', 
    initialState,
    reducers: {
        setComments: (state, action: {payload: CommentCardType[]}) => {
          console.log('state, action', state, action)
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