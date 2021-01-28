// increment event Product One

const incrementBtn = document.getElementById("increment-one");

incrementBtn.addEventListener("click",function () {
    const qantityOne = parseInt(document.getElementById("quantity-one").value);
    const priceOne = parseInt(document.getElementById("price-one").innerHTML);
    const subTotal = parseInt(document.getElementById("subtotal").innerHTML);
    const totaL = parseInt(document.getElementById("total").innerHTML);
    
    const qtyPlus = parseInt(document.getElementById("quantity-one").value = qantityOne + 1);

    document.getElementById("price-one").innerHTML = qtyPlus * priceOne;
    document.getElementById("subtotal").innerHTML = priceOne + subTotal;
    document.getElementById("total").innerHTML = priceOne + totaL;

})

// decrement event Product One

const decrementBtn = document.getElementById("decrement-one");

decrementBtn.addEventListener("click",function () {
    const qantityOneD = parseInt(document.getElementById("quantity-one").value); 
    const priceOneD = parseInt(document.getElementById("price-one").innerHTML);
    const subTotalD = parseInt(document.getElementById("subtotal").innerHTML);
    const totaLD = parseInt(document.getElementById("total").innerHTML);
    
    const qtyMinus = parseInt(document.getElementById("quantity-one").value = qantityOneD - 1);

    document.getElementById("price-one").innerHTML = qtyMinus * priceOneD;
    document.getElementById("subtotal").innerHTML = priceOneD - subTotalD;
    document.getElementById("total").innerHTML = priceOneD - totaLD;

})

// remove Item One

// const removeItemOne = document.getElementById("remove-one");

// removeItemOne.addEventListener("click",function() {
    
    
// })

// increment event Product Two

const incrementBtnTwo = document.getElementById("increment-two");

incrementBtnTwo.addEventListener("click",function () {
    const qantityTwo = parseInt(document.getElementById("quantity-two").value);
    const priceTwo = parseInt(document.getElementById("price-two").innerHTML);
    const subTotalTwo = parseInt(document.getElementById("subtotal").innerHTML);
    const totaLTwo = parseInt(document.getElementById("total").innerHTML);
    
    const qtyPlusTwo = parseInt(document.getElementById("quantity-two").value = qantityTwo + 1);

    document.getElementById("price-two").innerHTML = qtyPlusTwo * priceTwo;
    document.getElementById("subtotal").innerHTML = priceTwo + subTotalTwo;
    document.getElementById("total").innerHTML = priceTwo + totaLTwo;

})

// decrement event Product Two

const decrementBtnTwo = document.getElementById("decrement-two");

decrementBtnTwo.addEventListener("click",function () {
    const qantityTwoD = parseInt(document.getElementById("quantity-two").value); 
    const priceTwoD = parseInt(document.getElementById("price-two").innerHTML);
    const subTotalDTwo = parseInt(document.getElementById("subtotal").innerHTML);
    const totaLDTwo = parseInt(document.getElementById("total").innerHTML);
    
    const qtyMinusTwo = parseInt(document.getElementById("quantity-two").value = qantityTwoD - 1);

    document.getElementById("price-two").innerHTML = qtyMinusTwo * priceTwoD;
    document.getElementById("subtotal").innerHTML = priceTwoD - subTotalDTwo;
    document.getElementById("total").innerHTML = priceTwoD - totaLDTwo;

})


