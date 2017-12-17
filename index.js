var katzDeliLine = [];

function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function currentLine(array) {
  if (array.length == 0) {
    return `The line is currently empty.`;
  }
  let stringerfy = "";
  for (let index = 0; index < array.length; index++) {
<<<<<<< HEAD
    stringerfy = stringerfy + (index + 1) + ". " + array[index] + ", ";
    //stringerfy = stringerfy +`${index+1}, ${array.index}, `;
=======
    stringerfy = stringerfy + (index + 1) + ". " + array[index] + ", "
>>>>>>> 855148760fb008227d6980f5299b14bb0b3426f8
  }
  stringerfy = stringerfy.toString();
  stringerfy = stringerfy.slice(0, -2);
  return `The line is currently: ${stringerfy}`;
}

function nowServing(array) {
  if (array.length == 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${array[0]}.`;
  }
<<<<<<< HEAD
  return `Currently serving ${array[0]}.`;
  //array.shift();
  array.splice(0, 1);
=======
  //delete array[0];
  //array.splice(0, 1);
  array.shift();

  //return array;

>>>>>>> 855148760fb008227d6980f5299b14bb0b3426f8

  //delete array[0];
  return array;
}
