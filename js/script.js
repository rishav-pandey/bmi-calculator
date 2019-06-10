function calculate () {
  const height = $('#height-input').val();
  const weight = $('#weight-input').val();
  const heightUnit = $('#height-unit').val();
  const weightUnit = $('#weight-unit').val();
  newHeight = parseFloat((heightConversion(heightUnit, height)));
  newWeight = parseFloat((weightConversion(weightUnit, weight)));
  bmiCalculate(newHeight,newWeight);

}

function heightConversion (heightUnit, height) {
  switch (heightUnit) {
    case "cm":
      height = height / 100;
      break;
    case "m":
      height = height;
      break;
    case "ft":
      const heightSplit = height.split(".");
      if (heightSplit.length == 2) {
        height = ((heightSplit[0] * 30.48) + (heightSplit[1] * 2.54));
      }
      else
      {
        height = (heightSplit[0] * 30.48);
      }
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
  let bmi = "";
  if (height && weight) {
    bmi = (weight / (height * height));
    $('#display').text(bmi.toFixed(2));
  }
  else {
    alert("First Fill all the Field to continue");
    $('#height-input').focus();
  }
  bmiStatus(bmi);
}

function bmiStatus (bmi) {
  console.log(bmi);
  if (bmi >= 40) {
    $("#status").text("Very severely obese");
  } else if (bmi >= 35 && bmi < 40) {
    $("#status").text("Severely obese");
  } else if (bmi >= 30 && bmi < 35) {
    $("#status").text("Moderately obese");
  } else if (bmi >= 25 && bmi < 30) {
    $("#status").text("Overweight");
  } else if (bmi >= 18.5 && bmi < 25) {
    $("#status").text("Normal (healthy weight)");
  } else if (bmi >= 16 && bmi < 18.5) {
    $("#status").text("Underweight");
  } else if (bmi >= 15 && bmi < 16) {
    $("#status").text("Severely underweight");
  } else if (bmi < 15) {
    $("#status").text("Very severely underweight");
  }
}



$('#submit-button').click(function(event) {
  /* Act on the event */
  event.preventDefault();
  calculate();
});
