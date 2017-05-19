import {name} from '../package.json'


module.exports = process.env.NODE_ENV === 'development'
  ? '../public'
  : `https://raw.githubusercontent.com/williamle8300/${name}/master/public`
