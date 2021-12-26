import { DbAddContacts } from "../../../data/usecase/db-add-contacts";

export const makeDbAddContacts = (): DbAddContacts => {
    return new DbAddContacts();
}