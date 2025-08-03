import { Link } from "react-router-dom";
import "./LaundryServices.css";
export const LaundryServices = () => {
  return (
    <div className="breadcrumb-section">
      <div className="breadcrumb-content">
        <h2>Dịch Vụ Giặt Ủi</h2>
        <p>
          <span className="home-icon">🏠</span>
          <Link to="/">Trang chủ</Link> / Dịch Vụ Giặt Ủi
        </p>
      </div>
    </div>
  );
};
export default LaundryServices;
