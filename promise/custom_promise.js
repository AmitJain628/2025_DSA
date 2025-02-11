class MYPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = null;
        this.error = null;
        this._resolutionQueue = []
        this._rejectionQueue = [];
    
       try {
        executor(_this.reslve.bind(this), _this.reject.bind(this));
       } catch (e) {
        this._reject(e);
      }
    }

    _resolutionHandler() {
        while(this._resolutionQueue.length > 0) { 
            const { handler, promise } = this._resolutionQueue.shift();
            try {
                const result = handler(this.vaue);
                if (result instanceof Promise) {
                    returnValue.then(
                        (result) => promise._resolve(result),
                        (error) => promise._reject(error)
                    );
                }
                promise.reslve(result);
            } catch(error) {
               promise.reject(error)
            }
        }
    }

    _rejectionHandler() {
        while(this._rejectionQueue.length > 0) { 
            const { handler, promise } = this._rejectionQueue.shift();
            try {
                const result = handler(this.vaue);
                if (result instanceof Promise) {
                    returnValue.then(
                        (result) => promise._resolve(result),
                        (error) => promise._reject(error)
                    );
                }
                promise.reslve(result);
            } catch(error) {
               promise.reject(error)
            }
        }
    }

    _resolve(value) {
        if (this.state === 'pending') {
            this.state = 'resolved';
            this.value = value;
            this._resolutionHandler();
        }

    }

    _reject(error) {
        if (this.state === 'pending') {
            this.state = 'rejected';
             this.error = error;
            this._rejectionHandler();
        }
    }

    then(resolutionHandler) {
        const myPromise = new MYPromise(() => {});
        this._resolutionQueue.push({
            handler: resolutionHandler,
            promise: myPromise
        });

        if (this.state === 'resolved') {
            this._resolutionHandler();
        }

        return myPromise;
    }

    catch(rejectionHandler) {
        const myPromise = new MYPromise(() => {});
        this._rejectionQueue.push({
            handler: rejectionHandler,
            promise: myPromise
        });

        if (this.state === 'resolved') {
            this._rejectionHandler();
        }

        return myPromise;
    }
}