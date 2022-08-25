import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
      )

      if (!response.ok) {
        throw new Error("Server Error!")
      }
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  images: [],
  status: null,
  error: null,
}

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchImages.pending]: (state) => {
      state.status = "loading"
      state.error = null
    },
    [fetchImages.fulfilled]: (state, action) => {
      state.status = "resolved"
      state.images = action.payload
    },
    [fetchImages.rejected]: (state, action) => {
      state.status = "rejected"
      state.error = action.payload
    },
  },
})

export const {} = imageSlice.actions

export default imageSlice.reducer
