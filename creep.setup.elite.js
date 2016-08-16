var setup = new Creep.Setup('elite');
setup.multiBody = [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]; 
setup.minAbsEnergyAvailable = 3250;
setup.maxMulti = 1;
setup.globalMeasurement = true;
setup.minControllerLevel = 7;
setup.multiplicationPartwise = false;
setup.minEnergyAvailable = function(spawn){
    return 0.99
};
setup.maxCount = function(spawn){
    return _.filter(Game.flags, FLAG_COLOR.elite.filter).length;
};
setup.maxWeight = function(spawn){
    return null; // no evaluation
};
module.exports = setup;