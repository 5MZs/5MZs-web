import '../styles/accountBook.css';
import {useState} from 'react';

function FormForm() {
    const [accountBookValue, setAccountBookValues] = useState ({
        id: '',
        user_id: '',
        place_name: '',
        price: '',
        date: '',
        latitude: '',
        hardness: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setAccountBookValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };


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
            window.location.href = 'http://localhost:3000/login';  // 원하는 리디렉션 경로로 변경
        } catch (error) {
            console.error('서버 요청 중 오류 발생:', error);
            // 오류 처리 (예: 사용자에게 오류 메시지 표시)
        }
    };

    // const getMonthData = async (e) => {
    //     const {lat, lng} = currentPosition;
    //     const naver = window.naver;
    //     const mapOptions = {
    //         center: new naver
    //             .maps
    //             .LatLng(lat, lng),
    //         zoom: 14,
    //         zoomControl: true,
    //         zoomControlOptions: {
    //             position: naver.maps.Position.RIGHT_BOTTOM
    //         }
    //     };


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



    return (
        <div className="accountBox">
            <div className="accountContent">
                <div className="accountMessage">지출내역</div>
                <div>
                    <form className="accountForm" onSubmit={handleSubmit}>
                        <div className="accountInput">
                            <label>날짜</label>
                            <input
                                type="date"
                                name="date"
                                placeholder="날짜를 입력해주세요"
                                maxLength="10"
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
                                onChange={handleChange}
                                />
                            <br/>
                        </div>
                        <div className="accountInput">
                            <label>지출</label>
                            <input
                                type="text"
                                name="price"
                                placeholder="1원"
                                maxLength="11"
                                onChange={handleChange}
                                />
                            <br/>
                        </div>

                        <div className="submit">
                            <button type="submit">저장하기</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormForm;