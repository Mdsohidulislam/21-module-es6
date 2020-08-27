// function doubleIt(num){ ///function expresion
//     return num*2;
// }or
// const doubleIt=function(num){ ///function declaration
//     return num*2;
// }
const doMath=(m,n)=>{
    const sum=m+n;
    const fact=m*n;
    const total=sum+fact;
    return total;
}
const result3=doMath(3,3);
console.log(result3);

const doubleIt=(m,n=0)=>m+n;
const give5=()=> 5;

const result=doubleIt(33,35);
const result2=give5()
console.log(result2);