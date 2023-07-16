const startingSpellsBySchool = {
    alteration: {
        spells: [{
            requiredSkill: 65,
            name: 'Shield',
            cost: 15,
            effects: [{
                spell: 'shield',
                text: 'Shield 5 pts for 30 secs on Self'
            }]
        }, {
            requiredSkill: 59,
            name: 'Water Walking',
            cost: 9,
            effects: [{
                spell: 'water_walking',
                text: 'Water Walking for 60 secs on Self'
            }]
        }]
    },
    conjuration: {
        spells: [{
            requiredSkill: 56,
            name: 'Bound Dagger',
            cost: 6,
            effects: [{
                spell: 'bound_dagger',
                text: 'Bound Dagger for 60 secs on Self'
            }]
        }, {
            requiredSkill: 71,
            name: 'Summon Ancestral Ghost',
            cost: 21,
            effects: [{
                spell: 'summon_ancestral_ghost',
                text: 'Summon Ancestral Ghost for 60 secs'
            }]
        }]
    },
    destruction: {
        spells: [{
            requiredSkill: 56,
            name: 'Fire Bite',
            cost: 6,
            effects: [{
                spell: 'fire_damage',
                text: 'Fire Damage 15-30 pts for 1 sec on Touch'
            }]
        }]
    },
    illusion: {
        spells: [{
            requiredSkill: 65,
            name: 'Chameleon',
            cost: 15,
            effects: [{
                spell: 'chameleon',
                text: 'Chameleon 10 pts for 30 secs on Self'
            }]
        }, {
            requiredSkill: 65,
            name: 'Sanctuary',
            cost: 15,
            effects: [{
                spell: 'sanctuary',
                text: 'Sanctuary 10 pts for 30 secs on Self'
            }]
        }]
    },
    mysticism: {
        spells: [{
            requiredSkill: 69,
            name: 'Detect Creature',
            cost: 19,
            effects: [{
                spell: 'detect_animal',
                text: 'Detect Animal 50-100 pts for 5 secs on Self'
            }]
        }]
    },
    restoration: {
        spells: [{
            requiredSkill: 63,
            name: 'Hearth Heal',
            cost: 13,
            effects: [{
                spell: 'restore_health',
                text: 'Restore Health 20-80 pts for 1 sec on Self'
            }]
        }]
    },
};

export default startingSpellsBySchool;