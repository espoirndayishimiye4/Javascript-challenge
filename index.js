
const customer = {
    id:5463784, 
    firstName: 'Andrew',
    lastName:'Shalom',
    age: 20,
    accountBalance: 0 
  } 
  
  const accounts = []

  const loanApplications = []

  const loanApplication = (id, amount) =>{
    for (let i = 0; i < accounts.length; i++){
        if (accounts[i].id === id){
            const newLoanApplication = {
                id, 
                amount
              }
            loanApplications.push(newLoanApplication)
        }
      }
  }
  
  function createAccount (id, firstName, lastName, age, accountBalance=0) {
    const newAccount = {
      id, 
      firstName,
      lastName,
      age,
      accountBalance
    }
      accounts.push(newAccount)
  }
  
  function depositMoney (id, amount) {
    for (let i = 0; i < accounts.length; i++){
      if (accounts[i].id === id){
        accounts[i].accountBalance  = accounts[i].accountBalance + amount 
        return accounts[i].accountBalance
      }
    }
    
  } 
  
  function checkBalance(id){
    for (let i=0; i <accounts.length;i++){
      if(accounts[i].id === id){
        return accounts[i].accountBalance
      }
    }
  }
  
  function withdraw(id,amount){
    for(let i=0;i<accounts.length;i++){
      if(accounts[i].id === id){
        accounts[i].accountBalance = accounts[i].accountBalance - amount
        return accounts[i].accountBalance
      }
    }
  }
  function updateAccountAge(id,newAge){
    for(let i=0;i<accounts.length;i++){
      if(accounts[i].id ==id){
        accounts[i].age =newAge
      }
    }
  }
  createAccount(5463384, 'Andrew', 'Shalom', 20)
  
  
  // Edgar Mutangana Contribution Starts Here
  // Feature to add:
  /*
  transfer function:
  i. get id of object one: get money from
  ii. get id of object two: send money to
  iii. amount
  */
  const transfer = (fromAccount, toAccount, amount) => {
    for(let fAccount of accounts) {
      console.log(fAccount);
      if(fAccount['id'] == fromAccount) {
        if(fAccount['accountBalance']<amount) {
          console.log("amount insufficient to complete the transfer");
          return;
        }
        for(let tAccount of accounts) {
          if(tAccount['id'] == toAccount) {
            fAccount['id'] -= amount;
            tAccount['id'] += amount;
          }
        }
      }
    }
  }
  
  
  createAccount(5463284, 'Andrew2', 'Shalom', 20)
  createAccount(5463184, 'Andrew3', 'Shalom', 20)
  createAccount(5463684, 'Andrew4', 'Shalom', 20)
  transfer(5463284,5463184,5000);
  // Edgar Mutangana Contribution Ends Here
  
  
  
  //Andrew Kwizera's contribution starts from here
  //Features to add
  /*
  -Foreign exchange function to Rwandan Francs
  */
  function foreignExchengeToRwf(currency,broughtAmount){
      let givenAmount;
      switch(currency){
          case 'US_Dollars':
               givenAmount= broughtAmount*1000;
          break;
          case 'Kenyan_Shillings':
               givenAmount= broughtAmount*7.5;
          break;
          case 'Ugandan_Shillings':
               givenAmount= broughtAmount*0.25;
          break;
          case 'Tanzanian_Shillings':
               givenAmount= broughtAmount*0.20;
          break;
          case 'Burundian_Francs':
               givenAmount= broughtAmount*0.15;
          break;
          default:
              console.log("No currency found");
      }
      return givenAmount;
  
  }
  console.log("You will receive Rwf = ",foreignExchengeToRwf('US_Dollars',100));
  
  //Andrew's Contribution ends here




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




// const employees ={
//     id:1,
//     name:'Andrew',
//     type:'teller'
// }
// const customers ={
//     id:1,
//     name:'Grace',
//     account:123,
//     balance:2000
// }

// const debit = (amount)=>{
//     return customers.balance + amount;
// }
// const credit = (amount)=>{
//     return this.customers.balance - amount;
// }
// switch(employees.type){
//     case 'Manager':{
//         console.log(`Welcome to Manager's partal add a teller or view customers and transactions`)
//         employees.push({
//             id:4,
//             name:'Edgar',
//             type:'Teller'
//         })
//         console.log(employees)
//         console.log(customers)
//         break;
//     }
//     case 'Teller':{
//         console.log(`Welcome to Teller's portal you can perform transactions or add a customer`)
//         customers.pop()
//         customers.push(  {
//             id:3,
//             name:'Benjamin',
//             account:debit(1000)
//         })
//         console.log(customers)
        
//         break;
//     }
//     default:
//         console.log(`Welcome to Costomer care portal`)
       
// }




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

