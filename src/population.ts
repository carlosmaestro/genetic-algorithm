export class Population {

    individuals: number[][];

    constructor(size: number, chromLimit: [number, number][]) {
        this.individuals = [];
        this.generate(size, chromLimit);
    }

    private generate(size: number, chromLimit: [number, number][]) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < chromLimit.length; j++) {
                let low = chromLimit[j][0];
                let sup = chromLimit[j][1];
                if (!this.individuals[i]) {
                    this.individuals[i] = [];
                }
                this.individuals[i][j] = Math.floor(Math.random() * (sup + 1 - low) + low);
            }
        }
    }
}