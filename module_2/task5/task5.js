// Stwórz małą grę RPG
// W grze biorą udział Gracz oraz Potwór.
// Gracz ma swojego bohatera. Bohater ma 3 statystyki: witalność, siła i wytrzymałość.
// Przed rozpoczęciem rozgrywki gracz ma możliwośc rozdysponowania 15 pkt na powyższe statystyki
// Defaultowa wartośc statystyk przed rozdaniem to 1.
// Każdy pkt przypisany do danej statyystyki zwiększa ją o +1
// Każdy pkt przypisany zwiększa siłe ataku w nastepującej zależności: 1pkt siły atak random(1-5), 2pkt siły- atak random(2-6), 3-7 itd.
// Każdy pkt przypisany do witalności zwiększa ilość hp o 5pkt.
// Każdy pkt przypisany do wytrzymałości zwiększa ilość hp o 2% 
// Gracz zaczynając rozgrywkę ma 50 HP, potwór losowo(40-75 HP)
// Sila ataku moba - wartośc losowa z przediału 4-10

// Niech gracz i potwór walczą na obiekcie Battleground
// Gracz ma możliwośc JEDNORAZOWO użyć mikstury przywracającej losową ilośc hp z zakresu(8-18).
// Niech rozgrywka przebiega turowo( 1 tura to 1 potyczka )
// Obiekty mogą wyprowadzać atak jak i bronić się
// Atak - odjecie hp przeciwnika równe sile z jaką padł cios
// Broń się - zredukowanie siły nadchodzącego ataku o 40%
// Zejście hp do 0 oznacza przegraną co skutkuje przyznaniu 10 pkt dla zwyciezcy
// Punkty powinny być zapisywane, a gra powinna trwać określoną ilość rund

// Możesz dodać własne przedmioty wpływające na zdolności bohatera
// W projekcie postaw na swoją kreatywność, i nie ograniczaj się jedynie do wyznaczonych wskazówek.

class Player{
    constructor(name, hp, attackPower, vitality, strength, endurance){
        //...
    }
    addStat(points, statistic){}
    attackMonster(monster, attackPower){}
    usePotion(){}
    //...etc
}

class Monster{
    constructor(name, hp, attackPower){
        //...
    }
    attackPlayer(player, attackPower){}
    blockIncomingAttack(){}
    //...etc
}

class Battleground{
    constructor(name){ //... 
        //...określ co Ci jeszcze będzie potrzebne
    }
}

class Scoreboard{
    constructor(name, playerPoints, monsterPoints){
        //...
    }
    showScoreboard(){}
    addPlayerPoint(){}
    //...etc
}

// stwórz inne obiekty wymagane do rozgrywki
// Wykorzystaj umiejętności nabyte w poprzednich zadaniach przy tworzeniu tego mini projektu
