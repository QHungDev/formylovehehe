let progress = 0;
let interval = setInterval(() => {
    if (progress >= 100) {
        clearInterval(interval);
        showFinalScreen(); // Gọi hàm thay thế hình nền và phát nhạc khi hoàn thành
    } else {
        progress += 2; // Tăng mức độ lên 2%
        document.getElementById('progress').style.width = progress + '%';
    }
}, 50); // Giảm thời gian chờ xuống 50ms

function showFinalScreen() {
    // Thay thế hình nền của trang
    document.body.style.backgroundImage = "url('https://picsum.photos/200')";

    // Ẩn thanh progress bar và loading text
    document.getElementById('loading-container').style.display = 'none';
    document.getElementById('loading-text').style.display = 'none';

    // Hiển thị đĩa than và phát nhạc
    let recordContainer = document.getElementById('record-container');
    recordContainer.style.display = 'flex'; // Hiển thị đĩa than

    let audio = document.getElementById('audio');
    audio.play(); // Phát nhạc tự động khi hiển thị đĩa than

    // Dừng đĩa than khi nhạc kết thúc
    audio.onended = function() {
        document.getElementById('record').style.animationPlayState = 'paused';
    };
}
