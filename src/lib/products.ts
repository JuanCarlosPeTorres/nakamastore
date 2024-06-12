export interface Product {
    id: string;
    name: string;
    image: string[];
    price: number;
    description: string;
    categories: string[];
  }
  
  const products: Product[] = [
    {
      id: '1',
      name: 'Funko de Mickey Mouse',
      image: ['./funkos/01/1.png', './funkos/01/2.png'],
      price: 10,
      description: 'Funko de Mickey Mouse, ideal para coleccionistas. 1',
      categories: ['Disney', 'Animación de otra cosa para']
    },
    {
      id: '2',
      name: 'Funko de Goku',
      image: ['./funkos/02/1.png', './funkos/02/2.png',],
      price: 15,
      description: 'Funko de Goku, para los amantes de Dragon Ball. 2',
      categories: ['Anime']
    },
    {
      id: '3',
      name: 'Funko de Spider-Man',
      image: ['./funkos/03/1.png', './funkos/03/2.png',],
      price: 12,
      description: 'Funko de Spider-Man, un héroe arácnido. 3',
      categories: ['Marvel', 'Superhéroes']
    },
    {
      id: '4',
      name: 'Funko de Harry Potter',
      image: ['./funkos/04/1.jpg', './funkos/04/2.png',],
      price: 18,
      description: 'Funko de Harry Potter, el niño que sobrevivió. 4',
      categories: ['Fantasía', 'Magia']
    },
    {
      id: '5',
      name: 'Funko de Pikachu',
      image: ['./funkos/05/1.png', './funkos/05/2.png',],
      price: 9,
      description: 'Funko de Pikachu, el Pokémon más conocido. 5',
      categories: ['Videojuegos', 'Animales']
    },
    {
      id: '6',
      name: 'Funko de Darth Vader',
      image: ['./funkos/06/1.png', './funkos/06/2.png',],
      price: 20,
      description: 'Funko de Darth Vader, el señor oscuro de la galaxia. 6',
      categories: ['Ciencia ficción', 'Star Wars']
    },
    {
      id: '7',
      name: 'Funko de Superman',
      image: ['./funkos/07/1.png', './funkos/07/2.png',],
      price: 16,
      description: 'Funko de Superman, el héroe de Metrópolis. 7',
      categories: ['DC Comics', 'Superhéroes']
    },
    {
      id: '8',
      name: 'Funko de Sonic',
      image: ['./funkos/08/1.png', './funkos/08/2.png',],
      price: 14,
      description: 'Funko de Sonic, el erizo más rápido del mundo. 8',
      categories: ['Videojuegos', 'Animales']
    }, 
    {
      id: '9',
      name: 'Funko de Mickey Mouse',
      image: ['./funkos/01/1.png', './funkos/01/2.png'],
      price: 10,
      description: 'Funko de Mickey Mouse, ideal para coleccionistas. 9',
      categories: ['Disney', 'Animación de otra cosa para']
    },
    {
      id: '10',
      name: 'Funko de Goku',
      image: ['./funkos/02/1.png', './funkos/02/2.png',],
      price: 15,
      description: 'Funko de Goku, para los amantes de Dragon Ball. 10',
      categories: ['Anime']
    },
    {
      id: '11',
      name: 'Funko de Spider-Man',
      image: ['./funkos/03/1.png', './funkos/03/2.png',],
      price: 12,
      description: 'Funko de Spider-Man, un héroe arácnido. 11',
      categories: ['Marvel', 'Superhéroes']
    },
    {
      id: '12',
      name: 'Funko de Harry Potter',
      image: ['./funkos/04/1.jpg', './funkos/04/2.png',],
      price: 18,
      description: 'Funko de Harry Potter, el niño que sobrevivió. 12',
      categories: ['Fantasía', 'Magia']
    },
    {
      id: '13',
      name: 'Funko de Pikachu',
      image: ['./funkos/05/1.png', './funkos/05/2.png',],
      price: 9,
      description: 'Funko de Pikachu, el Pokémon más conocido. 13',
      categories: ['Videojuegos', 'Animales']
    },
    {
      id: '14',
      name: 'Funko de Darth Vader',
      image: ['./funkos/06/1.png', './funkos/06/2.png',],
      price: 20,
      description: 'Funko de Darth Vader, el señor oscuro de la galaxia. 14',
      categories: ['Ciencia ficción', 'Star Wars']
    },
    {
      id: '15',
      name: 'Funko de Superman',
      image: ['./funkos/07/1.png', './funkos/07/2.png',],
      price: 16,
      description: 'Funko de Superman, el héroe de Metrópolis. 15',
      categories: ['DC Comics', 'Superhéroes']
    },
    {
      id: '16',
      name: 'Funko de Sonic',
      image: ['./funkos/08/1.png', './funkos/08/2.png',],
      price: 14,
      description: 'Funko de Sonic, el erizo más rápido del mundo. 16',
      categories: ['Videojuegos', 'Animales']
    },
    {
      id: '17',
      name: 'Funko de Mickey Mouse',
      image: ['./funkos/01/1.png', './funkos/01/2.png'],
      price: 10,
      description: 'Funko de Mickey Mouse, ideal para coleccionistas. 17',
      categories: ['Disney', 'Animación de otra cosa para']
    },
    {
      id: '18',
      name: 'Funko de Goku',
      image: ['./funkos/02/1.png', './funkos/02/2.png',],
      price: 15,
      description: 'Funko de Goku, para los amantes de Dragon Ball. 18',
      categories: ['Anime']
    },
    {
      id: '19',
      name: 'Funko de Spider-Man',
      image: ['./funkos/03/1.png', './funkos/03/2.png',],
      price: 12,
      description: 'Funko de Spider-Man, un héroe arácnido. 19',
      categories: ['Marvel', 'Superhéroes']
    },
    {
      id: '20',
      name: 'Funko de Harry Potter',
      image: ['./funkos/04/1.jpg', './funkos/04/2.png',],
      price: 18,
      description: 'Funko de Harry Potter, el niño que sobrevivió. 20',
      categories: ['Fantasía', 'Magia']
    },
    {
      id: '21',
      name: 'Funko de Pikachu',
      image: ['./funkos/05/1.png', './funkos/05/2.png',],
      price: 9,
      description: 'Funko de Pikachu, el Pokémon más conocido. 21',
      categories: ['Videojuegos', 'Animales']
    },
    {
      id: '22',
      name: 'Funko de Darth Vader',
      image: ['./funkos/06/1.png', './funkos/06/2.png',],
      price: 20,
      description: 'Funko de Darth Vader, el señor oscuro de la galaxia. 22',
      categories: ['Ciencia ficción', 'Star Wars']
    },
    {
      id: '23',
      name: 'Funko de Superman',
      image: ['./funkos/07/1.png', './funkos/07/2.png',],
      price: 16,
      description: 'Funko de Superman, el héroe de Metrópolis. 23',
      categories: ['DC Comics', 'Superhéroes']
    },
    {
      id: '24',
      name: 'Funko de Sonic',
      image: ['./funkos/08/1.png', './funkos/08/2.png',],
      price: 14,
      description: 'Funko de Sonic, el erizo más rápido del mundo. 24',
      categories: ['Videojuegos', 'Animales']
    },
    {
      id: '25',
      name: 'Funko de Mickey Mouse',
      image: ['./funkos/01/1.png', './funkos/01/2.png'],
      price: 10,
      description: 'Funko de Mickey Mouse, ideal para coleccionistas. 25',
      categories: ['Disney', 'Animación de otra cosa para']
    },
    {
      id: '26',
      name: 'Funko de Goku',
      image: ['./funkos/02/1.png', './funkos/02/2.png',],
      price: 15,
      description: 'Funko de Goku, para los amantes de Dragon Ball. 26',
      categories: ['Anime']
    },
    {
      id: '27',
      name: 'Funko de Spider-Man',
      image: ['./funkos/03/1.png', './funkos/03/2.png',],
      price: 12,
      description: 'Funko de Spider-Man, un héroe arácnido. 27',
      categories: ['Marvel', 'Superhéroes']
    },
    {
      id: '28',
      name: 'Funko de Harry Potter',
      image: ['./funkos/04/1.jpg', './funkos/04/2.png',],
      price: 18,
      description: 'Funko de Harry Potter, el niño que sobrevivió. 28',
      categories: ['Fantasía', 'Magia']
    },
    {
      id: '29',
      name: 'Funko de Pikachu',
      image: ['./funkos/05/1.png', './funkos/05/2.png',],
      price: 9,
      description: 'Funko de Pikachu, el Pokémon más conocido. 29',
      categories: ['Videojuegos', 'Animales']
    },
    {
      id: '30',
      name: 'Funko de Darth Vader',
      image: ['./funkos/06/1.png', './funkos/06/2.png',],
      price: 20,
      description: 'Funko de Darth Vader, el señor oscuro de la galaxia. 30',
      categories: ['Ciencia ficción', 'Star Wars']
    },
    {
      id: '31',
      name: 'Funko de Superman',
      image: ['./funkos/07/1.png', './funkos/07/2.png',],
      price: 16,
      description: 'Funko de Superman, el héroe de Metrópolis. 31',
      categories: ['DC Comics', 'Superhéroes']
    },
    {
      id: '32',
      name: 'Funko de Sonic',
      image: ['./funkos/08/1.png', './funkos/08/2.png',],
      price: 14,
      description: 'Funko de Sonic, el erizo más rápido del mundo. 32',
      categories: ['Videojuegos', 'Animales']
    },
    {
      id: '33',
      name: 'Funko de Mickey Mouse',
      image: ['./funkos/01/1.png', './funkos/01/2.png'],
      price: 10,
      description: 'Funko de Mickey Mouse, ideal para coleccionistas. 1',
      categories: ['Disney', 'Animación de otra cosa para']
    },
    {
      id: '34',
      name: 'Funko de Goku',
      image: ['./funkos/02/1.png', './funkos/02/2.png',],
      price: 15,
      description: 'Funko de Goku, para los amantes de Dragon Ball. 2',
      categories: ['Anime']
    },
    {
      id: '35',
      name: 'Funko de Spider-Man',
      image: ['./funkos/03/1.png', './funkos/03/2.png',],
      price: 12,
      description: 'Funko de Spider-Man, un héroe arácnido. 3',
      categories: ['Marvel', 'Superhéroes']
    },
    {
      id: '36',
      name: 'Funko de Harry Potter',
      image: ['./funkos/04/1.jpg', './funkos/04/2.png',],
      price: 18,
      description: 'Funko de Harry Potter, el niño que sobrevivió. 4',
      categories: ['Fantasía', 'Magia']
    },
    {
      id: '37',
      name: 'Funko de Pikachu',
      image: ['./funkos/05/1.png', './funkos/05/2.png',],
      price: 9,
      description: 'Funko de Pikachu, el Pokémon más conocido. 5',
      categories: ['Videojuegos', 'Animales']
    },
    {
      id: '38',
      name: 'Funko de Darth Vader',
      image: ['./funkos/06/1.png', './funkos/06/2.png',],
      price: 20,
      description: 'Funko de Darth Vader, el señor oscuro de la galaxia. 6',
      categories: ['Ciencia ficción', 'Star Wars']
    },
    {
      id: '39',
      name: 'Funko de Superman',
      image: ['./funkos/07/1.png', './funkos/07/2.png',],
      price: 16,
      description: 'Funko de Superman, el héroe de Metrópolis. 7',
      categories: ['DC Comics', 'Superhéroes']
    },
    {
      id: '40',
      name: 'Funko de Sonic',
      image: ['./funkos/08/1.png', './funkos/08/2.png',],
      price: 14,
      description: 'Funko de Sonic, el erizo más rápido del mundo. 8',
      categories: ['Videojuegos', 'Animales']
    }, 
    {
      id: '41',
      name: 'Funko de Mickey Mouse',
      image: ['./funkos/01/1.png', './funkos/01/2.png'],
      price: 10,
      description: 'Funko de Mickey Mouse, ideal para coleccionistas. 9',
      categories: ['Disney', 'Animación de otra cosa para']
    },
    {
      id: '42',
      name: 'Funko de Goku',
      image: ['./funkos/02/1.png', './funkos/02/2.png',],
      price: 15,
      description: 'Funko de Goku, para los amantes de Dragon Ball. 10',
      categories: ['Anime']
    },
    {
      id: '43',
      name: 'Funko de Spider-Man',
      image: ['./funkos/03/1.png', './funkos/03/2.png',],
      price: 12,
      description: 'Funko de Spider-Man, un héroe arácnido. 11',
      categories: ['Marvel', 'Superhéroes']
    },
    {
      id: '44',
      name: 'Funko de Harry Potter',
      image: ['./funkos/04/1.jpg', './funkos/04/2.png',],
      price: 18,
      description: 'Funko de Harry Potter, el niño que sobrevivió. 12',
      categories: ['Fantasía', 'Magia']
    },
    {
      id: '45',
      name: 'Funko de Pikachu',
      image: ['./funkos/05/1.png', './funkos/05/2.png',],
      price: 9,
      description: 'Funko de Pikachu, el Pokémon más conocido. 13',
      categories: ['Videojuegos', 'Animales']
    },
    {
      id: '46',
      name: 'Funko de Darth Vader',
      image: ['./funkos/06/1.png', './funkos/06/2.png',],
      price: 20,
      description: 'Funko de Darth Vader, el señor oscuro de la galaxia. 14',
      categories: ['Ciencia ficción', 'Star Wars']
    },
    {
      id: '47',
      name: 'Funko de Superman',
      image: ['./funkos/07/1.png', './funkos/07/2.png',],
      price: 16,
      description: 'Funko de Superman, el héroe de Metrópolis. 15',
      categories: ['DC Comics', 'Superhéroes']
    },
    {
      id: '48',
      name: 'Funko de Sonic',
      image: ['./funkos/08/1.png', './funkos/08/2.png',],
      price: 14,
      description: 'Funko de Sonic, el erizo más rápido del mundo. 16',
      categories: ['Videojuegos', 'Animales']
    },
    {
      id: '49',
      name: 'Funko de Mickey Mouse',
      image: ['./funkos/01/1.png', './funkos/01/2.png'],
      price: 10,
      description: 'Funko de Mickey Mouse, ideal para coleccionistas. 17',
      categories: ['Disney', 'Animación de otra cosa para']
    },
    {
      id: '50',
      name: 'Funko de Goku',
      image: ['./funkos/02/1.png', './funkos/02/2.png',],
      price: 15,
      description: 'Funko de Goku, para los amantes de Dragon Ball. 18',
      categories: ['Anime']
    },
    {
      id: '51',
      name: 'Funko de Spider-Man',
      image: ['./funkos/03/1.png', './funkos/03/2.png',],
      price: 12,
      description: 'Funko de Spider-Man, un héroe arácnido. 19',
      categories: ['Marvel', 'Superhéroes']
    },
    {
      id: '52',
      name: 'Funko de Harry Potter',
      image: ['./funkos/04/1.jpg', './funkos/04/2.png',],
      price: 18,
      description: 'Funko de Harry Potter, el niño que sobrevivió. 20',
      categories: ['Fantasía', 'Magia']
    },
    {
      id: '53',
      name: 'Funko de Pikachu',
      image: ['./funkos/05/1.png', './funkos/05/2.png',],
      price: 9,
      description: 'Funko de Pikachu, el Pokémon más conocido. 21',
      categories: ['Videojuegos', 'Animales']
    },
    {
      id: '54',
      name: 'Funko de Darth Vader',
      image: ['./funkos/06/1.png', './funkos/06/2.png',],
      price: 20,
      description: 'Funko de Darth Vader, el señor oscuro de la galaxia. 22',
      categories: ['Ciencia ficción', 'Star Wars']
    },
    {
      id: '55',
      name: 'Funko de Superman',
      image: ['./funkos/07/1.png', './funkos/07/2.png',],
      price: 16,
      description: 'Funko de Superman, el héroe de Metrópolis. 23',
      categories: ['DC Comics', 'Superhéroes']
    },
    {
      id: '56',
      name: 'Funko de Sonic',
      image: ['./funkos/08/1.png', './funkos/08/2.png',],
      price: 14,
      description: 'Funko de Sonic, el erizo más rápido del mundo. 24',
      categories: ['Videojuegos', 'Animales']
    },
    {
      id: '57',
      name: 'Funko de Mickey Mouse',
      image: ['./funkos/01/1.png', './funkos/01/2.png'],
      price: 10,
      description: 'Funko de Mickey Mouse, ideal para coleccionistas. 25',
      categories: ['Disney', 'Animación de otra cosa para']
    },
    {
      id: '58',
      name: 'Funko de Goku',
      image: ['./funkos/02/1.png', './funkos/02/2.png',],
      price: 15,
      description: 'Funko de Goku, para los amantes de Dragon Ball. 26',
      categories: ['Anime']
    },
    {
      id: '59',
      name: 'Funko de Spider-Man',
      image: ['./funkos/03/1.png', './funkos/03/2.png',],
      price: 12,
      description: 'Funko de Spider-Man, un héroe arácnido. 27',
      categories: ['Marvel', 'Superhéroes']
    },
    {
      id: '60',
      name: 'Funko de Harry Potter',
      image: ['./funkos/04/1.jpg', './funkos/04/2.png',],
      price: 18,
      description: 'Funko de Harry Potter, el niño que sobrevivió. 28',
      categories: ['Fantasía', 'Magia']
    },
    {
      id: '61',
      name: 'Funko de Pikachu',
      image: ['./funkos/05/1.png', './funkos/05/2.png',],
      price: 9,
      description: 'Funko de Pikachu, el Pokémon más conocido. 29',
      categories: ['Videojuegos', 'Animales']
    },
    {
      id: '62',
      name: 'Funko de Darth Vader',
      image: ['./funkos/06/1.png', './funkos/06/2.png',],
      price: 20,
      description: 'Funko de Darth Vader, el señor oscuro de la galaxia. 30',
      categories: ['Ciencia ficción', 'Star Wars']
    },
    {
      id: '63',
      name: 'Funko de Superman',
      image: ['./funkos/07/1.png', './funkos/07/2.png',],
      price: 16,
      description: 'Funko de Superman, el héroe de Metrópolis. 31',
      categories: ['DC Comics', 'Superhéroes']
    },
    {
      id: '64',
      name: 'Funko de Sonic',
      image: ['./funkos/08/1.png', './funkos/08/2.png',],
      price: 14,
      description: 'Funko de Sonic, el erizo más rápido del mundo. 32',
      categories: ['Videojuegos', 'Animales']
    }
  ];
  
  
  export function getProducts(): Product[] {
    return products;
  }
  