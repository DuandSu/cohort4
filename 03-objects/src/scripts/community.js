import city from './city.js';

class Community {

    //
    // Note: index 0 of city list will contain controller information.
    //
    constructor (name) {

        this.name = name;
        this.cityList = [];
        this.cityList.push({key: 0, nextKey: 1});
        // this.nextKey = 1;
    }

    createCity (name, latitude, longitude, population) {

        //
        // First step is to add to API
        //

        //
        // Second step is to add to Community
        //

        const tempCity = new city.City (name, latitude, longitude, population);

        let newIndex = this.cityList.length;
        let key = this.cityList[0].nextKey++;

        this.cityList.push(tempCity);
        this.cityList[newIndex].key = key;

        return [newIndex, key];
    }
}

export default {Community};