import { renderForm } from "./form.js";
import { toEdit } from "./editProduct.js";
import { loadCarrito } from "./cart.js";

const productContainer = document.getElementById("productContainer");
const form = document.getElementById("form");
const updatedProduct = document.getElementById("updatedProduct");

//renderProducts
const renderProducts = (arr) => {  
    if (arr.length === 0) {    
        const h2 = document.createElement("h2");
        h2.className = "noProducts col-12";
        h2.append("ERROR: No hay productos en la base de datos.");    
        productContainer.appendChild(h2);
    } else {
        for (const el of arr) { 
            //productsContainer
            const productsContainer = document.createElement("div");
            productsContainer.className = "productsContainer col-12 col-md-3";      

            //productImage
            const productImage = document.createElement("div");
            productImage.className = "productImage";
            productImage.innerHTML = `<img src="${el.thumbnail}" alt="product image" class="productImage">`;

            //productInfo
            const productInfo = document.createElement("div");
            productInfo.className = "productInfo";

            //productName
            const productName = document.createElement("h2");
            productName.innerHTML = el.name.toUpperCase();

            //productDescription
            const productDescription = document.createElement("p");
            productDescription.innerHTML = `Descripcion: ${el.description}`;
      
            //productCode
            const productCode = document.createElement("p");
            productCode.innerHTML = `Codigo: ${el.code}`;

            //productPrice
            const productPrice = document.createElement("p");
            productPrice.innerHTML = `Precio: $${el.price}`;

            //productStock
            const productStock = document.createElement("p");
            productStock.innerHTML = `Stock: ${el.stock}`;

            //productId
            const productId = document.createElement("p");
            productId.innerHTML = `Id: ${el.id}`;

            //productBtns
            const productBtns = document.createElement("div");
            productBtns.className = "productBtns";

            //btnEdit
            const btnEdit = document.createElement("button");
            btnEdit.className = "editBtn";
            btnEdit.innerHTML = "EDITAR";
            btnEdit.addEventListener("click", () => toEdit(el.id));

            //deleteBtn
            const deleteBtn = document.createElement("button");
            deleteBtn.className = "p-1 deleteBtn";
            deleteBtn.innerHTML = "ELIMINAR";
            deleteBtn.addEventListener("click", () => deleteProduct(el.id));

            productBtns.append(btnEdit, deleteBtn);

            productInfo.append(productName, productDescription, productCode, productPrice, productStock, productId, productBtns);
      

            //addToCart
            const addToCart = document.createElement("div");
            addToCart.className = "addToCart text-center";

            //btnAdd
            const btnAdd = document.createElement("button");
            btnAdd.className = "addBtn";
            btnAdd.innerHTML = "AGREGAR A CARRITO";
            btnAdd.addEventListener("click", () => addProductToCart(el.id));

            addToCart.append(btnAdd);

            productsContainer.append(productImage, productInfo, addToCart);     
      
            productContainer.append(productsContainer);
        }
    }
    //btnContainer
    const btnContainer = document.createElement("div");
    btnContainer.className = "col-12 text-center justify-content-center align-items-center";

    //form
    const form = document.createElement("button");
    form.className = "toFormuBtn col-12 col-md-3";
    form.innerHTML = "Ir a Cargar";
    form.addEventListener("click", () => {
        renderForm();    
    });
    btnContainer.append(form);
    productContainer.append(btnContainer);
};

//loadProducts
export const loadProducts = () => {  
    productContainer.innerHTML = "";
    form.innerHTML = "";
    updatedProduct.innerHTML = "";
    fetch('/api/productos')
    .then(response => response.json())
    .then(data => renderProducts(data));
};

//addProductToCart
function addProductToCart(idEl) {
    fetch('/api/carrito')
    .then(response => response.json())
    .then(data => reRenderCart(data, idEl));  
};

//reRenderCart
const reRenderCart = (arr, idEl) => {
    if (arr.length === 0) {
      alert("No existe un carrito creado. Use el boton 'Crear carrito' para crear uno.");
    } else {
        const idCart = arr[arr.length - 1].id;
        const idProduct = idEl;	
        const url = `/api/carrito/${idCart}/productos/${idProduct}`;
        fetch(url, {
            method: "POST"
        })
        .then(response => response.json())
        .then(data => {
            alert(data);
            loadCarrito();
        }).catch(err => console.log(err));
    }
};

//deleteProduct

const deleteProduct = (idEl) => {
    const url = `/api/productos/${idEl}`;
    fetch(url, {
        method: "DELETE"
    }).then(response => response.json())
    .then(data => {
        alert(data);
        loadProducts();
    }).catch(err => console.log(err));
} 