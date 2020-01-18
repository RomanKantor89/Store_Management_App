# Admin functionalities

## Customers
### View All
**Description**: The admin views all customers.

**Precondition**: The admin is logged in.

**Main flow**

1. The admin clicks on the "Customers" button in the navigation bar.
2. The admin is presented with a list of customers.

### Sort
**Description**: The admin sorts all customers by a specific category.

**Precondition**: The admin is in the customers page.

**Main flow**

1. The admin clicks on one of the table headers (username, first name, last name, email, and phone number) to sort the list with that criteria.
2. The admin is presented with the table of customers after the sort.

**Alternate flow**

A1. After step 2, the user clicks on the same table header again to reverse the sorting order (e.g. ascending to descending)

### Search
**Description**: The admin searches the customers with keywords.

**Precondition**: The admin is in the "customers" page.

**Main flow**

1. The admin clicks on the textbox.
2. The textbox is highlighted to show that the user can start typing.
3. The admin types in letters.
4. With each letter, the table refreshes to display the current results matching the keyword.

## Orders
### View
**Description**: The Admin views the orders for one customer.

**Precondition**: The admin is logged in.

**Main flow**

1. The admin clicks on the "Customers" button in the navigation bar.
2. The admin is presented with a table of customers.
3. The admin clicks on "View Orders" for the customer they want to check.
4. The admin is redirected to the "order detail" page.

### Update Status
**Description**: The Admin updates the order status.

**Precondition**: The admin is in the "Order detail" page.

**Main flow**

1. The admin clicks on the dropdown menu for order status.
2. The admin chooses the status they want to set the order to.
3. The admin clicks on the "Update" button.
4. THe page refreshes to show that the order status has been updated.

### Delete
**Description**: The admin deletes an order.

**Precondition**: The admin is in the "order detail" page.

**Main flow**

1. The admin clicks on "delete".
2. The page is refreshed to show that the order is deleted.

# Customer functionalities
## Orders
### Create
**Description**: The customer creates an order.

**Precondition**: The customer is logged in.

**Main flow**

1. The customer clicks on "Place order" on the right side of the navigation bar.
2. The customer is taken to the page displaying all services.
3. The customer clicks on the desired service category.
4. A modal dialog shows up with a list of common items and with textboxes to change the quantity.
5. The customer enters the desired quantity.
6. The customer clicks on "Complete" button.
7. The modal dialog changes to one line of text saying "item successfully added".

## Cart
### View
**Description**: the customer views the cart.

**Precondition**: the customer is logged in.

**Main flow**

1. The customer clicks on the cart icon on the navigation bar.
2. The customer is taken to the page displaying all the orders they have created but have not checked out.

**Alternate flow**

A1. The customer does not have any non-checked-out orders. The cart page displays one line "Cart is empty".
