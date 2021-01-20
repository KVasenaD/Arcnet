"use strict";
$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
        items:1,
        loop: true,
        dots: true,
        dotsEach: true,
        autoplay: true,
        autoplaySpeed:3000,
    });

});


class validForm {
    constructor(container = 'form'){
        this.container = container;
        this._valid();
    }
    validEmail(value){
        let val = (/^[a-z0-9]+@[a-z]+\.[a-z]{2,5}$/i);
        let result = value;
        if(result.match(val) === null){
            document.querySelector(".form__input").classList.add('error');
            document.querySelector('.text-error').textContent = "Error!";
        }
        else {
            document.querySelector(".form__input").classList.remove('error');
            document.querySelector('.text-error').textContent = null;
        }

    }
    _valid(){
        document.querySelector(this.container).addEventListener('submit', elem=> {
            elem.preventDefault();
            this.validEmail(document.querySelector(".form__input").value);

        });
    }

}
const quoteReplace = new validForm();