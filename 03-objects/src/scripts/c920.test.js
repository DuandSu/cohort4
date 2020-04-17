//
// Jest requires the following to allow fetch to work in Test Files: npm install --save isomorphic-fetch es6-promise
//
// Note that console.logs will work but display message, "Cannot log after tests are done. Did you forget to wait for 
// something async in your test?". This includes the log for the test comparison. Result is that the test may actually
// pass, but the delayed log will show the error. So important to page up and view regardless.
//
// Ensure you import below.
//

import "isomorphic-fetch";

test('920: Udemy Fetch Assignments', () => {
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

    async function fetchUsers() {
        try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json();
        expect(data.length).toBe(10);
        return data;
        } catch (err) {
            console.log("Ooops", err);
        }
    }
    
    fetchUsers();
    
    const getData = async function() {
        try {
            const [ users, posts, albums ] = await Promise.all(urls.map(url =>
                fetch(url).then(resp => resp.json())
                ));
            expect(users.length).toBe(10);
            expect(posts.length).toBe(100);
            expect(albums.length).toBe(100);
        } catch (err) {
            console.log("Ooops", err);
        }
    }

    getData();
    
    const getDataDWM = async function() {
        try {
            const [ users, posts, albums ] = await Promise.all(urls.map(async function (url) {
                const resp = await fetch(url)
                const data = await resp.json()
                return data;
            }));
            expect(users.length).toBe(10);
            expect(posts.length).toBe(100);
            expect(albums.length).toBe(100);
        } catch (err) {
            console.log("Ooops", err);
        }
    }

    getDataDWM();

    
    const urlsX = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholderTYPO.typicode.com/albums'
        ]

    
        const getDataDWMX = async function() {
            try {
                const [ users, posts, albums ] = await Promise.all(urlsX.map(async function (url) {
                    const resp = await fetch(url)
                    const data = await resp.json()
                    return data;
                }));
                expect(users.length).toBe(10);
                expect(posts.length).toBe(100);
                expect(albums.length).toBe(100);
            } catch (err) {
                expect(err).toStrictlyEqual(`Beer`);
                // expect(err).toStrictlyEqual(`FetchError`);
                // expect(err).toStrictlyEqual(`[FetchError: request to https://jsonplaceholderTYPO.typicode.com/albums failed, reason: getaddrinfo ENOTFOUND jsonplaceholdertypo.typicode.com]`);
            }
        }
        
        getDataDWMX();

        // expect(getDataDWMX).toThrow();
    });
