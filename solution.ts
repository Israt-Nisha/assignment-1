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

const printBookDetails = (book: Book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`)
}



const getUniqueValues = <T extends number | string>(arr1: T[], arr2: T[]): T[] => {
    const map: { [key: string]: true } = {};
    const result: T[] = [];

    const pushUnique = (arr: T[]) => {
        for (let i = 0; i < arr.length; i++) {
            const val = arr[i];
            const key = String(val);
            if (!map[key]) {
                map[key] = true;
                result.push(val);
            }
        }
    };

    pushUnique(arr1);
    pushUnique(arr2);

    return result;
}


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (product: Product[]): number => {

    const subtotal = product.reduce((acc, product) => {
        const discountedPrice = product.discount ?  product.price * product.quantity * (1 - product.discount / 100) : product.price * product.quantity;

        return acc + discountedPrice;
    }, 0);

    return subtotal;
}

