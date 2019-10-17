/**
 * AddToNum_Transaction.js
 * 
 * This class is a transaction that can be executed and undone. It
 * can be stored in the jsTPS transaction stack and must be constructed
 * with all the data necessary to perform both do and undo.
 * 
 */

class AddToNum_Transaction {
    constructor(initNum, numToAdd){
        this.num = initNum; //{Num}
        this.amountToAdd = numToAdd; //{Number}
    }

    doTransaction(){
        let oldNum = this.num.getNum();
        let newNum = oldNum + this.amountToAdd.getNum();
        this.num.setNum(newNum);
        let result = document.getElementById("result");
        if(newNum === NaN){
            result.innerHTML = 0;
        }
        else{
            result.innerHTML = newNum;
        }
        console.log(newNum);
    }

    undoTransaction() {
        let oldNum = this.num.getNum();
        let newNum = oldNum - this.amountToAdd.getNum();
        this.num.setNum(newNum);
        let result = document.getElementById("result");
        if(newNum === NaN){
            result.innerHTML = 0;
        }
        else{
            result.innerHTML = newNum;
        }
    }

    toString() {
        return "Add " + this.amountToAdd;
    }
}