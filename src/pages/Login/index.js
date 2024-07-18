import React, { useState } from 'react';

const Login = () =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [errUsername, setErrUsername] = useState(null);
  const [errPassword, setErrPassword] = useState(null);

  const handleSubmit = () =>{
    console.log("username === ", username);
    //Kiểm tra username và password bắt buộc nhập
    //username phải có ít nhất 3 ký tự
    //Gán giá trị vào từng state error
    //Hiển thị lên giao diện dưới mỗi ô input
  }

  const usernameChange = (props) =>{
    // console.log(props.target.value)
    setUsername(props.target.value)
  }

  //Password change tương tự user name

  return (
    <div className='container'>
      <div className='col-4 offset-4'>
        <h1 className='text-danger mb-3'>{`Login`}</h1>
        {/* <form onSubmit={handleSubmit}> */}
          <div className="mb-3">
            <label className="form-label">{`Username`}</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={usernameChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">{`Password`}</label>
            <input
              type="password"
              className="form-control"
            />
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
            />
            <label className="form-check-label" htmlFor="remember">{` Remember me`}</label>
          </div>
          <button className='btn btn-primary w-100 mb-3' onClick={handleSubmit}>{`Login`}</button>
        {/* </form> */}
        <a href='/register'>{`Register`}</a>
      </div>
    </div>
  )
}

export default Login;