//Quaid johar Mustafa
//saylani Web and Mobile Hybrid Development 
// qj.mustafa786@gmail.com

//chapter 21-25
// //1.
// var firstname = window.prompt("Enter firstname: ");
// var secondname = window.prompt("Enter secondname: ");
// var fullname = firstname + secondname;
// document.write("Hello "+fullname);

//2.
// var input = window.prompt("Enter your favorite mobile model: ");
// var msg ="My favorite phone is: ";
// var len = msg.length + input.length ;
// document.write("My favorite phone is: "+input)
// document.write("<br>length of string: "+len)

//3.
// var Country = "Pakistani"
// document.write("String:"+Country)
// document.write("<br>Index of 'n': "+Country.indexOf('n'))

//4. 
// var word = "Hello World"
// document.write("String:"+word)
// document.write("<br>Index of 'n': "+word.lastIndexOf('l'))

//5.
// var Country = "Pakistani"
// document.write("String:"+Country)
// document.write("<br>Charachter at index 3: "+Country.charAt([3]))

//6.
// var firstname = window.prompt("Enter firstname: ");
// var secondname = window.prompt("Enter secondname: ");
// var fullname = firstname.concat(' ',secondname)
// document.write("Hello: "+fullname);

//7.
// var city = "Hyderabad";
// document.write("City: "+city)
// var afterr = city.replace("Hyder","Islam")
// document.write("<br>After Replacement: "+afterr)


//8.
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message);
// var afterr = message.replace(/and/gi,"&");
// document.write("<br>After Replacement: "+afterr);


//9.
// var num = "472";
// var parsenum = parseInt(num)
// document.write("Value:"+num)
// document.write("<br>Type: String")
// document.write("<br>Value: "+parsenum)
// document.write("<br>Type: number")

//10.
// var input = window.prompt("Enter Value: ")
// var upr = input.toUpperCase();
// document.write("User Input: "+input)
// document.write("<br>Upper Case: "+upr)

//11.
// var input = window.prompt("Enter Value: ")
// var upr = input.to();
// document.write("User Input: "+input)
// document.write("<br>Upper Case: "+upr)


//...................................................................................
//chapter 26-30

// //1.
// var input = window.prompt("Enter a positive integer: ");
// document.write("number: "+input);
// var roundinput = Math.round(input);
// document.write("<br>round off value: "+roundinput);
// document.write("<br>floor value: "+(Math.floor(input)));
// document.write("<br>ceil value: "+(Math.ceil(input)));

//2.
// var input = window.prompt("Enter a positive integer: ");
// document.write("number: "+input);
// var roundinput = Math.round(input);
// document.write("<br>round off value: "+roundinput);
// document.write("<br>floor value: "+(Math.floor(input)));
// document.write("<br>ceil value: "+(Math.ceil(input)));

//3.  
// var input = window.prompt("Enter a integer: ");
// document.write("number: "+input);
// var roundinput = Math.abs(input);
// document.write("<br>Absolute value: "+roundinput);

//4.

// Math.floor( Math.random() * 6 )
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);

//5.

// var coin_value = Math.floor(Math.random() *2) + 1;
// if (coin_value == 1)
// {
//     document.write(coin_value);
//     document.write("<br>"+"Coin Value : Heads");
// }
// else
// {
//     document.write(coin_value);
//     document.write("<br>"+"Coin Value : Tails");
// }


//6.
// Math.floor( Math.random() * 100 )
// var diceRoll = Math.floor( Math.random() * 100 ) +1;
// document.write('Random number between 1 and 100: ' + diceRoll);

//7.
// var input = window.prompt("Enter a your weight: ");
// document.write("The weight of User is: "+input+"killograms");

//8.
// var secret_num = Math.floor(Math.random()*10);
// var guess = prompt("Enter secret number : ");

// if(guess == secret_num)
// {
//     alert("You win ");
// }
// else
// {
//     alert("Try harder in guessing secret number");
// }
// document.write(secret_num);

//..................................................................................

//chapter 31-34
//1.
// var date = Date();
// document.write(date);

//2.
// function show_now(){
//     var my_month=new Date()
    
    
//     var month_name=new Array(12);
//     month_name[0]="January"
//     month_name[1]="February"
//     month_name[2]="March"
//     month_name[3]="April"
//     month_name[4]="May"
//     month_name[5]="June"
//     month_name[6]="July"
//     month_name[7]="August"
//     month_name[8]="September"
//     month_name[9]="October"
//     month_name[10]="November"
//     month_name[11]="December"
    
//     alert ("Current month = " + month_name[my_month.getMonth()]); 
// }

//3.

// var date = new Date();
// var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// var current_day = days[date.getDay()];
// document.write(current_day);

//13.
// var date =  new Date();
// var age = prompt("Enter your age :");
// var birthyear = (date.getFullYear()) - age;
// document.write("Your age is : "+age);
// document.write("<br>"+"Your birth year is : "+birthyear);

//14.
// var num_of_units = 410;
// var charges_per_unit = 16;
// var late_payment = 350;
// var net_amount = num_of_units * charges_per_unit;
// var gross_amount_payable =  net_amount + late_payment;

// document.write("<h1>K-Electric</h1>");
// document.write("<br>"+"Customer Name : <b>XYZ</b>");
// document.write("<br>"+"Month : <b>Ferburary </b>");
// document.write("<br>"+"Number of units : "+num_of_units);
// document.write("<br>"+"Charges per unit : "+charges_per_unit);
// document.write("<br>"+"<br>"+"Net Amount Payable : "+net_amount);
// document.write("<br>"+"Late payment surge : "+late_payment);
// document.write("<br>"+"Gross Amount Payable :"+gross_amount_payable);

//..............................................................................................................


//  Chapter 35-38

//3.

// var add = function()
// {
//     var num1 = prompt("Enter first number : ");
//     var num2 = prompt("Enter second number : ");
//     var result = +num1 + +num2;
//     return result;
// }

// document.write(add());

//4.
// function multiplyBy()
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() 
// { 
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
// document.getElementById("result").innerHTML = num1 / num2;
// }

//7.
// var print_number = function()
// {
//     var start = prompt("Enter starting number : ") ;
//     var end   = prompt("Enter starting number : ");

//     for(var i = start; i <=end ; i++)
//     {
//         document.write(i+"<br>");
//     }
// }

// print_number();
