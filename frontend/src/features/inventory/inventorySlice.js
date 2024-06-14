import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchInventory = createAsyncThunk('inventory/fetchInventory', async (_, { getState }) => {
  const { make, duration } = getState().inventory;
  const response = await fetch(`/api/inventory?make=${make}&duration=${duration}`);
  const data = await response.json();
  return data;
});

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    inventory: [],
    recentData: [],
    newCount: 0,
    usedCount: 0,
    cpoCount: 0,
    newMsrp: 0,
    usedMsrp: 0,
    cpoMsrp: 0,
    newInventory: { count: 0, totalMsrp: 0, avgMsrp: 0 },
    usedInventory: { count: 0, totalMsrp: 0, avgMsrp: 0 },
    cpoInventory: { count: 0, totalMsrp: 0, avgMsrp: 0 },
    make: '',
    duration: 'This month',
    status: 'idle',
    error: null
  },
  reducers: {
    setMake: (state, action) => {
      state.make = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.inventory = action.payload;
        // Additional logic to calculate counts and MSRP
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setMake, setDuration } = inventorySlice.actions;

export default inventorySlice.reducer;
