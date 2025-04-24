const cats = ["kelly", "ashley", 1, 3, 4, 5, 6, "john", "katy", ["john", "amir", "rez"]];

const largeCat = new Array(1000000).fill(["Kelly"]);

function logFirstBox(array) {
  console.log(array[0]);
}

logFirstBox(cats); // BigO - O(1)

// ////////////

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)
