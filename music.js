const music = document.getElementById("bgMusic");

// พยายามเล่นทันที
music.play().catch(() => {
  // ถ้าโดนบล็อก ให้รอคลิก
  document.addEventListener("click", () => {
    music.play();
  }, { once: true });
});