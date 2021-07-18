import { db } from '../database/db';

const getDocs = async (data) => {
    const value = await db.searchDoc.searchDocInElastic(data);
    return value;
};

const searchDoc = {
    getDocs,
}

export { searchDoc } ;