export class Address 
{
    addressId = null;
    streetAddress:string;
    city:string;
    state:string;
    zipCode:string;

    constructor(streetAddress:string, city:string, state:string, zipCode:string)
    {
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }
}