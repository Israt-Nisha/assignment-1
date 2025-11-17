# TypeScript: Interface বনাম Type

TypeScript-এ **interface** এবং **type alias** হলো দুইটি মূল উপায় যা ডেটার স্ট্রাকচার এবং টাইপ সংজ্ঞায়িত করার জন্য ব্যবহার করা হয়। যদিও এরা অনেক ক্ষেত্রে একই রকম কাজ করে, কিন্তু এদের মধ্যে কিছু মৌলিক পার্থক্য রয়েছে। এই ব্লগে আমরা বিস্তারিতভাবে দেখব, কখন কোনটা ব্যবহার করা উচিত এবং পার্থক্যগুলো কী।  

---

## Interface কি?

`interface` হলো একটি অবজেক্ট বা ক্লাসের কাঠামো সংজ্ঞায়িত করার উপায়। এটি মূলত বলে দেয় কোন প্রপার্টি থাকা উচিত এবং তাদের টাইপ কী হবে। 

```ts
interface User {
  name: string;
  age: number;
}

const user: User = { name: "Mr. X", age: 5 };
Interface-এর কিছু গুরুত্বপূর্ণ বৈশিষ্ট্য:

একই নামে একাধিক interface তৈরি করলে তারা মার্জ হয়ে যায়।



interface User {
  name: string;
}

interface User {
  age: number;
}


const user: User = { name: "Mr. X", age: 5 };
একটি interface অন্য interface extends করতে পারে।


interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}
Interface মূলত object বা class structure-এর জন্য ব্যবহৃত হয়।

Type কি?
type alias হলো টাইপের জন্য একটি নতুন নাম। এটি ব্যবহার করে অবজেক্ট, প্রিমিটিভ, ইউনিয়ন, টুপল সব ধরনের টাইপ সংজ্ঞায়িত করা যায়।

type ID = string | number;

type User = {
  name: string;
  age: number;
};
Type-এর কিছু গুরুত্বপূর্ণ বৈশিষ্ট্য:

একাধিক টাইপ এক্সটেন্ড করতে intersection & ব্যবহার করতে হয়।


type Person = { name: string };
type Employee = Person & { employeeId: number };
একই নামে একাধিক type তৈরি করা যায় না।

Type মূলত complex types (যেমন union, tuple, primitive) সংজ্ঞায়িত করতে ব্যবহৃত হয়।

Interface বনাম Type: মূল পার্থক্য
বৈশিষ্ট্য	Interface	Type
সংজ্ঞা	অবজেক্ট বা ক্লাসের কাঠামো	যেকোনো টাইপের সংজ্ঞা
মার্জ	সম্ভব	সম্ভব নয়
এক্সটেনশন	extends	& (intersection)
ব্যবহার	অবজেক্ট, ক্লাস	প্রিমিটিভ, ইউনিয়ন, টুপল, অবজেক্ট

কখন কোনটা ব্যবহার করবেন?
যদি আপনি শুধু অবজেক্ট বা ক্লাসের কাঠামো সংজ্ঞায়িত করতে চান → Interface ব্যবহার করুন।

যদি আপনি complex type, union, tuple, primitive সংজ্ঞায়িত করতে চান → Type ব্যবহার করুন।

বড় প্রোজেক্টে Interface মার্জ সুবিধাজনক।

উপসংহার
TypeScript-এ interface এবং type উভয়ই শক্তিশালী।

Interface: প্রতিক্রিয়াশীল, মার্জ করা যায়, অবজেক্ট বা ক্লাসের জন্য উপযুক্ত।

Type: বেশি versatile, complex type-এ ব্যবহারযোগ্য।

সঠিকভাবে ব্যবহার করলে কোড পরিষ্কার, নিরাপদ এবং maintainable হয়।