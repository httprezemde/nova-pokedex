🚀 Projeto Pokedex
Este é um projeto que demonstra a aplicação de conceitos de desenvolvimento web para consumir a PokeAPI e exibir informações detalhadas e estilizadas sobre os Pokémon.

✨ Funcionalidades Principais
O projeto atende a todos os requisitos de filtragem, paginação, estilização e exibição de dados de estatísticas de Pokémon.

🔍 Busca e Histórico: Permite pesquisar um Pokémon específico por nome ou ID. O histórico das pesquisas recentes é armazenado e exibido para fácil acesso.

📜 Lista e Paginação: Exibe uma lista paginada dos primeiros 150 Pokémons. Implementa botões "Anterior" e "Próximo" para navegar pelo catálogo.

🖼️ Detalhes do Cartão: Ao clicar em um card da lista ou utilizar a busca, um painel detalhado do Pokémon é exibido.

🎨 Estilização por Tipo: O card de detalhes aplica cores dinâmicas (no título, no badge de tipo e nas barras de status) com base no tipo primário do Pokémon.

📊 Estatísticas Visuais: Exibe as estatísticas básicas (HP, Ataque, Defesa, etc.) usando barras de progresso calculadas dinamicamente para fornecer uma representação visual clara do poder do Pokémon.

🛠️ Tecnologias Utilizadas
Este projeto foi construído utilizando as bases do desenvolvimento web moderno:

HTML5: Utilizado para a estrutura semântica do projeto.

CSS3: Responsável pela estilização, layout responsivo e por garantir um alto contraste de leitura (resolvendo o problema de legibilidade em cards de Pokémons de cor escura).

JavaScript (ES6+):

Manipulação assíncrona de dados usando fetch e async/await.

Renderização dinâmica de elementos (cards, barras de status, histórico).

Lógica de paginação e controle de estado.

💡 Como Executar o Projeto Localmente
O projeto consiste apenas em arquivos estáticos e não requer um servidor local para execução.

Clone o Repositório:

Bash

git clone (https://github.com/httprezemde/nova-pokedex)
cd nova-pokedex
Execute no Navegador: Abra o arquivo index.html diretamente em seu navegador (por exemplo, dando um duplo clique no arquivo).

🔗 Fonte dos Dados
Os dados de Pokémon (nomes, IDs, tipos, sprites e estatísticas) são fornecidos pela:

PokeAPI: https://pokeapi.co/
