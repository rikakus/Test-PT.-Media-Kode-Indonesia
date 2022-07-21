const data = [
  {
    session_id: 1,
    time: "09:00",
    student: {
      student_id: 1,
      name: "Adi",
    },
    class: {
      class_id: 1,
      name: "A",
    },
  },
  {
    session_id: 2,
    time: "10:00",
    student: {
      student_id: 5,
      name: "Surya",
    },
    class: {
      class_id: 3,
      name: "C",
    },
  },
  {
    session_id: 2,
    time: "10:00",
    student: {
      student_id: 8,
      name: "Edi",
    },
    class: {
      class_id: 4,
      name: "D",
    },
  },
  {
    session_id: 2,
    time: "10:00",
    student: {
      student_id: 7,
      name: "Dede",
    },
    class: {
      class_id: 4,
      name: "D",
    },
  },
  {
    session_id: 1,
    time: "09:00",
    student: {
      student_id: 3,
      name: "Bayu",
    },
    class: {
      class_id: 2,
      name: "B",
    },
  },
  {
    session_id: 1,
    time: "09:00",
    student: {
      student_id: 2,
      name: "Budi",
    },
    class: {
      class_id: 1,
      name: "A",
    },
  },
  {
    session_id: 1,
    time: "09:00",
    student: {
      student_id: 4,
      name: "Dharma",
    },
    class: { class_id: 2, name: "B" },
  },
  {
    session_id: 2,
    time: "10:00",
    student: {
      student_id: 3,
      name: "Maha",
    },
    class: {
      class_id: 3,
      name: "C",
    },
  },
];

const format = (params) => {
let data = [];

for (let i = 0; i < params.length; i++) {
  let index = data.findIndex(
    (item) => item.session_id === params[i].session_id
  );

  if (index === -1) {
    data.push({
      session_id: params[i].session_id,
      time: params[i].time,
      classes: [{ ...params[i].class, students: [{ ...params[i].student }] }],
    });
  } else {
    let classIndex = data[index].classes.findIndex(
      (item) => item.class_id === params[i].class.class_id
    );

    if (classIndex === -1) {
      data[index].classes.push({
        ...params[i].class,
        students: [{ ...params[i].student }],
      });
    } else {
      data[index].classes[classIndex].students.push({ ...params[i].student });
    }
  }

  }
    console.log(data);
};

format(data);

