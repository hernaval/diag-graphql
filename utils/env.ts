import { load } from 'ts-dotenv';

const env = load({
    SUPER_ADMIN: String,
    SUPER_ADMIN_EMAIL: String,
    SUPER_ADMIN_PWD: String,
    PORT: Number,
    NODE_ENV: [
        'production' as const,
        'development' as const,
    ],
    JWT_SECRET : String
});

export default env;