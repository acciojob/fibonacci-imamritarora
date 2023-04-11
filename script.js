function fibonacci(num) {
// your code here
	var fib=1;
	for (var i=0;i<num;i++){
	fib=fib*i}
	return fib;
}

module.exports = fibonacci;
