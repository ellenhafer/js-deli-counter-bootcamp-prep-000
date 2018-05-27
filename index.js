var katzDeliLine = ["Dave","Mike","Ellen"];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing() {
  if(katzDeliLine.length > 0){
    var current = katzDeliLine.splice(0,1);
    return `Currently serving ${current}`;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}