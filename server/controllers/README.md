# User Controllers

1. Check Email Exist - assess the request body if matched the given condition if email exist,returns a Boolean value
2. Register User - returns the created object of a new User Model with the values from the request body to the corresponding Object keys
3. Login User - assess the user input of credentials if matches the stored specific data. Returns an access token for a successful login. Returns a String if login authentication failed. (option to change the return value to Boolean)
4. Update client - PUT method which updates the user details from Admin to Client. Done by an Admin Returns the updated object value. (option to change the return value into a Boolean)
5. Retrieve all Users - done by Admin, returns an array of Users registered in the database.
6. Retrieve all Admin - done by Admin, returns an array of Admin Users registered in the database. Matching the condition isAdmin:true
7. Retrieve all Clients - done by Admin, returns an array of Client Users registered in the database. Matching the condition isAdmin:false
8. Find User by ID - done by Admin, returns an object which matches the requested ID to a User from the database. ID requested by params
9. User Details - done by any registered user, returns an object which matches the ID of the requesting login user.

# Property Controllers

1. Create Property - done by Admin, creates a new nested object containing the details from the requested body. The property must be categorized as Hotel/Townhouse/Condominium unit. Returns an object created. 
2. Create Lease Property - done by Admin, creates a leasing property (a kind of property which do not contain details for features such as bedroom, garage etc.)requesting body only includes the unit details. Returns an object created
3. Edit property - done by Admin, updates any property category from the database which matches the ID of the requesting params. Requesting body includes the updated value for price, lotArea, storey, available slot, remarks, active status. returns an object updated
4. Get All Property - done by Admin, returns an array of all properties registered.


# Acquisition Controllers

1. New Acquisition - done by user/client, requires all fields. Targets the matched property requested from the params by ID. System will access the requesting login user credentials to fill up the user details, includes transaction details, and other details. Returns the object created
2. Updated Acquisition - done by Admin, updates remarks. Returns the object updated. (dont know the purpose of this)
3. Update Payment of Acquisition - done by participating client, system targets the property which matches the requesting params by ID. Updates the transaction details, requires all specified fields. (client security and conditions if login user doesnt own the transaction not yet applied, async-await function bug unsolved). Returns the (Acquisition) object updated.