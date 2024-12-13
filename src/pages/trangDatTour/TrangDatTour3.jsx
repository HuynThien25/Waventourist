import "./trangDatTour3.css";
import test from "../../assets/img/hinhAnh/test.jpg";
import Navbar from "../../components/navbar/Navbar";
import phuquoc from "../../assets/img/hinhAnh/phuquoc.jpg";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import mastercard from "../../assets/img/logo/mastercard.png";
import momo from "../../assets/img/logo/momo.png";
import visa from "../../assets/img/logo/visa.png";
import vnpay from "../../assets/img/logo/vnpay.png";
import zalopay from "../../assets/img/logo/zalopay.png";
import vietcombank from "../../assets/img/logo/vietcombank.jpg";
import acb from "../../assets/img/logo/acb.jpg";
import winmart from "../../assets/img/logo/winmart.jpg";
import circleK from "../../assets/img/logo/circlek.jpg";
import fptshop from "../../assets/img/logo/fptshop.jpg";
import techcombank from "../../assets/img/logo/techcombank.jpg";
import heartFill from "../../assets/img/logo/heartFill.png";
import {faClock,faTags,faAngleRight,faBarcode,faCalendar,faCalendarDays,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; 
import { useTotalAmount } from "../../components/tongGiaTien/TongGiaTien";
const TrangDatTour3 = () => {
  const navigate = useNavigate();
  const { totalAmount } = useTotalAmount();
  const [destination, setDestination] = useState("");
  const location = useLocation();
  const [selectedPayment, setSelectedPayment] = useState(""); 
  const [selectedBank, setSelectedBank] = useState("");
  const [timeLeft, setTimeLeft] = useState(10000);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTT = () => {
    setIsProcessing(true);

    setTimeout(() => {
      navigate("/trangDatTour4", { state: { destination } });
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    // khi hết th gian chuyển về trang chủ
    if (timeLeft === 0) {
      navigate("/");
    }
    return () => clearInterval(interval);
  }, [timeLeft, navigate]);

  // Chuyển đổi từ giây sang giờ, phút, giây
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600); 
    const minutes = Math.floor((timeInSeconds % 3600) / 60); 
    const seconds = timeInSeconds % 60; 
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`; 
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const togglePaymentMethod = (method) => {
    setSelectedPayment((prev) => (prev === method ? "" : method));
  };

  const toggleBankOption = (bank) => {
    setSelectedBank(bank);
  };

  return (
    <div className="datTourContain">
      <Navbar />
      <div className="center1024">
        <div className="sliderText3">Đặt Tour</div>
      </div>
      <img className="sliderIMG" alt="" src={test} />

      <div className="cvb">
        <div className="cacBuocDatTour">
          <div className="chonTour3">Chọn Tour</div>
          <div className="nhapThongTin3">Nhập Thông Tin</div>
          <div className="thanhToan3">Thanh Toán</div>
          <div className="xacNhan3">Xác Nhận</div>
        </div>
      </div>

      <div className="cvb">
        <div className="datTourContainer">
          <div className="mklp">
          <div className="c1">
            <div className="thanhToanContainer">
              <div className="timeLeft">
                <p>
                  Đừng lo lắng, giá vẫn giữ nguyên. Hoàn tất thanh toán của bạn
                  bằng <span>{formatTime(timeLeft)}</span>{" "}
                  <FontAwesomeIcon icon={faClock} className="timer" />
                </p>
              </div>
              <div className="soLuongHK3">
                {/* <h1>PHƯƠNG THỨC THANH TOÁN</h1> */}
                <h4>Chọn một trong các phương thức thanh toán sau:</h4>
                <div className="paymentMethods">
                  <div className="method">
                    <div className="th">
                      <label className="customRadio">
                        <input
                          className="lp"
                          type="radio"
                          checked={selectedPayment === "ckNganHang"}
                          onChange={() => togglePaymentMethod("ckNganHang")}
                        />
                        <span className="radioMark"></span>
                        Chuyển khoản ngân hàng
                      </label>
                      <div>
                        <img className="imgs" src={vietcombank} alt="" />
                        <img className="imgs" src={acb} alt="" />
                        <img className="imgs" src={techcombank} alt="" />
                      </div>
                    </div>
                    <div
                      className={`methodDetails ${
                        selectedPayment === "ckNganHang" ? "show" : ""
                      }`}
                    >
                      <div className="bang1">
                        <ul>
                          <li>
                            • Chuyển khoản ngân hàng chỉ áp dụng từ 8 giờ sáng
                            đến 8 giờ tối. Bạn có thể chuyển khoản qua kênh ngân
                            hàng điện tử vcb và các ngân hàng thương mại khác
                          </li>
                          <li>
                            • Chuyển khoản liên ngân hàng qua ATM hoặc Internet
                            Banking không khả dụng
                          </li>
                          <li>
                            • Hãy lựa chọn dịch vụ chuyển tiền nhanh hoặc chuyển
                            từ ngân hàng khác.
                          </li>
                        </ul>
                      </div>
                      <div className="chonNganHang">
                        <p>Chọn tài khoản đích</p>
                        <div className="tbd">
                          <label className="customRadio2">
                            <input
                              type="radio"
                              checked={selectedBank === "vietcombank"}
                              onChange={() => toggleBankOption("vietcombank")}
                            />
                            <span className="radioMark2"></span>
                            <p>Chuyển tiền qua Vietcombank</p>
                            <img
                              className="imgs2"
                              alt=""
                              src={vietcombank}
                            ></img>
                          </label>
                        </div>
                        <div className="tbd">
                          <label className="customRadio2">
                            <input
                              type="radio"
                              checked={selectedBank === "techcombank"}
                              onChange={() => toggleBankOption("techcombank")}
                            />
                            <span className="radioMark2"></span>
                            <p>Chuyển tiền qua Techcombank</p>
                            <img
                              className="imgs2"
                              alt=""
                              src={techcombank}
                            ></img>
                          </label>
                        </div>
                        <div className="tbd">
                          <label className="customRadio2">
                            <input
                              type="radio"
                              checked={selectedBank === "acb"}
                              onChange={() => toggleBankOption("acb")}
                            />
                            <span className="radioMark2"></span>
                            <p>Chuyển tiền qua ACB</p>
                            <img className="imgs2" alt="" src={acb}></img>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="method">
                    <div className="th">
                      <label className="customRadio">
                        <input
                          type="radio"
                          checked={selectedPayment === "viDienTu"}
                          onChange={() => togglePaymentMethod("viDienTu")}
                        />
                        <span className="radioMark"></span>
                        Ví điện tử khác
                      </label>
                      <div>
                        <img className="imgs" src={vnpay} alt="" />
                        <img className="imgs" src={momo} alt="" />
                        <img className="imgs" src={zalopay} alt="" />
                      </div>
                    </div>
                    <div
                      className={`methodDetails ${
                        selectedPayment === "viDienTu" ? "show" : ""
                      }`}
                    >
                      <div className="bang1">
                        <ul>
                          <li>
                            • Thanh toán chỉ có sẵn trên ứng dụng liệt kê bên
                            dưới. Đảm bảo bạn cài đặt ứng dụng ví điện tử của
                            mình trước khi tiếp tục.
                          </li>
                          <li>
                            • Sau khi nhấp nút "thanh toán", bạn sẽ được chuyển
                            hướng đến chọn ví điện tử của mình để xem mã QR.
                          </li>
                          <li>• Các tùy chọn có sẵn: Zalopay, VNpay, Momo</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="method">
                    <div className="th">
                      <label className="customRadio">
                        <input
                          type="radio"
                          checked={selectedPayment === "momo"}
                          onChange={() => togglePaymentMethod("momo")}
                        />
                        <span className="radioMark"></span>
                        Thẻ thanh toán
                      </label>
                      <div>
                        <img className="imgs" src={visa} alt="" />
                        <img className="imgs" src={mastercard} alt="" />
                      </div>
                    </div>
                    <div
                      className={`methodDetails ${
                        selectedPayment === "momo" ? "show" : ""
                      }`}
                    >
                      <div className="bang2">
                        <div className="soThe">
                          <p>Số thẻ tín dụng</p>
                          <input
                            type="text"
                            placeholder="Số thẻ tín dụng"
                          ></input>
                        </div>
                        <div className="theChung2">
                          <div className="hopLe">
                            <p>Hợp lệ đến</p>
                            <input type="text" placeholder="MM/YY"></input>
                          </div>
                          <div className="cvvcvn">
                            <p>CVV/CVN</p>
                            <input
                              type="text"
                              placeholder="Mã 3-4 chữ số"
                            ></input>
                          </div>
                        </div>
                        <div className="tenThe">
                          <p>Tên trên thẻ</p>
                          <input
                            type="text"
                            placeholder="Tên ghi trên thẻ"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="method">
                    <div className="th">
                      <label className="customRadio">
                        <input
                          type="radio"
                          name="paymentMethod" 
                          checked={selectedPayment === "cuaHang"}
                          onChange={() => togglePaymentMethod("cuaHang")}
                        />
                        <span className="radioMark"></span>
                        Thanh toán tại cửa hàng
                      </label>
                      <div>
                        <img className="imgs2" src={fptshop} alt="" />
                        <img className="imgs2" src={winmart} alt="" />
                        <img className="imgs2" src={circleK} alt="" />
                      </div>
                    </div>
                    <div
                      className={`methodDetails ${
                        selectedPayment === "cuaHang" ? "show" : ""
                      }`}
                    >
                      <div className="bang1">
                        <ul>
                          <li>
                            • Thanh toán chỉ có sẵn tại các quầy được liệt kê
                            bên dưới trong giờ làm việc của họ.
                          </li>
                          <li>
                            • Để có trải nghiệm thanh toán liền mạch, vui lòng
                            thanh toán số tiền chính xác trước khi hết thời gian
                            thanh toán.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ------------------ */}
              </div>
              <div className="maKhuyenMai">
                <div className="maKM">
                  <div className="themMaTitle">
                    <div className="ma1">
                      <FontAwesomeIcon icon={faTags} className="iconMa1" />
                      <p>Thêm mã giảm</p>
                    </div>
                  </div>
                  <div className="grInputKM">
                    <input
                      type="text"
                      className="inputMaKM"
                      placeholder="Mã khuyến mãi"
                    ></input>
                    <button className="btnApDung">Áp dụng</button>
                  </div>
                </div>
              </div>
              <div className="btnTong3">
                <div className="tongGiaTien">
                  <div className="tongGiaTienText">Tổng giá tiền</div>
                  <div className="tongGiaTienSo">
                    {totalAmount.toLocaleString()} VND
                  </div>
                </div>
                <button className="thanhToanBtn" onClick={handleTT}>
                  Thanh Toán & Hiển thị mã QR
                </button>
                <p>
                  Bằng cách tiếp tục thanh toán. Bạn đã đồng ý{" "}
                  <span>điều khoản & điều kiện </span>
                  và <span>Chính sách quyền riêng tư</span>.
                </p>
                {isProcessing && (
                  <div className="popupOverlay">
                    <div className="popupContent">
                      <FontAwesomeIcon
                        icon={faSpinner}
                        spin
                        className="popupSpinner"
                      />
                      <p>
                        Giao dịch của bạn đang được xác nhận, vui lòng chờ một
                        vài phút...
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="c2">
            <div className="bangTheThongTin">
              <div className="hotline">Hỗ Trợ giao dịch: 1800 1990</div>
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
                    <div className="textDanhGia">(21 Đánh giá)</div>
                    <button className="xemDanhGia">
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
                  </div>
                  <p className="tong">
                    Tổng: <span>{totalAmount.toLocaleString()} VND</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrangDatTour3;
