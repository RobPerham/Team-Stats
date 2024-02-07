const team = {
  _player:[
    {firstName:Robert , lastName: Harrison ,age:30},
    {firstName:James , lastName: Robertson ,age:26},
    {firstName: Matt , lastName: Smith ,age:20},
    ],
  _games :[
    {opponent:Chelsea, teamPoints:1 , opponentPoints:2},
    {opponent:West Ham United, teamPoints:2 , opponentPoints:3},
    {opponent:Nottingham Forest, teamPoints:4 , opponentPoints:0}
  ],
  get Players(){
    return this._players;
  },
  addaddPlayer(newFirstName, newLastName, newAge. ){
    let player ={
      firstName : newFirstName,
      lastName : newLastName,
      age :newAge
    };
    this.player.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints.){
    let game={
      opponent : newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints:newOpponentPoints
    };
    this.game,push(game)
  }
};
team.addaddPlayer('Bugs','Bunny',76);
console.log(team.players);

team.addGame('Man United',1,3);