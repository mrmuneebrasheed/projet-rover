// Initializing the variables
let prompt = require("prompt");
prompt.start();

let grid = [],
  anyError = false,
  temp = [],
  history = [],
  rover = { direction: "N", x: 0, y: 0 };

// Setting up Grid
for (let i = 0; i < 10; i++) {
  temp = [];
  for (let j = 0; j < 10; j++) {
    temp.push(" ");
  }
  grid.push(temp);
}

// Defining direction Functions

let turnLeft = (rover) => {
  switch (rover.direction) {
    case "N": {
      rover.direction = "W";
      break;
    }
    case "W": {
      rover.direction = "S";
      break;
    }
    case "S": {
      rover.direction = "E";
      break;
    }
    case "E": {
      rover.direction = "N";
      break;
    }
  }
};
let turnRight = (rover) => {
  switch (rover.direction) {
    case "N": {
      rover.direction = "E";
      break;
    }
    case "E": {
      rover.direction = "S";
      break;
    }
    case "S": {
      rover.direction = "W";
      break;
    }
    case "W": {
      rover.direction = "N";
      break;
    }
  }
};
// Defining movements Functions
let moveForward = (rover) => {
  history.push([rover.x, rover.y]);
  grid[rover.y][rover.x] = " ";
  if (rover.direction === "N") {
    if (rover.y === 0) {
      {
        return console.log("The rover is already at the edge");
      }
    }
    rover.y -= 1;
  }
  if (rover.direction == "S") {
    if (rover.y == 9) {
      return console.log("The rover is already at the edge");
    }
    rover.y += 1;
  }
  if (rover.direction == "E") {
    if (rover.x == 9) {
      return console.log("The rover is already at the edge");
    }
    rover.x += 1;
  }
  if (rover.direction == "W") {
    if (rover.x == 0) {
      return console.log("The rover is already at the edge");
    }
    rover.x -= 1;
  }
};
let moveBackward = (rover) => {
  history.push([rover.x, rover.y]);
  grid[rover.y][rover.x] = " ";
  if (rover.direction == "N") {
    if (rover.y === grid.length - 1) {
      return console.log("The rover is already at the edge");
    }
    rover.y += 1;
  }
  if (rover.direction == "S") {
    if (rover.y === 0) {
      return console.log("The rover is already at the edge");
    }
    rover.y -= 1;
  }
  if (rover.direction == "E") {
    if (rover.x === 0) {
      return console.log("The rover is already at the edge");
    }
    rover.x -= 1;
  }
  if (rover.direction == "W") {
    if (rover.x === rid.length - 1) {
      return console.log("The rover is already at the edge");
    }
    rover.x += 1;
  }
};

// Pilot Function
function pilotRover(string, rover) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "l") turnLeft(rover);
    else if (string[i] == "r") turnRight(rover);
    else if (string[i] == "f") moveForward(rover);
    else if (string[i] == "b") moveBackward(rover);
    else {
      return console.log("Error, Command not Valid");
    }
  }
  grid[rover.y][rover.x] = rover.direction;
  console.table(grid);
  // for (let i = 0; i < grid.length; i++) {
  //   for (let j = 0; j < grid.length; j++) {
  //     console.log(`| ${grid[j][i]} |`);
  //   }
  // }
}

// Input Commands
grid[rover.y][rover.x] = rover.direction;
console.table(grid);
prompt.get("commands", function (err, res) {
  if (err) console.log(err);
  pilotRover(res.commands, rover);
});
