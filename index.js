var katzDeliLine = [];

function currentLine(x) {
  var line = [];
  if (x.length === 0) {
    return "The line is currently empty.";
  } else {
    for(var i = 0; i < x.length; i++) {
      line += `${(i + 1)}. ${x[i],`;
    }
    
  }
}

// function takeANumber(katzDeliLine, name) {
//   katzDeliLine.push(name);
//   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
// }

// function nowServing() {
//   if(katzDeliLine.length > 0){
//     var current = katzDeliLine.splice(0,1);
//     return `Currently serving ${current}`;
//   }
//   else {
//     return "There is nobody waiting to be served!"
//   }
// }

// function currentLine() {
//   if(katzDeliLine.length > 0){
//     for (let i = 0; i < katzDeliLine.length; i++){
//       if(katzDeliLine.length > 0){
//         return `The line is currently ${i + 1}. ${katzDeliLine[i]
//       }
//     }
//     var i = 0;
//     return `The line is currently ${i + 1}. ${katzDeliLine}`
//   }
// }