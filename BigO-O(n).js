const cats = ["kelly", "ashley", 1, 3, 4, 5, 6, "john", "katy", ["john", "amir", "rez"]];

const largeCat = new Array(1000000).fill(["Kelly"]);

function findKelly(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "kelly") {
      console.log("Found kelly!");
    }
  }
  let t1 = performance.now();
  console.log("call to find Kelly took " + (t1 - t0) + " milliseconds");
}

findKelly(cats); // O(n)

let i = 0;
while (i < cats.length) {
  if (cats[i] === "kelly") {
    console.log("Found kelly! With While");
  }
  i++;
}

const findKelly2 = (array) => {
  array.forEach((kelly) => {
    if (kelly === "kelly") {
      console.log("Found kelly!");
    }
  });
};

const findKelly3 = (array) => {
  for (let kelly of array) {
    if (kelly === "kelly") {
      console.log("Found kelly!");
    }
  }
};

findKelly2(cats);
findKelly3(cats);
