// script.js

document.addEventListener('DOMContentLoaded', function () {
    const toggleLinks = document.querySelectorAll('.toggle-link');

    toggleLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            // 'show' 클래스를 토글하여 애니메이션 적용
            targetElement.classList.toggle('show');
        });
    });
});
