function arrayToList(array) { 
    if (array.length == 0) { return null; };
    //creat list object with head data
    let list = {
        value: array[0],
        next: null
    };
    let previous = list;
    for(let i = 1; i < array.length; i++) { 
        // create new object and assign it to next propery of the prev object
        previous.next = { 
            value: array[i],
            next: null
        };
        // link previous to the new object
        previous = previous.next;
    };
    return list;
};
console.log(arrayToList([10, 20, 30]));