function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boo");
  }
}

boo([1, 2, 3, 4, 5]); // O(1)
// در پیچدگی زمانی ما اهمیتی به ورودی نمیدهیم و برای ما این مهم است که در داخل فانکشن ایا به حافظه چیزی اضافه میکنیم یا نه

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

console.log(arrayOfHiNTimes(6)); // O(n)
// زمانی که ما در فانکشن یک متغیر یا ارایه اضافه میکنیم به این معنا است که داریم فضا اشغال میکنیم و این باعث میشود پیچیدگی زمانی آن بالا برود
