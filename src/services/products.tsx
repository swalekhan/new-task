import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface ProducType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    "rate": number;
    "conut": number
  }
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProducType[], string>({
      query: (name) => `${name}`,
    }),
  }),
})

export const { useGetProductsQuery } = productApi

