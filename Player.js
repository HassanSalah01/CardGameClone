class  Player{
    constructor(config){
        this.name = config.name;
        this.health=config.health;
        this.shield=config.shield;
        this.actionPoint=config.actionPoint;
        this.IsTurn = config.IsTurn;
        this.statusType = config.statusType;
        this.statusDuration = config.statusDuration;
        this.cards = new Cards();
        this.starterCard = this.cards.starter;
    }
    
}