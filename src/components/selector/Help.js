import React from 'react';

function Help(props) {
    return (
        <div id="help" hidden={!props.active}>
            <div>
                <div className="how-to">
                    <div className="title">How to Use</div>
                    <br/>
                    Click on an individual character element within the box to customize.
                    The resulting statistics and traits of your character are displayed below.
                </div>
                <br/>
                <div>
                    <div className="title">Abilities</div>
                    &nbsp;&nbsp;&nbsp;&nbsp;Magical effects that are always active on your character.
                </div>
                <br/>
                <div>
                    <div className="title">Powers</div>
                    &nbsp;&nbsp;&nbsp;&nbsp;Powers cost no magicka, but can only be cast once per day.
                </div>
                <br/>
                <div>
                    <div className="title">Spells</div>
                    &nbsp;&nbsp;&nbsp;&nbsp;Spells can be cast as long as you have the required magicka.
                </div>
                <br/>
            </div>
            <div>
                <div>
                    <div className="title">Race</div>
                    &nbsp;&nbsp;&nbsp;&nbsp;Determines starting attributes and provides skill bonuses.  May also grant racial abilities, powers, and / or spells.
                </div>
                <br/>
                <div>
                    <div className="title">Sex</div>
                    &nbsp;&nbsp;&nbsp;&nbsp;Different genders of the same race may have slightly different starting attributes.
                </div>
                <br/>
                <div>
                    <div className="title">Specialization</div>
                    &nbsp;&nbsp;&nbsp;&nbsp;+5 to skills within your chosen specialization.
                </div>
                <br/>
                <div>
                    <div className="title">Favored Attributes</div>
                    &nbsp;&nbsp;&nbsp;&nbsp;+10 to chosen attributes.
                </div>
                <br/>
                <div>
                    <div className="title">Major and Minor Skills</div>
                    &nbsp;&nbsp;&nbsp;&nbsp;+25 to major skills and +10 to minor skills.  When a spell school is chosen as a major or minor skill, the character begins with spells from that school.
                </div>
                <br/>
                <div>
                    <div className="title">Birthsign</div>
                    &nbsp;&nbsp;&nbsp;&nbsp;Grants additional abilities, powers, and / or spells.
                </div>
                <br/>
            </div>
            <button onClick={props.onSelectionClick}>OK</button>
        </div>
    );
}

export default Help;