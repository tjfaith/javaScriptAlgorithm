// BUTTON EVENTS LISTENER 
// ===TASK 1
document.getElementById("calcBtn").addEventListener("click", function() {
  convertFahrToCelsius(document.getElementById('userVal').value)
});

// ==TASK 2
document.getElementById("check").addEventListener("click", function() {
  checkYuGiOh(document.getElementById('numInput').value)
});

// FUNCTIONS 
function convertFahrToCelsius(celsius) 
{
  // Convert to celsius
  if(isNaN(celsius)){
    output = `${celsius} is not a valid number but a ${typeof celsius}`
    document.getElementById("u_output").innerHTML = output
  }else{
    let convertVal = Number (celsius)
    let toCelsius = convertVal+'\xB0C'

    // Convert to fahrenheit
    let tofar = convertVal * 9 / 5 + 32

    // output
    document.getElementById("u_output").innerHTML='<br>'+convertVal.toFixed(4)+'\xB0C <br>'+tofar + '\xB0F.';
  }

  
}

function checkYuGiOh(n){
  // Check input value if its a number
  if(isNaN(n)){
    output = `invalid parameter ${n}`
    document.getElementById("yugioh_output").innerHTML = output
  }else{
  let numberArr = new Array()
  for (let index = 0; index < n; index++) {
    let indexVal = index+1;
    if(indexVal % 2 == 0 && indexVal % 3 != 0 && indexVal % 5 != 0){
      indexVal = 'yu'
    }else if(indexVal % 3 == 0 && indexVal % 2 != 0 && indexVal % 5 != 0){
      indexVal = 'gi'
    }else if(indexVal % 3 == 0 && indexVal % 2 == 0 && indexVal % 5 != 0){
      indexVal = 'yu-gi'
    }else if (indexVal % 5 == 0 && indexVal % 2 != 0 && indexVal % 3 != 0){
      indexVal = 'oh'
    }else if (indexVal % 5 == 0 && indexVal % 2 == 0 && indexVal % 3 != 0){
      indexVal = 'yu-oh'
    }else if (indexVal % 5 == 0 && indexVal % 2 != 0 && indexVal % 3 == 0){
      indexVal = 'gi-oh'
    }else if (indexVal % 5 == 0 && indexVal % 2 == 0 && indexVal % 3 == 0){
      indexVal = 'yu-gi-oh'
    }
    numberArr.push(indexVal )
  document.getElementById("yugioh_output").innerHTML = JSON.stringify(numberArr)

  }
  }
}
