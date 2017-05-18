import AudioTone from '../public/tone.mp3'
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
      description: 'Our Signature CryoBrew®. Medium acidity with deep chocolate and orange notes',
      price: '$3.99',
    },
    {
      name: 'Doppio',
      icon: IconDoppio,
      description: 'No B.S. Two shots of Italian espresso. Clean and mind-numbing créma.',
      price: '$4.50',
    },
    {
      name: 'Café au Lait',
      icon: IconCafeAuLait,
      description: 'Our Signature CryoBrew® 50–50 with Neuchâtel whole milk',
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
      description: 'One shot of Italian espresso with steamed Neuchâtel whole milk (extra froth)',
      price: '$5.50',
    },
    {
      name: 'Red Eye',
      icon: IconRedEye,
      description: 'One shot of Italian espresso poured with our Signature CryoBrew®',
      price: '$4.50',
    },
    {
      name: 'Americano',
      icon: IconAmericano,
      description: 'One shot of Italian espresso blended with 1 cup of re-thermolyzed Newfoundland spring water',
      price: '$3.50',
    },
  ],
  render: function () {
    return (
      <div style={this.styleB(this.props, this.state)}>
        <audio id="tone-sound" preload="auto"><source src={AudioTone} type="audio/mpeg"/></audio>
        <ul style={this.styleC()}>
          {this._items.map((item, i) => {
            return (
              <li key={i} style={this.styleA(this.props, this.state, i)} onClick={this.handleSelect.bind(this, i)}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '5%', width: '5%'}}>
                  <img src={item.icon} alt="icon" style={this.styleH(this.props, this.state, i)}/>
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
      marginLeft: isSelected ? '-2%' : '0',
      padding: isSelected ? '2.25vw 2vw' : '2vw',
      width: isSelected ? '104%' : '100%',
      fontFamily: 'Lato, sans-serif',
      backgroundColor: isSelected ? '#6a402c' : 'rgba(255, 255, 255, 0.25)',
      borderBottom: isSelected ? '1px solid #98664f' : '1px solid rgba(255, 255, 255, 0.115)',
      boxShadow: `inset 0 0 5rem ${(this._items.length - i)/this._items.length}rem ${isSelected ? '#98664f' : 'rgba(255, 255, 255, 0.1)'}, ${isSelected ? '0 0 13rem 0 #9c7c6d' : '0 0 0 0 transparent'}`,
      borderRadius: isSelected ? 4 : 0,
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
      fontSize: '1.85vw',
      color: isSelected ? '#e0a88d' : '#D6D6D6',
      textTransform: 'uppercase',
      letterSpacing: '0.45vw',
      fontWeight: 900,
      // textShadow: isSelected ? 'none' : '0 0 3rem rgba(255, 255, 255, 0.75)',
      transition: 'all 0.35s',
    }
  },
  styleE: function (props, state, i) {

    const isSelected = state.selected === i


    return {
      display: isSelected ? 'block' : 'none',
      marginTop: '0.25rem',
      fontSize: '1.25vw',
      lineHeight: isSelected ? '1.5vw' : 0,
      fontFamily: 'Helvetica',
      fontWeight: 'normal',
      color: isSelected ? '#b38169' : '#D6D6D6',
      textShadow: isSelected ? 'none' : '0 0 3rem rgba(255, 255, 255, 0.75)',
      // opacity: isSelected ? 1 : 0,
      transition: 'all 0.35s',
    }
  },
  styleF: function () {
    return {
      display : 'flex',
      justifyContent : 'center',
      flexDirection : 'column',
      paddingLeft: '10%',
      width : '50%',
    }
  },
  styleG: function (props, state, i) {

    const isSelected = state.selected === i


    return {
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'flex-end',
      width : '30%',
      fontSize : '1.75vw',
      fontFamily: '"Inconsolata", sans-serif',
      // fontWeight : 'bold',
      color : isSelected ? '#e0a88d' : '#D6D6D6',
      transition: 'all 0.35s',
    }
  },
  styleH: function (props, state, i) {
    return {
      width: '5vw',
      opacity: 0.5,
    }
  }
})
