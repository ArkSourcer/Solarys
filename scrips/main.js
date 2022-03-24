Events.on(ClientLoadEvent, () => {
    const banice = new Planet("banice", Planets.sun, 1, 2);
    banice.generator = new SerpuloPlanetGenerator();
    banice.mesh = new HexMesh(banice, 5);
    banice.orbitRadius = 15;
    banice.orbitTime = 1.0 * 60;
    banice.rotateTime = 10;
    banice.bloom = true;
    banice.accessible = true;
    banice.startSector = 1;
    banice.hasAtmosphere = true;
    banice.atmosphereColor = Liquids.cryofluid.color;
    banice.atmosphereRadIn = 0.1;
    banice.atmosphereRadOut = 0.3;
    banice.alwaysUnlocked = true;
    banice.localizedName = "Banice";

    for(var i = 0; i < 31; i++){
        var h = new SectorPreset("solara1" + i, banice, i);
        h.localizedName = "Solara" + i;
        h.alwaysUnlocked = true;
    };
});
