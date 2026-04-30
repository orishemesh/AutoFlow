import winston from 'winston';

const { combine, timestamp, printf, colorize, align, json } = winston.format;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message} ${info.stack || ''}`)
  ),
  transports: [
    new winston.transports.Console({
      format: combine(
        colorize({ all: true }),
      ),
    }),
  ],
});

// For production, you might want to log in JSON format
if (process.env.NODE_ENV === 'production') {
  logger.format = combine(
    timestamp(),
    json()
  );
}

export default logger;
