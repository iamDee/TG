if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    let navbar = document.querySelector('.navbar');
    let header = document.querySelector('.head-2');
    let menu = document.querySelector('#menu-bar');
    let cart = document.querySelector('#shoping-cart');
    let removeItemButton = document.getElementsByClassName('btn-remove');
    let quantityInputs = document.getElementsByClassName('cart-quantity');

    menu.addEventListener('click', () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });


    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');

        if (window.scrollY > 150) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }


    for (var i = 0; i < removeItemButton.length; i++) {
        var button = removeItemButton[i];
        button.addEventListener('click', removeCartItem)
    }

    for (var i = 0; i < quantityInputs.length; i++) {
        var button = quantityInputs[i];
        button.addEventListener('change', quantityChanged)
    }

}
//quantity change 
function quantityChanged(event) {
    var input = event.target

    //validate input check 
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    } else {
        updateCartTotal()
    }
}

//remove cart item 
function removeCartItem(event) {
    var buttonCliked = event.target
    buttonCliked.parentElement.parentElement.parentElement.parentElement.remove();
    updateCartTotal()
}



//update cartt 
function updateCartTotal() {
    var cartItemSection = document.getElementsByClassName('cart')[0];
    var cartRows = cartItemSection.getElementsByClassName('cart-row');
    var total = 0;

    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('ietm-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0]
            // var price = parseFloat.priceElement.innerText.replace('$', '')
        var price = parseFloat(priceElement.innerHTML.replace('$', ''))
        var quantity = quantityElement.value

        console.log();
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100

    document.getElementsByClassName('sub-total')[0].innerText = '$ ' + total





}