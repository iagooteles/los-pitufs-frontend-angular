export interface GameCard {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const GAME_CARDS: GameCard[] = [
  {
    image: 'assets/gamesImgs/zelda-breath-of-the-wild.jpg',
    title: 'The Legend of Zelda: Breath of the Wild',
    description: 'Explore Hyrule em um mundo aberto cheio de aventuras e segredos.',
    link: '/jogo/zelda'
  },
  {
    image: 'assets/gamesImgs/super-mario-odyssey.jpg',
    title: 'Super Mario Odyssey',
    description: 'Acompanhe Mario em uma jornada épica por diversos reinos para salvar a princesa Peach.',
    link: '/jogo/mario'
  },
  {
    image: 'assets/gamesImgs/hollow-knight.jpg',
    title: 'Hollow Knight',
    description: 'Um metroidvania desafiador e belo em um reino subterrâneo misterioso.',
    link: '/jogo/hollow‑knight'
  },
  {
    image: 'assets/gamesImgs/celeste.jpg',
    title: 'Celeste',
    description: 'Supere montanhas e desafios internos neste incrível jogo de plataforma.',
    link: '/jogo/celeste'
  },
  {
    image: 'assets/gamesImgs/stardew-valley.png',
    title: 'Stardew Valley',
    description: 'Construa sua fazenda, explore cavernas e viva uma vida tranquila no campo.',
    link: '/jogo/stardew‑valley'
  },
  {
    image: 'assets/gamesImgs/elden-ring.jpg',
    title: 'Elden Ring',
    description: 'Explore as Terras Intermédias em um vasto mundo aberto com combates desafiadores.',
    link: '/jogo/elden‑ring'
  },
  {
    image: 'assets/gamesImgs/minecraft.jpg',
    title: 'Minecraft',
    description: 'Crie, explore e sobreviva em um mundo feito de blocos infinitos.',
    link: '/jogo/minecraft'
  },
  {
    image: 'assets/gamesImgs/the-witcher.png',
    title: 'The Witcher 3: Wild Hunt',
    description: 'Jogue como Geralt de Rivia em uma jornada épica cheia de monstros e escolhas morais.',
    link: '/jogo/witcher‑3'
  },
  {
    image: 'assets/gamesImgs/red-dead-2.jpg',
    title: 'Red Dead Redemption 2',
    description: 'Viva o Velho Oeste em uma história emocionante e cinematográfica.',
    link: '/jogo/red‑dead‑2'
  },
  {
    image: 'assets/gamesImgs/gow.jpg',
    title: 'God of War (2018)',
    description: 'Kratos embarca em uma jornada com seu filho em um mundo inspirado na mitologia nórdica.',
    link: '/jogo/god‑of‑war'
  },
  {
    image: 'assets/gamesImgs/cyberpunk.jpg',
    title: 'Cyberpunk 2077',
    description: 'Mergulhe em Night City, uma metrópole futurista cheia de ação e intriga.',
    link: '/jogo/cyberpunk‑2077'
  },
  {
    image: 'assets/gamesImgs/hades-game.jpg',
    title: 'Hades',
    description: 'Lute para escapar do submundo neste premiado roguelike da Supergiant.',
    link: '/jogo/hades'
  }
];
