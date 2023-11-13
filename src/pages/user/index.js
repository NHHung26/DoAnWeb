import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi'; // Import biểu tượng chỉnh sửa từ react-icons
import { Link } from 'react-router-dom';

const AccountSetting = () => {
  const [userData, setUserData] = useState({
    username: 'example_user',
    fullname: "nguyen duong",
    address: "false",
    phone: "false",
    email: 'user@example.com',
    password: '********',
  });

  const [isEditing, setIsEditing] = useState({
    username: false,
    email: false,
    password: false,
    address: false,
    phone: false,
    fullname: false,
  });

  const handleChange = (field, e) => {
    setUserData({ ...userData, [field]: e.target.value });
  };

  const handleSaveAll = () => {
    // Thực hiện lưu tất cả dữ liệu đã thay đổi vào backend hoặc state management tại đây
    // Ví dụ: gửi request PUT/POST đến API hoặc cập nhật state tương ứng
    // Sau khi lưu xong, bạn có thể đặt lại updatedData về userData
    setIsEditing({
      username: false,
      email: false,
      password: false,
      address: false,
      phone: false,
      fullname: false,
    });
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
