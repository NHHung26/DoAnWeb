import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaPhone, FaEnvelope, FaMapMarker, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen py-16 ">

            <div className="container mx-auto p-4 w-3/5 mt-3">
                <div className="flex items-center">
                    <div className="flex-1 h-0.5 bg-slate-500 mr-4"></div>
                    <h2 className="text-3xl font-semibold mb-4">Về Chúng Tôi</h2>
                    <div className="flex-1 h-0.5 bg-slate-500  ml-4"></div>
                </div>
                {/* <img className="w-full  object-contain mt-4 mb-2" src="https://image.bnews.vn/MediaUpload/Org/2021/06/19/144701-australia-cuoc-dieu-tra-chong-ban-pha-gia-ruou-vang-nhap-khau-cua-trung-quoc-la-thieu-thuc-chat-.jpg"></img> */}

                {/* <h2 className="text-2xl font-semibold text-center mb-4 mt-2">Chúng tôi là ai ?</h2> */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className=" p-4 bg-transparent  shadow-md">
                        <h2 className="text-xl font-semibold mb-2  ">Câu Chuyện Của Chúng Tôi</h2>
                        <p className="text-black-700 text-l" >
                            Thành lập vào năm 20XX, đam mê của chúng tôi với rượu đã dẫn chúng tôi tạo ra một cửa hàng để tôn vinh nghệ thuật làm rượu. Với nhiều năm kinh nghiệm trong ngành, chúng tôi đã lựa chọn từng chai rượu cẩn thận để đảm bảo một trải nghiệm uống rượu tuyệt vời.
                        </p>
                        <button className="mt-4 bg-blue-500 text-white font-semibold p-2 rounded  focus:outline-none w-60 h-12">
                            Tim hiểu thêm
                        </button>
                    </div>
                    <div className="  rounded-lg shadow-md">
                        <img src="https://vcdn-vnexpress.vnecdn.net/2023/08/27/3504-9671-1693108993.jpg"></img>
                    </div>
                </div>
                {/* Tại sao lại chọn chúng tôi                 */}
                <h2 className="text-3xl font-semibold mb-4 text-center mt-4 border-t-2 border-slate-500" >Tại sao chọn chúng tôi ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 mb-0">
                    <div className="   shadow-md">
                        <Carousel className="" showThumbs={false} showStatus={false} showIndicators={false} dynamicHeight={false} emulateTouch autoPlay={true} infiniteLoop={true} interval={4000}>
                            <div>
                                <img className="h-96 w-full object-cover" src="https://bizweb.dktcdn.net/100/219/449/files/tim-hieu-ve-quy-trinh-san-xuat-ruou-nho-va-cach-nhan-biet-1.jpg?v=1542602671397" alt="Đội ngũ 3" />
                            </div>
                            <div>
                                <img className="h-96 w-full object-cover" src="https://lawplus.vn/wp-content/uploads/2019/09/1_zps8a83a058.png" alt="Đội ngũ 1" />
                            </div>
                            <div>
                                <img className="h-96 w-full object-cover" src="https://i1-suckhoe.vnecdn.net/2020/06/09/wine-cellar-guardian-159167272-5687-5723-1591672732.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=Q0-MpPpU7Xg2rLIFw5BRSQ" alt="Đội ngũ 2" />
                            </div>

                            <div>
                                <img className="h-96 w-full object-cover" src="https://winecity.vn/wp-content/uploads/2021/06/ruou-ngon.jpg" alt="Đội ngũ 4" />
                            </div>
                        </Carousel>
                    </div>
                    <div className=" p-4 bg-transparent  shadow-md">
                        <h2 className="text-xl font-semibold mb-2 ">WineStore</h2>
                        <p className="text-gray-700">
                            Cửa hàng rượu của chúng tôi tự hào mang đến cho bạn những trải nghiệm tuyệt vời và lý tưởng cho tất cả các dịp. Dưới đây là những lý do tại sao bạn nên chọn chúng tôi:
                        </p>
                        <ul className="list-disc text-left text-gray-700 ml-6">
                            <li>Chất lượng đỉnh cao: Chúng tôi cam kết cung cấp những loại rượu có chất lượng cao nhất từ khắp nơi trên thế giới.</li>
                            <li>Đội ngũ chuyên nghiệp: Những người đam mê và có kiến thức sâu rộng về rượu sẽ giúp bạn tìm kiếm sản phẩm phù hợp nhất với bạn.</li>
                            <li>Sự đa dạng: Chúng tôi cung cấp một loạt các loại rượu từ các vùng và phong cách khác nhau để bạn lựa chọn.</li>

                        </ul>
                        <button className="mt-4 bg-blue-500 text-white font-semibold p-2 rounded  focus:outline-none w-60 h-12">
                            Tim hiểu thêm
                        </button>
                    </div>
                </div>
                {/* Cửa Hàng của chúng tôi */}
                <div className="mt-8 text-center ">

                    <div className="flex items-center">
                        <div className="flex-1 h-0.5 bg-slate-500 mr-4"></div>
                        <h2 className="text-3xl font-semibold mb-4">Cửa Hàng Của Chúng Tôi</h2>
                        <div className="flex-1 h-0.5 bg-slate-500  ml-4"></div>
                    </div>

                    <p className="text-back text-xl">
                        Khám phá các cửa hàng của chúng tôi và khám phá thế giới của rượu. Chúng tôi mong chờ được chào đón bạn trong một trải nghiệm rượu thú vị.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ">
                    <div className="bg-white  shadow-md ">
                        <img src="https://yeu79.net/assets/img/khac/ruou/ruou-vang-nha-trang.jpg" alt="Cửa hàng 1" className="w-full h-72" />
                        <div className="pl-2">
                            <h3 className="text-xl font-semibold mt-2">WineStore-Lĩnh Name</h3>
                            <p className="text-gray-700">
                                Chủ yếu cung cáp các loại rượu vang chính hãng.
                            </p>
                        </div>

                    </div>

                    <div className="bg-white  shadow-md h-96">
                        <img src="https://thanglongplaza.com/upload/image/ruou-vang-phap-tai-hoang-quoc-viet8.jpg" alt="Cửa hàng 2" className="w-full h-72" />
                        <div className="pl-2">
                            <h3 className="text-xl font-semibold mt-2">WineStore-Cầu Giấy</h3>
                            <p className="text-gray-700 text-l">
                                Ở đây cung cấp các loại rượu Tây đặc biệt.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md h-96">
                        <img src="https://i.imgur.com/enMrWqj.png" alt="Cửa hàng 3" className="w-full h-72" />
                        <div className="pl-2">
                            <h3 className="text-xl font-semibold mt-2">WineStore-Hồ Gươm</h3>
                            <p className="text-gray-700">
                                Cung cấp thêm một số loại rượu cao cấp .
                            </p>
                        </div>
                    </div>

                </div>



                {/* Liên HỆ */}
                <div className="mt-8 text-center">
                    <div className="flex items-center">
                        <div className="flex-1 h-0.5 bg-slate-500 mr-4"></div>
                        <h2 className="text-3xl font-semibold mb-4">Liên hệ với Chúng Tôi</h2>
                        <div className="flex-1 h-0.5 bg-slate-500  ml-4"></div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg text-xl  shadow-md mx-auto w-full flex justify-center space-x-72">
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center">
                                <FaPhone className="w-6 h-6 text-gray-700" />
                                <p className="text-black ml-2">Điện thoại: +123-456-7890</p>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="w-6 h-6 text-gray-700" />
                                <p className="text-black ml-2">Email: WineStore@gmail.com</p>
                            </div>
                            <div className="flex items-center">
                                <FaMapMarker className="w-6 h-6 text-gray-700" />
                                <p className="text-black ml-2">Trụ sở: 123 Đường Rượu, </p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center">
                                <FaInstagram className="w-6 h-6 text-gray-700" />
                                <a href="https://www.instagram.com/your_instagram_page" target="_blank" rel="noopener noreferrer" className="text-black ml-2">Instagram</a>
                            </div>
                            <div className="flex items-center">
                                <FaFacebook className="w-6 h-6 text-gray-700" />
                                <a href="https://www.facebook.com/your_facebook_page" target="_blank" rel="noopener noreferrer" className="text-black ml-2">Facebook</a>
                            </div>
                            <div className="mt-3">
                                <button className="bg-blue-500 text-white font-semibold p-2 rounded focus:outline-none w-40">
                                    Liên hệ ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
