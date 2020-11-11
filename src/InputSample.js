import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    realname: '',
    nickname: ''
  });

  const nameInput = useRef();
  const { realname, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      realname: '',
      nickname: '',
    })
    nameInput.current.focus();
  };


  return (
    <div>
      <input ref={nameInput} name="realname" placeholder="이름" onChange={onChange} value={realname} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {realname} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;