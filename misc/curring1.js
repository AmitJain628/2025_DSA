const sum = (...args) => {
    const argsArr = [...args];
    console.log("argsArr 1", argsArr);
    if (argsArr.length === 0) {
        console.log("argsArr 1 is empty");
          
      return 0;
    } else {
        const tempFn = (...args2) => {
            argsArr.push(...args2);
            console.log("argsArr 2", argsArr, args2);
            if (args2.length === 0) {
                return argsArr.reduce((acc, curr) => acc + curr, 0);
            } else {
                return tempFn;
            }
        }

        return tempFn;
    }
}


// console.log(sum(1,2,3,4)());
// console.log(sum(1)(2,3,4)());
// console.log(sum(1)(2)(3,4)());
// console.log(sum(1)(2)(3)(4)());
console.log(sum(1)(2)(3)(4)());