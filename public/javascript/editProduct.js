import { loadProducts } from "./productos.js";
import { loadCarrito } from "./cart.js";

const updatedProduct = document.getElementById("updatedProduct");
const carritosContainer = document.getElementById("carritosContainer");

//renderUpdatedProduct
const renderUpdatedProduct = (obj) => {
    //formulario
    const formulario = document.createElement("div");
    formulario.className = "formulario col-12 row";

    //form
    const form = document.createElement("form");
    form.className = "form col-6";

    //legend
    const legend = document.createElement("legend");
    legend.innerHTML = "EDITAR PRODUCTO";

    //name
    const name = document.createElement("input");
    name.type = "text";
    name.name = "name";
    name.id = "nombre";
    name.placeholder = "Nombre de Producto";
    name.required = true;  

    //description
    const description = document.createElement("input");
    description.type = "text";
    description.name = "description";
    description.id = "descripcion";
    description.placeholder = "Descripcion del Producto";
    description.required = true;

    //code
    const code = document.createElement("input");
    code.type = "text";
    code.name = "code";
    code.id = "codigo";
    code.placeholder = "Codigo del Producto";
    code.required = true;

    //thumbnail
    const thumbnail = document.createElement("input");
    thumbnail.type = "text";
    thumbnail.name = "thumbnail";
    thumbnail.id = "thumbnail";
    thumbnail.placeholder = "URL de la Imagen";
    thumbnail.required = true;

    //price
    const price = document.createElement("input");
    price.type = "text";
    price.name = "price";
    price.id = "precio";
    price.placeholder = "Precio del Producto";
    price.required = true;

    //stock
    const stock = document.createElement("input");
    stock.type = "text";
    stock.name = "stock";
    stock.id = "stock";
    stock.placeholder = "Stock del Producto";
    stock.required = true;

    //formButton
    const formButton = document.createElement("div");
    formButton.className = "form-button";

    //submit
    const submit = document.createElement("input");
    submit.value = "Editar";
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        editProduct(data, obj.id);
    });
  
    formButton.append(submit);

    //btnReturn
    const btnReturn = document.createElement("button");
    btnReturn.className = "btnReturn";
    btnReturn.innerHTML = "Cancelar";
    btnReturn.addEventListener("click", () => {loadProducts(), loadCarrito()}); 
  
    form.append(legend, name, description, code, thumbnail, price, stock, formButton, btnReturn);
  
    formulario.append(form);
  
    produtcToEdit.append(formulario);
};

//editProduct
const editProduct = (data, id) => {
    const url = `/api/productos/${id}`;
    const method = "PUT";
    const headers = {
        "Content-Type": "application/json"
    };
    const body = JSON.stringify(data);
    fetch(url, {method, headers, body})
        .then(res => res.json())
        .then(res => {    
            alert("Producto editado correctamente");  
            loadProducts();
            loadCarrito();      
        })
        .catch(err => console.log(err));
};

//toEdit
export const toEdit= (id) => {
    updatedProduct.innerHTML = "";
    carritosContainer.innerHTML = "";
  
    console.log(id);
    fetch(`/api/productos/${id}`)
        .then(response => response.json())
        .then(data => renderUpdatedProduct(data));
};