import "./footer.css";
import logo from "../../assets/img/logo/logo.png";
import applepay from "../../assets/img/logo/apple-pay.png";
import mastercard from "../../assets/img/logo/mastercard.png";
import momo from "../../assets/img/logo/momo.png";
import visa from "../../assets/img/logo/visa.png";
import vnpay from "../../assets/img/logo/vnpay.png";
import zalopay from "../../assets/img/logo/zalopay.png";
import vietcombank from "../../assets/img/logo/vietcombank.jpg";
import acb from "../../assets/img/logo/acb.jpg";
import facebook from "../../assets/img/logo/facebook.png";
import instagram from "../../assets/img/logo/instagram.png";
import youtube from "../../assets/img/logo/youtube.png";
import tiktok from "../../assets/img/logo/tiktok.png";

const Footer = () => {
  return (
    <div className="mail">
      <div className="listp">
        <div className="flists">
          <div className="grListLogo">
          <img src={logo} alt="Group 5" className="icon2" />
          <span className="logo2">WavenTourist</span>
          </div>
          <div className="subLogo">Đối tác thanh toán</div>
          <div className="listLogo">
            <img src={applepay} className="list" alt=""/>
            <img src={vietcombank} className="list" alt=""/>
            <img src={mastercard} className="list" alt=""/>
            <img src={visa} className="list" alt=""/>
            <img src={acb} className="list" alt=""/>
            <img src={momo} className="list" alt=""/>
            <img src={vnpay} className="list" alt=""/>
            <img src={zalopay} className="list" alt=""/>
          </div>
          <div className="subLogo">Theo dõi chúng tôi trên</div>
          <div className="listLogo2">
            <img src={facebook} className="list2" alt=""/>
            <img src={instagram} className="list2" alt=""/>
            <img src={youtube} className="list2" alt=""/>
            <img src={tiktok} className="list2" alt=""/>
          </div>
          <div className="subLogo">
            Email: infor@waventourist.com
            <br/>
            Tổng đài: 1900 9999
            <br />
            Từ 8:00 - 23:00 hằng ngày
          </div>
        </div>
        <ul>
          <div className="grFlists">
          <div className="flists">
            <li className="lists">Dịch Vụ</li>
            <ul className="fList">
              <li className="fListItem">Tour Trong Nước</li>
              <li className="fListItem">Tour Nước Ngoài</li>
              <li className="fListItem">Dịch Vụ Du Lịch</li>
              <li className="fListItem">Vé Máy Bay</li>
              <li className="fListItem">Thuê Xe</li>
              <li className="fListItem">Đặt Phòng</li>
            </ul>
          </div>

          <div className="flists">
            <li className="lists">Chăm Sóc Khách Hàng</li>
            <ul className="fList">
              <li className="fListItem">Thẻ Khách Hàng</li>
              <li className="fListItem">Tải App WavenTourist</li>
              <li className="fListItem">Travel Voucher</li>
              <li className="fListItem">Bảo Hiểm Du Lịch</li>
              <li className="fListItem">Ý Kiến Khách Hàng</li>
              <li className="fListItem">Giải Quyết Khiếu Nại</li>
            </ul>
          </div>

          <div className="flists">
            <li className="lists">Thông Tin</li>
            <ul className="fList">
              <li className="fListItem">Tin Lữ Hành WavenTourist</li>
              <li className="fListItem">Thỏa thuận sử dụng</li>
              <li className="fListItem">Trách Nhiệm Xã Hội</li>
              <li className="fListItem">Tạp chí du lịch</li>
              <li className="fListItem">Chính sách quyền riêng tư</li>
              <li className="fListItem">Chính Sách Giao Nhận</li>
            </ul>
          </div>

          <div className="flists">
            <li className="lists">Liên Hệ</li>
            <ul className="fList">
              <li className="fListItem">Giới Thiệu</li>
              <li className="fListItem">Chi Nhánh</li>
              <li className="fListItem">Điều Khoản Chung</li>
              <li className="fListItem">Quy Định Thanh Toán</li>
            </ul>
          </div>
          </div>
        </ul>
      </div>
      <div className="fText">
        Copyright © 2024–2025 waventourist.com™. All rights reserved.
      </div>

      <div className="footer_priceline_list">
        <ul>
          <li>
            <img
              src="https://cf2.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png"
              title="Priceline"
              alt="Priceline"
              height={26}
              width={91}
            />
          </li>
          <li>
            <img
              src="https://cf2.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png"
              title="Kayak"
              alt="Kayak"
              height={26}
              width={79}
            />
          </li>
          <li>
            <img
              src="https://cf2.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png"
              title="Agoda"
              alt="Agoda"
              height={26}
              width={70}
            />
          </li>
          <li>
            <img
              src="https://cf2.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png"
              title="OpenTable"
              alt="OpenTable"
              height={26}
              width={95}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
