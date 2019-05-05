import React, { Component } from 'react';
import './App.scss';

import Form from './components/form/Form';
import Result from './components/result/Result';
import SelectorContainer from './components/selector/SelectorContainer';

const initialState = {
  name: 'Sarge',
  // face: '',
  // hair: '',
  sex: 'male',
  race: 'dark_elf',
  // className: '',
  // classDescription: '',
  specialization: 'combat',
  favoredAttributes: [
    'strength',
    'intelligence'
  ],
  majorSkills: [
    'block',
    'armorer',
    'medium_armor',
    'heavy_armor',
    'blunt_weapon'
  ],
  minorSkills: [
    'long_blade',
    'axe',
    'spear',
    'athletics',
    'enchant'
  ],
  birthsign: 'apprentice',

  // If selecting, an object which holds "for" and "index" info about what is being selected
  // Example: selecting: { for: 'majorSkills', index: 1 }
  selecting: null,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.eventHandlers = {
      person: {
        onNameChange: this.changeName.bind(this),
        onRaceClick: this.showRaceSelector.bind(this),
        onSexClick: this.changeSex.bind(this)
      },
      class: {
        onSpecializationClick:   this.showSpecializationSelector.bind(this),
        onFavoredAttributeClick: this.showFavoredAttributeSelector.bind(this),
        onMajorSkillClick:       this.showSkillSelector.bind(this, 'major'),
        onMinorSkillClick:       this.showSkillSelector.bind(this, 'minor'),
      },
      birthsign: {
        onBirthsignClick: this.showBirthsignSelector.bind(this) 
      }
    };

    this.onSelectionClick                         = this.onSelectionClick.bind(this);
    this.getNewStateFromSkillSelection            = this.getNewStateFromSkillSelection.bind(this);
    this.getNewStateFromFavoredAttributeSelection = this.getNewStateFromFavoredAttributeSelection.bind(this);
  }
  changeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  showRaceSelector(e) {
    this.setState({
      selecting: {
        for: 'race'
      }
    });
  }
  changeSex(e) {
    this.setState({
      sex: this.state.sex === 'male' ? 'female' : 'male'
    });
  }
  showSpecializationSelector(e) {
    this.setState({
      selecting: {
        for: 'specialization'
      }
    });
  }
  showFavoredAttributeSelector(e) {
    this.setState({
      selecting: {
        for: 'favoredAttribute',
        index: e.target.closest('.hoverable').getAttribute('index')
      }
    });
  }
  showSkillSelector(type, e) {
    this.setState({
      selecting: {
        for: `${type}Skills`,
        index: e.target.closest('.hoverable').getAttribute('index')
      }
    });
  }
  showBirthsignSelector(e) {
    this.setState({
      selecting: {
        for: 'birthsign'
      }
    });
  }
  onSelectionClick(e) {
    const el        = e.target.closest('.hoverable');
    const value     = el && el.getAttribute('name');
    const selecting = this.state.selecting;
    const newState  = {
      selecting: null
    };

    if (value) {

      if (selecting.for.includes('Skill')) {
        Object.assign(newState, this.getNewStateFromSkillSelection(value, selecting));
      }
      else if (selecting.for === 'favoredAttribute') {
        Object.assign(newState, this.getNewStateFromFavoredAttributeSelection(value, selecting));
      }
      else {
        newState[selecting.for] = value;
      }

    }

    this.setState(newState);
  }
  getNewStateFromFavoredAttributeSelection(value, selecting) {
    const index             = selecting.index;
    const otherIndex        = index === '0' ? 1 : 0;
    const favoredAttributes = this.state.favoredAttributes;
    const prevValue         = favoredAttributes[index];
    const otherValue        = favoredAttributes[otherIndex];

    if (otherValue === value) {
      favoredAttributes[index]      = otherValue;
      favoredAttributes[otherIndex] = prevValue;
    }
    else {
      favoredAttributes[index] = value;
    }

    return {
      favoredAttributes
    };
  }
  getNewStateFromSkillSelection(value, selecting) {
    const index       = selecting.index;
    const prevValue   = this.state[selecting.for][index];
    const majorSkills = this.state.majorSkills.slice(0);
    const minorSkills = this.state.minorSkills.slice(0);
    let currentSkillIndex;

    currentSkillIndex = this.state.majorSkills.indexOf(value);
    if (currentSkillIndex !== -1) {
      majorSkills[currentSkillIndex] = prevValue;
    }
    currentSkillIndex = this.state.minorSkills.indexOf(value);
    if (currentSkillIndex !== -1) {
      minorSkills[currentSkillIndex] = prevValue;
    }

    if (selecting.for === 'majorSkills') {
      majorSkills[index] = value;
    }
    else {
      minorSkills[index] = value;
    }

    return {
      majorSkills,
      minorSkills
    };
  }
  render() {
    return (
      <div>
        <Form
          data={this.state}
          eventHandlers={this.eventHandlers}
        />
        <hr/>
        <Result
          data={this.state}
        />
        <SelectorContainer
          selecting={this.state.selecting}
          onSelectionClick={this.onSelectionClick}
        />
      </div>
    );
  }
}

export default App;
