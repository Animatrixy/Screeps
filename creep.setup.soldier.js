var setup = new Creep.Setup('soldier');
setup.multiBody = [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK]; 
setup.minAbsEnergyAvailable = 1800;
setup.maxMulti = 1;
setup.globalMeasurement = true;
setup.minControllerLevel = 5;
setup.multiplicationPartwise = false;
setup.minEnergyAvailable = function(spawn){
    return 0.8;
};
setup.maxCount = function(spawn){
    return _.filter(Game.flags, FLAG_COLOR.soldier.filter).length;
};
setup.maxWeight = function(spawn){
    return null; // no evaluation
};
module.exports = setup;