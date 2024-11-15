import "./trangDatTour4.css";
import test from "../../assets/img/hinhAnh/test.jpg";
import Navbar from "../../components/navbar/Navbar";
import phuquoc from "../../assets/img/hinhAnh/phuquoc.jpg";
import Footer from "../../components/footer/Footer";
import plane from "../../assets/img/logo/plane.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  faBarcode,
  faCalendar,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTotalAmount } from "../../components/tongGiaTien/TongGiaTien";

const TrangDatTour4 = () => {
  const navigate = useNavigate();
  const { totalAmount } = useTotalAmount();
  const [destination, setDestination] = useState("");
  const location = useLocation();

  const handleTT = () => {
    navigate("/trangtimkiem", { state: { destination } });
  };

  const handleBack = () => {
    navigate("/", { state: { destination } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="datTourContain">
      <Navbar />
      <div className="center1024">
        <div className="sliderText3">Đặt Tour</div>
      </div>
      <img className="sliderIMG" alt="" src={test} />

      <div className="cvb">
        <div className="cacBuocDatTour">
          <div className="chonTour4">Chọn Tour</div>
          <div className="nhapThongTin4">Nhập Thông Tin</div>
          <div className="thanhToan4">Thanh Toán</div>
          <div className="xacNhan4">Xác Nhận</div>
        </div>
      </div>

      <div className="cvb">
        <div className="datTourContainer">
          <div className="d4">
            <div className="soLuongHK4">
              <h1>ĐẶT TOUR THÀNH CÔNG</h1>
              <h4>
                Xin cảm ơn! Thông tin của bạn đã được xác nhận và gửi trong
                Email của bạn. Vui lòng kiểm tra lại thông tin và xác nhận.
              </h4>
              <div className="cardTTDatCho">
                <img className="imgDatCho" alt="" src={phuquoc} />
                <div className="tb4">
                  <h1>
                    Du Lịch Phú Quốc - Khám Phá Bắc Đảo - Safari - Vinwonder -
                    Grand World
                  </h1>
                  <div className="maTour">
                    <FontAwesomeIcon icon={faBarcode} className="iconMaTour" />
                    Mã tour: <span>BNG-384920</span>
                  </div>
                  <div className="ngayDi">
                    <FontAwesomeIcon icon={faCalendar} className="iconNgayDi" />
                    Ngày đi: <span>24/12/2024</span>
                  </div>
                  <div className="ngayVe">
                    <FontAwesomeIcon icon={faCalendar} className="iconNgayVe" />
                    Ngày về: <span>26/12/2024</span>
                  </div>
                  <div className="thoiGian">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="iconThoiGian"
                    />
                    Thời gian: <span>2 ngày 1 đêm</span>
                  </div>
                  <p className="tong">
                    Tổng: <span>{totalAmount.toLocaleString()} VND</span>
                  </p>
                </div>
              </div>

              <div className="btnTong">
                <button className="xacNhanBtn" onClick={handleBack}>
                  Xác nhận quay về trang chủ
                </button>
              </div>
            </div>
            <div className="plane">
              <img src={plane} alt="" className="planeIMG" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrangDatTour4;
