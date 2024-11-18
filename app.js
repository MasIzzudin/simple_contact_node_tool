import { writeQuestion, saveContact } from './question.js';

//Tutorial 2 (Promises async await) => Best Option
const main = async () => {
    const nama = await writeQuestion("Siapa nama anda: ");
    const phone = await writeQuestion("Masukkan no hp: ");
    const age = await writeQuestion("Berapa umur anda: ");
    const address = await writeQuestion("Dimana alamat tinggal anda: ");

    saveContact({ nama, phone, age, address })
}

main();