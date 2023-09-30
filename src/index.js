function summarize(num) {
    num = num || 1;
  
    return function (x) {
      return x + num;
    };
  }
  
  const addFive = summarize(5);
  
  console.log(addFive(3)); 
  console.log(addFive(10)); 
  
  const addOne = summarize();
  
  console.log(addOne(5)); 
  console.log(addOne(7)); 