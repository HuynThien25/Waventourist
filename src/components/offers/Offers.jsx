import "./offers.css";
import iconvali1 from "../../assets/img/logo/iconvali.png";
import iconuytin1 from "../../assets/img/logo/iconuytin.png";
import logohotro1 from "../../assets/img/logo/logohotro.png";
import logothanhtoan from "../../assets/img/logo/logothanhtoan.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offersItem2">

        <div className="item">
          <img src={iconvali1} alt="" className="imgItem"/>
          <div className="grTitleOffer">
            <h1 className="itemTitle">Giá Tốt - Nhiều Ưu Đãi</h1>
            <span className="itemP">
              Ưu đãi và quà tặng hấp dẫn khi mua tour online
            </span>
          </div>
        </div>

        <div className="item">
          <img src={logothanhtoan} alt="" className="imgItem"/>
          <div className="grTitleOffer">
            <h1 className="itemTitle">Thanh Toán An Toàn</h1>
            <span className="itemP">Được hỗ trợ và bảo mật bởi tổ chức quốc tế</span>
          </div>
        </div>

        <div className="item">
          <img src={logohotro1} alt="" className="imgItem"/>
          <div className="grTitleOffer">
            <h1 className="itemTitle">Tư Vấn Nhanh Chóng</h1>
            <span className="itemP">
              Hỗ trợ tư vấn online nhanh chóng miễn phí
            </span>
          </div>
        </div>

        <div className="item">
          <img src={iconuytin1} alt="" className="imgItem"/>
          <div className="grTitleOffer">
            <h1 className="itemTitle">Thương Hiệu Uy Tín</h1>
            <span className="itemP">Thương hiệu lữ hành hàng đầu Việt Nam</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Offers;
