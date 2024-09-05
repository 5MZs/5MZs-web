import '../styles/accountBook.css';
import {useEffect, useRef, useState} from 'react';

function AccountBook() {

    const HOME_PATH = window.HOME_PATH || '.';
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    // 가계부 값 저장
    const [accountBookValue, setAccountBookValues] = useState({
        id: '',
        user_id: '',
        place_name: '',
        price: '',
        date: '',
        latitude: '',
        hardness: ''
    });
    const [accountBoxPosition, setAccountBoxPosition] = useState(null);

    // 입력 필드의 값이 변경될 때마다 호출
    const handleChange = (e) => {
        const {name, value} = e.target;
        setAccountBookValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    function formForm() {

        return (
            `<div className="accountBox">
                <div className="accountContent">
                    <div className="accountMessage">지출내역</div>
                    <div>
                        <form className="accountForm" onSubmit={}>
                            <div className="accountInput">
                                <label>날짜</label>
                                <input
                                    type="date"
                                    name="date"
                                    placeholder="날짜를 입력해주세요"
                                    maxLength="10"/>
                            </div>
                            <div className="accountInput">
                                <label>장소</label>
                                <input
                                    type="text"
                                    name="place_name"
                                    placeholder="지출 장소"
                                    maxLength="50"/>
                                <br/>
                            </div>
                            <div className="accountInput">
                                <label>지출</label>
                                <input
                                    type="text"
                                    name="price"
                                    placeholder="1원"
                                    maxLength="11"/>
                                <br/>
                            </div>

                            <div className="submit">
                                <button type="submit">저장하기</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>`
        )
    }

    // const setMonthData = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('http://15.165.135.177:3000/api/v1/financialledger', { // 서버 API 엔드포인트
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(accountBookValue)
    //         });
    //             console.log(response);
    //             console.log({accountBookValue});
    //             console.log(JSON.stringify(accountBookValue));
    //         if (!response.ok) {
    //             throw new Error('네트워크 응답이 실패했습니다.');
    //         }
    //         const result = await response.json();
    //         console.log('서버 응답:', result);

    //         // 성공 시 사용자에게 메시지 표시 또는 페이지 리디렉션
    //         // window.location.href = 'http://localhost:3000/accountBook';  // 원하는 리디렉션 경로로 변경
    //     } catch (error) {
    //         console.error('서버 요청 중 오류 발생:', error);
    //         // 오류 처리 (예: 사용자에게 오류 메시지 표시)
    //     }
    // };

    // 입력 폼 데이터를 서버로 전송
    const getMonthData = async (e) => {
        const {lat, lng} = currentPosition;
        const naver = window.naver;
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

        mapRef.current = new naver
            .maps
            .Map('map', mapOptions);

        const getMonth = {
            "token": localStorage.getItem('token'),
            "date": `${e}`
        }

        console.log(getMonth);
        try {
            const response = await fetch(
                'http://15.165.135.177:3000/api/v1/financialledger/month',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(getMonth)
                }
            );
            console.log(response);
            // console.log({getMonth}); console.log(JSON.stringify(getMonth));
            if (!response.ok) {
                throw new Error('네트워크 응답이 실패했습니다.');
            }
            const result = await response.json();

            result.forEach(element => {
                var lat = element.latitude;
                var lng = element.hardness;

                markerRef.current = new naver
                    .maps
                    .Marker({
                        position: new naver
                            .maps
                            .LatLng(lat, lng),
                        map: mapRef.current
                    });
            });

            // markerRef.current = new naver .maps .Marker({     position: new naver
            // .maps         .LatLng(lat, lng),     map: mapRef.current});

            console.log(result[1].hardness);
            console.log('서버 응답:', result);
            // window.location.href = 'http://localhost:3000/accountbook';
        } catch (error) {
            console.error('서버 요청 중 오류 발생:', error);
        }
    };

    // 현재 위치
    const [currentPosition, setCurrentPosition] = useState(null);

    function success(position) {
        const {latitude, longitude} = position.coords;
        setCurrentPosition({lat: latitude, lng: longitude});
    }

    function error() {
        console.error('Unable to retrieve your location');
    }

    useEffect(() => {
        navigator
            .geolocation
            .getCurrentPosition(success, error);
    }, []);

    useEffect(() => {
        if (currentPosition && window.naver && window.naver.maps) {
            const {lat, lng} = currentPosition;
            const naver = window.naver;
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
            markerRef.current = new naver
                .maps
                .Marker({
                    position: new naver
                        .maps
                        .LatLng(lat, lng),
                    map: mapRef.current,
                    icon: {
                        content: formForm(),
                        size: new naver
                            .maps
                            .Size(22, 35),
                        anchor: new naver
                            .maps
                            .Point(11, 35)
                    }

                });

            // 클릭 이벤트 리스너 추가
            naver
                .maps
                .Event
                .addListener(mapRef.current, 'click', function (e) {
                    const newLatLng = e.coord;
                    markerRef
                        .current
                        .setPosition(newLatLng);

                    setAccountBookValues(prevValues => ({
                        ...prevValues,
                        latitude: newLatLng.lat(),
                        longitude: newLatLng.lng()
                    }));

                    setAccountBoxPosition({lat: newLatLng.lat(), lng: newLatLng.lng()});

                    // infoWindow showForm();

                });
        } else if (!window.naver) {
            const script = document.createElement('script');
            script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`;
            script.onload = () => {
                if (currentPosition) {
                    const {lat, lng} = currentPosition;
                    const naver = window.naver;
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

                    mapRef.current = new naver
                        .maps
                        .Map('map', mapOptions);
                    markerRef.current = new naver
                        .maps
                        .Marker({
                            position: new naver
                                .maps
                                .LatLng(lat, lng),
                            map: mapRef.current
                        });

                    // naver.maps.Event.addListener(mapRef.current, 'click', function (e) { const
                    // newLatLng = e.coord;     markerRef.current.setPosition(newLatLng);
                    // setAccountBookValues(prevValues => ({         ...prevValues, latitude:
                    // newLatLng.lat(),         longitude: newLatLng.lng()     }));
                    // setAccountBoxPosition({ lat: newLatLng.lat(), lng: newLatLng.lng() }); });
                }
            };
            document
                .head
                .appendChild(script);
        }

    }, [currentPosition]);

    return (
        <div
            className="contentAll"
            style={{
                width: '100%',
                height: `${window.innerHeight - 61}px`
            }}>
            <div id="menuBar">
                <div>
                    <button type='button' onClick={() => window.location.reload()}>작성하기</button>
                </div>
                <div>
                    <button type='button' onClick={() => getMonthData('2024-06')}>6월</button>
                </div>
                <div>
                    <button type='button' onClick={() => getMonthData('2024-07')}>7월</button>
                </div>
                <div>
                    <button type='button' onClick={() => getMonthData('2024-08')}>8월</button>
                </div>
                <div>
                    <button type='button' onClick={() => getMonthData('2024-09')}>9월</button>
                </div>

            </div>
            <div id="map"/>
        </div>
    );
}

export default AccountBook;