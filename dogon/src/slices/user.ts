import {createSlice} from '@reduxjs/toolkit';

// userSlice안의 state에 접근하려면 state.user.name 이런 식으로 접근 ex) useSelector((state: RootState) => !!state.user.email);

// action: state를 바꾸는 행위/동작
// dispatch: 그 액션을 실제로 실행하는 함수
// reducer: 액션이 실제로 실행되면 state를 바꾸는 로직

// userSlice의 모든 상태값들을 저장하는 중앙 저장소
const initialState = {
  name: '',
  email: '',
  accessToken: '',
  money: 0,
};
const userSlice = createSlice({
  //slice의 이름
  name: 'user',
  //초기상태
  initialState,
  //동기액션 인데 엄밀히 말해서 여기는 액션이 아니라 리듀서다. 실질적인 액션은 SignIn.tsx 같은 곳에 dispatch하는 곳에 있다.
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
    },
    setAccessToken(state, action) {
      //데이터가 여러개 인 경우 위의 setUser처럼 객체로 묶고, 데이터가 하나라면 그냥 action.payload에 그냥 보내준다.
      state.accessToken = action.payload;
    },
    setMoney(state, action) {
      state.money = action.payload;
    },
  },
  //비동기 액션
  extraReducers: builder => {},
});

export default userSlice;
