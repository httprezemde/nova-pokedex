// Variáveis Globais
const searchHistory = [];
const LIMIT = 150; // Entrega 2: Limite de 150
let currentOffset = 0;
const MAX_STAT = 255; // Entrega 4: Valor máximo para cálculo da barra

// Entrega 3: Mapa de Cores por Tipo
const pokemonTypes = {
    'normal': '#A8A878',
    'fire': '#FF7F00',
    'water': '#6890F0',
    'grass': '#78C850',
    'electric': '#F8D030',
    'ice': '#98D8D8',
    'fighting': '#C03028',
    'poison': '#A040A0',
    'ground': '#E0C068',
    'flying': '#A890F0',
    'psychic': '#F85888',
    'bug': '#A8B820',
    'rock': '#B8A038',
    'ghost': '#705898',
    'dragon': '#7038F8',
    'steel': '#B8B8D0',
    'fairy': '#EE99AC',
    'dark': '#705848'
};

// --- FUNÇÃO 1: BUSCA DETALHADA (Entrega 3 e 4) ---
async function fetchPokemon(query) {
    const inputElement = document.getElementById('pokemon-input');
    const pokemonNameOrId = (query || inputElement.value).toLowerCase();

    if (!pokemonNameOrId) return;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
        
        if (response.ok) {
            const data = await response.json();
            addHistory(data.name);
            displayPokemonDetails(data);
            
            // Limpa input se foi busca manual
            if(!query) inputElement.value = '';
            
            // Rola a tela até os detalhes
            document.getElementById('pokemon-details').scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Pokémon não encontrado!');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar Pokémon.');
    }
}

// --- FUNÇÃO 2: EXIBIR DETALHES COM ESTILO (Core da Solução) ---
function displayPokemonDetails(pokemon) {
    const detailsDiv = document.getElementById('pokemon-details');
    detailsDiv.innerHTML = ''; // Limpa conteúdo anterior

    // Dados principais
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id;
    const typeName = pokemon.types[0].type.name;
    const sprite = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
    
    // Entrega 3: Obter cor do mapa
    const typeColor = pokemonTypes[typeName] || '#777';

    // Criação dos Elementos HTML
    
    // 1. Título e Imagem
    const title = document.createElement('h2');
    title.innerText = `${name} (#${id})`;
    title.style.color = typeColor; // Aplica cor no texto do título

    const img = document.createElement('img');
    img.src = sprite;
    img.alt = name;

    // 2. Badge de Tipo (Com fundo colorido)
    const typeBadge = document.createElement('span');
    typeBadge.classList.add('type-badge');
    typeBadge.innerText = typeName;
    typeBadge.style.backgroundColor = typeColor; // Fundo colorido apenas no badge
    // O texto do badge é branco (definido no CSS), garantindo contraste

    // 3. Estatísticas (Entrega 4)
    const statsContainer = document.createElement('div');
    statsContainer.classList.add('stats-container');

    pokemon.stats.forEach(stat => {
        const statName = stat.stat.name.replace('-', ' ').toUpperCase();
        const statValue = stat.base_stat;
        const percentage = (statValue / MAX_STAT) * 100;

        const statHtml = `
            <div class="stat-item">
                <div class="stat-header">
                    <span>${statName}</span>
                    <span>${statValue}</span>
                </div>
                <div class="progress-bg">
                    <div class="progress-bar" 
                         style="width: ${percentage}%; background-color: ${typeColor};">
                    </div>
                </div>
            </div>
        `;
        statsContainer.innerHTML += statHtml;
    });

    // Montagem final
    detailsDiv.appendChild(title);
    detailsDiv.appendChild(img);
    detailsDiv.appendChild(typeBadge);
    detailsDiv.appendChild(statsContainer);
}

// --- FUNÇÃO 3: LISTAGEM E PAGINAÇÃO (Entrega 2) ---
async function fetchPokemonList() {
    const listContainer = document.getElementById('pokemon-list-container');
    listContainer.innerHTML = '<p>Carregando...</p>';

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${currentOffset}`);
        const data = await response.json();

        renderList(data.results);
        updatePagination(data.previous, data.next);

    } catch (error) {
        console.error('Erro na lista:', error);
    }
}

function renderList(pokemons) {
    const listContainer = document.getElementById('pokemon-list-container');
    listContainer.innerHTML = '';

    pokemons.forEach(pokemon => {
        // Extrair ID da URL
        const id = pokemon.url.split('/')[6];
        const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        const card = document.createElement('div');
        card.classList.add('pokemon-card');
        card.innerHTML = `
            <img src="${spriteUrl}" alt="${pokemon.name}">
            <p>#${id}</p>
            <p>${pokemon.name}</p>
        `;

        // Clique no card chama a busca detalhada
        card.onclick = () => fetchPokemon(pokemon.name);

        listContainer.appendChild(card);
    });
}

// --- CONTROLES DE PAGINAÇÃO ---
function updatePagination(prevUrl, nextUrl) {
    document.getElementById('prev-button').disabled = !prevUrl;
    document.getElementById('next-button').disabled = !nextUrl;
}

function changePage(direction) {
    if (direction === 'next') {
        currentOffset += LIMIT;
    } else if (direction === 'prev' && currentOffset >= LIMIT) {
        currentOffset -= LIMIT;
    }
    fetchPokemonList();
    // Rola para o topo da lista
    document.getElementById('pokemon-list-section').scrollIntoView({ behavior: 'smooth' });
}

// --- HISTÓRICO ---
function addHistory(name) {
    if (searchHistory.includes(name)) return;
    searchHistory.unshift(name);
    if (searchHistory.length > 5) searchHistory.pop();
    
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    
    searchHistory.forEach(pkName => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.innerText = pkName;
        a.onclick = (e) => {
            e.preventDefault();
            fetchPokemon(pkName);
        }
        li.appendChild(a);
        historyList.appendChild(li);
    });
}

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    // Carrega a lista inicial
    fetchPokemonList();

    // Eventos de clique
    document.getElementById('search-button').addEventListener('click', () => fetchPokemon());
    document.getElementById('prev-button').addEventListener('click', () => changePage('prev'));
    document.getElementById('next-button').addEventListener('click', () => changePage('next'));
});