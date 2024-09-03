import {useEffect, useRef, useState} from 'react';
import '../styles/map.css';

function Map() {
    const latitude = useRef(null);
    const longitude = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {

        function success(position) {
            latitude.current = position.coords.latitude;
            longitude.current = position.coords.longitude;
        }
        function error(s) {
            latitude.current = 37.566535;
            longitude.current = 126.9779692;
        }
        if (navigator.geolocation) {
            navigator
                .geolocation
                .getCurrentPosition(success, error);
        } else {
            latitude.current = 37.566535;
            longitude.current = 126.9779692;
        }

        const initMap = () => {
            if (window.naver && window.naver.maps) {
                const naver = window.naver;
                // 네이버 지도 옵션 선택
                const mapOptions = {
                    // 지도의 초기 중심 좌표
                    center: new naver
                        .maps
                        .LatLng(latitude.current, longitude.current),
                    logoControl: false, // 네이버 로고 표시 X
                    mapDataControl: false, // 지도 데이터 저작권 컨트롤 표시 X
                    scaleControl: true, // 지도 축척 컨트롤의 표시 여부
                    tileDuration: 200, // 지도 타일을 전환할 때 페이드 인 효과의 지속 시간(밀리초)
                    zoom: 17, // 지도의 초기 줌 레벨
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

        // 네이버 지도 API 로드 완료 후 초기화x
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
    }, []); // useEffect-End\

    return (
        <div style={{width: '100%', height: '600px'}}>
            <div className='mapNavbar'>
                <div className='mapItem'>CU</div>
                <div className='mapItem'>GS25</div>
                <div className='mapItem'>SEVEN ELEVEN</div>
                <div className='mapItem'>CU</div>
                <div className='mapItem'>CU</div>
            </div>
            <div id="map" style={{width: '100%',height: '100%'}}/>
        </div>
    );
}

export default Map;