import { createSlice } from '@reduxjs/toolkit'

const recipeSlice = createSlice({
  name: 'recipeSlice',
  initialState: {
    recipe: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    fetchStart: (state) => {
      return { ...state, isLoading: true }
    },
    fetchSuccess: (state, action) => {
      return { ...state, isLoading: false, recipe: action.payload }
    },
    fetchFail: (state, action) => {
      return { ...state, isLoading: false, error: action.payload }
    },
  },
})

export const { fetchStart, fetchSuccess, fetchFail } = recipeSlice.actions
export default recipeSlice.reducer
