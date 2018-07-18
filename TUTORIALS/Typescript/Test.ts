

var sumAll = function(...nums: number[]):
void{
	var sum = nums.reduce((a,b) => a+b, 0);
}

sumAll(1,2,3,4,5,6);