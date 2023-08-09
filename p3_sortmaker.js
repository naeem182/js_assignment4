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



const x = [2, 4]
const r1 = sortMaker(x);
// const y = [3, 3]
// const z = [4, 3]
console.log(r1)
