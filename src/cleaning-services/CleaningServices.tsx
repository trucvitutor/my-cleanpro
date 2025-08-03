import { Link } from "react-router-dom";
import "./CleaningService.css";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Dịch Vụ Thông Cống Nghẹt Ngũ Hành Sơn Chuyên Nghiệp",
    description:
      "Thông cống nghẹt Ngũ Hành Sơn là dịch vụ được nhiều người quan tâm và sử dụng...",
    image: "/images/cong-nghet.jpg",
  },
  {
    id: 2,
    title: "Dịch Vụ Thông Tắc Ống Thoát Nước Uy Tín Tại Đà Nẵng",
    description:
      "Hiện nay, vấn đề đường cống bị nghẹt đang diễn ra khá mạnh mẽ trên diện rộng...",
    image: "/images/thong-tac-ong.jpg",
  },
  {
    id: 3,
    title: "Dịch vụ vệ sinh chung cư Đà Nẵng giá rẻ và chuyên nghiệp",
    description:
      "Dịch vụ vệ sinh chung cư giúp bạn dọn dẹp nhanh chóng, sạch sẽ và an toàn tuyệt đối...",
    image: "/images/ve-sinh-chung-cu.jpg",
  },
  {
    id: 4,
    title: "Dịch vụ vệ sinh công trình sau xây dựng",
    description:
      "Giúp bạn dọn dẹp công trình mới xây nhanh chóng, đảm bảo sạch đẹp...",
    image: "/images/ve-sinh-cong-trinh.jpg",
  },
];

export const CleaningServices = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <div className="breadcrumb-content">
          <h2>Dịch Vụ Vệ Sinh</h2>
          <p>
            <span className="home-icon">🏠</span>
            <Link to="/">Trang chủ</Link> / Dịch Vụ Vệ Sinh
          </p>
        </div>
      </div>

      {/* Grid dịch vụ */}
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleaningServices;
