//
// This is competency 130d.
//
import c920 from './fetch.js'

const c130d = {

    url: 'http://localhost:5000/',
    
    actionMoved: (actionType, community) => {

        let data = c130d.confirmAPIConnect (c130d.url);

        if (data.status != "200") {

            const inputValue = inputAmt.value;
            const srcValue = selectCity.value;
            
            let actionPreposition = "into";
            if (actionType === "OUT") actionPreposition = "out of";
            
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
                data = c130d.updateAPICity (c130d.url, community.cityList[cityIndex]);

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