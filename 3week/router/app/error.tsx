"use client";

// 1. error 컴포넌트는 컴포넌트의 에러가 발생할 경우 처리되는 컴포넌트
// 2. 경로마다 중첩해서 지정 가능
// 3. 가장 가까운 경로의 error 컴포넌트가 실행된다.
// 4. error 컴포넌트는 error와 reset을 props로 받아서 사용한다.
// 5. error는 객체고, reset은 함수이다.
// 6. reset함수를 실행하면, 이전 컴포넌트를 다시 불러온다.
// 7. 단, 이전 컴포넌트가 "클라이언트 컴포넌트"일 경우만 가능

export default function error() {
  return (
    <>
      <h1>error Component</h1>
    </>
  );
}
