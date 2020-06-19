//
// This is competency 130d.
//
import React from 'react';
import community from './community.js';
import c920 from './fetch.js'

const c130d = {

    url: 'http://localhost:5000/',

    createNewCommunity: async () => {
    // createNewCommunity: async (displayMessage) => {

        let newCom = new community.Community ("MessageOnly");

        // console.log("In createNewCommunity newCom initially = ");
        // console.log(newCom);

        let tmpInput = document.getElementById("inputNewCom").value;
    
        let data = await c130d.confirmAPIConnect (c130d.url);

        if (data.status === 200) {
            
            if (tmpInput.trim() === "") {

                // console.log(`Please input the new Community name.`);
                newCom.addMessage("Please input the new Community name.");

                return newCom;

            }
            else {

                newCom = new community.Community (tmpInput.trim());

                data = await c130d.createAPICommunity(c130d.url, newCom.cityList[0]);

                document.getElementById("h4Community").textContent = "Community: " + newCom.name;
                newCom.addMessage("Community " + tmpInput.trim() + " has been created.");
                
                // c130d.removedivAddCom();

                return newCom;
            }
        } else {

            // displayMessage.bind(this)("API is unavailable for Create Community. Please try again later!");
            newCom.addMessage("API is unavailable for Create Community. Please try again later!");

        }
    },

    refreshCityList: (community) => {

        //
        // First delete the existing list li and select elements.
        //

        // c130d.deleteCityList();

        //
        // Create the new list li and select in city name sort order.
        //

        // createCityList returns [listName, listLat, listLong, listPop, listSize, listHem, listMax, listSrc]

        const allLists = c130d.createCityList(community);

        // selectCity.value = "srcSelect";
        // inputAmt.value = "0";

        return allLists;

    },

    addItemToList: (list, item, community, cityArr) => {

        let listItem = [];

        if (item === "srcCity") {

            for (let i = 0; i < cityArr.length; i++) {
                
                // const itemAdd = document.createElement("OPTION");

                // itemAdd.textContent = `${community.getCityName(cityArr[i])}`;
                // itemAdd.setAttribute("value", `${item}${cityArr[i]}`);
                
                // const listNode = document.getElementById(`${list}`);
                // listNode.appendChild(itemAdd);

                listItem = cityArr.map((eCity, i) => {

                    return (
                        <option key={i} value={`${item}${eCity}`}>{`${community.getCityName(eCity)}`}</option>
                    );
                });
                // addCnt ++;
            }
        }
            // else {

        //     let northMaxKey = community.getMostNorthern();
        //     let southMaxKey = community.getMostSouthern();
            
        //     for (let i = 0; i < cityArr.length; i++) {
                
        //         const itemAdd = document.createElement("li");
                
        //         if (item === "liCity") {
        //             itemAdd.textContent = community.getCityName(cityArr[i]);
        //         } else if (item === "liLat") {
        //             itemAdd.textContent = community.getCityLatitude(cityArr[i]).toLocaleString('en-US', {minimumFractionDigits: 4});
        //         } else if (item === "liLong") {
        //             itemAdd.textContent = community.getCityLongitude(cityArr[i]).toLocaleString('en-US', {minimumFractionDigits: 4});
        //         } else if (item === "liPop") {
        //             itemAdd.textContent = community.getCityPopulation(cityArr[i]).toLocaleString();
        //         } else if (item === "liSize") {
        //             itemAdd.textContent = community.getCityHowBig(cityArr[i]);
        //         } else if (item === "liHem") {
        //             itemAdd.textContent = community.whichSphere(cityArr[i]);
        //         } else if (item === "liMax") {
                    
        //             if (cityArr[i] === northMaxKey && cityArr[i] === southMaxKey)
        //                 itemAdd.textContent = "NS";
        //             else if (cityArr[i] === northMaxKey)
        //                 itemAdd.textContent = "N";
        //             else if (cityArr[i] ===  southMaxKey)
        //                 itemAdd.textContent = "S";
        //             else 
        //                 itemAdd.textContent = ".";
        //         }
                
        //         itemAdd.setAttribute("id", `${item}${cityArr[i]}`);
        //         if ((i+1) % 2 == 0) itemAdd.setAttribute("class", "liEven");
        //         else itemAdd.setAttribute("class", "liOdd");
                
        //         const listNode = document.getElementById(`${list}`);
        //         listNode.insertBefore(itemAdd, listNode.lastElementChild);
                
        //         addCnt ++;
        //     }
        //     if (item === "liPop") idSum.textContent = community.getPopulation().toLocaleString();
        // }
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
            
        //
        // The same number of LI elements should have been deleted from each UL list
        //

        // let chkCnt = addNameCnt;
        // if ((addNameCnt + addLatCnt + addLongCnt + addPopCnt + addSizeCnt + addHemCnt + addMaxCnt + addSrcCnt) / 8 === chkCnt) return chkCnt;
        // else return -1;

        // Until implemented set unused as dummy LI list.
        listName = <option key="0" value="Name">Name</option>;
        listLat = <option key="1" value="Lat">Lat</option>;
        listLong = <option key="2" value="Long">Long</option>;
        listPop = <option key="3" value="Pop">Pop</option>;
        listSize = <option key="4" value="Size">Size</option>;
        listHem = <option key="5" value="Hem">Hem</option>;
        listMax = <option key="6" value="Max">Max</option>;

        return [listName, listLat, listLong, listPop, listSize, listHem, listMax, listSrc];
    },

    //
    // Delete all the LI elements from the UL list except for the last summary element.
    //

    deleteItemFromList: (ulList) => {

        // let maxLoop = ulList.children.length - 1;
        // let delCnt = 0
        
        // for(let i = maxLoop; i > -1; i--) {

        //     if (ulList.children[i].nodeName === "LI") {
                
        //         if (ulList.children[i].className !== "liSum") {
        //         // if (ulList.children[i].id !== "idSumTxt") {
                    
        //             ulList.removeChild(document.getElementById(`${ulList.children[i].id}`));
        //             delCnt++;
                    
        //         }
        //     }
        // }
        // if (ulList === "liPop") idSum.textContent = "0";

        // return delCnt;

        return null; // REMOVE THIS LINE
    },

    deleteCityList: () => {

        // //
        // // Delete the city list names.
        // //
        // let delNameCnt = c130d.deleteItemFromList(ulCityList);
        
        // //
        // // Delete the Latitude list.
        // //
        
        // let delLatCnt = c130d.deleteItemFromList(ulLatList);
        
        // //
        // // Delete the Longitude list.
        // //
        
        // let delLongCnt = c130d.deleteItemFromList(ulLongList);
        
        // //
        // // Delete the Population list.
        // //
        
        // let delPopCnt = c130d.deleteItemFromList(ulPopList);
        
        // //
        // // Delete the City Size Category list.
        // //
        
        // let delSizeCnt = c130d.deleteItemFromList(ulSizeList);
        
        // //
        // // Delete the Hemisphere list.
        // //
        
        // let delHemCnt = c130d.deleteItemFromList(ulHemList);
        
        // //
        // // Delete the Max Northern Southern list.
        // //
        
        // let delMaxCnt = c130d.deleteItemFromList(ulMaxList);
        
        // let maxLoop = selectCity.children.length - 1;
        // let delSrcSelCnt = 0
        
        // for (let i = maxLoop; i > -1; i--) {
            
        //     if (selectCity.children[i].value !== "srcSelect" && 
        //     selectCity.children[i].value !== "srcAddCity") {
                
        //         selectCity.removeChild(selectCity.children[i]);
        //         delSrcSelCnt++;
                
        //     }
        // }
        
        // //
        // // The same number of LI elements should have been deleted from each UL list
        // //

        // let chkCnt = delNameCnt;
        // if ((delNameCnt + delLatCnt + delLongCnt + delPopCnt + delSizeCnt + delHemCnt + delMaxCnt + delSrcSelCnt) / 8 === chkCnt) return chkCnt;
        // else return -1;

        return null; // REMOVE THIS LINE!!

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
    
    loadAPICommunity: async (url) => {

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
                            // h4Community.textContent = "Community: " + ;
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
                
                // return newCom;
            }
            else {
                newCom.addMessage("There was no data to load from the API. "
                + "Please enter the name of your new Community.");
            }
        }

        newCom.allLists = allLists;
        return newCom;
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