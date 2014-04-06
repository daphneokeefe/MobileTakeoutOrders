function showOrder() {
    var list = "";
    var itemTotal = 0;      // total of items on order before sales tax
    var grandTotal = 0;     // total order including sales tax
    var salesTaxRate = 8 / 100;
    var salesTax = 0;

    // Burger items
    list += "<li data-role='list-divider' class='ui-li-divider ui-bar-a ui-first-child'>Burgers</li>";
    data.burgers.forEach(function(orderItem) {
        if(orderItem.quantity > 0 ){
            list += "<li class='ui=li ui-li-static ui-body-a'>"
                + orderItem.quantity + "&nbsp;&nbsp;"
                + orderItem.itemName 
                + "<div style='float:right;'> $ " 
                + orderItem.quantity * orderItem.price
             + "</div></li>";
            itemTotal += orderItem.quantity * orderItem.price;
        }
    });

    // Side order items
    list += "<li data-role='list-divider' class='ui-li-divider ui-bar-a '>Sides</li>";
    data.sides.forEach(function(orderItem) {                        
        if(orderItem.quantity > 0 ){
            list += "<li class='ui=li ui-li-static ui-body-a'>"
                + orderItem.quantity + "&nbsp;&nbsp;"
                + orderItem.itemName 
                + "<div style='float:right;'> $ " 
                + orderItem.quantity * orderItem.price
                + "</div></li>";

            itemTotal += orderItem.quantity * orderItem.price;
        }
    });
    
    list += "<li data-role='list-divider' class='ui-li-divider ui-bar-a '>"
        + "Subtotal"
        + "<div style='float:right;'> $ " 
        + itemTotal.toFixed(2); 
        + "</li>";

    salesTax = itemTotal * salesTaxRate;
    list += "<li class='ui=li ui-li-static ui-body-a'>"
        + "Sales Tax"
        + "<div style='float:right;'> $ " 
        + salesTax.toFixed(2);
        + "</div></li>";

    grandTotal = itemTotal + salesTax;
    list += "<li data-role='list-divider' class='ui-li-divider ui-bar-a ui-last-child'>Grand Total<div style='float:right;'> $ " 
        + grandTotal.toFixed(2); 
        + "</li>";

    return list;
};