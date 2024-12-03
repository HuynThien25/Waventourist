import CustomerRV from "../../components/customerRV/CustomerRV";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import KhuyenMai from "../../components/khuyenmai/KhuyenMai";
import Navbar from "../../components/navbar/Navbar";
import Offers from "../../components/offers/Offers";
import PropertyList from "../../components/propertyList/PropertyList";
import QrCode from "../../components/qrCode/QrCode";
import TourNgoaiNuoc from "../../components/tourNgoaiNuoc/TourNgoaiNuoc";
import TourTrongNuoc from "../../components/tourTrongNuoc/TourTrongNuoc";
import GoBackButton from "../../components/goBackBtn/GoBackBtn";
import "./home.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link, animateScroll as scroll } from 'react-scroll';


const Home = () => {
  const location = useLocation();
  const [username, setUsername] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUsername(loggedInUser);
    }
  }, []);

  return (
    <div>
      <Navbar username={username} />
      <Header />
      <div className="homeContainer">
        <h1 className="homeTitle">
          <Link to="tourMoi" smooth={true} duration={500} offset={-70}>TOUR MỚI 2024</Link>
        </h1>
        <div id="tourMoi">
          <PropertyList />
        </div>

        <h1 className="homeTitle">
          <Link to="khuyenMai" smooth={true} duration={500} offset={-70}>Các ưu đãi mới dành cho bạn</Link>
        </h1>
        <div id="khuyenMai">
          <KhuyenMai />
        </div>

        <h1 className="homeTitle">
          <Link to="tourTrongNuoc" smooth={true} duration={500} offset={-70}>Địa điểm du lịch trong nước được ưa thích</Link>
        </h1>
        <div id="tourTrongNuoc">
          <TourTrongNuoc />
        </div>

        <h1 className="homeTitle">
          <Link to="tourNgoaiNuoc" smooth={true} duration={500} offset={-70}>Địa điểm du lịch nước ngoài được lựa chọn nhiều</Link>
        </h1>
        <div id="tourNgoaiNuoc">
          <TourNgoaiNuoc />
        </div>

        <h1 className="homeTitle">
          <Link to="offers" smooth={true} duration={500} offset={-70}>Lý do nên chọn WavenTourist ?</Link>
        </h1>
        <div id="offers">
          <Offers />
        </div>

        <h1 className="homeTitle">
          <Link to="customerReviews" smooth={true} duration={500} offset={-70}>Khách hàng nói gì về WavenTourist</Link>
        </h1>
        <div id="customerReviews">
          <CustomerRV />
        </div>

        <GoBackButton />
        <QrCode />
        <Footer />
      </div>
    </div>
  );
};



export default Home;
