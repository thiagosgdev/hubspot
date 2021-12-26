import { DbAddContacts } from "data/usecase/db-add-contacts";
import { DbCreateList } from "../../../data/usecase/list/db-create-list";

export const makeDbCreateList = () => {
    return new DbCreateList();
}