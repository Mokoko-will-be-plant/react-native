# seminar

매주 일요일 14시

1. 강의 학습 내용 공유
2. 개발중 겪은 오류 상황과 해결 방법 공유

# Week 1

# 1. 스타일 시트

<img width="400" heigth="200" src="https://user-images.githubusercontent.com/82315118/156907524-3769d496-c002-4ad8-a9f7-13dc73f52fa5.png" />

# 2. 네비게이션 종류

스택 네비게이션, 탭 네비게이션, 드로어 네비게이션 각각 네비게이션들이 뭔지 알아보자

> https://github.com/PsmD/study/blob/main/React%20native/Navigation.md

# 3. 자료구조 stack과 queue가 뭔지 확인해보자

- 스택이란?

스택(stack)이란 쌓아 올린다는 것을 의미.

따라서 스택 자료구조라는 것은 책을 쌓는 것처럼 차곡차곡 쌓아 올린 형태의 자료구조.

- 스택의 특징

스택은 같은 구조와 크기의 자료를 정해진 방향으로만 쌓을수 있고, top으로 정한 곳을 통해서만 접근할 수 있다. top에는 가장 위에 있는 자료는 가장 최근에 들어온 자료를 가리키고 있으며, 삽입되는 새 자료는 top이 가리키는 자료의 위에 쌓이게 된다. 스택에서 자료를 삭제할 때도 top을 통해서만 가능하다. 스택에서 top을 통해 삽입하는 연산을 'push' , top을 통한 삭제하는 연산을 'pop'이라고 한다.

스택은 시간 순서에 따라 자료가 쌓여서 가장 마지막에 삽입된 자료가 가장 먼저 삭제된다는 구조적 특징을 가지게 된다.

이러한 스택의 구조를 후입선출(LIFO, Last-In-First-Out) 구조이라고 한다.

---

- 큐(Queue)란?

Queue 의 사전적 의미는 1. (무엇을 기다리는 사람, 자동차 등의) 줄 , 혹은 줄을 서서 기다리는 것을 의미한다.
따라서 일상생활에서 놀이동산에서 줄을 서서 기다리는 것, 은행에서 먼저 온 사람의 업무를 창구에서 처리하는 것과 같이
선입선출(FIFO, First in first out) 방식의 자료구조를 말한다.

- 큐의 특징

정해진 한 곳(top)을 통해서 삽입, 삭제가 이루어지는 스택과는 달리 큐는 한쪽 끝에서 삽입 작업이, 다른 쪽 끝에서 삭제 작업이 양쪽으로 이루어진다. 이때 삭제연산만 수행되는 곳을 프론트(front), 삽입연산만 이루어지는 곳을 리어(rear)로 정하여 각각의 연산작업만 수행된다. 이때, 큐의 리어에서 이루어지는 삽입연산을 인큐(enQueue) 프론트에서 이루어지는 삭제연산을 디큐(dnQueue)라고 부른다.

1. 큐의 가장 첫 원소를 front / 가장 끝 원소를 rear
2. 큐는 들어올 때 rear로 들어오지만 나올때는 front부터 빠지는 특성
3. 접근방법은 가장 첫 원소와 끝 원소로만 가능
4. 가장 먼저 들어온 프론트 원소가 가장 먼저 삭제

즉, 큐에서 프론트 원소는 가장 먼저 큐에 들어왔던 첫 번째 원소가 되는 것이며, 리어 원소는 가장 늦게 큐에 들어온 마지막 원소가 되는 것이다.

---

# Week 2

1. 클래스형에서 함수형으로 넘어온 이유, hooks란 무엇인가

---

## @일반적 차이

- 클래스형 :

  - state, lifeCycle 관련 기능사용 가능하다.
  - 메모리 자원을 함수형 컴포넌트보다 조금 더 사용한다.
  - 임의 메서드를 정의할 수 있다.

- 함수형 :
  - state, lifeCycle 관련 기능사용 불가능 [Hook을 통해 해결 됨]
  - 메모리 자원을 함수형 컴포넌트보다 덜 사용한다.
  - 컴포넌트 선언이 편하다.

**함수형이 클래스보다 후에 나왔기 때문에 더 편한 것은 사실이다. 그러나 과거 클래스 컴포넌트 사용한 프로젝트가 있다. 유지보수를 위해서 알아둘 필요가 있다.**

## @여기서 lifeCycle이란?

프로그래밍에서 Lifecycle은 어떤 애플리케이션이 실행되고 종료되는 과정을 의미한다. 특히 React에서는 애플리케이션의 실행부터 종료까지 과정을 세밀하게 나누어서 컨트롤할 수 있으며, 리액트는 MVC 패턴 중 View에 해당하는 라이브러리다. 그러다 보니 각각의 컴포넌트는 컴포넌트의 수명주기가 존재한다.  
컴포넌트의 수명은 일반적으로 페이지에서 렌더링 되기 전 준비 과정에서 시작해 페이지에서 사라질 때 끝난다.

라이프 사이클은 크게 3가지 유형으로 나눌 수 있는데 생성이 될 때, 업데이트할 때, 제거할 때이다.  
리엑트에서는 이러한 작업을 **Mount, Update, Unmount** 라고 한다.

<img width="700" heigth="600" src= "https://kyun2da.dev/static/69e54fe57da139eabae168b5e8304af4/01645/lifecycle.png" />

> LifeCycle 메서드

- Mount

  - constructor() = 생성자 메서드로 컴포넌트가 Mounting될 때 단 한번만 실행된다. 즉, 해당 컴포넌트가 마운트 되기 전에 호출되며, 주로 state값을 초기화 하거나 이벤트 처리 메서드를 바인딩하는데 사용된다.
  - static getDerivedStateFromProps() = 이 메서드는 최초 마운트 시와 갱신 시 모두에서 render() 메서드를 호출하기 직전에 호출된다. state를 갱신하기 위한 객체를 반환하거나, null을 반환하여 아무 것도 갱신하지 않을 수 있다. 즉, props로 받아온 값을 state로 동기화 하는 작업을 해줘야하는 경우 사용한다.
  - render() = 해당 메서드는 클래스 컴포넌트에서 반드시 구현되어야 하는 메서드이다. 여기에서 this.props와 this.state의 값을 활용할 수 있으며, 다음과 같은 요소를 반환할 수 있다. 한가지 주의할 점은 render() 내부에서는 setState를 통해 state 값을 변경해서는 절대 안된다.
  - componentDidMount() = 이 메서드는 컴포넌트가 렌더링된 직후, 즉 컴포넌트가 화면에 나타나게 되었을 때 호출된다. 그래서 외부 라이브러리 연동, 컴포넌트에 필요한 데이터 요청, DOM에 관련된 작업(스크롤 설정, 크기 읽어오기)을 할때 주로 사용된다. 우리가 만든 컴포넌트가 브라우저에 나타난 시점에 어떠한 작업을 행하고 싶을때 한다.

- Update

  - static getDerivedStateFromProps()
  - shouldComponentUpdate() = 매 state의 변화마다 다시 렌더링이 수행되는 기본동작을 특정 로직을 통해 렌더링을 방지하는 목적으로 사용하는 메서드이다. 즉 불필요한 곳에서는 렌더를 하지않게끔 설정해주는 성능 최적화만을 위한 곳이다.
  - render()
  - getSnapshotBeforeUpdate() = v16.3 이후에 등장한 메서드로, render()를 호출한 후 DOM 변화가 일어나기 직전의 DOM 상태를 가져오고, 여기서 리턴하는 값은 componentDidUpdate()에서 3번째 파라미터를 통해 받아올 수 있게 된다. 그래서 이 메서드가 있을 경우엔 반드시 componentDidUpdate() 메서드도 포함해줘야 한다.
  - componentDidUpdate() = DOM에서 컴포넌트가 업데이트 된 후, 즉 render()를 호출하고난 다음에 발생한다. 파라미터를 통해 이전의 값인 prevProps와 prevState를 조회할 수 있다. snapshot은 getSnapshotBeforeUpdate()에서 반환한 값으로 받아오는 파라미터이다.

- Unmount
  - componentWillUnmount() = 컴포넌트가 사라지는 과정에서 호출되는 메서드로, 메서드 내에서 타이머 제거, 네트워크 요청 취소 같은 작업들을 수행할 수 있다. 즉 컴포넌트가 더이상 필요하지 않게되어 제거되기 직전에 호출된다.

Mount는 DOM이 생성되고 웹 브라우저 상에서 나타나는 것을 뜻한다.
Update는 다음과 같은 4가지 상황에서 발생한다.

- Props가 바뀔 때
- state가 바뀔 때
- 부모 컴포넌트가 리렌더링 될 때
- this.forceUpdate로 강제로 렌더링을 할 때이다.

Unmount는 DOM에서 제거되는 것을 뜻한다.

- Class 기반 lifecycle의 예

```
import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    console.log("constructor");
  }
  componentWillMount() {
    console.log("will mount!");
  }
  componentDidMount() {
    console.log("Did mount!");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>ukcasso
        </h1>
      </div>
    );
  }
}

export default App;
```

## @Hooks란?

React 16.8버전에 새로 추가된 기능으로 state, component에 대한 것들을 바꿔놓았다. 예를 들면 function component에서 state을 가질 수 있게 된 것. 만일 앱을 react hook을 사용하여 만든다면 class component, render 등을 안해도 된다는 뜻이고,  
 더 간단하게 설명하자면 기존 React의 Class 활용한 Component 설정 방법을 개선한 것이다. **최근 트렌드가 class형에서 함수형으로 넘어가게 된 결정적인 원인이자 class형의 단점은 세 가지 정도로 정리할 수 있다.**

1. 계층이 너무 많아진다.

2. Component가 너무 복잡해진다.

3. Class를 Component로 쓰면 bind, this를 쓰는데 이 방식은 컴퓨터에게는 복잡한 작업을 수행하게 하고 사람에게는 혼란을 발생시킨다.

위 세 가지 단점을 종합해서 말하자면 가독성이 떨어진다고 할 수 있다. 따라서 react hook은 Class 형태였던 Component를 function을 통해 만들 수 있게 해주는 API이다.

**즉, 모든 것은 하나의 function이 되는 것이며, 함수형 프로그래밍이 가능해지는 것이다.**

React Hook를 사용할 때에는 특별한 경우를 제외하고는 거의 두 가지만 사용한다. useState()와 useEffect()가 바로 그것. useState는 state관리에 사용되어지고 useEffect는 lifecycle관리에 사용되어진다.

- Hooks 기반 lifecycle의 예

```
import './App.css';
import React, { useState, useEffect } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 같은 방식으로
  useEffect(() => {
    // 브라우저 API를 이용하여 업데이트
    console.log("component did mount with useEffect!");
  });
  return (
    <div>
      <h2>You clicked {count} times.</h2>
      <button onClick={() => {setCount(count + 1)}}>
        Click me
      </button>
    </div>
  );
};

export default App;
```

react의 useEffect는 componentDidMount와 componentDidUpdate, componentWillUnmount가 합쳐진 것이라고 생각하는 것이 좋다. 하지만 componentDidMount, componentDidUpdate와는 달리 effect는 브라우저가 화면을 업데이트하는 것을 차단하지 않는다. 때문에 더 향상된 반응성을 보여준다.

2. Redux 사용 부분 주석 달아서 PR날릴것

3. 세미나 내용 정리 (payload, flux 아키텍쳐)

4. useCallback vs useMemo

5. 강의 진도보다, 검색과 함께 이해해보려고 노력하고, 이해 안 되는 부분을 구체적으로 주석 달아둘 것
