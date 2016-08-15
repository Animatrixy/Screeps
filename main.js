/* https://github.com/cyberblast/screeps.behaviour-action-pattern */
var params = require('./parameter');
var global = require('./global');
global.init(params);
Extensions.extend();
Creep.extend();
Room.extend();
Spawn.extend();
FlagDir.extend();

module.exports.loop = function () {
    FlagDir.loop();
    Population.loop();  

    var roomLoop = room => {
        room.loop();
        Tower.loop(room);
    };
    _.forEach(Game.rooms, roomLoop);

    Creep.loop();

    if( Game.time % SPAWN_INTERVAL == 0 )   
        Spawn.loop(); 

    //if( Game.time % TIME_REPORT == 0 ) 
    if( Memory.statistics && Memory.statistics.tick && Memory.statistics.tick + TIME_REPORT <= Game.time )
        require('./statistics').loop();
    processReports();
};