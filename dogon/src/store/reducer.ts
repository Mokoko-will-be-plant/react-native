import {combineReducers} from 'redux';

import userSlice from '../slices/user';
import orderSlice from '../slices/order';

const rootReducer = combineReducers({
  //rootReducer안에서 한 겹 더 들어가서 userSlice, orderSlice 연결되는 구조
  user: userSlice.reducer,
  order: orderSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
