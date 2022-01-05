
function isSubsequence(s: string, t: string): boolean {
	let pointerA = 0;
	let pointerB = 0;
	while (pointerA < t.length) {
		if(t[pointerA] === s[pointerB]) {
			pointerA++;
			pointerB++;
		} else {
			pointerA++;
		}
	}
  return s.length === pointerB;
};

// Hello world yigog
