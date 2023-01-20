$(document).ready(function() {
    $(".menu-bars").click(function() {
        $(".responsive-nav").toggle("slow");
        $(".menu-bars").hide();
        $(".close").show();
        $(".close").click(function() {
            $(".responsive-nav").hide("slow");
            $(".menu-bars").show();
            $(".close").hide();
        });

    });
});
//toggle category button
$(document).ready(function() {
    $(".fa-chevron-down").click(function() {
        $(".cat-links").slideToggle("slow");
    });

});

let btn = document.querySelector('.btn-icon');
let fa = document.querySelector('.fa-chevron-down');

btn.addEventListener('click', function() {

    if (fa.style.transform === '') {
        fa.style.transform = 'rotate(180deg)'
    } else {
        fa.style.transform = ''
    }

});


/*slider*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//top top
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $("#toTop").fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
});