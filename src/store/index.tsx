import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../services/products'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import allProductsReducer from '../Pages/HomePage/ProductsSlice'

const store = configureStore({
    reducer: {
        allProducts: allProductsReducer,
        [productApi.reducerPath]: productApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store