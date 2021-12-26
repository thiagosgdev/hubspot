import { hubSpotConnection } from "../../../main/config/hubspot";


export type ListData = {
    listId: number,
    listName: string
}

export class DbCreateList {
    async create(): Promise<ListData>{
        const listName = `thiago.santos_goncalves.`+Date.now();
        
        const { listId } = await hubSpotConnection.lists.create({ name: listName });

        return { listId, listName};
    }
}