//simpe synchronous program 
console.log('before') //in blocking(synchronous) code run code in sequence one after another  
console.log('after')  //this second line, run after the first line

console.log('***************************************')
// Asynchronous program
console.log('first name and second name') //non-blocking(asynchronous) code this line will run
setTimeout(() => {
    console.log('data from database ...') //data from database will delay 3 seconds but don't block line 11 to run
}, 3000);
console.log('date'); // date will be displayed before data from database...

console.log('*********************************************')

// more about asynchronous. output for line 18 is undefined because getData is not yet ready at the moment
console.log('line1');

console.log(getData(1))

console.log('line3');

function getData(id){
    setTimeout(()=>{
        console.log('line2 from database...');
        return {id: id,age:12}
    },3000)
}

console.log('****************************')
// we use a callback to get data object
console.log('before');

getUser(1, (user)=>{
    console.log('user',user)
    getRepository(user.name,(repos)=>{
        console.log('repos',repos);
    })
})

console.log('after');

function getUser(id, callback){
    setTimeout(()=>{
        console.log('reading a user from database...');
        callback({id: id,name:'Espoir'})
       
    },3000)
}
function getRepository(username,callback){
    setTimeout(() => {
        callback(['repo1','repo2','repo3'])
    }, 3000);
    
    
}
console.log('*****************************');





console.log('****************************')
// overcome callback hell
console.log('before');

getUser(1,users)

console.log('after');

function repo(repos){
    console.log('repos',repos);
}
function users(user){
    console.log('user',user)
    getRepository(user.name,repo)
}

function getUser(id, callback){
    setTimeout(()=>{
        console.log('reading a user from database...');
        callback({id: id,name:'Espoir'})
       
    },3000)
}
function getRepository(username,callback){
    setTimeout(() => {
        callback(['repo1','repo2','repo3'])
    }, 3000);
    
    
}
console.log('*****************************');





// replace callback with promises 
console.log('before');

getUser(1, (user)=>{
    console.log('user',user)
    getRepository(user.name,(repos)=>{
        console.log('repos',repos);
    })
})

const p = getUser(1)
p.then(user => console.log(user))

console.log('after');

function getUser(id){
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('reading a user from database...');
            resolve({id: id,name:'Espoir'})
           
        },3000)
    })
    
}
function getRepository(username){
    new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(['repo1','repo2','repo3'])
        }, 3000)
    })
    
    
    
}


