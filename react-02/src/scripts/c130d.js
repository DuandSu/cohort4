//
// This is competency 130d.
//
import React from 'react';
import community from './community.js';
import c920 from './fetch.js'

const c130d = {

    url: 'http://localhost:5000/',

    createNewCommunity: async (comCities) => {

        let newCom = new community.Community ("MessageOnly");

        let tmpInput = document.getElementById("inputNewCom").value;
    
        let data = await c130d.confirmAPIConnect (c130d.url);

        if (data.status === 200) {
            
            if (tmpInput.trim() === "") {

                newCom.addMessage("Please input the new Community name.");

                // return newCom;

            }
            else {

                newCom = new community.Community (tmpInput.trim());

                data = await c130d.createAPICommunity(c130d.url, newCom.cityList[0]);

                document.getElementById("h4Community").textContent = "Community: " + newCom.name;
                newCom.addMessage("Community " + tmpInput.trim() + " has been created.");
                
                comCities.setDivBlock("ClrSetCommunity");
                
                // return newCom;
            }
        } else {

            // comCities.displayMessage("API is unavailable for Create Community. Please try again later!");
            // newCom.addMessage("!");
            newCom.addMessage("API is unavailable for Create Community. Please try again later!");

        }
        return newCom;
    },
    
    createNewCity: async (community, comCities) => {

        let newKey = 0
        let allLists = [];

        let data = await c130d.confirmAPIConnect (c130d.url);

        if (data.status === 200) {

            const inputAmt = Number(document.getElementById("inputAmt").value);
            let inputNewPop = Number(document.getElementById("inputNewPop").value);
            const inputNewCity = document.getElementById("inputNewCity").value.trim();
            const inputNewLat = Number(document.getElementById("inputNewLat").value);
            const inputNewLong = Number(document.getElementById("inputNewLong").value);
            
            if (inputNewCity === "") {

                community.addMessage("Please input the new City name.");

            }
            else if (inputNewLat === 0) {
    
                community.addMessage("Please input the Latitude.");

            }
            else if (inputNewLong === 0) {
    
                community.addMessage("Please input the Longitude.");

            }
            else {

                if (inputNewPop === 0) {
                    if (inputAmt != 0) {
                        inputNewPop = inputAmt;
                    }
                }

                let newCity = community.createCity(inputNewCity,  
                    inputNewLat, inputNewLong, inputNewPop,);

                data = await c130d.createAPICity(c130d.url, community.cityList[newCity[0]], community.cityList[0]);

                allLists = c130d.refreshCityList(community);

                comCities.setDivBlock("ClrAddCity");

            }
        } else {
            
            community.addMessage("API is unavailable for Add. Please try again later!");
        }
    
        community.allLists = allLists;

        return community;
    },

    deleteCity: async (community) => {

        let allLists = [];

        let data = await c130d.confirmAPIConnect (c130d.url);

        if (data.status === 200) {
            
            const srcValue = document.getElementById("selectCity").value;

            if (srcValue === "srcSelect") {
                community.addMessage("Please Select a City.");
            }
            else {
                
                const dKey = Number(srcValue.replace("srcCity", ""));
                
                const deleteOK = community.deleteCity(dKey);
                
                if (deleteOK) {
                    
                    let dAPIKey = {};
                    dAPIKey.key = dKey;
                    data = await c130d.deleteAPICity(c130d.url, dAPIKey);

                    allLists = c130d.refreshCityList(community);
                }

                document.getElementById("selectCity").value = "srcSelect";
                document.getElementById("inputAmt").value = "0";
            }
        } 
        else {
            community.addMessage("API is unavailable for Delete. Please try again later!");
        }

        community.allLists = allLists;

        return community;
    },

    actionMoved: async (actionType, community) => {

        let allLists = [];

        let data = await c130d.confirmAPIConnect (c130d.url);

        if (data.status === 200) {

            const inputValue = document.getElementById("inputAmt").value;
            const srcValue = document.getElementById("selectCity").value;
            
            if (srcValue === "srcSelect") {
                community.addMessage("Please Select a City.");
            }
            else if (inputValue < 0) {
                community.addMessage("You May Only Move a Positive Number of People.");
            }
            else if (inputValue < 1) {
                community.addMessage("Please Input the Number of People Moving Which is NOT 0.");
            }
            else {
                
                const cityKey = Number(srcValue.replace("srcCity", ""));
                if (actionType === "IN") {
                    community.movedIntoCity(cityKey, Number(inputValue));
                }
                else if (actionType === "OUT") {
                    community.movedOutOfCity(cityKey, Number(inputValue));
                }

                let cityIndex = community.findKeyIndex(cityKey);
                data = await c130d.updateAPICity (c130d.url, community.cityList[cityIndex]);

                allLists = c130d.refreshCityList(community);

                document.getElementById("selectCity").value = "srcSelect";
                document.getElementById("inputAmt").value = "0";
            }
        } else {

            community.addMessage("API is unavailable for Update. Please try again later!");
        }

        community.allLists = allLists;

        return community;        
    },

    refreshCityList: (community) => {

        let allLists = [];

        //
        // First delete the existing list li and select elements.
        //

        allLists = c130d.deleteCityList();

        //
        // Create the new list li and select in city name sort order.
        //

        // createCityList returns [listName, listLat, listLong, listPop, listSize, listHem, listMax, listSrc]

        allLists = c130d.createCityList(community);

        document.getElementById("selectCity").value = "srcSelect";
        document.getElementById("inputAmt").value = "0";

        return allLists;

    },

    addItemToList: (list, item, community, cityArr) => {

        let listItem = [];

        if (item === "srcCity") {
            listItem = cityArr.map((eCity, i) => {

                return (
                    <option key={i} value={`${item}${eCity}`}>{`${community.getCityName(eCity)}`}</option>
                );
            });
        }
        else {

            let northMaxKey = community.getMostNorthern();
            let southMaxKey = community.getMostSouthern();

            let itemAdd = null;
            
            for (let i = 0; i < cityArr.length; i++) {
                
                let textContent = "";
                if (item === "liCity") {
                    textContent = community.getCityName(cityArr[i]);
                } else if (item === "liLat") {
                    textContent = community.getCityLatitude(cityArr[i]).toLocaleString('en-US', {minimumFractionDigits: 4});
                } else if (item === "liLong") {
                    textContent = community.getCityLongitude(cityArr[i]).toLocaleString('en-US', {minimumFractionDigits: 4});
                } else if (item === "liPop") {
                    textContent = community.getCityPopulation(cityArr[i]).toLocaleString();
                } else if (item === "liSize") {
                    textContent = community.getCityHowBig(cityArr[i]);
                } else if (item === "liHem") {
                    textContent = community.whichSphere(cityArr[i]);
                } else if (item === "liMax") {
                    
                    if (cityArr[i] === northMaxKey && cityArr[i] === southMaxKey)
                        textContent = "NS";
                    else if (cityArr[i] === northMaxKey)
                        textContent = "N";
                    else if (cityArr[i] ===  southMaxKey)
                        textContent = "S";
                    else 
                        textContent = ".";
                }
                
                let itemID =`${item}${cityArr[i]}`;
                let itemClass = "";
                if ((i+1) % 2 == 0) itemClass = "liEven";
                else itemClass = "liOdd";
                
                listItem[i] = (<li id={itemID} className={itemClass} key={i}>{textContent}</li>);
            }
            if (item === "liPop") {
                document.getElementById("idSum").textContent = community.getPopulation().toLocaleString();
            }
        }
        return listItem;
    },

    createCityList: (community) => {

        //
        // First, sort the cities by City Name into temp array.
        //

        let cityArr = community.sortCityList("Name");
        
        //
        // Add the list elements in temp array order to create new list.
        //

        let listName = c130d.addItemToList("ulCityList", "liCity", community, cityArr);
        
        let listLat = c130d.addItemToList("ulLatList", "liLat", community, cityArr);
        
        let listLong = c130d.addItemToList("ulLongList", "liLong", community, cityArr);

        let listPop = c130d.addItemToList("ulPopList", "liPop", community, cityArr);

        let listSize = c130d.addItemToList("ulSizeList", "liSize", community, cityArr);

        let listHem = c130d.addItemToList("ulHemList", "liHem", community, cityArr);
        
        let listMax = c130d.addItemToList("ulMaxList", "liMax", community, cityArr);
       
        let listSrc = c130d.addItemToList("selectCity", "srcCity", community, cityArr);

        return [listName, listLat, listLong, listPop, listSize, listHem, listMax, listSrc];
    },

    //
    // Delete all the LI elements from the UL list except for the last summary element.
    //

    deleteCityList: () => {

        let listName = null;
        let listLat = null;
        let listLong = null;
        let listPop = null;
        let listSize = null;
        let listHem = null;
        let listMax = null;
        let listSrc = null;

        document.getElementById("idSum").textContent = "0";

        return [listName, listLat, listLong, listPop, listSize, listHem, listMax, listSrc];

    },

    confirmAPIConnect: async (url) => {
        
        //
        // Check API is availabe for simple read of all records
        //
        let data;
        
        try {
            
            data = await c920.postData(url + 'all');

            if (data.status === 200 && data.length > 0) {
                
                //
                // Check can update to API with simple update to control record
                // in index/key 0 with same info.
                //
                // First check to ensure data format as expected. If try to reference
                // a key value that is not there will likely get a reference error.
                //

                let testObj = {...data[0]};
                data = await c920.postData(url + 'update', testObj);
                data = await c920.postData(url + 'read', testObj);

            }
            
        } catch (err) {
            data.status = err.name;
            data.statusText = err.message;
        }
        
        return data;
    },
    
    loadAPICommunity: async (url, comCities) => {

        let newCom = new community.Community ("MessageOnly");
        let allLists = [];

        // messageArea.textContent = "Loading Community and Cities";
        let data = await c130d.getAllAPI(url);

        if (data.status === 200) {

            if (data.length > 0) {
                newCom = new community.Community ("");
                // messageArea.textContent = "Loading Community and Cities .";
                //
                // There is API data so start loading it. If none. Display
                // message to enter the Community Name. 
                //
                for (let i = 0; i < data.length; i++) {

                    // messageArea.textContent += ".";

                    if (i === 0) {
                        if (data[i].key === 0) {
                            newCom.name = data[i].name;
                            newCom.cityList[0].name = data[i].name;
                            newCom.cityList[0].nextKey = data[i].nextKey;
                            document.getElementById("h4Community").textContent = "Community: " + data[i].name;
                        }
                    }
                    else {
                        newCom.createCity (data[i].name, data[i].latitude, data[i].longitude, data[i].population, data[i].key);
                    }
                }
                // messageArea.textContent += ".";
                allLists = c130d.refreshCityList(newCom);

                // messageArea.textContent += ". DONE";
                newCom.addMessage("Community Loaded!");
                
                // c130d.removedivAddCom();
                comCities.setDivBlock("ClrSetCommunity");                
            }
            else {
                newCom.addMessage("There was no data to load from the API. "
                + "Please enter the name of your new Community.");

                comCities.setDivBlock("SetCommunity");
            }
        }

        newCom.allLists = allLists;
        return newCom;
    },

    createAPICity: async (url, city, ctrl) => {
        
        let data;

        try {

            data = await c130d.confirmAPIConnect (url);
            
            if (data.status === 200) {

                data = await c920.postData(url + 'add', city);

                if (data.status === 200) {

                    let keyCtrl = {};
                    keyCtrl.key = 0;
                    keyCtrl.nextKey = ctrl.nextKey;
                    keyCtrl.name = ctrl.name;

                    data = await c920.postData(url + 'update', keyCtrl);
                }
                
            }
            
        }
        catch (err) {
            data.status = err.name;
            data.statusText = err.message;
        }

        return data;
    },

    deleteAPICity: async (url, city) => {
        
        let data;

        try {

            data = await c130d.confirmAPIConnect (url);
            
            if (data.status === 200) {
                
                let keyDel = {};
                keyDel.key = city.key;
                data = await c920.postData(url + 'delete', keyDel);
            }
        }
        catch (err) {
            data.status = err.name;
            data.statusText = err.message;
        }

        return data;
    },

    createAPICommunity: async (url, community) => {
        
        let data;

        try {

            data = await c130d.confirmAPIConnect (url);
            
            if (data.status === 200) {
                
                data = await c920.postData(url + 'add', community);
            }
            
        }
        catch (err) {
            data.status = err.name;
            data.statusText = err.message;
        }

        return data;
    },

    updateAPICity: async (url, city) => {
        
        let data;
        
        try {
            
            data = await c130d.confirmAPIConnect (url);
            
            if (data.status === 200) {
                
                let keyUpd = {};
                keyUpd.key = city.key;
                keyUpd.name = city.name;
                keyUpd.latitude = city.latitude;
                keyUpd.longitude = city.longitude;
                keyUpd.population = city.population;
                
                data = await c920.postData(url + 'update', keyUpd);
            }
        }
        catch (err) {
            data.status = err.name;
            data.statusText = err.message;
        }
        
        return data;
    },

    getAllAPI: async (url) => {
        
        let data;
        
        try {
            
            data = await c130d.confirmAPIConnect (url);
            
            if (data.status === 200) {
                
                data = await c920.postData(url + 'all');
            }
        }
        catch (err) {
            data.status = err.name;
            data.statusText = err.message;
        }
        
        return data;
    }    
};

export default c130d;