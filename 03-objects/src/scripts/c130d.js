//
// This is competency 130d.
//
import c920 from './fetch.js'

const c130d = {

    url: 'http://localhost:5000/',
    
    divMakeAddCityElement: () => {

        //
        // Create the div for Adding City Name:
        //
        
        const divAdd = document.createElement("div");
        divAdd.textContent = "Enter Name of New City: ";
        divAdd.setAttribute("id", "idAddAcct");
        divAdd.setAttribute("class", "divAddAcct");
         
        const newAcctInput = document.createElement("INPUT");
        newAcctInput.setAttribute("type", "text");
        newAcctInput.setAttribute("id", "inputNewAcct");
        divAdd.appendChild(newAcctInput);

        const createBtn = document.createElement("BUTTON");
        createBtn.textContent = "Create";
        createBtn.setAttribute("type", "button");
        createBtn.setAttribute("id", "btnCreateAcct");
        divAdd.appendChild(createBtn);
            
        const cancelBtn = document.createElement("BUTTON");
        cancelBtn.textContent = "Cancel";
        cancelBtn.setAttribute("type", "button");
        cancelBtn.setAttribute("id", "btnCancelAcct");
        divAdd.appendChild(cancelBtn);
    
        const brLine = document.createElement("BR");
        divAdd.appendChild(brLine);
        divAdd.appendChild(brLine);
        
        const labelNewCreditFlg = document.createElement("LABEL");
        labelNewCreditFlg.textContent = "Check if Credit Account: ";
        labelNewCreditFlg.setAttribute("for", "inputRadioCredit");
        divAdd.appendChild(labelNewCreditFlg);

        const newCreditFlgRadio = document.createElement("INPUT");
        newCreditFlgRadio.setAttribute("type", "radio");
        newCreditFlgRadio.setAttribute("id", "inputRadioCredit");
        newCreditFlgRadio.setAttribute("name", "inputRadioCredit");
        newCreditFlgRadio.setAttribute("value", "inputRadioCredit");
        divAdd.appendChild(newCreditFlgRadio);
        
        return divAdd;
    },
    
    //
    // The event listeners for "Create" and "Cancel" buttons, for the "Add Account" div are
    // in the following functions, since they actually exist only when the div is created.
    // When the div is added or deleted, the event listeners need to be created or removed.
    //
    
    createdivAddCity: (community) => {
    
        if (document.getElementById("idAddCity") === null) {

            idCitys.parentElement.insertBefore(c130c.divMakeAddCityElement(), idCitys);

            btnCreateCity.addEventListener('click', (e => {
 
                //
                // Add the code to Create the account.
                //
        
                c130c.createNewCity(community);

                //
                // Account was added. Now with Add div.
                // Remove the div and events its buttons.
                //

                c130c.removedivAddCity();
              
            }));
    
            btnCancelCity.addEventListener('click', (e => {
        
                //          
                // Cancel button would indicate done with Add div.
                // Remove the div and events its buttons.
                //
                c130c.removedivAddCity();
        
            }));
        }
    },

    removedivAddCity: () => {

        btnCreateCity.removeEventListener("click", e => {});
        btnCancelCity.removeEventListener("click", e => {});
        idAddCity.parentElement.removeChild(idAddCity);

        selectCity.value = "srcSelect";
        inputAmt.value = 0.00;
    },

    deleteCity: async (community) => {

        let data = await c130d.confirmAPIConnect (c130d.url);

        if (data.status === 200) {
            
            const srcValue = selectCity.value;
            if (srcValue === "srcSelect") {
                messageArea.textContent = `Please Select a City.`;
            }
            else {
                
                const dKey = Number(srcValue.replace("srcCity", ""));
                
                const deleteOK = community.deleteCity(dKey);
                
                if (community.isMessage()) {
                    messageArea.textContent = community.getMessages();
                    community.resetMessage();
                }
                
                if (deleteOK) {
                    
                    ulCityList.removeChild(document.getElementById(`liCity${dKey}`));
                    ulLatList.removeChild(document.getElementById(`liLat${dKey}`));
                    ulLongList.removeChild(document.getElementById(`liLong${dKey}`));
                    ulPopList.removeChild(document.getElementById(`liPop${dKey}`));
                    ulSizeList.removeChild(document.getElementById(`liSize${dKey}`));
                    ulHemList.removeChild(document.getElementById(`liHem${dKey}`));
                    ulMaxList.removeChild(document.getElementById(`liMax${dKey}`));

                    let maxLoop = selectCity.children.length - 1;
                    
                    for (let i = maxLoop; i > -1; i--) {
            
                        if (selectCity.children[i].value === `srcCity${dKey}`) {
            
                            selectCity.removeChild(selectCity.children[i]);
            
                        }
                    }
                    
                    let dAPIKey = {};
                    dAPIKey.key = dKey;
                    data = await c130d.deleteAPICity(c130d.url, dAPIKey);

                    c130d.refreshCityList(community);
                }

                selectCity.value = "srcSelect";
                inputAmt.value = 0.00;
            }
        } else {
            
            messageArea.textContent = "API is unavailable for Delete. Please try again later!";
        }
    },

    actionMoved: async (actionType, community) => {

        let data = await c130d.confirmAPIConnect (c130d.url);

        if (data.status === 200) {

            const inputValue = inputAmt.value;
            const srcValue = selectCity.value;
            
            if (srcValue === "srcSelect") {
                messageArea.textContent = `Please Select a City.`;
            }
            else if (inputValue < 0) {
                messageArea.textContent = `You May Only Move a Positive Number of People.`;
            }
            else if (inputValue < 1) {
                messageArea.textContent = `Please Input the Number of People Moving Which is NOT 0.`;
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

                if (community.isMessage()) {
                    messageArea.textContent = community.getMessages();
                    community.resetMessage();
                }

                document.getElementById(`liPop${cityKey}`).textContent = `${community.getCityPopulation(cityKey)}`;
                idSum.textContent = `${community.getPopulation()}`;

                selectCity.value = "srcSelect";
                inputAmt.value = 0.00;
            }
        } else {

            messageArea.textContent = "API is unavailable for Update. Please try again later!";
        }
    },

    refreshCityList: (community) => {

        //
        // First delete the existing list li and select elements.
        //

        c130d.deleteCityList();

        //
        // Create the new list li and select in city name sort order.
        //

        c130d.createCityList(community);
        
    },

    addItemToList: (list, item, community, cityArr) => {

        let addCnt = 0

        if (item === "srcCity") {

            for (let i = 0; i < cityArr.length; i++) {
                
                const itemAdd = document.createElement("OPTION");

                itemAdd.textContent = `${community.getCityName(cityArr[i])}`;
                itemAdd.setAttribute("value", `${item}${cityArr[i]}`);
                
                const listNode = document.getElementById(`${list}`);
                listNode.appendChild(itemAdd);

                addCnt ++;
            }

        } else {

            let northMaxKey = community.getMostNorthern();
            let southMaxKey = community.getMostSouthern();
            
            for (let i = 0; i < cityArr.length; i++) {
                
                const itemAdd = document.createElement("li");
                
                if (item === "liCity") {
                    itemAdd.textContent = community.getCityName(cityArr[i]);
                } else if (item === "liLat") {
                    itemAdd.textContent = community.getCityLatitude(cityArr[i]);
                } else if (item === "liLong") {
                    itemAdd.textContent = community.getCityLongitude(cityArr[i]);
                } else if (item === "liPop") {
                    itemAdd.textContent = community.getCityPopulation(cityArr[i]);
                } else if (item === "liSize") {
                    itemAdd.textContent = community.getCityHowBig(cityArr[i]);
                } else if (item === "liHem") {
                    itemAdd.textContent = community.whichSphere(cityArr[i]);
                } else if (item === "liMax") {
                    
                    if (cityArr[i] === northMaxKey && cityArr[i] === southMaxKey)
                        itemAdd.textContent = "NS";
                    else if (cityArr[i] === northMaxKey)
                        itemAdd.textContent = "N";
                    else if (cityArr[i] ===  southMaxKey)
                        itemAdd.textContent = "S";
                    else 
                        itemAdd.textContent = ".";
                }
                
                itemAdd.setAttribute("id", `${item}${cityArr[i]}`);
                if ((i+1) % 2 == 0) itemAdd.setAttribute("class", "liEven");
                else itemAdd.setAttribute("class", "liOdd");
                
                const listNode = document.getElementById(`${list}`);
                listNode.insertBefore(itemAdd, listNode.lastElementChild);
                
                addCnt ++;
            }
            if (item === "liPop") idSum.textContent = community.getPopulation();
        }
        return addCnt;
    },

    createCityList: (community) => {

        //
        // First, sort the cities by City Name into temp array.
        //

        let cityArr = community.sortCityList("Name");
        
        //
        // Add the list elements in temp array order to create new list.
        //

        let addNameCnt = c130d.addItemToList("ulCityList", "liCity", community, cityArr);
        
        let addLatCnt = c130d.addItemToList("ulLatList", "liLat", community, cityArr);
        
        let addLongCnt = c130d.addItemToList("ulLongList", "liLong", community, cityArr);

        let addPopCnt = c130d.addItemToList("ulPopList", "liPop", community, cityArr);

        let addSizeCnt = c130d.addItemToList("ulSizeList", "liSize", community, cityArr);

        let addHemCnt = c130d.addItemToList("ulHemList", "liHem", community, cityArr);
        
        let addMaxCnt = c130d.addItemToList("ulMaxList", "liMax", community, cityArr);
       
        let addSrcCnt = c130d.addItemToList("selectCity", "srcCity", community, cityArr);
            
        //
        // The same number of LI elements should have been deleted from each UL list
        //

        let chkCnt = addNameCnt;
        if ((addNameCnt + addLatCnt + addLongCnt + addPopCnt + addSizeCnt + addHemCnt + addMaxCnt + addSrcCnt) / 8 === chkCnt) return chkCnt;
        else return -1;

    },

    //
    // Delete all the LI elements from the UL list except for the last summary element.
    //

    deleteItemFromList: (ulList) => {

        let maxLoop = ulList.children.length - 1;
        let delCnt = 0
        
        for(let i = maxLoop; i > -1; i--) {

            if (ulList.children[i].nodeName === "LI") {
                
                if (ulList.children[i].className !== "liSum") {
                // if (ulList.children[i].id !== "idSumTxt") {
                    
                    ulList.removeChild(document.getElementById(`${ulList.children[i].id}`));
                    delCnt++;
                    
                }
            }
        }
        if (ulList === "liPop") idSum.textContent = "0";

        return delCnt;
    },

    deleteCityList: () => {

        //
        // Delete the city list names.
        //
        let delNameCnt = c130d.deleteItemFromList(ulCityList);
        
        //
        // Delete the Latitude list.
        //
        
        let delLatCnt = c130d.deleteItemFromList(ulLatList);
        
        //
        // Delete the Longitude list.
        //
        
        let delLongCnt = c130d.deleteItemFromList(ulLongList);
        
        //
        // Delete the Population list.
        //
        
        let delPopCnt = c130d.deleteItemFromList(ulPopList);
        
        //
        // Delete the City Size Category list.
        //
        
        let delSizeCnt = c130d.deleteItemFromList(ulSizeList);
        
        //
        // Delete the Hemisphere list.
        //
        
        let delHemCnt = c130d.deleteItemFromList(ulHemList);
        
        //
        // Delete the Max Northern Southern list.
        //
        
        let delMaxCnt = c130d.deleteItemFromList(ulMaxList);
        
        let maxLoop = selectCity.children.length - 1;
        let delSrcSelCnt = 0
        
        for (let i = maxLoop; i > -1; i--) {
            
            if (selectCity.children[i].value !== "srcSelect" && 
            selectCity.children[i].value !== "srcAddCity") {
                
                selectCity.removeChild(selectCity.children[i]);
                delSrcSelCnt++;
                
            }
        }
        
        //
        // The same number of LI elements should have been deleted from each UL list
        //

        let chkCnt = delNameCnt;
        if ((delNameCnt + delLatCnt + delLongCnt + delPopCnt + delSizeCnt + delHemCnt + delMaxCnt + delSrcSelCnt) / 8 === chkCnt) return chkCnt;
        else return -1;

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
                // testObj.key = 0;
                // testObj.nextKey = data[0].nextKey;
                // testObj.name = data[0].name;
                
                data = await c920.postData(url + 'update', testObj);
                
                // testObj = {};
                // testObj.key = 0;
                
                data = await c920.postData(url + 'read', testObj);

            }
            
        } catch (err) {
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

        
    deleteAPICommunity: async (url) => {
        
        let data;

        try {

            data = await c130d.confirmAPIConnect (url);
            
            if (data.status === 200) {
                
                data = await c920.postData(url + "clear");
            }
            
        }
        catch (err) {
            data.status = err.name;
            data.statusText = err.message;
        }

        return data;
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

    getAPICity: async (url, city) => {
        
        let data;

        try {

            data = await c130d.confirmAPIConnect (url);
            
            if (data.status === 200) {
                
                let keyGet = {};
                keyGet.key = city.key;

                data = await c920.postData(url + 'read', keyGet);
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