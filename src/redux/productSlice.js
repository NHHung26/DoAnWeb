import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: "",
    name_product: "",
    the_tich: "",
    gia: "",
    so_luong: "",
    image: "",
    nong_do: "",
    nsx: "",
    mo_ta: ""
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProduct: (state, action) => {
            console.log(action.payload.data)
            //    state.user =action.payload.data
            state.name_product = action.payload.name_product
            state.id = action.payload.product.id
            state.the_tich = action.payload.the_tich
            state.image = action.payload.user.image
            state.gia = action.payload.gia
            state.gia = action.payload.nong_do
            state.gia = action.payload.so_luong
            state.nsx = action.payload.nsx

        },
    }
});

// Xuất ra các actions từ reducer
export const { getProduct } = productSlice.actions;

// Export reducer để sử dụng trong store
export default productSlice.reducer;
