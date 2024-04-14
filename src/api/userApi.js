import { Token } from '@mui/icons-material';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { axiosClient } from './axiosClient';

// const baseURL = 'https://65b00c342f26c3f2139c5535.mockapi.io/api/v1';

export const loginUser = createAsyncThunk('users/login', async ({ username, password }) => {
  try {
    const usersResponse = await axiosClient.post(`/jwt/create`, { username, password });
    return {
      status: 200,
      data: { username, password, token: usersResponse.access }
    };
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
});

export const registerUser = createAsyncThunk(
  'users/register',
  async ({ username, email, password }) => {
    const response = await axiosClient.post(`/users/`, { username, email, password });

    return response;
  }
);
