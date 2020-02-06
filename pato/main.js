class Duck {
    flyBehavior;
    quackBehavior;
    perfomQuack() {
        this.quackBehavior.quack();
    }
    setFlyBehavior(flyBehavior) {
        this.flyBehavior = flyBehavior;
    }
    setQuackBehavior(qd) {
        this.quackBehavior = qd;
    }
    swim() {
        console.log("Estoy nadando");
    }
    display() {}
};


class MaltardDuck extends Duck {
    display() {
        console.log("Look at me Im a Mallar Duck");
    }

}

class RedheadDuck extends Duck {
    display() {
        console.log("Mira esta belleza peliroja");
    }

}
class CauchoDuck extends Duck {
    display() {
        console.log("El pato de caucho solo sabe flotar");
    }
    fly() {
        console.log("......no puedo volar");
    }
}

class CorchoDuck extends Duck {
    display() {
        console.log("El pato de corcho solo sabe flotar");
    }
    fly() {
        console.log("......el corcho no vuela");
    }
}


class FlyWithWings {
    fly() {
        console.log("Vuela alto....");
    }
}

class FlyNoWay {
    fly() {
        console.log("Este pato no vuela ....");
    }
}
class Quack {
    quack() {
        console.log("Quack Quack");
    }
}

class Squeak {
    quack() {
        console.log("Squeak Squeak");
    }
}

class MuteQuack {
    quack() {
        console.log("Shhhh calladito Shhh");
    }
}

class VolarConCohetes {
    fly() {
        console.log("Con mis cohetes voy al infinito y mas alla!!!");
    }
}