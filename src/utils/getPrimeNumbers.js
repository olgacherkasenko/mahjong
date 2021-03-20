const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }

  const maxDivider = Math.sqrt(num);

  for (let i = 2; i <= maxDivider; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
const getPrimeNumbers = (minValue, maxValue) => {
  const primeNumbers = [];

  while (minValue < maxValue) {
    if (isPrimeNumber(minValue)) {
      primeNumbers.push(minValue);
    }

    minValue++;
  }

  return primeNumbers;
};

export default getPrimeNumbers;
