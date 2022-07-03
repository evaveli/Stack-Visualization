/*
The stack is implemented using arrays.
*/
//access all html elements by their id
let list = document.getElementById('list');
let list1 = document.getElementById('list1');
let text = document.getElementById('text');
let push = document.getElementById('push');
let stack = document.getElementById('stack');
let peek = document.getElementById('peek_el');
//first, set the HTML content empty 
list1.innerHTML = '';
//define a class Stack which extends the Array constructor
class Stack extends Array {
	constructor(...elem) {
		super(...elem);
	}
	//add the  new elements to the beginning of the array.
	unshift_element(element) {
		super.unshift(element);
	}
	//remove the elements from DOM
	shift_element() {
		//insert a message if the stack is empty
		if (this.length === 0) {
			stack.innerHTML = 'Stack Is Empty, you can push elements again 😎';
		} else if(this.length > 0) {
			let element = list.childNodes[0]; //initialize 'elements' with the first child->first element of stack
			super.shift(); //remove the first element of the array
			list.removeChild(element); //remove the first elements from list, the element's child (remove it from DOM)
			return element;
		}
	}
	//display in DOM the inserted elements
	display_elements(s2) {
		for (let i = 0; i < s2.length; i++) {
			let x = document.createElement('li'); //create an HTML list element
			let t = document.createTextNode(s2[i]); //create the text node with the specific index
			x.appendChild(t); //append in the list element the input
			list.appendChild(x);//append the item created to the list
		}
	}
}
const s1 = new Stack(); //create an object of the class Stack (by default is empty);
function Push() {
	let info = text.value; //get the input from the user and store it to info
	if (info == '' ) { //check if the user attempts to insert an empty value
		alert('Empty Values cannot be inserted');
	}
	//check if the stack is full -> allowed the stack to only have 10 elements 
	else if (s1.length == 10) {
		alert("stack is full"); //create an alert
	}
	else {
		s1.unshift_element(info); //call the unshift method (which inserts elements at the beginning)
		let y = document.createElement('li'); //create a <li></li> element
		let u = document.createTextNode(info); //create the text node
		y.appendChild(u);//append the element inserted to the list
		list.appendChild(y);//append list to the DOM->append it the stack elemets div
		list.insertBefore(y, list.childNodes[0]);//Move the last element from one list to the beginning of another
	}
	text.value = ''; //empty the input field
}
//create the function to remove the elements from stack
function Pop() {
		let value = s1.shift_element().textContent; //call the shift_element method element to remove the first element
		let k = document.createElement('li'); //creates the <li></li> element
		let l = document.createTextNode(value);//insterts the value 
		k.appendChild(l);//append the value to the the list element
		list1.appendChild(k); //append the list element to the popped element div
}
function Peek() {
	if (s1.length == 0) {
		alert("Cannot peek element.");
		exit;
	}
	else if (s1.length > 0) {
	let top = s1[0];
	let t = document.createElement('li');
	let l = document.createTextNode(top);
	t.appendChild(l);
	peek.appendChild(t);
	}
}
function Clear(){
	list.remove();
	list = [];
}