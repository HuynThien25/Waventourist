import "./trangDatTour2.css";
import test from "../../assets/img/hinhAnh/test.jpg";
import Navbar from "../../components/navbar/Navbar";
import phuquoc from "../../assets/img/hinhAnh/phuquoc.jpg";
import heartFill from "../../assets/img/logo/heartFill.png";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight,faBarcode,faCalendar,faCalendarDays,} from "@fortawesome/free-solid-svg-icons";
import { useTotalAmount } from "../../components/tongGiaTien/TongGiaTien";
import ReviewPopup from "../../components/reviewPopup/ReviewPopup";
import axios from "axios";

const TrangDatTour2 = () => {
  const navigate = useNavigate();
  const { totalAmount } = useTotalAmount();
  const [destination, setDestination] = useState("");
  const location = useLocation();
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    country: "",
  });
  const [errors, setErrors] = useState({});
  const [isReviewPopupVisible, setReviewPopupVisible] = useState(false);

  const toggleReviewPopup = () => {
    setReviewPopupVisible(!isReviewPopupVisible);
  };

  const handleTT = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      navigate("/trangDatTour3  ", { state: { destination } });
    }
  };

  const handleBack = () => {
    navigate("/trangDatTour", { state: { destination } });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === "country") setSelectedCountry(value);
  };

  const validateForm = () => {
    const errors = {};
    if (!form.name) errors.name = "Đây là thông tin bắt buộc";
    if (!form.phone) errors.phone = "Đây là thông tin bắt buộc";
    if (!form.email) errors.email = "Đây là thông tin bắt buộc";
    if (!form.address) errors.address = "Đây là thông tin bắt buộc";
    if (
      !form.country ||
      !countries.some((country) => country.iso2 === form.country)
    ) {
      errors.country = "Đây là thông tin bắt buộc";
    }
    if (!form.city || !cities.some((city) => city.name === form.city)) {
      errors.city = "Đây là thông tin bắt buộc";
    }
    return errors;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://api.countrystatecity.in/v1/countries",
          {
            headers: {
              "X-CSCAPI-KEY":
                "N29nWmJTU3JTWWd4em1TTFJGZGRMQmNhTU9FWkxoV1owbUU1NzQxeg==", 
            },
          }
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách quốc gia:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = async (countryCode) => {
    setSelectedCountry(countryCode);
    setForm({ ...form, country: countryCode, city: "" });

    try {
      const response = await axios.get(
        `https://api.countrystatecity.in/v1/countries/${countryCode}/cities`,
        {
          headers: {
            "X-CSCAPI-KEY":
              "N29nWmJTU3JTWWd4em1TTFJGZGRMQmNhTU9FWkxoV1owbUU1NzQxeg==", 
          },
        }
      );
      setCities(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách thành phố:", error);
    }
  };

  const handleCityChange = (cityName) => {
    setForm({ ...form, city: cityName });
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
          <div className="chonTour2">Chọn Tour</div>
          <div className="nhapThongTin2">Nhập Thông Tin</div>
          <div className="thanhToan2">Thanh Toán</div>
          <div className="xacNhan2">Xác Nhận</div>
        </div>
      </div>

      <div className="cvb">
        <div className="datTourContainer">
          <div className="mklp">
            <div className="b1">
              <div className="ttlhContainer">
                <div className="soLuongHK2">
                  <h1>THÔNG TIN LIÊN HỆ</h1>
                  <div className="row2">
                    <div className="formGroup">
                      <div className="nguoiLon">Tên(*)</div>
                      <input
                        type="text"
                        name="name"
                        className="dd"
                        value={form.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && (
                        <div className="error">{errors.name}</div>
                      )}
                    </div>
                    <div className="formGroup">
                      <div className="treEm">Số điện thoại(*)</div>
                      <input
                        type="text"
                        name="phone"
                        className="dd"
                        value={form.phone}
                        onChange={handleInputChange}
                      />
                      {errors.phone && (
                        <div className="error">{errors.phone}</div>
                      )}
                    </div>
                  </div>
                  <div className="row2">
                    <div className="formGroup">
                      <div className="treEm">Email(*)</div>
                      <input
                        type="email"
                        name="email"
                        className="dd"
                        value={form.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <div className="error">{errors.email}</div>
                      )}
                    </div>

                    <div className="formGroup">
                      <div className="treEm">Địa chỉ(*)</div>
                      <input
                        type="text"
                        name="address"
                        className="dd"
                        value={form.address}
                        onChange={handleInputChange}
                      />
                      {errors.address && (
                        <div className="error">{errors.address}</div>
                      )}
                    </div>
                  </div>
                  <div className="row2">
                    <div className="formGroup">
                      <div className="treEm">Quốc gia(*)</div>
                      <select
                        value={selectedCountry}
                        onChange={(e) => handleCountryChange(e.target.value)}
                      >
                        <option value="">Chọn quốc gia</option>
                        {countries.map((country) => (
                          <option key={country.iso2} value={country.iso2}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                      {errors.country && (
                        <div className="error">{errors.country}</div>
                      )}
                    </div>
                    <div className="formGroup">
                      <div className="treEm">Thành phố(*)</div>
                      <select
                        value={form.city}
                        onChange={(e) => handleCityChange(e.target.value)}
                      >
                        <option value="">Chọn thành phố</option>
                        {cities.map((city) => (
                          <option key={city.id} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                      {errors.city && (
                        <div className="error">{errors.city}</div>
                      )}
                    </div>
                  </div>
                  <h2>Thông tin hành khách #1</h2>
                  <div className="row2">
                    <div className="formGroup">
                      <div className="nguoiLon">Tên</div>
                      <input type="text" className="dd"></input>
                    </div>
                    <div className="formGroup">
                      <div className="treEm">Số điện thoại</div>
                      <input type="text" className="dd"></input>
                    </div>
                  </div>
                  <div className="row2">
                    <div className="formGroup">
                      <div className="nguoiLon">Địa chỉ</div>
                      <input type="text" className="dd"></input>
                    </div>
                    <div className="formGroup">
                      <div className="treEm">Giới tính</div>
                      <select
                        name="gender"
                        className="dd"
                        value={form.gender}
                        onChange={handleInputChange}
                      >
                        <option value="">Chọn Giới tính</option>
                        <option value="Male">Nam</option>
                        <option value="Female">Nữ</option>
                        <option value="Other">Khác</option>
                      </select>
                    </div>
                  </div>
                  <div className="row2">
                    <div className="formGroup">
                      <div className="treEm">Quốc gia(*)</div>
                      <select
                        value={selectedCountry}
                        onChange={(e) => handleCountryChange(e.target.value)}
                      >
                        <option value="">Chọn quốc gia</option>
                        {countries.map((country) => (
                          <option key={country.iso2} value={country.iso2}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="formGroup">
                      <div className="treEm">Passport</div>
                      <input type="text" className="dd"></input>
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

            <div className="b2">
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
                      <div className="textDanhGia" onClick={toggleReviewPopup}>
                        (21 Đánh giá)
                      </div>
                      <button
                        className="xemDanhGia"
                        onClick={toggleReviewPopup}
                      >
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
      {/* popup đánh giá du khác */}
      <ReviewPopup
        isVisible={isReviewPopupVisible}
        togglePopup={toggleReviewPopup}
      />
    </div>
  );
};

export default TrangDatTour2;
