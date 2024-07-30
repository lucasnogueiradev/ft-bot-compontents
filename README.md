# components
Bem-vindo ao repositório do **ft-bot-components**! Este projeto é uma solução abrangente para o desenvolvimento de uma biblioteca de componentes reutilizáveis e a integração com microserviços. Ele é projetado para facilitar a criação e a manutenção de componentes de UI e a configuração de um ambiente de desenvolvimento eficiente usando Storybook, Webpack e microserviços.

## Estrutura do Projeto
### 📦 Componentização de Componentes
Este projeto oferece uma abordagem modular para o desenvolvimento de componentes de interface do usuário (UI). A biblioteca de componentes é estruturada para ser reutilizável e configurável, permitindo que você construa e gerencie seus componentes de forma eficiente.

### 🛠️ Storybook
Integração com [Storybook](https://storybook.js.org/) para uma experiência de desenvolvimento visual e interativa. Storybook facilita a criação, teste e documentação de componentes isolados, permitindo uma colaboração mais eficaz entre designers e desenvolvedores.

### ⚙️ Webpack
Utiliza [Webpack](https://webpack.js.org/) para empacotar e otimizar os recursos do projeto. O Webpack é configurado para suportar a compilação de JavaScript, CSS e outros ativos, garantindo que seu código seja otimizado e pronto para produção.

### 🌀 Microserviços
A arquitetura do projeto é baseada em microserviços, permitindo uma abordagem escalável e modular para o desenvolvimento e implantação de funcionalidades. Cada microserviço é independente e pode ser desenvolvido, testado e implantado separadamente.

## Dependências
O projeto utiliza as seguintes bibliotecas:

- `@emotion/react`
- `@emotion/styled`
- `@mui/lab`
- `@mui/material`
- `@storybook/addons`
- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`
- `formik`
- `mini-css-extract-plugin`
- `polished`
- `react`
- `react-dom`
- `react-icons`
- `react-modal`
- `react-router-dom`
- `react-toastify`
- `recharts`
- `styled-components`
- `typescript`
- `web-vitals`
- `yup`

## Scripts
- `start:webpack`: Inicia o servidor de desenvolvimento do Webpack.
- `build`: Compila o projeto com Webpack.
- `storybook`: Inicia o Storybook para visualização e documentação dos componentes.
- `build-storybook`: Gera a versão estática do Storybook.

## Instalação
Clone o repositório e instale as dependências:

```bash
git clone https://github.com/usuario/ft-bot-components.git
cd ft-bot-components
npm install
yarn add
