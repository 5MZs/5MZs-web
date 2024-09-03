import React, { useState, useEffect } from 'react';
import BenefitCategory from '../BenefitCategory';
import '../../styles/benefit.css';

// BC카드에 대한 이미지 배열 예시
const BcImages = [
  { url: 'image1.jpg' },
  { url: 'image2.jpg' },
  { url: 'image3.jpg' }
];

const MyComponent = () => {
  const [history, setHistory] = useState([]);

  // fetchDepartment 함수를 호출합니다.
  const fetchDepartment = async () => {
    try {
      // 외부 API URL로 fetch 요청
      const response = await fetch('http://15.165.135.177:3000/api/v1/cardbenefitsinfo/새마을금고');
      
      // 응답 상태가 200(성공)이 아닐 경우 오류 처리
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // JSON으로 응답 데이터 변환
      const json = await response.json();
      
      // 변환된 데이터로 상태를 업데이트
      setHistory(json.history);
    } catch (error) {
      // 오류 처리
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchDepartment();
  }, []);

  // 캐러셀
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + BcImages.length) % BcImages.length);
  };

  const goToRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BcImages.length);
  };

  return (
    <>
      <div>
        <div className='benefitCategory'>
          <BenefitCategory />
        </div>
      </div>
      <div className="box">
        <div className='imageContainer'>
          <button className='btn' onClick={goToLeft}>왼</button>
          <div className='imageBox'>
            <div
              className='imageWrapper'
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {BcImages.map((image, index) => (
                <div className="cardImage" key={index}>
                  <img
                    className=''
                    style={{
                      objectFit: "contain",
                      height: "90%"
                    }}
                    src={image.url}
                    alt={`Card ${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <button className='btn' onClick={goToRight}>오</button>
        </div>
      </div>
      <div>
        {/* 데이터를 렌더링하는 부분 */}
        {history.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
};

export default MyComponent;
