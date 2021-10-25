const { readFile, writeFile } = require("fs").promises;
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    console.log(first);
    const second = await readFile("./content/second.txt", "utf8");
    console.log(second);

    await writeFile(
      "./content/resultText.txt",
      `\n This is awesome: ${first} ${second}`,
      { flag: "a" }
    );
  } catch (error) {
    console.log(error);
  }
};

// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     console.log(first);
//     console.log("First is done , so next is coming");
//     const second = await getText("./content/second.txt");
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

start();
// getText("./content/first.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
