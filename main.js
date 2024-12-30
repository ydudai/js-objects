// 
// Create products array
let products = [
    createProduct("Bread", "Pumpernikel bread", 10),
    createProduct("Cheese", "Strauss Ski 5%", 15),
    createProduct("Butter", "Tnuva 100 gr.", 20),
    createProduct("Coffee", "tester choice 250 gr.", 30),
    createProduct("Tomato", "Megi 1kg.", 25)];


function createProduct(productName, description, price) {
    return {
        productName: productName,
        description: description,
        price: price
    };
}
console.log(products);
// --------------------- END of create products array ---------------

// Register to 'input' event 
document.getElementById("maxPrice").addEventListener('input', showProducts);

let maxPrice = 0;
function showProducts(e) {

    // Filter products to show
    maxPrice = e.target.value;
    let productsToShow = products.filter((product) => product.price <= maxPrice);
    
    // Remove old product elements from browser
    clearProducts();

    // Display Product elements in browser
    productsToShow.forEach(product => {
        createDomElement(product);
    });
}


function clearProducts() {
    let productDivs = document.getElementsByTagName("div");
    let numProducts = productDivs.length
    for (let i = numProducts - 1; i >= 0; i--) {
        productDivs[i].remove();
    }
}


// Create product child DOM element
function createDomElement(product) {
    const newDiv = document.createElement("div");
    newDiv.style.border = "1px solid black";
    newDiv.style.margin = "10px";

    const h1 = document.createElement("h2")
    h1.innerText = product.productName;

    const p = document.createElement("p")
    p.innerText = "description: " + product.description + " Price: " + product.price;
    newDiv.append(h1);
    newDiv.append(p);

    // Add new div to body
    const currentScriptElement = document.getElementById("domScript");
    document.body.append(newDiv);
    document.body.insertBefore(newDiv, currentScriptElement);
}
