function scuberGreetingForFeet(distanceInFeet){
  
  // the ride is less than or equal to 400 ft
  if (distanceInFeet <= 400) {
    return "This one is on me!";
  }

  // the ride is a distance between 400 and 2000 ft
  else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return "That will be twenty bucks.";
  }

  // the ride is a distance between 2000 and 2500 ft
  else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    return "I will gladly take your thirty bucks.";
  }

  // the ride is a distance over 2500 ft
  else if (distanceInFeet > 2500) 
    return "No can do.";
  }



function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// NOT USING TERNARY...but passes tests
// function ternaryCheckCity(city){
//   // if the city is NYC, return "Ok, sounds good."
//   if (city === "NYC") {
//     return "Ok, sounds good."; 
//   }

//   // if the city is not NYC, return "No go."
//   else {
//     return "No go.";
//   }
// }



// NOT USING SWITCH...but passes tests
function switchOnCharmFromTip(tip) {
  if (tip === "generous") {
    return "Thank you so much.";
  }
  if (tip === "not as generous") {
    return "Thank you.";
  }
  else if (tip !== "generous" && tip !== "not as generous") {
    return "Bye.";
}
}