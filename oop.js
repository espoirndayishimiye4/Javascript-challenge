class Citizen{
    constructor(id,name,gender,address){
        this.id = id
        this.name = name
        this.gender = gender
        this.address = address
     }

}

class Student extends Citizen{
  constructor(school,fees,grade){
    
    this.school = school
    this.fees = fees
    this.grade = grade
    super(id,name,gender,address)
  }
}

let s = new Student(1,'Espoir','male','kigali','solvit',10000,1)

console.log(s)