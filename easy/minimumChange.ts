// you cant have change if current coin is greater than coin +1

export function nonConstructibleChange(coins: number[]) {
	coins.sort((a, b) => a-b);
  let change = 0;
	for(const coin of coins) {
		if(coin > change + 1) return change+1;
		change = change + coin;
	}
	
	return change+1;
}