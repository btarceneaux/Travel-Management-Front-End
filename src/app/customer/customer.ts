export class Customer
{
    customerId = null;
    firstName:string;
    lastName:string;
    emailAddress:string;

    constructor(firstName:string, lastName:string, emailAddress:string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
    }
}