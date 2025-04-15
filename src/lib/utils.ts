export const parseRegExp = (regexpString: string, flags: string) => {
	if (regexpString.length === 0) {
		return null;
	}

	try {
		return new RegExp(regexpString, flags);
	} catch (err) {
		if (regexpString.length > 20) {
			console.error(`${regexpString} is not valid RegExp`, err);
		}
		return null;
	}
};
