//
// This is competency 130d.
//
import community from './community.js';
import c920 from './fetch.js'

const c130d = {

    url: 'http://localhost:5000/',

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

        // messageArea.textContent = "Loading Community and Cities";
        let data = await c130d.getAllAPI(url);

        if (data.status === 200) {

            if (data.length > 0) {
                const newCom = new community.Community ("");
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
                            // h4Community.textContent = "Community: " + data[i].name;
                        }
                    }
                    else {
                        newCom.createCity (data[i].name, data[i].latitude, data[i].longitude, data[i].population, data[i].key);
                    }
                }
                // messageArea.textContent += ".";
                // c130d.refreshCityList(newCom);

                // messageArea.textContent += ". DONE";
                newCom.addMessage("Community Loaded!");
                
                // c130d.removedivAddCom();
                
                return newCom;
            }
            // else {
            //     newCom.addMessage("There was no data to load from the API. "
            //     + "Please enter the name of your new Community.");
            // }
        }

        return 0;
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