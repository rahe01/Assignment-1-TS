const formatValue = (
  param: string | number | boolean
): string | number | boolean => {
  if (typeof param === "string") {
    return param.toUpperCase();
  }
  if (typeof param === "number") {
    return param * 10;
  }
  if (typeof param === "boolean") {
    return !param;
  }
  return param;
};





const getLength = (param: string | any[]): number => {

    if (typeof param === 'string') {
        return param.length;
    }
    else if (Array.isArray(param)) {
        return param.length;
    }
    return 0;
};





class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}



type Item = {
    title: string;
    rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
    return items.filter(item => item.rating >= 4);
};



type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive === true);
};



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
    const availablity = book.isAvailable ? "Yes" : "No";

    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availablity}`
    );
};


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number; 
};

const calculateTotalPrice = (products: Product[]): number => {
    if (products.length === 0) return 0;

    return products
        .map(product => {
            
            let total = product.price * product.quantity;

            
            if (product.discount !== undefined) {
                total = total - (total * (product.discount / 100));
            }

            return total;
        })
        .reduce((sum, value) => sum + value, 0); 
};

