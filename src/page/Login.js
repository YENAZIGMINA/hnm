import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigete=useNavigate();
  const loginUser =(e)=> {
    e.preventDefault();
    setAuthenticate(true);
    navigete("/");
  };
  return (
    <div className='container mt-5'>
      <form onSubmit={(e) => loginUser(e)}> {/* 명령문 한 줄 일땐 return 지우고 이렇게 작성가능 */}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login