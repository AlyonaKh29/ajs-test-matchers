import { sortHeroesByHealth } from "../index.js";

describe('sortHeroesByHealth', () => {
    test('should sort by decreasing health', () => {
        const heroes = [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
        ];

        const sorted = sortHeroesByHealth(heroes);

        expect(sorted).toEqual([
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
        ]);
    });

    test('if the same health', () => {
        const heroes = [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 80},
            {name: 'лучник', health: 80},
        ];

        const sorted = sortHeroesByHealth(heroes);

        expect(sorted).toEqual([
            {name: 'маг', health: 80},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
        ]);
    });
});