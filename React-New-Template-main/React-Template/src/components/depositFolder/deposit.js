import React from "react";

export default class Deposit extends React.Component {
    inputDeposit = Number;

    depositMoneyButton = () => {
        const click = () => {
            this.props.depositmethod(this.inputDeposit)
            

        }
        return (
            <button onClick={click}>DEPOSIT</button>
        )

    }
    render() {
        return (
            <div className="DepositContainer">
                <div className="DepositDIV" >
                    <input type="number" name="number" placeholder="Lägg till pengar"
                        onChange={(event) => this.inputDeposit = +event.target.value} />

                    {this.depositMoneyButton()}

                </div>
            </div>
        )
    }
}
