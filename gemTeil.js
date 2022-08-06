function gcd() {
    var numA = document.getElementById("numA").value;
    var numB = document.getElementById("numB").value;
    numA = parseInt(numA);
    numB = parseInt(numB);
    let divisor=[];

    divisors(numA);
    divisors(numB);

    function divisors(num) {
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
            divisor.push(i);
            }
        }
    }
    const commonDivisors = dividor => divisor.filter((item,index) => divisor.indexOf(item) !==index);
    let commonArr = commonDivisors(divisor);
    let maxDivisor=commonArr[commonArr.length-1];
    let msg= ` The greatest common divisor is ${maxDivisor}.`
    document.getElementById("answer").innerHTML=msg;

}