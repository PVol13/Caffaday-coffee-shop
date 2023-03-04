let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    search_form.classList.remove('active');
    cart_items.classList.remove('active');
}

let cart_items = document.querySelector('.cart-items-container')

document.querySelector('#cart-btn').onclick = () =>{
    cart_items.classList.toggle('active');
    navbar.classList.remove('active');
    search_form.classList.remove('active');
}

let search_form = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    search_form.classList.toggle('active');
    cart_items.classList.remove('active');
    navbar.classList.remove('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    search_form.classList.remove('active');
    cart_items.classList.remove('active');
}
