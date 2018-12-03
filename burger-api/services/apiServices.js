import fs from 'fs';

const postDataJSON = (data, local='./utils/data.json') => {
	fs.writeFile(local, JSON.stringify(data), 'utf8', (err) => {
		if (err) {
			return -1;
		}
	});

	return 1;
};

export {
	postDataJSON,
};