import { createSlice } from "@reduxjs/toolkit";

const filteredSlice = createSlice({
  name: "filteredProducts",
  initialState: {
    products: [],
    filteredProducts: [],
    searchTerm: "",
    selectedCategory: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredProducts = state.products.filter((product) =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredProducts = state.products.filter(
        (product) => product.category === action.payload
      );
    },
    clearFilters: (state) => {
      state.searchTerm = "";
      state.selectedCategory = "";
      state.filteredProducts = state.products;
    },
  },
});

export const { setProducts, setSearchTerm, setSelectedCategory, clearFilters } =
  filteredSlice.actions;

export default filteredSlice.reducer;
