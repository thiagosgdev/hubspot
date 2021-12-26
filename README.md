INSTALAÇÃO
Com o projeto aberto no VSCODE ou outro editor, rode o comando yarn no terminal para instalar as dependências.

CONFIGURAÇÃO
É necessário alterar o nome do arquivo example.env para
.env e colocar em qual porta (PORT) o servidor deve rodar e qual API KEY do Hubspot (HUBSPOTKEY). Deverão ser substituidos os valores YOUR_PORT_HERE e YOUR_KEY_HERE respectivamente.

INICIANDO O SERVIDOR
Digite o comando yarn dev para iniciar o servidor. Quando o servidor iniciar, irá executar todas as etapas do teste, com exceção das listagem de dominios.

CONSULTANDO OS DOMINIOS
A rota get http://localhost:3000/contacts/list irá retorar a contagem dos domínios de até 100 contatos da listagem.
