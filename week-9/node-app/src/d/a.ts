interface User {
    firstName: string|number,
    lastName: string,
    age: number,
    email?: string

}


function isLegal(user: User):boolean{
    return user.age>18;
}


console.log(isLegal({
    firstName: 'sam',
    lastName:"Chand",
    age:22
}));