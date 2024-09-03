import {useEffect, useRef} from 'react';
function Map() {
    const mapRef = useRef(null);

    useEffect(() => {

    //   async function getGeocode(address) {
    //     const clientId = 'YOUR_CLIENT_ID'; // 여기 YOUR_CLIENT_ID를 발급받은 Client ID로 바꿔주세요
    //     const clientSecret = 'YOUR_CLIENT_SECRET'; // 여기 YOUR_CLIENT_SECRET를 발급받은 Client Secret으로 바꿔주세요
    
    //     const url = `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode`;
    
    //     try {
    //         const response = await fetch(url, {
    //             method: 'GET',
    //             headers: {
    //                 'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_MAP_CLIENT_ID,
    //                 'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_MAP_CLIENT_SECRET
    //             }
    //         });
    
    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log(data); // 여기서 데이터를 다룰 수 있습니다.
    //         } else {
    //             console.error('Error:', response.status, response.statusText);
    //         }
    //     } catch (error) {
    //         console.error('Fetch error:', error);
    //     }
    // }
    // getGeocode();
        // console.log(process.env.REACT_APP_NAVER_MAP_CLIENT_SECRET);

        function success(s) {
            console.log(s)
        }
        function error(s) {
          console.log(s);
        }
        navigator.geolocation.getCurrentPosition(success, error)

        

        const initMap = () => {
            if (window.naver && window.naver.maps) {
                const naver = window.naver;

                // 네이버 지도 옵션 선택
                const mapOptions = {
                    // 지도의 초기 중심 좌표
                    center: new naver
                        .maps
                        .LatLng(37.5527535, 126.964843),
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
            script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=' +'dbvbdq603l'; // 자신의 Naver Client ID로 변경하세요.
            script.onload = initMap;
            document
                .head
                .appendChild(script);
        }
    }, []); // useEffect-End

    return (
      <div>
        <div>
          
        </div>
        <div id="map" style={{ width: '100%', height: '500px'}}/>

      </div>);
}

export default Map;