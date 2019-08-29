var tank = {
    size: 50,
    health: 100,
    range: 60,
    damage: 12
};
//This is Okay
tank.health = 95;
//Error
tank.damage = 10;
