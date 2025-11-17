১. 
TypeScript-এ আমরা ডেটার গঠন (shape) ঠিক করতে Interface এবং Type—দুইটাই ব্যবহার করি। কিন্তু দুটির মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

১. Interface সহজে extends করা যায়
interface User {
  name: string;
  age: number;
}


interface Admin extends User {
  role: string;
}

Interface class-এর মতো করে সহজেই parent → child তৈরি করতে পারে।

২. Type এ extends করতে intersection (&) ব্যবহার করতে হয়
type User = {
  name: string;
  age: number;
};


type Admin = User & {
  role: string;
};

এখানে Admin হল User + role এর সমন্বয়।

৩. Interface পুনরায় খোলা (Re-open / Declaration Merging) যায়
interface User {
  name: string;
}


interface User {
  age: number;
}

দুটো interface merge হয়ে চূড়ান্ত User হবে:

{ name: string; age: number }

Type এ কখনো merge হয় না। একই নামে type তৈরি করলে error দেয়।

৪. Type আরও flexible

Type ব্যবহার করে union, tuple, primitive alias ইত্যাদি তৈরি করা যায়—যা interface দিয়ে করা যায় না।


২. keyof এর ব্যবহার (TypeScript)

keyof TypeScript-এর একটি শক্তিশালী keyword, যা কোনো object-এর সব key-কে string literal type হিসেবে বের করে আনে।

উদাহরণ:
interface User {
  id: number;
  name: string;
  email: string;
}


keyof User = "id" | "name" | "email"
type UserKeys = keyof User;

এখন UserKeys টাইপটি শুধু User-এর keys— অর্থাৎ id, name, email—এর মধ্যেই সীমাবদ্ধ।

একটি উদাহরণ:
function getUserProperty(user: User, key: keyof User) {
  return user[key];
}

getUserProperty({ id: 1, name: "Mr.X", email: "mrx@mail.com" }, "name");  বৈধ
getUserProperty({ id: 1, name: "Mr.X", email: "mrx@mail.com" }, "age");   Error

keyof ব্যবহারের ফলে শুধুমাত্র বৈধ key-ই ব্যবহার করা যায়, যা টাইপ সেফটি বাড়ায়।