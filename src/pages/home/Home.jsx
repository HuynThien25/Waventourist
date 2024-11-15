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

const Home = () => {
  const location = useLocation();
  const [username, setUsername] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Retrieve username from localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUsername(loggedInUser);
    }
  }, []);

  return (
    <div>
      <Navbar username={username}/>
      <Header />
      <div className="homeContainer">
        <h1 className="homeTitle">TOUR MỚI 2024</h1>
          <PropertyList />
        <h1 className="homeTitle">Các ưu đãi mới dành cho bạn</h1>
        <KhuyenMai />
        <h1 className="homeTitle">Địa điểm du lịch trong nước được ưa thích</h1>
        <TourTrongNuoc />
        <h1 className="homeTitle">Địa điểm du lịch nước ngoài được lựa chọn nhiều</h1>
        <TourNgoaiNuoc />
        <h1 className="homeTitle">Lý do nên chọn WavenTourist ?</h1>
        <Offers />
        <h1 className="homeTitle">Khách hàng nói gì về WavenTourist</h1>
        <CustomerRV />
        <GoBackButton/>
        <QrCode />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
