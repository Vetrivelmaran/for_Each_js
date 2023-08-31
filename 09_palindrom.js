function isPalindrom(str){

    return str===str.split('').reverse().join('');

}
let a='malayalam'
let b='amma'
if(isPalindrom(a) && isPalindrom(b)){
    console.log(`yes ${a} ${b} both are palindroms`)

}
else{
    console.log('not ')
}