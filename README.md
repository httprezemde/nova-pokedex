# nova-pokedex
✨ Funcionalidades Principais: O projeto atende a todos os requisitos de filtragem, paginação, estilização e exibição de dados de estatísticas:FuncionalidadeDescriçãoBusca e HistóricoPermite pesquisar um Pokémon específico por nome ou ID. O histórico de pesquisas recentes é armazenado e exibido para fácil acesso. Lista e Paginação. Exibe uma lista paginada dos primeiros 150 Pokémons. Implementa botões Anterior/Próximo para navegar pelo catálogo.Detalhes do Cartão ao clicar em um card da lista ou usar a busca, um painel detalhado é exibido.Estilização por Tipo de card de detalhes aplica cores dinâmicas (no título, no badge de tipo e nas barras de status) com base no tipo primário do Pokémon. Estatísticas Visuais. Exibe as estatísticas básicas (HP, Ataque, Defesa, etc.) usando barras de progresso calculadas dinamicamente para fornecer uma representação visual clara do poder do Pokémon 

Tecnologias Utilizadas
Este projeto foi construído utilizando as bases do desenvolvimento web:

HTML5: Estrutura semântica do projeto.

CSS3: Estilização, layout responsivo e garantia de um alto contraste de leitura (resolvendo o problema de legibilidade em cards de Pokémons escuros).

JavaScript (ES6+):

Manipulação assíncrona de dados usando fetch e async/await.

Renderização dinâmica de elementos (cards, barras de status, histórico).

Lógica de paginação e controle de estado.

🚀 Como Executar o Projeto Localmente
Clone o Repositório:

Bash

git clone [LINK_DO_SEU_REPOSITORIO]
cd nome-do-projeto
Abra os Arquivos: O projeto consiste apenas em arquivos estáticos (index.html, script.js e CSS embutido).

Execute no Navegador: Abra o arquivo index.html diretamente em seu navegador (ex: dê um duplo clique no arquivo). Não é necessário servidor local.

🔗 Fonte dos Dados
Os dados de Pokémon (nomes, IDs, tipos, sprites e estatísticas) são fornecidos pela:

PokeAPI: https://pokeapi.co/
