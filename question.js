import { writeFileSync, readFileSync, existsSync, mkdirSync  } from "node:fs";
import * as readline from 'readline';
import { stdin as input, stdout as output } from "node:process";

const dirDocument = "./assets/documents";
const contactPath = `${dirDocument}/contacts.json`;

if(!existsSync(dirDocument)) {
    mkdirSync(dirDocument, { recursive: true })
}

if (!existsSync(contactPath)) {
    writeFileSync(contactPath, '[]', 'utf-8');
}


const rl = readline.createInterface({
    input,
    output
});


const writeQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (param) => {
            resolve(param)
        })
    })
}

const saveContact = (param) => {
    const { nama, phone, age, address } = param;
    try {
        let data = [];
        const getFile = readFileSync(contactPath, 'utf-8');
        data = JSON.parse(getFile);
        data.push({ nama, phone, age, address });
        writeFileSync(contactPath, JSON.stringify(data));
    } catch (error) {
        throw error
    }

    rl.close()
}


export {
    writeQuestion,
    saveContact,
}