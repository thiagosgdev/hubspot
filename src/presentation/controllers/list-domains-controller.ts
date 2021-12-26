import { DbListDomains } from "../../data/usecase/db-list-domains";
import { Request, Response } from "express";
import { hubSpotConnection } from "../../main/config/hubspot";
import { listLog } from "../../main/app";

export class ListDomainsController {

    async handle(request: Request, response: Response): Promise<Response>{
        const listDomains = new DbListDomains();

        const logs = await listLog;

        const options = { 
            count: 100
        }
        console.log("LIST ID: "+logs.listId)
        
        const { contacts } = await hubSpotConnection.apiRequest({
            method: 'GET',
            path: `/contacts/v1/lists/${logs.listId}/contacts/all`,
            qs: options,
            qsStringifyOptions: { indices: false },
        })


        const domains = listDomains.getDomains(contacts);
        const domainCount = listDomains.countItems(domains);

        return response.json(domainCount)
    }
}