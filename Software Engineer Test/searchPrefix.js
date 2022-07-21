const getPrefix = (params) => {
  if (Array.isArray(params)) {
    let check = params.find((a) => {
      return typeof a !== "string";
    });

    if (check === undefined) {
      let size = params.length;
      params.sort();
      let length = params[0].length;
      let result = [];
      for (let i = 0; i < length; i++) {
        if (params[0].charAt(i) == params[size - 1].charAt(i)) {
          result.push(params[0].charAt(i));
        }
      }
      console.log(result.join());
    } else {
      console.log("value in array must be string");
    }
  } else {
    console.log("parameters must be array");
  }
};

getPrefix(["flower", "flow", "flowght"]);
getPrefix(["flower", 2, "flowght"]);
