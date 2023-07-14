let guestlist = [ "Marcus Aurelius", "Lucius Annaeus Seneca", "Epictetus ", "Socrates"] ;

for (let i = 0; i < guestlist.length; i++) {
    const guest = guestlist[i];
    console.log( "Dear," + guest + " I want you to come over my place for a dinner."
    )

    
    
};

console.log( "Oh God, Just got to knew, " + guestlist[0] + "cant come beacuse he has exams!!");
// Modified the list
guestlist.splice(0,1,"Dua");
console.log(guestlist);

for (let i = 0; i < guestlist.length; i++) {
    const guest = guestlist[i];
    console.log( "Dear," + guest + " I want you to come over my place for a dinner."
    )

    
    
};
// More people!!

console.log(
    "I have  found a bigger dinner table. So more people are coming"
);
 guestlist.unshift("Fatima");
 //console.log(guestlist);

guestlist.splice(3,0,'Aleezay');

//console.log(guestlist);
guestlist.push("Musa")

// Ts doest have append()

for (let i = 0; i < guestlist.length; i++) {
    const guest = guestlist[i];
    console.log( "Dear," + guest + " I want you to come over my place for a dinner too."
    )
    
    
};

console.log("I am sorry to inform but we have seats for only two people ");
console.log(guestlist);


console.log("Dear, " +  guestlist[6]  + " I am sorry I can't invite you to the dinner."
)
guestlist.pop();

console.log("Dear, " +  guestlist[5]  + " I am sorry I can't invite you to the dinner."
)
guestlist.pop();

console.log(
    "Dear, " + guestlist[4] + " I am sorry I can't invite you to the dinner."
)
guestlist.pop();
console.log(
    "Dear, " + guestlist[3] + " I am sorry I can't invite you to the dinner."
)
guestlist.pop();


console.log(
    "Dear, " + guestlist[2] + " I am sorry I can't invite you to the dinner."
)
guestlist.pop();


console.log(guestlist);

console.log(
    "Dear, " + guestlist[0] + " & " + guestlist[1] + " "+ "you both are stil invited");

guestlist.pop();
guestlist.pop();
console.log(guestlist);
 
//till ex17