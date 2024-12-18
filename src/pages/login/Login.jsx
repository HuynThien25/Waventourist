import beachVN from "../../assets/img/hinhAnh/beachVietNam.jpg";
import iconGG from "../../assets/img/logo/iconGG.png";
import iconFB from "../../assets/img/logo/iconFB.png";
import "./login.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft,faEyeSlash,faEye,} from "@fortawesome/free-solid-svg-icons";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10,11}$/;


const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailOrPhoneValid, setIsEmailOrPhoneValid] = useState(true); 
  const [isPasswordEntered, setIsPasswordEntered] = useState(true); 
  const [isFormValid, setIsFormValid] = useState(false);
  const [loginError, setLoginError] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailOrPhone === "") {
      setIsEmailOrPhoneValid(true); 
    } else {
      setIsEmailOrPhoneValid(
        emailRegex.test(emailOrPhone) || phoneRegex.test(emailOrPhone)
      );
    }
    
    setIsPasswordEntered(password.length >= 6 || password === ""); 
    setIsFormValid(
      (emailRegex.test(emailOrPhone) || phoneRegex.test(emailOrPhone)) &&
        password.length >= 6
    );
  }, [emailOrPhone, password]);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1); 
    } else {
      navigate("/"); 
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleForgetPass = () => {
    navigate("/quenMatKhau");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isFormValid) {
      try {
        // Gửi yêu cầu tới API để lấy danh sách người dùng
        const response = await fetch("http://localhost:3001/users");
        const users = await response.json();
  
        // Tìm người dùng khớp với email/phone và mật khẩu
        const foundUser = users.find(
          (user) =>
            (user.emailOrPhone === emailOrPhone || user.username === emailOrPhone) &&
            user.password === password
        );
  
        if (foundUser) {
          // Tạo token giả lập từ thông tin người dùng
          const token = btoa(`${foundUser.username}:${new Date().getTime()}`);
          localStorage.setItem("userToken", token); // Lưu token vào localStorage
  
          // Lưu thông tin username để hiển thị
          localStorage.setItem("loggedInUser", foundUser.username);
  
          // Điều hướng về trang trước đó hoặc trang chính
          navigate(-1);
        } else {
          setLoginError("Email/Số điện thoại hoặc mật khẩu không đúng");
        }
      } catch (error) {
        console.error("Lỗi khi lấy thông tin người dùng:", error);
        setLoginError("Có lỗi xảy ra. Vui lòng thử lại sau.");
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
                type={showPassword ? "text" : "password"} 
                placeholder="Nhập mật khẩu"
                className={`loginInput ${!isPasswordEntered && "inputError"}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash} 
                onClick={() =>
                  setShowPassword((prevShowPassword) => !prevShowPassword)
                } 
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
