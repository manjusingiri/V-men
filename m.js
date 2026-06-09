```javascript
// =========================
// SEARCH FUNCTION
// =========================

const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let text = card.innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display = "block";

        }

        else{

            card.style.display = "none";

        }

    });

});


// =========================
// WISHLIST HEART
// =========================

const hearts = document.querySelectorAll(".wish");

hearts.forEach(function(heart){

    heart.addEventListener("click", function(){

        if(this.style.color == "red"){

            this.style.color = "grey";

        }

        else{

            this.style.color = "red";

        }

    });

});


// =========================
// SHOP NOW BUTTON
// =========================

const shopBtn = document.querySelector(".banner button");

shopBtn.addEventListener("click", function(){

    document.querySelector(".products").scrollIntoView({

        behavior:"smooth"

    });

});


// =========================
// BOTTOM NAVIGATION
// =========================

const navIcons = document.querySelectorAll(".bottom-nav i");

navIcons.forEach(function(icon){

    icon.addEventListener("click", function(){

        navIcons.forEach(function(i){

            i.style.color = "#7b2cbf";

        });

        this.style.color = "#ff4d6d";

    });

});


// =========================
// PRODUCT CLICK
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("click", function(){

        let product = this.querySelector("h4").innerText;

        alert(product + " added to cart 🛍️");

    });

});


// =========================
// CATEGORY CLICK
// =========================

const categories = document.querySelectorAll(".cat");

categories.forEach(function(cat){

    cat.addEventListener("click", function(){

        alert(this.innerText + " Collection");

    });

});


// =========================
// PAGE LOAD ANIMATION
// =========================

window.onload = function(){

    const allCards = document.querySelectorAll(".card");

    allCards.forEach(function(card,index){

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(function(){

            card.style.transition = "0.5s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0px)";

        }, index * 150);

    });

};
```
