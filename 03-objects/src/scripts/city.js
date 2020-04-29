class City {

    constructor (name, latitude, longitude, population) {

        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;

    }

    //
    // Simple "show" method for now. See how competency wants this used before getting fancy. Wish List:
    //      - Format population with commas.
    //      - Remove - and add N, S, E & W to latitude and longitude.
    //

    show () {

        return `${this.name} at ${this.latitude} and ${this.longitude} with ${this.population} people`;
    }

    //
    // Decided NOT to care if they try to moveIn a negative number. Does NOT break their program
    // and gives the programmer flexibility if he only wants to use the one moveIn function and
    // NOT the movedOut. Only check is that city population can NOT go negative.
    //

    movedIn (newPeople) {

        let newPopulation = 0;
        
        newPopulation = this.population + newPeople;
        this.population = (newPopulation < 0) ? 0 : newPopulation;
        
        return this.population;
    }
    
    //
    // movedOut is really same as movedIn with subtract instead of add, so
    // call it and let it do the work.
    //
    
    movedOut (newPeople) {
        
        return this.movedIn(-newPeople);
    }

    howBig (type) {

        //
        // Important to initialize as number and not string. If reversed, when assigning it
        // back to number from string seems to confuse the rest of the code.
        //

        let result = 0;

        if (type === "Category") {

            if (this.population > 100000) result = "City";
            else if (this.population >= 20000) result = "Large Town";
            else if (this.population >= 1000) result = "Town";
            else if (this.population > 100) result = "Village";
            else if (this.population >= 1) result = "Hamlet";
            else result = "Dead";

        //
        // Documentation will state "Number" as the default category, which really
        // means if they specify anything other than Catetory it will return the
        // number.
        //

        } else {

            result = this.population;
        }

        return result;
    }
}

export default {City};
// export default {hello, Shape, Rectangle, Square, Circle, Drawing};