//test 1
function power(a, n) {
  return a ** n
}
console.log(power(3, 5));

//test 2
function mean(a, b) {
  let arifmetig = (a + b) / 2
  let geometrig = (a * b) ** (1 / 2)

  return [arifmetig, geometrig]
}

console.log(mean(12, 48));

//test 3
function sing(n) {
  if (n > 0) {
    console.log('1');
  } else if (n < 0) {
    console.log('-1');
  } else {
    console.log(n);
  }
}

sing(10)

//test 4
function numberOfRoots(A, B, C) {
  let d = B ** 2 - 4 * A * C
  if (d > 0) {
    console.log('2ta');
  } else if (d < 0) {
    console.log('0ta');
  } else {
    console.log('1ta');
  }
}

numberOfRoots(1, -6, 9)

//test 5
function areaCircle(R) {
  let pi = 3.14
  console.log(pi * R ** 2);
}

areaCircle(5)

//test 6
function sumRange(A, B) {
  let sum = 0
  if (A > B) {
    console.log('0');
  } else {
    for (let index = A + 1; index < B; index++) {
      sum += index
    }
    console.log(sum)
  }
}
sumRange(8, 14)

//test 7
function calc(A, B, S) {
  let qoshish = '+';
  let ayirish = '-';
  let bolish = '/';
  let kopytirish = '*';

  if (S === qoshish) {
    return A + B;
  } else if (S === ayirish) {
    return A - B;
  } else if (S === bolish) {
    return A / B;
  } else if (S === kopytirish) {
    return A * B;
  } else {
    return '0';
  }
}
console.log(calc(10, 15, '*'));

//test 8
function isEven(K) {
  if (K % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(10));

//test 9
function sortABC(a, b, c) {
  let smallest, middle, largest;

  if (a <= b && a <= c) {
    smallest = a;
    if (b <= c) {
      middle = b;
      largest = c;
    } else {
      middle = c;
      largest = b;
    }
  } else if (b <= a && b <= c) {
    smallest = b;
    if (a <= c) {
      middle = a;
      largest = c;
    } else {
      middle = c;
      largest = a;
    }
  } else {
    smallest = c;
    if (a <= b) {
      middle = a;
      largest = b;
    } else {
      middle = b;
      largest = a;
    }
  }

  return smallest + ', ' + middle + ', ' + largest;
}

console.log(sortABC(10, 5, 8));

//test 10
function isPowerN(K, N) {
  if (K <= 0 || N <= 0) {
    return false;
  } else if (K === 1) {
    return true;
  } else if (K % N === 0) {
    return isPowerN(K / N, N);
  } else {
    return false;
  }
}
console.log(isPowerN(16, 4));

//test 11
function isPrime(N) {
  let isOddExist = false;
  let num = N;

  while (num > 0) {
    let digit = num % 10;
    if (digit % 2 === 1) {
      isOddExist = true;
      console.log(digit);
      break;
    }
    num = Math.floor(num / 10);
  }

  if (isOddExist) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(7));

//test 12
function countOddDigits(num) {
  let count = 0;
  while (num > 0) {
    let digit = num % 10;
    if (digit % 2 === 1) {
      count++;
    }
    num = Math.floor(num / 10);
  }
  return count;
}

function digitNth(K, N) {
  let count = 0;
  for (let i = K; i <= N; i++) {
    count += countOddDigits(i);
  }
  return count;
}

console.log(digitNth(1, 7));

//test 13
function digitCount(num) {
  return num.toString().length;
}

function digitNth(K, N) {
  if (K < Math.pow(10, N - 1)) {
    return -1;
  }

  let count = digitCount(K);
  if (N > count) {
    return -1;
  }

  let num = Math.floor(K / Math.pow(10, count - N));
  return num % 10;
}

console.log(digitNth(105782, 5));
console.log(digitNth(1057, 5));

//test 14
function inverseNumber(N) {
  let reversedNum = '';

  while (N > 0) {
    reversedNum += N % 10;
    N = Math.floor(N / 10);
  }

  return Number(reversedNum);
}

console.log(inverseNumber(56814));

//test 15
function inverseNumber(N) {
  let reversedNum = '';

  for (let i = String(N).length - 1; i >= 0; i--) {
    reversedNum += String(N)[i];
  }

  return Number(reversedNum);
}

function isPalindrom(N) {
  return N === inverseNumber(N);
}

console.log(isPalindrom(1678761));

//test 16
function factorial(N) {
  if (N < 0) {
    return 1;
  }

  let result = 1;

  for (let i = 1; i <= N; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));

//test 17
function getSum3(N) {
  let sum = 0;

  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(getSum3(15));

//test 18
function sumOddEven(N) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
      sumEven += i;
    } else {
      sumOdd += i;
    }
  }

  return `${sumEven}, ${sumOdd}`;
}

console.log(sumOddEven(10));

//test 19
function invertTime(H, M, S) {
  let T = H * 3600 + M * 60 + S;
  return T;
}

console.log(invertTime(0, 6, 40));

//test 20
function decTime(H, M, S) {
  let T = H * 3600 + M * 60 + S;
  let T_dec = T - 1;
  let H_dec = Math.floor(T_dec / 3600);
  let M_dec = Math.floor((T_dec - H_dec * 3600) / 60);
  let S_dec = T_dec - H_dec * 3600 - M_dec * 60;
  return `${H_dec.toString().padStart(2, '0')}:${M_dec.toString().padStart(2, '0')}:${S_dec.toString().padStart(2, '0')}`;
}

console.log(decTime(0, 6, 40));

//test 21
function isLeapYear(Y) {
  if (Y % 4 !== 0) {
    return false;
  } else if (Y % 100 !== 0) {
    return true;
  } else if (Y % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2021));

//test 22
function monthDays(M, Y) {
  let leapYear = isLeapYear(Y);
  switch (M) {
    case 1:
      return 31;
    case 2:
      return leapYear ? 29 : 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;
    default:
      return null;
  }
}

console.log(monthDays(2, 2020));
console.log(monthDays(3, 2021));

//test 23
function prevDate(D, M, Y) {
  let daysInMonth = monthDays(M, Y);

  if (D > 1) {
    D = D - 1;
  } else {
    if (M > 1) {
      M = M - 1;
      D = monthDays(M, Y);
    } else {
      M = 12;
      D = 31;
      Y = Y - 1;
    }
  }

  return `${D.toString().padStart(2, '0')}.${M.toString().padStart(2, '0')}.${Y}`;
}

console.log(prevDate(10, 3, 2022));

//test 24
function nextDate(D, M, Y) {
  let daysInMonth = monthDays(M, Y);

  if (D < daysInMonth) {
    D = D + 1;
  } else {
    if (M < 12) {
      M = M + 1;
      D = 1;
    } else {
      M = 1;
      D = 1;
      Y = Y + 1;
    }
  }

  return `${D.toString().padStart(2, '0')}.${M.toString().padStart(2, '0')}.${Y}`;
}

console.log(nextDate(10, 3, 2022));

//test 25
function getDividersNumberAndSum(N) {
  let count = 0;
  let sum = 0;

  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      count++;
      sum += i;
    }
  }

  return `${count}, ${sum}`;
}

console.log(getDividersNumberAndSum(7));