import { Link } from "react-router-dom";
import cong3 from "../assets/duandathuchien/duan2.jpg";
import cong1 from "../assets/duandathuchien/duan3.jpg";
import cong2 from "../assets/duandathuchien/duan4.jpg";
import "./IndustrialCleaning.css"; // Giả định bạn đã tạo file CSS cho styling
const IndustrialCleaning = () => {
  return (
    <div>
      <div className="breadcrumb-section-indus">
        <div className="breadcrumb-content-indus">
          <h2>Dịch Vụ Vệ Sinh Công Nghiệp</h2>
          <p>
            <span className="home-icon">🏠</span>
            <Link to="/">Trang chủ</Link> / Dịch Vụ Vệ Sinh Công Nghiệp
          </p>
        </div>
      </div>
      <div className="industrial-cleaning-container">
        <div className="text-section">
          <p>
            Trong bối cảnh đô thị hóa và công nghiệp hóa ngày càng phát triển,
            nhu cầu về một môi trường làm việc sạch sẽ, chuyên nghiệp và an toàn
            là điều thiết yếu đối với mọi doanh nghiệp. Dịch vụ vệ sinh công
            nghiệp ra đời như một giải pháp tối ưu, giúp các công ty, nhà máy,
            trung tâm thương mại, bệnh viện, trường học... duy trì không gian
            làm việc sạch sẽ, nâng cao hình ảnh thương hiệu và đảm bảo sức khỏe
            cho nhân viên, khách hàng.
          </p>
          <h2 className="section-title">Dịch vụ vệ sinh công nghiệp là gì?</h2>
          <p>
            Vệ sinh công nghiệp là hình thức làm sạch chuyên sâu bằng cách kết
            hợp giữa thiết bị máy móc hiện đại, hóa chất chuyên dụng an toàn,
            cùng với quy trình khoa học để xử lý triệt để bụi bẩn, vi khuẩn và
            các tác nhân gây hại trong môi trường làm việc hoặc sinh hoạt. Khác
            với việc lau dọn thông thường, vệ sinh công nghiệp hướng đến hiệu
            quả làm sạch cao, trên diện rộng, trong thời gian ngắn và ít ảnh
            hưởng đến hoạt động vận hành của doanh nghiệp.
          </p>
        </div>

        <div className="image-section">
          {/* Giả định hình ảnh nằm trong thư mục public hoặc được import đúng cách */}
          <img src={cong1} alt="Industrial Cleaning Team" />
        </div>

        {/* Phần "Lợi ích khi sử dụng dịch vụ vệ sinh công nghiệp" */}
        <div className="benefits-section">
          <h2 className="benefits-title">
            Lợi ích khi sử dụng dịch vụ vệ sinh công nghiệp
          </h2>
          <ul className="benefits-list">
            <li>
              <strong>1. Tiết kiệm thời gian và chi phí</strong>
              <p>
                Thay vì duy trì đội ngũ vệ sinh nội bộ, các doanh nghiệp có thể
                tối ưu chi phí bằng cách thuê dịch vụ vệ sinh định kỳ hoặc theo
                giờ. Đơn vị cung cấp dịch vụ sẽ chịu trách nhiệm toàn bộ về nhân
                lực, máy móc và hóa chất, giúp doanh nghiệp tiết kiệm tối đa
                nguồn lực.
              </p>
            </li>
            <li>
              <strong>2. Đảm bảo chất lượng làm sạch chuyên sâu</strong>
              <p>
                Nhờ hệ thống máy móc như máy chà sàn, máy hút bụi công suất lớn,
                máy phun rửa áp lực cao..., cùng đội ngũ nhân viên được đào tạo
                bài bản, dịch vụ vệ sinh công nghiệp mang lại hiệu quả vượt trội
                so với phương pháp truyền thống.
              </p>
            </li>
            <li>
              <strong>3. An toàn cho sức khỏe và thân thiện môi trường</strong>
              <p>
                Các đơn vị uy tín sử dụng hóa chất tẩy rửa đạt chuẩn, không gây
                hại cho người dùng và môi trường, đặc biệt là trong các khu vực
                nhạy cảm như bệnh viện, trường học hay nhà máy thực phẩm.
              </p>
            </li>
            <li>
              <strong>4. Tăng tuổi thọ công trình, thiết bị</strong>
              <p>
                Việc vệ sinh đúng kỹ thuật và định kỳ sẽ giúp bảo dưỡng bề mặt
                sàn, tường, kính, thiết bị điện tử, hệ thống điều hòa... từ đó
                kéo dài tuổi thọ sử dụng và hạn chế các sự cố hỏng hóc.
              </p>
            </li>
          </ul>
        </div>

        {/* Phần "Các hạng mục vệ sinh công nghiệp phổ biến" */}
        <div className="categories-section">
          <h2 className="categories-title">
            Các hạng mục vệ sinh công nghiệp phổ biến
          </h2>
          <ul className="categories-list">
            <li>Vệ sinh văn phòng, tòa nhà cao tầng</li>
            <li>Vệ sinh nhà máy, khu công nghiệp</li>
            <li>Vệ sinh sau xây dựng, trước khi đưa vào sử dụng</li>
            <li>
              Vệ sinh kính mặt ngoài tòa nhà bằng phương pháp treo dây (rope
              access)
            </li>
            <li>Tổng vệ sinh định kỳ cho trung tâm thương mại, siêu thị</li>
            <li>Vệ sinh nhà ở, biệt thự, căn hộ cao cấp</li>
          </ul>
        </div>

        {/* Phần dịch vụ bổ sung và hình ảnh */}
        <div className="additional-services-section">
          <div className="additional-image-container">
            <img
              src={cong2} // Đặt tên file hình ảnh mới
              alt="Additional Cleaning Services"
            />
          </div>
          <p className="additional-text">
            Ngoài ra, nhiều đơn vị còn cung cấp các dịch vụ bổ sung như: đánh
            bóng sàn đá, giặt thảm văn phòng, giặt ghế sofa, phun khử khuẩn
            không gian,...
          </p>
        </div>

        {/* Phần "Quy trình làm việc chuyên nghiệp" */}
        <div className="workflow-section">
          <h2 className="workflow-title">Quy trình làm việc chuyên nghiệp</h2>
          <p className="workflow-intro">
            Một đơn vị vệ sinh công nghiệp chuyên nghiệp sẽ triển khai quy trình
            làm việc gồm các bước cơ bản sau:
          </p>
          <ol className="workflow-list">
            <li>
              <strong>1. Tiếp nhận yêu cầu và khảo sát thực tế:</strong> Nhân
              viên kỹ thuật sẽ khảo sát trực tiếp công trình để đưa ra phương án
              làm sạch phù hợp.
            </li>
            <li>
              <strong>2. Lập báo giá chi tiết và ký hợp đồng:</strong> Mọi hạng
              mục, thời gian và chi phí đều được thể hiện minh bạch trong hợp
              đồng.
            </li>
            <li>
              <strong>3. Triển khai thi công vệ sinh:</strong> Đội ngũ nhân viên
              thực hiện theo đúng kế hoạch, đảm bảo đúng tiến độ và an toàn lao
              động.
            </li>
            <li>
              <strong>4. Nghiệm thu và bàn giao:</strong> Khách hàng kiểm tra
              kết quả làm sạch và đánh giá chất lượng dịch vụ.
            </li>
            <li>
              <strong>5. Chăm sóc sau dịch vụ:</strong> Hỗ trợ bảo hành, khắc
              phục nếu có phát sinh và đề xuất lịch vệ sinh định kỳ nếu cần
              thiết.
            </li>
          </ol>
        </div>

        {/* Phần "Lựa chọn đơn vị cung cấp dịch vụ vệ sinh công nghiệp uy tín" */}
        <div className="trusted-provider-section">
          <h2 className="trusted-provider-title">
            Lựa chọn đơn vị cung cấp dịch vụ vệ sinh công nghiệp uy tín
          </h2>
          <p className="trusted-provider-intro">
            Hiện nay trên thị trường có rất nhiều công ty vệ sinh công nghiệp
            với chất lượng và giá cả khác nhau. Để lựa chọn được đối tác đáng
            tin cậy, doanh nghiệp cần lưu ý một số tiêu chí sau:
          </p>
          <ul className="trusted-provider-list">
            <li>
              Có kinh nghiệm lâu năm trong ngành và đội ngũ nhân sự chuyên
              nghiệp
            </li>
            <li>Sở hữu trang thiết bị hiện đại, được bảo trì định kỳ</li>
            <li>Sử dụng hóa chất an toàn, có chứng nhận nguồn gốc rõ ràng</li>
            <li>Chính sách báo giá minh bạch, hợp đồng rõ ràng</li>
            <li>Có bảo hiểm lao động và cam kết bồi thường nếu xảy ra sự cố</li>
          </ul>
          <div className="trusted-provider-image-container">
            <img
              src={cong3} // Đặt tên file hình ảnh mới
              alt="Trusted Cleaning Provider Team"
            />
          </div>
        </div>

        {/* Phần MỚI được thêm vào: "Kết luận" */}
        <div className="conclusion-section">
          <h2 className="conclusion-title">Kết luận</h2>
          <p className="conclusion-text">
            Dịch vụ vệ sinh công nghiệp không chỉ là lựa chọn tối ưu cho doanh
            nghiệp mà còn là yếu tố quan trọng trong góp phần xây dựng môi
            trường sống và làm việc lành mạnh, hiệu quả. Việc hợp tác với đơn vị
            chuyên nghiệp sẽ giúp bạn yên tâm tập trung vào công việc chính,
            đồng thời mang đến diện mạo sạch sẽ, chuyên nghiệp cho không gian
            của mình.
          </p>
          <p className="conclusion-text">
            Nếu bạn đang cần tìm kiếm một giải pháp làm sạch toàn diện, hiệu quả
            và tiết kiệm – đừng ngần ngại liên hệ ngay với các đơn vị vệ sinh
            công nghiệp uy tín để được tư vấn miễn phí và hỗ trợ nhanh chóng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustrialCleaning;
