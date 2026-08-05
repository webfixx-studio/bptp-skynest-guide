document.addEventListener("DOMContentLoaded", function () {
    // 1. Image Click Zoom Effect (Lightbox Modal)
    const images = document.querySelectorAll(".gallery-img, .responsive-img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = "1000";
            overlay.style.cursor = "pointer";

            const zoomImg = document.createElement("img");
            zoomImg.src = this.src;
            zoomImg.style.maxWidth = "90%";
            zoomImg.style.maxHeight = "90%";
            zoomImg.style.borderRadius = "8px";

            overlay.appendChild(zoomImg);
            document.body.appendChild(overlay);

            overlay.addEventListener("click", function () {
                overlay.remove();
            });
        });
    });

    // 2. Pause other videos when one video starts playing
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.addEventListener("play", function () {
            videos.forEach(v => {
                if (v !== video) {
                    v.pause();
                }
            });
        });
    });
});
