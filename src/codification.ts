import { Individual } from './models/Individual';
export class BinaryCodification{

    static encode(individuals: Individual[], chromLength: number, geneSize: number ): Individual[]{
        let defaultGene = '';
        for (let i = 0; i < geneSize; i++) {
            defaultGene += '0';
        }
        for (const  individual of individuals) {
            individual.bChromosome = '';
            
            for (let i = 0; i < chromLength; i++) {
                let bGene = (defaultGene + individual.chromosome[i].toString(2)).substr(-geneSize);
                individual.bChromosome += bGene;
            }
        }
        return individuals;
    }

    static decode(individuals:  Individual[], geneSize: number): Individual[]{
        const numGene = individuals[0].chromosome.length;
        for (const individual of individuals) {
            individual.chromosome = [];
            for (let i = 0; i < numGene; i++) {
                let bGene = individual.bChromosome.substr(i * geneSize, geneSize);
                individual.chromosome.push(parseInt(bGene, 2))
            }
        }
        return individuals;
    }
}