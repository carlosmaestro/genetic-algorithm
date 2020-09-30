import { Population } from './src/population';
import { BinaryCodification } from './src/codification';
import { fitness } from './src/fitness';
import { roulettePairs } from './src/roulette';

console.log('iniciando algoritmo...');

// number of individuals in the population
const NUM_IND = 100;

// number of pairs in roulette
const NUM_PAIRS = 4;

// size in bits of gene
const GENE_SIZE = 4;

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
let bIndividual = BinaryCodification.encode(population.individuals, CHROM_LIM.length, GENE_SIZE);
population.individuals = fitness(population.individuals);

console.log(BinaryCodification.decode(bIndividual, GENE_SIZE));

let pairs = roulettePairs(population.individuals, NUM_PAIRS);

console.info(pairs);
