// A prime number has exactly two divisors: 1 and itself.
const isPrime = (numb) => {
    if (numb <= 1) return false;
    
    for (var i = 2; i <= numb-1; i++){
        if (numb % i == 0) return false;
    }
       
    return true;
}

console.log(isPrime(2));
