const startingSpells = [
    {
        school: 'alteration',
        requiredValue: 65,
        name: 'Shield',
        cost: 15,
        effects: [{
            spell: 'shield',
            text: 'Shield 5 pts for 30 secs on Self'
        }]
    },
    {
        school: 'alteration',
        requiredValue: 59,
        name: 'Water Walking',
        cost: 9,
        effects: [{
            spell: 'water_walking',
            text: 'Water Walking for 60 secs on Self'
        }]
    },
    {
        school: 'conjuration',
        requiredValue: 56,
        name: 'Bound Dagger',
        cost: 6,
        effects: [{
            spell: 'bound_dagger',
            text: 'Bound Dagger for 60 secs on Self'
        }]
    },
    {
        school: 'conjuration',
        requiredValue: 71,
        name: 'Summon Ancestral Ghost',
        cost: 21,
        effects: [{
            spell: 'summon_ancestral_ghost',
            text: 'Summon Ancestral Ghost for 60 secs on Self'
        }]
    },
    {
        school: 'destruction',
        requiredValue: 56,
        name: 'Fire Bite',
        cost: 6,
        effects: [{
            spell: 'fire_damage',
            text: 'Fire Damage 15 to 30 pts on Touch'
        }]
    },
    {
        school: 'illusion',
        requiredValue: 65,
        name: 'Chameleon',
        cost: 15,
        effects: [{
            spell: 'chameleon',
            text: 'Chameleon 10% for 30 secs on Self'
        }]
    },
    {
        school: 'illusion',
        requiredValue: 65,
        name: 'Sanctuary',
        cost: 15,
        effects: [{
            spell: 'sanctuary',
            text: 'Sanctuary 10 pts for 30 secs on Self'
        }]
    },
    {
        school: 'mysticism',
        requiredValue: 69,
        name: 'Detect Creature',
        cost: 19,
        effects: [{
            spell: 'detect_animal',
            text: 'Detect Animal 50 to 150 ft for 5 secs on Self'
        }]
    },
    {
        school: 'restoration',
        requiredValue: 63,
        name: 'Hearth Heal',
        cost: 13,
        effects: [{
            spell: 'restore_health',
            text: 'Restore Health 20 to 80 pts on Self'
        }]       
    }
];

export default startingSpells;