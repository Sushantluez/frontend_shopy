import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constant';






export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Product'],

  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: (data) => ({
        url: '/',
        method: 'GET'
      }),
      providesTags: ['Product']
    }),

    getProductById: builder.query({
      query: (query) => ({
        url: `/api/product/${query}`,
        method: 'GET'
      }),
      providesTags: ['Product']
    }),

    addProduct: builder.mutation({
      query: (query) => ({
        url: '/api/add/product',
        body: query.body,
        method: 'POST',
        headers: {
          Authorization: query.token
        }
      }),
      invalidatesTags: ['Product']
    }),

    updateProduct: builder.mutation({
      query: (query) => ({
        url: `/api/update/product/${query.id}`,
        body: query.body,
        params: {
          oldImage: query.imagePath
        },
        headers: {
          Authorization: query.token
        },
        method: 'PATCH',
      }),
      invalidatesTags: ['Product']
    }),

    reviewProduct: builder.mutation({
      query: (query) => ({
        url: `/api/add/review/${query.id}`,
        body: query.body,
        headers: {
          Authorization: query.token
        },
        method: 'PATCH',
      }),
      invalidatesTags: ['Product']
    }),

    removeProduct: builder.mutation({
      query: (query) => ({

        url: `/api/remove/product/${query.id}`,
        method: 'DELETE',
        headers: {
          Authorization: query.token
        }

      }),
      invalidatesTags: ['Product']
    }),





  }),
})


export const { useGetAllProductsQuery, useAddProductMutation, useGetProductByIdQuery, useUpdateProductMutation, useRemoveProductMutation, useReviewProductMutation } = productApi