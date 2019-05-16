const Db =  {
    get: async function( tablea ) {
        let chamadaHttp = await fetch( `${this.host}disc/data/${tablea}.json` )
        let json        = await chamadaHttp.json()
        return json;
    },    
}
