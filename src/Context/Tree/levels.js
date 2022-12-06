import { fibonacciUntil } from "../../utils/fibonacci";

export function getCurrentExperienceLevel(experience) {
	const f = fibonacciUntil(experience);
	return experience - f[f.length - 2];
}

export function getNextExperienceLevel(experience) {
	const f = fibonacciUntil(experience);
	return f[f.length - 1] - experience;
}

export function getCurrentLevel(experience) {
	return fibonacciUntil(experience).length - 1;
}
