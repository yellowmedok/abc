$(document).ready(function() {
    console.log("jQuery is working!");
});

$(function() {
    // ініціалізація слайдера
    $("#slider").slider({
        value: 0, // початкове значення
        min: 0,
        max: 100,
        slide: function(event, ui) {
            $("#slider_value").text(ui.value); // виведення поточного значення
        }
    });

    // обробка натискання на кнопку "підтвердити"
    $("#submit").click(function() {
        // отримуємо вибране значення зі слайдера 
        var selectedAge = $("#slider").slider("value");
        // отримуємо вибране значення з випадаючого меню
        var selectedGender = $("#gender_menu option:selected").text();

        // вікно підтвердження для обох значень
        var confirmAction = confirm("вік: " + selectedAge + "\nстать: " + selectedGender + ".\nпідтвердити?");

        if (confirmAction) {
            // якщо користувач натиснув "ok", вивести підтвердження
            $("#result").text("ваш вибір підтверджено:\nвік: " + selectedAge + "\nстать: " + selectedGender);
        } else {
            // якщо користувач натиснув "cancel", вивести відміну
            $("#result").text("вибір скасовано.");
        }
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true, // зациклити слайдер
        margin: 20, // відстань між слайдами
        nav: false, // додати кнопки навігації (вліво/вправо)
        autoplay: true, // фвтоматичний перехід слайдів
        autoplayTimeout: 5000, // час між слайдами (в мс)
        responsive: {
            0: {
                items: 1 // кількість слайдів для екранів <600px
            },
            600: {
                items: 2 // кількість слайдів для екранів >=600px
            },
            1000: {
                items: 3 // кількість слайдів для екранів >=1000px
            }
        }
    });
});

$(function() {
    $( "#sortable" ).sortable();
});