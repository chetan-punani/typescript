// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " ownes ").concat(this.amount, " form ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the website', 240);
var invTwo = new Invoice('mari', 'work on the website', 250);
console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
