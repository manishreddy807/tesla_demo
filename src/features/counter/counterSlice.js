import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterApi";

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async(amount) => {
        const response = await fetchCount(amount)
        return response.data
    }
)