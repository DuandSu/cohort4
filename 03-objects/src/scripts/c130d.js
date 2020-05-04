//
// This is competency 130d.
//
import c920 from './fetch.js'

const c130d = {
    
    confirmAPIConnect: async (url) => {
        
        //
        // Check API is availabe for simple read of all records
        //
        let data;
        
        try {
            
            data = await c920.postData(url + 'all');
            
            // console.log("Done 1st postData:" + data.status + " " + data.length);
            
            if (data.status === 200 && data.length > 0) {
                
                //
                // Check can update to API with simple update to control record
                // in index/key 0 with same info.
                //
                // First check to ensure data format as expected. If try to reference
                // a key value that is not there will likely get a reference error.
                //
                
                let tmpObj = {};
                tmpObj.key = 0;
                tmpObj.nextKey = data[0].nextKey;
                
                data = await c920.postData(url + 'update', tmpObj);
                
                tmpObj = {};
                tmpObj.key = 0;
                
                data = await c920.postData(url + 'read', tmpObj);
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

                data = await c920.postData(url + 'delete', keyUpd);

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