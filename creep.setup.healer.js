var setup = new Creep.Setup('healer');
setup.multiBody = [MOVE, HEAL];
setup.minAbsEnergyAvailable = 300;
setup.maxMulti = 1;
setup.globalMeasurement = true;
setup.minControllerLevel = 4;
setup.multiplicationPartwise = false;
setup.minEnergyAvailable = function(spawn){
    return 0.7;
};
setup.maxCount = function(spawn){
    return _.filter(Game.flags, FLAG_COLOR.defense.filter).length;
};
setup.maxWeight = function(spawn){
    return null;
};
module.exports = setup;