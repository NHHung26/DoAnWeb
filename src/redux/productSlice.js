import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productList: [],

}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setDataProduct: (state, action) => {

            state.productList = [action.payload];
        },
    }
});

// Xuất ra các actions từ reducer
export const { setDataProduct, setcartItem } = productSlice.actions;

// Export reducer để sử dụng trong store
export default productSlice.reducer;
