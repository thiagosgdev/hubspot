import { importContacts } from "../../main/helpers/import-csv";


export async function getContacts(){
    const { contactsObj } = await importContacts();   
    console.log("Teste " + contactsObj)
}