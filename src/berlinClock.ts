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
        if (Number(time.charAt(4)) % 5 === 1) {
            clock.minutes = "Y___";
        }
        
        if(time.charAt(4) === '2'){
            clock.minutes = "YY__";
        }
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

    private isMultipleOfFive(time: string, clock: BerlinClock) {
        if (Number(time.charAt(4)) % 5 === 0) {
            clock.minutes = "____";
        }
    }

    
}