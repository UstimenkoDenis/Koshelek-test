export default class SDK {
    constructor() {
        this._apiBase = 'https://api.binance.com'
        this._wssBase = 'wss://stream.binance.com:9443'
    }
    
    getResource = async (url) => {
            const res = await fetch(`${this._apiBase}${url}`);

            if (!res.ok){
                throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
            }
            return await res.json();            
    }

    getSnapshot = async (url) => {
        return await this.getResource(url);
    } 

    subscribeToUpdates = (streamName) => {
        const _updates = new WebSocket(`${this._wssBase}${streamName}`)  
        return _updates;    
    }

}