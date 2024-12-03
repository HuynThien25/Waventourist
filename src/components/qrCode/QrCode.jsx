import "./qrCode.css";
import imgTitle from "../../assets/img/hinhAnh/imgTitle.jpg";
import imgQR from "../../assets/img/logo/QRcode.jpg";
import getitGG from "../../assets/img/logo/getitGGPlay.png";
import { useEffect, useState } from "react";

const QrCode = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mainContainer">
      <div className="cart">
        <img className="imgTitle" src={imgTitle} alt="Title" />
        <div>
          <h1 className="title">
            Tiết kiệm khi đặt Tour và kiếm gấp đôi điểm khi bạn đặt Tour trên
            ứng dụng
          </h1>
          <p className="subP">
            Quét mã QR Code bằng Camera của thiết bị và tải xuống ứng dụng của
            chúng tôi
          </p>
        </div>
        <img className="imgQR" src={imgQR} alt="QR Code" />
        <img className="imgDownload" src={getitGG} alt="Download App" />
        {/* ----------mobile------------ */}
        <div className="grIconQrcode">
          <img className="imgQR2" src={imgQR} alt="QR Code" />
          <img className="imgDownload2" src={getitGG} alt="Download App" />
        </div>
      </div>


      <div className="signOfferContainer">
      {isLoading ? (
        <div className="skeletonSignOffer">
          <div className="skeleton3 skeleton-title3"></div>
          <div className="skeleton3 skeleton-form3"></div>
        </div>
      ) : (
        <div className="signOffer">
        <div className="cartSign">
          <h1 className="offerTitle">
            Đăng ký nhận thông tin mới nhất về các Tour ưu đãi
          </h1>
          <div className="grForm">
            <button className="formBtn">Đăng ký</button>
            <input
              className="formInput"
              type="email"
              placeholder="Địa chỉ email của bạn"
            />
          </div>
        </div>
    </div>
      )}
      </div>
      

    </div>
  );
};

export default QrCode;
