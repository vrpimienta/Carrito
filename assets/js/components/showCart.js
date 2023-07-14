function showcart () {
    const btncart = document.querySelector('.btn__cart')
    const cart = document.querySelector('.cart')
    btncart.addEventListener('click', function (){
        cart.classList.toggle('show__cart')
    })

    
    cart.addEventListener ('click', function (e){
        if (e.target.closest('.btn__close')){
            cart.classList.remove('show__cart')
        }        

    })
}

export default showcart