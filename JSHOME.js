// console.log("Hello World!");

// ---------------Values & Variables--------------- 

// var _myName = "milan";
// var _1my__name = "charan";
// var $myName  = "Milan Charan";

// ---------------Data Types---------------

// undefined
// boolean
// number
// string
// bigint
// symbol

// var myName = "Milan Charan";
// console.log(typeof(myName));
// var myTrial = true;
// console.log(typeof(myTrial));

// console.log(10 + "20");
// // ------Bug 1------
// console.log(9 - "5");
// console.log("Java" + "Script");
// console.log(" " + " ");
// console.log(" " + 0);
// console.log("Milan" + "Charan");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);

// -------------Interview Question 1--------------
// Difference between null and undefined ?

// var iAmUseless = null;
// console.log(iAmUseless);
// // -------Bug 2-------
// console.log(typeof(iAmUseless)); 
// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));

// -------------Interview Question 2--------------
// What is NaN ?

// NaN is a property of the global Object.
// It is a vriable in global scope.
// The initial value of NaN is Not-A-Number.

// var myNumber = "Milan Charan";
// var myName = "Milan Charan";

// console.log(isNaN(myNumber));
// console.log(isNaN(myName));

// if(isNaN(myNumber)){
//             console.log("please enter valid phone no");
// }

// -------------Challange------------

// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(Number.NaN);
// console.log(Number.isNaN(NaN));
// // ----------Bug 3---------
// console.log(typeof(NaN)); 

// --------------Expressions & Operators--------------

// console.log(5 + 20)
// var x = 5;
// var y = 5;
// // --------------Bug 4--------------
// console.log("is both the x and y are equal or not" + (x) ==(y));
// console.log(x == y);

// // -----------ES6----------
// console.log(`Is both the x and y are equal : ${x == y}`);

// console.log(3 + 3);
// console.log(10 - 5);
// console.log(20 / 5);
// console.log(5 * 6);
// console.log(27 % 4);

// var num = 15;
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);

// var a = 30;
// var b = 10;
// console.log(a == b);
// console.log(a != b);
// console.log(a > b);
// console.log(a >= b);
// console.log(a < b);
// console.log(a <= b);

// var a = 30;
// var b = -10;
// console.log(a > b);
// console.log(a > b || b > 0 && b < 0);
// console.log(a > b || b > 0 || b < 0);
// console.log(!true);

// var myName = "Milan" + " Charan"
// console.log(myName);

// -------------Challange------------
// console.log(3**3);

// console.log(5 + "Milan");

// // ------Swap------
// var a = 5;
// var b = 10;
// console.log(a,b);
// var c = b;
// b = a;
// a = c;
// console.log(a,b);

// // ------Swap without thirt var------
// var a = 5;
// var b = 10;
// console.log(a,b);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a,b);

// ----------Interview Question----------

// var num1 = 5;
// var num2 = "5";
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1 == num2);
// console.log(num1 === num2);

// -----------Control Stats & Loops-----------

// var tomr = "weather";
// if(tomr == 'rain'){
//             console.log('To have a raincoat is mandatory');
// }else if(tomr == 'sunny'){
//             console.log('No need of raincoat');
// }else{
//             console.log("It's all about your choice");
// }

// ------------Challange------------

// var a = 2020;
// if(a % 4 === 0){
//             if(a % 100 === 0){
//                         if(a % 400 === 0){  
//                                     console.log('The year '+ a + ' is a leap year');
//                         }else{
//                                     console.log('This is a non leap year');
//                         }
//             }else{
//                         console.log('The year '+ a + ' is a leap year');
//             }
// }else{
//             console.log('this is a non leap year');  
// }

// -----------Falsy Values-----------

// 0, "", undefined, null, NaN, false

// -----------Conditional Ternary Operator-----------

// var age = 19;
// console.log((age >= 18)?'you can vote':'you can\'t vote');

// ------------Switch Stats-----------

// var area = "square";
// var PI = 3.142, l = 5, b = 4, r = 3;
// if(area == "circle"){
//             console.log("the area of the circle is :" + PI*r**2);
// }else if(area == "triangle"){
//             console.log("the area of the circle is :" + (l*b)/2);
// }else if(area == "rectangle"){
//             console.log("the area of the circle is :" + (l*b));
// }else{
//             console.log("please enter valid data");
// }

// var area = "circle";
// var PI = 3.142, l = 5, b = 4, r = 3;
// switch(area){
//             case 'circle':
//                         console.log("the area of the circle is : " + PI*r**2);
//                         break
//             case 'triangle':
//                         console.log("the area of the triangle is : " + (l*b)/2);
//                         break
//             case 'rectangle':
//                         console.log("the area of the rectangle is : " + (l*b)/2);
//                         break
//             default:
//                         console.log("please enter valid data");

// }

// ------------While Loop------------

// var num = 0;
// // -------Block Scope------
// while(num<= 10){   
//             console.log(num);
//             num++;
// }

// -------------Do While Loop------------

// var num = 0;
// do{   
//             debugger;
//             console.log(num);
//             num++;
// }while(num<= 10)

// -------------For Loop-------------

// for(var num = 0; num <= 10; num++){
//             console.log(num);
// }

// --------------Challange--------------

// for(var i = 1, n = 8; i <= 10; i++){
//             console.log("8 * " + i + " = " +  n*i);
// }

// ------------Functions------------

// function sum(a, b){
//             console.log(a+b);
// }
// sum();
// sum(20, 19)

// ------------Interview Questions-------------

// Why functions ?

// --------------Function Expression-----------

// function sum(a, b){
//             console.log(a+b);
// }
// var funExp = sum(20, 19)

// ------------Return Keyword-----------

// function sum(a, b){
//             return total = a+b
// }
// var funExp = sum(5,15);
// console.log(funExp);

// ------------Anonymous Function & Exp-----------

// var funExp = function(a, b){
//             return total = a + b
// }
// var sum = funExp(5,35)
// console.log(sum);
// console.log(funExp(5,35));

// ---------------ES-6-------------

// --------let & const--------

// function biodata(){
//             var myFirstName = 'Milan';
//             console.log(myFirstName);
//             if(true){
//                      var myLastName = 'Charan';
//                      console.log('inner ' + myLastName);   
//                      console.log('inner ' + myFirstName);   
//             }
//             console.log('innerouter ' + myLastName);
// }
// biodata();

// function biodata(){
//             let myFirstName = 'Milan';
//             console.log(myFirstName);
//             if(true){
//                      let myLastName = 'Charan';
//                      console.log('inner ' + myLastName);   
//                      console.log('inner ' + myFirstName);   
//             }
//             console.log('innerouter ' + myLastName);
// }
// biodata();

// function biodata(){
//             const myFirstName = 'Milan';
//             console.log(myFirstName);
//             if(true){
//                      const myLastName = 'Charan';
//                      console.log('inner ' + myLastName);   
//                      console.log('inner ' + myFirstName);   
//             }
//             console.log('innerouter ' + myLastName);
// }
// console.log(myFisrtName);
// biodata();

// ------------Template literals (Temp Strings)----------

// for (let num = 1; num <= 10; num++){
//             let tableOf = 12;
//             // console.log(tableOf + " * " + num + " = " + tableOf * num);
//             console.log(`${tableOf} * ${num} = ${tableOf * num }`);
// }

// -----------Default Params----------

// function mult(a, b=5){
//             return a*b
// }
// console.log(mult(5));

// ---------------Fat Arrow Function---------------

// console.log(sum());
// function sum(){
//             let a = 5, b = 6;
//             let sum = a+b;
//             return `the sum of the two numbers is ${sum}`;
// }

// const sum = () => {
//             let a = 5, b = 6;
//             let sum = a+b;
//             return `the sum of the two numbers is ${sum}`;
// }
// console.log(sum());

// const sum = () => `this sum of the two numbers is ${(a=5)+(b=6)}`;
// console.log(sum());

// -----------------Array-------------------

// -------------TRAVERSAL OF AN ARRAY---------------

// var myFriends = new Array;
// myFriends = ["A","B","C","D"]
// console.log(myFriends[2]);
// console.log(myFriends[myFriends.length - 1]);

// -----------------for in & for of------------------

// var myFriends = ['A','B','C','D']

// for(var i = 0; i<myFriends.length; i++){
//             console.log(myFriends[i]);
// }

// ----for in loop returns index number of the elems----

// for(let elements in myFriends){
            //             console.log(elements);
            // }
            
// ----for of loop returns elems of the array----

// for(let elements of myFriends){
//             console.log(elements);
// }

// ------------using forEach function traditionally-------------
// -------break keyword cann't be used in forEach function-------

// myFriends.forEach(function(element, index, array){
//             console.log(`${element} : ${index} [${array}]`);
// });

// -------------using fat arrow function--------------
// -------this keyword cann't be used in fat arrow function------

// myFriends.forEach((element, index, array) => {
//             console.log(element + " index : " + index + " " + array);
// });

// ---------------SEARCHING & FILTER IN AN ARRAY-----------------

// ------------indexOf() method-------------
// ------------if none is found then it will return -1--------------
// -----------Case Sensitive & search forwards------------

// var myFriends = ["A","B","C","D","E","F","C"];
// console.log(myFriends.indexOf('D', 2));

// -------------lastIndexOf()--------------
// ------------Search Backwards-------------

// var myFriends = ["A","B","C","D","E","F","C"];
// console.log(myFriends.lastIndexOf("C"));
// console.log(myFriends.lastIndexOf("C", 5));

// -------------includes()---------------

// var myFriends = ["A","B","D","C","E","F"];
// console.log(myFriends.includes('C',4));
// console.log(myFriends.includes('C',3));

// -------------find()--------------
// ------------return undefined if not found--------------

// const prices = [200,300,350,400,500,600];

// const findElem = prices.find((currVal) => {
//             return currVal < 400;
// });
// console.log(findElem);
            
// const findElem =prices.find((currVal) => currVal < 400 );
// console.log(findElem);
            
// console.log(prices.find((currVal) => 'return currVal < 400;' ));
// console.log(prices.find((currVal) => currVal < 400 ));

// -------------findIndex()-------------
// ------------return -1 if not found--------------

// console.log(prices.findIndex((currVal) => currVal > 1400)

// ----------filter()------------
// ------------returns an empty array when not found------------

// const prices = [200,300,350,400,500,600];
// const newPriceTag = prices.filter((elem, index) => {
//             return elem < 400;
// })
// console.log(newPriceTag);

// ------------Sorting and comparision of an array-------------
 
// -----------sort()-----------

// const months = ["March","Jan","Feb","April","Dec","Nov"]
// console.log(months.sort());

// const nums = [1,32,4,10000,78]
// console.log(nums.sort());

// ------------------Insert, Add, Replace and Delete in array (CRUD)-------------------

// ------------push()--------------
// ------------rerurns new length of the array-------------
// --------------It adds at the end of the array---------------

// const animals = ['pigs', 'goats', 'sheep']

// const count = animals.push('chicken');
// console.log(count);

// animals.push('chicken', 'cow', 'cats');
// console.log(animals);

// --------------unshift()---------------
// --------------It adds at the first of the array---------------

// const animals = ['pigs', 'goats', 'sheep']

// const count = animals.unshift('chicken')
// console.log(count);

// animals.unshift('chicken', 'cow', 'sheep')
// console.log(animals);

// const myNumbers = [1,2,3,5]

// console.log(myNumbers.unshift(4,6));
// myNumbers.unshift(4,6)
// console.log(myNumbers);
// console.log(myNumbers.sort());

// ------------pop()--------------
// --------------returns the particular element which was popped up---------------

// const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage']
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// ------------shift()-----------

// const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage']
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);
// console.log(plants.length)

// ------------------splice() method------------------

// const months= ['jan','march','april','june','july']

// const newMonth = months.splice(5,0,'dec')
// console.log(newMonth);
// console.log(months);

// const newMonth = months.splice(months.length,0,'dec')
// console.log(newMonth);
// console.log(months);

// const months= ['jan','march','april','june','july']

// const indexOfMonth = months.indexOf('march')
// if(indexOfMonth != -1){
//             const updateMonth = months.splice(indexOfMonth,1,'March')
//             console.log(months);
// }else{
//             console.log('no such data found');
// }


// const months= ['jan','march','april','june','july']

// const indexOfMonth = months.indexOf('june')
// if(indexOfMonth != -1){
//             const updateMonth = months.splice(indexOfMonth,Infinity)
//             // const updateMonth = months.splice(indexOfMonth,1)
//             console.log(months);
//             console.log(updateMonth);
// }else{
//             console.log('no such data found');
// }
// // -------error because of block scope limitations---------
// console.log(updateMonth);


// ---------------Map & Reduce Method-----------------

// ------------map()-------it is chainable-----
// -------------forEach(doesnt return new array return undefined otherwise), Map is alternative to which-------------
// -----------It does muted the curr arr it returns a new arr instead-----------

// const array = [1,4,9,14,35]

// let newArr = array.map((currElem,index,arr) => {
//             return currElem > 9
// })
// console.log(array);
// console.log(newArr);

// let newArr = array.map((currElem,index,arr) => {
//             return `Index no = ${index} and the value is ${currElem} belong to ${arr}`
// })
// console.log(newArr);


// ------------------Challange--------------------

// let arr = [25, 36, 49, 64, 81]

// let arrSqr = arr.map((currElem) => currElem**2)
// let arrSqr1 = arr.map((currElem) => Math.sqrt(currElem))
// console.log(arr);
// console.log(arrSqr);
// console.log(arrSqr1);


// let arr = [2,6,4,6,8]

// let arrMult = arr.map((currElem) => {
//             return currElem * 2;
// }).filter((currElm) => {
//             return currElm > 10;
// })
// console.log(arrMult);

// let arrMult = arr.map((currElem) => currElem * 2 ).filter((currElm) => currElm > 10 ).reduce((accumulator, currElem, index, arr) => accumulator += currElem)
// console.log(arrMult);

// let arrMult1 = arr.map((currElem) => currElem*2 > 10)
// console.log(arrMult1);


// ---------------reduce() method----------------

// let arr = [5,6,7]

// let sum = arr.reduce((accumulator, currElem, index, arr) => accumulator +=  currElem)
// console.log(sum);

// let sum = arr.reduce((accumulator, currElem, index, arr) => accumulator +=  currElem,7)
// console.log(sum);

// -------------flatten array from 2d to 1d--------------

// const arr = [
//             ['zone1', 'zone2'],
//             ['zone3',['zone4','zone5']]
// ]

// let flatArr = arr.reduce((accum, currVal) => accum.concat(currVal))
// console.log(flatArr);


// ----------------Strings-----------------

// ---------js string is zero or more chars written inside sigle/double quotes---------
// ----------Strings can be created as primitives, from str literals, or as objs, using the string() constructor----------

// let myName = 'MilanCharan'
// console.log(myName);

// --------string using string() contructor---------

// let channelName = new String('charan tech')
// console.log(channelName); 

// -------------length property--------------

// console.log(myName.length);

// -----------Escape char------------

// let anySent = "here i am using double codes \"MILAN\" inside a double codes itself using escape char"
// console.log(anySent);
// let anySent1 = "here i am using double codes 'MILAN' inside a double codes itself using escape char"
// console.log(anySent1);

// ---------find string in a string =====>  indexOf() ---------
// ----------returns -1 if not found----------

// const myBioData = 'i am milan charan'
// console.log(myBioData.indexOf('thapa'));

// ----------lastIndexOf()----------
// ----------returns -1 if not found----------

// const myBioData = 'i am milan charan'
// console.log(myBioData.lastIndexOf('milan',5));


// -----------Searching for a string in a string ====> search()------------
// ----------we can use start position as second arg in search() such as indexOf()----------
// -----------returns the same -1 if not found-------------

// const myBioData = 'I am milan charan'
// let sData = myBioData.search('milan')
// console.log(sData);

// -----------Extracting String Parts-----------
// ----------slice()----------
// -----------the original arr won't change in the slice()-------------

// var str = 'apple, banana, kiwi'
// let res = str.slice(0,4+1)
// let res1 = str.slice(7, -2)
// console.log(res);
// console.log(res1);

// var str = 'apple, banana, kiwi, mango'
// let res = str.slice(7,-2)
// console.log(res);


// ---------------Challange----------------

// let tweet = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

// let myTweet = tweet.slice(0, 280)
// console.log(myTweet);
// console.log(myTweet.length);


// -----------substring()------------
// -----------it is similer to slice just the only diff is that i does not accept negative args------------
// -----------if neg val WebGLActiveInfo, then it will count from 0 to first arg-----------

// var str = 'apple, banana, kiwi'
// let res = str.substring(0, 4)
// let res = str.substring(8, -2)
// console.log(res);


// ------------substr()-------------
// -------------we can extract data backwards through substr(), otherthan similar to slice(), substring--------------

// var str = 'apple, banana, kiwi'
// // -------will return empty when val given like this-------
// let res = str.substr(8, -2)
// let res1 = str.substr(-4)
// console.log(res);
// console.log(res1)


// --------------Replacing string content-----------------
// -----------replace method never changes original content-------------
// ----------it only replaces the first match & case sensitive-----------

// let myBioData = 'I am milan charan milan'
// let replaceData = myBioData.replace('milan','Milan')
// console.log(myBioData);
// console.log(replaceData);

// --------------Extract string chars----------------

// let str = 'HELLO WORLD'

// console.log(str.charAt(0));

// -------charCodeAt() returns UTF-16 code--------
// --------returns an integer between 0 and 65535--------

// console.log(str.charCodeAt(0));
 
// --------------Challange----------------

// let str1 = 'I am milan Charan'
// console.log(str1.charCodeAt(str1.length-1));

// ------------Property access-----------
// ----------ECMAScript 5 (2009) allows prop access [] on strs-----------

// var str = 'Milan Charan'
// console.log(str[1]);


// -------------other useful str methods--------------

// let myName = 'Milan Charan'
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// -------------concat()-------------

// let fName = 'Milan'
// let lName = 'Charan'

// console.log(fName + lName);
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(' ',lName));

// ---------trim()----------

// var str = '       Hello    World     '
// console.log(str);
// console.log(str.trim());


// -------------Converting str to arr-------------

// var txt = 'a, b,c,d, e'
// console.log(txt.split(','));
// console.log(txt.split(' '));
// console.log(txt.split('|'));


// -----------------DATE & TIME----------------
// -----------JS Date obj represent a single moment in time in  a platform independent format-------------
// ---------------Date objs contain a number that represents millisecs since ****1 Jan 1970*****-----------------

// -----------new Date()----------
// ------------Date objs are created with new Date() contructor--------------

// let currDate  = new Date()
// console.log(currDate);

// console.log(new Date());

// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// -------Date.now()-------
// ---------Returns the number of millisecs till time from 1 jan 1970----------

// console.log(Date.now());


// var d = new Date(2018, 11, 24, 20, 33, 30, 0)
// console.log(d.toLocaleString());

// var d = new Date(2018, 11, 24)
// console.log(d.toLocaleString());

// var d = new Date(2022)
// console.log(d.toLocaleString());

// var d = new Date(0)
// console.log(d.toLocaleString());

// var d = new Date(2022, 0)
// console.log(d.toLocaleString());


// ----------new Date(dateString) creates a new date from a date string-----------

// var d = new Date('october 13 2021 11:13:12')
// console.log(d);

// var d = new Date('october 13 2021 11:13:12')
// console.log(d.toLocaleString());

// console.log(Date.now())
// var d = new Date(1647783163760)
// console.log(d.toString());

// var d = new Date(0)
// console.log(d.toLocaleString());

// var d = new Date(86400000*2)
// console.log(d.toLocaleString());


// -----------Date's Methods-------------

// const currDate = new Date()

// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());   //Months from 0 to 11
// console.log(currDate.getDate());
// console.log(currDate.getDay());   //days from 0 to 6


// -----------How to set individual date-----------

// const currDate = new Date()

// console.log(currDate.toString());
// console.log(currDate.setFullYear(2022));
// console.log(currDate.setFullYear(2022, 10, 5));
// console.log(currDate.setMonth(10));
// console.log(currDate.toLocaleString());
// console.log(currDate.toString());

// console.log(new Date(1647830989321).toLocaleString());

// ----------------Times's methods----------------

// const currTime = new Date();

// console.log(currTime.getTime());
// console.log(currTime.getHours());
// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());

// --------------Set the individual time--------------

// let currTime = new Date()

// console.log(currTime.setTime());
// console.log(currTime.setHours(5));
// console.log(currTime.setMinutes(43));
// console.log(currTime.setSeconds(19));
// console.log(currTime.setMilliseconds(212));

// ----------------Challange-------------------

// console.log(new Date().toLocaleTimeString());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toLocaleString());


// -------------------Math Obj------------------
// ----------the js math obj allows you to perform mathemetical tasks on nums-----------

// -----------Math.PI------------
// console.log(Math.PI);

// ---------Math.round()----------
// ----------returtns the value of x rounded to its nearest interger-----------
// let num = 10.2565 
// console.log(Math.round(num));
// console.log(Math.round(10.5678));

// -------------Math.pow()-------------
// ---------Math.pow(x, y) returns the value of y to the power of x----------

// console.log(Math.pow(2, 3));
// console.log(2**3)

// -----------Math.sqrt()------------

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

// ---------Math.abs()---------

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-6));

// ---------Math.ceil()--------

// console.log(Math.ceil(-4.51));
// console.log(Math.round(4.51));
// console.log(Math.ceil(99.1));
// console.log(Math.round(99.1));

// ----------Math.floor()----------

// console.log(Math.floor(4.71));
// console.log(Math.floor(99.9));

// -------------Math.min(), max()--------------

// console.log(Math.min(0, 150, 30, 20, -8, -200));

// console.log(Math.max(0, 150, 30, 20, -8, -200));


// ---------Math.random()-----------

// console.log(Math.floor(Math.random()*10));

// -----------Math.trunc()------------
// ----------it returns the integer part of a number-----------

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

// --------------Read this---------------

// ----------if the argument is a positive number, Math.trunc() is equivalent to-------------
// -------=--------Math.floor(), otherwise Math.trunc() is equal to Math.ceil()---------------


// ----------------DOM in JS-----------------


// ----------------Window vs Document-----------------
// ------------Window is the main container or we can say that it is a global obj.------------
// ------------Whereas the DOM is the child of the window obj------------

// -------------window has MediaStreamTrack, props, and objs ex. setInterval(),setTimeout() are the mets---------------
// ------------where as doc is the obj of the window and i t also has a SCREEN obj with props describing the physi display-------------
// -----------innerHeight, innerWidth and more are props of the window obj--------------


// ---------------DOM VS BOM----------------

// --------------This is we are performing using window obj----------------

// -----------just type window.innerHeight  or  innerWidth  on console------------


// ------------This is what what we are performing using BOM-------------

// <script>
//             function goback() {     //it is a button elem in html doc where at onclick = "goBack()"event we are having this function
//                         window.history.back()
//             }
// </script>

// ------------Functions alert/confirm/prompt are also a part of BOM: are not directly related to the doc------------
// ------------But represent pure browser mets to communi..ing with th user------------

// alert(location.href);  //shows current url
// if(confirm("Want to visit XXXXXX")){
//             location.href = "https://XXXXXXXXX/"  //redirect to  the mentioned web address
// }


//                 Window
//               -    |    -
//             -      |      -
//           -        |         -
// DOM               BOM           JavaScript
// document       navigation          Object
// .....          screen              Array
//                location            Function
//                frames
//                history
//                XML-HttpRequest     .....



// -------------DOM Navigation-------------- 

// ---------If we want to related to any HTML tag use DOM--------
// ----------Otherwise use window Object if wanna to work with window objs---------

// ----------This is we are performing using DOM----------

// ---------Go to console and type-----------
// document.documentElement
// document.head
// document.body.childNodes
// document.body.children.length
// document.body.style.background = "red";
// $0.style.color = "red"    //-------here's $0 the val of the partic line-----------


// ---------------Challange----------------

// document.body.hasChildNodes()   //------returns true if body has child nodes------


// ----------------CSS document style----------------

// -------------just go to console and type one by one dont forget to add same clsss and ids in html document-------------

// document.body.firstChild

// document.body.firstElementChild
// document.body.firstElementChild.firstElementChild
// const firstChild = document.body.firstElementChild.firstElementChild
// firstChild
// firstChild.getElementsByClassName.color = "red"

// const childTwo = document.querySelector('.child-two')
// childTwo
// childTwo.style.color = 'yellow'

// document.body.parentNode
// document.body.parentElement
// document.head.parentElement

// document.body.nextSiblibg
// document.body.previousSibling
// document.body.previousElementSibling
// document.head.nextElementSibling


// -------------How to search the elements and the references--------------

/*<script>
            const changeContent = () => {
                        //document.getElementById('heading').innerHTML = "welcome to thapa"   //if the element with the specified ID is not found in  the doc,returns null
                        document.querySelector('#heading').innerHTML = 'I changed again'    //this will return or change to the first matching value only
                        console.log(document.querySelectorAll(.para))   //this will return all the elems
                        const headingChange = document.getElementById('heading')
                        headingChange.innerHTML = 'welcome to milan'

                        console.log(document.getElementsByClassName('para'))
                        console.log(document.getElementsByTagName('p'))

                        console.log(document.getElementByName('gender'))     
            }
            
</script> */


// -----------------Interview question------------------
// -----------diff b/w getElementById() and querySelector()------------

// ----------Similirities b/w both the methods----------

// <!DOCTYPE html>
// <html>
//             <head>
//                         <meta charset="UTF-8"/>
//                         <meta name="viewport" content="width=device-width, intial-scale=1.0"/>
//                         <title>DOM Document</title>
//             </head>
//             <body>
//                         <ul>
//                                     <li id='web-id'>PHP</li>
//                                     <li>HTML</li>
//                                     <li class='web-class'>CSS</li>
//                                     <li class='web-class'>JavaScript</li>
//                         </ul>
//                         <script>
//                                     console.log(document.getElementById('web-id').innerHTML)
//                                     console.log(document.querySelector('#web-id').innerHTML)
//                         </script>
//             </body>
// </html>

// -----------Diff b/w both the methods-------------

// <!DOCTYPE html>
// <html>
//             <head>
//                         <meta charset="UTF-8"/>
//                         <meta name="viewport" content="width=device-width, intial-scale=1.0"/>
//                         <title>DOM Document</title>
//             </head>
//             <body>
//                         <ul>
//                                     <li id='web-id'>PHP</li>
//                                     <li>HTML</li>
//                                     <li class='web-class'>CSS</li>
//                                     <li class='web-class'>JavaScript</li>
//                         </ul>
//                         <script>
//                                     console.log(document.querySelector('ul li.web-id').innerHTML)
//                                     console.log(document.querySelector('li.web-id').innerHTML)
//                                     console.log(document.querySelector('web-id').innerHTML)
//                         </script>
//             </body>
// </html>


 
// ----------------EVENTS----------------

// -------------HTML events are things that happen to html elems---------------
// ------------when JS is used in html pages, JS can react on these events-------------

// -----------A html event can be something the browser does, or something a user does------------

// -----------here are some examples on html events------------

// -----------An html web page has finished loading------------
// ------------an html input feild was changed------------
// ------------An html button was clicked------------
// -------------on   afterprint, when events happen, you may want to do something-------------

// ------------JS lets you execute code when events are detected------------
// ------------HTML elems allows event handler attrs, with JS code to be added to html elems------------

// ------------Section:1 => 4 Ways of writing Events in JS------------

// ---------1. using inline events alert();---------
// ---------2. by calling a function (we already seen and most common way of writing)---------
// ---------3. using inline Events (HTML onclick = "" prop and element.onclick)---------
// ---------using Event listeners (addEventListeners and IE's attachEvent)---------

// 1st way of writing funtion

//<a href="#" class="button" onclick="alert('I am awesome but no one use me')"></a>

//2nd way of writing function

/* <a href="#" class="button" onclick="callingFunction()"></a>
<script>
            const callingFunction = () => {
                        alert('most common way of writing function')
            }
</script> */


//3rd way of writing function

/* <a href="#" class="button" id="thirdWay"></a>
<script>
            const thirdWay = document.getElementById('thirdWay')
            thirdWay.onclick = function() {
                        alert('most common way of writing using id attr')
            }
            thirdWay.onclick = function() {  //this will override the function on upperside the alert() one
                        console.log('most common way of writing using id attr')
            }
</script> */


// 4th way of writing function

/* <a href="#" class="button" id="thirdWay"></a>
const fourthWay = document.querySelector('#fourthWay')

fourthWay.addEventListener('clcik', () => {
            alert('this is fourth way of writing function on onclick event and recomended one from guruji')
})

fourthWay.addEventListener('click', () => { //here it will not override the upper one, instead both the functions will run here
            console.log('Ilove this way of writing function in onclick events')
}) */


// --------------Section:2 => what is Event Obj?---------------

// ----------Event obj is the parent obj of the event objs for ex: MouseEvent, focusEvent, KeyboardEvent Etc----------


/* <script>
            const fourthWay  =document.getElementById('FourthWay')

            const checkEvent = () => {
                        alert('hum dekh rahe hai event obj')
                        console.log(event)
                        console.log(event.target)
                        console.log(event.type)
            }
            fourthWay.addEventListener('click', checkEvent)
</script> */


// ---------------MouseEvent---------------
// ----------The MouseEvent obj----------
// -----------Event that occur when the mouse interacts with the HTML doc belongs to the MouseEvent obj------------


// <p id="myP" onmousedown="mouseDown" onmouseup="mouseUp">XXXXXX</p>
// <script>
//             function mouseDown(){
//                         document.getElementById("myP").style.color = "#F8B627"
//             }
//             function mouseUp(){
//                         document.getElementById("myP").style.color = "red"
//             }
// </script>


// <div class="main-div"> <div id="box"></div></div>
// const mEnter = document.getElementById('box')

// mEnter.addEventListener('mouseenter', () => {
//             mEnter.style.backgroundColor = "red"
//             console.log('Mouse enter bro')
// })

// mEnter.addEventListener('mouseleave', () => {
//             mEnter.style.backgroundColor = "pink"
//             console.log('Mouse leave bro')
// })


// ----------------KeyboardEvent----------------
// -------------Events that occur when user presses a key on the Keyboard, belongs to the KeyboardEvent obj--------------


/* <input type="text" class="effect-1" onnkeypress="keyPress()" onkeydown="keyDown()" onkeyup="keyUp()"></input>
<p id="keys"></p>

<script>
            const keyPress = () => {
                        document.getElementById('keys').innerHTML = `you press ${event.key} and its code is ${event.code}`
            }

            const keyDown = () => {
                        document.getElementById('keys').innerHTML = `key is down`
            }

            const keyUp = () => {
                        document.getElementById('keys').innerHTML = `key is up`
            }
</script> */


// ---------------InputEvents---------------

// -------------the onchange event occurs when the value of an elem has been changed-------------
// ------------for radioButtons and checkBoxes, the onchange event occurs when the checked state has been changed--------------


// <body>
//             <div class="main-div">
//                         <div>
//                                     <label for="">Your name</label>
//                                     <input type="text" name="" id="ice" ></input>
//                                     <br>
//                                     <label>Choose an ice cream flavour
//                                                 <select id="iceCVreams" name="iceCreams" onchange="selectElement()">
//                                                             <option value="">Select One</>
//                                                             <option value="Chocolate">Chocolate</>
//                                                             <option value="Sardine">Sardine</>
//                                                             <option value="Vanilla">Vanilla</>
//                                                 </select>
//                                     </label>
//                                     <br>
//                                     <div id="result"></div>
//                         </div>
//             </div>
//             <script>
//                        const selctElement = () => {
//                                     const inputChange = document.gretElementById('ice').value
//                                     const iceCreams = document.gretElementById('iceCreams').value
//                                     const result = document.gretElementById('result')

//                                     result.innerHTML = `Mr ${inputChange} select ${iceCreams} ice-cream flavour`
//                         }

//                         const iceCreams = document.getElementById('iceCreams')

//                         iceCreams.addEventListener('change', () =>{
//                                     const inputChange = document.getElementById('ice').value
//                                     const iceCreams = document.getElementById('iceCreams').value
//                                     const result = document.getElementById('result')

//                                     result.innerHTML = `Mr ${inputchange} selected ${iceCreams} ice-cream flavour`
//                         })
//             </script>
// </body>



// ---------------Interview Question------------------
// ---------Diff b/w onclick and addEventListener?----------

// ----------This is beacuse addEventListener does not overwrite existing event handlers,----refer to lineNo 1161-1172-------
// --------------whereas onclick overrides any existing onclick fn event handlers.----refer to lineNo 1161-1172-----------

// --------------the other significant differences, ofcourse, is that onclick will always work--------------
// ---------------whereas addEventListener does not work in IE before version 9.--------------



// ---------------Timing Based Events in JS----------------

// --------------setTimeout(), setInterval(), clearTimeout(), clearInterval()---------------- 

// --------------The window obj allows execution of code at specified time intervals.--------------
// ------------these time intervals are called timing EventSource.------------
// --------------The two key methods to use with JS are:


// ------------setTimeout()-------------

/* <div class='main-div'>
            <div>
                        <p>Want to know my name ?</p>
                        <p id='showMyName'></p>
                        <br>
                        <button id='btn'>Click Here</button>
            </div>
</div>
<script>
            const myName = document.querySelector('#showMyName')
            const btn = document.querySelector('#btn')

            const showMyName = () => {
                        myName.innerHTML = "Loading..."
                        setTimeout(() => {
                                    myName.innerHTML = 'Milan  Charan'
                        },1000)
            }
            btn.addEventListener('click',showMyName);
</script> */


// ------------clearTimeout()------------

/* <div class="main-div">
            <div>
                        <p>Click "try it". wait for 3 secs. the page will alert "hello"</p>
                        <p>Click "stop" to prevent the first function to execute.</p>

                        <button onclick="myVar = setTimeout(myFunction, 2000)">Try it</button>
                        <button onclick ="clearTimeout(myVar)">Stop it</button>
            </div>
</div>
<script>
            function myFunction(){
                        alert("Hello");
            }
</script> */

// ------------setInterval()--------------

/* <div class="main-div">
            <div>
                        <p>can you stop me when I reach at 5 ?</p>
                        <br>
                        <button id="btn">Click here</button>
                        <button id="btn1">Stop</button>
            </div>
</div>
<script>
            const stopNum = document.querySelector('p')
            const btn = document.querySelector('#btn')
            const stopInterval = document.querySelector('#btn1')
            let timeRef;
            let num = 0;

            const showMyNum = () => {
                        stopNum.innerHTML = "Loading..."
                        timeRef = setInterval(() => {
                                    stopNum.innerHTML = `${num}`
                                    num++
                        },1000)
            }
            btn.addEventListener('click',showMyNum);
            stopInterval.addEventListener('click', () => {
                        clearInterval(timeRef)
            });
</script> */


// ----------------Interview question---------------
// -----------Diff b/w setTimeout() and setInterval() ?----------

// -----------setTimeout() method call a function once after a specified time and it is done for setTimeout()------------
// -----------we use setInterval() method when we have repeat the same thing again and again-----------



// --------------OOPS in JS---------------

// ------------Object literals, "this" object-------------


// ------------what is obj literals ?------------

// -----------Obj literals is simply a key:value pair data str--------------
// ------------Strong vars and funcs together in one Container, can refer to this as an obj-------------

// ------------How to create an obj ?-------------

// ------------1st way-------------

// let bioData = {
//             myName : "Milan Charan", 
//             myAge : 21,
//             getData : function(){
//                         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//             }
// }
// console.log(bioData);
// console.log(bioData.myAge);
// bioData.getData()

// ------------2nd Way-------------

// let bioData = {
//             myName : "Milan Charan", 
//             myAge : 21,
//             getData(){
//                         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//             }
// }
// console.log(bioData);
// console.log(bioData.myAge);
// bioData.getData()

// ------------What if we want obj as a value inside another obj-------------

// let bioData = {
//             myName : {
//                         myFirstName : "Milan",
//                         myLastName : "Charan"
//             }, 
//             myAge : 21,
//             getData(){
//                         console.log(`My name is ${bioData.myName.myFirstName} and my age is ${bioData.myAge}`);
//             }
// }
// console.log(bioData);
// console.log(bioData.myAge);
// bioData.getData(bioData.myName.myFirstName)


// ------------What is THIS obj ?-------------

// ------------"this" obj is that it contain the current Context.-------------
// ------------"this" obj can have diff values depending on where it is placed-------------

// console.log(this);   //Run this on console
// console.log(this.alert("Awesome"));    //Run this on console
// ------------It refres to the current context and that is wndow global obj-------------

// --------------Ex.2-------------

// function myName(){
//             console.log(this);
// }
// myName();   //still this's curr cont is window

// -----------Ex.3-------------

// var myNames = "Milan"  //Global Scope
// function myName(){
//             console.log(this.myNames);
// }
// myName()

// -------------Ex.4-------------

// const obj = {
//             myAge : 21,
//             myName(){
//                     console.log(this);
//                         console.log(this.myAge);
//             }
// }
// obj.myName()


// -------------Interview Question-------------
// -------------What will be the output ?-------------
// ------------"this" obj does not work with fat arrow function, here again it will return window--------------

// const obj = {
//             myAge : 21,
//             myName : () => {
//                         console.log(this);
//             }
// }
// obj.myName()


// -------------Interview Question-------------
// -------------What will be the output ?-------------

// let bioData = {
//             myName : {
//                         myFirstName : "Milan",
//                         myLastName : "Charan"
//             },
//             myAge : 21,
//             getData(){
//                         console.log(`My name is ${this.myName.myFirstName} and my age is ${this.myAge}`);
//             }
// }
// bioData.getData()


// -------------Destructuring (obj & Arr)--------------

// let bioData = ["Milan", "Charan", 21]

// let myFName = bioData[0]
// let myLName = bioData[1]
// let myAge = bioData[2]

// console.log(myFName);

// let [myFName,myLName,myAge] = bioData
// console.log(myAge);

// let [myFName,myLName,myAge,myDegree='BTech'] = bioData
// console.log(myAge);
// console.log(myDegree);


// const myBioData = {
//             myFName : "Milan",
//             myLName : "Charan",
//             myAge : 21
// }
// let age = myBioData.myAge
// console.log(age);

// let {myFName,myLName,myAge,myDegree='BTech'} = myBioData
// console.log(myLName);



// ------------Obj Properties-------------

// ----------How to assign values inside obj dynamically ?------------

// let myName = "milan"
// const myBio = {
//             myName : "hello, how a re you ?",
//             19+2 : "is my age"
// }
// console.log(myBio);

// let myName = "milan"
// const myBio = {
//             [myName] : "hello, how a re you ?",
//             [19+2] : "is my age"
// }
// console.log(myBio);

// -----------Something like opps of destructuring-----------

// let myName = "Milan Charan"
// let myAge = 21

// const myBio = {
//             myName : myName,
//             myAge : myAge
// }
// console.log(myBio);
 
// let myName = "Milan Charan"
// let myAge = 21

// const myBio = { myName, myAge }
// console.log(myBio);


// --------------spread operator----------------

// ----------with array----------

// const colors = ['red','green','blue','white','pink']

// // const myColors = ['red','green','blue','white','pink','yellow','black'] 

// const myFavColors = [...colors,'yellow','black']
// console.log(myFavColors);


// var names = ['Milan','milan','Milan']

// function getNames(name1,name2,name3){
//             console.log(name1,name2,name3);
// }
// getNames(names[0],names[1],names[2])
// getNames(...names)
// getNames(names)

// ----------with obj----------

// -----------see just after rest with obj------------


// ------------Rest operators--------------

// -------with array-------

// function addNumbers(a,b,c,...other){
//             console.log(other);
//             return a+b+c+other[0]+other[1]
// }
// const res = addNumbers(2,5,6,8,11)
// console.log(res);

// ---------with obj--------

// var students = {
//             name:'milan',
//             age:21,
//             hobbies:['cricket','singing']
// }
// // const age=students.age
// const {age,name} = students 
// console.log(age,name);

// var students = {
//             name:'milan',
//             age:21,
//             hobbies:['cricket','singing']
// }
// // const age=students.age
// const {age,...rest} = students 
// // const {...rest} = students 
// console.log(age,rest);


// ------------Spread with obj using rest with obj-------------

// var newStudent = {
//             ...students,
//             age : 22
// }
// console.log(newStudent);



// -------------ES7 (2016) Concepts-------------

// -------------Array's includes-------------

// const colors = ['red','green','blue','white','pink','yellow','black']
// const isPresent = colors.includes("red")
// console.log(isPresent);


// --------------Exponentiation op  **---------------

// console.log(2**3);


// -------------ES8 (2017) Concepts-------------

// -------------padStart() & padEnd()------------

// -----------go to console and run-----------

// let myName = "Milan".padStart(7)
// myName

// let myAge = "21".padEnd(10)
// myAge


// ------------Object.values() & Object.entries()------------

// const person = {name:'Milan', age:21}
// console.log(Object.values(person));
// console.log(Object.entries(person));

// const arrObj = Object.entries(person)
// console.log(Object.fromEntries(arrObj));  //this concept is from ES10 (2019)


// -------------ES9 (2018) Concepts-------------

// -----------spread with obj------------

// const person = {name:'milan',age:21}
// const sPerson = {...person}
// console.log(person);
// console.log(sPerson);


// -------------ES10 (2019) Concepts-------------

// const arr = [
//             ['zone1','zone2'],
//             ['zone3','zone4'],
//             ['zone5',['zone6','zone7']]
// ]

// let flatArr = arr.reduce((accum,currVal) => {
//             return accum.concat(currVal)
// })
// console.log(flatArr);

// console.log(arr.flat(2));  //we can also use flatMap with flat method
// console.log(arr.flat(Infinity));


// ----------It also has trimStart() & trimEnd()-----------


// -------------ES11 (2020) Concepts-------------

// let oldNum = Number.MAX_SAFE_INTEGER
// console.log(oldNum);
// console.log(oldNum + 12);    //produces wrong output

// const newNum = 9007199254740991n + 12n
// console.log(newNum);
// console.log(typeof(newNum));


// -------------ES (2014) Concepts-------------

// x = 3.14
// console.log(x);

// "use strict"
// x = 3.14
// console.log(x);

// "use strict"
// const x = 3.14
// console.log(x);




// ------------------ADVANCE JAVASCRIPT------------------

// 1.Event Propagation (Event bubbling & Event Capturing)
// 2.Higher order Function
// 3.callBack Function
// 4.Function Currying (Will see after Async JS Section)
// 5.CallBack HTML
// 6.AJAX call using XMLHttpRequest
// 7.BONUS section JSON
// 8.Fetch API
// 9.Promises
// 10.Async-await
// Error Handling in JS



// -------------Event Propagation-------------

// -------------What is Event bubbling ? {{{DEFAULT}}}-------------

// -------------With event bubblibg, the event is first captured and handled by the innermost elem and then propagated to outer elems-------------

// -------------What is Event capturing ?-------------

// -------------With event capturing, the event is first captured by  the outermost elem and propagated to the inner elems.-------------
// -------------Capturing is also called "trickling" which helps remember the propagation order-------------


/* <div class='parentDiv' id="parentId">
            <div class='childDiv' id="childId"></div>
</div>
<script>
            const parentId = document.getElementById('parent')
            const childId = document.getElementById('childId')

            const parentCall = () => {
                        alert('parent div call')
                        console.log("parent div call")
            }

            const childCall = () => {
                        alert('child div call')
                        console.log("child div call")
                        //event.stopPropagation()
           }

            parentId.addEventListener('click', parentCall,true)   //Again keep in mind that this the only third arg in addEventListener decides that either you want to use Event Capturing or not, if not then mention false or nothing
            childId.addEventListener('click', childCall)
</script> */



// -----------Higher Order Function------------

// ----------Function which takes another function as an arg is called HOF----------

// -------------CallBack function-------------

// ----------Functio n which get passed as an arg to another function to be called back at a later time, called CallBack Function------------

// const add = (a,b) => {
//             return a+b
// }

// const subs = (a,b) => {
//             return a-b
// }
// const mult = (a,b) => {
//             return a*b
// }

// const calc = (a,b,operator) => {  //here calc is a higher order function whereas add,subs,mult are callback functions
//             return operator(a,b)
// }

// console.log(calc(2,3,mult));    



// ------------How JS work and ASYNCHRONOUS JS ?--------------

// ----------hoisting in JS-----------
// -----------Scope chain----------
// -----------Lexical scoping in JS-----------
// -----------Use strict mode-----------
// -----------this keyword-----------
// -----------Closures in JS-----------
// -----------What is Asynchronous JS Programming?-----------
// -----------What is EventLoop ?-----------


// -----------Hoisting in JS-----------

// -----------We have a creation phase and execution phase-----------
// -----------hoisting in JS is a mechanism where vars and funcs declaras are moved to the top of their scope before code execute-----------

// console.log(myName);
// var myName;
// myName = "Milan"

// console.log(myName);
// var myName = "Milan"
// // var myName;

// -----BTW I dont believe this------How it will be in output during creation phase-----------

// 1.var myName
// 2.console.log(myName);
// 3.myName = "Milan"

// console.log(myName1);  //{from ES6} in this case hoisting will not be working bcs let does not allow access before declara
// let myName1            // other diff is vars decld with let are local to the surrounding block, not the entire function
// myName1 = "Milan"



// -----------What is Scope chain and lexical scopping-----------

// -----------Scope chain is used to resolve the value of var names in JS-----------

// -----------Scope chain in js is lexically defined, which means that we can see what the scope chain will be by looking at the code-----------
// -----------At the top we have the global scope which is he window obj in brow-----------

// -----------Lexical scoping means Information, the inner func can get access to their parent funcs vars but the vice-versa is not true-----------


// -----------Ex. Lexical Scoping-----------

// let a = "hello guys"   //global scope
//  const first = () => {
//              let b = " How are you ?"

//              const second = () => {
//                          let c = " Hii, I am fine thank you"
//                          console.log(a+b+c);
//              }
//              second()
//             //  console.log(a+b+c);  //Error bcs of lex...sco..
// }
// first()



// -----------What is Closures in JS ?-----------

// -----------A closure is the combination of a func bundled together (enclosed) with references to its surr state (the lexical envi)-----------
// -----------In oth words, A closure gives you access to an outer func's scope from an inner func-----------

// -----------In JSON, closures are created every time a func is created, at func creation time-----------


// const outerFun = (a) => {
//             let b = 10
//             const innerFun = () => {
//                         let sum = a+b
//                         console.log(`the sum of two no is ${sum}`);
//             }
//             innerFun()
// }

// outerFun(5)

// const outerFun = (a) => {
//             let b = 10
//             const innerFun = () => {
//                         let sum = a+b
//                         console.log(`the sum of two no is ${sum}`);
//             }
//             return innerFun
// }
 
// let checkClosure = outerFun(5)
// console.log(checkClosure);
// console.log(checkClosure());
// checkClosure()
// console.dir(checkClosure);



// -------------Interview Question-------------
// -------------Diff b/w Synchronous & Asynchronous JS ?-------------

// -------------Synchronous Prog-------------

// const fun2 = () => {
//             console.log(`function2 is called`);
// }

// const fun1 = () => {
//             console.log(`function 1 is called`);
//             fun2()
//             console.log(`function 1 is called again`);
// }
// fun1()


// -------------Asynchronous Prog-------------

// const fun2 = () => {
//             setTimeout(() => {
//                         console.log(`function 2 is called`);
//             }, 2000);
// }

// const fun1 = () => {
//             console.log(`function 1 is called`);
//             fun2()
//             console.log(`function 1 is called again`);
// }
// fun1()



// -------------Event Loop-------------

// function() => *Global Execution Context* => if (avail) WEB APIs => if(done) Message Queue => *Global Execution Context*



// -------------Function Currying--------------

// -------------Interview Question-------------
// -------------output of sum(5)(3)(8) ?-------------

// function sum(num1){
//             // console.log(num1);
//             return function(num2){
//                         // console.log(num1,num2);
//                         return function(num3){
//                         console.log(num1+num2+num3);
//                         }
//             }
// }

// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);

// sum(5)(3)(8)



// -------------CallBack Hell-------------

// setTimeout(()=>{
//             console.log(`1 wrok is done`);
//             setTimeout(()=>{
//                         console.log(`2 wrok is done`);
//                         setTimeout(()=>{
//                                     console.log(`3 wrok is done`);
//                                     setTimeout(()=>{
//                                                 console.log(`4 wrok is done`);
//                                                 setTimeout(()=>{
//                                                             console.log(`5 wrok is done`);
//                                                             setTimeout(()=>{
//                                                                         console.log(`6 wrok is done`);
//                                                                         setTimeout(()=>{
//                                                                                     console.log(`7 wrok is done`);
//                                                                         },1000)
//                                                             },1000)
//                                                 },1000)
//                                     },1000) 
//                         },1000)   
//             },1000)
// },1000)
// ----------To be saved from callBack hell we will promises, fetch API,, soon-----------



// --------------AJAX call using XMLHttpRequest--------------
// ------------AJAX, which initially stood for Asynchronous JS and XML, is a programming practice of building complex, dynamic webpages using a technology known as XMLHttpRequest------------

// ------------API - Application Programming Interface ==> with this API two softwares can communicate with each other and can transfer data easily------------

// ------------What is XMLHttpRequest ?------------
// ----------XMLHttpRequest (XHR) ovjs are used to interact with servers. You can retieve data from a URL without having to do a full page refresh. This enables a Web page to update just a part of a page without distrupting what the user is doing. XMLHttpRequest is used heavily in AJAX programming------------



// -------------JSON-------------

// -------------JSON .stringify turns a JS obj into JSON text and stores that JSON text in a string, eg:-------------

// var myObject = {key1:"some text", key2:true, key3:5}
// var objectAsString = JSON.stringify(myObject)
// console.log(objectAsString);


// var objectAsStringAsObject = JSON.parse(objectAsString)
// console.log(objectAsStringAsObject);



// -------------How to convert a string into a number ?-------------

// var n = +str
// var n = Number(str)
// var n = parseFloat(str)