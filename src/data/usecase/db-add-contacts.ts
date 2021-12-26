import { hubSpotConnection } from "../../main/config/hubspot";

export class DbAddContacts {
    async add(contacts: Object[]){
        await hubSpotConnection.contacts.createOrUpdateBatch(contacts);

    }
}

