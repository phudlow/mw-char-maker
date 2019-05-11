const skills = {

    // Combat
    armorer: {
        governingAttribute: 'strength',
        description: 'Armorer skill is used to maintain weapons and armor at top effectiveness. Worn weapons do less damage. Worn armor provides less protection against attacks. As wear increases, the diminishing effectiveness of weapons and armor is dramatic.',
        spec: 'combat'
    },
    athletics: {
        governingAttribute: 'speed',
        description: 'Athletics skill trains and conditions one for running and swimming. Skilled athletes move short and long distances over land with speed and efficiency, and they also swim swiftly underwater.',
        spec: 'combat'
    },
    axe: {
        governingAttribute: 'strength',
        description: 'Axe skill helps a user wield heavy chopping weapons like war axes and battleaxes more effectively.',
        spec: 'combat'
    },
    block: {
        governingAttribute: 'agility',
        description: 'Block skill allows one to use shields to block any melee attack. A successful block removes all damage from the attack.',
        spec: 'combat'
    },
    blunt_weapon: {
        governingAttribute: 'strength',
        description: 'Blunt weapon skill makes you more effective when using heavy bashing weapons like maces, hammers, clubs, or staves.',
        spec: 'combat'
    },
    heavy_armor: {
        governingAttribute: 'endurance',
        description: 'Heavy Armor skill is used to move and defend while wearing massive and rigid armors like iron, steel, silver, Dwemer, ebony, and Daedric armor. To use any style of armor effectively, the wearer must be trained, conditioned, and skilled in its use.',
        spec: 'combat'
    },
    long_blade: {
        governingAttribute: 'strength',
        description: 'Long Blade skill lets one use broadswords, sabers, longswords, claymores, katanas, and dai-katanas effectively.',
        spec: 'combat'
    },
    medium_armor: {
        governingAttribute: 'endurance',
        description: 'Medium armor skill lets one move and defend while wearing durable but flexable armors like chain, scale, bonemold, and Orcish armor. To use any style of armor effectively, the wearer must be trained, conditioned, and skilled in its use.',
        spec: 'combat'
    },
    spear: {
        governingAttribute: 'endurance',
        description: 'Spear skill permits effective use of long-hafted thrusting weapons like spears and halberds.',
        spec: 'combat'
    },

    // Magic 
    alchemy: {
        governingAttribute: 'intelligence',
        description: 'Alchemy identifies magical properties in mundane substances. Substances are consumed directly, or prepared as potions to provide long-lasting benefits like healing and curing disease, water-walking, magical shielding, and fortifying bodily attributes.',
        spec: 'magic'
    },
    alteration: {
        governingAttribute: 'willpower',
        description: 'Students of the College of Alteration manipulate the physical world and its natural properties. Alteration effects include water breathing and walking, jumping, levitating, burdening, opening and locking, and creating shield barriers against physical damage.',
        spec: 'magic'
    },
    conjuration: {
        governingAttribute: 'intelligence',
        description: 'The spell effects of the College of Conjuration include the mental domination of mundane and magical creatures, summoning of otherworldy weapons and armor, and summoning of Daedric or undead servants and powers to serve and protect the caster.',
        spec: 'magic'
    },
    destruction: {
        governingAttribute: 'willpower',
        description: 'The destruction skill is the mastery of the spell effects of the College of Destruction.  Their spells harm living and nonliving things, and include elemental damage, draining, damaging, vulnerability, and disintegration magical effects.',
        spec: 'magic'
    },
    enchant: {
        governingAttribute: 'intelligence',
        description: 'This skill governs the creation, use, and recharging of enchanted items. Skilled enchanters are more successful at creating new items. Enchanted items burn less power, and are recharged more effeciently from soul gems, for a trained user.',
        spec: 'magic'
    },
    illusion: {
        governingAttribute: 'personality',
        description: 'Spell effects of the College of Illusion alter the perceptions and thoughts of living subjects. Illusion effects blind, illuminate, paralyze, and silence, calm or enrage, charm, distract and camouflage, and render invisible.',
        spec: 'magic'
    },
    mysticism: {
        governingAttribute: 'willpower',
        description: 'The spells of the College of Mysticism shape and focus otherworldly forces to bind souls in gems, or teleport the caster\'s body, or manipulate the world with telekinesis, or absorb or reflect magical energies, or sense unseen objects at a distance.',
        spec: 'magic'
    },
    restoration: {
        governingAttribute: 'willpower',
        description: 'Adepts of the College of Restoration heal, restore, and fortify the body\'s attributes and abilities, cure disease, and protect it from other malign influences. Restoration spells can also augment or absorb strength, endurance, intelligence, agility, and other bodily attributes.',
        spec: 'magic'
    },
    unarmored: {
        governingAttribute: 'speed',
        description: 'Unarmored skill lets one avoid or reduce injury during combat while not wearing any armor by evading, deflecting, or absorbing blows. Those versed in this skill are better defended wearing no armor at all than they are when wearing armor.',
        spec: 'magic'
    },

    // Stealth
    acrobatics: {
        governingAttribute: 'strength',
        description: 'Acrobatics skill enables one to jump long distances and to avoid damage when falling from great heights. Nimble acrobats can reach areas others cannot get to and can direct their paths while falling.',
        spec: 'stealth'
    },
    "hand-to-hand": {
        governingAttribute: 'speed',
        description: 'Hand-to-hand skill is the martial art of unarmored combat. Hand-to-hand attacks damage only the fatigue of a standing opponent, but hand-to-hand attacks damage health when a target has been knocked unconscious by fatigue loss.',
        spec: 'stealth'
    },
    short_blade: {
        governingAttribute: 'speed',
        description: 'Characters with great short-blade skill are more effective with short, quick, thrusting weapons like daggers, tantos, short swords, and wakizashis.',
        spec: 'stealth'
    },
    light_armor: {
        governingAttribute: 'agility',
        description: 'Light armor skill lets one move and defend while wearing light-weight, flexible armors like leather, boiled leather, fur, chitin, and glass armor. To use any style of armor effectively, the wearer must be trained, conditioned, and skilled in its use.',
        spec: 'stealth'
    },
    marksman: {
        governingAttribute: 'agility',
        description: 'With the marksman skill, one is more effective with ranged weapons like the short bow, long bow, crossbow, throwing star, and throwing knife.',
        spec: 'stealth'
    },
    mercantile: {
        governingAttribute: 'personality',
        description: 'Mercantile skill is the art of buying low and selling high. This skill guarantees lower initial prices for goods, equipment, and services, and improves chances of getting better deals by bargaining.',
        spec: 'stealth'
    },
    security: {
        governingAttribute: 'intelligence',
        description: 'Security skill lets one open locked doors and containers with lock-picks or disarm traps with probes, This skill is essential for agents and thieves alike.',
        spec: 'stealth'
    },
    sneak: {
        governingAttribute: 'ability',
        description: 'The Sneak discipline is the art of moving unseen and unheard. Skilled sneaks are also adept pickpockets.',
        spec: 'stealth'
    },
    speechcraft: {
        governingAttribute: 'personality',
        description: 'Those skilled in speechcraft influence others by admiring, intimidating, and taunting them. Listeners are more willing to divulge information or to entrust important tasks to the skilled speaker.',
        spec: 'stealth'
    }
};

export default skills;