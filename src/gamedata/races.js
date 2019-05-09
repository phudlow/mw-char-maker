const races = {
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
                name: 'Immune to Poison',
                effects: [{
                    spell: 'resist_poison',
                    text: 'Resist Poison 100%'
                }]
            }, {
                name: 'Resist Disease',
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
        },
        description: 'Little is known and less is understood about the reptilian denizens of Black Marsh. Years of defending their borders have made the Argonians experts in guerilla warfare, and their natural abilities make them equally at home in water and on land. They are well-suited for the treacherous swamps of their homeland, and have developed natural immunities to the diseases and poisons that have doomed many would-be explorers into the region. Their seemingly expressionless faces belie a calm intelligence, and many Argonians are well-versed in the magical arts. Others rely on stealth or steel to survive, and their natural agility makes them adept at either. They are, in general, a reserved people, slow to trust and hard to know. Yet, they are fiercely loyal, and will fight to the death for those they have named as friends.'
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
        },
        description: 'Passionate and eccentric, poetic and flamboyant, intelligent and willful, the Bretons feel an inborn, instinctive bond with the mercurial forces of magic and the supernatural. Many great sorcerers have come out of their home province of High Rock, and in addition to their quick and perceptive grasp of spellcraft, enchantment, and alchemy, even the humblest of Bretons can boast a high resistance to destructive and dominating magical energies.'
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
        },
        description: 'Dark Elves are the dark-skinned Elven peoples of the Eastern Empire. "Dark" is variously understood to mean "dark-skinned," "gloomy," and "ill-favored by fate." The Dunmer and their national character embrace these various connotations with enthusiasm. In the Empire, "Dark Elves" is the common usage, but in their Morrowind homeland, and among their Aldmeri brethren, they call themselves the "Dunmer". The dark-skinned, red-eyed Dark Elves combine powerful intellect with strong and agile physiques, producing superior warriors and sorcerers. On the battlefield, Dark Elves are noted for their skilled and balanced integration of swordsmen, marksmen, and war wizards. In character, they are grim, aloof, and reserved, distrusting and disdainful of other races.'
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
        },
        description: 'In Imperial speech, the haughty, tall, golden-skinned peoples of Summerset Isle are called "High Elves," but they call themselves the "Altmer," or the "Cultured People." In the Empire, "High" is often understood to mean "tall," "proud," or "snobbish." The High Elves confidently consider themselves, with some justice, as the most civilized culture of Tamriel; the common tongue of the Empire, Tamrielic, is based on Altmer speech and writing, and most of the Empire\'s arts, crafts, and sciences are derived from High Elven traditions. However, the High Elf\'s smug self-assurance of his superiority can be hard to bear for those of other races. Deft, intelligent, and strong-willed, High Elves are often gifted in the arcane arts, and High Elves boast that their sublime physical natures make them far more resistant to disease than the "lesser races."'
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
            "hand-to-hand": 5,
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
        },
        description: 'The well-educated and well-spoken native of Cyrodiil are known for the discipline and training of their citizen armies. Though physically less imposing than the other races, Imperials are shrewd diplomats and traders, and these traits, along with their remarkable skill and training as light infantry, have enabled them to subdue all the other nations and races, and to have erected the monument to peace and prosperity that comprises the Glorious Empire.'
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
            "hand-to-hand": 5,
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
        },
        description: 'Khajiit hail from the province of Elsweyr and can vary in appearance from nearly Elven to the cathay-raht "jaguar men" to the great Senche-Tiger. The most common breed found in Morrowind, the suthay-raht, is intelligent, quick, and agile. Khajiit of all breeds have a weakness for sweets, especially the drug known as skooma. Many Khajiit disdain weapons in favor of their natural claws. They make excellent thieves due to their natural agility and unmatched acrobatics ability. Many Khajiit are also warriors, although this is less common among the suthay-raht.'
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
        },
        description: 'The citizens of Skyrim are a tall and fair-haired people, aggressive and fearless in war, industrious and enterprising in trade and exploration. Skilled sailors, Nords can be found in seaports and settlements along all the coasts and rivers of Tamriel. Strong, stubborn, and hardy, Nords are famous for their resistance to cold, even magical frost. Violence is an accepted and comfortable aspect of Nord culture; Nords of all classes are skilled with a variety of weapon and armor styles, and they cheerfully face battle with an ecstatic ferocity that shocks and appalls their enemies.'
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
        },
        description: 'These sophisticated barbarian beast peoples of the Wrothgarian and Dragontail Mountains are noted for their unshakeable courage in war and their unflinching endurance of hardships. In the past, Orcs have been widely feared and hated by the other nations and races of Tamriel, but they have slowly won acceptance in the Empire, in particular for their distinguished service in the Emperor\'s Legions. Orcish armorers are prized for their craftsmanship, and Orc warriors in heavy armor are among the finest front-line troops in the Empire. Most Imperial citizens regard Orc society as rough and cruel, but there is much to admire in their fierce tribal loyalties and generous equality of rank and respect among the sexes.'
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
        },
        description: 'The most naturally talented warriors in Tamriel, the dark-skinned, wiry-haired Redguards of Hammerfell seem born to battle, though their pride and fierce independence of spirit makes them more suitable as scouts or skirmishers, or as free-ranging heroes and adventurers, than as rank-and-file soldiers. In addition to their cultural affinities for many weapon and armor styles, Redguards are also physically blessed with hardy constitutions and quickness of foot.'
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
        },
        description: 'The Wood Elves are the various barbarian Elven clanfolk of the Western Valenwood forests. These country cousins of the High Elves and Dark Elves are nimble and quick in body and wit, and because of their curious natures and natural agility, Wood Elves are especially suitable as scouts, agents, and thieves,  But most of all, the Wood Elves are known for their skills with bows; there are no finer archers in all of Tamriel.'
    }
};

export default races;