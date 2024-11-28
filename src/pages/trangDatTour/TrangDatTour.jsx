import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import test from "../../assets/img/hinhAnh/test.jpg";
import phuquoc from "../../assets/img/hinhAnh/phuquoc.jpg";
import heartFill from "../../assets/img/logo/heartFill.png";
import "./trangDatTour.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBaby,
  faBarcode,
  faCalendar,
  faCalendarDays,
  faChildReaching,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { useTotalAmount } from "../../components/tongGiaTien/TongGiaTien";
import LazyLoad from "react-lazy-load";
import ReviewPopup from "../../components/reviewPopup/ReviewPopup";

const TrangDatTour = () => {
  const navigate = useNavigate();
  const { setTotalAmount } = useTotalAmount();
  const location = useLocation();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);
  const adultPrice = 6139000;
  const childPrice = 4639000;
  const babyPrice = 2132000;
  const [destination, setDestination] = useState("");
  const [isChecked, setIsChecked] = useState(false); // State checkbox
  const [errorMessage, setErrorMessage] = useState(""); // State thông báo lỗi
  const [isReviewPopupVisible, setReviewPopupVisible] = useState(false);

  // toggle đánh giá du khách
  const toggleReviewPopup = () => {
    setReviewPopupVisible(!isReviewPopupVisible);
  };

  // hiển thị giá chi tiết dựa trên khách hàng bấm số lượng
  const [showPricing, setShowPricing] = useState(false);

  // tính toán tổng dựa trên số lượng người dùng chọn
  const totalAmount =
    adults * adultPrice + children * childPrice + babies * babyPrice;

  //truyền tổng giá
  useEffect(() => {
    setTotalAmount(totalAmount);
  }, [totalAmount, setTotalAmount]);

  // hàm đếm thay đổi số lượng người
  const updateAdults = (count) => {
    setAdults(Math.max(count, 1));
    setShowPricing(true);
  };

  const updateChildren = (count) => {
    setChildren(Math.max(count, 0));
    setShowPricing(true);
  };

  const updateBabies = (count) => {
    setBabies(Math.max(count, 0));
    setShowPricing(true);
  };

  //check điều kiện DK
  const handleTT = () => {
    if (isChecked) {
      setErrorMessage(""); // Xóa thông báo lỗi nếu được tick
      navigate("/trangDatTour2", { state: { destination } });
    } else {
      setErrorMessage(
        "Vui lòng đọc và đồng ý với điều khoản trước khi tiếp tục."
      ); // Đặt thông báo lỗi nếu chưa được tick
    }
  };

  const handleBack = () => {
    navigate("/chiTietTour", { state: { destination } });
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
      {/* <LazyLoad> */}
      <img className="sliderIMG" alt="" src={test} loading="eager" />
      {/* </LazyLoad> */}

      <div className="cvb">
        <div className="cacBuocDatTour">
          <div className="chonTour">Chọn Tour</div>
          <div className="nhapThongTin">Nhập Thông Tin</div>
          <div className="thanhToan">Thanh Toán</div>
          <div className="xacNhan">Xác Nhận</div>
        </div>
      </div>

      <div className="cvb">
        <div className="datTourContainer">
          <div className="a1">
            <div className="soLuongHKContainer">
              <div className="soLuongHK">
                <h1>SỐ LƯỢNG HÀNH KHÁCH</h1>

                {/* Phần điều chỉnh số lượng */}
                <div className="nguoiLon">Người lớn (*)</div>
                <div className="passengerGroup">
                  <div className="counter">
                    <button
                      onClick={() => updateAdults(adults - 1)}
                      className="btnMinus"
                    >
                      –
                    </button>
                    <input
                      type="text"
                      className="inp"
                      value={adults}
                      readOnly
                    />
                    <button
                      onClick={() => updateAdults(adults + 1)}
                      className="btnPlus"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="treEm">Trẻ em</div>
                <div className="passengerGroup">
                  <div className="counter">
                    <button
                      onClick={() => updateChildren(children - 1)}
                      className="btnMinus"
                    >
                      –
                    </button>
                    <input
                      type="text"
                      className="inp"
                      value={children}
                      readOnly
                    />
                    <button
                      onClick={() => updateChildren(children + 1)}
                      className="btnPlus"
                    >
                      +
                    </button>
                  </div>
                  <ul className="info">
                    <li>Tour nước ngoài: áp dụng từ 2 đến 12 tuổi</li>
                    <li>
                      Tour trong nước và tour Campuchia: áp dụng từ 6 đến 11
                      tuổi
                    </li>
                  </ul>
                </div>

                <div className="emBe">Em bé</div>
                <div className="passengerGroup">
                  <div className="counter">
                    <button
                      onClick={() => updateBabies(babies - 1)}
                      className="btnMinus"
                    >
                      –
                    </button>
                    <input
                      type="text"
                      className="inp"
                      value={babies}
                      readOnly
                    />
                    <button
                      onClick={() => updateBabies(babies + 1)}
                      className="btnPlus"
                    >
                      +
                    </button>
                  </div>
                  <ul className="info">
                    <li>Tour nước ngoài: áp dụng từ dưới 2 tuổi</li>
                    <li>
                      Tour trong nước và tour Campuchia: áp dụng từ 2 đến 5 tuổi
                    </li>
                  </ul>
                </div>

                {/* Checkbox và điều khoản */}
                <div className="dongYDK">
                  <fieldset>
                    <div>
                      <input
                        type="checkbox"
                        id="dongY"
                        name="dongY"
                        checked={isChecked} // Kiểm soát bằng state isChecked
                        onChange={(e) => setIsChecked(e.target.checked)} // Cập nhật trạng thái khi tick
                      />
                      <label htmlFor="dongY">
                        Tôi đã đọc và đồng ý<span> điều khoản</span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                {/* Hiển thị thông báo lỗi nếu checkbox chưa được tick */}
                {errorMessage && (
                  <div
                    className="errorMessage"
                    style={{
                      color: "red",
                      marginTop: "10px",
                      fontSize: "14px",
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="thongTinDK2">
                  <div className="textC">
                    Điều khoản này là sự thoả thuận đồng ý của quý khách khi sử
                    dụng dịch vụ thanh toán trên trang web
                    <span> www.waventourist.com </span>của Công ty Waventourist
                    và những trang web của bên thứ ba.
                    <br />
                    Việc quý khách đánh dấu vào ô “Đồng ý” và nhấp chuột vào
                    thanh “Chấp nhận” nghĩa là quý khách đồng ý tất cả các điều
                    khoản thỏa thuận trong các trang web này.
                    <br />
                    <h1>Về sở hữu bản quyền</h1>
                    Trang web<span> www.waventourist.com </span>thuộc quyền sở
                    hữu của Waventourist và được bảo vệ theo luật bản quyền, quý
                    khách chỉ được sử dụng trang web này với mục đích xem thông
                    tin và đăng ký thanh toán online cho cá nhân chứ không được
                    sử dụng cho bất cứ mục đích thương mại nào khác.
                  </div>
                </div>

                <div className="btnTong">
                  <button className="troVeBtn" onClick={handleBack}>
                    Trở về
                  </button>
                  <button className="tiepTucBtn" onClick={handleTT}>
                    Tiếp tục
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------------- */}
          <div className="a2">
            <div className="bangTheThongTin">
              <div className="hotline">Hỗ Trợ giao dịch: 1800 1990</div>
              <LazyLoad>
                <div className="cardTT">
                  <img className="imgCard" src={phuquoc} alt="Phu Quoc" />
                  <div className="borderCard">
                    <h1>
                      Du Lịch Phú Quốc - Khám Phá Bắc Đảo - Safari - Vinwonder -
                      Grand World
                    </h1>
                    <div className="theDanhGiaThongTin">
                      <img className="iconDanhGia" alt="" src={heartFill} />
                      <div className="diemDanhGia">8.8</div>
                      <div className="textDanhGia" onClick={toggleReviewPopup}>(21 Đánh giá)</div>
                      <button className="xemDanhGia" onClick={toggleReviewPopup}>
                        Xem tất cả đánh giá{" "}
                        <FontAwesomeIcon icon={faAngleRight} />
                      </button>
                    </div>
                    <div className="tb">
                      <div className="maTour">
                        <FontAwesomeIcon
                          icon={faBarcode}
                          className="iconMaTour"
                        />
                        Mã tour: <span>BNG-384920</span>
                      </div>

                      <div className="ngayDi">
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className="iconNgayDi"
                        />
                        Ngày đi: <span>24/12/2024</span>
                      </div>

                      <div className="ngayVe">
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className="iconNgayVe"
                        />
                        Ngày về: <span>26/12/2024</span>
                      </div>

                      <div className="thoiGian">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="iconThoiGian"
                        />
                        Thời gian: <span>2 ngày 1 đêm</span>
                      </div>

                      <div className="giaNguoiLon">
                        <FontAwesomeIcon
                          icon={faPerson}
                          className="iconNguoiLon"
                        />
                        Người lớn:{" "}
                        <span>
                          {adultPrice.toLocaleString()} VND x {adults}
                        </span>
                      </div>

                      {showPricing && (
                        <>
                          <div className="giaTreEm">
                            <FontAwesomeIcon
                              icon={faChildReaching}
                              className="iconTreEm"
                            />
                            Trẻ em:{" "}
                            <span>
                              {childPrice.toLocaleString()} VND x {children}
                            </span>
                          </div>
                          <div className="giaEmBe">
                            <FontAwesomeIcon
                              icon={faBaby}
                              className="iconEmBe"
                            />
                            Em bé:{" "}
                            <span>
                              {babyPrice.toLocaleString()} VND x {babies}
                            </span>
                          </div>
                        </>
                      )}

                      <p className="tong">
                        Tổng: <span>{totalAmount.toLocaleString()} VND</span>
                      </p>
                    </div>
                  </div>
                </div>
              </LazyLoad>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* popup đánh giá du khác */}
      <ReviewPopup
        isVisible={isReviewPopupVisible}
        togglePopup={toggleReviewPopup}
      />
    </div>
  );
};

export default TrangDatTour;
