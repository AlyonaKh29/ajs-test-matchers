function sortHeroesByHealth(heroes) {
    const copyHeroes = [...heroes];
    copyHeroes.sort((a, b) => b.health - a.health);
    return copyHeroes;
}

export { sortHeroesByHealth };
