import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface User {
    uid: string;
    email: string | null;
    token: string;
}


const intialState: User = {
    uid: '',
    email: '',
    token: ''
}

const user = createSlice({
    name: 'user',
    initialState: intialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.token = action.payload.token;
        }
    }
})


export const { setUser } = user.actions;
export default user.reducer;