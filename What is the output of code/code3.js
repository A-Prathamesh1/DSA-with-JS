var output = (function(x) {
    delete x;
    return x;
  })(0);
  
console.log(output);

/**
 * Delete operator works on object properties and not for the local variables 
 */