//
// This is competency 130d.
//
import c920 from './fetch.js'

const c130d = {

    url: 'http://localhost:5000/',
    
    actionMoved: async (actionType, community) => {

        let data = await c130d.confirmAPIConnect (c130d.url);

        if (data.status === 200) {

            const inputValue = inputAmt.value;
            const srcValue = selectCity.value;
            
            // let actionPreposition = "into";
            // if (actionType === "OUT") actionPreposition = "out of";

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

    addLItoUI: (liType, liAttribute, cityArr) => {

        let addCnt = 0

        for (let i = 0; i < cityArr.length; i++) {

            const liAdd = document.createElement("li");

            liAdd.textContent = client.getAcctName(cityArr[i]);
            liAdd.setAttribute("id", `${liType}${tempArr[i]}`);

            if ((i+1) % 2 == 0) liAdd.setAttribute("class", "liEven");
            else liAdd.setAttribute("class", "liOdd");

            idSumTxt.parentElement.insertBefore(liAdd, idSumTxt);

            addCnt ++;
        }
    },

    createCityList: (community) => {

        //
        // First, sort the cities by City Name into temp array.
        //

        const tempArr = community.sortCityList("Name");
        
        //
        // Add the li elements in temp array order to create new list.
        //

        addLItoUI: ("liCity", liAttribute, cityArr) => {

        let addNameCnt = 0

        for (let i = 0; i < tempArr.length; i++) {

            const liAdd = document.createElement("li");
            liAdd.textContent = client.getAcctName(tempArr[i]);
            liAdd.setAttribute("id", `listAcct${tempArr[i]}`);
            if ((i+1) % 2 == 0) liAdd.setAttribute("class", "liEven");
            else liAdd.setAttribute("class", "liOdd");

            idSumTxt.parentElement.insertBefore(liAdd, idSumTxt);
            addNameCnt ++;
        }

        let addSumCnt = 0
        
        for (let i = 0; i < tempArr.length; i++) {
            
            const liAdd = document.createElement("li");
            liAdd.textContent = `${c130c.formatCurrency.format(client.getAcctBalance(tempArr[i]))}`;
            liAdd.setAttribute("id", `sumAcct${tempArr[i]}`);
            if ((i+1) % 2 == 0) liAdd.setAttribute("class", "liEven");
            else liAdd.setAttribute("class", "liOdd");
            
            idSum.parentElement.insertBefore(liAdd, idSum);
            addSumCnt++;
        }

        let addSrcCnt = 0
        
        for (let i = 0; i < tempArr.length; i++) {
            
            const srcAdd = document.createElement("OPTION");
            srcAdd.textContent = `${client.getAcctName(tempArr[i])}`;
            srcAdd.setAttribute("value", `srcAcct${tempArr[i]}`);
            
            selectAcct.appendChild(srcAdd);
            addSrcCnt++;
        }

        let addDestCnt = 0
        
        for (let i = 0; i < tempArr.length; i++) {
            
            const srcDest = document.createElement("OPTION");
            srcDest.textContent = `${client.getAcctName(tempArr[i])}`;
            srcDest.setAttribute("value", `destAcct${tempArr[i]}`);
            
            selectDestAcct.appendChild(srcDest);
            addDestCnt++;
        }

        if (addSumCnt === addNameCnt && addNameCnt === addSrcCnt && addSrcCnt === addDestCnt) return addSumCnt;
        else return -1;
    },

    //
    // Delete all the LI elements from the UL list except for the last summary element.
    //

    deleteLIfromUI: (ulList) => {

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
        return delCnt;
    },

    deleteCityList: () => {

        //
        // Delete the city list names.
        //
        let delNameCnt = c130d.deleteLIfromUI(ulCityList);
        
        //
        // Delete the Latitude list.
        //
        
        let delLatCnt = c130d.deleteLIfromUI(ulLatList);
        
        //
        // Delete the Longitude list.
        //
        
        let delLongCnt = c130d.deleteLIfromUI(ulLongList);
        
        //
        // Delete the Population list.
        //
        
        let delPopCnt = c130d.deleteLIfromUI(ulPopList);
        
        //
        // Delete the City Size Category list.
        //
        
        let delSizeCnt = c130d.deleteLIfromUI(ulSizeList);
        
        //
        // Delete the Hemisphere list.
        //
        
        let delHemCnt = c130d.deleteLIfromUI(ulHemList);
        
        //
        // Delete the Max Northern Southern list.
        //
        
        let delMaxCnt = c130d.deleteLIfromUI(ulMaxList);
        
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