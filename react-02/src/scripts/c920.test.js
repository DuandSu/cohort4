//
// Jest requires the following to allow fetch to work in Test Files: npm install --save isomorphic-fetch es6-promise
//
// Note that it is important to include "async (done)" after the comma in the test function declaration. Then include "await"
// before each async function that is called. This will cause the test to wait for completion of the async function. The 
// purpose of the "done();" statement at the end is so that the results of the test can be compiled before reporting the 
// final test results. Larry said this might be optional and do by default now, but definitely the "async" 
// before each async function is required.
//
// Otherwise the console.logs will work but display message, "Cannot log after tests are done. Did you forget to wait for 
// something async in your test?". This includes the log for the test comparison. Result is that the test results will
// indicate a pass, even though there was an error, and the delayed log will show the error. You can still page up and view 
// but better to include the "async done" and "await".
//
// Ensure you import "isomorphic-fetch" below.
//

import "isomorphic-fetch";

test('920: Discovery for Udemy Fetch Assignments', () => {
    //
    // numbers is an array of numbers
    //
    let numbers = [4, 9, 16, 25];
    //
    // "map" performs function "Math.sqrt" on all indexs of array numbers.
    // It returns array of answers for each function performed on each index.
    //
    expect(numbers.map(Math.sqrt)).toEqual([2, 3, 4, 5]);

    const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/albums'
        ]

    expect(urls[0]).toContain("https");

    function cvtToUpperCase(pString) {
        return pString.toUpperCase();
    }
    expect(cvtToUpperCase("should be uppercase")).toBe("SHOULD BE UPPERCASE");
    
    const cvtToUpperCase2 = (pString) => {
        return pString.toUpperCase();
    }
    expect(cvtToUpperCase2("should be uppercase")).toBe("SHOULD BE UPPERCASE");
    
    expect(urls.map(cvtToUpperCase)).toEqual(['HTTPS://JSONPLACEHOLDER.TYPICODE.COM/USERS',
    'HTTPS://JSONPLACEHOLDER.TYPICODE.COM/POSTS',
    'HTTPS://JSONPLACEHOLDER.TYPICODE.COM/ALBUMS']);

    expect(urls.map(cvtToUpperCase2)).toEqual(['HTTPS://JSONPLACEHOLDER.TYPICODE.COM/USERS',
    'HTTPS://JSONPLACEHOLDER.TYPICODE.COM/POSTS',
    'HTTPS://JSONPLACEHOLDER.TYPICODE.COM/ALBUMS']);
    
    expect(urls).toEqual(['https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums']);
});

//
// This was working, but lately the response from the jsonplaceholder server is often slow, causing the error:
//      "Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Timeout - 
//      Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Error:"
// Therefore I have commented out because I want my npm test to pass without exclusions. This was just a Udemy
// assignment and now past that challenge.
//

// test('920: Udemy 240 Fetch Assignment #1 (Number1)', async (done) => {
    
//     async function fetchUsers() {
//         try {
//             const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//             const data = await resp.json();
//             expect(data.length).toBe(10);
//             return data;
//         } catch (err) {
//             console.log("Ooops", err);
//         }
//     }

//     await fetchUsers();
//     done();
// });

// test('920: Udemy 240 Fetch Assignment #2 (Number2) as taught with .next()', async (done) => {

    // const urls = [
    //     'https://jsonplaceholder.typicode.com/users',
    //     'https://jsonplaceholder.typicode.com/posts',
    //     'https://jsonplaceholder.typicode.com/albums'
    //     ]
    
    // const getData = async function() {
    //     try {
    //         const [ users, posts, albums ] = await Promise.all(urls.map(url =>
    //             fetch(url).then(resp => resp.json())
    //             ));
    //         expect(users.length).toBe(10);
    //         expect(posts.length).toBe(100);
    //         expect(albums.length).toBe(100);
    //     } catch (err) {
    //         console.log("Ooops", err);
    //     }
    // }

//     await getData();
//     done();
// });

// test('920: Udemy 240 Fetch Assignment #2 & #3 with my answer to replace .next() with async await', async (done) => {

    //
    // const urls = [
    //     'https://jsonplaceholder.typicode.com/users',
    //     'https://jsonplaceholder.typicode.com/posts',
    //     'https://jsonplaceholder.typicode.com/albums'
    //     ]

    // const getDataDWM = async function() {
    //     try {
    //         const [ users, posts, albums ] = await Promise.all(urls.map(async function (url) {
    //             const resp = await fetch(url)
    //             const data = await resp.json()
    //             return data;
    //         }));
    //         expect(users.length).toBe(10);
    //         expect(posts.length).toBe(100);
    //         expect(albums.length).toBe(100);
    //     } catch (err) {
    //         console.log("Ooops", err);
    //     }
    // }

    // await getDataDWM();

    
    // const urlsX = [
    //     'https://jsonplaceholder.typicode.com/users',
    //     'https://jsonplaceholder.typicode.com/posts',
    //     'https://jsonplaceholderTYPO.typicode.com/albums'
    //     ]

    
    // const getDataDWMX = async function() {
    //     try {
    //         const [ users, posts, albums ] = await Promise.all(urlsX.map(async function (url) {
    //             const resp = await fetch(url)
    //             const data = await resp.json()
    //             return data;
    //         }));
    //         expect(users.length).toBe(10);
    //         expect(posts.length).toBe(100);
    //         expect(albums.length).toBe(100);
    //     } catch (err) {
    //         expect(err.name).toContain(`Error`); // All 6 types of errors contain "Error" in their name.
    //         // expect(err.name).toContain(`Beer`); // Failing test to fail.
    //         // expect(err.message).toContain(`failed`); // Alternate expect strategy to detect specific error message.
    //     }
    // }
    
//     await getDataDWMX();
//     // expect(getDataDWMX).toThrow();
    
//     done();
// });

// test('920: Udemy 242 for await Example for ES9', async (done) => {
    
//     const urls = [
//         'https://jsonplaceholder.typicode.com/users',
//         'https://jsonplaceholder.typicode.com/posts',
//         'https://jsonplaceholder.typicode.com/albums'
//     ]
    
//     const getData = async function() {

//         const arrayOfPromises = urls.map(url => fetch(url));

//         for await (let request of arrayOfPromises) {

//             const data = await request.json();
//             expect(data.length).toBeGreaterThanOrEqual(10);
//         }
//     }

//     await getData();

//     done();
// });


// test('920: Udemy 242 try catch finally', async (done) => {

//     //
//     // Creating typo "/usersTYPO" below did not call the catch() or the try(), but resulted in
//     // ": Timeout - Async callback was not invoked within the 5000ms timeout specified by 
//     // jest.setTimeout.Timeout - Async callback was not invoked within the 5000ms timeout 
//     // specified by jest.setTimeout.Error:".
//     //
//     // set back to "/users" so test will pass. Fight this in competencies.
//     //

//     const urls = [
//         'https://jsonplaceholder.typicode.com/users',
//         'https://jsonplaceholder.typicode.com/posts',
//         'https://jsonplaceholder.typicode.com/albums'
//     ]
    
//     const getData = async function() {

//         try {

//             const arrayOfPromises = urls.map(url => fetch(url));

//             for await (let request of arrayOfPromises) {

//                 const data = await request.json();
//                 expect(data.length).toBeGreaterThanOrEqual(10);
//             }
//         } catch (err) {

//             expect(err.name).toContain(`Error`); // All 6 types of errors contain "Error" in their name.
//         } finally {

//             const calledFinally = true;
//             expect(calledFinally).toBeTruthy();
//         }

//     }

//     await getData();

//     done();
// });