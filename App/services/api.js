import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://411z282v69.execute-api.us-east-1.amazonaws.com/dev',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState()).authentication?.token

      headers.set('Content-Type', 'application/json')

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  endpoints: () => ({})
})