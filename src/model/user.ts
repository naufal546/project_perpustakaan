import { database } from '../db.js'
class User {
    public create(id: number, username: string, firstname: string, lastname: string, email:string,  hashedPassword: string, role: string) {
        const query = database.prepare(`
            INSERT INTO User (id, username, firstname, lastname, email, hashedPassword, role) VALUES (?, ?, ?, ?, ?)
        `)

        return query.all(id, username, firstname, lastname, email, hashedPassword, role)
    }
    public read(id: number) {
        const query = database.prepare(`
            SELECT Id, irstname, lastname, username FROM User WHERE Id = ?
        `)
        return query.all(id)
    }
    public update(id: number, column: string, row: string){
        const query = database.prepare(`
            UPDATE Users
            SET ? = ?
            WHERE Id = ?
        `)
        return query.all(column, row, id)

    }
    public delete(id: number){
        const query = database.prepare(`
            DELETE FROM Users WHERE Id = ?
        `)

        return query.all(id)
    }
}



