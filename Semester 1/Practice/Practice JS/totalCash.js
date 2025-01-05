const targetPembelian = 1_500_000

//const cash = [10_000, 20_000, 30_000, 40_000, 50_000]

const userInvoice = [
    {
        nama: "rama",
        cash: 30_000
    },
    {
        nama: "dani",
        cash: 75_000
    },    
    {
        nama: "toni",
        cash: 15_000
    },
    {
        nama: "nando",
        cash: 135_000
    },
]

const totalCash = userInvoice.map(x => x.cash).reduce((prev, current) => prev + current, targetPembelian)
// const total = userInvoice.reduce((prev, current) => prev + current, targetPembelian)

const sortInvoiceAsc = userInvoice.map(x => x.cash).sort((a, b) => a - b)
const sortInvoiceDesc = userInvoice.map(x => x.cash).sort((a, b) => b - a)

console.log(totalCash);
console.log(sortInvoiceAsc);
console.log(sortInvoiceDesc);