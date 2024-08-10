document.addEventListener('DOMContentLoaded', () => {
    const message = "Hello Thảo, Anh rất thích em , cái cách em quan tâm đến anh và chuyện tình cảm của anh và em. Đó là điều khiến em không chỉ dễ thương mà còn thật đặc biệt trong mắt anh.";
    const typingSpeed = 50; // Speed in milliseconds

    const messageElement = document.getElementById('message-text');
    let index = 0;

    function typeMessage() {
        if (index < message.length) {
            messageElement.textContent += message[index++];
            setTimeout(typeMessage, typingSpeed);
        }
    }

    typeMessage();

});
