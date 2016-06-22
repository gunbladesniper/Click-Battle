function Char(){
  this.hp = 10;
  this.ap = 10;
  this.str = 5;
  this.agi = 5;
  this.int = 5;
}
function Warrior(){
  Char.call(this);
  this.hp = this.hp + 20;
  this.ap = this.ap + 5;
  this.str += 10;
  this.agi += 10;
  this.int += 5;
}
Warrior.prototype = Object.create(Char.prototype);

function Champion(name){
  Warrior.call(this);
  this.charName = name;
  this.str += 10;
  this.hp += 10;
}
Champion.prototype = Object.create(Warrior);


function Titan(name){
  Warrior.call(this);
  this.charName = name;
  this.str += 20;
  this.hp += 5;
}
Titan.prototype = Object.create(Warrior);


function Mage(){
  Char.call(this);
  this.hp = this.hp + 5;
  this.ap = this.ap + 20;
  this.agi += 5;
  this.int += 10;
}
Mage.prototype = Object.create(Char.prototype);

function Pyromancer(name){
  Mage.call(this);
  this.charName = name;
  this.int += 20;
  this.ap += 10;
  this.hp += 5;
}
Pyromancer.prototype = Object.create(Mage);

function Cryomancer(name){
  Mage.call(this);
  this.charName = name;
  this.int += 10;
  this.ap += 20;
  this.hp += 10;
}
Cryomancer.prototype = Object.create(Mage);

function Scout(){
  Char.call(this);
  this.hp += 10;
  this.ap += 10;
  this.str += 5;
  this.agi += 10;
  this.int += 5;
}
Scout.prototype = Object.create(Char.prototype);

function Archer(name){
  Scout.call(this);
  this.charName = name;
  this.agi += 20;
  this.ap += 10;
  this.hp +=5;

}
Archer.prototype = Object.create(Scout);

function Duelist(name){
  Scout.call(this);
  this.charName = name;
  this.agi += 10;
  this.ap += 10;
  this.str +=10;
  this.hp += 10;
}
Duelist.prototype = Object.create(Scout);

function startGameChampion(){
  document.getElementById('pcontrol').innerHTML="";
  document.getElementById('pimage').innerHTML="";

  var inName = document.getElementById("pname");
  var playerName = inName.value;
  var player = new Champion(playerName);
  var picture = document.getElementById('pimage');
  var image = document.createElement('img');
  image.setAttribute('src', '/images/champion.jpg');
  image.setAttribute('id', 'pim');
  picture.appendChild(image);
  for(key in player){
    var display = document.createElement("div");
    var dispName = document.createTextNode(key + ': ' + player[key] );
    display.appendChild(dispName);
    document.getElementById("pcontrol").appendChild(display);

  };

};

function startGameTitan(){
    document.getElementById('pcontrol').innerHTML="";
    document.getElementById('pimage').innerHTML="";

    var inName = document.getElementById("pname");
    var playerName = inName.value;
    var player = new Titan(playerName);
    var picture = document.getElementById('pimage');
    var image = document.createElement('img');
    image.setAttribute('src', '/images/titan.jpg');
    image.setAttribute('id', 'pim');
    picture.appendChild(image);
    for(key in player){
      var display = document.createElement("div");
      var dispName = document.createTextNode(key + ': ' + player[key] );
      display.appendChild(dispName);
      document.getElementById("pcontrol").appendChild(display);

    };

};

function startGamePyromancer(){
  document.getElementById('pcontrol').innerHTML="";
  document.getElementById('pimage').innerHTML="";

  var inName = document.getElementById("pname");
  var playerName = inName.value;
  var player = new Pyromancer(playerName);
  var picture = document.getElementById('pimage');
  var image = document.createElement('img');
  image.setAttribute('src', '/images/pyromancer.jpg');
  image.setAttribute('id', 'pim');
  picture.appendChild(image);
  for(key in player){
    var display = document.createElement("div");
    var dispName = document.createTextNode(key + ': ' + player[key] );
    display.appendChild(dispName);
    document.getElementById("pcontrol").appendChild(display);
 }
};

function startGameCryomancer(){
  document.getElementById('pcontrol').innerHTML="";
  document.getElementById('pimage').innerHTML="";

  var inName = document.getElementById("pname");
  var playerName = inName.value;
  var player = new Cryomancer(playerName);
  var picture = document.getElementById('pimage');
  var image = document.createElement('img');
  image.setAttribute('src', '/images/cryomancer.jpg');
  image.setAttribute('id', 'pim');
  picture.appendChild(image);
  for(key in player){
    var display = document.createElement("div");
    var dispName = document.createTextNode(key + ': ' + player[key] );
    display.appendChild(dispName);
    document.getElementById("pcontrol").appendChild(display);
  }
};

function startGameArcher(){
  document.getElementById('pcontrol').innerHTML="";
  document.getElementById('pimage').innerHTML="";

  var inName = document.getElementById("pname");
  var playerName = inName.value;
  var player = new Archer(playerName);
  var picture = document.getElementById('pimage');
  var image = document.createElement('img');
  image.setAttribute('src', '/images/archer.jpg');
  image.setAttribute('id', 'pim');
  picture.appendChild(image);
  for(key in player){
    var display = document.createElement("div");
    var dispName = document.createTextNode(key + ': ' + player[key] );
    display.appendChild(dispName);
    document.getElementById("pcontrol").appendChild(display);
 }
};

function startGameDuelist(){
  document.getElementById('pcontrol').innerHTML="";
  document.getElementById('pimage').innerHTML="";

  var inName = document.getElementById("pname");
  var playerName = inName.value;
  var player = new Duelist(playerName);
  var picture = document.getElementById('pimage');
  var image = document.createElement('img');
  image.setAttribute('src', '/images/duelist.jpg');
  image.setAttribute('id', 'pim');
  picture.appendChild(image);
  for(key in player){
    var display = document.createElement("div");
    var dispName = document.createTextNode(key + ': ' + player[key] );
    display.appendChild(dispName);
    document.getElementById("pcontrol").appendChild(display);
  }
};

function createEnemy(){
  if(document.getElementById('pim')){
    document.getElementById('ccontrol').innerHTML="";
    document.getElementById('cimage').innerHTML="";

    var enemyName = "Villian";
    var randomNumber = function(){
        return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      }
      var enemy;
      switch (randomNumber()) {
        case 1:
          enemy = new Champion(enemyName);
          var picture = document.getElementById('cimage');
          var image = document.createElement('img');
          image.setAttribute('src', '/images/champion.jpg');
          image.setAttribute('id', 'cim');
          picture.appendChild(image);
          for(key in enemy){
            var display = document.createElement("div");
            var dispName = document.createTextNode(key + ': ' + enemy[key] );
            display.appendChild(dispName);
            document.getElementById("ccontrol").appendChild(display);
          };
          break;


          case 2:
          enemy = new Titan(enemyName);
          var picture = document.getElementById('cimage');
          var image = document.createElement('img');
          image.setAttribute('src', '/images/titan.jpg');
          image.setAttribute('id', 'cim');
          picture.appendChild(image);
          for(key in enemy){
            var display = document.createElement("div");
            var dispName = document.createTextNode(key + ': ' + enemy[key] );
            display.appendChild(dispName);
            document.getElementById("ccontrol").appendChild(display);
          };
          break;

          case 3:
          enemy = new Pyromancer(enemyName);
          var picture = document.getElementById('cimage');
          var image = document.createElement('img');
          image.setAttribute('src', '/images/pyromancer.jpg');
          image.setAttribute('id', 'cim');
          picture.appendChild(image);
          for(key in enemy){
            var display = document.createElement("div");
            var dispName = document.createTextNode(key + ': ' + enemy[key] );
            display.appendChild(dispName);
            document.getElementById("ccontrol").appendChild(display);
          };
          break;

          case 4:
          enemy = new Cryomancer(enemyName);
          var picture = document.getElementById('cimage');
          var image = document.createElement('img');
          image.setAttribute('src', '/images/cryomancer.jpg');
          image.setAttribute('id', 'cim');
          picture.appendChild(image);
          for(key in enemy){
            var display = document.createElement("div");
            var dispName = document.createTextNode(key + ': ' + enemy[key] );
            display.appendChild(dispName);
            document.getElementById("ccontrol").appendChild(display);
          };
          break;

          case 5:
          enemy = new Archer(enemyName);
          var picture = document.getElementById('cimage');
          var image = document.createElement('img');
          image.setAttribute('src', '/images/archer.jpg');
          image.setAttribute('id', 'cim');
          picture.appendChild(image);
          for(key in enemy){
            var display = document.createElement("div");
            var dispName = document.createTextNode(key + ': ' + enemy[key] );
            display.appendChild(dispName);
            document.getElementById("ccontrol").appendChild(display);
          };
          break;

          case 6:
          enemy = new Duelist(enemyName);
          var picture = document.getElementById('cimage');
          var image = document.createElement('img');
          image.setAttribute('src', '/images/duelist.jpg');
          image.setAttribute('id', 'cim');
          picture.appendChild(image);
          for(key in enemy){
            var display = document.createElement("div");
            var dispName = document.createTextNode(key + ': ' + enemy[key] );
            display.appendChild(dispName);
            document.getElementById("ccontrol").appendChild(display);
          };
          break;

        default: null;

    }
    document.getElementById('cstart').innerHTML = ""
  }
};
