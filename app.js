let userAge = prompt(Number("Enter Your Age" ));

if (isNaN(userAge) || userAge.length == 0 ||userAge < 0 ) {
  alert("Invalid age. Please enter a valid age.");
} else {
  if (userAge >= 18 && userAge <= 30) {
    alert("Hey there! You're in the prime of your life!");
  } else if ( userAge < 18) {
    alert("Hello, young one! You're still underage.");
  } else {
    alert("Hello, wise one! You have experienced a lot in life.");
  }
}
