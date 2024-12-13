import beachVN from "../../assets/img/hinhAnh/beachVietNam.jpg";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./register.css";
const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,11}$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailOrPhoneValid =
      emailRegex.test(emailOrPhone) || phoneRegex.test(emailOrPhone);
    const isPasswordValid = passwordRegex.test(password);
    const isConfirmPasswordValid = password === confirmPassword;

    if (
      fullName &&
      isEmailOrPhoneValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      setIsFormValid(true);
      setShowPopup(true); 
    } else {
      setIsFormValid(false); 
    }
  };

  const closePopup = () => {
    navigate("/");
    setShowPopup(false);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="registerContainer">
        <button onClick={handleBack} className="arrowLeft">
          <FontAwesomeIcon className="iconArrow" icon={faArrowLeft} />
        </button>
        <div className="registerWrapper">
          <div className="cardRegister">
            <h2>Đăng ký</h2>
            <form className="registerForm" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Họ và tên"
                className="registerInput"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Nhập địa chỉ email/Số điện thoại"
                className="registerInput"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
              {!isFormValid && !emailRegex.test(emailOrPhone) && (
                <p className="errorText">
                  Email hoặc số điện thoại không hợp lệ
                </p>
              )}
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                className="registerInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isFormValid && !passwordRegex.test(password) && (
                <p className="errorText">
                  Mật khẩu phải có ít nhất 6 ký tự, gồm chữ, số và ký tự đặc
                  biệt
                </p>
              )}
              <input
                type="password"
                placeholder="Xác nhận lại mật khẩu"
                className="registerInput"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {!isFormValid && password !== confirmPassword && (
                <p className="errorText">Mật khẩu xác nhận không khớp</p>
              )}
              <button className="registerButton" type="submit">
                Tạo tài khoản
              </button>
              <div className="loginLinks">
                <button onClick={handleLogin} className="dangNhap">
                  <span>Đã có tài khoản? </span>Đăng nhập
                </button>
              </div>
            </form>
          </div>
          <img
            className="backgroundBeachVN"
            src={beachVN}
            alt="Vietnam Beach"
          />
        </div>
      </div>
      {/* Popup hiển thị sau khi đăng ký thành công */}
      {showPopup && (
        <div className="popup">
          <div className="popupContent">
            <h3>Chúc mừng</h3>
            <p>Bạn đã tạo tài khoản thành công</p>
            <button className="popupButton" onClick={closePopup}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
