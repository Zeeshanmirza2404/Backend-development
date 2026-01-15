const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '../data/localStorage.json');

// Initialize homes from file
function loadHomes() {
    try {
        if (fs.existsSync(dataFile)) {
            const data = fs.readFileSync(dataFile, 'utf-8');
            return JSON.parse(data) || [];
        }
    } catch (err) {
        console.error('Error reading homes file:', err);
    }
    return [];
}

// Save homes to file
function saveHomes(homes) {
    try {
        fs.writeFileSync(dataFile, JSON.stringify(homes, null, 2), 'utf-8');
    } catch (err) {
        console.error('Error saving homes file:', err);
    }
}

let homes = loadHomes();

class Home {
    constructor(housename, location, photo, price, rating) {
        this.id = homes.length > 0 ? Math.max(...homes.map(h => h.id)) + 1 : 1;
        this.housename = housename;
        this.location = location;
        this.photo = photo;
        this.price = parseFloat(price);
        this.rating = parseFloat(rating);
        this.createdAt = new Date().toISOString();
    }

    static addHome(housename, location, photo, price, rating) {
        const newHome = new Home(housename, location, photo, price, rating);
        homes.push(newHome);
        saveHomes(homes);
        return newHome;
    }

    static getAllHomes() {
        return homes;
    }

    static getHomeById(id) {
        return homes.find(home => home.id === parseInt(id));
    }

    static updateHome(id, housename, location, photo, price, rating) {
        const home = homes.find(home => home.id === parseInt(id));
        if (home) {
            home.housename = housename;
            home.location = location;
            home.photo = photo;
            home.price = parseFloat(price);
            home.rating = parseFloat(rating);
            home.updatedAt = new Date().toISOString();
            saveHomes(homes);
        }
        return home;
    }

    static deleteHome(id) {
        homes = homes.filter(home => home.id !== parseInt(id));
        saveHomes(homes);
    }
}

module.exports = Home;
