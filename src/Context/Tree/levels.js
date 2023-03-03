import { fibonacciLevel } from "../../utils/fibonacci";

export function getCurrentExperienceLevel(experience) {
	const f = fibonacciLevel(experience);
	return experience - f[f.length - 2];
}

export function getNextExperienceLevel(experience) {
	const f = fibonacciLevel(experience);
	return f[f.length - 1] - getCurrentExperienceLevel(experience);
}

export function getCurrentLevel(experience) {
	return fibonacciLevel(experience).length - 1;
}

//    Ex: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811,
// Level: 1, 2, 3, 4, 5,  6,  7,  8,  9, 10,  11,  12,  13,  14,  15,   16,   17,   18,   19,    20,    21,    22,    23,    24,     25,     26,     27,
