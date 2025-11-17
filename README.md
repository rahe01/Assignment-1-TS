ypeScript-এ Interface এবং Type-এর পার্থক্য

TypeScript-এ interface এবং type—দুটিই অবজেক্ট বা ক্লাসের স্ট্রাকচার নির্ধারণ করতে ব্যবহার করা হয়। তবে এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

Type

Type মূলত নতুন টাইপের নাম দেওয়ার জন্য ব্যবহার করা হয়।

ব্যবহার ও বৈশিষ্ট্য

প্রিমিটিভ, ইউনিয়ন, ইন্টারসেকশন এবং টাপল ব্যবহার করা যায়

& ব্যবহার করে একাধিক টাইপ একত্রিত করা যায়

একই নামে আবার টাইপ ডিফাইন করা যায় না


type Person = { 
  name: string; 
  age: number 
};

type Contact = { 
  email: string 
};

type PersonWithContact = Person & Contact;

const user: PersonWithContact = {
  name: "Rahat",
  age: 25,
  email: "rahe@example.com"
};

console.log(user);



Interface মূলত অবজেক্ট বা ক্লাসের স্ট্রাকচার নির্ধারণ করতে ব্যবহৃত হয়।

ব্যবহার ও বৈশিষ্ট্য:

অন্য interface কে extend করা যায়

ক্লাসে implement করা যায়

একই নামের interface একত্রিত (merge) হয়ে যায়

ইউনিয়ন বা টাপল টাইপ তৈরি করা যায় না


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

keyof হলো TypeScript-এর একটি শক্তিশালী কীওয়ার্ড যা কোনো অবজেক্ট টাইপের সব প্রপার্টির নামকে ইউনিয়ন টাইপ হিসেবে রিটার্ন করে।

সুবিধা:

অবজেক্টের প্রপার্টি নাম থেকে টাইপ তৈরি করতে দেয়

ভুল প্রপার্টি নাম দিলে কম্পাইল টাইমে এরর দেখায়

Generic ফাংশন ও টাইপ-সেফ কোড লেখায় সহায়তা করে


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

const myCar: Car = { 
  brand: "Tesla", 
  year: 2023, 
  isElectric: true 
};

console.log(getCarProperty(myCar, "brand"));
console.log(getCarProperty(myCar, "isElectric"));
