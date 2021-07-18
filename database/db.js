import { searchDoc } from './searchDoc';
import { insertDoc } from './insertTextInElastic';

const db = {
    searchDoc,
    insertDoc
};

export { db };