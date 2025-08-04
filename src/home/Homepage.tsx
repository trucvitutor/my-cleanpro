import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home-3d.css"; // Đảm bảo đường dẫn này đúng!

// Import các ảnh từ thư mục assets của bạn
import home8 from "../assets/file/man1.jpg";
import home9 from "../assets/file/vanphong.jpg";
import home1 from "../assets/home-1.jpg";
import home2 from "../assets/home-2.jpg";
import home3 from "../assets/home-3.jpg";
import home4 from "../assets/home-4.jpg";
import home5 from "../assets/home-5.jpg";
import home6 from "../assets/home-6.jpg";
import home7 from "../assets/home-7.jpg";

// Nếu bạn có thêm ảnh, hãy import chúng ở đây:
// import home5 from '../assets/home-5.jpg';
import buoc1 from "../assets/quytrinhdichvu/buoc-1.jpg";
import buoc2 from "../assets/quytrinhdichvu/buoc-2.jpg";
import buoc3 from "../assets/quytrinhdichvu/buoc-3.jpg";
import buoc4 from "../assets/quytrinhdichvu/buoc-4.jpg";
import buoc5 from "../assets/quytrinhdichvu/buoc-5.jpg";
import buoc6 from "../assets/quytrinhdichvu/buoc-6.jpg";
import buoc7 from "../assets/quytrinhdichvu/buoc-7.jpg";
import buoc8 from "../assets/quytrinhdichvu/buoc-8.jpg";

import duan1 from "../assets/duandathuchien/duan1.jpg";
import duan2 from "../assets/duandathuchien/duan2.jpg";
import duan3 from "../assets/duandathuchien/duan3.jpg";
import duan4 from "../assets/duandathuchien/duan4.jpg";
import duan5 from "../assets/duandathuchien/duan5.jpg";
import duan6 from "../assets/duandathuchien/duan6.jpg";

import doitac1 from "../assets/doitac/doitac1.jpg";
import doitac2 from "../assets/doitac/doitac2.jpg";
import doitac3 from "../assets/doitac/doitac3.jpg";
import doitac4 from "../assets/doitac/doitac4.jpg";
import doitac5 from "../assets/doitac/doitac5.jpg";
import doitac6 from "../assets/doitac/doitac6.jpg";

// Định nghĩa kiểu dữ liệu cho một slide item
interface SlideItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const Homepage: React.FC = () => {
  // Dữ liệu mẫu cho các slide
  const slides: SlideItem[] = [
    {
      id: 1,
      imageUrl: home1,
      title: "Vệ Sinh Thảm",
      description:
        "Dịch vụ giặt và vệ sinh thảm chuyên nghiệp, loại bỏ bụi bẩn, vết ố và mùi khó chịu, mang lại không gian sạch sẽ và an toàn.",
      link: "/ve-sinh-rem",
    },
    {
      id: 2,
      imageUrl: home2,
      title: "Dịch vụ đánh sàn",
      description:
        "Đánh bóng và làm sạch sàn chuyên nghiệp, giúp bề mặt sàn sáng bóng, bền đẹp và nâng cao thẩm mỹ cho không gian.",
      link: "/ve-sinh-cong-nghiep-dinh-ki",
    },
    {
      id: 3,
      imageUrl: home3,
      title: "Vệ sinh sau xây dựng",
      description:
        "Dọn dẹp, làm sạch bụi bẩn và phế thải sau thi công, trả lại không gian sạch sẽ, sẵn sàng đưa vào sử dụng.",
      link: "/ve-sinh-sau-xay-dung",
    },
    {
      id: 4,
      imageUrl: home4,
      title: "Vệ sinh Kính",
      description:
        "Lau chùi, làm sạch kính trong và ngoài, đảm bảo bề mặt sáng bóng, không vết ố, tăng tính thẩm mỹ cho công trình.",
      link: "/ve-sinh-kinh",
    },
    {
      id: 5,
      imageUrl: home5,
      title: "Vệ sinh sofa",
      description:
        "Giặt và làm sạch sofa chuyên nghiệp, loại bỏ vết bẩn và mùi hôi, giữ cho ghế luôn mềm mại và bền đẹp.",
      link: "/giat-ghe-sofa",
    },
    {
      id: 6,
      imageUrl: home6,
      title: "Vệ sinh Định kì",
      description:
        "Dịch vụ vệ sinh tổng thể theo định kỳ, đảm bảo môi trường làm việc sạch sẽ, an toàn và chuyên nghiệp.",
      link: "/ve-sinh-cong-nghiep-dinh-ki",
    },
    {
      id: 7,
      imageUrl: home7,
      title: "Vệ sinh Nhà Ở",
      description:
        "Vệ sinh nhà ở toàn diện từ sàn, kính, đồ nội thất đến các khu vực khó tiếp cận, mang lại không gian sống trong lành.",
      link: "/ve-sinh-nha-o",
    },
    {
      id: 8,
      imageUrl: home8,
      title: "Vệ sinh màn",
      description:
        "Giặt và vệ sinh màn cửa, loại bỏ bụi bẩn, nấm mốc, giữ cho màn cửa luôn sạch sẽ và bảo vệ sức khỏe gia đình.",
      link: "/ve-sinh-rem",
    },
    {
      id: 9,
      imageUrl: home9,
      title: "Vệ sinh văn phòng",
      description:
        " Dịch vụ vệ sinh văn phòng chuyên nghiệp, duy trì không gian làm việc sạch sẽ, gọn gàng và thoải mái.",
      link: "/ve-sinh-cong-nghiep",
    },
  ];

  const partners = [
    { src: doitac1, alt: "Vinaphone" },
    { src: doitac2, alt: "Viettel Post" },
    { src: doitac3, alt: "Indochina Hội An" },
    { src: doitac4, alt: "ĐH Kinh tế" },
    { src: doitac5, alt: "Newtecons" },
    { src: doitac6, alt: "Avatar Hotel" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const numItems = slides.length;

  useEffect(() => {
    const sliderItems = document.querySelectorAll<HTMLElement>(".slider-item");
    const navigationDotsContainer =
      document.querySelector<HTMLElement>(".navigation-dots");
    const prevButton =
      document.querySelector<HTMLButtonElement>(".nav-button.prev");
    const nextButton =
      document.querySelector<HTMLButtonElement>(".nav-button.next");

    if (
      !navigationDotsContainer ||
      !prevButton ||
      !nextButton ||
      sliderItems.length === 0
    ) {
      console.warn(
        "One or more slider elements not found. Slider functionality might be limited."
      );
      return;
    }

    const itemWidth: number = sliderItems[0].offsetWidth;

    const carouselRadius: number =
      itemWidth / (2 * Math.tan(Math.PI / numItems)) - 50;

    const updateSlider = () => {
      sliderItems.forEach((item, index) => {
        let relativeIndex = index - currentIndex;

        if (relativeIndex < -numItems / 2) {
          relativeIndex += numItems;
        } else if (relativeIndex > numItems / 2) {
          relativeIndex -= numItems;
        }

        // Tính toán góc xoay cho từng slide
        const angle = (360 / numItems) * relativeIndex;

        // Áp dụng transform cho từng slide
        item.style.transform = `rotateY(${angle}deg) translateZ(${carouselRadius}px) rotateY(${-angle}deg)`;

        // Cập nhật opacity và z-index
        if (index === currentIndex) {
          item.classList.add("active");
          item.style.zIndex = "10"; // Slide active luôn ở trên cùng
        } else {
          item.classList.remove("active");
          item.style.zIndex = "1"; // Slide không active ở dưới
        }
      });
      updateDots();
    };

    const createDots = () => {
      navigationDotsContainer.innerHTML = "";
      for (let i = 0; i < numItems; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.dataset.index = i.toString();
        dot.addEventListener("click", () => {
          setCurrentIndex(i);
        });
        navigationDotsContainer.appendChild(dot);
      }
    };

    const updateDots = () => {
      const dots = document.querySelectorAll<HTMLElement>(".dot");
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    };

    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + numItems) % numItems);
    };

    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numItems);
    };

    prevButton.addEventListener("click", handlePrevClick);
    nextButton.addEventListener("click", handleNextClick);

    createDots();
    updateSlider(); // Gọi lần đầu để setup đúng vị trí

    // Thêm event listener cho việc thay đổi kích thước cửa sổ để cập nhật lại slider
    const handleResize = () => {
      updateSlider();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      prevButton.removeEventListener("click", handlePrevClick);
      nextButton.removeEventListener("click", handleNextClick);
      window.removeEventListener("resize", handleResize); // Dọn dẹp listener khi component unmount
    };
  }, [currentIndex, numItems]); // `updateSlider` sẽ chạy lại khi currentIndex hoặc numItems thay đổi

  return (
    <>
      {/* Phần nội dung giới thiệu Clean Dragon */}
      <div className="content-container">
        <h1>Dịch vụ vệ sinh công nghiệp CLEAN PRO</h1>
        <p>Chào mừng bạn đến với website vệ sinh công nghiệp CLEAN PRO</p>
        <hr />
        <h3>
          CLEAN PRO – Dịch vụ vệ sinh công nghiệp uy tín cho mọi không gian sống
          và làm việc hàng đầu tại Đà Nẵng đã có hơn 7 năm kinh nghiệm
        </h3>
        <p>
          Từ nhà ở, công trình xây dựng cho đến nhà máy, khu công nghiệp quy mô
          lớn – CLEAN PRO tự hào là đơn vị cung cấp dịch vụ vệ sinh công nghiệp
          toàn diện, đáp ứng linh hoạt mọi nhu cầu làm sạch với chất lượng vượt
          trội – quy trình chuyên nghiệp – chi phí tối ưu.
        </p>
        <h3>🚀 Chuyên vệ sinh: </h3>
        <p>✔ Nhà cửa, biệt thự, căn hộ</p>
        <p>✔ Văn phòng, tòa nhà, trung tâm thương mại</p>
        <p>✔ Nhà xưởng, kho bãi, khu công nghiệp</p>
        <p>✔ Công trình sau xây dựng, sau sửa chữa</p>
        <h3>💎 Cam kết của CLEAN PRO:</h3>
        <p>– Trang thiết bị hiện đại, hóa chất an toàn </p>
        <p>– Đội ngũ nhân viên được đào tạo bài bản, tận tâm </p>
        <p>– Quy trình làm sạch nhanh gọn</p> <p> – hiệu quả – đúng tiến độ</p>
        <p>– Giá cả minh bạch, không phát sinh</p>
        <h4>
          Dù bạn cần tổng vệ sinh định kỳ, làm sạch sau xây dựng hay duy trì
          không gian làm việc sạch sẽ mỗi ngày, Clean Dragon luôn sẵn sàng đồng
          hành.
        </h4>
        <h1>CLEAN PRO – Sạch từng chi tiết , phục vụ tận tâm! </h1>
        <div>
          <button className="hotline-home">hotline: 0799140355</button>
        </div>
      </div>
      <hr></hr>
      <h1 className="h3-vi-dat">DỊCH VỤ VỆ SINH CUNG CẤP </h1>

      <div className="top-section-background">
        <div className="slider-container">
          <div className="slider">
            {slides.map((slide) => (
              <div key={slide.id} className="slider-item">
                <div className="image-wrapper">
                  <img src={slide.imageUrl} alt={slide.title} />
                </div>
                <div className="content-wrapper">
                  <h3>
                    <Link to={slide.link}>{slide.title}</Link>
                  </h3>

                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="navigation-dots"></div>

          <button className="nav-button prev">&#10094;</button>
          <button className="nav-button next">&#10095;</button>
        </div>
      </div>

      {/* PHẦN 8 BƯỚC QUY TRÌNH */}
      <div className="steps">
        <h3>Quy Trình Làm Việc</h3>
        <div className="step">
          <img src={buoc1} alt="Tiếp nhận thông tin" />
          <h3>1. Tiếp nhận thông tin</h3>
          <p>
            CleanPro tiếp nhận yêu cầu của khách hàng qua hotline hoặc tin
            nhắn...
          </p>
        </div>

        <div className="step">
          <img src={buoc2} alt="Khảo sát hiện trạng" />
          <h3>2. Khảo sát hiện trạng</h3>
          <p>
            Nhân viên kỹ thuật CleanPro sẽ đến khảo sát công trình và tư vấn
            phương án...
          </p>
        </div>

        <div className="step">
          <img src={buoc3} alt="Gửi báo giá vệ sinh" />
          <h3>3. Gửi báo giá vệ sinh</h3>
          <p>
            Sau khi thống nhất các hạng mục cần vệ sinh, CleanPro sẽ gửi báo giá
            chính thức...
          </p>
        </div>

        <div className="step">
          <img src={buoc4} alt="Ký kết hợp đồng" />
          <h3>4. Ký kết hợp đồng</h3>
          <p>
            Sau khi thống nhất giá cả và hạng mục, hai bên sẽ ký hợp đồng triển
            khai.
          </p>
        </div>

        <div className="step">
          <img src={buoc5} alt="Triển khai vệ sinh" />
          <h3>5. Triển khai vệ sinh</h3>
          <p>
            CleanPro tiến hành triển khai vệ sinh công nghiệp theo hợp đồng.
          </p>
        </div>

        <div className="step">
          <img src={buoc6} alt="Bàn giao công trình" />
          <h3>6. Bàn giao công trình</h3>
          <p>
            Sau khi vệ sinh hoàn thành, bàn giao công trình cho khách hàng kiểm
            tra.
          </p>
        </div>

        <div className="step">
          <img src={buoc7} alt="Thanh toán chi phí" />
          <h3>7. Thanh toán chi phí</h3>
          <p>Khách hàng thanh toán chi phí sau khi nghiệm thu công trình.</p>
        </div>

        <div className="step">
          <img src={buoc8} alt="Kết thúc hợp đồng" />
          <h3>8. Kết thúc hợp đồng</h3>
          <p>Hai bên thanh lý và kết thúc hợp đồng vệ sinh công nghiệp.</p>
        </div>
      </div>
      <div className="projects">
        <h2 className="projects-title">DỰ ÁN ĐÃ THỰC HIỆN</h2>
        <p className="projects-subtitle">
          Công ty vệ sinh CleanPro tự hào là đơn vị cung cấp dịch vụ vệ sinh
          công nghiệp tại Đà Nẵng được nhiều đơn vị, doanh nghiệp tin tưởng sử
          dụng dịch vụ
        </p>

        <div className="project-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={duan1} alt="Nhà hát Tuồng Nguyễn Hiển Dĩnh" />
            </div>
            <h3 className="project-title">Tổng Vệ Sinh Resort</h3>
            <p className="project-desc">
              Thực hiện tổng vệ sinh khu resort cao cấp, đảm bảo không gian nghỉ
              dưỡng sang trọng và sạch sẽ cho du khách.
            </p>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={duan2} alt="Nhà máy điện tử FOXLINK" />
            </div>
            <h3 className="project-title">Vệ Sinh Nhà Máy Xí Nghiệp</h3>
            <p className="project-desc">
              Triển khai vệ sinh nhà máy, xí nghiệp quy mô lớn, đảm bảo môi
              trường sản xuất an toàn và đạt tiêu chuẩn vệ sinh công nghiệp.
            </p>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={duan3} alt="Đoàn An Điều Dưỡng 27" />
            </div>
            <h3 className="project-title">Vệ Sinh Khu Công Nghiệp</h3>
            <p className="project-desc">
              Tổng vệ sinh khu công nghiệp với nhiều hạng mục: nhà xưởng, văn
              phòng, lối đi, mang lại không gian làm việc gọn gàng và sạch sẽ.
            </p>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src={duan4} alt="Nhà máy điện tử FOXLINK" />
            </div>
            <h3 className="project-title">Vệ Sinh Các Trường Đại Học</h3>
            <p className="project-desc">
              Dịch vụ vệ sinh toàn bộ khuôn viên và phòng học, đảm bảo môi
              trường học tập trong lành, sạch đẹp cho sinh viên.
            </p>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src={duan5} alt="Nhà máy điện tử FOXLINK" />
            </div>
            <h3 className="project-title">Vệ Sinh Khu Vui Chơi</h3>
            <p className="project-desc">
              Làm sạch khu vui chơi giải trí, khuôn viên ngoài trời và thiết bị,
              mang lại trải nghiệm an toàn, sạch sẽ cho khách tham quan.
            </p>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src={duan6} alt="Nhà máy điện tử FOXLINK" />
            </div>
            <h3 className="project-title">Vệ Sinh Nhà Sửa Chữa</h3>
            <p className="project-desc">
              Dịch vụ vệ sinh nhà sửa chữa, kho xưởng sau thi công hoặc bảo trì,
              loại bỏ bụi bẩn và sắp xếp không gian gọn gàng.
            </p>
          </div>
        </div>
      </div>
      <section className="pricing">
        <h2>BẢNG GIÁ DỊCH VỤ VỆ SINH</h2>
        <table>
          <thead>
            <tr>
              <th>DỊCH VỤ VỆ SINH</th>
              <th>ĐƠN GIÁ (VND)</th>
              <th>ĐƠN VỊ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tổng vệ sinh sau xây dựng, nhà xưởng, kho bãi, cao ốc...</td>
              <td>10.000 - 15.000</td>
              <td>m2</td>
            </tr>

            <tr>
              <td>Lau kính mặt trong tòa nhà</td>
              <td>5.000 - 10.000</td>
              <td>m2</td>
            </tr>
            <tr>
              <td>Giặt thảm (bali, coton, len, lụa, thảm sợi thực vật…)</td>
              <td>10.000 – 12.000</td>
              <td>m2</td>
            </tr>
            <tr>
              <td>Giặt các loại ghế trong văn phòng, cơ quan</td>
              <td>15.000 – 30.000</td>
              <td>m2</td>
            </tr>
            <tr>
              <td>Giặt ghế Sofa</td>
              <td>300.000 – 600.000</td>
              <td>Bộ 5 cái</td>
            </tr>
            <tr>
              <td>Tẩy sạch, đánh bóng sơn, keo, lan can các loại</td>
              <td>7.000 – 15.000</td>
              <td>m2</td>
            </tr>
            <tr>
              <td>Vệ sinh định kỳ văn phòng, siêu thị, bệnh viện…</td>
              <td>4.000.000 – 5.000.000</td>
              <td>1 người / 1 tháng</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="partners">
        <h2>ĐỐI TÁC - KHÁCH HÀNG</h2>
        <div className="partner-logos">
          {partners.map((item, index) => (
            <img key={index} src={item.src} alt={item.alt} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Homepage;
