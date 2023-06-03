import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
}

// eslint-disable-next-Line
const handleFulfilled = (state) => {
  // handleFulfilled(state);
  state.isLoading = false;
  state.error = null;
}

const handleFulfilledFetch = (state, { payload }) => {
  state.items = payload;
}

const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
}

const handleFulfilledDelete = (state, { payload }) => {
  const index = state.items.findIndex(
  contact => contact.id === payload.id);
  state.items.splice(index, 1);
}

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
}
      
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContact.pending]: handlePending,
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  //   },
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.pending]: handlePending,
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //   },
  //   [deleteContact.rejected]: handleRejected,
  // },

   extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ), handlePending
     )
     .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ), handleRejected
     )
     .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ), handleFulfilled
      )
  },
});

export const contactsReducer = contactsSlice.reducer;