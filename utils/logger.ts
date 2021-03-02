import { createLogger, transports, format } from 'winston';

export default createLogger({
    level: 'info',
    format: format.json(),
    defaultMeta: { service: 'graphql-service' },
    transports: [
        new transports.Console({ format: format.simple() })
    ],
});