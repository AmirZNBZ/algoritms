class CustomArray {
  constructor() {
    this.elements = {}; // نگه‌داری عناصر آرایه
    this.length = 0;    // ذخیره طول آرایه (در حافظه)
  }

  // متد اضافه کردن عنصر به آرایه
  push(value) {
    this.elements[this.length] = value; // اضافه کردن عنصر به موقعیت جدید
    this.length++; // طول آرایه رو افزایش می‌دیم
  }

  // متد حذف کردن آخرین عنصر از آرایه
  pop() {
    if (this.length === 0) return undefined; // آرایه خالی باشه
    const lastItem = this.elements[this.length - 1]; // آخرین عنصر
    delete this.elements[this.length - 1]; // حذفش از حافظه
    this.length--; // کم کردن طول آرایه
    return lastItem; // بازگشت مقدار حذف‌شده
  }

  // متد برای نمایش عناصر
  showElements() {
    console.log(this.elements);
  }
}

// استفاده از کلاس
const myArray = new CustomArray();

myArray.push(10); // اضافه کردن 10
myArray.push(20); // اضافه کردن 20
myArray.push(30); // اضافه کردن 30

console.log(myArray.length); // خروجی: 3
myArray.showElements(); // نمایش عناصر: { '0': 10, '1': 20, '2': 30 }

myArray.pop(); // حذف آخرین عنصر (30)
console.log(myArray.length); // خروجی: 2
myArray.showElements(); // نمایش عناصر: { '0': 10, '1': 20 }
