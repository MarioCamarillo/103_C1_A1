//////////////////////////////////////////////////////////////////////////////////////
// Will be using Arrays, I think this will be better.
//
// Found this in https://www.w3schools.com/js/js_array_const.asp
// "The keyword const is a little misleading. It does NOT define a constant array. 
//  It defines a constant reference to an array. Because of this, we can still change 
//  the elements of a constant array."
//
// const differentVariables= ["the first value for the first variable goes here,the 
//                             second goes here, and so on"];
//////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////
// Variables that are probablu used within 
// Amazon, Netflix, Youtube, etc.
// They are assigned to each element of the array
// 
// 0.- name  <--this will be userName
// 1.- email <--this will be userEmail (email appears to be reserved or something)
// 2.- password
// 3.- age
// 4.- country
// 5.- browser
// 6.- plainOrPremium
// 7.- preferences
// 8.- timeOnLineHours
// 9.- lastLoginDate
// 10.- watchTimeHours
// 11.- suscribedTo
// 12.- mobileOrDesktop
// 13.- gender
// 14.- youtubeChannel
// 15.- accountType
// 16.- paidOrNot
// 17.- itemsInBasquet
// 18.- creditCardInfo
// 19.- addressShipping
// 20.- addressBilling
/////////////////////////////////////////////////////////////////////////////////

const differentVariables = ["userName", "userEmail","password","age","country",
                                "browser", "plainOrPremium", "preferences", "timeOnLineHours", "lastLoginDate", "watchTimeHours", "all", "mobileOrDesktop", "gender", "youtubeChannel", "accountType",
                                "paidOrNot", "itemsInBasquet", "creditCardInfo", "addressShipping",         "addressBilling"];


                                
/////////////////////////////////////////////////////////////////////////////////////
// This could be used with a For Loop. Will be using individual prints instead.
// Semi-Brute force is used until we can access the loops.
////////////////////////////////////////////////////////////////////////////////////

document.write(`<p class="p-for-js">${differentVariables[0]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[1]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[2]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[3]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[4]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[5]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[6]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[7]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[8]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[9]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[10]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[11]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[12]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[13]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[14]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[15]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[16]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[17]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[18]}</p>`);
document.write(`<p class="p-for-js">${differentVariables[19]}</p>`);

