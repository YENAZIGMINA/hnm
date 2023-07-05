import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProductCard=({item})=>{
  const navigete=useNavigate();
  const showDetail=()=>{
    navigete(`/product/${item.id}`); //db.json의 id값 불러오기
  }
  return (
    <div onClick={showDetail}>
        <img src={item?.img} />  {/* ?는 item있으면? img를 넣어라는 뜻 */}
        <div>{item.choice==true?"Conscious choice":""}</div>
        <div>{item.title}</div>
        <div>₩{item.price}원</div>
        <div>{item.new==true? "신제품":""}</div>
    </div>
  )
}

export default ProductCard