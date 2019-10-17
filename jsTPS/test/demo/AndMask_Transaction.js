
class AndMask_Transaction {

    constructor(initNum, initIntNum, initMask){
        // KEEP THESE FOR LATER
        this.num = initNum;
        this.intNum = initIntNum;

        //mask being used on the num
        this.mask = initMask;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        this.num.andMask(this.mask);
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
     * As the reverse of do, this method substracts from num.
     */
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
        return "And Mask " + this.mask;
    }
}