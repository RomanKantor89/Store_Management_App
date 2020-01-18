# User accounts (for users)
## Create Account
**Description**: the customer creates an account use the services provided by the company.

**Precondition**: the customer is not logged in.

**Actor**: customer

**Trigger**: the customer clicks on the "Sign Up" button.

**Result**: an account is created and saved in the database.

**Postcondition**: the system redirects to the log in page and the customer should be able to log in with the account just created.

**Main flow**:
1. The customer clicks on the "Sign Up" button.
2. The customer is redirected to a page with empty form with the following information: username, first name, last name, password, email. phone number, and address.
3. The customer enters all the required information and then click on "register" button.
4. The customer will be taken back to the login page.

**Alternate flow**:
A1 In step 3, the username entered by the customer already exists.

  A1.1 The systen notifies the user that the username already exists and prompts fora new username.
  
## Log in
**Description**: the customer logs in with a created account.

**Precondition**: the customer is not logged in.

**Actor**: customer

**Trigger**: the customer clicks on the "Login" button.

**Result**: the user is logged in.

**Postcondition**: the system redirects to the Home page and the "Sign-up" and "Login" buttons disappear.

**Main flow**:
1. The customer clicks on the "Login" button.
2. The customer is redirected to a page promping for username and password.
3. The customer enters username and password and clicks on Login.
4. The customer is taken back to the Home page.


# Services (for admins)
## Create Service
The admin (who is already logged in) goes to the Services page and clicks on "Add New Service". A form is displayed for information about the service (id, name, description). After filling it out and clicking on "Add", the admin is redirected to the Services page with the updated list.
## Update Service
The admin goes to the Services page and click on "Update" under the service they want to change. A form is displayed for information about the form (id, name, description, image url). After filling it out and clicking on "Create", the admin is redirected to the Services page with the updated list.
