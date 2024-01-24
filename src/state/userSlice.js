import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    'name': null,
    'email': null,
    'token': null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSet(state, action) {
            state.name = action.payload.name
            state.email = action.payload.email
            state.token = action.payload.token
        },
        userClear(state, action) {
            state.name = null
            state.email = null
            state.token = null
        },
    }
})

export const { userSet, userClear } = userSlice.actions
export default userSlice.reducer