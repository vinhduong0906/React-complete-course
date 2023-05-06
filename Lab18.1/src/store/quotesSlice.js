import { createSlice, configureStore } from '@reduxjs/toolkit'
export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: [],
    reducers: {
        addQuote: (state, action) => {
            state.push(action.payload);
        },
        initQuotes: (state, action) => {
            return action.payload;
        },
        sortQuotes: (state, action) => {
            return state.sort((a, b) => a.text.localeCompare(b.text))
        },
        reverseQuotes: (state, action) => {
            return state.reverse();
        }

    }
})

const { actions, reducer } = quotesSlice;

export const { initQuotes, reverseQuotes, addQuote, sortQuotes } = actions;
export default reducer;