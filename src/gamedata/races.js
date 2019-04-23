// primary stats
// skills adjustments
// race effects

const raceData = {
    argonian: {
        primaryAttributes: {
            male: {
                strength: 40,
                intelligence: 40,
                willpower: 30,
                agility: 50,
                speed: 50,
                endurance: 30,
                personality: 30,
                luck: 40,
            },
            female: {
                strength: 40,
                intelligence: 50,
                willpower: 40,
                agility: 40,
                speed: 40,
                endurance: 30,
                personality: 30,
                luck: 40,
            }
        },
        skills: {
            alchemy: 5,
            athletics: 15,
            illusion: 5,
            medium_armor: 5,
            mysticism: 5,
            spear: 5,
            unarmored: 5
        },
        specials: {
            abilities: [{
                name: 'immune_to_poison',
                effects: [{
                    spell: 'resist_poison',
                    text: 'Resist Poison 100%'
                }]
            }, {
                name: 'resist_disease',
                effects: [{
                    spell: 'resist_common_disease',
                    text: 'Resist Common Disease 75%'
                }]
            }],
            spells: [{
                name: 'Water Breathing',
                effects: [{
                    spell: 'water_breathing',
                    text: 'Water Breathing for 120 secs on Self'
                }]
            }]
        }
    },
    breton: {
        primaryAttributes: {
            male: {
                strength: 40,
                intelligence: 50,
                willpower: 50,
                agility: 30,
                speed: 30,
                endurance: 30,
                personality: 40,
                luck: 40
            },
            female: {
                strength: 30,
                intelligence: 50,
                willpower: 50,
                agility: 30,
                speed: 40,
                endurance: 30,
                personality: 40,
                luck: 40
            }
        },
        skills: {
            alchemy: 5,
            alteration: 5,
            conjuration: 10,
            illusion: 5,
            mysticism: 10,
            restoration: 10
        },
        magickaMultiplier: 0.5,
        specials: {
            abilities: [{
                name: 'Resist Magicka',
                effects: [{
                    spell: 'resist_magicka',
                    text: 'Resist Magicka 50%'
                }]
            }, {
                name: 'Magicka Bonus',
                effects: [{
                    spell: 'fortify_maximum_magicka',
                    text: 'Fortify Maximum Magicka 0.5x INT'
                }]
            }],
            powers: [{
                name: 'Dragon Skin',
                effects: [{
                    spell: 'shield',
                    text: 'Shield 50 pts on Self'
                }]
            }]
        }
    },
    dark_elf: {
        primaryAttributes: {
            male: {
                strength: 40,
                intelligence: 40,
                willpower: 30,
                agility: 40,
                speed: 50,
                endurance: 40,
                personality: 30,
                luck: 40
            },
            female: {
                strength: 40,
                intelligence: 40,
                willpower: 30,
                agility: 40,
                speed: 50,
                endurance: 30,
                personality: 40,
                luck: 40
            }
        },
        skills: {
            athletics: 5,
            destruction: 10,
            light_armor: 5,
            long_blade: 5,
            marksman: 5,
            mysticism: 5,
            short_blade: 10
        },
        specials: {
            abilities: [{
                name: 'Resist Fire',
                type: 'ability',
                effects: [{
                    spell: 'resist_fire',
                    text: 'Resist Fire 75%'
                }]
            }],
            powers: [{
                name: 'Ancestor Guardian',
                effects: [{
                    spell: 'sanctuary',
                    text: 'Sanctuary 50 pts for 60 sec on Self'
                }]
            }]
        }
    },
    high_elf: {
        primaryAttributes: {
            male: {
                strength: 30,
                intelligence: 50,
                willpower: 40,
                agility: 40,
                speed: 30,
                endurance: 40,
                personality: 40,
                luck: 40
            },
            female: {
                strength: 30,
                intelligence: 50,
                willpower: 40,
                agility: 40,
                speed: 40,
                endurance: 30,
                personality: 40,
                luck: 40
            }
        },
        skills: {
            alchemy: 10,
            alteration: 5,
            conjuration: 5,
            destruction: 10,
            enchant: 10,
            illusion: 5
        },
        magickaMultiplier: 1.5,
        specials: {
            abilities: [{
                name: 'Resist Disease',
                effects: [{
                    spell: 'resist_common_disease',
                    text: 'Resist Common Disease 75%'
                }]
            }, {
                name: 'Weakness to Shock',
                effects: [{
                    spell: 'weakness_to_shock',
                    text: 'Weakness to Shock 25%'
                }]
            }, {
                name: 'Weakness to Frost',
                effects: [{
                    spell: 'weakness_to_frost',
                    text: 'Weakness to Frost 25%'
                }]
            }, {
                name: 'Weakness to Fire',
                effects: [{
                    spell: 'weakness_to_fire',
                    text: 'Weakness to Fire 50%'
                }]
            }, {
                name: 'Weakness to Magicka',
                effects: [{
                    spell: 'weakness_to_frost',
                    text: 'Weakness to Magicka 50%'
                }]
            }, {
                name: 'Magicka Bonus',
                effects: [{
                    spell: 'fortify_maximum_magicka',
                    text: 'Fortify Maximum Magicka 1.5x INT'
                }]
            }]
        } 
    },
    imperial: {
        primaryAttributes: {
            male: {
                strength: 40,
                intelligence: 40,
                willpower: 30,
                agility: 30,
                speed: 40,
                endurance: 40,
                personality: 50,
                luck: 40
            },
            female: {
                strength: 40,
                intelligence: 40,
                willpower: 40,
                agility: 30,
                speed: 30,
                endurance: 40,
                personality: 50,
                luck: 40
            }
        },
        skills: {
            blunt_weapon: 5,
            hand_to_hand: 5,
            light_armor: 5,
            long_blade: 10,
            mercantile: 10,
            speechcraft: 10
        },
        specials: {
            powers: [{
                name: 'Star of the West',
                effects: [{
                    spell: 'absorb_fatigue',
                    text: 'Absorb Fatigue 200 pts on Target'
                }]
            }, {
                name: 'Voice of the Emperor',
                effects: [{
                    spell: 'charm',
                    text: 'Charm 25 to 50 pts for 15 secs on Target'
                }]
            }]
        }
    },
    khajiit: {
        primaryAttributes: {
            male: {
                strength: 40,
                intelligence: 40,
                willpower: 30,
                agility: 50,
                speed: 40,
                endurance: 30,
                personality: 40,
                luck: 40
            },
            female: {
                strength: 30,
                intelligence: 40,
                willpower: 30,
                agility: 50,
                speed: 40,
                endurance: 40,
                personality: 40,
                luck: 40
            }
        },
        skills: {
            acrobatics: 15,
            athletics: 5,
            hand_to_hand: 5,
            light_armor: 5,
            security: 5,
            short_blade: 5,
            sneak: 5
        },
        specials: {
            powers: [{
                name: 'Eye of Fear',
                effects: [{
                    spell: 'demoralize_humanoid',
                    text: 'Demoralize Humanoid 100 pts for 30 secs on Target'
                }]
            }],
            spells: [{
                name: 'Eye of Night',
                effects: [{
                    spell: 'night_eye',
                    text: 'Night Eye 50 pts for 30 secs on Self'
                }]
            }]
        }
    },
    nord: {
        primaryAttributes: {
            male: {
                strength: 50,
                intelligence: 30,
                willpower: 40,
                agility: 30,
                speed: 40,
                endurance: 50,
                personality: 30,
                luck: 40
            },
            female: {
                strength: 50,
                intelligence: 30,
                willpower: 50,
                agility: 30,
                speed: 40,
                endurance: 40,
                personality: 30,
                luck: 40
            }
        },
        skills: {
            axe: 10,
            blunt_weapon: 10,
            heavy_armor: 5,
            long_blade: 5,
            medium_armor: 10,
            spear: 5
        },
        specials: {
            abilities: [{
                name: 'Resist Shock',
                effects: [{
                    spell: 'resist_shock',
                    text: 'Resist Shock 50%'
                }]
            }, {
                name: 'Immune to Frost',
                effects: [{
                    spell: 'resist_frost',
                    text: 'Resist Frost 100%'
                }]
            }],
            powers: [{
                name: 'Thunder Fist',
                effects: [{
                    spell: 'frost_damage',
                    text: 'Frost Damage 25 pts on Touch'
                }]
            }, {
                name: 'Woad',
                effects: [{
                    spell: 'shield',
                    text: 'Shield 30 pts for 60 secs on Self'
                }]
            }]
        }
    },
    orc: {
        primaryAttributes: {
            male: {
                strength: 45,
                intelligence: 30,
                willpower: 50,
                agility: 35,
                speed: 30,
                endurance: 50,
                personality: 30,
                luck: 40
            },
            female: {
                strength: 45,
                intelligence: 40,
                willpower: 45,
                agility: 35,
                speed: 30,
                endurance: 50,
                personality: 25,
                luck: 40
            }
        },
        skills: {
            armorer: 10,
            axe: 5,
            block: 10,
            heavy_armor: 10,
            medium_armor: 10
        },
        specials: {
            abilties: [{
                name: 'Resist Magicka',
                effects: [{
                    spell: 'resist_magicka',
                    text: 'Resist Magicka 25%'
                }]
            }],
            powers: [{
                name: 'Berserk',
                effects: [{
                    spell: 'fortify_health',
                    text: 'Fortify Health 20 pts for 60 secs on Self'
                }, {
                    spell: 'fortify_fatigue',
                    text: 'Fortify Fatigue 200 pts for 60 secs on Self'
                }, {
                    spell: 'fortify_attack',
                    text: 'Fortify Attack 100 pts for 60 secs on Self'
                }, {
                    spell: 'drain_attribute',
                    text: 'Drain Agility 100 pts for 60 secs on Self'
                }]
            }]
        }
    },
    redguard: {
        primaryAttributes: {
            male: {
                strength: 50,
                intelligence: 30,
                willpower: 30,
                agility: 40,
                speed: 40,
                endurance: 50,
                personality: 30,
                luck: 40
            },
            female: {
                strength: 40,
                intelligence: 30,
                willpower: 30,
                agility: 40,
                speed: 40,
                endurance: 50,
                personality: 40,
                luck: 40
            }
        },
        skills: {
            axe: 5,
            athletics: 5,
            blunt_weapon: 5,
            heavy_armor: 5,
            long_blade: 15,
            medium_armor: 5,
            short_blade: 5
        },
        specials: {
            abilities: [{
                name: 'Resist Poison',
                effects: [{
                    spell: 'resist_poison',
                    text: 'Resist Poison 75%'
                }]
            }, {
                name: 'Resist Disease',
                effects: [{
                    spell: 'resist_common_disease',
                    text: 'Resist Common Disease 75%'
                }]
            }],
            powers: [{
                name: 'Adrenaline Rush',
                effects: [{
                    spell: 'fortify_attribute',
                    text: 'Fortify Agility 50 pts for 60 secs on Self'
                }, {
                    spell: 'fortify_attribute',
                    text: 'Fortify Endurance 50 pts for 60 secs on Self'
                }, {
                    spell: 'fortify_attribute',
                    text: 'Fortify Speed 50 pts for 60 secs on Self'
                }, {
                    spell: 'fortify_attribute',
                    text: 'Fortify Strength 50 pts for 60 secs on Self'
                }, {
                    spell: 'fortify_health',
                    text: 'Fortify Health 25 pts for 60 secs on Self'
                }]
            }]
        }
    },
    wood_elf: {
        primaryAttributes: {
            male: {
                strength: 30,
                intelligence: 40,
                willpower: 30,
                agility: 50,
                speed: 50,
                endurance: 30,
                personality: 40,
                luck: 40
            },
            female: {
                strength: 30,
                intelligence: 40,
                willpower: 30,
                agility: 50,
                speed: 50,
                endurance: 30,
                personality: 40,
                luck: 40
            }
        },
        skills: {
            acrobatics: 5,
            alchemy: 5,
            light_armor: 10,
            marksman: 15,
            sneak: 10
        },
        specials: {
            abilities: [{
                name: 'Resist Disease',
                effects: [{
                    spell: 'resist_common_disease',
                    text: 'Resist Common Disease 75%'
                }]
            }],
            powers: [{
                name: 'Beast Tongue',
                effects: [{
                    spell: 'command_creature',
                    text: 'Command Creature 5 pts for 600 secs'
                }]
            }]
        }
    }
};

export default raceData;