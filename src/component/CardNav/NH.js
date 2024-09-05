import React, { useState, useEffect } from 'react';
import BenefitCategory from '../BenefitCategory';
import '../../styles/benefit.css';
import { useNavigate } from 'react-router-dom';

const NH = () => {  // 컴포넌트 이름을 대문자로 시작하도록 변경
  const [nhValue, setNHValues] = useState([]); // 변수 이름을 일관되게 유지
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  // 데이터 패칭 함수
  const fetchDepartment = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'http://15.165.135.177:3000/api/v1/cardbenefitsinfo/NH'
      );
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const json = await response.json();
      
      console.log('Fetched data:', json); // 데이터 구조 확인
      setNHValues(json || []); // `json`이 실제 데이터 배열인지 확인
    } catch (error) {
      setError(error.message);
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  function goMap(benefit) {
    // benefit 객체를 그대로 상태로 전달
    navigate('../map', {
      state: benefit
    });
  }

  useEffect(() => {
    fetchDepartment();
  }, []);

  useEffect(() => {
    console.log('NHValue:', nhValue); // 데이터가 제대로 업데이트되었는지 확인
  }, [nhValue]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToLeft = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + nhValue.length) % nhValue.length
    );
  };

  const goToRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % nhValue.length);
  };

  if (loading) 
    return <p>Loading...</p>;
  if (error) 
    return <p>Error: {error}</p>;

  return (
    <>
      <div>
        <div className='benefitCategory'>
          <BenefitCategory />
        </div>
      </div>
      <div className="box">
        <div className='imageContainer'>
          <button className='btn' onClick={goToLeft}> &lt;</button>
          <div className='imageBox'>
            <div
              className='imageWrapper'
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}>
              {
                nhValue.map((item, index) => (
                  <div className="cardImage" key={index}>
                    <img
                      className=''
                      style={{
                        objectFit: "contain",
                        height: "90%"
                      }}
                      onClick={() => goMap(item.benefit)}
                      src={item.image_url}
                      alt={`Card ${index}`}/>
                    <div className="cardDetails">
                      <h3>{item.card_name}</h3><br/>
                      <div>
                        {/* 콘솔 로그로 데이터 확인 */}
                        {console.log('Benefit Data:', item.benefit)}

                        {/* 데이터 렌더링 */}
                        {item.benefit && typeof item.benefit === 'object' && Object.entries(item.benefit).length > 0 ? (
                          Object.entries(item.benefit).map(([key, value]) => (
                            <span key={key} style={{ display: 'block' }}>
                              {key}: {value}
                            </span>
                          ))
                        ) : (
                          <span>No benefits available</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <button className='btn' onClick={goToRight}> &gt;</button>
        </div>
      </div>
    </>
  );
};

export default NH;
