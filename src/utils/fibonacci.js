export function fibonacciUntil(max) {
	const sequence = [1, 1];
	if (max <= 1) return [0, 1];
	do {
		sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
	} while (sequence[sequence.length - 1] < max);
	return sequence;
}
