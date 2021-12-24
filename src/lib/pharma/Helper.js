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

    static getDefaultUser(){ return { nom:"", prenom:"", tel:"", adresse:"", image:"src/images/harold.png" } }
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
}