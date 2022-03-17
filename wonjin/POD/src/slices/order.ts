import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    orders: [],
    deliveries: []
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder(state, action) {
            state.orders.push(action.payload);
        },
        acceptOrder(state, action) {
        },
        rejectOrder(state, action) {
        }
    },
    extraReducers: () => {
    }
});

export default orderSlice;