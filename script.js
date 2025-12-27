const modal = document.getElementById("modal");
const modalVideo = document.getElementById("modalVideo");

function openVideo(src) {
  modal.style.display = "flex";

  modalVideo.pause();
  modalVideo.currentTime = 0;
  modalVideo.src = src;
  modalVideo.load();

  modalVideo.play().catch(() => {});
}

function closeVideo() {
  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.src = "";
}

/* Preview hover */
document.querySelectorAll(".card video").forEach(video => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
