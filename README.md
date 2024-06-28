# Projeto de Login/Register

Este é um projeto de exemplo para um sistema de login e registro, utilizando React para o front-end; Tailwind CSS e CSS para a estilização; ESLint para organização do código; Verificação de senha forte com javascript e utilizando regex; E react-router-dom para a organização de rotas.
Optei por hospedar o projeto no próprio github, assim como fazer o deploy pelo mesmo, usando GitHub Pages.
O projeto encontra-se responsivo, sua limitação para telas maiores é de 716px, sendo possível mudá-lo para 375x812 através do devtools => Optei por fazer um modelo também acessível a desktop ou tablet, ao invés de apenas mobile como exemplificado no figma;

## Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação utilizada para desenvolvimento front-end.
- **Node.js**: Ambiente de execução JavaScript utilizado para gerenciamento de pacotes e execução de scripts de desenvolvimento.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS para estilização rápida e eficiente.

## Funcionalidades

- **Registro de Usuário**: Permite que novos usuários criem uma conta.
- **Login de Usuário**: Permite que usuários existentes façam login.
- **Navegação entre as páginas**: Permite que usuários naveguem entre as páginas de login e Create Account.
- **Validação de Formulário**: Validação de campos do formulário para garantir entradas corretas.
- **Página 404**: Página 404 funcionando e ativada caso o usuário tente entrar em alguma url não implementada.

## Como Executar o Projeto

1. O projeto já se encontra em deploy, podendo ser acessado pelo link: https://iagooteles.github.io/
2. O repositório github deste projeto é: https://github.com/iagooteles/iagooteles.github.io
   

## Observacões

- **Strong password**: Senha forte implementada na rota /CreateAccount, existe a verificação de tamanho (tem que ser maior que 8) e se possui ao menos 1 uppercase, 1 lowercase, 1 número e 1 caractere especial.
- **Funcionalidade**: Até o momento(30/06/2024), os botões funcionais são: 
    - Ícone de mudar a visibilidade no input 'password', em ambas as páginas;
    - 'Create Now' na página principal, ou página de login;
    - 'Login Now' na página de /CreateAccount;
    - 'Voltar para página de Login.' na página 404;


## Futuros Updates

Devido ao gosto por este projeto e por interesse próprio de tê-lo em meu portfólio, pretendo adicionar algumas features futuras como:
    - Implementação do backend;
    - Implementação com banco de dados postgres;
    - Adicionar Página caso o login tenha sido um sucesso;
    - Block do usuário caso digite a senha errada x vezes;
    - Verificação se o usuário já existe no banco de dados;
