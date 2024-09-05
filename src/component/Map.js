import {useEffect, useRef, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import '../styles/map.css';
// import Category from './Category';

function formating(str) {
    const position = str.length - 7;

    // 점을 삽입
    return parseFloat(str.slice(0, position) + '.' + str.slice(position));
}

function Map() {
    async function getItems(result) {
        result
            .items
            .forEach((element) => {
                console.log(formating(element.mapy), formating(element.mapx));
                var marker = new naver
                    .maps
                    .Marker({
                        position: new naver
                            .maps
                            .LatLng(formating(element.mapy), formating(element.mapx)),
                        map: mapRef.current
                    });
                marker.setMap(mapRef.current)
            });
    }

    const naver = window.naver;
    const location = useLocation();
    const mapRef = useRef(null);

    const userInfo = {
        ...location.state
    };
    console.log(userInfo);
    const tag = Object.keys(userInfo);

        function success(s) {
          console.log(s);
        }
        function error(s) {
          console.log(s);
        }
    navigator
        .geolocation
        .getCurrentPosition(success, error)

    const getTagLocation = async (data) => {
        // e.preventDefault();
        console.log(data);
        try {
            const response = await fetch(
                `http://15.165.135.177:3000/api/v1/map/search/${data}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (!response.ok) {
                throw new Error('네트워크 응답이 실패했습니다.');
            }
            const result = await response.json();
            console.log('서버 응답:', result);
            getItems(result);
        } catch (error) {
            console.error('서버 요청 중 오류 발생:', error);    
        }
    };

    useEffect(() => {
        const initMap = () => {
            if (window.naver && window.naver.maps) {
                const naver = window.naver;

                // 네이버 지도 옵션 선택
                const mapOptions = {
                    // 지도의 초기 중심 좌표
                    center: new naver
                        .maps
                        .LatLng(37.5666103, 126.9783882),
                    logoControl: false, // 네이버 로고 표시 X
                    mapDataControl: false, // 지도 데이터 저작권 컨트롤 표시 X
                    scaleControl: true, // 지도 축척 컨트롤의 표시 여부
                    tileDuration: 200, // 지도 타일을 전환할 때 페이드 인 효과의 지속 시간(밀리초)
                    zoom: 15, // 지도의 초기 줌 레벨
                    zoomControl: true, // 줌 컨트롤 표시
                    zoomControlOptions: {
                        position: naver.maps.Position.RIGHT_BOTTOM // 줌 컨트롤 우하단에 배치
                    }
                };

                // 지도를 초기화하고 mapRef에 저장
                mapRef.current = new naver
                    .maps
                    .Map('map', mapOptions);
            } else {
                console.error('Naver Maps API is not loaded.');
            }
        };

        // 네이버 지도 API 로드 완료 후 초기화
        if (window.naver && window.naver.maps) {
            initMap();
        } else {
            const script = document.createElement('script');
            script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=' +
                    `${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`; // 자신의 Naver Client ID로 변경하세요.
            script.onload = initMap;
            document
                .head
                .appendChild(script);
        }
    }, []); // useEffect-End

    return (
        <div className='mainBoard'>
        <div>
                <div className='mapNavbar'>
                    {
                        tag.map(
                            item => <div className='mapItem' onClick={() => getTagLocation(item)}>{item}</div>
                        )
                    }
                </div>
            </div>
            <div
                id="map"
                style={{
                    width: '100%',
                    height: '100%'
                }}/>
          
        </div>
    );
}

export default Map;