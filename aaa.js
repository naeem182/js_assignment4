function cubeNumber(number) {

    const result = number * number * number;
    return result;
}

function matchFinder(string1, string2) {

    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "please provide two string input";
    }
    if (string1.includes(string2)) {
        return true;
    }
    else
        return false;

}


function sortMaker(arr) {

    len = arr.length;

    if (arr[0] === arr[1]) {

        return "equal";
    }

    else if (arr[0] < 0 || arr[1] < 0) {

        return "Invalid Input";
    }
    else if (typeof arr[0] === 'number' && typeof arr[1] === 'number') {

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (arr[j] < arr[j + 1]) {

                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
    else {

        return "Invalid Input";
    }

}

function findAddress(Object) {
    const street = Object.street || '__';
    const house = Object.house || '__';
    const society = Object.society || '__';

    return +street + ',' + house + ',' + society;


}

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