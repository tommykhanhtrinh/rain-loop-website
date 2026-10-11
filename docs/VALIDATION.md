# Kết quả kiểm tra

Kiểm tra trên máy cloud của dự án, bằng Node.js 24.19.0 và Chromium 154. Kiểm thử dùng đầu ra `npm run build` được phục vụ tại base path `/rain-loop-website/`, không chỉ kiểm tra mã nguồn dev.

## Đã xác minh

- Production build thành công, tạo sáu trang, trang 404 và mẫu nhận diện.
- Sáu trang mở trực tiếp và tải lại; liên kết nội bộ, hash và asset trả về thành công.
- Không có lỗi JavaScript hoặc tràn ngang trong các trang được kiểm tra ở 1440×1000, 820×1180, 430×932 và 360×780.
- Thẻ lật, lọc trạng thái, trạng thái bộ lọc rỗng, cửa sổ nghiên cứu và liên kết tới đúng hotspot.
- Timeline, tab vật liệu bằng bàn phím, các mục kế hoạch kiểm chứng.
- Trình diễn qua cả sáu bước, khóa nút Tiếp tại bước cuối, thoát và khôi phục trang/vị trí cuộn.
- Menu mobile: giữ focus trong modal, Escape, trả focus, đóng khi chọn link; header vẫn hiện sau khi cuộn xuống cuối.
- Giảm chuyển động, tạm dừng chuyển động và ảnh minh họa thay thế đang dùng.
- Viewer ảnh: zoom, di chuyển bằng bàn phím, ảnh kế tiếp, reset zoom, Escape và trả focus. Dùng SVG của website làm fixture kiểm thử riêng; không giả định bản vẽ chưa nhận đã được kiểm tra.
- Đã quan sát ảnh chụp trình duyệt desktop/mobile và kiểm tra cuộn qua các phần.

Bộ kiểm thử gồm 36 trường hợp theo viewport: 34 trường hợp áp dụng, 2 trường hợp menu mobile được bỏ qua trên desktop/tablet. Sau vòng kiểm thử toàn bộ, lỗi khôi phục vị trí khi khởi động từ menu được sửa; 6 trường hợp liên quan Trình diễn/menu đã chạy lại và đạt, 2 trường hợp không áp dụng được bỏ qua. Các kiểm tra khác không thay đổi.

## Chưa kiểm chứng

- Video thật, lỗi tải video và việc xin quyền sử dụng: chưa có video được cung cấp. Không tạo request video giả; mã hỗ trợ được chuẩn bị nhưng chưa kiểm chứng bằng media thật.
- Độ đọc bản vẽ gốc, tọa độ hotspot trên bản gốc và ảnh mô hình: chưa có tư liệu.
- Thao tác kéo ảnh trên thiết bị cảm ứng vật lý và trình đọc màn hình: chưa thử trên thiết bị thật. Kiểm thử trình duyệt chạy môi trường mô phỏng viewport/cảm ứng.
- Safari/Firefox: chưa chạy.
- Tốc độ trên mạng di động thật: chưa đo. Kích thước file không được xem như phép đo tốc độ.
- GitHub Pages công khai: cấu hình workflow có sẵn; trạng thái công khai chỉ được xác nhận sau khi truy cập và kiểm tra được deployment.

Không có kết quả thử nghiệm mô hình vật lý. Các phép kiểm tra trên đây là kiểm tra website.
