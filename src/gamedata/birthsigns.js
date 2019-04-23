const birthsigns = {
    apprentice: {
        magickaMultiplier: 1.5,
        specials: {
            abilities: [{
                name: 'Elfborn',
                effects: [{
                    spell: 'fortify_maximum_magicka',
                    text: 'Fortify Maximum Magicka 1.5x INT'
                }, {
                    spell: 'weakness_to_magicka',
                    text: 'Weakness to Magicka 25%'
                }]
            }]
        }
    },
    atronach: {
        magickaMultiplier: 2,
        specials: {
            abilities: [{
                name: 'Wombborn',
                effects: [{
                    spell: 'spell_absorption',
                    text: 'Spell Absorption 50 pts'
                }, {
                    spell: 'fortify_maximum_magicka',
                    text: 'Fortify Maximum Magicka 2.0x INT'
                }, {
                    spell: 'damage_magicka',
                    text: 'Stunted Magicka'
                }]
            }]
        }
    },
    lady: {
        primaryAttributeModifiers: {
            personality: 25,
            endurance: 25
        },
        specials: {
            abilities: [{
                name: 'Lady\'s Favor',
                effects: [{
                    spell: 'fortify_attribute',
                    text: 'Fortify Personality 25 pts'
                }]
            }, {
                name: 'Lady\'s Grace',
                effects: [{
                    spell: 'fortify_attribute',
                    text: 'Fortify Endurance 25 pts'
                }]
            }]
        }
    },
    lord: {
        specials: {
            abilities: [{
                name: 'Trollkin',
                type: 'ability',
                effects: [{
                    spell: 'weakness_to_fire',
                    text: 'Weakness to Fire 100%'
                }]
            }],
            spells: [{
                name: 'Blood of the North',
                type: 'spell',
                effects: [{
                    spell: 'restore_health',
                    text: 'Restore Health 2 pts for 30 secs on Self'
                }]
            }]
        },
    },
    lover: {
        primaryAttributeModifiers: {
            agility: 25
        },
        specials: {
            abilities: [{
                name: 'Mooncalf',
                type: 'ability',
                effects: [{
                    spell: 'fortify_attribute',
                    text: 'Fortify Agility 25 pts'
                }]
            }],
            powers: [{
                name: 'Lover\'s Kiss',
                type: 'power',
                effects: [{
                    spell: 'paralyze',
                    text: 'Paralyze for 60 secs on Target'
                }, {
                    spell: 'damage_fatigue',
                    text: 'Damage Fatigue 200 pts on Self'
                }]
            }]
        }
    },
    mage: {
        magickaMultiplier: 0.5,
        specials: {
            abilities: [{
                name: 'Mooncalf',
                effects: [{
                    spell: 'fortify_maximum_magicka',
                    text: 'Fortify Maximum Magicka 0.5x INT'
                }]
            }]
        }
    },
    ritual: {
        specials: {
            spells: [{
                name: 'Blessed Word',
                effects: [{
                    spell: 'turn_undead',
                    text: 'Turn Undead 100 pts for 30 secs on Target'
                }]
            }, {
                name: 'Blessed Touch',
                effects: [{
                    spell: 'turn_undead',
                    text: 'Turn Undead 100 pts for 30 secs on Touch'
                }],
            }],
            powers: [{
                name: 'Mara\'s Gift',
                effects: [{
                    spell: 'restore_health',
                    text: 'Restore Health 100 pts on Self'
                }]
            }]
        }
    },
    serpent: {
        specials: {
            spells: [{
                name: 'Star-Curse',
                effects: [{
                    spell: 'poison',
                    text: 'Poison 3 pts for 30 secs on Touch'
                }, {
                    spell: 'damage_health',
                    text: 'Damage Health 1 pt for 30 secs on Self'
                }]
            }]
        }
    },
    shadow: {
        specials: {
            powers: [{
                name: 'Moonshadow',
                effects: [{
                    spell: 'invisibility',
                    text: 'Invisibility for 60 pts on Self'
                }]
            }]
        }
    },
    steed: {
        primaryAttributeModifiers: {
            speed: 25
        },
        specials: {
            abilties: [{
                name: 'Charioteer',
                effects: [{
                    spell: 'fortify_attribute',
                    text: 'Fortify Speed 25 pts'
                }]
            }]
        } 
    },
    thief: {
        specials: {
            abilities: [{
                name: 'Akaviri Danger-sense',
                effects: [{
                    spell: 'sanctuary',
                    text: 'Sanctuary 10 pts'
                }]
            }]
        }
    },
    tower: {
        specials: {
            spells: [{
                name: 'Beggar\'s Nose',
                effects: [{
                    spell: 'detect_animal',
                    text: 'Detect Animal for 60 secs in 200 ft'
                }, {
                    spell: 'detect_key',
                    text: 'Detect Key for 60 secs in 200 ft'
                }, {
                    spell: 'detect_enchantment',
                    text: 'Detect Enchantment for 60 secs in 200 ft'
                }]
            }],
            powers: [{
                name: 'Tower Key',
                effects: [{
                    spell: 'open',
                    text: 'Open 50 pts on Touch'
                }]
            }]
        }
    },
    warrior: {
        specials: {
            abilities: [{
                name: 'Warwyrd',
                effects: [{
                    spell: 'fortify_attack',
                    text: 'Fortify Attack 10 pts'
                }]
            }]
        }
    }
};

export default birthsigns;