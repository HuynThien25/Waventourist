import "./quenMatKhau.css";
import beachVN from "../../assets/img/hinhAnh/beachVietNam.jpg";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const QuenMatKhau = () => {
  const navigate = useNavigate();

  // States to manage form inputs and validation
  const [fullName, setFullName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  // Regex to validate email and phone number formats
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,11}$/;

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

    const isEmailOrPhoneValid =
      emailRegex.test(emailOrPhone) || phoneRegex.test(emailOrPhone);

    if (fullName && isEmailOrPhoneValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false); // Không hợp lệ, báo lỗi
    }
  };

  const handleTiepTuc=()=>{
    navigate("/quenMatKhau2")
  }

  return (
    <div>
      <div className="forgetPassContainer">
        <button onClick={handleBack} className="arrowLeft">
          <FontAwesomeIcon className="iconArrow" icon={faArrowLeft} />
        </button>
        <div className="forgetPassWrapper">
          <div className="cardForgetPass">
            <h2>Quên mật khẩu</h2>
            <p>
              Quý khách vui lòng nhập email/Số điện thoại đã sử dụng để đăng ký
              tài khoản
            </p>
            <form className="forgetPassForm" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Địa chỉ email/Số điện thoại"
                className="forgetPassInput"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {!isFormValid && !emailRegex.test(emailOrPhone) && (
                <p className="errorText">
                  Email hoặc số điện thoại không hợp lệ
                </p>
              )}

              <button onClick={handleTiepTuc} className="forgetPassButton" type="submit">
                Tiếp tục
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
    </div>
  );
};

export default QuenMatKhau;
