const planetGen = require("Solarys/libs/planetGen");

const solara = extend(Planet, "solara", Planets.sun, 3, 1.25, {
  generator: planetGen.planetGen,
  bloom: true,
  accessible: true,
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("ff895e"),
  atmosphereRadIn: 0.02,
  atmosphereRadOut: 0.3,
  localizedName: "Solara",
  startSector: 10
});
solara.meshLoader = () => extend(HexMesh, solara, 6, {});
