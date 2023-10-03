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
const buildOrder = [
    'race',
    'sex',
    'specialization',
    ...Array(2).fill('favoredAttributes'),
    ...Array(5).fill('majorSkills'),
    ...Array(5).fill('minorSkills'),
    'birthsign'
];

// Convert "build" value on a query string to a parsed state object representing character aspects.
// During parsing of the "build" string, the buildOrder array is referenced to determine what key
// in the state that char represents.
function getStateFromQueryString(str = window.location.search) {
    const state = {};
    const build = str.substr(1).split('=')[1];
    let buildChar, aspect, value, lastAspect;

    for (let i = 0; i < build.length; i++) {
        buildChar = build[i];
        aspect = buildOrder[i];
        value = validChoices[aspect][parseInt(buildChar, 36)];

        if (!value) {
            throw new Error('Invalid query string.');
        }

        // Throw error if skill, or primary attribute appears twice
        if (aspect.includes('Skill')) {
            if (
                state['majorSkills'] && state['majorSkills'].includes(value) ||
                state['minorSkills'] && state['minorSkills'].includes(value)
            ) {
                throw new Error('Invalid query string.');
            }
        }
        if (aspect === 'favoredAttributes') {
            if (state['favoredAttributes'] && state['favoredAttributes'].includes(value)) {
                throw new Error('Invalid query string.');
            }
        }

        // If aspect on state is array, push.
        if (Array.isArray(state[aspect])) {
            state[aspect].push(value);
        }
        // If aspect isn't array and repeating last aspect, make aspect into array
        else if (lastAspect && lastAspect === aspect) {
            state[aspect] = [state[aspect], value];
        }
        // Normal case, state is a single value string
        else {
            state[aspect] = value;
        }
        lastAspect = aspect;
    }
    return state;
}

// Serialize character aspects in a state to a concise query string
function getQueryStringFromState(state) {
    let queryStr = '?build=';

    for (let key in state) {
        switch (key) {

            // selecting is a UI state, we don't care about it
            case 'selecting':
                break;

            // state member is an array, iterate through
            case 'favoredAttributes':
            case 'majorSkills':
            case 'minorSkills':
                state[key].forEach(aspect => {
                    queryStr += validChoices[key].indexOf(aspect).toString(36);
                });
                break;

            // regular string case
            default:
                queryStr += validChoices[key].indexOf(state[key]).toString(36);
                break;
        }
    }
    return queryStr;
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
                            src={`/src/img/icons/spells/${effect.spell}.png`}
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

function isDesktop() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return false;
    }
    return true;
}

export {
    getStateFromQueryString,
    getQueryStringFromState,
    toPresentationStr,
    createSpecialsHtml,
    isDesktop
}