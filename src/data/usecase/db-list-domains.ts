
export class DbListDomains {

    getDomains(contacts: Object[]){
        let domains = [];
        contacts.forEach((contact) => {
            let email = contact["identity-profiles"][0].identities[0].value
            domains.push(
                email.substring(email.lastIndexOf("@")+1)
            )
        });

        return domains;
    }
    

    countItems(domains) {
        const countMap = Object.create(null);

        for (const domain of domains) {
          countMap[domain] = (countMap[domain] || 0) + 1;
        }
      
        return Object.entries(countMap).map(([value, count]) => ({
          dominio: value,
          quantidade: count
        }));
      }
}