import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICard } from "@shared/ui/Card/Card";

interface SearchState {
  items: ICard[];
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  items: [],
  loading: false,
  error: null,
};

// thunk для загрузки
export const fetchItems = createAsyncThunk<
  ICard[],
  void,
  { rejectValue: string }
>("search/fetchItems", async (_, { rejectWithValue }) => {
  try {
    const res = await fetch(
      "https://68beeaf29c70953d96ee2f4b.mockapi.io/cards"
    );
    if (!res.ok) {
      return rejectWithValue("Ошибка сети или сервера");
    }
    return (await res.json()) as ICard[];
  } catch (err) {
    console.log(err);
    return rejectWithValue("Ошибка соединения");
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // загрузка началась
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // успех
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      // ошибка
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Неизвестная ошибка";
      });
  },
});

export default searchSlice.reducer;
