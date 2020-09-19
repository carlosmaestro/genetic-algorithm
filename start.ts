import { Population } from './src/population';

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


console.log(population);
