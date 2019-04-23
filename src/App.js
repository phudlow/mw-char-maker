import React, { Component } from 'react';
import './App.scss';

import Form from './components/form/Form';
import Result from './components/result/Result';

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
  birthsign: 'apprentice'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.changeHandlers = {
      person: {
        nameChange: this.nameChange.bind(this),
        raceChange: this.raceChange.bind(this),
        sexChange:  this.sexChange.bind(this)
      },
      class: {
        specializationChange:   this.specializationChange.bind(this),
        favoredAttributeChange: this.favoredAttributeChange.bind(this),
        majorSkillChange:       this.skillChange.bind(this, 'major'),
        minorSkillChange:       this.skillChange.bind(this, 'minor'),
      },
      birthsign: {
        birthsignChange: this.birthsignChange.bind(this) 
      }
    };

    this.printState = this.printState.bind(this);
  }
  nameChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  raceChange(e) {
    this.setState({
      race: e.target.value
    });
  }
  sexChange(e) {
    this.setState({
      sex: e.target.value
    });
  }
  specializationChange(e) {
    this.setState({
      specialization: e.target.value
    });
  }
  favoredAttributeChange(e) {
    const value             = e.target.value;
    const index             = e.target.getAttribute('index');
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

    this.setState({
      favoredAttributes
    });
  }
  skillChange(type, e) {
    const value       = e.target.value;
    const index       = e.target.getAttribute('index');
    const prevValue   = this.state[type + 'Skills'][index];
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

    if (type === 'major') {
      majorSkills[index] = value;
    }
    else {
      minorSkills[index] = value;
    }

    this.setState({
      majorSkills,
      minorSkills
    })             
  }
  birthsignChange(e) {
    this.setState({
      birthsign: e.target.value
    });
  }
  // TODO: delete this and its button and its binding in constructor
  printState() {
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Form data={this.state} changeHandlers={this.changeHandlers}/>
        <hr/>
        <Result data={this.state}/>
        <button onClick={this.printState}>Print State</button>
      </div>
    );
  }
}

export default App;
