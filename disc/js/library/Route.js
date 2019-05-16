const Route = {
    hash() { return window.location.hash },
    http() { return window.location.protocol },
    dominio() { return window.location.hostname.replace( 'www.', '' ) }, 
    uri() { return `${this.http()}//${this.dominio()}` },
    request() {
        let arr = window.location.search.replace('?','').split('&') || []
        return arr
        .reduce( ( acc, item ) => {
            let data  = item.split('=');
            let valor =  data[1] || '';
            if( valor.length > 0  ) {
                acc[data[0]] = decodeURI( valor );
            }
            return acc;
        }, {} );
    } 
}