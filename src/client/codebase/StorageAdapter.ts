import * as React from 'react';
import * as rx from "rxjs";

import { Logger, nothingToNull } from "../utils";

class StorageAdapter {

    private readonly logger = new Logger (StorageAdapter.name)
    
    public  readonly VERSION = "1.0.0-SNAPSHOT";

    private storage = new Map<string,any> ();

    private readonly getFromStore = <T>(key : string) => {
        const storedObjectWrapperJson = nothingToNull (window.localStorage.getItem (key));

        if (storedObjectWrapperJson) {
            try {
                const storedObjectWrapper = JSON.parse (storedObjectWrapperJson) as {
                    version : string,
                    object : T
                };

                if (storedObjectWrapper.version != this.VERSION) {
                    window.localStorage.removeItem (key)    
                    return null;
                }
                else {
                    return storedObjectWrapper.object
                }
            }
            catch (error) {
                this.logger.error (`Error parsing ${storedObjectWrapperJson} by ${key}`, error)
                return null;
            }
        }
        else {
            return null;
        }
    }

    private readonly store = <T>(key : string, object : T) => window.localStorage.setItem (key, JSON.stringify (this.createVersionWrapper (object)))

    private createVersionWrapper = <T>(object : T) => ({
        version : this.VERSION,
        object : object
    })

    public setToken = (token : string) : void => {
        window.localStorage.setItem('token', token)
    }

    public deleteToken = () : void => {
        window.localStorage.removeItem('token')
    }

    public getToken = () : string => {
        if (typeof window !== 'undefined') {
            return window.localStorage.getItem('token')
        }
    }

    public clear = () : void => {
        window.localStorage.clear()
    }
}

export const STORAGE = new StorageAdapter();

