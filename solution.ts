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
        return `Name: ${this.name}, Age: ${this.age}`;
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
