import * as React from 'react';
import * as ro from "rxjs/operators"
import * as rx from "rxjs"

export const nothingToNull = (value: string) : string => {
    if (value == null) {
        return null
    }
    else {
        value = value.trim()

        if (value.length === 0) {
            return null
        }
        else {
            return value;
        }
    }
}

export const waitForClose = () => {
    const result = new rx.Subject<void> ();

    React.useEffect (() => {
        return () => result.next ()
    },[])

    return result;
}

export class Logger {
    
    constructor (public readonly name : string) {}
    
    public readonly fatal = (message: string, error?: any, payload?: any) => console.error(this.name + ": " + message, error, payload)
    
    public readonly error = (message: string, error?: any, payload?: any) => console.error(this.name + ": " + message, error, payload)
    
    public readonly rx = {
        retry : (message: string) => (errors: rx.Observable<Error>) => errors
            .pipe (ro.tap (error => this.error(message, error)))
            .pipe (ro.delay (1000)
        ),
        subscribe: (message : string) => {
            return {
                next: () => {},
                complete: () => {},
                error: (error: any) => this.fatal(message, error)
            }
        }
    }
}

export const convertEndingOfNoun = (seconds : number) => {

    const str = seconds.toString ()
    if (str.endsWith ("1")) {
        return 'секунду'
    }
    else if (str.endsWith('2') || str.endsWith('3') || str.endsWith('4')) {
        return 'секунды'
    } 
    else {
        return 'секунд'
    }
}
