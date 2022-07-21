const free = (prisoners, exe) => {
  if (typeof prisoners === "number" && typeof exe === "number") {
    let data = [];
    for (let index = 0; index < prisoners; index++) {
      data += index;
    }
    const total = data.split("");
    console.log(`${total}`);

    let execute = exe - 1;

    let newData = total;

    const deleted = (params) => {
      let getExe = params;

      if (params.length - 1 >= 0) {
        let data = getExe.filter((a) => {
          if (a !== "-") {
            return a;
          }
        });
        newData = data;

        return data;
      }
    };

    const executed = (params) => {
      const getExe = params;
      for (let index = 0; index < getExe.length; index++) {
        if (index == execute) {
          getExe.splice(execute, 1, "-");

          execute += exe;
        }
      }
      execute = execute - newData.length;
      const del = deleted(getExe);
      console.log(`${getExe} -> ${del}`);
      return;
    };

    for (let index = newData.length; index > 0; index--) {
      if (newData.length > 1) {
        executed(newData);
      }
    }
  } else {
    console.log("parameters must be integer");
  }
};

free(9, "2");
free("9", 2);
free(9, 2);
