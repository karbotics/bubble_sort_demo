/**************************************************************** 
* bubbleSort.js
* Created by Kar Beringer.
* Updated on 25 September 2017.
****************************************************************/

// Test the "connectivity" of the JavaScript and HTML files.
function testOne() {
	var testArea = document.getElementById("testArea");
	testArea.innerHTML = "Who pressed the button?";
}

/**
* Creates a list of randomly-generated integers.
* For each array element, i, 0 < i < 100
* @param {Number} N 10 < integer < 100
* @return {Array} list of N random integers
*/
function createIntegerArray(N) {

	// Sanitize the input, N.
	if (typeof N != "number") N = 50;
	else if ((N < 10) || (N > 100)) N = 50;
	else N = parseInt(N);

	// Create an empty array, A.
	var A = [];

	// Populate A with N "random" integers.
	for (var i = 0; i < N; i++) {
	    /**
		* Math.random() is a built-in JavaScript function
		* that returns a "random" number in the range [0,1),
		* i.e. 0 at a minumum but never exceeding 1.
		*/
		var element_i = parseInt((Math.random() * 100));
		A.push(element_i);
	}

	// Return the array to the function caller.
	return A;
}

// Test the createIntegerArray function.
function testTwo() {
	var testArea = document.getElementById("testArea");
    var output = createIntegerArray(15).toString();
	testArea.innerHTML = output;
}

/**
* Prints the contents of an array as paragraph text
* inside a web page element (e.g. a paragraph element).
* @param {Array} an array of objects
* @param {String} the identifier for the HTML element
*/
function printArray(A, outputElementID) {

    // Create a reference to the corresponding HTML element.
	var testArea = document.getElementById(outputElementID);

	// Ensure that A is an array of Number values.
	if (typeof A.length != "number") {
		testArea.innerHTML = "Error: A is not an array!";
		return;
	}
	if (typeof A[0] != "number") {
		testArea.innerHTML = "Error: A is not an array of numbers!";
		return;
	}

	// Create a text description of the array, A.
	var output = ("A[" + A.length + "] = { ");
	for (var i = 0; i < A.length; i++) {
		output += A[i];
		if (i < (A.length - 1)) output += ", ";
		else output += " ";
	}
	output += " }.";

	// Display the text description of the array on the web page.
	testArea.innerHTML = output;
}

// Test the createIntegerArray and printArray functions.
function testThree() {
	var array = createIntegerArray(20);
	printArray(array, "testArea");

    // Try to display the following message:
	// "Error: A is not an array!"
	// printArray(0, "testArea");

	// Try to display the following message:
	// "Error: A is not an array of numbers!"
	// printArray(["iio", "ooo"], "testArea");
}

/**
* Use the Bubble Sort algorithm to sort an array
* of integers in ascending order.
*
* // Pseudocode for the Bubble Sort Algorithm
* While the array is unsorted:
* 	For each pass from left to right through the array:
*   	// Compare each pair of adjacent array elements.
*   	If the current element is greater than the next element:
*   		Swap the elements.
*			Increment the number of swaps.
*  		End If.
* 	End For.
* 	Increment the number of passes.
*	If the array is sorted:
* 		Return the sorted array (and any relevant statistics).
* 	End if.
* End While.
*
* @param {Object[]} A an array of integers
* @return a tuple consisting of the sorted array,
* number of swaps made, and the number of passes made
* during sorting.
*/
function bubbleSort(A) {

	// Initialize the statistics variables.
	var numSwaps = 0, numPasses = 0;

	// Initialize the Boolean flags needed for the sort.
	var arrayIsSorted = false, swapOccurredDuringThisPass = false;

	// Sort the array. Assume that it is initially unordered. 
	while (!arrayIsSorted) {

		// For each pass from left to right through the array...
		for (var i = 0; i < A.length; i++) {

			// Compare each pair of adjacent array elements.
			// If the current element is greater than the next element...
			if ((i < (A.length - 1)) && (A[i] > A[i+1])) {

				// Swap the elements.
				var temp = A[i];
				A[i] = A[i+1];
				A[i+1] = temp;

				// Increment the number of swaps.
				numSwaps += 1;
				swapOccurredDuringThisPass = true;
			}
		}

		// Increment the number of passes.
		numPasses += 1;

		// If the array is sorted...
		if (!swapOccurredDuringThisPass) {

			// Return the sorted array (and any relevant statistics).
			return [A, numSwaps, numPasses];
		}

		// Continue sifting through the array until it is all ordered.
		swapOccurredDuringThisPass = false;
	}
}

// Test the createIntegerArray, printArray, and bubbleSort functions.
function testFour() {
	var array = createIntegerArray(20);

	// Print the unsorted array.
	printArray(array, "testArea");

	// Sort the array and gather statistics.
	var results = bubbleSort(array);

	// Print the array after it has been sorted.
	printArray(results[0], "testArea");
}

// Test all the functions in this file.
function testFive() {

	// Generate an array of 20 random integers.
	var array = createIntegerArray(20);

	// Print the description of the Unsorted Area.
	printArray(array, "testArea");

	// Sort the array and gather statistics.
	var results = bubbleSort(array);

	// Print the description of the Sorted Area
	printArray(results[0], "resultsArea");
}

// Respond to the button click.
function doTheSort() {

	// Generate an array of 15 random integers.
	var array = createIntegerArray(15);

	// Print the description of the Unsorted Area.
	printArray(array, "testArea");

	// Sort the array and gather statistics.
	var results = bubbleSort(array);

	// Print the description of the Sorted Area
	printArray(results[0], "resultsArea");
	var stats = ("Number of Swaps: " + results[1]);
	stats += (". Number of Passes: " + results[2] + ".");
	document.getElementById("statsArea").innerHTML = stats;
}




