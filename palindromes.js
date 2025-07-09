const isPalindrome = s => {

    //lowercase
    s = s.toLowerCase();

    //remove non-alphanumeric characters
    s = s.replace(/[^a-z0-9]/g, '');

    //check if forward string is same as revers
    const reversed = s.split('').reverse().join('');

    //check equal
    return s === reversed;

};

console.log(isPalindrome('A man, a plan, a canal: Panama')); 
console.log(isPalindrome("hello"));