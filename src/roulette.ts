import { Individual } from './models/Individual';


export const roulettePairs = (individuals: Individual[], numPairs: number):[Individual, Individual][] => {
    let choosedIndividuals: number[] = [];

    if(numPairs <= 0){
        throw("The number of pairs mus be greater than 0(zero)");
    }

    let limitIndividuals = numPairs * 2;
    while(choosedIndividuals.length < limitIndividuals){
        let choose = Math.floor(Math.random() * (individuals.length));
        if(choosedIndividuals.indexOf(choose) == -1 ){
            choosedIndividuals.push(choose);
        }
    }

    let pairs: [Individual, Individual][] = [];

    for (let index = 0; index < numPairs; index++) {
        let actualIndex = index * 2;
        const element = choosedIndividuals[index];
        pairs.push([individuals[choosedIndividuals[actualIndex]], individuals[choosedIndividuals[actualIndex + 1]]])
    }

    return pairs;
}