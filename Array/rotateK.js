/*function rotateRight(arr, k) {
  const n = arr.length;
  k = k % n; // handle k > n
  return arr.slice(n - k).concat(arr.slice(0, n - k));
}
console.log(rotateRight([1, 2, 3, 4, 5], 2))*/

/*function rotateLeft(arr, k) {
  const n = arr.length;
  k = k % n;
  return arr.slice(k).concat(arr.slice(0, k));
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2))*/

/*function rotateRightInPlace(arr, k) {
  const n = arr.length;
  k = k % n;

  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);

  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

console.log(rotateRightInPlace([1, 2, 3, 4, 5], 2));*/


f/*unction rotateLeftInPlace(arr, k) {
  const n = arr.length;
  k = k % n;

  reverse(arr, 0, n - 1);
  reverse(arr, 0, n-k-1);
  reverse(arr, n-k, n - 1);

  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

console.log(rotateLeftInPlace([1, 2, 3, 4, 5], 2));*/

