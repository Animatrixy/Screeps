var action = new Creep.Action('guarding');
action.reusePath = 10;
action.ignoreCreeps = true;
action.maxTargetLease = 12;
action.isAddableAction = function(){ return true; };
action.isAddableTarget = function(){ return true; };
action.newTarget = function(creep){ 
    var flags = _.sortBy(_.filter(Game.flags, FLAG_COLOR.defense.filter), 
        function(o) { 
            var occupation = ( o.creeps && o.creeps[creep.type] ? o.creeps[creep.type].length : 0);
            var distance = creep.pos.getRangeTo(o);
            return (occupation + (distance == Infinity ? 0.9 : distance/100));
        }
    );
    if( flags && flags.length > 0 ) return flags[0];
    return null;
};
action.work = function(creep){
    if( creep.room.situation.invasion ){
        if(creep.assignAction(creep.type == 'healer' ? Creep.action.healing : Creep.action.defending))
            creep.action.step(creep);
    }
    return OK;
};
module.exports = action;