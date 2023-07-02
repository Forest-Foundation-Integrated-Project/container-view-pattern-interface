import { api } from './api'

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    listProducts: builder.mutation({
      query: (params) => ({
        url: '/products',
        method: 'GET',
        params: params
      })
    }),
    protected: builder.mutation({
      query: () => 'protected'
    })
  }),
  overrideExisting: false
})

export const {
  useListProductsMutation,
} = productApi