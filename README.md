TypeScript-এ Interface এবং Type-এর পার্থক্য

TypeScript-এ interface এবং type দুটি ব্যবহার করা হয় অবজেক্ট বা ক্লাসের স্ট্রাকচার ডিফাইন করার জন্য। তবে এদের মধ্যে কিছু পার্থক্য আছে।


Type

নতুন টাইপের নাম দেওয়ার জন্য ব্যবহার করা হয়।

প্রিমিটিভ, ইউনিয়ন, ইন্টারসেকশন এবং টাপল ব্যবহার করা যায়।

একাধিক টাইপকে & (intersection) দিয়ে একত্রিত করা যায়।

একই নামের টাইপ আবার ডিফাইন করা যায় না।

type Person = { name: string; age: number };
type Contact = { email: string };
type PersonWithContact = Person & Contact;

const user: PersonWithContact = {
  name: "Rahat",
  age: 25,
  email: "rahe@example.com"
};
console.log(user);



Interface

অবজেক্ট বা ক্লাসের স্ট্রাকচার নির্ধারণ করতে ব্যবহার হয়।

অন্য ইন্টারফেস এক্সটেন্ড করতে বা ক্লাসে ইমপ্লিমেন্ট করা যায়।

একই নামের ইন্টারফেস একত্রিত করা যায়।

ইউনিয়ন বা টাপলের জন্য ব্যবহার করা যায় না।

interface Person {
  name: string;
  age: number;
}
interface Person {
  email: string;
}

const user: Person = {
  name: "Rahat",
  age: 25,
  email: "rahe@example.com"
};
console.log(user);


TypeScript-এ keyof কীওয়ার্ডের ব্যবহার

keyof হলো TypeScript-এর একটি শক্তিশালী কীওয়ার্ড যা কোনো অবজেক্ট টাইপের সব প্রপার্টির নামকে ইউনিয়ন টাইপ হিসেবে বের করে। এটি সাধারণত টাইপ নিরাপদ ফাংশন, জেনেরিক্স এবং অবজেক্ট প্রপার্টি অ্যাক্সেসের জন্য ব্যবহার করা হয়।

সুবিধা:

অবজেক্টের প্রপার্টি নামগুলোকে টাইপ হিসেবে ব্যবহার করতে দেয়।

প্রপার্টি নাম ভুল টাইপ দিলে কম্পাইল টাইমেই এরর দেখায়।

জেনেরিক্সের সঙ্গে ব্যবহার করলে কোড অনেক বেশি টাইপ-সেফ হয়।
type Car = {
  brand: string;
  year: number;
  isElectric: boolean;
};

type CarKeys = keyof Car;

const key: CarKeys = "year";

function getCarProperty(car: Car, key: CarKeys) {
  return car[key];
}

const myCar: Car = { brand: "Tesla", year: 2023, isElectric: true };
console.log(getCarProperty(myCar, "brand"));
console.log(getCarProperty(myCar, "isElectric"));


