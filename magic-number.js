function magicNumber() {
    var originNumStr = document.getElementById('originNum').value;
    originNum = parseInt(originNumStr);
    sumArr();

    function sumArr() {
        let sum1 = 0;
        let originNumArr = Array.from(String(originNum), Number);
        let numArr=[];

        digitNum()

        function digitNum() {
            for (let i = 0; i < originNumArr.length; i++){
                sum1 += originNumArr[i];
                originNum = sum1;
                numArr = Array.from(String(originNum), Number);
            }
            originNumArr=numArr
            sum1=0;
        }
        while(originNumArr.length>1){
            digitNum()
        }
    }
    let msg;
    if (originNum===1){
        msg=`Your number is a magic number! Final sum of digits:${originNum}.`;
    }else{
        msg=`It's not a magic number! Final sum of digits: ${originNum}.`;
    }
    document.getElementById('answer').innerHTML=msg;

}
