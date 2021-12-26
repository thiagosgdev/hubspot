import fs from "fs";
import { parse } from "csv-parse";


type contactInfos = {
    contactsObj,
    contactsEmails
}

let csvData:string[] = [];
let contactsObj: Object[] = [];
let contactsEmails: string[] = [];
const filePath = "./contacts.csv"

export function importContacts(): Promise<contactInfos> {
    return new Promise((resolve, rejects) => {
        fs.createReadStream(filePath)
        .pipe(parse({delimiter: ','}))
        .on('data', function(csvrow) {        
            csvData.push(csvrow);        
            contactsEmails.push(csvrow[2]);
        })
        .on('end',async function() {
            csvData.splice(0,1)
            csvData = JSON.parse(JSON.stringify(csvData));

            for(let i = 0; i < csvData.length; i++){

                contactsObj.push(
                    {
                        email: csvData[i][2],
                        properties: [
                            {
                                property: "firstName",
                                value: csvData[i][0]
                            },
                            {
                                property: "lastName",
                                value: csvData[i][1]
                            },
                            {
                                property: "gender",
                                value: csvData[i][2]
                            }
                        ]
                    }
                );
            }
            resolve({ contactsObj, contactsEmails});
        });
    })
}
