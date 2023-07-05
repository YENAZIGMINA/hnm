import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar =({authenticate, setAuthenticate})=> {
    const navigate=useNavigate();
    const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Hone",
    "Sale",
    "지속가능성성"
    ];


  const gotoLogin=()=>{
    navigate('/login');
  }
  const gotoMain=()=>{
    navigate('/');
  }
  const search=(event)=>{
    //console.log(event.key)
    if(event.key == 'Enter'){
      let keyword = event.target.value; // target.value -> 사람들이 작성한 글
      console.log(keyword)
      navigate(`/?q=${keyword}`) //쿼리문 시작할때 앞쪽에 ?q= 작성, ✔주소창에 작성한 글자 들어감
    }
  }

  return (
    <div className="container mt-5">
        <div className="cursor d-flex justify-content-end align-items-center" onClick={gotoLogin}>
            <i className="fas fa-user"></i>
            {authenticate?(
              <div onClick={()=>{setAuthenticate(false)}}>
                <span>로그아웃</span>
              </div>
            ):(
              <div onClick={()=>{setAuthenticate(true)}}>
                <span>로그인</span>
              </div>
            )}
        </div>
        <div className='text-center'>
            <img
            onClick={gotoMain} 
            width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/220px-H%26M-Logo.svg.png" />
        </div>
        <div className='d-flex mt-3'>
            <ul className='d-flex flex-grow-1 justify-content-center align-items-center'>
                {menuList.map((item)=>{
                    return <li key={item} className='px-1'>{item}</li>
                })}
            </ul>
            <div>
                <i className="fas fa-search"></i>
                <input type="fpahsktext" onKeyDown={(event)=>search(event)}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar