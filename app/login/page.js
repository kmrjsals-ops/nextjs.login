'use client';
import Link from 'next/link';
import { useState } from 'react';

function Login(props) { // 컴포넌트 이름은 대문자로 시작하는 것이 관례입니다.
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form), // 수정: form 객체를 문자열화하여 전달해야 합니다.
    });

    const data = await res.json();
    if (res.ok) {
      alert('로그인 성공');
      localStorage.setItem('token', data.token);
      window.location.href = '/';
    } else {
      alert(data.message || '로그인 실패');
    }
  };

  return (
    <section>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}> 
        <p>
          <label htmlFor='username'>아이디 : </label>
          <input type='text'
            id='username'
            name='username'
            placeholder='아이디를 입력하세요'
            onChange={handleChange}
            value={form.username}
            required />
        </p>
        <p>
          <label htmlFor='password'>패스워드 : </label>
          <input type='password'
            id='password'
            name='password'
            placeholder='비밀번호를 입력하세요'
            onChange={handleChange}
            value={form.password}
            required />
        </p>
        <p>
          <input type='submit' value='로그인' />
        </p>
      </form>

      <Link href='/idsearch'>아이디 찾기</Link> &#10072; &nbsp;
      <Link href='/pwsearch'>비번 찾기</Link> &#10072; &nbsp;
      <Link href='/register'>회원가입</Link>
    </section>
  );
}

export default Login;