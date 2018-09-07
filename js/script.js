function calculate () {
  const height = $('#height-input').val();
  const weight = $('#weight-input').val();
  const heightUnit = $('#height-unit').val();
  const weightUnit = $('#weight-unit').val();
  newHeight = parseInt((heightConversion(heightUnit, height)));
  newWeight = parseInt((weightConversion(weightUnit, weight)));
  console.log(newHeight, newWeight);
  bmiCalculate(newHeight,newWeight);

}

function heightConversion (heightUnit, height) {
  switch (heightUnit) {
    case "cm":
      height = height;
      break;
    case "m":
      height = height * 100;
      break;
    case "ft":
      const heightSplit = height.split(".");
      height = ((heightSplit[0] * 30.68) + (heightSplit[1] * 2.54));
      break;
    case "in":
      height = height * 2.54;
      break;
    default:
      alert("Unidentified Unit");
      break;
  }
  return height;
}

function weightConversion (weightUnit, weight) {
  switch (weightUnit) {
    case "kg":
      weight = weight;
      break;
    case "lbf":
      weight = weight * 0.453592;
      break;
    case "gm":
      weight = weight * 0.001;
      break;
    default:
      alert("Unidentified Unit");
      break;
  }
  return weight;
}

function bmiCalculate(height, weight) {
  if (height && weight) {
    const bmi = (weight / (height * height) ) * 10000;

    $('#display').text(bmi.toFixed(2));
  }
  else {
    alert("First Fill all the Field to cotinue");
    $('#height-input').focus();
  }
}

function bmiStatus () {
  // body...
}



$('#submit-button').click(function(event) {
  /* Act on the event */
  event.preventDefault();
  calculate();
});
