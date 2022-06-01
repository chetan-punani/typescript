// classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }

  

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.client} ownes ${this.amount} form ${this.details}`;
    }
}

const invOne = new Invoice('mario','work on the website', 240);
const invTwo = new Invoice('mari','work on the website', 250);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});

