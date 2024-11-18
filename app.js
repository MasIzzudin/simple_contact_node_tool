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





































// Option 1 | Basic use (callback hell) => NOT RECOMMENDED
// rl.question('Siapa nama anda: ', (nama) => {
//     rl.question('Masukkan no Hp anda: ', (phone) => {
//         rl.question('Masukkan umur anda: ', (age) => {
//             rl.question('Masukkan alamat tempat tinggal anda: ', (address) => {
//                 try {
//                     let data = [];
//                     const getFile = readFileSync(contactPath, 'utf-8');
//                     data = JSON.parse(getFile);
//                     data.push({ nama, phone, age, address });
//                     writeFileSync(contactPath, JSON.stringify(data));
//                 } catch (error) {
//                     throw error
//                 }
//                 rl.close();
//             })
//         })
//     })
// })

