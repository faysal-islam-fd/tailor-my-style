import { fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { clearCredentials } from '@/slices/authSlice'

export const createBaseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as { auth?: { token?: string | null } }
      const token = state?.auth?.token
      if (token) headers.set('authorization', `Bearer ${token}`)
      headers.set('content-type', 'application/json')
      return headers
    },
  })

export const withAuthReauth = (
  baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>
): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =>
  async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions)
    if (result && 'error' in result && result.error && (result.error.status === 401 || result.error.status === 403)) {
      api.dispatch(clearCredentials())
    }
    return result
  }


