const cell = [
  {id: "1" , stock:3,name: "Huawei P10" ,price:"750.000" ,category:"Huawei", image:"./img/huaweip10.jpg" },
  {id: "2" ,stock:3, name: "Huawei P20" ,price:"800.000" ,category:"Huawei", image:"./img/huaweip20.png" },
  {id: "3" , stock:3,name: "Huawei P60" ,price:"1.000.000" ,category:"Huawei", image:"./img/huaweip60.png" },
  {id: "4" , stock:3,name: "Huawei Y9" ,price:"550.000" ,category:"Huawei", image:"./img/huaweiy9.webp" },
  {id: "5" , stock:3,name: "Iphone 5" ,price:"500.000" ,category:"Iphone", image:"./img/iphone5.jpg" },
  {id: "6" , stock:3,name: "Iphone 7" ,price:"700.000" ,category:"Iphone", image:"./img/iphone7.webp" },
  {id: "7" ,stock:3, name: "Iphone 8" ,price:"850.000" ,category:"Iphone", image:"./img/iphone8.webp" },
  {id: "8" ,stock:3, name: "Iphone 11" ,price:"1.550.000" ,category:"Iphone", image:"./img/iphone11.jpg" },
  {id: "9" , stock:3,name: "Iphone 12 Pro" ,price:"2.050.000" ,category:"Iphone", image:"./img/IPHONE12PRO.jpg" },
  {id: "10" ,stock:3, name: "Iphone 13" ,price:"3.000.000" ,category:"Iphone", image:"./img/iphone13.webp" },
  {id: "11" ,stock:3, name: "Iphone 14" ,price:"4.000.000" ,category:"Iphone", image:"./img/iphone14.jpg" },
  {id: "12" ,stock:3, name: "Iphone 15" ,price:"5.550.000" ,category:"Iphone", image:"./img/iphone15.jpg" },
  {id: "13" , stock:3,name: "Iphone X" ,price:"1.050.000" ,category:"Iphone", image:"./img/iphonex.jpg" },
  {id: "14" ,stock:3, name: "Iphone XR" ,price:"1.250.000" ,category:"Iphone", image:"./img/iphonexr.webp" },
  {id: "15" ,stock:3, name: "Samsung A01" ,price:"750.000" ,category:"Samsung", image:"./img/samsunga01.jpg" },
  {id: "16" ,stock:3, name: "Samsung A11" ,price:"850.000" ,category:"Samsung", image:"./img/samsunga11.jpg" },
  {id: "17" ,stock:3, name: "Samsung A21" ,price:"950.000" ,category:"Samsung", image:"./img/samsunga21.jpg" },
  {id: "18" ,stock:3, name: "Samsung A71" ,price:"1.750.000" ,category:"Samsung", image:"./img/samsunga71.jpg" },
  {id: "19" , stock:3,name: "Samsung J4 Core" ,price:"550.000" ,category:"Samsung", image:"./img/samsungj4core.webp" },
  {id: "20" ,stock:3, name: "Samsung J6" ,price:"700.000" ,category:"Samsung", image:"./img/samsungj6.jpg" },
  {id: "21" ,stock:3, name: "Samsung S4" ,price:"950.000" ,category:"Samsung", image:"./img/samsungs4.jpg" },
  {id: "22" ,stock:3, name: "Samsung s20" ,price:"1.150.000" ,category:"Samsung", image:"./img/samsungs20.jpg" },
  {id: "23" ,stock:3, name: "Vivo Y20" ,price:"550.000" ,category:"Vivo", image:"./img/vivoy20.png" },
  {id: "24" ,stock:3, name: "Vivo Y30" ,price:"700.000" ,category:"Vivo", image:"./img/vivoy30.png" },
  {id: "25" ,stock:3, name: "Redmi Xiaomi 11" ,price:"850.000" ,category:"Redmi", image:"./img/xiaomi11.jpeg" },
  {id: "26" ,stock:3, name: "Redmi Xiaomi 12 Lite" ,price:"1.050.000" ,category:"Redmi", image:"./img/xiaomi12lite.webp" },
  {id: "27" ,stock:3, name: "Redmi Xiaomi 13 Lite" ,price:"950.000" ,category:"Redmi", image:"./img/xiaomi13lite.jpg" },
  {id: "28" ,stock:3 ,name: "Redmi Poco M3" ,price:"1.300.000" ,category:"Redmi", image:"./img/xiaomipocom3.jpg" },
  {id: "29" ,stock:3 ,name: "Redmi Poco M5S" ,price:"1.650.000" ,category:"Redmi", image:"./img/xiaomipocom5s.webp" },
  {id: "30" ,stock:3, name: "Redmi Poco X3" ,price:"1.750.000" ,category:"redmi", image:"./img/xiaomipocox3.webp" },
]

const container = document.getElementById('main')
const btncreate = document.getElementById('btn-create')
let imgSelected = "";
let idProduct = 30

const modal = document.querySelector('.modal');
const closemodal = document.getElementById('close-modal');
const newname = document.getElementById('new-name');
const newprice = document.getElementById('new-price');
const newcategory = document.getElementById('new-category');
const newimage = document.getElementById('new-image');
const btnnewproduct = document.getElementById('btn-new-create');

// variables de modal de actualizar producto
const modalupdate = document.querySelector('.modal-upload');
const btnupdate = document.getElementById('btn-upload');
const closemodalupdate = document.getElementById('close-modal-upload');
const idproduct= document.getElementById('id-product');
const btnbuscar = document.getElementById('buscar-product');
const updatename= document.getElementById('update-name');
const updateprice = document.getElementById('update-price');
const updatecategory = document.getElementById('update-category');
const btnupdateproduct = document.getElementById('btn-new-update')

closemodalupdate.addEventListener("click" , close_modal_update)
btnbuscar.addEventListener("click" , buscarproduct);
btnupdate.addEventListener("click" ,showmodalupdate);
btncreate.addEventListener("click", showmodal);
closemodal.addEventListener("click", close_modal);
btnnewproduct.addEventListener("click", createnewproduct);
newimage.addEventListener("change", importimg);
btnupdateproduct.addEventListener("click" , updateproduct)

//actualizar prducto encontrado
function updateproduct() {
    const product = idproduct.value
    const objetoBuscado = cell.find(objeto => objeto.id === product);

    objetoBuscado.name = updatename.value;
    objetoBuscado.price = updateprice.value;
    objetoBuscado.category = updatecategory.value

    close_modal_update();
    cards();
}

//buscar producto para actualizar
function buscarproduct() {
    const product = idproduct.value
    const objetoBuscado = cell.find(objeto => objeto.id === product);

if (objetoBuscado) {
    const name = objetoBuscado.name;
    const price = objetoBuscado.price;
    const category = objetoBuscado.category;

    updatename.value = name;
    updateprice.value=price;
    updatecategory.value =category
} else {
    console.log("Objeto no encontrado");
}
}

// importar imagen
function importimg(event) {
    const currentimg = event.target.files[0];
    const objecturl = URL.createObjectURL(currentimg);
    imgSelected = objecturl;
}


//cartas
function cards() {
  // Limpiar el contenedor antes de volver a agregar las tarjetas
  container.innerHTML = "";

  // Iterar sobre cada elemento en la matriz cell y crear una tarjeta para cada uno
  cell.forEach((cell) => makeCard(cell));
}


//crear un nuevo producto
function createnewproduct() {
    idProduct++;
    const newproduct = newname.value;
    const newpriceproduct = newprice.value;
    const newcategoryproduct = newcategory.value;
    const newid = idProduct;

    let newcell = { id: newid, name: newproduct, price: newpriceproduct, category: newcategoryproduct, image: imgSelected };

    cell.push(newcell);
    modal.style.display = 'none';
    // Llama a la función cards después de agregar un nuevo producto
    cards();
}

//abrir y cerrar modal actualizar
function showmodalupdate() {
    modalupdate.style.display= 'flex';
}
function close_modal_update() {
    modalupdate.style.display='none';
}

// abrir y cerrar modal
function close_modal() {
    modal.style.display = 'none';
}

function showmodal() {
    modal.style.display = 'flex';
}

// crear carta
function makeCard(cell) {
    const card = document.createElement('div')
    card.classList.add('card')

    const name = document.createElement('h2')
    name.textContent = cell.name
    const category = document.createElement('p')
    category.textContent = `Marca: ${cell.category}`
    const price = document.createElement('p')
    price.textContent = `Precio: $${cell.price}`
    const addToCart = document.createElement('button')
    addToCart.textContent = "Agregar al carrito"

    // Agrega un evento o función para el botón addToCart si es necesario

    const imgCard = document.createElement('img')
    imgCard.src = cell.image
    imgCard.alt = cell.name

    card.appendChild(imgCard)
    card.appendChild(name)
    card.appendChild(category)
    card.appendChild(price)
    card.appendChild(addToCart)

    container.appendChild(card)
}

// Llama a la función cards fuera del evento DOMContentLoaded
cards();

//buscador
$(document).ready(function(){
    $("#input_buscar").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

// Array para almacenar los productos en el carrito
let cart = [];

const emptyCart = document.getElementById('empty-cart')

document.addEventListener('DOMContentLoaded', () => {
    try {
        const storedCart = localStorage.getItem('products-in-cart');
        if (storedCart) {
            // Intenta analizar la cadena JSON
            cart = JSON.parse(storedCart);
            updateCart();  // Actualiza la interfaz del carrito después de cargar desde localStorage
        }
    } catch (error) {
        // Maneja el error al analizar la cadena JSON
        console.error('Error parsing cart from localStorage:', error);
        // Puedes tomar medidas adicionales según tus necesidades, como restablecer el carrito o informar al usuario.
    }

    // Resto del código...
});


// Función para agregar un producto al carrito
function addToCart(productToAdd) {
  const { id, stock } = productToAdd;
  if (stock > 0) {
      const existingItem = cart.find(item => item.id === id);

      if (existingItem) {
          existingItem.quantity += 1;
      } else {
          cart.push({ ...productToAdd, quantity: 1 });
      }

      // Actualizar el stock del producto
      productToAdd.stock -= 1;

      // Guardar el carrito en localStorage
      localStorage.setItem('products-in-cart', JSON.stringify(cart));

      // Actualizar la interfaz del carrito
      updateCart();
  }
}

  


  
// Función para actualizar la vista del carrito
function updateCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';

  let totalPrice = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-new-product');
    cartItem.innerHTML = `<p id = "text">${item.name} - Cantidad:</p> 
    <div class = "buttons">
      <button class = "btn-Minum" onclick="decrementQuantity('${item.id}')">-</button><p id="text">
      ${item.quantity}</p>
      <button class = "btn-Plus" onclick="incrementQuantity('${item.id}')">+</button>
      <button class = "btn-Delete" onclick="removeFromCart('${item.id}')">Eliminar</button>
    </div>`;

    cartItemsDiv.appendChild(cartItem);

    totalPrice += item.price * item.quantity;
  });

  document.getElementById('cart-total').innerText = `$${totalPrice}`;
}

// Funciones para ajustar la cantidad de productos en el carrito
function incrementQuantity(id) {
  const item = cart.find(item => item.id === id);
  if (item && item.quantity < item.stock) {
    item.quantity++;
    updateCart();
  }
}

function decrementQuantity(id) {
  const item = cart.find(item => item.id === id);
  if (item && item.quantity > 1) {
    item.quantity--;
    updateCart();
  }
  
}

// Función para eliminar un producto del carrito
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('products-in-cart', JSON.stringify(cart));
  updateCart();
}


// Función para vaciar completamente el carrito
document.getElementById('empty-cart').addEventListener('click', () => {
  cart = [];
  localStorage.setItem('prdocuts-in-cart', cart)
  updateCart();
});

// Función para realizar el checkout (puedes implementarla según tus necesidades)
document.getElementById('checkout').addEventListener('click', () => {
  // Lógica para finalizar la compra
});

// Evento al hacer clic en "Añadir al carrito" en cada producto
container.addEventListener('click', function(event) {
    if (event.target.classList.contains('btnAdd')) {
      const id = event.target.getAttribute('id');
      const productToAdd = products.find(product => product.id === id);
      addToCart(productToAdd);
    }
  });
  
  // Función para eliminar un producto del carrito
  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('products-in-cart', JSON.stringify(cart));
    updateCart();
}

  
  // Función para vaciar completamente el carrito
  emptyCart.addEventListener('click', () => {
    cart = [];
    localStorage.setItem('products-in-cart', cart);
    updateCart();
  });
  
  // Función para realizar el checkout (puedes implementarla según tus necesidades)
  document.getElementById('checkout').addEventListener('click', () => {
    // Lógica para finalizar la compra
  });

