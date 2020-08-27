class Parent{
    constructor (fatherName){
        this.fatherName='md saiful islam'
    }
}

class Child extends Parent{
    constructor (name){
        super()
        this.name=name;
    }
    fullName(){
        return this.name+" "+this.fatherName;
    }
}
const baby1=new Child('md sohidul islam');
const baby2=new Child('md mahidul islam');
console.log(baby1.fullName());
console.log(baby2.fullName());
///class er vitore ja thake take methods bole