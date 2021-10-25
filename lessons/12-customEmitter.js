const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("click", (name, id) => {
  console.log(" The Click event has been emitted with the params ", name, id);
});

customEmitter.on("click", () => {
  console.log(" This is second  Click event has been emitted");
});
customEmitter.emit("click", "jwngma", 6);
