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
        
        this.addMessage(
            `${tempCity.name} has been added.`);
            
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

    deleteCity(pKey) {

        let delIndex = this.findKeyIndex(pKey);
        let delCity = this.cityList[delIndex].name;

        this.cityList.splice(delIndex,1);

        this.addMessage(
            `${delCity} has been deleted.`);
            
        return true;
    }

    sortCityList(sortBy) {

        const tmpCityList = [];
        let tmpCity = new city.City();
        let tmpCnt = 0
        let retArrKeys = [];

        //
        // Set up tmpCityList as duplicate of City List without
        // the missing cities. Also ignore the control record in index
        // 0.
        //

        for (let i = 1; i < this.cityList.length; i++) {

            if (typeof this.cityList[i].name !== 'undefined') {
                tmpCityList[tmpCnt++] = this.cityList[i];
            }
        }
    
        let tradesMade = true;

        while (tradesMade) {

            tradesMade = false;
            for (let i = 0; i < tmpCityList.length; i++) {

                
                if (i !== (tmpCityList.length - 1)) {
                    
                    if (tmpCityList[i+1].name < tmpCityList[i].name) {
                        tmpCity = tmpCityList[i];
                        tmpCityList[i] = tmpCityList[i+1];
                        tmpCityList[i+1] = tmpCity;
                        tradesMade = true;
                    }
                }        
            }
        }

        //
        // Only need to return the keys acctNum sorted.
        //

        for (let i = 0; i < tmpCityList.length; i++) {

            retArrKeys[i] = tmpCityList[i].key;
        }

        return retArrKeys;
    }
    
    movedOutOfCity(pKey, peopleMoved) {
        
        let updIndex = this.findKeyIndex(pKey);
        let newPop = this.cityList[updIndex].movedOut(peopleMoved);
        this.addMessage(
            `${peopleMoved.toLocaleString()} have moved out. Population of ${this.cityList[updIndex].name} is now ${newPop.toLocaleString()}.`);

        return newPop;
    }
    
    movedIntoCity(pKey, peopleMoved) {
        
        let updIndex = this.findKeyIndex(pKey);
        let newPop = this.cityList[updIndex].movedIn(peopleMoved);
        // console.log("Key: " + pKey + ". City: " + this.cityList[updIndex].name + ". New Population: " + newPop + ". Index: " + updIndex + ". Moved: " + peopleMoved);
        this.addMessage(
            `${peopleMoved.toLocaleString()} have moved in. Population of ${this.cityList[updIndex].name} is now ${newPop.toLocaleString()}.`);

        return newPop;
    }

    getCityName(pKey) {

        let updIndex = this.findKeyIndex(pKey);
        return this.cityList[updIndex].name;
    }
    
    getCityLatitude(pKey) {

        let updIndex = this.findKeyIndex(pKey);
        return this.cityList[updIndex].latitude;
    }
    
    getCityLongitude(pKey) {

        let updIndex = this.findKeyIndex(pKey);
        return this.cityList[updIndex].longitude;
    }

    getCityPopulation(pKey) {
        
        let updIndex = this.findKeyIndex(pKey);
        return this.cityList[updIndex].population;
        
    }

    getCityHowBig(pKey) {
        
        let index = this.findKeyIndex(pKey);

        return this.cityList[index].howBig("Category");
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

        return this.cityList[nIndex].key;
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
        
        return this.cityList[nIndex].key;
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