function createParagraph(firastName, lastName) {
    // Create new div element
    const newDiv = document.createElement("div");
    
    // Create 1st. paragraph child
    const p1 = document.createElement("p");
    p1.innerText = firastName;
    p1.style.color = "red";
    p1.style.fontSize = "x-large";
    newDiv.append(p1);

    // Create 2nd. paragraph child
    const p2 = document.createElement("p");
    p2.style.fontSize = "50px";
    p2.style.border  = "1px solid black";
    p2.innerText = lastName;
    newDiv.append(p2);   

    // Add new div to body
    const currentScriptElement = document.getElementById("domScript");      
    document.body.append(newDiv);
    document.body.insertBefore(newDiv, currentScriptElement);   
}

createParagraph("Yossi", "Dudai");
let currency = document.getElementById('currency').value;