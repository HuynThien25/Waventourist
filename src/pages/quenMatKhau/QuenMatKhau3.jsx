import "./quenMatKhau3.css";
import beachVN from "../../assets/img/hinhAnh/beachVietNam.jpg";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const QuenMatKhau3 = () => {
  const navigate = useNavigate();

  // States to manage form inputs and validation
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);
  const [showPopup2, setShowPopup2] = useState(false);

  // Regex to validate email and phone number formats

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  // Back navigation handling
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  // Validation check function
  const handleSubmit = (e) => {
    e.preventDefault();

    const isPasswordValid = passwordRegex.test(password);
    const isConfirmPasswordValid = password === confirmPassword;

    if (isPasswordValid && isConfirmPasswordValid) {
      setIsFormValid(true);
      setShowPopup2(true); // Hiển thị popup khi đăng ký thành công
    } else {
      setIsFormValid(false); // Không hợp lệ, báo lỗi
    }
  };

  const closePopup2 = () => {
    navigate("/");
    setShowPopup2(false);
  };

  return (
    <div>
      <div className="forgetPassContainer3">
        <button onClick={handleBack} className="arrowLeft">
          <FontAwesomeIcon className="iconArrow" icon={faArrowLeft} />
        </button>
        <div className="forgetPassWrapper3">
          <div className="cardForgetPass3">
            <h2>Đổi mật khẩu</h2>
            <form className="forgetPassForm3" onSubmit={handleSubmit}>
              <input
                type="password"
                placeholder="Nhập mật khẩu mới"
                className="forgetPassInput3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isFormValid && !passwordRegex.test(password) && (
                <p className="errorText">Không đúng dạng mật khẩu</p>
              )}
              <input
                type="password"
                placeholder="Xác nhận lại mật khẩu mới"
                className="forgetPassInput3"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {!isFormValid && password !== confirmPassword && (
                <p className="errorText">Mật khẩu xác nhận không khớp</p>
              )}
              <p>
                Lưu ý mật khẩu mới phải thỏa mãn các điều kiện sau
                <br />
                *Có độ dài ít nhất 6 kí tự
                <br />
                *Chứa ít nhất 01 kí tự số, 01 kí tự chữ và 01 kí tự đặc biệt
              </p>
              <button className="forgetPassButton3" type="submit">
                Cập nhật
              </button>
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
      {showPopup2 && (
        <div className="popup2">
          <div className="popupContent2">
            <h3>Chúc mừng</h3>
            <p>Mật khẩu của bạn đã được cập nhật thành công</p>
            <button className="popupButton2" onClick={closePopup2}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuenMatKhau3;
