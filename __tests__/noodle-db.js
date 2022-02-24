const db = require('../server/db/db')
import regeneratorRuntime from 'regenerator-runtime';

describe ('Noodle DB Unit Tests', () => {
    beforeAll(done => {
        done()
      })

      afterAll(done => {
        db.close();
        done()
      })
    //can add does not result in error
    describe ('read categories', () => {
        it ('returns an object', async() => {
            const data = await db.query('SELECT * FROM categories', []);
            const result = (typeof data === 'object');
            expect(result).toEqual(true);
        })
        it ('returns columns _id and name', async() => {
            const data = await db.query('SELECT * FROM categories')
            const rows = data.rows
            const headings = (rows) => {
                rows.forEach((row)=>{
                    if (!row._id || !row.name) return false;
                })
                return true;
            }
            const result = headings(rows)
            expect(result).toEqual(true)
        })
    })
    describe ('read users', () => {
        it ('returns an object', async() => {
            const data = await db.query('SELECT * FROM users', []);
            const result = (typeof data === 'object');
            expect(result).toEqual(true);
        })
        it ('returns columns _id and name', async() => {
            const data = await db.query('SELECT * FROM users')
            const rows = data.rows
            const headings = (rows) => {
                rows.forEach((row)=>{
                    if (!row._id || !row.name || !row.contribution || !row.points) return false;
                })
                return true;
            }
            const result = headings(rows)
            expect(result).toEqual(true)
        })
    })
    describe ('read cards', () => {
        it ('returns an object', async() => {
            const data = await db.query('SELECT * FROM cards', []);
            const result = (typeof data === 'object');
            expect(result).toEqual(true);
        })
        it ('returns columns _id and name', async() => {
            const data = await db.query('SELECT * FROM cards')
            const rows = data.rows
            const headings = (rows) => {
                rows.forEach((row)=>{
                    if (!row._id || !row.question || row.answer || row.category_id || row.creator) return false;
                })
                return true;
            }
            const result = headings(rows)
            expect(result).toEqual(true)
        })
    })
    describe ('create categories', () => {
        it ('returns an object', async() => {
            const data = await db.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', ['LeetCode']);
            const result = (typeof data === 'object');
            expect(result).toEqual(true);
        })
        it ('returns correct name', async() => {
            const data = await db.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', ['Jest']);
            const rows = data.rows[0]
            const result = (rows.name === 'Jest')
            expect(result).toEqual(true)
        })
    })

    describe ('delete categories', () => {
        it ('delete column successfully', async() => {
            const data = await db.query('DELETE FROM categories WHERE name = $1', ['LeetCode']);
            const newTable = await db.query('SELECT * FROM categories')
            const rows = newTable.rows;
            console.log(rows)
            const result = (rows) => {
                rows.forEach(row => {
                if (row.name === 'LeetCode') return false;
                })
            return true;
            }
            expect(result(rows)).toEqual(true)
        })
    })
})