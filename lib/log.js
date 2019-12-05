const fs = require('fs');
const paths = require('path');
const moment = require('moment');

class Logs {
    constructor() {}
    static write(msg, type = "info") {
        const time = moment().format('YYYY-MM-DD HH:MM:ss');
        const content = `[${time}] [${type}] ${msg}\n`;
        const logPath = paths.resolve('./', './logs');
        const path = `${logPath}/${moment().format('YYYY-MM-DD')}.txt`;
        fs.writeFileSync(path, content, {
            flag: 'a'
        });
    }
}
module.exports = Logs;