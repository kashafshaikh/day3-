
// Question 5:
 
// Remove Duplicates from Array
// Write a TypeScript function named removeDuplicates that takes an array of numbers and returns
//  a new array with all duplicate elements removed. 
// *Do not use built-in methods* like Set.

// Requirements:
// - The function should iterate through the array and check for duplicates manually.
// - You can use additional arrays or variables to keep track of seen elements.
// - Do not use any built-in methods like filter, reduce, or Set.

// Example:
// typescript
// function removeDuplicates(arr: number[]): number[] {
//     // Your code here
// }

// // Example usage:
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates([10, 10, 20, 30, 30]));  // Output: [10, 20, 30]

    function removeDuplicates(num: number[]): number[] {
        let seen: number[] = [];  
        let result: number[] = [];  
        for (let i = 0; i < num.length; i++) {  
            let arr = num[i];
            let isDuplicate = false;

            for (let j = 0; j < seen.length; j++) {
                if (seen[j] === arr) {
                    isDuplicate = true;
                    break; 
                }
            }
            if (!isDuplicate) {
                seen.push(arr);  
                result.push(arr); 
            }
        }
        return result;
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
    console.log(removeDuplicates([10, 10, 20, 30, 30]));  // Output : [10, 20 ,30 ]



// Question 6:
//  Find the Second Largest Number in an Array
// Write a TypeScript function named findSecondLargest that takes an array of numbers and returns
//  the second largest number in the array. *Do not use built-in methods* like sort.

// Requirements:
// - The function should manually find the largest and second largest numbers by iterating through
//  the array.
// - You can use additional variables to keep track of the largest and second largest numbers.
// - Do not use any built-in methods like sort.

// Example:
// typescript
// function findSecondLargest(arr: number[]): number {
//     // Your code here
// }

// // Example usage:
// console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4
// console.log(findSecondLargest([10, 20, 30, 15, 25])); // Output: 25

function findSecondLargest(arr: number[]): number {
    if (arr.length < 2) {
        throw new Error("Array should have at least two elements.");
    }
    // Initialize variables
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            // Update secondLargest before updating largest
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            // Update secondLargest only if num is less than largest
            secondLargest = num;
        }
    }
    // Check if we found a valid second largest number
    if (secondLargest === -Infinity) {
        throw new Error("No second largest number found.");
    }
    return secondLargest;
}
console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4SS
console.log(findSecondLargest([1, 2, 3, 4, 5, 6, 7, 8])); // Output: 7
console.log(findSecondLargest([10, 20, 30, 15, 25])); // Output: 25
console.log(findSecondLargest([5, 5, 5, 5, 5])); // Output: Error: No second largest number found.





