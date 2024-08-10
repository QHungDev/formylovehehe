let progress = 0;
let interval = setInterval(() => {
    if (progress >= 100) {
        clearInterval(interval);
        showCuteButton(); // Hiển thị nút cute sau khi hoàn thành progress bar
    } else {
        progress += 2; // Tăng mức độ lên 2%
        document.getElementById('progress').style.width = progress + '%';
    }
}, 50); // Giảm thời gian chờ xuống 50ms

function showCuteButton() {
    // Ẩn thanh progress bar và loading text
    document.getElementById('loading-container').style.display = 'none';
    document.getElementById('loading-text').style.display = 'none';

    // Hiển thị nút "cute"
    let cuteButton = document.getElementById('cute-button');
    cuteButton.style.display = 'block';
}

// Hàm chuyển trang khi nhấn nút
function goToPage() {
    window.location.href = "page.html"; 
}
