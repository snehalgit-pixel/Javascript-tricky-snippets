// Code for container with most water using O(log n)

function maxArea(arr, lengthOfArray) {
    let lowerLimit = 0;
    let upperLimit = lengthOfArray - 1;
    let maxArea = 0.0;
    if (lengthOfArray <= 1) {

    }
    else if (lengthOfArray == 2) {
        maxArea = Math.min(arr[lowerLimit], arr[upperLimit])
    }
    else {
        while (lowerLimit < upperLimit) {
            maxArea = Math.max(maxArea, (Math.min(arr[lowerLimit], arr[upperLimit])*(upperLimit - 1)));
            if (arr[lowerLimit] < arr[upperLimit]) {
                lowerLimit += 1;
            }
            else {
                upperLimit -= 1;
            }
        }
    }
    return maxArea;
}

const heights = [1,1];
console.log(maxArea(heights, heights.length));