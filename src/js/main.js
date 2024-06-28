//Scroll back to top
(function ($) {
    "use strict";

    $(document).ready(function () {
        "use strict";
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })
    });

})(jQuery);

// back to top end
// loader
var loader = document.querySelector('.loader');
var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
];
var html = jQuery('html');
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);

$(document).ready(function () {
    setTimeout(function () {
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
        loader.style.display = "none";
    }, 1000);

});
// loader end

$(() => {


    function fixMenu() {
        let imgHeight = $(".header-img").height() + $(".header-info").height();
        if ($(window).scrollTop() > imgHeight) {
            $(".menu-section").css({ position: "fixed", top: "0" });
            $(".navbar").css({ "background-color": "rgb(56,125,206, .8)" });
            $(".dropdown-menu").css({ "background-color": "rgb(56, 125, 206, .9)" });
            $(".form-section").css({ "background-color": "#387DCE" });
        } else {
            $(".menu-section").css({ position: "sticky", top: "0" });
            $(".navbar").css({ "background-color": "#387DCE" }); //deyisdim
            $(".dropdown-menu").css({ "background-color": "rgb(56,125,206, .8)" });
            $(".form-section").css({ "background-color": "#375074" });
        }
    }

    fixMenu();

    $(window).scroll(function () {
        fixMenu();
    })

    $(window).resize(function () {
        fixMenu();
    })

    $(document).on("click", ".menu-btn", () => {
        $("#menuContainer").css({ "margin-left": "0px", "margin-right": "0px", "min-width": "100vw", "max-width": "100vw" });
        $(".dropdown-menu").css({ "border-top-right-radius": "8px", "border-top-left-radius": "8px" });
        $(".navbar-toggler").removeClass("menu-btn");
        $(".navbar-toggler").addClass("menu-open");
        $(".menu-section").css({ "position": "sticky" });
        fixMenu();
    })

    $(document).on("click", ".menu-open", () => {
        $("#menuContainer").css({ "margin-left": "auto", "margin-right": "auto", "min-width": "auto", "max-width": "auto" });
        $(".dropdown-menu").css({ "border-top-right-radius": "0px", "border-top-left-radius": "0px" });
        $(".navbar-toggler").removeClass("menu-open");
        $(".navbar-toggler").addClass("menu-btn");
        $(".menu-section").css({ "position": "static" });
        fixMenu();
    })
})

// nav media
// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // dropdown-toggle elementlərinin hamısı
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Hər bir dropdown-toggle-ı 
    dropdownToggles.forEach(function (toggle) {
        // Click eventini 
        toggle.addEventListener('click', function () {
            // toggleParent dəyişənində dropdown parent
            var toggleParent = this.parentElement;
            // Dropdown-menu-nu tap
            var dropdownMenu = toggleParent.querySelector('.dropdown-menu');

            // Dropdown-menu-nun display atribut
            var displayStyle = window.getComputedStyle(dropdownMenu).getPropertyValue('display');

            // Dropdown-menu-nun display atribut toggle 
            if (displayStyle === 'block') {
                dropdownMenu.style.display = 'none';
            } else {
                dropdownMenu.style.display = 'block';
            }
        });
    });
});

// gallery

