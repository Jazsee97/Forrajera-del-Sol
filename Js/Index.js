exportar  datos constantes  = [  
    {
        identificación : 1 ,
        url_image : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' , 
        nombre : 'Zapatos Nike' ,
        precio : '80'
    } ,
    {
        identificación : 2 ,
        url_image : 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' , 
        nombre : 'Audifonos' ,
        precio : '20'
    } ,
    {
        identificación : 3 ,
        url_image : 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80' , 
        nombre : 'Reloj' ,
        precio : '50'
    } ,
    {
        identificación : 4 ,
        url_image : 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' , 
        nombre : 'Reloj inteligente' ,
        precio : '90'
    } ,
    {
        identificación : 5 ,
        url_image : 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' , 
        nombre : 'Perfume' ,
        precio : '40'
    } ,
    
]

const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})