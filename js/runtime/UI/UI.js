import button from './button'
import Sprite from '../../base/sprite'
const screenHeight = window.innerHeight
const screenWidth = window.innerWidth
const x = screenWidth/4
const y = screenHeight-50
const Button_SRC   = 'images/buttons.png'
const Button_WIDTH     = 512
const Button_HEIGHT    = 200
export default class UI extends Sprite{
  constructor (ctx)
  {
    super()
    this.button = new button(ctx)
  }
  start(ctx)
  {
    this.UI(ctx)
    this.button.initEvent()
  }
  UI(ctx){
    ctx.beginPath()
    ctx.fillStyle="#FF0000"
    ctx.fillRect(0,screenHeight-100,screenWidth,100)
    ctx.fill()
    ctx.closePath()
    ctx.beginPath()
    ctx.arc(x,y,50,0,2*Math.PI)
    ctx.fillStyle="#0000FF"
    ctx.fill()
    ctx.closePath()
    ctx.beginPath()
    ctx.arc(x*3,y,50,0,2*Math.PI)
    ctx.fillStyle='#FFFF00'
    ctx.fill()
  }
  Button(ctx)
  {
  }
}