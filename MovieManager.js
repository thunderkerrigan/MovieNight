var MovieNight = require('./Realm/RealmModel');
var Realm = require('./Realm/RealmModel').Realm;

module.exports = {
    connect: function (login, password) {

    },
    addUser: function (name) {
        return new Promise(function (resolve, reject) {
            let realm = MovieNight.realm();
            realm.then(realm => {
                try {
                    realm.write(() => {
                        const user = realm.create('User', {
                            username: name
                        });
                        console.log('user created' + user);
                        resolve(user);
                    });
                } catch (e) {
                    console.log("Error on creation of User named " + name + " because " + e);
                    reject(e);
                }
            });
        });
    },
    addPolls: function (date, letter, issuer, movies) {
        return new Promise(function (resolve, reject) {
            let realm = MovieNight.realm();
            realm.then(realm => {
                try {
                    realm.write(() => {
                        const poll = realm.create('Polls', {
                            date: date,
                            letter: letter,
                            issuer: issuer,
                            choices: movies
                        });
                        console.log('poll created' + poll);
                        resolve(poll);
                    });
                } catch (e) {
                    console.log("Error on creation of poll because " + e);
                    reject(e);
                }
            });
        });
    },
    getUsersNames: function () {
        return new Promise(function (resolve, reject) {
            let realm = MovieNight.realm();
            realm.then(realm => {
                let names = realm.objects('User').map(function (user) {
                    return user.username;
                });
                console.log('names ' + names);
                resolve(names);
            });
        });
    },
    getDirectors: function () {
        return new Promise(function (resolve, reject) {
            let realm = MovieNight.realm();
            realm.then(realm => {
                let names = realm.objects('Director').map(function (director) {
                    return director.firstName + ' ' + director.lastName;
                });
                console.log('names ' + names);
                resolve(names);
            });
        });
    },
    initiateRealm: function(){
        let realm = MovieNight.realm();
        realm.then(realm => {
            try {
                realm.write(() => {
                    console.log('Joseph');
                    const _joseph = realm.create('User', {
                        username: 'Joseph'
                    });
                    console.log('noe');
                    const _noe = realm.create('User', {
                        username: 'Noëmie'
                    });
                    console.log('Laure');
                    const _laure = realm.create('User', {
                        username: 'Laure'
                    });
                    console.log('Laurent');
                    const _laurent = realm.create('User', {
                        username: 'Laurent'
                    });
                    console.log('Joan');
                    const _joan = realm.create('User', {
                        username: 'Joan'
                    });
                    console.log('Hugo');
                    const _hugo = realm.create('User', {
                        username: 'Hugo'
                    });
    
                    //14 mai 2017 - hugo - A - [l'étrange créature du lac noir, Rocky, les Frissons de l'angoisse]
                    console.log('first');
                    const _firstPolls = realm.create('Polls', {
                        date: new Date(2017,04,14),
                        letter: 'A',
                        issuer: _hugo
                    });
                    console.log('second');
                    //21 mai 2017 - Joan - T - [Une Journée Bien Remplie, Les Évadés De La Planète Des Singes, Playtime]
                    const _secondPolls = realm.create('Polls', {
                        date: new Date(2017,04,21),
                        letter: 'T',
                        issuer: _joan
                    });
                    console.log('third');
                    //4 juin 2017 - Joseph - K - [Docteur Strangelove, le Mécano de la Général, Le Péril Jeune]
                    const _thirdPolls = realm.create('Polls', {
                        date: new Date(2017,05,04),
                        letter: 'K',
                        issuer: _joseph
                    });
                    console.log('fourth');
                    //11 juin 2017 - Laure - D - [Chantons Sous La Pluie, Les Forbans De La Nuit, Le Labyrinthe De Pan]
                    const _fourthPolls = realm.create('Polls', {
                        date: new Date(2017,05,11),
                        letter: 'D',
                        issuer: _laure
                    });
                    console.log('end');
                    
                        
                });
            } catch (e) {
                console.log("Error on creation of User named " + name + " because " + e);
            }
        });
    }
}