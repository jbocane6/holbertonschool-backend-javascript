export default function createIteratorObject(report) {
	const tmpArray = [];
  for (const idx of Object.keys(report.allEmployees)) {
		for (const idx2 of Object.values(report.allEmployees[idx])) {
			tmpArray.push(idx2);
		}
	}
	return Object.values(tmpArray);
}
