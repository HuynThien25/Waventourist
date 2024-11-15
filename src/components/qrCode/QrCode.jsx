import "./qrCode.css";
import imgTitle from "../../assets/img/hinhAnh/imgTitle.jpg";
import imgQR from "../../assets/img/logo/QRcode.jpg";
import getitGG from "../../assets/img/logo/getitGGPlay.png";
import LazyLoad from "react-lazy-load";

const QrCode = () => {
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

      <LazyLoad>
        <div className="signOffer">
          <div className="cartSign">
            <h1 className="offerTitle">
              Đăng ký nhận thông tin mới nhất về các Tour ưu đãi
            </h1>
            <div className="grForm">
              <button className="formBtn">Đăng ký</button>
              <input
                className="formInput"
                type="Email"
                placeholder="Địa chỉ email của bạn"
              ></input>
            </div>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default QrCode;
