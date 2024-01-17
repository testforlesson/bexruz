const products__bottom = document.querySelector(".products__bottom");
const products__bottom2 = document.querySelector(".products__bottom2");
const products__bottom3 = document.querySelector(".products__bottom3");
const btn_one = document.querySelector("#btn__one");
const btn__two = document.querySelector("#btn__two");
const btn__three = document.querySelector("#btn__three");


btn_one.addEventListener("click", function(){

    products__bottom.style.display = "flex";
    products__bottom2.style.display = "none";
    products__bottom3.style.display = "none";

})


btn__two.addEventListener("click", function(){

    products__bottom2.style.display = "flex";
    products__bottom.style.display = "none";
    products__bottom3.style.display = "none";

})

btn__three.addEventListener("click", function(){

    products__bottom2.style.display = "none";
    products__bottom.style.display = "none";
    products__bottom3.style.display = "flex";

})




