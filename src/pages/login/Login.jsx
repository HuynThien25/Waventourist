import beachVN from "../../assets/img/hinhAnh/beachVietNam.jpg";
import iconGG from "../../assets/img/logo/iconGG.png";
import iconFB from "../../assets/img/logo/iconFB.png";
import "./login.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

// Regex to validate email and phone number formats
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10,11}$/;

// Dummy user data (you can customize this)
const DUMMY_USER = {
  email: "thien25@gmail.com",
  phone: "0123456789",
  password: "123456",
  username: "HuynhThien",
};

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailOrPhoneValid, setIsEmailOrPhoneValid] = useState(true); // New state for validation
  const [isPasswordEntered, setIsPasswordEntered] = useState(true); // State for password validation
  const [isFormValid, setIsFormValid] = useState(false); // Form validation state
  const [loginError, setLoginError] = useState(""); // State to track login error\
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Function to check email/phone validation
  useEffect(() => {
    if (emailOrPhone === "") {
      setIsEmailOrPhoneValid(true); // No error message if field is empty
    } else {
      setIsEmailOrPhoneValid(
        emailRegex.test(emailOrPhone) || phoneRegex.test(emailOrPhone)
      );
    }

    setIsPasswordEntered(password.length >= 6 || password === ""); // Password must be at least 6 characters
    setIsFormValid(
      (emailRegex.test(emailOrPhone) || phoneRegex.test(emailOrPhone)) &&
        password.length >= 6
    );
  }, [emailOrPhone, password]);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // Navigate back to previous page
    } else {
      navigate("/"); // Navigate to the homepage if no history
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleForgetPass = () => {
    navigate("/quenMatKhau");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Simulate login without API using dummy data
      if (
        (emailOrPhone === DUMMY_USER.email ||
          emailOrPhone === DUMMY_USER.phone) &&
        password === DUMMY_USER.password
      ) {
        // Save username in local storage to persist login
        localStorage.setItem("loggedInUser", DUMMY_USER.username);
        // Redirect to homepage after successful login
        navigate(-1);
      } else {
        setLoginError("Email/Số điện thoại hoặc mật khẩu không đúng");
      }
    }
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="loginContainer">
      <button onClick={handleBack} className="arrowLeft">
        <FontAwesomeIcon className="iconArrow" icon={faArrowLeft} />
      </button>
      <div className="loginWrapper">
        <div className="cardLogin">
          <h2>Đăng nhập hoặc tạo tài khoản</h2>
          <form className="loginForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nhập địa chỉ email/Số điện thoại"
              className={`loginInput ${!isEmailOrPhoneValid && "inputError"}`}
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
            {!isEmailOrPhoneValid && (
              <p className="errorText">
                Định dạng email hoặc số điện thoại không hợp lệ
              </p>
            )}
            <div className="passwordContainer">
              <input
                type={showPassword ? "text" : "password"} // Toggle type based on showPassword
                placeholder="Nhập mật khẩu"
                className={`loginInput ${!isPasswordEntered && "inputError"}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash} // Toggle icon based on showPassword
                onClick={() =>
                  setShowPassword((prevShowPassword) => !prevShowPassword)
                } // Toggle showPassword state
                className="eyeIcon"
              />
            </div>
            {!isPasswordEntered && (
              <p className="errorText">Mật khẩu phải có ít nhất 6 ký tự</p>
            )}
            {loginError && <p className="errorText">{loginError}</p>}
            <button
              className="loginButton"
              type="submit"
              disabled={!isFormValid}
            >
              Đăng nhập
            </button>
            <div className="loginLinks">
              <button className="quenMatKhau" onClick={handleForgetPass}>
                Quên mật khẩu?
              </button>
              <button className="dangKy" onClick={handleRegister}>
                <span>Chưa có tài khoản? </span>Đăng ký
              </button>
            </div>
            <div className="divider">Hoặc</div>
            <div className="loginSocial">
              <div className="iconGR">
                <img className="iconGG" alt="" src={iconGG} />
                <button className="googleButton">Đăng nhập bằng Google</button>
              </div>
              <div className="iconGR">
                <img className="iconFB" alt="" src={iconFB} />
                <button className="facebookButton">
                  Đăng nhập bằng Facebook
                </button>
              </div>
            </div>

            <div className="dieuKhoanLogin">
              <p>
                Bằng cách đăng ký, bạn đồng ý với{" "}
                <span>Điều khoản & Điều kiện</span> của chúng tôi và bạn đã đọc{" "}
                <span>Chính Sách Quyền Riêng Tư</span> của chúng tôi
              </p>
            </div>
            
          </form>
        </div>
        <img className="backgroundBeachVN" src={beachVN} alt="Vietnam Beach" />
      </div>
    </div>
  );
};

export default Login;
