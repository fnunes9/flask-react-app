# React-Flask app

Esta página apresenta uma simples API em Flask integrada ao React. O objetvo é entender como os dois serviços interagem em um contexto de *full stack*.

Em relação ao React, ele é uma **biblioteca** em Javascript para criar interfaces web, principalmente. Com ele é possível criar componentes de IU dinâmicos que podem ser atualizados de forma eficiente.

Aqui estão alguns pontos-chave para entender sobre o React:

1. **Baseado em Componentes**: O React organiza sua aplicação em componentes reutilizáveis e autocontidos. Cada componente representa uma parte específica da interface de usuário, como um botão, campo de entrada ou até mesmo uma página inteira. Esses componentes podem ser compostos juntos para construir interfaces de usuário complexas.

2. **Virtual DOM**: O React utiliza uma representação virtual do DOM real (*Document Object Model*), chamada de "Virtual DOM". O Virtual DOM permite que o React acompanhe e atualize eficientemente as mudanças na interface de usuário sem manipular diretamente o DOM real. Isso resulta em melhor desempenho e uma experiência do usuário mais suave.

3. **Sintaxe Declarativa**: O React utiliza uma sintaxe declarativa, o que significa que você descreve como a interface de usuário deve ser com base no **estado** da aplicação, e o React se encarrega de atualizar a interface de usuário real para corresponder a essa descrição. Em vez de manipular manualmente o DOM, você define a estrutura desejada da interface de usuário e o React cuida da renderização.

4. **Renderização Eficiente**: O React otimiza o processo de renderização, atualizando seletivamente apenas as partes da interface de usuário que foram alteradas. Ele compara os estados anteriores e atuais da interface de usuário e atualiza eficientemente os componentes necessários, evitando re-renderizações desnecessárias e melhorando o desempenho.

5. **Fluxo de Dados de Via Única**: O React segue um fluxo de dados unidirecional. Os dados fluem de um componente pai para seus componentes filhos por meio de propriedades, conhecidas como **props**. Os componentes filhos não podem modificar diretamente as props; eles recebem novas props sempre que o componente pai é atualizado, o que desencadeia uma nova renderização.

6. **Ecossistema do React**: O React possui um ecossistema amplo, com uma ampla variedade de ferramentas, bibliotecas e suporte da comunidade. É possível encontrar inúmeros componentes de IU prontos para uso, soluções de gerenciamento de estado (como o Redux), bibliotecas de roteamento (como o React Router) e muito mais, como por exemplo, o Next.js (trabalha sobre o React), que aprimoram o processo de desenvolvimento.

Em resumo, o React simplifica o processo de construção de interfaces de usuário complexas, fornecendo uma arquitetura baseada em componentes, uma representação virtual do DOM e renderização eficiente. Ele permite que os desenvolvedores criem componentes de interface de usuário dinâmicos, reutilizáveis e escaláveis para aplicações web. Mas lembre-se, ele é uma biblioteca, que precisa ser complementado para gerar grandes e seguras aplicações, assim como o próprio Flask.

## Organização do projeto

* app.py: A aplicação Flask. Leia mais em *https://flask.palletsprojects.com/en/2.2.x*.
* api/comment_handler.py: Implementação de uma rota específica.
* frontend/: Projeto em React. Leia mais em *https://react.dev/learn*.

## Laboratório

- Você não precisa clonar esse repositório. Abra uma nova instância do *codespace* e use um template em branco (*Blank*).

- Instale os pacotes: flask, flask_cors, flask_restful:
  * `pip install nome-do-pacote`

- Crie os diretórios 'api' e 'frontend'.

- Crie o arquivo 'app.py' e copie o conteúdo desse mesmo arquivo presente neste repositório.

- Em 'api/' crie o arquivo 'comment_handler.py' e copie o conteúdo desse mesmo arquivo deste repositório.

- Nesse momento já é possível testar a API. Repare que somente a rota default '/' não é funcional.

- Utilize o postman para testar a api via requisição POST. Não se esqueça de deixar a porta como 'pública'. Use
a rota correta e envie a requisição JSON com o seguinte body:
  * `{ "text" : "comentario via postman" }`

- Certifique-se de que o comentário foi criado.

- Abrir um novo terminal. Esse novo terminal será usada para gerenciar o frontend. Entre no diretório frontend, via terminal:
  * `cd frontend`

- Execute o seguinte comando para instalação do React no diretório corrente.

  * `npx create-react-app .`

- Esse comando cria toda a estrutura de um projeto React. Agora, instale o módulo 'axios':
  * `npm install axios`
 
- Esse módulo será usado para gerenciar as requisições HTTP no frontend.

- Editar o arquivo 'public/index.html' e substituir TODO o conteúdo pelo conteúdo em 'static/index.html' neste repositório. Em seguida, teste a rota default.

- No diretório 'src' edite o arquivo 'App.js'. Substitua todo o conteúdo pelo conteúdo do arquivo 'static/App.js' neste repositório. Aguarde a discussão com o professor.

- Podemos deixar nosso frontend online. Basta executar no terminal do frontend:
  * `npm start`

- Abra o endereço da porta cujo frontend está em execução e confira o resultado. Repare que é um endereço distinto da api. Envie um comentário via React para a api. Se você quiser conferir, consulte a rota da api para listar os comentários.

- Se quisermos aprimorar o serviço frontend, é interessante olharmos para o módulo React Router. Te recomendo dar uma estudada para aprender ainda mais.

- Pratique e estude bastante. :rocket: