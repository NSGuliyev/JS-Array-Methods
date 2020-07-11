const adress = {
  street: "520 W Franklin",
  city: "Richmond",
  zipCode: 23220,
};

// Factory Function
function showBaku(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const baku = showBaku("Telvov st 8", "Baku", "AZ1142");
console.log(baku);

// Constructor Function
function Address(street, city, zipCode) {
  (this.street = street), (this.city = city), (this.zipCode = zipCode);
}

const richmond = new Address("520 W Franklin", "Richmond", "23220");
console.log(richmond);
