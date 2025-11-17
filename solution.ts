const formatValue = <T>(value: T) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    };

    if (typeof value === "number") {
        return value * 10;
    }

    if (typeof value === "boolean") {
        return !value;
    }
}


const getLength = <T>(value: T) => {
    if (typeof value === 'string' || Array.isArray(value)) {
        return value.length;
    }
}


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }

}

type item = {
    title: string;
    rating: number;
}
const filterByRating = (items: item[]): item[] => {
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


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book : Book) : void => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`)
}



const getUniqueValues = <T extends number | string >( arr1: T[], arr2: T[]) : T[]  => {
    

}