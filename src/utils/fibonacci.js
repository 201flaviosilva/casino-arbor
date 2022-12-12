export function fibonacciLevel(max) {
	const sequence = [1, 2];

	if (max <= 2) return sequence;

	do {
		sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
	} while (sequence[sequence.length - 1] < max);

	return sequence;
}
