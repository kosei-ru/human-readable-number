module.exports = function toReadable (number) {
  let number1_9   = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];                   
  let number10_19   = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
                       'sixteen', 'seventeen', 'eighteen', 'nineteen']; 
  let number20_90   = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];                                 
  let number100_900 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 
                       'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];                  
      
  
  if (number == 0) return 'zero';
  
  let result ='';
  let remains;
  let strNumber = ('00' + number).slice(-3);

  remains = strNumber[0];
  if (remains > '0') result = number100_900[Number(remains) - 1];
  
  remains = strNumber[1];
  if (remains >= '2') {
    result += ' ' + number20_90[Number(remains) - 2];
    remains = strNumber[2];
    if (remains > 0) result += ' ' + number1_9[Number(remains) - 1];
  }
  else if (remains == '1')
    result += ' ' + number10_19[Number(strNumber[2])];
  else if (strNumber[2] > '0') result += ' ' + number1_9[Number(strNumber[2]) - 1];

  return result.trimStart ();
}