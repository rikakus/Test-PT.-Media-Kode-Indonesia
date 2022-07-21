const data = [
  {
    session_name: "first test",
    classes: [
      {
        class_name: undefined,
        students: [
          {
            student_name: undefined,
          },
        ],
      },
    ],
  },
  {
    session_name: null,
    classes: [
      {
        class_name: "second class",
        students: [
          {
            student_name: "Doe",
          },
        ],
      },
    ],
  },
];

const filtered = (params) => {
  for (let index = 0; index < params.length; index++) {
    if (!params[index].session_name) {
      delete params[index].session_name;
    }

    for (let i = 0; i < params[index].classes.length; i++) {
      if (!params[index].classes[i].class_name) {
        delete params[index].classes[i].class_name;
      }

      for (let a = 0; a < params[index].classes[i].students.length; a++) {
        if (!params[index].classes[i].students[a].student_name) {
          delete params[index].classes[i].students[a].student_name;
        }
      }
    }
  }
  console.log(params);
};

filtered(data);
