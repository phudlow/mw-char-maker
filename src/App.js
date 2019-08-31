import React, { Component } from 'react';
import './App.scss';

import Form from './components/form/Form';
import Result from './components/result/Result';
import SelectorContainer from './components/selector/SelectorContainer';

import { getStateFromQueryString, getQueryStringFromState } from './utils';

const initialState = {
  race: 'dark_elf',
  sex: 'male',
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

    // Set initial state from url query string. Use default character is queryString is invalid.
    const queryStr = window.location.search;
    try {
      this.state = Object.assign(initialState, getStateFromQueryString(queryStr));
    }
    catch (e) {
      console.warn('Invalid query string provided.  Using default character.');
      this.state = initialState;
    }

    // Set query string from state, even if it was provided, incase it was incomplete
    this.setQueryStringFromState(this.state);

    this.eventHandlers = {
      person: {
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
    this.showHelp                                 = this.showHelp.bind(this);
    this.getNewStateFromSkillSelection            = this.getNewStateFromSkillSelection.bind(this);
    this.getNewStateFromFavoredAttributeSelection = this.getNewStateFromFavoredAttributeSelection.bind(this);
  }
  showRaceSelector() {
    this.setState({
      selecting: {
        for: 'race'
      }
    });
  }
  changeSex() {
    this.setState({
      sex: this.state.sex === 'male' ? 'female' : 'male'
    });
    this.setQueryStringFromState();
  }
  showSpecializationSelector() {
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
  showBirthsignSelector() {
    this.setState({
      selecting: {
        for: 'birthsign'
      }
    });
  }
  showHelp() {
    this.setState({
      selecting: {
        for: 'help'
      }
    })
  }
  setQueryStringFromState() {
    setTimeout(() => {
      window.history.replaceState({}, '', getQueryStringFromState(this.state));
    }, 0);
  }
  onSelectionClick(e) {
    const el        = e && e.target.closest('.hoverable');
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
    this.setQueryStringFromState();
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
      <div id="app">
        <div id="background-holder"></div>
        <div id="main-title">
          Morrowind Character Creation Tool
          <div onClick={this.showHelp}><span>?</span></div>
        </div>
        <Form
          data={this.state}
          eventHandlers={this.eventHandlers}
        />
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
