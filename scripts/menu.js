                var itemCount = 0;              // number of items on the order
                var addToOrderButtons = [];     // buttons for adding a menu item to the order

                function makeMenu(category, items, placeholder) {
                    var list = "";

                    // Create a menu entry with photo, description and price for each item.
                    for (var i in items) {
                         list += "<li style='padding-left: 1em'>"
                        + "<div>"
                        + "<div style='float: left'><h3>" + items[i].itemName + "</h3></div>"
                        + "<div style='float:right;'><h3>" + "$" +  items[i].price + "</h3></div>"
                        + "</div>"
                        + "<br clear='all'>"
                        + "<img alt=" + items[i].itemName + " src='" + items[i].image + "'" 
                        + " style='float: left; width: 150px; height: 150px'</img>" + "<br clear='all'>"
                        + "<p style='white-space: normal;'>" + items[i].description + "</p>"
                        + "<button data-role='button' data-icon='arrow-r' data-iconpos='right' data-mini='true' "
                        + " id=" + items[i].itemName + " class='newButton' >Add to Order</button>"
                        + "</li>";

                        addToOrderButtons.push(items[i].itemName);                            
                    }
                    $(placeholder).html(list);
                    
                    // Add the button click event for incrementing the order quantity for this item
                    addToOrderButtons.forEach(function (buttonId){
                        var buttonSelector = "#" + buttonId
                         $(document).on("click", buttonSelector, function(e) {
                            e.preventDefault();
                            e.stopImmediatePropagation(); 
                            addItem(buttonId);                             
                        } );
                    });
             
                    var addItem = function(buttonId) {     
                        // Update the count on the "Items on order" button
                        itemCount ++;
                        $('#orderCountButton').html("Items on order: " + itemCount);

                        // Increment the quantity of the ordered item
                        for (var j in data.burgers) {                     
                            if (data.burgers[j].itemName == buttonId) {
                                data.burgers[j].quantity++;
                            }
                        }
                        for (var k in data.sides) {
                            if (data.sides[k].itemName == buttonId) {
                                data.sides[k].quantity++;
                            }
                        }
                    };
                }