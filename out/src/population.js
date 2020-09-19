"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Population = void 0;
var Population = /** @class */ (function () {
    function Population(size, nChrom) {
        this.individuals = [];
        this.generate(size, nChrom);
    }
    Population.prototype.generate = function (size, nChrom) {
        var chromLimit = [0, nChrom];
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var low = chromLimit[0];
                var sup = chromLimit[1];
                if (!this.individuals[i]) {
                    this.individuals[i] = [];
                }
                this.individuals[i][j] = Math.floor(Math.random() * (sup + 1 - low) + low);
            }
        }
    };
    return Population;
}());
exports.Population = Population;
//# sourceMappingURL=population.js.map