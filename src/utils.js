import React from 'react';

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
                    {special.name}
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
    toPresentationStr,
    createSpecialsHtml
}