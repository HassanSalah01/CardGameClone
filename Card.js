class Card{
    constructor(name,type,cost,damage,aoe,statusType,statusDuration,statusDamage,block,description){
        this.name = name;
        this.type = type;
        this.cost = cost;
        this.status = false;
        this.damage = damage;
        this.aoe = aoe;
        this.statusType = statusType;
        this.statusDuration = statusDuration;
        this.statusDamage = statusDamage;
        this.block = block;
        this.description = description;
    }
    
}