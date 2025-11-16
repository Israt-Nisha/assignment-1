const formatValue = <T> (value: T) => {
    if(typeof value === 'string'){
        return value.toUpperCase();
    };

    if(typeof value === "number"){
        return value*10;
    }

    if(typeof value === "boolean"){
        return !value;
    }
}


const getLength = <T> (value: T) => {
    if(typeof value === 'string' || Array.isArray(value)){
        return value.length;
    }
}


class Person {
    name: string;
    age: number;

    constructor(name:string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`
    }

}

type item ={
    title: string;
    rating: number;
}
const filterByRating = (items: item[]): item[]=>{
    return items.filter(item => item.rating >= 4);
} 


type user = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: user[]): user[] => {
    return users.filter(user => user.isActive === true);
}
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));