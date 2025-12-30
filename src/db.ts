import { DatabaseSync } from "node:sqlite";
import path from "node:path";

const DBPATH = path.basename('../database.db');

export const database : DatabaseSync = new DatabaseSync('../database.db');
