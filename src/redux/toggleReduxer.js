import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isDarkMode: false,
    
}

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: (state, action) => {
            state.isDarkMode = !state.isDarkMode;
        },
    }
})

export const { toggleDarkMode } = darkModeSlice.actions;
export const selectDarkMode = (state) => state.darkMode.isDarkMode;

export default darkModeSlice.reducer;