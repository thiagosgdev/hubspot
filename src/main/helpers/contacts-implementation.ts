import { DbAddContacts } from "../../data/usecase/db-add-contacts";
import { DbAddContactsList } from "../../data/usecase/list/db-add-contacts-list";
import { DbCreateList, ListData } from "../../data/usecase/list/db-create-list";
import { importContacts } from "./import-csv";


export class ContactsImplementation {

    constructor(
        private readonly dbAddContacts: DbAddContacts,
        private readonly dbAddContactsList : DbAddContactsList,
        private readonly dbCreateList: DbCreateList
    ){}

    async execute(): Promise<ListData> {
        const { contactsObj, contactsEmails } = await importContacts();

        const { listId, listName } = await this.dbCreateList.create();

        const listLog = { listId, listName };
        
        await this.dbAddContacts.add(contactsObj);
        
        await this.dbAddContactsList.addContacts(listId, contactsEmails)

        return listLog;
    }
}