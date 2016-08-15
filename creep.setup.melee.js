var setup = new Creep.Setup('melee');
setup.multiBody = [TOUGH, MOVE, TOUGH, MOVE, ATTACK, MOVE]; 
setup.minAbsEnergyAvailable = 250;
setup.maxMulti = 5;
setup.globalMeasurement = true;
setup.minControllerLevel = 2;
setup.multiplicationPartwise = false;
setup.minEnergyAvailable = function(spawn){
    return 0.8;
};
setup.maxCount = function(spawn){
    return _.filter(Game.flags, FLAG_COLOR.defense.filter).length;
};
setup.maxWeight = function(spawn){
    return null; // no evaluation
};
module.exports = setup;