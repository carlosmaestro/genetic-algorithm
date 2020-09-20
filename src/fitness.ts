import { Individual } from './models/Individual';

const EVALUATION_VALUE: number = 10;

export const fitness = (individuals: Individual[]): Individual[] => {
    for (const individual of individuals) {
        individual.evaluation = objective(individual);
    }
    return individuals;
}

export const objective = (individual: Individual): number => {
    let evaluation = EVALUATION_VALUE;
    for (const item of individual.chromosome) {
        evaluation -= item * item;
    }
    return evaluation;
}