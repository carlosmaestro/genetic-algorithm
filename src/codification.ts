import { Individual } from './models/Individual';
export class BinaryCodification{

    static encode(individuals: Individual[], chromLength: number,  ): Individual[]{
        let encodedIndividuals: string[] = [];
        for (const  individual of individuals) {
            individual.bChromosome = '';
            individual.bChromosomeMap = [];
            
            for (let i = 0; i < chromLength; i++) {
                let bGene = individual.chromosome[i].toString(2);
                individual.bChromosome += bGene;
                individual.bChromosomeMap.push(bGene.length);
            }
        }
        return individuals;
    }

    static decode(individuals:  Individual[]): Individual[]{

        for (const individual of individuals) {
            individual.chromosome = [];
            for (const bitMapItem of individual.bChromosomeMap) {
                let bGene = individual.bChromosome.substr(0, bitMapItem);
                individual.chromosome.push(parseInt(bGene, 2))
                individual.bChromosome = individual.bChromosome.substr(bitMapItem, individual.bChromosome.length);
            }
        }

        return individuals;
    }
}