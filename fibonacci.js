function fibonacci(){

    let fibLength=document.getElementById('quantity').value;
    fibLength=parseInt(fibLength);

    let fibonacciArr=[0,1];
    let nextElement;

    for (let i=2;i<fibLength;i++ ){

        function nextElementfun() {
            nextElement = fibonacciArr[i - 1] + fibonacciArr[i - 2];
            fibonacciArr.push(nextElement);
            return fibonacciArr;
        }
        nextElementfun();
    }

    fibonacciArr=JSON.stringify(fibonacciArr);

    var brk = fibonacciArr.replace("[","<br>").replace("]",'').split(',');
    var res = brk.join(" <br> ");
    let msg;
    msg=`The first ${fibLength} elements of Fibonacci Sequence are: ${res}`;
    document.getElementById("answer").innerHTML=msg;
}

