export default class SDK {
    constructor() {
        this._apiBase = 'https://api.binance.com'
    }
    
    getResource = async (url) => {
            const res = await fetch(`${this._apiBase}${url}`);

            if (!res.ok){
                throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
            }
            return await res.json();            
    }

    getData = async () => {
        return await this.getResource(`/api/v3/depth?symbol=BNBBTC&limit=500`);
    } 
}