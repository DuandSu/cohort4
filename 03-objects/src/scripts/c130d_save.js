//
// This is competency 130d.
//
import c920 from './fetch.js'

const c130d = {

    confirmAPIConnect: async (url) => {
        
        //
        // Check API is availabe for simple read of all records
        //
            let data = await c920.postData(url + 'all');

            console.log("Done 1st postData:" + data.status + " " + data.length);
            
            if (data.status === 200 && data.length > 0) {
                
                //
                // Check can update to API with simple update to control record
                // in index/key 0 with same info.
                //
                // First check to ensure data format as expected. If try to reference
                // a key value that is not there will likely get a reference error.
                //
                
                console.log("Before Try: " + data.status + " " + data.length);
                try {
                    console.log("After Try" + data.status + " " + data.length);
                    console.log("Entered Try");
                    let tmpObj = {};
                    tmpObj.key = 0;
                    console.log("Before Data Array Reference");
                    console.log("Done 1st postData:" + data.status + " " + data.length);
                    tmpObj.nextKey = data[0].nextKey;
                    
                    let data = await c920.postData(url + 'update', tmpObj);
                    
                    tmpObj = {};
                    tmpObj.key = 0;
                    
                    data = await c920.postData(url + 'read', tmpObj);

                } catch (err) {
                    data.status = err.name;
                    data.statusText = err.message;
                }
            }

        return data;
    }
 };

export default c130d;