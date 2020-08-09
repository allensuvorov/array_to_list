function arrayToList(array) { 
    if (array.length == 0) { return null; };
    
    let head = {
      value: array[0],
      next: null
    };
    
    let previous = head;
  
    for(let i = 1; i < array.length; i++) { 
      previous.next = { 
        value: array[i],
        next: null
      };
      previous = previous.next;
    }
    return head;
  }

  console.log(arrayToList([10, 20, 30]));