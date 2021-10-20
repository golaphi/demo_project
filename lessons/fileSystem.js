const fs = require("fs");

// write File
// fs.writeFile("fs.txt", "This is just for demo", (error) => {
//   if (error) {
//     console.log(" There is an error while writing the file system");
//   } else {
//     console.log("The New file has been wrote successfully");
//     fs.readFile("fs.txt", "utf8", (error, file) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(file);
//       }
//     });
//   }
// });

// remove file
// fs.unlink("fs.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("The File system is deleted");
//   }
// });

// create new directory

fs.mkdir("tutorial", (error) => {
  if (error) {
  } else {
    fs.writeFile(
      "./tutorial/new.txt",
      "Hello this is demo to create folder and write new file wit text and read it",
      (error) => {
        if (error) {
          console.log(error);
        } else {
          fs.readFile("./tutorial/new.txt", "utf-8", (error, file) => {
            if (error) {
              console.log(error);
            } else {
              console.log(file);
            }
          });
        }
      }
    );
  }
});
