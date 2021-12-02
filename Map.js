class Map{
    constructor(){
        this.map = this.mapping();
    }
    mapping(){
        let nodes = [];
        for(let x = 0 ; x <10 ; x++){
            nodes[x]= new Node();
            nodes[x].number = x;
        }
        return nodes;
    }
}