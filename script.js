// search as mozila.org its a developer reference  

function sum(){
    // var number_1 = parseInt(prompt("enter a number"));
    // var number_2 = parseInt(prompt("enter a number"));
    // var display = number_1 + number_2 ;   
    // console.log(display);


    // swapping of two numbers
    var a =prompt("a value is") ;
    var b=prompt("b value is");
    var temp;
    temp=a;
    a=b;
    b=temp;
    console.log(a);
    console.log(b);

    // [a,b]=[b,a]
}

function greater_number(){
    var number_3 = prompt("enter the number_3");
    var number_4 = prompt("enter the number_4");
    if (number_3 > number_4) {
        // eg: if(5>4) true  else false  
        console.log(number_3 + " is greater");
    }
    else{
        console.log(number_4 + " is greater");
    }
}

function ascending_order(){
    var number_5 =[9,5,3,1,15,8,7,11];
    // we also give number_5.sort() but sometimes o/p will be wrong so we add some fn. like a,b return(a-b) were 9-5=4 so it is larger put on right side 5-3=2 its also larger 3-1=2 larger 1-15=-14 it is small so one placed in smaller side and the processs continues
    number_5.sort(function(a,b){return(a-b)});
    console.log(number_5);
}

function ascending_order_for_loop(){
    // number_6=0 and it need to be less than 5 and increment every time 
    for(var number_6=0;number_6<=5;number_6++){
        console.log(number_6);
    }
}

function descending_order_for_loop(){
    // number_7=9 and it will goes till 0 so decrement the number_7
    for (var number_7=9;number_7>=0;number_7--){
        console.log(number_7);
    }
}

function multiples_of_3(){
    // the loop goes and print 1 to 20 but we need only multiples of 3 so if number divide by 3 it is said has multiples of 3
    for (var number_8=1;number_8<=20;number_8++){
        if(number_8%3===0){
            console.log(number_8);
        }
    }
}

function prime_number(){
    // prime number is the that is not divide by other numbers like 4%2 so 4 is not a prime number 2,3,5,7 are only prime numbers in 2 to 10
    //  here we created a for loop to print 1 to 100 numbers but we need only prime numbers so we created another for loop with condition j<i it will goes into the loop or it will get out of the loop and goes to check the if (i==j) condition if it is true it print either i or j 
    // if the for loop of j is true it goes to if condition i%j==0 if it is true it break and increment its for loop j
    /* i=2 and 2<100 this loop is true so it moves to for j=2 and j<2 it is false so it comes out of loop 2==2 true 
    now i increment i=3 3<100 loop  true it goes to j=2 2<3 true so it check 2%3==0 it is false so it break and increment j now j=3 3<3 condition false so it check 3==3 so output as 3*/
    for (var i=2;i<=100;i++){
        for(var j=2;j<=i;j++){
            if(i%j ==0){
                break;
            }
        }
    if(i==j){
        console.log(i);
    }
    }
}

function palindrome(){
    /*var name= "deepika"
    var split = name.split('') -----> as 'd','e','e','p','i','k','a'
    var reverse =name.reverse()------> as 'a','k','i','p','e','e','d'
    var join =reverse.join('')--------->akipeed    
    so we write as name.split('').reverse().join('') */
    var name = prompt("enter a name");
    if(name===name.split('').reverse().join('')){
        console.log(name + " is palindrome");
    }
    else{
        console.log(name+ " is not a palindrome")
    }
}

function celsius_to_fahrenhit(){
    var celsius = parseInt(prompt("enter the degree"));
    var fahrenhit = (celsius*(9/5)) + 32;
    console.log(fahrenhit);
}

function date_time(){
    // it get the date and time from computer
    var today = new Date();
    console.log(today);
}

function fibonacci_series(){
    /*set n1 as 0 n2 as 1
    get a number as 5 in for (i=1;1<5)  condition true now it will print ----->n1  -->0 1 1
    after write the condition as 
    n3=n1+n2 ;   --->n3=0+1 -->n3=1 (1+1)2 
    n1=n2;         -->n1=1 1 
    n2=n3;          -->n2=1 2                                                   */
    var number=parseInt(prompt("enter the number"));
    var n1=0,n2=1,n3;
    console.log('fibonacci series:');
    for (var i=1;i<=number;i++){
        console.log(n1);
        n3= n1 +n2;
        n1=n2;
        n2=n3;
    }
}

function capitalize(){
    var str=prompt("enter the string");
    var str2=str.charAt(0).toUpperCase()+str.slice(1);
    console.log(str2);
}
// explanation
// var str="deepika";
//  var str3=str.slice(1);
// var str2=str.charAt(0).toUpperCase()+str3;
// console.log(str2);

function capitalize_first_letter_ofeach_word(){
    const str = 'i have learned something new today';
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    console.log(str2);
}
/*  str='i have learned something new today'
    arr=str.split('') --->'i','have','learned','something','new','today'
    for(i=0;i<6;i++)    --->i=0 -->'i'
    arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1) 
    for explanation see above program */

function reverse_word_sentence(){
    const str = 'Hello World how is it outside';
    const reverseSentence = str => {
        const arr = str.split(" ");
        const reversed = arr.map(el => {
            return el.split('').reverse().join("");
        });
        return reversed.join(" ");
    };
console.log(reverseSentence(str));
}

function multiples_of_word(){
    const multiples = 'Because i am happy';
    console.log(multiples.repeat(3)); 
}

function email_check(){
    var email=prompt("enter the email address"); 
    var check = /\S+@\S+\.\S+/;
    var build =check.test(email);
    console.log(build);
}

function date_check(){
    
}