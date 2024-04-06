import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', newContact);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${id}`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
