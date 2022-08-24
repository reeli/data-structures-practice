function Activity(amount) {
  this.amount = amount
}

Activity.prototype.setAmount = function (value) {
  if (value <= 0) {
    return false
  }
  this.amount = value;
  return true;
}

Activity.prototype.getAmount = function () {
  return this.amount;
}

function Payment(amount, receiver) {
  Activity.call(this) //  call super constructor
  this.amount = amount;
  this.receiver = receiver;
}

function Refund(amount, sender) {
  Activity.call(this)
  this.amount = amount;
  this.sender = sender;
}

Refund.prototype = Object.create(Activity.prototype)
Refund.prototype.constructor = Refund;

// 如果先给 Payment.prototype 赋值（36行），再继承（33行），会导致调用 Payment.getReceiver 方法时，找不到该方法，因为继承时将 Payment.prototype 给覆写了
Payment.prototype = Object.create(Activity.prototype)
Payment.prototype.constructor = Payment; // 如果不将 Payment.prototype.constructor 的值设置为 Payment，那么它将会采用 parent（也就是 Activity） 的 prototype.constructor

Payment.prototype.setReceiver = function (receiver) {
  this.receiver = receiver
}

Payment.prototype.getReceiver = function () {
  return this.receiver
}

Refund.prototype.setSender = function (sender) {
  this.sender = sender
}

Refund.prototype.getSender = function () {
  return this.sender
}

const b = new Payment(5000, "John")
b.setAmount(4000)
b.setReceiver("John B")
console.log(b.getReceiver(), 'b.getReceiver()')
