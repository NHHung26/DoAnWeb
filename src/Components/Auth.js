import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

const AuthenticatedApi = ({ apiURL }) => {
    const [cookies] = useCookies(['token']);
    const [userData, setUserData] = useState(null); // State để lưu thông tin người dùng
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!cookies.token) {
                    throw new Error('Token không tồn tại');
                }

                // Gọi API với token để lấy thông tin người dùng
                const response = await axios.get(apiURL, {
                    headers: {
                        Authorization: `${cookies.token}`,
                    },
                });

                // Lưu thông tin người dùng vào state
                setUserData(response.data);

                // Sau khi xác thực thành công, chuyển hướng người dùng đến trang home
                history.push('/home');
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [cookies.token, apiURL, history]);

    return null; // Không có phần giao diện để hiển thị
};

export default AuthenticatedApi;
