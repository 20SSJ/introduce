// 1. 다크모드 토글 기능
const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.body;

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    // 버튼 아이콘 변경 (선택사항)
    if(body.classList.contains("dark")) {
        darkModeBtn.innerText = "☀️";
    } else {
        darkModeBtn.innerText = "🌙";
    }
});

// 2. 소개글 펼치기/접기 기능
function toggleIntro() {
    const detail = document.getElementById("introDetail");
    const arrow = document.getElementById("arrow");
    const btn = document.querySelector(".toggle-btn");

    if (detail.classList.contains("hidden")) {
        detail.classList.remove("hidden");
        arrow.innerText = "▲";
        // 부드럽게 나타나는 효과를 위해 CSS animation 추가 가능
    } else {
        detail.classList.add("hidden");
        arrow.innerText = "▼";
    }
}

// 3. 스크롤 시 네비게이션 활성화 (선택 사항 UX 개선)
// 스크롤 위치에 따라 메뉴 색상이 변하는 기능입니다.
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});