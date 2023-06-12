const fs=require('fs');
const rfs=require('rotating-file-stream');
const path=require('path');
const morgan = require('morgan');



const logDirectory=path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // Daily rotation
    path: logDirectory,
  });


const development={
    name: 'development',
    asset_path: process.env.ISSUE_TRACKER_ASSET_PATH,
    db: process.env.ISSUE_TRACKER_DB,
    morgan: {
       mode: 'dev',
       options: {stream: accessLogStream}
    }
}

const production={
    name: 'production',
    asset_path: process.env.ISSUE_TRACKER_ASSET_PATH,
    db: process.env.ISSUE_TRACKER_DB,
    morgan: {
        mode: 'combined',
        options: {stream: accessLogStream}
     }
 }



module.exports=eval(process.env.ISSUE_TRACKER_ENVIRONMENT)==undefined ? development : eval(process.env.ISSUE_TRACKER_ENVIRONMENT);