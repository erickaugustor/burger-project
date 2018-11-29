import winston from 'winston';

export default () => winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	transports: [
		new winston.transports.File({
			filename: 'erros.log',
			level: 'error',
		})
	]
}, {
	level: 'debug',
	handleExceptions: true,
	json: false,
	colorize: true,
});