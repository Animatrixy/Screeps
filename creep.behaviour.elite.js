var behaviour = new Creep.Behaviour('elite');
behaviour.run = function(creep) {
    var assignment = true;
    var flag = _.find(Game.flags, FLAG_COLOR.destroy.filter) || _.find(Game.flags, FLAG_COLOR.invade3.filter);
    if( flag ) assignment = creep.assignAction(Creep.action.invading3);
    else if(!creep.validateMemoryAction())
        assignment = creep.assignAction(Creep.action.guarding3);
    if( !assignment ) creep.assignAction(Creep.action.idle);    
    if( creep.action ) creep.action.step(creep);
};
behaviour.run.displayName = "creep.behaviour.elite.run";
module.exports = behaviour;