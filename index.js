const employees = [
    {
        id:1,
        name:'Andrew',
        type:'Manager'
    },
    {
        id:2,
        name:'Serge',
        type:'Teller'
    },
    {
        id:3,
        name:'Christale',
        type:'Customer-care'
    },

]
const customers = [
    {
        id:1,
        name:'Claude',
        account:123,
        balance:2000
    },
    {
        id:2,
        name:'Grace',
        account:321,
        balance:2500
    },
    {
        id:3,
        name:'Benjamin',
        account:213,
        balance:2200
    },

]
const debit = (amount)=>{
    return customers.balance + amount;
}
const credit = (amount)=>{
    return this.customers.balance - amount;
}
switch(employees.type){
    case 'Manager':{
        console.log(`Welcome to Manager's partal add a teller or view customers and transactions`)
        employees.push({
            id:4,
            name:'Edgar',
            type:'Teller'
        })
        console.log(employees)
        console.log(customers)
        break;
    }
    case 'Teller':{
        console.log(`Welcome to Teller's portal you can perform transactions or add a customer`)
        customers.pop()
        customers.push(  {
            id:3,
            name:'Benjamin',
            account:debit(1000)
        })
        console.log(customers)
        
        break;
    }
    default:
        console.log(`Welcome to Costomer care portal`)
       
}









// const person = {
//     name: 'kagesha',
//     ageOfBirth: 2000,
//     gender: 'male',
//     address: 'KN 160',
//     hobbies: ['football', 'music', 'traveling'],
//     graduate: true
// }

// const age = () =>{
//     return 2022 - person.ageOfBirth
// }

// switch(person.gender){
//     case 'male':{
//         console.log(`Hello Mr ${person.name}`)
//         break;
//     }
//     case 'female':{
//         console.log(`Hello Mrs ${person.name}`)
//         break;
//     }
//     default:
//         console.log(`Hello ${person.name}`)
// }

// person.graduate ? console.log('You are a graduate') : console.log('you are not yet graduated')

// console.log('your hobbies was:' + person.hobbies.sort())
// console.log('but now you hobbies are:')
// person.hobbies.pop()
// person.hobbies.push('dancing')


// for(let i =0; i < person.hobbies.length;i++){
//     console.log(person.hobbies[i])
// }
// console.log(`you are ${age()} years old, your address is ${person.address}`)

