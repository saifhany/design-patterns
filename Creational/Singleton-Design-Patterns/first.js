const logger = require('./singelton-example');

const logFirst = () =>{
    logger.printLogCount();
    logger.log("first");
    logger.printLogCount();
}

module.exports =logFirst;