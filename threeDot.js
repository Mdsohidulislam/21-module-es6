const age=[12,13,16,15];
const age1=[22,31,18,19];
const age2=[21,32,33,38];
const allAge=age.concat(age1).concat([3]).concat(age2);
const allAge2=[...age,6,...age1,...age2]
console.log(allAge2);
const business=333;
const sochib=354;
const meyor=434;
const max=Math.max(business,sochib,meyor);
console.log(max);
const takaPoisa=[334,24,2,23,42,2342,52];
const maxx=Math.max(...takaPoisa);
console.log(maxx);
