import React, { Fragment } from "react";
import Deposit from "./components/depositFolder/deposit";
import Withdraw from "./components/withdrawFolder/withdraw";
class App extends React.Component {
  data = localStorage.getItem("myData") ?
    JSON.parse(localStorage.getItem("myData")) : {
      budget: 0,
      withdraw: 0,
      balance: 0,
      expensesList: []
    }
  depositmethod = (number) => {
    this.data.budget = this.data.budget + number;
    this.balanceMethod(number)
  }
  inputList = (Myobjekt) => {
    if (this.data.balance === 0) {
      alert("inga pengar på kontot ")
      return
    }
    if (this.data.balance < Myobjekt.cash) {
      alert("för lite pengar på kontot")
      return
    }
    let ifItemExist = false;
    this.data.expensesList.forEach(value => {
      if (value.item === Myobjekt.item) {
        ifItemExist = true;
      }
    });
    if (ifItemExist) {
      alert("finns redan i listan")
      return
    }
    this.data.expensesList.push(Myobjekt);
    this.data.withdraw = this.data.withdraw + Myobjekt.cash;
    this.balanceMethod(-Myobjekt.cash)
  }
  balanceMethod = (number) => {
    this.data.balance = this.data.balance + number;
    localStorage.setItem("myData", JSON.stringify(this.data))
    window.location.reload()
  }
  render() {
    const allData = localStorage.getItem("myData")
      ? JSON.parse(localStorage.getItem("myData")) : this.data
    return (
      <Fragment>
        <div className="TextContainer">
          <h2>Budget:{allData.budget}</h2>
          <h2>Withdraw:{allData.withdraw}</h2>
          <h2>Balance:{allData.balance}</h2>
          <h2>List: {allData.expensesList.map((value) => {
            return (
              <div className="ListItem">
              <h6> {value.item} = {value.cash} :-</h6></div>)
          })}</h2></div>
        <div className="TextDIV"></div>
        <Deposit depositmethod={this.depositmethod} />
        <Withdraw inputList={this.inputList} />
      </Fragment>
    )
  }
} export default App;