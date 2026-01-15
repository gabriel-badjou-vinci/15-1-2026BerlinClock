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
        if(time.charAt(4) === '3'){
            clock.minutes = "YYY_";
        }
        if(time.charAt(4) === '4'){
            clock.minutes = "YYYY";
        }
        if(time.charAt(4) === '7'){
            clock.minutes = "YY__";
        }
        if(time.charAt(4) === '8'){
            clock.minutes = "YYY_";
        }
        if(time.charAt(4) === '9'){
            clock.minutes = "YYYY";
        }
        return clock;
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