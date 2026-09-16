// Tính năng 1: Menu Hamburger (Đóng/mở menu trên điện thoại)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function() {
    // Thêm hoặc xoá class 'active' để hiện/ẩn menu
    navLinks.classList.toggle('active');
});

// Tính năng 2: Dark/Light Mode
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', function() {
    // Chuyển đổi class dark-mode trên thẻ body
    body.classList.toggle('dark-mode');
    
    // Đổi biểu tượng nút bấm
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️';
    } else {
        themeToggleBtn.textContent = '🌙';
    }
});

// Tính năng 3: Hiển thị năm hiện tại ở Footer
const currentYearSpan = document.getElementById('currentYear');
currentYearSpan.textContent = new Date().getFullYear();

// Tính năng 4: Lọc dự án theo Tag (Filter)
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Lấy giá trị data-filter của nút được bấm (ví dụ: 'web', 'design', 'all')
        const filterValue = this.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            // Nếu bấm 'all' hoặc category của card khớp với filter, thì hiện thị
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none'; // Ẩn đi
            }
        });
    });
});

// Tính năng 5: Validate Form liên hệ (Kiểm tra nhiều điều kiện)
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    // Ngăn chặn hành động tải lại trang mặc định của form
    event.preventDefault(); 

    // Lấy giá trị từ các ô input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Lấy các thẻ hiển thị lỗi
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Reset lỗi ban đầu
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    let isValid = true;

    // Điều kiện 1: Tên không được để trống
    if (name === '') {
        nameError.textContent = 'Vui lòng nhập tên của bạn.';
        isValid = false;
    }

    // Điều kiện 2: Email phải có ký tự '@'
    if (email === '') {
        emailError.textContent = 'Vui lòng nhập email.';
        isValid = false;
    } else if (!email.includes('@')) {
        emailError.textContent = 'Email không hợp lệ (phải có @).';
        isValid = false;
    }

    // Điều kiện 3: Tin nhắn phải có độ dài từ 10 ký tự trở lên
    if (message.length < 10) {
        messageError.textContent = 'Tin nhắn phải có ít nhất 10 ký tự.';
        isValid = false;
    }

    // Nếu tất cả hợp lệ
    if (isValid) {
        alert('Cảm ơn bạn! Tin nhắn đã được gửi thành công.');
        contactForm.reset(); // Xóa trắng form sau khi gửi
    }
});