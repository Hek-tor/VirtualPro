'use strict'

var dbUssers = [];

async function RegisterUssers(usserName, usserEmail, usserPassword) {

    let newUsser = {
        Name: usserName,
        Email: usserEmail,
        Password: usserPassword,
    };

    dbUssers.push(newUsser);
    SaveStorageUsser(dbUssers);
};

function SaveStorageUsser(listUsser) {
    localStorage.setItem('usserVirtual', JSON.stringify(listUsser));
};

function getProductList() {
    let saveList = localStorage.getItem('usserVirtual');

    if (saveList == null) {
        dbUssers = [];
    } else {
        dbUssers = JSON.parse(saveList);
    }
    return dbUssers;
};