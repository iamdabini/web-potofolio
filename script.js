// AOS 초기화
AOS.init({
    duration: 1000,
    once: false
});

// 커서 선택
const cursor = document.querySelector(".cursor");

// 마우스 움직임에 따라 커서 이동
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

const menuItems = document.querySelectorAll(".menu a , .contact_btn, .contact_button");
menuItems.forEach(item => {

    item.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
    });

    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
    });
});