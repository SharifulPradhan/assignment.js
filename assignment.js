// https://github.com/shariful-pradhan-hridoy/assignment.js

// Problem Solving 1 "kilometerToMeter" START▼
function kilometerToMeter(kilometer){
  var meter = kilometer * 1000;
  return meter;
}
// problem solve 1 "kilometerToMeter" END▲



// Problem Solving 2 "budgetCalculator" Start▼
function budgetCalculator(watch, mobile, laptop) {
  var totalBudget = watch * 50 + mobile * 100 + laptop * 500;
  return totalBudget;
}
// Problem Solving 2 "budgetCalculator" END▲



// Problem Solving 3 "hotelCost" START▼
function hotelCost(totalDays){
  var totalCost = 0;
  if (totalDays <= 10) {
      totalCost = totalDays * 100;
  } else if (totalDays <= 20) {
      var firstTenDays = 10 * 100;
      var remaining = totalDays - 10;
      var secoundTenDays = remaining * 80;
      totalCost = firstTenDays + secoundTenDays;
  } else {
      var firstTenDays = 10 * 100;
      var secoundTenDays = 10 * 80;
      var remaining = totalDays - 20;
      var afterTwentyDays = remaining * 50;
      totalCost = firstTenDays + secoundTenDays + afterTwentyDays;
  }
  return totalCost;
}
// Problem Solving 3 "hotelCost" END▲



// Problem Solving 4 "megaFriend" START▼
function megaFriend(array){
  var largeName = "";
  array.forEach(function (friendName) {
    if (friendName.length > largeName.length) {
      largeName = friendName;
    }
  });
  return largeName;
}
// Problem Solving 4 "megaFriend" END▲