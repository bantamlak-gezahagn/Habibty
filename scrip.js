document.addEventListener("DOMContentLoaded", function () {
    const photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];
    let currentIndex = 0;
    const photoElement = document.getElementById("photo");

    function changePhoto() {
        photoElement.src = `photos/${photos[currentIndex]}`;
        currentIndex = (currentIndex + 1) % photos.length;
    }

    setInterval(changePhoto, 1500);
});

function redirectToNextPage() {
    window.location.href = "love.html";
}

setTimeout(redirectToNextPage, 16000);