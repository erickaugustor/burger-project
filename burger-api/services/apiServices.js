import fs from 'fs';

const postDataJSON = (data) => {
	fs.writeFile('./utils/data.json', JSON.stringify(data), 'utf8', (err) => {
		if (err) {
			return -1;
		}
	});

	return 1;
};

export {
	postDataJSON,
};