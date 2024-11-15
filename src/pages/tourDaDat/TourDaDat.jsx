import "./tourDaDat.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TourDaDat = () => {
  const location = useLocation();

  // load nằm ở đầu trang
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Navbar />
      <div className="tourDaDatContain">
        <div className="tourDaDat">
          <div className="bangTourDaDat">
            <h3>Tour đã đặt</h3>
            <div className="thongTinCaNhan">Thông tin cá nhân</div>
            <div className="tourDaDatTitle">Thông tin về tour</div>
          </div>
          <div className="bangCacThongTinTour">
            <div className="tourHeader">
              <div>ID</div>
              <div>Mã tour</div>
              <div>Ngày đi</div>
              <div>Ngày về</div>
              <div>Tour</div>
              <div>Số người</div>
              <div>Giá</div>
            </div>
            <div className="tourRow">
              <div>1</div>
              <div>SN34545</div>
              <div>27/09/2024</div>
              <div>30/09/2024</div>
              <div>Phú Quốc</div>
              <div>1</div>
              <div>3.159.000 VND</div>
            </div>
            <div className="tourRow">
              <div>2</div>
              <div>SD13842</div>
              <div>27/10/2024</div>
              <div>30/10/2024</div>
              <div>Đà Nẵng</div>
              <div>2</div>
              <div>4.109.000 VND</div>
            </div>
            <div className="tourRow">
              <div>3</div>
              <div>SF48532</div>
              <div>27/11/2024</div>
              <div>30/11/2024</div>
              <div>Hà Nội</div>
              <div>2</div>
              <div>7.359.000 VND</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TourDaDat;
