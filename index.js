const person = {
    name: 'kagesha',
    ageOfBirth: 2000,
    gender: 'male',
    address: 'KN 160',
    hobbies: ['football', 'music', 'traveling'],
    graduate: true
}

const age = () =>{
    return 2022 - person.ageOfBirth
}

switch(person.gender){
    case 'male':{
        console.log(`Hello Mr ${person.name}`)
        break;
    }
    case 'female':{
        console.log(`Hello Mrs ${person.name}`)
    }
    default:
        console.log(`Hello ${person.name}`)
}

person.graduate ? console.log('You are a graduate') : console.log('you are not yet graduated')

console.log('your hobbies was:' + person.hobbies.sort())
console.log('but now you hobbies are:')
person.hobbies.pop()
person.hobbies.push('dancing')


for(let i =0; i < person.hobbies.length;i++){
    console.log(person.hobbies[i])
}
console.log(`you are ${age()} years old, your address is ${person.address}`)

