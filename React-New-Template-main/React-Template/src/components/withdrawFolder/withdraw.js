import React, { Fragment } from "react";


export default class Withdraw extends React.Component {

    inputObjekt = {
        item: "",
        cash: 0
    }

    SubmitButton = () => {
        const click = () => {
            this.props.inputList(this.inputObjekt)
           
        }

        return (
            <button onClick={click}>WITHDRAW</button>

        )
    }
    render() {
        return (
            <Fragment>

                <div className="WithdrawContainer" >
                    <div className="WithdrawDIV">
                        <input type="text" id="itemID" name="itemName" placeholder="Vad vill du köpa?" 
                        onChange={(event) => this.inputObjekt.item =  event.target.value} />
                        <input type="number" name="withdraw" placeholder="Kostnad"
                         onChange={(event) => this.inputObjekt.cash = +event.target.value} />

                        {this.SubmitButton()}
                    </div>
                </div>

            </Fragment>
        )
    }
}