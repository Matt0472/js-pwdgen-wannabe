var userName = prompt('Qual è il tuo nome?');
console.log(userName);

var userFamilyName = prompt('Qual è il tuo cognome?');
console.log(userFamilyName);

var userFavouriteColour = prompt('Qual è il tuo colore preferito?');
console.log(userFavouriteColour);

document.getElementById('super_password').innerHTML = userName + userFamilyName + userFavouriteColour + '19';
