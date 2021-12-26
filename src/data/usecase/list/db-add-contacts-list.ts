import { hubSpotConnection } from "../../../main/config/hubspot";


export class DbAddContactsList {

    async getContactsInfo(contactsEmails){
        const contactsInfo = await hubSpotConnection.contacts.getByEmailBatch(contactsEmails);
        return contactsInfo;
    }

    async getVidContacts(contactsInfo) {
        let contactProperties;
        let contactsVids = [];

        for (let i = 0; i < Object.keys(contactsInfo).length; i++){
            contactProperties = contactsInfo[Object.keys(contactsInfo)[i]];
            contactsVids.push(
              contactProperties.vid
            )
        }

        return contactsVids;
    }
    
    async addContacts(listId, contactsEmails) {
        const contactsInfo = await this.getContactsInfo(contactsEmails);
        const contactsVids = await this.getVidContacts(contactsInfo);

        console.log(`Contatos adicionados a lista. Id da Lista: ${listId} Vids: ${contactsVids} E-mails: contactsEmails`)

        const response = await hubSpotConnection.lists.addContacts(listId, {vids: contactsVids, emails: contactsEmails})

        console.log(`Response from AddContacts to list: ${response}`)
    }
}