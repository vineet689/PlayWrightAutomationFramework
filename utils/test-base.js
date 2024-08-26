const base = require('@playwright/test');


exports.customtest = base.test.extend(
{
testDataForOrder :    {
    username : "standard_user",//anshika@gmail.com",
    password : "secret_sauce",//Iamking@000",
    productName:"Sauce Labs Backpack"
    }

}

)




