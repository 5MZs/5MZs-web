import '../styles/accountBook.css';
import {useEffect, useRef, useState} from 'react';
function AccountBook() {
    const mapRef = useRef(null);

    // 가계부 값 저장
    const [accountBookValue, setAccountBookValues] = useState({
        id: '', user_id: '', place_name: '', price: '', date: '', latitude: '', hardness: ''
    });
    // 입력 필드의 값이 변경될 때마다 호출
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountBookValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };
    // 입력 폼 데이터를 서버로 전송
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://15.165.135.177:3000/join', { // 서버 API 엔드포인트
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(accountBookValue)
            });
                console.log(response);
                console.log({accountBookValue});
                console.log(JSON.stringify(accountBookValue));
            if (!response.ok) {
                throw new Error('네트워크 응답이 실패했습니다.');
            }
            const result = await response.json();
            console.log('서버 응답:', result);
            // 성공 시 사용자에게 메시지 표시 또는 페이지 리디렉션
            window.location.href = 'http://localhost:3000/accountbook';  // 원하는 리디렉션 경로로 변경
        } catch (error) {
            console.error('서버 요청 중 오류 발생:', error);
            // 오류 처리 (예: 사용자에게 오류 메시지 표시)
        }
    };
    //현재 위치
    const [currentPosition, setCurrentPosition] = useState(null);
    // 위치 정보를 성공적으로 받아왔을 때 호출되는 함수
    function success(position) {
        const {latitude, longitude} = position.coords;
        setCurrentPosition({lat: latitude, lng: longitude});
    }
    // 위치 정보를 받아오는 데 실패했을 때 호출되는 함수
    function error() {
        console.error('Unable to retrieve your location');
    }
    // 위치 정보 요청
    useEffect(() => {
        navigator
            .geolocation
            .getCurrentPosition(success, error);
    }, []);
    // 지도 및 마커 설정
    useEffect(() => {
        if (currentPosition && window.naver && window.naver.maps) {
            const {lat, lng} = currentPosition;
            const naver = window.naver;
            // 지도 옵션 설정
            const mapOptions = {
                center: new naver
                    .maps
                    .LatLng(lat, lng),
                zoom: 14,
                zoomControl: true,
                zoomControlOptions: {
                    position: naver.maps.Position.RIGHT_BOTTOM
                }
            };
            // 지도 초기화
            mapRef.current = new naver
                .maps
                .Map('map', mapOptions);
            // 현재 위치에 마커 추가
            new naver
                .maps
                .Marker({
                    position: new naver
                        .maps
                        .LatLng(lat, lng),
                    map: mapRef.current
                });
        } else if (!window.naver) {
            // 네이버 지도 API가 로드되지 않은 경우
            const script = document.createElement('script');
            script.src = `
https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}
`;
            script.onload = () => {
                if (currentPosition) {
                    const {lat, lng} = currentPosition;
                    const naver = window.naver;
                    // 지도 옵션 설정
                    const mapOptions = {
                        center: new naver
                            .maps
                            .LatLng(lat, lng),
                        zoom: 14,
                        zoomControl: true,
                        zoomControlOptions: {
                            position: naver.maps.Position.RIGHT_BOTTOM
                        }
                    };
                    // 지도 초기화
                    mapRef.current = new naver
                        .maps
                        .Map('map', mapOptions);
                    // 현재 위치에 마커 추가
                    new naver
                        .maps
                        .Marker({
                            position: new naver
                                .maps
                                .LatLng(lat, lng),
                            map: mapRef.current
                        });
                }
            };
            document
                .head
                .appendChild(script);
        }
    }, [currentPosition]);
    return (
        <div>
            <div
                id="map"
                style={{
                    width: '100%',
                    height: '500px'
                }}/>
            <div className="accountBox">
            <div className="accountContent">
                <div className="accountMessage">
                    지출내역
                </div>
                <div>
                    <form className="accountForm" onSubmit={handleSubmit}>
                        <div className="accountInput">
                            <label>날짜</label>
                            <input
                                type="date"
                                name="date"
                                placeholder="날짜를 입력해주세요"
                                maxLength="10"
                                value={accountBookValue.date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="accountInput">
                            <label>장소</label>
                            <input
                                type="text"
                                name="place_name"
                                placeholder="지출 장소"
                                maxLength="50"
                                value={accountBookValue.place_name}
                                onChange={handleChange}/>
                            <br />
                        </div>
                        <div className="accountInput">
                            <label>지출</label>
                            <input
                                type="text"
                                name="price"
                                placeholder="1원"
                                maxLength="11"
                                value={accountBookValue.price}
                                onChange={handleChange}
                            />
                            <br />
                        </div>
                        <div className="submit">
                            <button type="submit">저장하기</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
}
export default AccountBook;