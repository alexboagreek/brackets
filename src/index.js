module.exports = function check(str, bracketsConfig) {
  for (i = str.length; i > 0; --i){
      for (j = 0; j < bracketsConfig.length; j++){
          let temp = bracketsConfig[j].join('');
          let counter = str.includes(temp);
          if (counter){
              str =str.replace(temp, '');
            }
        }
    } return str === "";
} 

