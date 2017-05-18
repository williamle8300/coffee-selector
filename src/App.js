import IconCoffee from '../public/icons/coffee.svg'
import IconDoppio from '../public/icons/doppio.svg'
import IconCafeAuLait from '../public/icons/cafe-au-lait.svg'
import IconLatte from '../public/icons/latte.svg'
import IconCappuccino from '../public/icons/cappuccino.svg'
import IconAmericano from '../public/icons/americano.svg'
import IconRedEye from '../public/icons/red-eye.svg'


import createReactClass from 'create-react-class'
import React from 'react'


module.exports = createReactClass({
  getInitialState: function () {
    return {
      selected: 0,
    }
  },
  _items: [
    {
      name: 'Coffee',
      icon: IconCoffee,
      description: 'Our Signature® cryo-brewed coffee. These Arabica beans are single-origin from Sulawesi, Indonesia',
    },
    {
      name: 'Doppio',
      icon: IconDoppio,
      description: 'Two shots of espresso. Beans were sourced directly from an estate in Tuscany, Italy',
    },
    {
      name: 'Café au Lait',
      icon: IconCafeAuLait,
      description: 'Our Signature® coffee is combined 50–50 with Neuchâtel whole milk',
    },
    {
      name: 'Latté',
      icon: IconLatte,
      description: 'One shot of Tuscan espresso with a helping of steamed whole milk',
    },
    {
      name: 'Cappuccino',
      icon: IconCappuccino,
      description: 'One shot of Tuscan espresso with steamed whole from Neuchâtel (extra froth)',
    },
    {
      name: 'Red Eye',
      icon: IconRedEye,
      description: 'One shot of Tuscan espresso poured together with our Signature® coffee',
    },
    {
      name: 'Americano',
      icon: IconAmericano,
      description: 'One shot of Tuscan espresso blended with 100% spring water from New Zealand',
    },
  ],
  render: function () {
    return (
      <div style={this.styleB(this.props, this.state)}>
        <audio id="tone-sound" preload="auto"><source src="tone.mp3" type="audio/mpeg"/></audio>
        <ul style={this.styleC()}>
          {this._items.map((item, i) => {
            return (
              <li key={i} style={this.styleA(this.props, this.state, i)} onClick={this.handleSelect.bind(this, i)}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%'}}>
                  <img src={item.icon} alt="icon" style={{width: '70%', opacity: 0.65}}/>
                </div>
                <div style={this.styleF()}>
                  <div style={this.styleD()}>{item.name}</div>
                  <div style={this.styleE(this.props, this.state, i)}>{item.description}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  },
  handleSelect: function (i) {

    this.setState({selected: i}, this.playTone)
  },
  playTone: function () {

    document.getElementById('tone-sound').pause()
    document.getElementById('tone-sound').currentTime = 0
    document.getElementById('tone-sound').play()
  },
  styleA: function (props, state, i) {

    const isSelected = state.selected === i


    return {
      position: 'relative',
      zIndex: isSelected ? '1' : '0',
      display: 'flex',
      marginLeft: isSelected ? '-0.5%' : '0',
      padding: isSelected ? '2rem 2rem' : '1.75rem 2rem',
      width: isSelected ? '101%' : '100%',
      fontFamily: 'Lato, sans-serif',
      color: isSelected ? '#e0a88d' : '#D6D6D6',
      textShadow: isSelected ? 'none' : '0 0 3rem #FFFFFF',
      backgroundColor: isSelected ? '#6a402c' : 'rgba(255, 255, 255, 0.25)',
      borderBottom: isSelected ? 'none' : '1px solid rgba(255, 255, 255, 0.225)',
      boxShadow: `inset 0 0 8rem ${(this._items.length - i)/this._items.length}rem ${isSelected ? '#c7734e' : 'rgba(255, 255, 255, 0.3)'}, ${isSelected ? '0 0 13rem 0 #d29e86' : '0 0 0 0 transparent'}`,
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.65s',
    }
  },
  styleB: function (props, state) {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      backgroundColor: '#322119',
      transition: 'all 2s',
      overflow: 'auto',
    }
  },
  styleC: function () {
    return {
      margin: 0,
      padding: 0,
      width: '50%',
      listStyle: 'none',
    }
  },
  styleD: function () {
    return {
      // margin: '0 0 0.65rem',
      fontFamily: '"Lato", sans-serif',
      fontSize: '1.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.875rem',
      fontWeight: 900
    }
  },
  styleE: function (props, state, i) {

    const isSelected = state.selected === i

    return {
      display: isSelected ? 'block' : 'none',
      marginTop: '0.25rem',
      fontFamily: 'Helvetica',
      fontWeight: 'normal',
      color: isSelected ? '#e0a88d' : 'transparent',
      opacity: isSelected ? 1 : 0,
      transition: 'all 0.65s',
    }
  },
  styleF: function () {
    return {
      display : 'flex',
      justifyContent : 'center',
      flexDirection : 'column',
      paddingLeft: '3%',
      width : '77%',
    }
  }
})
