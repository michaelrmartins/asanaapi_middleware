# AsanaAPI Middleware

![Asana Logo](asana-middleware-logo.jpeg)

AsanaAPI Middleware é um projeto em Node.js desenvolvido para atuar como um middleware, facilitando o acesso e a integração com a API do Asana. Esse middleware permite consultar e gerenciar dados da plataforma Asana, possibilitando o desenvolvimento de aplicações que necessitam integrar informações da ferramenta de gerenciamento de tarefas.

## Descrição

Este middleware serve como uma interface simplificada entre o sistema Asana e aplicações clientes, centralizando e padronizando as requisições à API do Asana. Ele utiliza a biblioteca oficial do Asana para Node.js, com suporte a variáveis de ambiente para configuração segura e Express para a estrutura do servidor HTTP.

### Funcionalidades

- Conexão com a API do Asana para obtenção e manipulação de dados.
- Configuração segura de variáveis sensíveis utilizando o `dotenv`.
- Organização e estruturação das rotas HTTP para fácil acesso e manipulação dos dados do Asana.

### Tecnologias Utilizadas

- **Node.js** - Plataforma principal para o desenvolvimento do middleware.
- **Express** - Framework para o servidor HTTP.
- **Asana SDK** - Biblioteca oficial para integrar com a API do Asana.
- **Dotenv** - Gerenciamento de variáveis de ambiente para configurações seguras.
- **Nodemon** - Utilizado em desenvolvimento para reiniciar o servidor automaticamente ao detectar alterações.


### Exemplo de Uso

Com o middleware em execução, você poderá realizar operações como:

- Consultar projetos, tarefas e usuários do Asana.
- Filtrar e organizar dados de forma customizável.
- Integrar essas informações com outras aplicações para otimizar fluxos de trabalho e relatórios.

### Contribuições

Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto. Sugestões são bem-vindas!

---

**Autor:** Michael Martins (A.K.A, Mike)

**Licença:** ISC
