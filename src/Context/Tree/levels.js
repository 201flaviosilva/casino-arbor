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
