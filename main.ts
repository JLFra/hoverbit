enum list_motor {
    //% block="M0"
    M0,
    //% block="M1"
    M1,
    //% block="M2"
    M2
}

enum list_servo {
    //% block="P1"
    P1,
    //% block="P2"
    P2,
}
//% groups=['Débutant', 'Avancé']
//% color="#037268" icon="\u274A"
namespace hoverbit {
    //% blockID=hoverbit_moteur_power
    //% block="Moteur $name_motor puissance $power"
    //% power.min=0 power.max=100
    //% power.defl=0
    //% name_motor=M0
    //% group='Avancé'
    export function motor_power(name_motor: list_motor, power: number): void {
        let rate = power*1023/100;
        switch (name_motor) {
            case list_motor.M0:
                pins.analogWritePin(AnalogPin.P0, rate);
            case list_motor.M1:
                pins.analogWritePin(AnalogPin.P1, rate);
            case list_motor.M2:
                pins.analogWritePin(AnalogPin.P2, rate);
        }
    }

    //% blockID=hoverbit_direction
    //% block="Servo $servo_name direction $angle"
    //% angle.min=-45 angle.max=45
    //% angle.defl=0
    //% servo_name.defl=P1
    //% group='Avancé'
    export function direction(angle: number, servo_name: list_servo): void {
        angle = angle +90;
        switch (servo_name) {
            case list_servo.P1:
                pins.servoWritePin(AnalogPin.P1, angle);
            case list_servo.P1:
                pins.servoWritePin(AnalogPin.P2, angle); 
        }  
    }

    /**
     * Permet de gonfler la Jupe
     * La puissance est réglée par défaut à 10% (0-100%)
     * Le moteur de la jupe est connecté par défaut sur le port P1
     */
    //% blockID=hoverbit_gonflage_jupe
    //% block="Gonfler la jupe || à la puissance %puissance"
    //% group='Avancé'
    //% puissance.defl=10
    //% puissance.min=0 puissance.max=100
    //% expandableArgumentMode=toggle
    export function gonflage_jupe(puissance: number): void {
        pins.servoWritePin(AnalogPin.P1, puissance*1023/100);
    }

    /**
     * Permet de gonfler la Jupe
     * La puissance est réglée fixe à 50%
     * Le moteur de la jupe est connecté par défaut sur le port P1
     */
    //% blockID=hoverbit_gonflage_jupe_simple
    //% block="Gonfler la jupe"
    //% group='Débutant'
    export function gonflage_jupe_simple(): void {
        pins.servoWritePin(AnalogPin.P1, 50*1023/100);
    }

    /**
     * Permet de dégonfler la Jupe
     * Le moteur de la jupe est connecté par défaut sur le port P1
     */
    //% blockID=hoverbit_degonflage_jupe
    //% block="Degonfler la jupe"
    //% group='Débutant'
    export function degonflage_jupe(): void {
        pins.servoWritePin(AnalogPin.P1, 0);
    }

    /**
     * Permet d'arrêter tous les moteurs jupe et propulsion
     * Arrêt des moteurs M0, M1 et M2
     */
    //% blockID=hoverbit_arret_moteurs
    //% block="Arrêt de tous les moteurs"
    //% group='Débutant'
    export function arret_moteurs(): void {
        pins.servoWritePin(AnalogPin.P0, 0);
        pins.servoWritePin(AnalogPin.P1, 0);
        pins.servoWritePin(AnalogPin.P2, 0);
    }

    /**
     * Permet de positionner la dérive à un angle donné
     * On utilise par défaut le servo connecté sur P2
     */
    //% blockID=hoverbit_direction_simple
    //% block="Direction $angle"
    //% angle.min=-60 angle.max=60
    //% angle.defl=0
    //% group='Débutant'
    export function direction_simple(angle: number): void {
        angle = angle +90;
        pins.servoWritePin(AnalogPin.P2, angle);
    }

    /**
     * Permet régler la puissance du moteur de propulsion
     * On utilise par défaut le moteur M0
     */
    //% blockID=hoverbit_puissance_moteur_simple
    //% block="Propulsion moteur puissance $puissance"
    //% puissance.defl=0
    //% group='Débutant'
    export function puissance_moteur_simple(puissance: number): void {
        pins.servoWritePin(AnalogPin.P0, puissance);
    }
}