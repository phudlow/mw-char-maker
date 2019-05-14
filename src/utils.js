import React from 'react';

import races from './gamedata/races';
import primaryAttributes from './gamedata/primaryAttributes';
import skills from './gamedata/skills';
import birthsigns from './gamedata/birthsigns';

const validChoices = {
    race: Object.keys(races),
    sex: ['male', 'female'],
    specialization: ['combat', 'magic', 'stealth'],
    favoredAttributes: Object.keys(primaryAttributes),
    majorSkills: Object.keys(skills),
    minorSkills: Object.keys(skills),
    birthsign: Object.keys(birthsigns)
}

function getInitialStateFromURL() {
    const state = {};
  
    window.location.search.substr(1).split('&').forEach(str => {
      let [ key, value ] = str.split('=');

      if (!validChoices[key]) {
        return;
      } else if (value.includes(',')) {
        value = value.split(',');
        for (let i = 0; i < value.length; i++) {
            if (validChoices[key].indexOf(value[i]) === -1) {
                return;
            }
        }
      } else if (validChoices[key].indexOf(value) === -1) {
        return;
      }

      state[key] = value;
    });
  
    return state;
}


function toPresentationStr(str) {
    return str.split('_')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

function createSpecialsHtml(specials) {
    function createHtmlForSpecialType(specialsForType) {
        return specialsForType.map(special => {
            let effectsHtml = special.effects.map(effect => {
                return (
                    <div key={effect.text}>
                        <img
                            src={require(`./img/icons/spells/${effect.spell}.png`)}
                            alt=''
                        />
                        {effect.text}
                    </div>
                )
            });
            return (
                <div className="special" key={special.name}>
                    {special.name}{typeof special.cost === 'undefined' ? null : ` (${special.cost})`}
                    <div>
                        {effectsHtml}
                    </div>
                </div>
            );
        });
    }

    return (
        <div>
            {specials.abilities && specials.abilities.length ?
                <div className="special-type-container"><div className="title">Abilities</div>{createHtmlForSpecialType(specials.abilities)}</div> :
                null
            }
            {specials.powers && specials.powers.length ?
                <div className="special-type-container"><div className="title">Powers</div>{createHtmlForSpecialType(specials.powers)}</div> :
                null
            }
            {specials.spells && specials.spells.length ?
                <div className="special-type-container"><div className="title">Spells</div>{createHtmlForSpecialType(specials.spells)}</div> :
                null
            }
        </div>
    )
}

export {
    getInitialStateFromURL,
    toPresentationStr,
    createSpecialsHtml
}