function meal(meal_cost, tip_percent, tax_percent) {
  let tip = meal_cost * (tip_percent / 100);
  let tax = meal_cost * (tax_percent / 100);
  console.log(Math.ceil(meal_cost + tip + tax));
}

meal(10.25, 17, 5);
