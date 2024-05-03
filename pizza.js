"use strict";

function selectedApizza() {
    let selectedOption = document.querySelector("input[name='pizza']:checked").id;
    let pizzaCost;

    // Assigning prices based on the selected option
    switch(selectedOption) {
        case "hawai":
            pizzaCost = 5.25;
            break;
        case "peperroni":
            pizzaCost = 6.00;
            break;
        case "steak":
            pizzaCost = 10.00;
            break;
        default:
            alert("Please select a pizza.");
            return; // Exit function if no pizza is selected
    }

    // Displaying the selected pizza's cost
    alert("The " + selectedOption + " pizza costs: $" + pizzaCost.toFixed(2));
}
