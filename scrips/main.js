Events.on(ClientLoadEvent, () => {
    const solara = new Planet("solara", Planets.sun, 1, 1);
    solara.generator = new SerpuloPlanetGenerator();
    solara.mesh = new HexMesh(routros, 5);
    solara.orbitRadius = 20;
    solara.orbitTime = 1.5 * 60;
    solara.rotateTime = 20;
    solara.bloom = true;
    solara.accessible = true;
    solara.startSector = 1;
    solara.hasAtmosphere = true;
    solara.atmosphereColor = Liquids.cryofluid.color;
    solara.atmosphereRadIn = 0.2;
    solara.atmosphereRadOut = 0.3;
    solara.alwaysUnlocked = true;
    solara.localizedName = "Solara";

    for(var i = 0; i < 31; i++){
        var h = new SectorPreset("solara" + i, solara, i);
        h.localizedName = "Solara" + i;
        h.alwaysUnlocked = true;
    };
});
