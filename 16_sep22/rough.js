
var sum = function(array, i) {
    if(array.length === 0){
        return 0;
    }
  console.log(array[i]);
  if(i === array.length-1){
    return array[i];
  }
  return array[i] + sum(array, i+1);
};
console.log(sum([1, 2, 3, 4, 5, 6],0))





// function swap(){
// 	var arr= [ 1, 2, 3, 4, 5, 6];
// 	let N = sizeof(arr) / sizeof(arr[0]);
// 	let d = 2;

// console.log(arr, d, N);
// 	console.log(arr, N);

// 	return 0;

// function Rotate(arr, d, n)
// {

// let temp;
 

// let k = 0;

// 	for (let i = d; i < n; i++) {
// 		temp[k] = arr[i];
// 		k++;
// 	}


// 	for (let i = 0; i < d; i++) {
// 		temp[k] = arr[i];
// 		k++;
// 	}

// 	for (let i = 0; i < n; i++) {
// 		arr[i] = temp[i];
        
        
// 	}
// }


// function printTheArray(arr, n)
// {
// 	for (let i = 0; i < n; i++) {
// 		cout << arr[i] << " ";
//         console.log(arr[i]);
// 	}
// }


// }