function Queue(){
  this.head = null;
  this.tail = null;
}
function Stack(){
  this.head = null;
  this.tail = null
}
function Node(value){
  this.value = value;
  this.next = null;
  this.prev = null;
}

Queue.prototype.add = function(val){
  var curNode = new Node(val);
  if(!this.head){
    this.head = this.tail = curNode;
  } else{
    this.tail.next = curNode;
    this.tail = curNode;
  }
}
Queue.prototype.remove = function(){
  if(!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if(!this.head) this.tail = null;
  return val;
}
Queue.prototype.peek = function(){
  if(this.head) return this.head.value;
  return null;
}

Stack.prototype.add = function(val){
  var curNode = new Node(val);
  if(!this.head){
    this.head = this.tail = curNode;
  } else{
    this.tail.next = curNode;
    curNode.prev = this.tail;
    this.tail = curNode;
  }
}
Stack.prototype.remove = function(){
  if(!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if(!this.tail) this.head = null;
  return val;
}
Stack.prototype.peek = function(){
  if(this.tail) return this.tail.value;
  return null;
}


// Test speeds of push and shift (Queue)
var testArr = [];
var queue = new Queue();
var stack = new Stack();
var startD, startT, endD, endT;
var items = 200000;

console.log("Test Array Push and Shift");
console.log("Push speed");
startD = new Date();
startT = startD.getTime();
for(var i = 0; i < items; i++){
  testArr.push(i);
}
endD = new Date();
endT = endD.getTime();
console.log((endT - startT) + " Milliseconds");
console.log("Shift speed");
startD = new Date();
startT = startD.getTime();
for(var i = 0; i < items; i++){
  testArr.shift();
}
endD = new Date();
endT = endD.getTime();
console.log((endT - startT) + " Milliseconds");
console.log(" ");


console.log("Test Queue Push and Shift");
console.log("Push speed");
startD = new Date();
startT = startD.getTime();
for(var i = 0; i < items; i++){
  queue.add(i);
}
endD = new Date();
endT = endD.getTime();
console.log((endT - startT) + " Milliseconds");
console.log("Shift speed");
startD = new Date();
startT = startD.getTime();
for(var i = 0; i < items; i++){
  queue.remove();
}
endD = new Date();
endT = endD.getTime();
console.log((endT - startT) + " Milliseconds");
console.log(" ");
console.log(" ");
console.log(" ");



testArr = [];
console.log("Test Array Push and Pop");
console.log("Push speed");
startD = new Date();
startT = startD.getTime();
for(var i = 0; i < items; i++){
  testArr.push(i);
}
endD = new Date();
endT = endD.getTime();
console.log((endT - startT) + " Milliseconds");
console.log("Pop speed");
startD = new Date();
startT = startD.getTime();
for(var i = 0; i < items; i++){
  testArr.pop();
}
endD = new Date();
endT = endD.getTime();
console.log((endT - startT) + " Milliseconds");
console.log(" ");


console.log("Test Stack Push and Pop");
console.log("Push speed");
startD = new Date();
startT = startD.getTime();
for(var i = 0; i < items; i++){
  stack.add(i);
}
endD = new Date();
endT = endD.getTime();
console.log((endT - startT) + " Milliseconds");
console.log("Pop speed");
startD = new Date();
startT = startD.getTime();
for(var i = 0; i < items; i++){
  stack.remove();
}
endD = new Date();
endT = endD.getTime();
console.log((endT - startT) + " Milliseconds");
console.log(" ");
console.log(" ");
console.log(" ");
