var action = new Creep.Action('travelling');
action.reusePath = 15;
action.ignoreCreeps = true;
action.isValidTarget = function(target){ return target != null; }; 
action.isAddableAction = function(){ return true; };
action.isAddableTarget = function(){ return true; };
action.newTarget = function(creep){ return null; }
action.step = function(creep){
    if(CHATTY) creep.say(this.name, SAY_PUBLIC);
    if( creep.target ){
        creep.moveTo(creep.target, {reusePath: this.reusePath});
    }
    if( creep.target.pos.roomName == creep.room.name ){
        // unregister
        creep.action = null;
    }
}
module.exports = action;