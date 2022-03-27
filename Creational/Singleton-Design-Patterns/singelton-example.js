class Logger {
    constructor(){
        if(Logger.instance == null){  // Means no instance created yet.
            this.logs = [];
            Logger.instance = this;
        }
        return Logger.instance;
    }
    log(message){
        this.logs.push(message);
        console.log(`Log => ${message}`);
    }
    printLogCount(){
        console.log(`${this.logs.length}`);
    }
}

// Actual instance of singleton
const logger = new Logger();
Object.freeze(logger);
/**
 * prevent That Object to be change
 * so in logger class we cant add/remove method by other files
 *  */ 
module.exports =logger;


