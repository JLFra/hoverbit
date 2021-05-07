enum list_motor {
    //% block="M0"
    M0,
    //% block="M1"
    M1,
    //% block="M2"
    M2
}

//% color="#037268" icon="\uf335"
namespace hoverbit {
    //% block="Moteur $name_motor puissance $power"
    //% power.min=0 power.max=100
    //% power.defl=0
    //% name_motor=M0
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
}