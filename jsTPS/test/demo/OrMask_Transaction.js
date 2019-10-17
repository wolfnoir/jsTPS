class OrMask_Transaction {
    constructor(initNum, initIntNum, initMask){
        this.num = initNum;
        this.intNum = initIntNum;
        this.mask = initMask;
    }

    
    doTransaction() {
        this.num.orMask(this.mask);
        let newNum = this.num.getNum();
        let result = document.getElementById("result");
        if(newNum === NaN){
            result.innerHTML = 0;
        }
        else{
            result.innerHTML = newNum;
        }
    }

    undoTransaction() {
        this.num.setNum(this.intNum);
        let newNum = this.num.getNum();
        let result = document.getElementById("result");
        if(newNum === NaN){
            result.innerHTML = 0;
        }
        else{
            result.innerHTML = newNum;
        }
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        return "Or Mask " + this.mask;
    }
}