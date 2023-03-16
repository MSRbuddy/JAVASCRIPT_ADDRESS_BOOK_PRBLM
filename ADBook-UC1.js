// Defining the address book class with given properties
class AddressBook
{
    // Data attributes of the address book
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    emailId;
    // Parameterised constructor initialising the instance with values passed
    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.emailId = params[7];
    }
    // Display the address book contact details
    DisplayContactDetails()
    {
        console.log(`\n First Name: ${this.firstName} ,Last Name : ${this.lastName} , Address : ${this.address}, ${this.city}  ${this.state}  ${this.zip}, Phone Number: ${this.phoneNumber},
        Email ID = ${this.emailId}`);
    }
}
// Defining the address book instance with random details
let addressBookList = [{firstName: "Bharath", lastName: "Dasari", address: "Sec-1", city: "Delhi", state: "Delhi", zip: 112012, phoneNumber: 9724512445, emailId: "bharath@gmail.com"},
                       {firstName: "PranavAdhithya", lastName: "Dasari", address: "Sec-2", city: "Gorakhpur", state: "UttarPradesh", zip: 274306, phoneNumber: 8645512454, emailId: "pranavadhithya@gmail.com"},
                       {firstName: "SriShanth", lastName: "Dasari", address: "Sec-1", city: "Delhi", state: "Delhi", zip: 110012, phoneNumber: 8795512454, emailId: "srishanth@gmail.com"},
                       {firstName: "Shravan", lastName: "Kandula", address: "Sec-3", city: "Kanpur", state: "UttarPradesh", zip: 341012, phoneNumber: 9724512454, emailId: "shravan@gmail.com"},
                       {firstName: "Avinash", lastName: "Kandula", address: "Sec-4", city: "Hisar", state: "Haryana", zip: 146112, phoneNumber: 7845412454, emailId: "avinash@gmail.com"},
                       {firstName: "Ishaan", lastName: "Kandula", address: "Sec-6", city: "Kurukshetra", state: "Haryana", zip: 136119, phoneNumber: 7206512454, emailId: "ishaan@gmail.com"}];
// Storing this array objects in array of objects
let addressBookInArray = new Array();
// Iterating through the object array
for (let i =0; i<addressBookList.length; i++)
{
  // Creating an instance of Address Book with data from the object
  let addressDetails = new AddressBook(addressBookList[i].firstName, addressBookList[i].lastName, addressBookList[i].address, addressBookList[i].city, addressBookList[i].state, addressBookList[i].zip, addressBookList[i].phoneNumber, addressBookList[i].emailId);
  // Pushing the instance in an array
  addressBookInArray.push(addressDetails);
  // Displaying the pushed contact using the method
  addressBookInArray[i].DisplayContactDetails();
}                   
