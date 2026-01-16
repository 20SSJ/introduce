// 다크모드
document.getElementById("darkModeBtn").onclick = function () {
    document.body.classList.toggle("dark");
};

// 소개 펼치기/접기
function toggleIntro() {
    const intro = document.getElementById("introDetail");

    if (intro.classList.contains("hidden")) {
        intro.classList.remove("hidden");
    } else {
        intro.classList.add("hidden");
    }
}
