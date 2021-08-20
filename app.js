const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))

class Account { // declare
    constructor(balance) {
        this.balance = balance
    }

    checkBalance() {
        console.log(this.balance)
    }

    deposit(cash) {
        this.balance += cash
    }

    withdraw(cash) {
        this.balance -= cash
    }
    
}

let myAccount = new Account(30000) // initialize with 30000 of balance

app.get('/', (req, res) => {
    res.render('main.ejs')
})

app.get('/balanceInquiry', (req, res) => {
    res.render('balanceInquiry', {
        balance : myAccount.balance
    })
})

app.post('/deposit', (req, res) => {
    myAccount.deposit(parseInt(req.body.deposit))
    res.render('balanceInquiry', {
        balance : myAccount.balance
    })
})

app.post('/withdraw', (req, res) => {
    myAccount.withdraw(parseInt(req.body.withdraw))
    res.render('balanceInquiry', {
        balance : myAccount.balance
    })
})

app.listen(3000, ()=> {
    console.log('server running!')
})