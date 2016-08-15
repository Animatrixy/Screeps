var setup = new Creep.Setup('worker');
setup.multiBody = [CARRY, WORK, MOVE];
setup.fixedBody = [];
setup.minAbsEnergyAvailable = 200;
setup.maxMulti = 6;
setup.multiplicationPartwise = false;
setup.minEnergyAvailable = function(spawn){
    return 0.3;
};
setup.maxCount = function(spawn){
    return ((spawn.room.sourceAccessibleFields*1.2) + (spawn.room.sources.length*2));
};
setup.maxWeight = function(spawn){
    return (spawn.room.sources.length * 3000);
};
module.exports = setup;