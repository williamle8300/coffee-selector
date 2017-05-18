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
      description: 'Our Signature® cryo-brew. These Arabica beans were sourced from an estate in Sulawesi, Indonesia',
      price: '$3.99',
    },
    {
      name: 'Doppio',
      icon: IconDoppio,
      description: 'Straight-forward and simple. Two shots of Italian espresso with XTRA velvety créma',
      price: '$4.50',
    },
    {
      name: 'Café au Lait',
      icon: IconCafeAuLait,
      description: 'Our Signature® coffee combined 50–50 with Neuchâtel whole milk',
      price: '$4.99',
    },
    {
      name: 'Latté',
      icon: IconLatte,
      description: 'One shot of Italian espresso topped with steamed Neuchâtel whole milk',
      price: '$5.50',
    },
    {
      name: 'Cappuccino',
      icon: IconCappuccino,
      description: 'One shot of Italian espresso with Neuchâtel whole milk (extra froth)',
      price: '$5.50',
    },
    {
      name: 'Red Eye',
      icon: IconRedEye,
      description: 'One shot of Italian espresso poured together with our Signature® coffee',
      price: '$4.50',
    },
    {
      name: 'Americano',
      icon: IconAmericano,
      description: 'One shot of Italian espresso cut with Newfoundland spring water',
      price: '$3.50',
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
                  <img src={item.icon} alt="icon" style={{width: '65%', opacity: 0.75}}/>
                </div>
                <div style={this.styleF()}>
                  <div style={this.styleD(this.props, this.state, i)}>{item.name}</div>
                  <div style={this.styleE(this.props, this.state, i)}>{item.description}</div>
                </div>
                <div style={this.styleG(this.props, this.state, i)}>
                  {item.price}
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
      padding: isSelected ? '2.25rem 2rem' : '2rem',
      width: isSelected ? '101%' : '100%',
      fontFamily: 'Lato, sans-serif',
      backgroundColor: isSelected ? '#6a402c' : 'rgba(255, 255, 255, 0.25)',
      borderBottom: isSelected ? 'none' : '1px solid rgba(255, 255, 255, 0.225)',
      boxShadow: `inset 0 0 5rem ${(this._items.length - i)/this._items.length}rem ${isSelected ? '#98664f' : 'rgba(255, 255, 255, 0.2)'}, ${isSelected ? '0 0 13rem 0 #9c7c6d' : '0 0 0 0 transparent'}`,
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.65s',
    }
  },
  styleB: function (props, state) {
    return {
      display: 'flex',
      // alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 0',
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
  styleD: function (props, state, i) {

    const isSelected = state.selected === i


    return {
      fontFamily: '"Lato", sans-serif',
      fontSize: '1.75rem',
      color: isSelected ? '#e0a88d' : '#D6D6D6',
      textTransform: 'uppercase',
      letterSpacing: '0.875rem',
      fontWeight: 900,
      textShadow: isSelected ? 'none' : '0 0 3rem rgba(255, 255, 255, 0.75)',
      transition: 'all 0.35s',
    }
  },
  styleE: function (props, state, i) {

    const isSelected = state.selected === i


    return {
      marginTop: '0.25rem',
      fontSize: isSelected ? '1rem' : 0,
      fontFamily: 'Helvetica',
      fontWeight: 'normal',
      color: isSelected ? '#e0a88d' : '#D6D6D6',
      textShadow: isSelected ? 'none' : '0 0 3rem rgba(255, 255, 255, 0.75)',
      opacity: isSelected ? 1 : 0,
      transition: 'all 0.35s',
    }
  },
  styleF: function () {
    return {
      display : 'flex',
      justifyContent : 'center',
      flexDirection : 'column',
      paddingLeft: '4%',
      width : '76%',
    }
  },
  styleG: function (props, state, i) {

    const isSelected = state.selected === i


    return {
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'center',
      width : '10%',
      fontSize : '1.5rem',
      fontWeight : 'bold',
      color : isSelected ? '#e0a88d' : '#D6D6D6',
      transition: 'all 0.35s',
    }
  }
})
