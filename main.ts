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

    //% block="Gonfler la jupe || %puissance"
    //% group='Débutant'
    //% puissance.defl=400
    //% duration.shadow=timePicker
    //% expandableArgumentMode="enabled"
    export function gonflage_jupe(puissance?: number) {
        pins.servoWritePin(AnalogPin.P1, puissance);
    }

    //% block="Degonfler la jupe"
    //% group='Débutant'
    export function degonflage_jupe(): void {
        pins.servoWritePin(AnalogPin.P1, 0);
    }

    //% block="Arrêt de tous les moteurs"
    //% group='Débutant'
    export function arret_moteurs(): void {
        pins.servoWritePin(AnalogPin.P0, 0);
        pins.servoWritePin(AnalogPin.P1, 0);
        pins.servoWritePin(AnalogPin.P2, 0);
    }

    //% block="Direction $angle"
    //% angle.min=-45 angle.max=45
    //% angle.defl=0
    //% group='Débutant'
    export function direction_simple(angle: number): void {
        angle = angle +90;
        pins.servoWritePin(AnalogPin.P2, angle);
    }

    //% block="Propulsion moteur puissane $puissance"
    //% puissance.defl=0
    //% group='Débutant'
    export function puissance_moteur_simple(puissance: number): void {
        pins.servoWritePin(AnalogPin.P0, puissance);
    }
}