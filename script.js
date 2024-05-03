"use strict";

function calculatePrice() {
    var basePrice = 2.25; // Base price for 1 scoop
    var additionalScoopsPrice = 1.25; // Additional scoop price
    var toppingPrices = {
        sprinkles: 0.5,
        hotfudge: 1.25,
        whippedcream: 0.25,
        cherry: 0.25,
        nuts:0.25
    };
    
    var scoops = parseInt(document.getElementById("scoops").value);
    var toppings = document.getElementsByName("topping");
    var container = document.querySelector('input[name="container"]:checked').value; // Get selected container
    
    var totalPrice = basePrice + (scoops - 1) * additionalScoopsPrice; // Calculate base price
    
    // Calculate topping prices
    for (var i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            totalPrice += toppingPrices[toppings[i].value];
        }
    }
    
    // Adjust price for cup
    if (container === "cup") {
        totalPrice += 0.5; // Additional charge for cup
    }
    
    // Calculate tax (assuming 10%)
    var tax = totalPrice * 0.1;
    
    // Calculate total due
    var totalDue = totalPrice + tax;
    
    // Display order summary
    document.getElementById("basePrice").textContent = "Base Price: $" + totalPrice.toFixed(2);
    document.getElementById("tax").textContent = "TAX: $" + tax.toFixed(2);
    document.getElementById("totalDue").textContent = "Total Due: $" + totalDue.toFixed(2);
    document.getElementById("priceOutput").style.display = "block";
}
