Login Activity Diagram
===============  
<img src="https://github.com/SenecaCollegeBTSProjects/Group_19/blob/master/BTS530/images/LoginFlowchart.png">


Look and Feel of the Application 
===============
https://projects.invisionapp.com/prototype/ui-prototype-v0-01-ck0pepu4p00bf3d01m4kbxqh7

Database Design
===============
In this database design we will show and explain how our schemas interact with each other with respect to non relational database design rules such as reference to schema and nested schemas. 

Payment Schema
---------------
 - Id - database generated unique identification.
 - Card number - the number of the payment card such as visa for example.
 - Expiry date - the date of the expiry of the card that is being used.
 - CVC - the 3 digit code on the back of the payment card.  
 - ***This schema is nested inside Customer schema.***

Customer Schema
---------------
- Id - database generated unique identification.
 - Name - first name of the customer.
 - Last name - last name of the customer.
 - Email Address - email address of the customer.
 - Phone - phone number of the customer
 - Company name - the name of the company you own if applicable.
 - ***This schema has 3 nested schemas: Address, Payment and Order***

Order Schema
---------------
 - Order_id - database generated unique identification.
 - Order status - the status that shows if the order is ready for pick up or not.  
 - ***This schema is nested inside Customer schema.***

Order Item Schema
---------------
 - Order_item_id - database generated unique identification.
 - Quantity - the quantity of specific item that refers to current Order_item_id.  
 - ***This schema is nested inside Order schema.***  
 - ***This schema has a reference to Item schema through Item_id.***

Item Schema
---------------
- Item_id - database generated unique identification.
- Item_name - the name of the item selected. 
- Item_price - the price of the item selected.
- ***This schema can be referenced by "Order Item schema" through Item_id.*** 

Address Schema
---------------
- Id - database generated unique identification.
- Street number
- Street name
- Province - constant Ontario.
- Country - constant Canada.
- Postal code

Employee Schema
---------------
- Employee_id - database generated unique identification.
- Name
- Last name
- Email address
- phone
- Admin_id (optional)
- ***This schema has a nested schema "Address".*** 


Database Diagram
---------------  
<img src="https://github.com/SenecaCollegeBTSProjects/Group_19/blob/master/BTS530/images/MongoDb_Capston.jpg">


