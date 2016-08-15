var behaviour = new Creep.Behaviour('ranger');
behaviour.run = function(creep) {
    var assignment = true;
    var flag = _.find(Game.flags, FLAG_COLOR.destroy.filter) || _.find(Game.flags, FLAG_COLOR.invade.filter);
    if( flag ) assignment = creep.assignAction(Creep.action.invading);
    else if(!creep.validateMemoryAction())
        assignment = creep.assignAction(Creep.action.guarding);
    if( !assignment ) creep.assignAction(Creep.action.idle);    
    if( creep.action ) creep.action.step(creep);
};
behaviour.run.displayName = "creep.behaviour.ranger.run";
module.exports = behaviour;