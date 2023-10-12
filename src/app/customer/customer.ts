export class Customer
{
    customerId:number = 0;
    firstName:string;
    lastName:string;
    emailAddress:string;

    constructor(firstName:string, lastName:string, emailAddress:string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
    }

    setId(id:number)
    {
        this.customerId = id;
    }
}