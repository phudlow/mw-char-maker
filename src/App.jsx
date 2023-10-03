import { Component } from 'react';

import Form from './components/form/Form';
import Result from './components/result/Result';
import SelectorContainer from './components/selector/SelectorContainer';

import { getStateFromQueryString, getQueryStringFromState } from './utils';

// Default state describing default character aspect selections
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

  // If selecting, an object which holds "aspect" and "index" info about what is being selected
  // Example: selecting: { aspect: 'majorSkills', index: 1 }
  selecting: null,
}

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state from query string. Use default character aspects if query string is invalid.
    try {
      const queryStr = window.location.search;
      if (queryStr) {
        this.state = Object.assign(initialState, getStateFromQueryString(queryStr));
      }
    }
    catch (e) {
      console.warn('Invalid query string provided.  Using default character.');
    }
    finally {
      if (!this.state) {
        this.state = initialState;
        this.setQueryStringFromState(this.state);
      }
    }

    this.eventHandlers = {
      person: {
        onRaceClick: this.onShowSelector.bind(this, 'race'),
        onSexClick: this.changeSex.bind(this)
      },
      class: {
        onSpecializationClick:   this.onShowSelector.bind(this, 'specialization'),
        onFavoredAttributeClick: this.onShowSelector.bind(this, 'favoredAttributes'),
        onMajorSkillClick:       this.onShowSelector.bind(this, 'majorSkills'),
        onMinorSkillClick:       this.onShowSelector.bind(this, 'minorSkills'),
      },
      birthsign: {
        onBirthsignClick: this.onShowSelector.bind(this, 'birthsign')
      }
    };

    this.onSelectionClick = this.onSelectionClick.bind(this);
    this.showHelp         = this.showHelp.bind(this);
  }
  onShowSelector(aspect, e) {
    this.setState({
      selecting: {
        aspect,
        index: e.target.closest('.hoverable').getAttribute('index')
      }
    });
  }
  changeSex() {
    this.setState({
      sex: this.state.sex === 'male' ? 'female' : 'male'
    });
    this.setQueryStringFromState();
  }
  showHelp() {
    this.setState({
      selecting: {
        aspect: 'help'
      }
    }, () => document.documentElement.scrollTop = 0);
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
      if (selecting.aspect.includes('Skill')) {
        Object.assign(newState, this.getNewStateFromSkillSelection(value, selecting));
      }
      else if (selecting.aspect === 'favoredAttributes') {
        Object.assign(newState, this.getNewStateFromFavoredAttributeSelection(value, selecting));
      }
      else {
        newState[selecting.aspect] = value;
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
    const prevValue   = this.state[selecting.aspect][index];
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

    if (selecting.aspect === 'majorSkills') {
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
