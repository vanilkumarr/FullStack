var First= prompt("Enter your First Name");
var Last=prompt("enter your last name");
var age=prompt("enter your last age");
var height=prompt("Enter your current Height");
var Pet=prompt("enter your pet name");
age = parseInt(age);
height=parseInt(height);

if (First[0]=== Last[0] && age>=20 && age <= 30 && height >= 170 && Pet[Pet.length-1]==="y"){
    console.log("You have passede SPY Test");
}
else{
    console.log("you have failed");

}