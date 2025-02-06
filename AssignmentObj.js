studentobj={
    name:'vaidehi',
    age:22,
    grade:'A',
   }
console.log(studentobj);


studentobj.subject="Math"
console.log(studentobj);   

studentobj.grade='A+';
console.log(studentobj['grade']);
console.log(studentobj);

delete studentobj.age;
console.log(studentobj);

//Nested Object
bookobj={
    title:'pqr',
    author:'xyz',
    details:{
        pages:45,
        genre:'zyz'
  },
   }
console.log(bookobj);
console.log(bookobj.details.pages);
console.log(bookobj.details.genre);

//loop 
productobj={
    name:'lmn',
    price:22,
    stock:'A',
   }
console.log(productobj);

for(let key in productobj){
    console.log(key);
    console.log(productobj[key])
}

//compare 2 object
person1obj={
    name:'vaidehi',
    age:22,
   }
console.log(person1obj);
person2obj={
    name:'abcd',
    age:22,
   }
console.log(person2obj);
if(person1obj.name===person2obj.age){
    consol.log("same")
}else{
    console.log("diff")
}