import { database } from '../db.js'


interface PublicationDate {
    "year": number,
    "month": number,
    "day": number
}

class book {
    public create(idbook: number, booktitle: string, authortname: string, authorid: number, PublicationDate: PublicationDate) {
        const PublicationDateStr: string = `${PublicationDate.year}-${String(PublicationDate.month).padStart(2, "0")}-${String(PublicationDate.day).padStart(2, "0")}`
        
        const query = database.prepare(`
            INSERT INTO book (idbook, booktitle, authortname, authorid, PublicationDate) VALUES (?, ?, ?, ?, ?)
        `)

        return query.all(idbook, booktitle, authortname, authorid, PublicationDateStr)
    }
    public read(idbook: number) {
        const query = database.prepare(`
            SELECT idbook, irstname, authorid, booktitle FROM book WHERE idbook = ?
        `)
        return query.all(idbook)
    }
    public update(idbook: number, column: string, row: string){
        const query = database.prepare(`
            UPDATE books
            SET ? = ?
            WHERE idbook = ?
        `)
    return query.all(column, row, idbook)

    }
    public delete(idbook: number){
        const query = database.prepare(`
            DELETE FROM books WHERE idbook = ?
        `)

        return query.all(idbook)
    }
}
