<h1>Projeto de Monitoramento da Qualidade do Ar - React</h1>

## 📝 Contextualização

Este projeto tem como objetivo aplicar os conhecimentos de frontend para o consumo de uma API de monitoramento da qualidade do ar, utilizando React. Desenvolvido no Módulo 5 do programa Programadores do Amanhã, o projeto visa exibir de forma organizada dados fornecidos por sensores de qualidade do ar, permitindo a busca por sensores específicos e a paginação dos resultados.

## 🚀 Tecnologias Utilizadas

- React: 18.3.1 - Biblioteca JavaScript para construção de interfaces de usuário.
- React DOM: 18.3.1 - Pacote para manipulação do DOM com React.
- Axios: 1.7.7 - Cliente HTTP para realizar requisições à API.
- Cors: 2.8.5 - Middleware para habilitar o CORS na aplicação.
- Vite: 5.4.1 - Ferramenta de build e servidor de desenvolvimento.

### 📜 Algumas informações importantes para melhor entendimento

- O que é react?
  
    React é uma biblioteca JavaScript desenvolvida pelo Facebook, amplamente utilizada para construir interfaces de usuário (UIs) interativas e dinâmicas em aplicações web. A principal vantagem do React é o uso de uma abordagem baseada em componentes, que permite dividir a interface do usuário em partes reutilizáveis e independentes. Isso facilita a manutenção, o desenvolvimento e a escalabilidade de grandes projetos.

- Componentes no React

  Componentes são os blocos fundamentais no React. Eles representam pequenas partes da interface do usuário e podem ser reutilizados em diferentes partes do aplicativo. Cada componente pode ter sua própria lógica e estado, e eles podem ser compostos para formar uma interface complexa. Um componente pode ser uma simples função JavaScript ou uma classe que retorna elementos JSX (uma sintaxe parecida com HTML, usada dentro de JavaScript).

- O que é Axios?

  Axios é uma biblioteca JavaScript que facilita o consumo de APIs REST, permitindo que você faça requisições HTTP de forma simples e eficiente. Com o Axios, é possível enviar dados para o servidor (requisições POST), obter informações (requisições GET), atualizar dados (PUT/PATCH) ou remover informações (DELETE). Axios também oferece suporte para promessa (promises) e facilita o tratamento de erros e respostas assíncronas.  

- Como funciona o consumo de API usando Axios no React?

  No React, o consumo de uma API com Axios é feito dentro dos componentes. Geralmente, utilizamos os ciclos de vida do componente ou o hook useEffect para realizar a requisição no momento certo. No componente, utilizamos o Axios para buscar dados de uma API.

## 👣 Passo a Passo para Execução
Caso você queira rodar localmente, terá que seguir os passos a seguir.
**Pré-requisitos:**
 - Node.js (versão 18 ou superior)
 - Git

**Clonando o Repositório:**
Para clonar o projeto, execute o seguinte comando:
```
git clone https://github.com/SeuUsuario/NomeDoRepositorio.git
cd NomeDoRepositorio
```
**Instalando Dependências:**
```
npm i
```
**Executando o Projeto:**
```
npm run dev
```
A aplicação estará acessível em deploy também: https://miniprojeto-m5-qualidade-do-ar.vercel.app/.

## 📡 API Utilizada
O projeto consome dados de uma API que fornece informações sobre a qualidade do ar, que foi desenvolvida no módulo 4. Para mais detalhes sobre a API utilizada, visite o repositório: [sistema-qualidade-ar](https://github.com/Joicylara/sistema-qualidade-ar)

## ⚙ Funcionalidades

<div align = "center"> 
  <h3>Seção Home - painel principal</h3>
  <img src = "https://github.com/user-attachments/assets/cfcc13ad-2026-4c3b-a580-a8d6c50f11ff"  width = "600px">
  <p>Na seção Home tem um card com duas informações diferentes, essa é a principal, de boas vindas</p>

  <h3>Seção Home - informações</h3>
  <img src = "https://github.com/user-attachments/assets/3e4b0792-195d-435a-b94a-073aba45dc61"  width = "600px">
  <p>Card com todos os dispositivos - get(/searchDevice)</p>

  <h3>Seção Sensores - painel principal</h3>
  <img src = "https://github.com/user-attachments/assets/173b971a-5307-4823-8ab0-106ea7d7a8b7"  width = "600px">
  <p>Card com as informações para busca</p>

  <h3>Seção Sensores - informações</h3>
  <img src = "https://github.com/user-attachments/assets/cc824a82-be9a-4874-bb8f-cc3d04eada18"  width = "600px">
  <p>Card com as informações de acordo com o nome do sensor buscado pelo usuário - get(/searchSensorSpecific/)</p>

  <h3>Seção Classificação - tabela de índice da qualidade do ar</h3>
  <img src = "https://github.com/user-attachments/assets/db8526c1-d16f-4c2b-a8f4-cdd7052f15b2"  width = "600px">
  <p>Imagem da classificação da qualidade do ar, de acordo com a CONAMA(Conselho Nacional do Meio Ambiente), valores que mostra se o ar está: bom, moderado, ruim, muito ruim e pessímo</p>

  <h3>Seção Classificação - informações</h3>
  <img src = "https://github.com/user-attachments/assets/39bbb70d-93d9-48a6-b633-9f037f8c3aac"  width = "600px">
  <p>Card com as informações de acordo com a qualidade do ar, busca somente dispositivos de monitoramento onde o local tem a qualidade como 'good' e 'Moderate' - get(/searchQualityAir)</p>
</div>

## 🧪 Teste
<div align = "center"> 
  <h3>Site Ar Puro</h3>
  <img src = "src\assets\videoReadme\apresentaçãoM5.gif"  width = "600px">
  <p>Testando o site, mostrando os seus efeitos e animações</p>
</div>


## Conclusão
Este projeto foi desenvolvido com o objetivo de aplicar conceitos de frontend utilizando React, consumindo uma API para exibir dados dinâmicos e atualizáveis sobre dados ambientais realacionado a qualidade do ar. Através dele, foi possível explorar o uso de componentes React, gerenciamento de estado e a biblioteca Axios para realizar requisições HTTP. Com melhorias futuras, como:
- Melhoria da Responsividade:
    - Tornar o site mais responsivo, garantindo uma melhor experiência de uso em diferentes dispositivos e tamanhos de tela.
    - Implementar media queries no CSS para ajustar o layout conforme o tamanho da tela e melhorar o design.
 
- Implementação de CRUD:
    - Atualmente, o consumo da API está limitado a operações de leitura (GET). Uma melhoria importante seria adicionar as funcionalidades de CRUD completas: POST: para adicionar novos dados.
UPDATE: para atualizar dados existentes.
DELETE: para remover dados.
    - O link da API usada neste projeto é https://teste-deploy-api-6s8g.onrender.com.
As rotas para implementar essas funcionalidades estão disponíveis no repositório da [API](https://github.com/Joicylara/sistema-qualidade-ar/tree/main).

- Integração com Banco de Dados:
    - A API utilizada no projeto atualmente funciona sem um banco de dados, mas uma melhoria significativa seria a implementação de um banco de dados para armazenar as informações dos sensores de forma persistente.
 
Essas melhorias tornarão o projeto mais completo e funcional, permitindo um consumo mais dinâmico da API e uma experiência mais rica no frontend.
   
