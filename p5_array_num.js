function canPay(changeArray, totalDue) {


    if (changeArray.length === 0) {
        console.log("array  element is empty")
    }
    else if (changeArray[0] === "") {
        return "First element of the array is empty";
    }
    let sum = 0;
    for (let i of changeArray) {
        sum += i;
    }

    if (sum >= totalDue) {
        return true;
    }
    else {
        return false;
    }




}
const x = [2, 4, 1];
const cheaps_price = 10;
const output1 = canPay(x, cheaps_price)
console.log(output1)