import city from './city.js';

class Community {

    //
    // Note: index 0 of city list will contain controller information.
    //
    constructor (name) {

        this.name = name;
        this.cityList = [];
        this.cityList.push({key: 0, nextKey: 1});
        this.cityList[0].name = name;
        this.msgQueue = [];
    }

    //
    // pKey is optional parameter provided so programmer can specify an existing key 
    // if necessary, rather than create one from nextKey.
    //

    createCity (name, latitude, longitude, population, pKey) {
            
        const tempCity = new city.City (name, latitude, longitude, population);
        let key = -1;
        
        let newIndex = this.cityList.length;
        if (typeof pKey === "number") {
            key = pKey;
        } else if (typeof pKey === "string") {
            key = Number(pKey);
        }
        else {
            key = this.cityList[0].nextKey++;
        }
        
        this.cityList.push(tempCity);
        this.cityList[newIndex].key = key;
        
        return [newIndex, key];
    }

    findKeyIndex(pKey) {

        let delIndex = -1;
        for (let i = 1; i < this.cityList.length; i++) {
            if (this.cityList[i].key === pKey) {
                delIndex = i;
                break;
            }
        }
        return delIndex;
    }

    deleteCity (pKey) {

        let delIndex = this.findKeyIndex(pKey);
        this.cityList.splice(delIndex,1);
        
    }
    
    movedOutOfCity(pKey, peopleMoved) {
        
        let updIndex = this.findKeyIndex(pKey);
        return this.cityList[updIndex].movedOut(peopleMoved);
    }

    movedIntoCity(pKey, peopleMoved) {
        
        let updIndex = this.findKeyIndex(pKey);
        return this.cityList[updIndex].movedIn(peopleMoved);
    }
    
    whichSphere (pKey) {
        
        let index = this.findKeyIndex(pKey);

        return (this.cityList[index].latitude >= 0) ? "N" : "S";
    }

    getMostNorthern () {

        let nIndex = 1;
        let nCity = {};

        if (this.cityList.length === 1) {

            nIndex = 0;
        } else {

            nCity = this.cityList[1];

            for (let i = 1; i < this.cityList.length; i++) {
                if (this.cityList[i].latitude > nCity.latitude) {
                    nIndex = i;
                    nCity = this.cityList[i];
                } else if (this.cityList[i].latitude === nCity.latitude) {
                    if  (this.cityList[i].population > nCity.population) {
                        nIndex = i;
                        nCity = this.cityList[i];
                    }
                }
            }
        }

        return nIndex;
    }
    
    getMostSouthern () {

        let nIndex = 1;
        let nCity = {};

        if (this.cityList.length === 1) {

            nIndex = 0;
        } else {

            nCity = this.cityList[1];

            for (let i = 1; i < this.cityList.length; i++) {
                if (this.cityList[i].latitude < nCity.latitude) {
                    nIndex = i;
                    nCity = this.cityList[i];
                } else if (this.cityList[i].latitude === nCity.latitude) {
                    if  (this.cityList[i].population > nCity.population) {
                        nIndex = i;
                        nCity = this.cityList[i];
                    }
                }
            }
        }
        
        return nIndex;
    }
    
    getPopulation () {
        
        let totPopulation = 0;

        for (let i = 1; i < this.cityList.length; i++)
            totPopulation += this.cityList[i].population;
        
        return totPopulation;

    }

    isMessage() {
    
        if (this.msgQueue.length > 0)
            return true;
        else
            return false;
    }

    getMessages() {

        let messages = "";
        for (let i = 0; i < this.msgQueue.length; i++) {
            messages += " " + `${this.msgQueue[i]}`;
        }

        return messages;
    }
    
    addMessage(textMsg) {

        this.msgQueue[this.msgQueue.length] = textMsg;

        return true;
    }

    resetMessage() {

        this.msgQueue = [];
        
        return true;

    }
}
    
export default {Community};