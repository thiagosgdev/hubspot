import { DbAddContactsList } from "../../../data/usecase/list/db-add-contacts-list";

export const makeDbAddContactsList = () => {
    return new DbAddContactsList();
}