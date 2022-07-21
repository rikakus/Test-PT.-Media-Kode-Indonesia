const getSubset = (params) => {
  let data = [];
  let result = [];
  for (let index = 0; index <= params; index++) {
    data.push(index);
  }
  for (let i = 0; i <= data.length; i++) {
    if (result.length >= 0) {
      let newData = data.map((a) => {
        if (a == data[data.length - 1]) {
          return data.pop();
        } else {
          return a;
        }
      });
      result.unshift(newData);
    }
    if (data.length == 1) {
      result.unshift(data);
    }
  }

  console.log(result);
};

getSubset(3);
