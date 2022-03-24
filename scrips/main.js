Events.on(ClientLoadEvent, () => {
    const routros = new Planet("saaralia", Planets.sun, 2, 3);
    saaralia.generator = new SerpuloPlanetGenerator();
    saaralia.mesh = new HexMesh(saaralia, 5);
    saaralia.orbitRadius = 10;
    saaralia.orbitTime = 0.8 * 50;
    saaralia.rotateTime = 10;
    saaralia.bloom = true;
    saaralia.accessible = true;
    saaralia.startSector = 1;
    saaralia.hasAtmosphere = true;
    saaralia.atmosphereColor = color.value0f("ff895e");
    saaralia.atmosphereRadIn = 0.1;
    saaralia.atmosphereRadOut = 0.3;
    saaralia.alwaysUnlocked = true;
    saaralia.localizedName = "saaralia";

    for(var i = 0; i < 31; i++){
        var h = new SectorPreset("router" + i, routros, i);
        h.localizedName = "Router" + i;
        h.alwaysUnlocked = true;
    };
});
