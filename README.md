# Software para controle de PET SHOP com foco em Banho e Tosa.

Esse projeto é um software onde se pode efetuar o agendamento de serviços de banho e tosa de um pet shop.
O projeto apresentado, conta com uma tela de login, uma página home que possui 3 botões, onde um é para sair do sistema e os outros 2, são para as telas, Agendamento (SchedulePage.js) e verificação de serviços agendados (ScheduledServicesPage.js).


## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

src/  
├── components/  
│   ├── AgendamentoCard.js   # Componente que exibe informações de um agendamento  
│   ├── Button.js            # Componente reutilizável de botão  
│   ├── footer.js            # Componente do rodapé  
├── pages/  
│   ├── HomePage.js          # Página inicial do sistema  
│   ├── LoginPages.js        # Página de login  
│   ├── ScheduledServicesPage.js  # Página que lista serviços agendados  
│   ├── SchedulePage.js      # Página para agendar novos serviços  
├── styles/  
│   ├── (arquivos CSS)       # Estilos CSS para as páginas e componentes  
├── agendamentos.json        # Dados de agendamentos  
├── usuarios.json            # Dados de usuarios  


## Funcionalidades

### Principais Funcionalidades:

- **Agendar um serviço**:
  O usuário pode preencher um formulário com o nome do pet, data, horário e o tipo de serviço desejado.  
  Após o envio do formulário, os dados são registrados (simulados) e exibidos como um agendamento confirmado.

- **Visualizar serviços agendados**:
  Lista todos os serviços agendados disponíveis no arquivo `agendamentos.json`.

- **Navegar entre páginas**:
  Possui navegação para páginas como Home, Login, Agendamento e Serviços Agendados.

- **Estilo personalizável**:
  Os estilos CSS podem ser ajustados para customizar a aparência das páginas.

## Pré-requisitos

- Node.js
- npm

## Como Executar o Projeto

1. **Clonar o repositório**:

   
   Clonar o repositorio: git clone https://github.com/victorazevedo0/petshop-scheduler.git

## Instalar dependencias

```
$ npm install
```
Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.

## Rodar o projeto

```
$ npm start
```

- Acesse no navegador: http://localhost:3000

## Tecnologias Utilizadas

- Build - create-react-app (https://create-react-app.dev/)
- React: Framework para criação da interface do usuário. (https://react.dev/)
- React Router: Para navegação entre páginas. (https://reactrouter.com/)
- CSS: Estilização das páginas e componentes.
- JavaScript (ES6): Linguagem principal utilizada no desenvolvimento.

## Melhorias Futuras

- Adicionar persistência dos dados com uma API real ou banco de dados.
- Implementar autenticação na página de login.
- Melhorar a validação do formulário no agendamento.
- Tela de cadastro (usuários)
- Módulo financeiro
- Relatórios