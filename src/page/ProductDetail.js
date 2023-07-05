import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //주소창 id 페이지 숫자 가져옴

const ProductDetail = () => {
  let { id } = useParams(); //필요한 값을 추출하는데 사용
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/YENAZIGMINA/hnm/products/${id}`;
    let respons = await fetch(url); //await는 비동기화, async랑 짝지로 써야함
    let data = await respons.json();
    console.groupCollapsed(data);
    setProduct(data); //값을 받고 변경이되고 하는건 useState
  };
  useEffect(() => {
    getProductDetail();
  }, []); //한 번만 실행되도록
  // 의존성배열이 비어있다면 컴퍼넌트가 실행될 때 한 번만 함수가 실행된다

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-7 d-flex justify-content-end">
          <img src={product?.img} />
        </div>
        <div className="col-5 ps-5 d-flex flex-column gap-2">
          <div className="fw-semibold fs-4">{product?.title}</div>
          <div className="fs-5">₩ {product?.price}원</div>
          <div>{product?.choice?"💖 Conscious choice":""}</div>
          <div>
            <select class="form-select" aria-label="Default select example">
              <option selected>Size</option>
              {product?.size.length>0 &&
              product.size.map((item)=>{
                return <option value={item}>{item}</option>;
                })
              }
            </select>
          </div>
          <button className="btn btn-danger">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;