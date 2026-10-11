# Kiểm kê tư liệu và nguồn

| Tư liệu | Trạng thái | Cách sử dụng / nguồn |
| --- | --- | --- |
| `BRIEF.md` | Đã đọc | Bản yêu cầu người dùng gửi trong phiên xây dựng. Nguồn cho tên nhóm, slogan, màu, cấu tạo dự kiến và phân công. |
| `.agents/skills/cinematic-desktop-build/SKILL.md` | Đã đọc | Skill do người dùng cung cấp; hướng dẫn bố cục và quy trình. |
| `.agents/skills/cinematic-mobile-refinement/SKILL.md` | Đã đọc | Skill do người dùng cung cấp; hướng dẫn mobile. Yêu cầu RainLoop cụ thể được ưu tiên. |
| Logo RainLoop | Đã nhận | PNG nền trong suốt do người dùng cung cấp từ phiên tạo ảnh; dùng ở header, footer và trang nhận diện. |
| PowerPoint của nhóm | Đã đọc | `UPDATE KTTX Lần 2 CNCN - The Creative Creature (1).pptx`; đối chiếu cấu tạo, quy cách vật liệu và trạng thái thiết kế. Không suy ra kết quả thử nghiệm. |
| `image.png` | Đã nhận | Phác thảo minh họa ý tưởng; thư viện, thẻ nghiên cứu và so sánh. |
| `image(1).png` | Đã nhận | Concept mô-đun; bản vẽ tương tác, thư viện và Journal. |
| `image(2).png` | Đã nhận | Sketch tay; thư viện và Journal. |
| `image(3).png` | Đã nhận | Render tổng thể; thư viện và bảng cảm hứng hình dáng. |
| `image(4).png` | Đã nhận | Blueprint RL-001, mặt cắt và bảng vật liệu; thư viện và phần vật liệu. |
| Ảnh khảo sát / mô hình vật lý / ảnh nhóm | Chưa nhận | Hiện thông báo hoặc avatar chữ mẫu; không dùng chân dung AI. |
| Video thiên nhiên thật | Chưa nhận | Dùng nền SVG minh họa có nhãn. Mã hỗ trợ video có poster, tạm dừng, lazy load, giảm chuyển động và xử lý lỗi. |
| AskNature / bài nghiên cứu | Chưa có liên kết | Chỉ trình bày mức khái quát từ brief; yêu cầu đối chiếu nguồn trước khi tăng mức khẳng định. |
| `public/assets/wetland-illustration.svg` | Được tạo cho website | Minh họa vector viết bằng mã trong `scripts/art.mjs`. Không phải ảnh thật, ảnh AI, ảnh khảo sát hoặc bằng chứng nghiên cứu. |
| Hotspot và hoạt ảnh trên concept | Được tạo cho website | Lớp tương tác phủ lên concept đã cung cấp, đặt theo bộ phận trong ảnh. Dòng chuyển động chỉ minh họa, không xác nhận lưu lượng hoặc hiệu suất. |
| Be Vietnam Pro | Phụ thuộc có khóa phiên bản | Gói `@fontsource/be-vietnam-pro`; phân phối tự lưu trữ, không gọi Google Fonts. Giấy phép SIL OFL ở `FONT-LICENSE.txt`. |

Không gọi dịch vụ tạo ảnh/video và không dùng asset stock từ URL chưa kiểm chứng. Không có job tạo media hoặc chi phí sinh ảnh/video.

Khi nhận tư liệu mới, ghi tác giả, nguồn gốc, quyền sử dụng, ngày tham khảo và vị trí sử dụng. Giữ tệp gốc ngoài bộ asset tối ưu; chỉ đưa tài liệu được phép công bố vào repository công khai. Chỉ thêm link thật đã kiểm tra. Dữ liệu thiếu giữ `null`, không thay bằng số 0.

## Bản gốc và bản tối ưu

Năm ảnh thiết kế được lưu WebP để hiển thị; PNG gốc ở `public/assets/originals/` để đọc chi tiết và tải xuống. Không sửa chữ hoặc cấu trúc sản phẩm trong ảnh. Các tệp `image(5)`, `(7)`, `(8)`, `(9)` trùng các bản đã nhận; `image(6)` là bản chụp sketch có độ phân giải thấp hơn, ưu tiên bản `(2)`. Chữ nằm trong ảnh là nội dung gốc, không phải font HTML của website.
