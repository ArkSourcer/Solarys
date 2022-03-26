const SLLib = require("libs/effectLib")
const Betelgeuse = extend(GenericCrafter, "Betelgeuse", {
  load() {
    this.super$load()
    this.region = Core.atlas.find(this.name)
    this.topRegion = Core.atlas.find(this.name + "-top")
    this.pointRegion = Core.atlas.find(this.name + "-point")
    this.phaseRegion = Core.atlas.find(this.name + "-glow")
  }
})
Betelgeuse.buildType = () => extend(GenericCrafter.GenericCrafterBuild, Betelgeuse, {
  drawTime: 0,
  drawTime2: 0,
  drawGlowAlpha: 0,
  update() {
    this.super$update()
    var a
    if (this.cons.valid()) { a = 1 } else(a = 0)
    this.drawTime = Mathf.lerp(this.drawTime, this.edelta() * a, 0.05)
    this.drawTime2 += this.drawTime
    this.drawGlowAlpha = Mathf.lerpDelta(this.drawGlowAlpha, this.progress, 0.2)
    }
  },
