require("../src/db/mongoose");
const Task = require("../src/models/task");


// Task.findByIdAndDelete("5eb437e55ba9d478e6f382c5")
//   .then(() => {
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   })

  const deleteTaskAndCount = async (id, completed) => {
      const task = await Task.findByIdAndDelete(id)
      const count = await Task.countDocuments({ completed: false })
      return count
  }

  deleteTaskAndCount("5eb438eb0a48397d2c3ad38e")
    .then((count) => {
      console.log(count);
    })
    .catch((e) => {
      console.log(e);
    });