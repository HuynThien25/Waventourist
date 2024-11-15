import "./quenMatKhau2.css";
import beachVN from "../../assets/img/hinhAnh/beachVietNam.jpg";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const QuenMatKhau2 = () => {
  const navigate = useNavigate();

  // States to manage form inputs, validation, and countdown
  const [verificationCode, setVerificationCode] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const fixedCode = "123456"; // Mã xác nhận cố định

  // Back navigation handling
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  // Handle sending verification code and start countdown
  const handleSendCode = () => {
    setIsCodeSent(true);
    setCountdown(60); // Set countdown to 60 seconds
  };

  // Countdown logic
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    }
    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, [countdown]);

  // Validation check function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (verificationCode === fixedCode) {
      setIsFormValid(true);
      navigate("/quenMatKhau3"); // Điều hướng sang trang tiếp theo khi mã đúng
    } else {
      setIsFormValid(false); // Không hợp lệ, báo lỗi
    }
  };

  return (
    <div>
      <div className="forgetPassContainer2">
        <button onClick={handleBack} className="arrowLeft">
          <FontAwesomeIcon className="iconArrow" icon={faArrowLeft} />
        </button>
        <div className="forgetPassWrapper2">
          <div className="cardForgetPass2">
            <h2>Quên mật khẩu</h2>
            <p>Nhập mã xác nhận gửi về tài khoản email/Số điện thoại</p>
            <form className="forgetPassForm2" onSubmit={handleSubmit}>
              <div className="passGroup">
                <input
                  type="text"
                  placeholder="Nhập mã xác nhận"
                  className="forgetPassInput2"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
                <button
                  type="button"
                  className="gui"
                  onClick={handleSendCode}
                  disabled={countdown > 0} // Disable the button while countdown is active
                >
                  {countdown > 0 ? `${countdown}s` : "Gửi"}
                </button>
              </div>
              {!isFormValid && verificationCode !== fixedCode && (
                <p className="errorText">Mã xác nhận không đúng</p>
              )}

              <button className="forgetPassButton2" type="submit">
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

export default QuenMatKhau2;
