function calculateRectangleArea (lenght, width) {
  let ans = lenght * width;
  if (ans < 0 || isNaN(ans)){
    return 'undefined';
  }else if (lenght <= 0 || width <= 0) {
    return 'undefined';
  } 
  else {
    return ans;
  }
}

function calculateTriangleArea (base, height) {
  let ans = base * height / 2;
  if (ans < 0 || isNaN(ans)){
    return 'undefined';
  }else if (base <= 0 || height <= 0) {
    return 'undefined';
  } else {
    return ans;
  }
}

function calculateCircleArea (radius){
  let ans = Math.PI * (radius * radius);
  if (ans < 0) {
    return 'undefined';
  }else if (radius <= 0) {
    return 'undefined';
  }else {
    return ans;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined