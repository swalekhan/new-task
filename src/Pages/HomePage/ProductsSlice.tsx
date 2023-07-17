import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProducType } from "../../services/products";
import { getData } from "./ProductsApi";

export const getProductsAsync = createAsyncThunk(
    'users/fetchByIdStatus',
    async (data: string, thunkAPI) => {
        try {
            const response = await getData(data)
            return response
        } catch (err) {
            console.log(err)
        }
    }
)

interface ProductState {
    items: ProducType[];
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: ProductState = {
    items: [],
    status: 'idle',
}

const productSlice = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsAsync.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(getProductsAsync.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'succeeded'
        })
    },
})

export default productSlice.reducer