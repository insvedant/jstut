const accountId = 144334
let accountEmail = "sayan@email.com"
var accountPassword= "12345"
accountCity = "kolkata"

accountEmail = "sdsd@sd.com"
accountPassword = 2121
accountCity = "bangaluru"


// accountState;


/*
Prefer not to use var,because of an issue in block scope and functional scope.

*/
console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity]);