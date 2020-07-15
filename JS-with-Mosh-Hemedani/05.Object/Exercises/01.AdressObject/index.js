// Create an Address Object
// street
// city
// zipCode
// showAddress(address) that takes an address object and displays all
// the properties of this object along with their value. 

const adress = {
  street: "520 W Franklin",
  city: "Richmond",
  zipCode: 23220,
};

function showAdress(info) {
  for (let value in info) {
    console.log(value, info[value]);
  }
}

showAdress(adress);
