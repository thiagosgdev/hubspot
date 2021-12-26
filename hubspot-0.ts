



////CONNECTION
//const hubSpot = new Hubspot({ apiKey: process.env.HUBSPOTKEY})
        
////CRIA LISTA - OK
//const { listId } = await hubSpot.lists.create({
//   "name": `thiago.santos_goncalves.`+Date.now(),
//});

//////CRIA CONTATOS -OK
//await hubSpot.contacts.createOrUpdateBatch(contactsObj);

//////BUSCA DADOS DOS CONTATOS CRIADOS - OK
//const contactsInfo = await hubSpot.contacts.getByEmailBatch(contactsEmails);

//////PEGA VID DOS CONTATOS
//let contactProperties;
//for (let i = 0; i < Object.keys(contactsInfo).length; i++){
//    contactProperties = contactsInfo[Object.keys(contactsInfo)[i]];
//    contactsVids.push(
//      contactProperties.vid
//    )
//}

////ADICIONA OS CONTATOS NA LISTA  - ALTERAR ID PARA O CRIADO
//await hubSpot.lists.addContacts(listId, {vids: contactsVids, emails: contactsEmails})



//const { contacts } = await hubSpot.lists.getContacts(2);


////PEGA OS DOMINIOS
//contacts.forEach((contact) => {
//    let email = contact["identity-profiles"][0].identities[0].value
//    domains.push(
//        email.substring(email.lastIndexOf("@")+1)
//    )
//})

//function countItems(domains) {
//    const countMap = Object.create(null);
  
//    for (const domain of domains) {
//      countMap[domain] = (countMap[domain] || 0) + 1;
//    }
  
//    return Object.entries(countMap).map(([value, count]) => ({
//      dominio: value,
//      quantidade: count
//    }));
//  }
  
//console.log(countItems(domains))