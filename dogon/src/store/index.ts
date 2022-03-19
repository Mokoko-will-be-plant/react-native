import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import rootReducer from './reducer';

const store = configureStore({
  //store안에서 리듀서를 연결(rootReducer)
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      return getDefaultMiddleware().concat(createDebugger());
    }
    return getDefaultMiddleware();
  },
});
export default store;

export type AppDispatch = typeof store.dispatch;
// 리덕스 툴킷에서 타입 스크립트를 쓸 때 주로 하게되는 래핑(타입 부여)
export const useAppDispatch = () => useDispatch<AppDispatch>();
