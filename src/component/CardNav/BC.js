import React, {useState, useEffect} from 'react';
import BenefitCategory from '../BenefitCategory';
import '../../styles/benefit.css';
import { useNavigate } from 'react-router-dom';

const BC = () => {
  const [BCValue, setBCValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  // 데이터 패칭 함수
    const fetchDepartment = async () => {
      try {
            setLoading(true);
            const response = await fetch(
                'http://15.165.135.177:3000/api/v1/cardbenefitsinfo/shinhan'
              );
              
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              
              const json = await response.json();
              
              console.log('Fetched data:', json); // 데이터 구조 확인
              setBCValues(json || []); // `json.BC`가 실제 데이터 배열인지 확인
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
          console.log('BCValue:', BCValue); // 데이터가 제대로 업데이트되었는지 확인
        }, [BCValue]);
        
        const [currentIndex, setCurrentIndex] = useState(0);
        
        const goToLeft = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + BCValue.length) % BCValue.length
        );
      };
      
      const goToRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % BCValue.length);
    };
    
    if (loading) 
      return <p>Loading...</p>;
    if (error) 
      return <p>Error: {error}</p>;
    
    return (
      <> < div > <div className='benefitCategory'>
            <BenefitCategory/>
        </div>
    </div>
    <div className="box">
        <div className='imageContainer'>
            <button className='btn' onClick={goToLeft}>왼</button>
            <div className='imageBox'>
                <div
                    className='imageWrapper'
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: 'transform 0.5s ease-in-out'
                    }}>
                    {
                        BCValue.map((item, index) => (
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
                                    <h3>{item.card_name}</h3>
                                    <p>{item.card_company_name}</p>
                                    <p>
                                        {
                                            item.benefit
                                                ? (
                                                    Object.entries(item.benefit).map(([key, value]) => (<span
                                                        key={key}
                                                        style={{
                                                            display: 'block'
                                                        }}>{key}: {value}</span>))
                                                )
                                                : (<span>No benefits available</span>)
                                        }
                                    </p>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
            <button className='btn' onClick={goToRight}>오</button>
        </div>
    </div>
</>
    );
};

export default BC;
