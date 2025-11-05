import { createApi, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import type { AuthLoginResponse, AuthProfileResponse, GenericSuccessResponse } from '@/types'
import { createBaseQuery, withAuthReauth } from '@/services/baseQuery'

const API_BASE_URL = 'https://dd.rangpurit.com/api/authapi'

const rawBaseQuery = createBaseQuery(API_BASE_URL)
const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = withAuthReauth(rawBaseQuery)

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    sendOtp: builder.mutation<GenericSuccessResponse & { expires_in?: number }, { phone: string }>({
      query: (body) => ({
        url: '/send-otp',
        method: 'POST',
        body,
      }),
    }),

    verifyOtp: builder.mutation<AuthLoginResponse, { phone: string; otp: string }>({
      query: (body) => ({
        url: '/verify-otp',
        method: 'POST',
        body,
      }),
    }),

    me: builder.query<AuthProfileResponse, void>({
      query: () => ({ url: '/me', method: 'GET' }),
    }),

    updateProfile: builder.mutation<GenericSuccessResponse & { user: AuthProfileResponse['user'] }, { name?: string; gender?: string; dob?: string }>({
      query: (body) => ({
        url: '/update-profile',
        method: 'POST',
        body,
      }),
    }),

    logout: builder.mutation<GenericSuccessResponse, void>({
      query: () => ({ url: '/logout', method: 'POST' }),
    }),
  }),
})

export const { useSendOtpMutation, useVerifyOtpMutation, useLazyMeQuery, useUpdateProfileMutation, useLogoutMutation } = authApi


