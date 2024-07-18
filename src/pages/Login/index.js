import React from 'react';

const Login = () =>{

  return (
    <div className='container text-center'>
      <h1 className='text-danger mb-3'>{`Login`}</h1>
      <a className='btn btn-primary' href='/register'>{`Register`}</a>
    </div>
  )
}

export default Login;