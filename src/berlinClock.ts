import { BerlinClock } from "./types";

export class BerlinClockClass {
    convertTimeToClock = (time:string):BerlinClock => {
        let clock: BerlinClock = {
            seconds: "",
            fiveHours: "",
            hours: "",
            fiveMinutes: "",
            minutes: "" 
        };
        this.isMultipleOfFive(time, clock);
        this.isMultipleOfOne(time, clock);
        this.isMultipleOfTwo(time, clock);
        this.isMultipleOfTree(time, clock);
        this.isMultipleOfFour(time, clock);        
        return clock;
    }

    private isMultipleOfFour(time: string, clock: BerlinClock) {
        if (Number(time.charAt(4)) % 5 === 4) {
            clock.minutes = "YYYY";
        }
    }

    private isMultipleOfTree(time: string, clock: BerlinClock) {
        if (Number(time.charAt(4)) % 5 === 3) {
            clock.minutes = "YYY_";
        }
    }

    private isMultipleOfTwo(time: string, clock: BerlinClock) {
        if (Number(time.charAt(4)) % 5 === 2) {
            clock.minutes = "YY__";
        }
    }

    private isMultipleOfOne(time: string, clock: BerlinClock) {
        if (Number(time.charAt(4)) % 5 === 1) {
            clock.minutes = "Y___";
        }
    }

    private isMultipleOfFive(time: string, clock: BerlinClock) {
        if (Number(time.charAt(4)) % 5 === 0) {
            clock.minutes = "____";
        }
    }

    
}