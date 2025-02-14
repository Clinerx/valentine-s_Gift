document.addEventListener("DOMContentLoaded", function () {
    const heart = document.querySelector(".heartClickCover");
    const giftCard = document.querySelector(".valentineGiftCard");
    const leftCover = document.querySelector(".valentineCoverLeft");
    const rightCover = document.querySelector(".valentineCoverRight");
    const body = document.body;

    heart.addEventListener("click", function () {
        // Initial zoom-out position to create a growing effect
        giftCard.style.position = "fixed";
        giftCard.style.width = "100vw";
        giftCard.style.height = "100vh";
        giftCard.style.maxWidth = "none";
        giftCard.style.maxHeight = "none";
        giftCard.style.opacity = "1"; // Ensure it's visible
        giftCard.style.transition = "transform 1.5s ease-in-out, width 1.5s ease-in-out, height 1.5s ease-in-out";

        // Background darkening transition
        body.style.backgroundColor = "rgb(255, 240, 243)";
        body.style.transition = "background-color 1.5s ease-in-out";

        // Heart animation: slightly enlarges before disappearing
        heart.style.transform = "translate(-50%, -50%) rotate(-45deg) scale(1.8)";
        heart.style.transition = "transform 0.8s ease-in-out";

        // Slowly fade out the heart
        setTimeout(() => {
            heart.style.opacity = "0";
            heart.style.transition = "opacity 1.5s ease-in-out";
        }, 800); // Start fading after the initial transform

        // Scale up the gift card smoothly
        setTimeout(() => {
            giftCard.style.transform = "scale(1)"; // Grows to normal size
        }, 100); // Slight delay for a more natural effect

        // Open covers after the zoom effect
        setTimeout(() => {
            leftCover.style.transform = "translateX(-100%)";
            rightCover.style.transform = "translateX(100%)";
            leftCover.style.transition = "transform 1s ease-in-out";
            rightCover.style.transition = "transform 1s ease-in-out";
        }, 1500); // Delayed to match the zoom-in effect

        // Redirect to the next page after animation
        setTimeout(() => {
            window.location.href = "nextpage.html"; // Change this to your target page
        }, 2500);
    });
});
