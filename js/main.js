//menu bars toggle
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
//dropdown button icon rotation
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
//to top button
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


/*Login form*/
const login = document.getElementById("login-form")
const button = document.getElementById("btn").value;

button.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
});

//password show/hide icon
function myFunction() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

/*contact form*/
function sendMail(str) {
    let link = "mailto:grant8827@yahoo.com" + escape("This is my subject") + "&body=" + escape(str);
    location.href = link;
}

function submit_comment() {
    let name = document.forms["contact_form"]["Name"].value;
    let Email = document.forms["contact_form"]["Email"].value;
    let Subject = document.form["contact_form"]["Subject"].value;
    let Message = document.form["contact_form"]["Messagr"].value;
    if ((name != "") && (Email != "") && (Subject != "") && (Message != "")) {
        sendMail("message incomplete")
    }
}