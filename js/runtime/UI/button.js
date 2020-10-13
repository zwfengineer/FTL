import Sprite from "../../base/sprite"

const screenHeight = window.innerHeight
const screenWidth = window.innerWidth
const x1 = screenWidth/4
const y1 = screenHeight-50
const x2 = x1*4
const y2 = y1
export default class button extends Sprite{
  constructor(ctx)
  {
    super()
    this.r = 50
    this.touched = false
    this.x=0
    this.y=0
    this.fx=screenWidth/2
    this.fy=30
    this.r1 = "0"
  }
outText(ctx){
    ctx.fillStyle = "#ffffff"
    ctx.font  = "20px Arial"
    ctx.fillText(this.r1,50,30)
  }
initEvent()
  {
    canvas.addEventListener("touchstart",((result) => {
      result.preventDefault()
      this.touched = true
      this.x = result.touches[0].clientX
      this.y = result.touches[0].clientY
      this.r1 = Math.sqrt(Math.pow(Math.abs(this.x-x1),2)+Math.pow(Math.abs(this.y-y1),2))
      if (this.r1 < this.r)
      {
        
      }
    }).bind(this))
    canvas.addEventListener("touchemove",((result) => {
    }))
    canvas.addEventListener("touchend",((result) => {
      result.preventDefault()
      if (this.r1>this.r && this.touched)
      {
      }
      this.touched = false
      
    }).bind(this))
  }
}
  