export function useIndexedDb(databaseName, storeName, method, object) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(databaseName, 1);
        let db, 
        txm
        store, 
request.onupgradeneeded = function (e) {
    const db = request.result; 
    db.createObjectStore(storeName, { keyPath: "_id "});
}; 
request.onerror = function (e)


















    })
}