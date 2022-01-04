export class Helper
{
    static parseCookie = str =>
        str
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
        }, {});

    static getDefaultUser(){ return { nom:"", prenom:"", tel:"", adresse:"", image:"images/harold.png" } }
    static getUser( cookies )
    {
        var obj = this.getDefaultUser()
        const c = this.parseCookie( cookies )
        if( "nom" in c ) obj["nom"] = c["nom"]
        if( "prenom" in c ) obj["prenom"] = c["prenom"]
        if( "tel" in c ) obj["tel"] = c["tel"]
        if( "adresse" in c ) obj["adresse"] = c["adresse"]
        return obj
    }
    static getDefaultAnimal(){ return { sexeAnimal:"", imageAnimal:"images/icon_dog.png", nomAnimal:"Inconnu", raceAnimal:"Race Inconnue", ageAnimal:0, typeAnimal:"Inconnu" } }
    static getAnimal(cookies){
        var obj = this.getDefaultAnimal()
        const c = this.parseCookie( cookies )
        if( "sexeAnimal" in c ) obj["sexeAnimal"] = c["sexeAnimal"]
        if( "imageAnimal" in c ) obj["imageAnimal"] = c["imageAnimal"]
        if( "nomAnimal" in c ) obj["nomAnimal"] = c["nomAnimal"]
        if( "raceAnimal" in c ) obj["raceAnimal"] = c["raceAnimal"]
        if( "ageAnimal" in c ) obj["ageAnimal"] = c["ageAnimal"]
        if( "typeAnimal" in c ) obj["typeAnimal"] = c["typeAnimal"]
        return obj
    }
}