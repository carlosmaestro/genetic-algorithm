import { ChromosomeLimit } from './types';
import { Individual } from './models/Individual';
export class Population {

    size: number;
    individuals: Individual[];


    constructor(size: number, chromLimit: ChromosomeLimit[]) {
        this.size = size;
        this.individuals = [];
        this.generate(size, chromLimit);
    }

    private generate(size: number, chromLimit: ChromosomeLimit[]) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < chromLimit.length; j++) {
                let low = chromLimit[j][0];
                let sup = chromLimit[j][1];
                if (!this.individuals[i]) {
                    this.individuals[i] = {
                        chromosome: [],
                        bChromosome: '',
                        bChromosomeMap: [],
                        evaluation: null
                    };
                }
                this.individuals[i].chromosome[j] = Math.floor(Math.random() * (sup + 1 - low) + low);
            }
        }
    }
}