'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AuthUser } from '@/types'

interface AuthState {
  token: string | null
  user: AuthUser | null
}

const initialState: AuthState = {
  token: typeof window !== 'undefined' ? (localStorage.getItem('access_token') || null) : null,
  user: typeof window !== 'undefined' ? (JSON.parse(localStorage.getItem('auth_user') || 'null')) : null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; user: AuthUser }>) => {
      state.token = action.payload.token
      state.user = action.payload.user
      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', action.payload.token)
        localStorage.setItem('auth_user', JSON.stringify(action.payload.user))
      }
    },
    clearCredentials: (state) => {
      state.token = null
      state.user = null
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token')
        localStorage.removeItem('auth_user')
      }
    },
  },
})

export const { setCredentials, clearCredentials } = authSlice.actions
export default authSlice.reducer


