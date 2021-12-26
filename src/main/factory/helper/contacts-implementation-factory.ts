import { ContactsImplementation } from "../../../main/helpers/contacts-implementation";
import { makeDbAddContacts } from "../usecase/db-add-contacts-factory";
import { makeDbAddContactsList } from "../usecase/db-add-contacts-list-factory";
import { makeDbCreateList } from "../usecase/db-create-list-factory";

export const makeContactsImplementations = (): ContactsImplementation => {
    const dbAddContacts = makeDbAddContacts();
    const dbAddContactsList = makeDbAddContactsList();
    const dbCreateList = makeDbCreateList();

    const contactsImplementations = new ContactsImplementation(dbAddContacts, dbAddContactsList, dbCreateList);
    return contactsImplementations;
}