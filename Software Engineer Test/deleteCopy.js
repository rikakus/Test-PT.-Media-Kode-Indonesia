const deleteDuplicate = (params) => {
  if (Array.isArray(params)) {
    let check = params.find((a) => {
      return typeof a !== "number";
    });

    if (check === undefined) {
      
      let filter = params.sort().filter((a, b, c) => {
        return c.indexOf(a) == b;
      });
      console.log(filter);
    } else {
      console.log("value in array must be integer");
    }
  } else {
    console.log("parameters must be array");
  }
};

deleteDuplicate([1, 4, 2, 3, 5, 3, 2, 4]);
deleteDuplicate([1, "0", 2, 3, 5, 3, 2, 4]);
