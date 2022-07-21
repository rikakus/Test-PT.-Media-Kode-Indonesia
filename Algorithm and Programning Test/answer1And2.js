// Answer no.1 = A-C-F-H-L-N

// Answer no.2

const checkPrime = (params) => {
  if (typeof params === "number") {
    const array = [...`${params}`].map(Number);

    const left = () => {
      let left = [...`${params}`].map(Number);

      for (let index = 0; index <= left.length; index++) {
        left.shift();
        let data = Number(left.join(""));
        let divider = 0;
        for (let i = 1; i <= data; i++) {
          if (data % i == 0) {
            divider++;
          }
        }
        if (divider == 2) {
          left = true;
        } else {
          left = false;
        }
      }
      return left;
    };

    const right = () => {
      let right = [...`${params}`].map(Number);

      for (let index = 0; index <= right.length; index++) {
        right.pop();

        let data = Number(right.join(""));
        let divider = 0;
        for (let i = 1; i <= data; i++) {
          if (data % i == 0) {
            divider++;
          }
        }
        if (divider == 2) {
          right = true;
        } else {
          right = false;
        }
      }
      return right;
    };

    if (left() === right()) {
      console.log("both");
    } else if (left()) {
      console.log("left");
    } else if (right()) {
      console.log("right");
    } else {
      console.log("false");
    }
  } else {
    console.log("parameters must be integer");
  }
};

checkPrime("iam");
checkPrime(9137);
checkPrime(7393);
checkPrime(1825711);

