let productNameInput = document.getElementById("productNameInput");
let productPriceInput = document.getElementById("productPriceInput");
let productCatogeryInput = document.getElementById("productCatogeryInput");
let productDescriptionInput = document.getElementById("productDescriptionInput");
let productsConatiner;
let addBtn =document.getElementById("addBtn");
let updateBtn =document.getElementById("updateBtn");
let temo;

if (  localStorage.getItem("products")!= null) {
    productsConatiner =  JSON.parse( localStorage.getItem("products")) ;
   displayProducts(productsConatiner);
}
else{
    productsConatiner=[];
}


function addProduct() {

    if (validateProductName() == true && validateProductDec() == true && validateProductPrice() ==true && validateProductCatogery()==true  ) {
        let product ={
            name :productNameInput.value,
            price :productPriceInput.value,
            catogery :productCatogeryInput.value,
            desc :productDescriptionInput.value
            
            }
              productsConatiner.push(product)
              clearForm();
              localStorage.setItem("products",JSON.stringify(productsConatiner));
              displayProducts(productsConatiner)
    }
    else{alert("Not Valid")}
}
function clearForm() {
    productNameInput.value="";
    productPriceInput.value="";
    productCatogeryInput.value="";
    productDescriptionInput.value="";

}

function displayProducts(list) {

    let cart ="";
    for (let i = 0; i < list.length; i++) {
        cart+=` 

        <tr>
        <td>${i+1}</td>
        <td>${list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].catogery}</td>
        <td>${list[i].desc}</td>
        <td><button onclick=" updateProductsForm(${i});"    class="btn btn-sm btn-outline-warning "> Update</button></td>
        <td><button  onclick="deleteProducts(${i})"  class="btn btn-sm btn-outline-danger   "> Delete</button></td>
    </tr>
    `
        
    }
    document.getElementById("table").innerHTML=cart;
    
}


function searchProducts(searchTerm) {

    let searchContainer=[];
    for (let i = 0; i < productsConatiner.length; i++) {
    
    if (productsConatiner[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
          
        searchContainer.push(productsConatiner[i])
        }
    }
    
    displayProducts(searchContainer)
}



function deleteProducts(deletedIndex) {

    productsConatiner.splice(deletedIndex,1);
    localStorage.setItem("products",JSON.stringify(productsConatiner));
    displayProducts(productsConatiner);
}   


function updateProductsForm(updatedIndex) {

    productNameInput.value=productsConatiner[updatedIndex].name;
    productPriceInput.value=productsConatiner[updatedIndex].price;
    productCatogeryInput.value=productsConatiner[updatedIndex].catogery;
    productDescriptionInput.value=productsConatiner[updatedIndex].desc;
    updateBtn.classList.replace("d-none","d-inline-block");
    addBtn.classList.add("d-none");
temo=updatedIndex

}


function update() {
    productsConatiner.splice(temo,1 ,{name:productNameInput.value,price:productPriceInput.value,catogery:productCatogeryInput.value,desc:productDescriptionInput.value})
    displayProducts(productsConatiner)
    updateBtn.classList.replace("d-inline-block","d-none");
    addBtn.classList.replace("d-none","d-inline-block");
    localStorage.setItem("products",JSON.stringify(productsConatiner));
    clearForm();

}

function validateProductName() {

    var regex =/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*[a-zA-Z]$/
    if (regex.test(productNameInput.value)== true) {
        productNameInput.classList.replace("is-invalid" ,"is-valid")
        return true;
    }
    else
    {
        productNameInput.classList.add("is-invalid")
        return false;
    }

}
function validateProductPrice() {

    var regex =/^\d{0,8}(\.\d{1,4})?$/
    if (regex.test(productPriceInput.value)== true) {
        productPriceInput.classList.replace("is-invalid" ,"is-valid")
        return true;
    }
    else
    {
        productPriceInput.classList.add("is-invalid")
        return false;
    }

}

function validateProductCatogery() {

    var regex =/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*[a-zA-Z]$/
    if (regex.test(productCatogeryInput.value)== true) {
        productCatogeryInput.classList.replace("is-invalid" ,"is-valid")
        return true;
    }
    else
    {
        productCatogeryInput.classList.add("is-invalid")
        return false;
    }

}
function validateProductDec() {

    var regex =/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*[a-zA-Z]$/
    if (regex.test(productDescriptionInput.value)== true) {
        productDescriptionInput.classList.replace("is-invalid" ,"is-valid")
        return true;
    }
    else
    {
        productDescriptionInput.classList.add("is-invalid")
        return false;
    }

}