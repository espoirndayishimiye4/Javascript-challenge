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


// we use a callback to get data object
console.log('*********************************************');
console.log('line1');

getData(1,(da)=>{
console.log('data', da)
})

console.log('line3');

function getData(id, callback){
    setTimeout( ()=> {
        console.log('line2 from database...');
        callback({id: id,age:12})
    },3000)
}