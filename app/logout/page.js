'use client';
import {useEffect} from 'react';

export default function Logout() {

	useEffect(()=>{
		// localStorage에서 토큰값 삭제
		localStorage.removeItem('token');

		// 로그아웃 알려줌
		alert('로그아웃 되었습니다.');

		// 메인페이지로 이동
		window.location.href='/';

	},[]);//의존성 배열은 비워서 로딩시 1번만 내용 나오게 함.

	return null; //렌더링할 UI없음
}
