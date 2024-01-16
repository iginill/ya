document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('loaded');
});



let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

document.addEventListener("DOMContentLoaded", function () {

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });
});





var images1 = document.querySelectorAll('.photo_preview img');
var images2 = document.querySelectorAll('.photo_preview2 img');
var images = Array.from(images1).concat(Array.from(images2)); // Combine both collections
var currentImageIndex = 0;

function openModal(index) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');
    currentImageIndex = index;
    modal.style.display = 'flex';
    modalImg.src = images[index].src;
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        document.getElementById('modalImg').src = images[currentImageIndex].src;
    }
}

function nextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        document.getElementById('modalImg').src = images[currentImageIndex].src;
    }
}

// Adding event listeners for each image
images.forEach(function(image, index) {
    image.addEventListener('click', function() {
        openModal(index);
    });
});


const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        // удалим у кнопки класс btn-up_hide
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        // добавим к кнопке класс btn-up_hide
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        // при прокрутке содержимого страницы
        window.addEventListener('scroll', () => {
            // определяем величину прокрутки
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
            scrollY > 400 ? this.show() : this.hide();
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.btn-up').onclick = () => {
            // переместим в начало страницы
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();



