var behaviour = new Creep.Behaviour('soldier');
behaviour.run = function(creep) {
    var assignment = true;
    var flag = _.find(Game.flags, FLAG_COLOR.destroy.filter) || _.find(Game.flags, FLAG_COLOR.invade2.filter);
    if( flag ) assignment = creep.assignAction(Creep.action.invading2);
    else if(!creep.validateMemoryAction())
        assignment = creep.assignAction(Creep.action.guarding2);
    if( !assignment ) creep.assignAction(Creep.action.idle);    
    if( creep.action ) creep.action.step(creep);
};
behaviour.run.displayName = "creep.behaviour.soldier.run";
module.exports = behaviour;