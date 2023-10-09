//metric <--> imperial conversions
//Weight, Distance, Tempurature
//lbs to kg, miles to km, celsius to fahrenheit
//Must be able to convert single value, as well as array

//conversion function

var conversionType = 1;

setConversion = (val) => {
  var option1 = document.getElementById("option1");
  var option2 = document.getElementById("option2");
  switch (val) {
    //lb to kg
    case 1:
      conversionType = 1;
      option1.innerText = "Lbs";
      option2.innerText = "Kgs";
      break;
    //kg to lb
    case 2:
      conversionType = 2;
      break;
    //mile to km
    case 3:
      conversionType = 3;

      option1.innerText = "Miles";
      option2.innerText = "Km";
      break;
    //km to mile
    case 4:
      conversionType = 4;
      break;
    //c to f
    case 5:
      conversionType = 5;

      option1.innerText = "Celsius";
      option2.innerText = "Fahrenheit";
      break;
    //f to c
    case 6:
      conversionType = 6;
      break;
  }
};

convertToArray = (arr) => {
  //take in user input and split into array of float values
  console.log(arr);
  let array = arr.split(",").map(Number);
  console.log(array);

  convertTo(array, conversionType);
};

reverseConversion = () => {
  var temp = "";
  var option1 = document.getElementById("option1");
  var option2 = document.getElementById("option2");
  if (conversionType % 2 == 1) {
    conversionType++;

    temp = option1.innerText;
    option1.innerText = option2.innerText;
    option2.innerText = temp;


  } else {
    conversionType--;
    temp = option1.innerText;
    option1.innerText = option2.innerText;
    option2.innerText = temp;

  }
  document.getElementById("results").innerText = "";
};

convertTo = (array, conversionType) => {
  let newArray = [];

  switch (conversionType) {
    //lb to kg
    case 1:
      console.log(array);
      for (let num of array) {
        console.log(num);
        num = (num * 0.453592).toFixed(2);
        console.log(num);
        newArray.push(num);
      }
      //set text of results to newArray
      document.getElementById("results").innerHTML = newArray;
      console.log(newArray);
      break;
    //kg to lb
    case 2:
      console.log(array);
      for (let num of array) {
        console.log(num);
        num = (num * 2.20462).toFixed(2);
        console.log(num);
        newArray.push(num);
      }
      //set text of results to newArray
      document.getElementById("results").innerHTML = newArray;
      console.log(newArray);
      break;
    //mile to km
    case 3:
      console.log(array);
      for (let num of array) {
        console.log(num);
        num = (num * 1.60934).toFixed(2);
        console.log(num);
        newArray.push(num);
      }
      //set text of results to newArray
      document.getElementById("results").innerHTML = newArray;
      console.log(newArray);
      break;
    //km to mile
    case 4:
      console.log(array);
      for (let num of array) {
        console.log(num);
        num = (num *= 0.621371).toFixed(2);
        console.log(num);
        newArray.push(num);
      }
      //set text of results to newArray
      document.getElementById("results").innerHTML = newArray;
      console.log(newArray);
      break;
    //c to f
    case 5:
      console.log(array);
      for (let num of array) {
        console.log(num);
        num = (num * (9 / 5) + 32).toFixed(2);
        console.log(num);
        newArray.push(num);
      }
      //set text of results to newArray
      document.getElementById("results").innerHTML = newArray;
      console.log(newArray);
      break;
    //f to c
    case 6:
      console.log(array);
      for (let num of array) {
        console.log(num);
        num = ((num - 32) * (5 / 9)).toFixed(2);
        console.log(num);
        newArray.push(num);
      }
      //set text of results to newArray
      document.getElementById("results").innerHTML = newArray;
      console.log(newArray);
      break;
  }
};
