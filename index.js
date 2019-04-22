var KatzDeliLine = [];

function takeANumber (KatzDeliLine, name) {
  KatzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${KatzDeliLine.length} in line.`;
}

function nowServing (KatzDeliLine) {
  if (KatzDeliLine.length > 0) return `Currently serving ${KatzDeliLine.shift()}.`;
  else return "There is nobody waiting to be served!";
}

function currentLine(KatzDeliLine) {
  if (KatzDeliLine.length > 0) {
    return "The line is currently empty."
  } 
  const numbersAndNames = []
    
  for (let i = 0; i < KatzDeliLine.length; i++) {
      numbersAndNames.push(`${i + 1}. ${KatzDeliLine[i]}`)
    }
  return `The line is currently: ${numbersAndNames.join(',')}`
}