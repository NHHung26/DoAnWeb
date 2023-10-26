import React from "react";
import { Carousel } from "antd";
import { Image } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const text = {
  fontFamily: "'Cinzel', 'Lato', arial, sans-serif",
};
const lineStyle = {
  width: "66.666667%",
  borderTop: "1px solid #000",
  position: "relative",
  margin: "0 auto",
};
const anh = {
  height: "700px",
  margin: "270px auto 0px auto",
};
const textStyle = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  padding: "10px 20px 10px 20px",
  fontSize: "20px",
  zIndex: 1,
  fontFamily: "'Cinzel', 'Lato', arial, sans-serif",
};

const contentStyle = {
  height: "1100px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const overlayStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
};
export default function HomePage() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img
            src="https://images.pexels.com/photos/5876788/pexels-photo-5876788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={contentStyle}
            width="100%"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3419646/pexels-photo-3419646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            width={"100%"}
            height
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/5935214/pexels-photo-5935214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={contentStyle}
            width={"100%"}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1835743/pexels-photo-1835743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={"100%"}
            style={contentStyle}
          />
        </div>
      </Carousel>
      <div className=" mt-10 ">
        <div style={lineStyle}></div>
        <div style={textStyle}>KHUYẾN MÃI ĐẶC BIỆT</div>
      </div>
      <div className=" grid grid-cols-2 gap-4 mx-auto w-4/6 h-52 mt-14">
        <div className=" h-full">
          <img src="https://maltco.asia/wp-content/uploads/2023/01/c9443dc0a54d7e13275c.webp" />
        </div>
        <div className=" h-full">
          <img src="https://maltco.asia/wp-content/uploads/2023/09/hoan-hang-len-toi-4.jpg" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mx-auto w-4/6 h-52 mt-20">
        <div className="h-full w-100 bg-gray-200">
          <img src="https://maltco.asia/wp-content/uploads/2022/12/97.webp" />
        </div>
        <div className="h-full w-100 bg-slate-600">
          <img src="https://maltco.asia/wp-content/uploads/2022/12/98.webp" />
        </div>
        <div className="h-full w-100 bg-slate-600">
          <img src="https://maltco.asia/wp-content/uploads/2022/12/97.webp" />
        </div>
        <div className="h-full w-100 bg-slate-600">
          <img src="https://maltco.asia/wp-content/uploads/2023/01/5dc1231229edf2b3abfc.webp" />
        </div>
      </div>
      <div className=" w-4/6 mx-auto mt-24 h-96 relative">
        <video controls autoplay loop>
          <source
            src="https://www.hennessy.com/sites/hennessy/files/2023-07/HNY_ODYSSEY_LOVE_60s_1440x770.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="grid grid-cols-2 mx-auto  w-4/6" style={anh}>
        <div className="  h-full ">
          <img src="https://www.hennessy.com/sites/hennessy/files/styles/portait_1680_x_2160/public/2021-03/hennessy-cocktails-packshot-32-black-and-tonic.png?itok=FiyH6x8T" />
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 style={text} className="text-3xl font-bold mb-4">
            History
          </h1>
          <p style={text} className="text-lg text-gray-800">
            Lịch sử hãng rượu của chúng tôi có nguồn gốc từ một người thợ làm
            rượu nổi tiếng vào thế kỷ 19. Những năm đầu, ông đã sáng tạo ra các
            phương pháp lên men độc đáo và tự hào về sự sáng tạo trong việc chọn
            lọc nho và lên men. Hãng rượu của chúng tôi đã phát triển theo thời
            gian, từ một cửa hàng nhỏ thành một tập đoàn rượu lớn với danh tiếng
            quốc tế. Họ đã giành nhiều giải thưởng quốc tế và được biết đến với
            chất lượng và độ độc đáo của sản phẩm. Lịch sử của hãng rượu của
            chúng tôi thể hiện sự đam mê và tận tâm trong nghệ thuật làm rượu
            suốt nhiều thế kỷ và đã tạo nên một thương hiệu vang dội trên thị
            trường rượu toàn cầu.
          </p>
        </div>
      </div>
      <div className=" mt-20 ">
        <div style={lineStyle}></div>
        <div style={textStyle}>SẢN PHẨM NỔI BẬT</div>
      </div>
      <div className="flex justify-center gap-7 mt-5">
        <Image.PreviewGroup
          items={[
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/60e6bf6e7d983.jpeg",
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/60e6bf8512b8f.jpeg",
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/60e6bf9a0229b.jpeg",
          ]}
        >
          <Image
            width={200}
            src="https://chivas.idlcloud.com/stage/ProductToMarket/1025/display/6/display_350x800.png"
          />
        </Image.PreviewGroup>
        <Image.PreviewGroup
          items={[
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/610bdff73ab52.jpeg",
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/610be0b0b4a8f.jpeg",
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/610be11063d69.jpeg",
          ]}
        >
          <Image
            width={200}
            src="https://chivas.idlcloud.com/stage/ProductToMarket/5040/display/1/display_350x800.png"
          />
        </Image.PreviewGroup>
        <Image.PreviewGroup
          items={[
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/610bdc186b647.jpeg",
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/60f7e8bac85d4.jpeg",
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/60f7ebea6bf52.jpeg",
          ]}
        >
          <Image
            width={200}
            src="https://chivas.idlcloud.com/stage/ProductToMarket/5008/display/3/display_350x800.png"
          />
        </Image.PreviewGroup>
        <Image.PreviewGroup
          items={[
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/60e6c00835881.jpeg",
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/60e6c03121c25.jpeg",
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/60e6c03b5d08d.jpeg",
          ]}
        >
          <Image
            width={200}
            src="https://chivas.idlcloud.com/stage/ProductToMarket/3643/display/6/display_350x800.png"
          />
        </Image.PreviewGroup>
        <Image.PreviewGroup
          items={[
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/60e6c2d3d0431.jpeg",
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/60e6cec7a9122.jpeg",
            "https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/60e6c2eb46359.jpeg",
          ]}
        >
          <Image
            width={200}
            src="https://chivas.idlcloud.com/stage/ProductToMarket/1301/display/6/display_350x800.png"
          />
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
