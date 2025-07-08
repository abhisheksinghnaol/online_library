import { createSlice } from '@reduxjs/toolkit';
import dummyBooks from '../data/dummyBooks';

const booksSlice = createSlice({
  name: 'books',
  initialState: dummyBooks,
  reducers: {
    addBook: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
