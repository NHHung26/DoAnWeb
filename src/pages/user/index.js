import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi'; // Import biểu tượng chỉnh sửa từ react-icons
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../../redux/userSlice";


const AccountSetting = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState({
    userusername: false,
    email: false,
    password: false,
    address: false,
    phone: false,
    fullname: false,
  });

  dispatch(update({ [field]: e.target.value }));

  const handleSaveAll = async () => {
    try {
      // Tạo một đối tượng chứa dữ liệu cần cập nhật
      const updateduser = {
        username: userData.username,
        email: userData.email,
        password: userData.password,
        fullname: userData.fullname,
      };
      updateduserDetail = {
        address: userData.address,
        phone: userData.phone,
      }

      // Gửi yêu cầu PUT (hoặc POST) đến API để cập nhật dữ liệu
      const response = await axios.put('http://localhost:8000/api/edit', updateduser);
      const response1 = await axios.put('http://localhost:8000/api/edit', updateduser);

      // Kiểm tra response từ API, có thể xem xét kiểm tra response.status để đảm bảo cập nhật thành công
      if (response.status === 200) {
        // Nếu cập nhật thành công, bạn có thể thực hiện các xử lý khác (ví dụ: cập nhật Redux store)
        dispatch(update(updatedData));
        setIsEditing({
          username: false,
          email: false,
          password: false,
          address: false,
          phone: false,
          fullname: false,
        });
      }
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Lỗi khi cập nhật dữ liệu:', error);
    }
  };


  return (
    <div className='bg-gray-300'>
      <div className="w-1/3 mx-auto mt-16 pb-16">
        <h2 className="text-4xl font-semibold mb-6 pt-10 flex items-center justify-center">Account Settings</h2>
        <form>
          <div className="mb-4">
            <label className="block text-black text-xl font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <div className="flex items-center">
              <input
                className={`border rounded-lg py-2 px-3 w-full ${isEditing.username ? 'bg-gray-100' : ''}`}
                type="text"
                id="username"
                name="username"
                value={userData.username}
                onChange={(e) => handleChange('username', e)}
                disabled={!isEditing.username}
              />
              <FiEdit
                onClick={() => setIsEditing({ ...isEditing, username: true })}
                className="ml-2 cursor-pointer"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-black text-xl font-semibold mb-2" htmlFor="fullname">
              Fullname
            </label>
            <div className="flex items-center">
              <input
                className={`border rounded-lg py-2 px-3 w-full ${isEditing.fullname ? 'bg-gray-100' : ''}`}
                type="text"
                id="fullname"
                name="fullname"
                value={userData.fullname}
                onChange={(e) => handleChange('fullname', e)}
                disabled={!isEditing.fullname}
              />
              <FiEdit
                onClick={() => setIsEditing({ ...isEditing, fullname: true })}
                className="ml-2 cursor-pointer"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-black text-xl font-semibold mb-2" htmlFor="phone">
              Phone
            </label>
            <div className="flex items-center">
              <input
                className={`border rounded-lg py-2 px-3 w-full ${isEditing.phone ? 'bg-gray-100' : ''}`}
                type="text"
                id="phone"
                name="phone"
                value={userData.phone}
                onChange={(e) => handleChange('phone', e)}
                disabled={!isEditing.phone}
              />
              <FiEdit
                onClick={() => setIsEditing({ ...isEditing, phone: true })}
                className="ml-2 cursor-pointer"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-black text-xl font-semibold mb-2" htmlFor="address">
              Address
            </label>
            <div className="flex items-center">
              <input
                className={`border rounded-lg py-2 px-3 w-full ${isEditing.address ? 'bg-gray-100' : ''}`}
                type="text"
                id="address"
                name="address"
                value={userData.address}
                onChange={(e) => handleChange('address', e)}
                disabled={!isEditing.address}
              />
              <FiEdit
                onClick={() => setIsEditing({ ...isEditing, address: true })}
                className="ml-2 cursor-pointer"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-black text-xl font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center">
              <input
                className={`border rounded-lg py-2 px-3 w-full ${isEditing.email ? 'bg-gray-100' : ''}`}
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={(e) => handleChange('email', e)}
                disabled={!isEditing.email}
              />
              <FiEdit
                onClick={() => setIsEditing({ ...isEditing, email: true })}
                className="ml-2 cursor-pointer"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-between pt-4">
          <button onClick={handleSaveAll} className="bg-yellow-400 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg text-xl">
            Update
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-xl">
            <Link to={'/'}>Close</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
