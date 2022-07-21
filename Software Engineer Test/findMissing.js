const missing = (params) => {
  if (Array.isArray(params)) {
    let check = params.find((a) => {
      return typeof a !== "number";
    });

    if (check === undefined) {
      let sort = params.sort();
      let missing = [];
      for (let index = 0; index <= sort[sort.length - 1]; index++) {
        if (sort.indexOf(index) == -1) {
          missing.push(index);
        }
      }
      console.log(missing);
    } else {
      console.log("value in array must be integer");
    }
  } else {
    console.log("parameters must be array");
  }
};
missing([9, 6, 4, 2, 3, 5, 7, 0, 1]);
missing([9, 6, 4, 2, 3, "5", 7, 0, 1]);
