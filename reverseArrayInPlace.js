/* Without pushing elements into a new array and returning that array
   Without using Array.reverse()
*/
function reverseArrayInPlace(arr) {
  for (i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    //       the counterpart
    arr[i] = arr[arr.length - i - i]; // i is the one that takes us places back
    arr[arr.length - 1 - i] = tempVar;
  }

  return arr;
}
