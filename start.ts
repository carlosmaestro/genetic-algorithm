import { Population } from './src/population';
import { BinaryCodification } from './src/codification';
import { fitness } from './src/fitness';

console.log('iniciando algoritmo..');

// number of individuals in the population
const NUM_IND = 10;

// number of chromossomes
const CHROM_LIM: [number, number][] = [
    [0, 9],
    [0, 9],
    [0, 9],
    [0, 9],
    [0, 9],
    [0, 9],
    [0, 9],
    [0, 9],
    [0, 9],
    [0, 9],
];

let population = new Population(NUM_IND, CHROM_LIM);



// console.log(population);
let bIndividual = BinaryCodification.encode(population.individuals, CHROM_LIM.length);
population.individuals = fitness(population.individuals);
console.log(BinaryCodification.decode(bIndividual));
