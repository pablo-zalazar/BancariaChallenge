import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 4000;
export const DB_NAME = process.env.DATABASE_NAME;
export const DB_USER = process.env.DATABASE_USER;
export const DB_PASSWORD = process.env.DATABASE_PASSWORD;
