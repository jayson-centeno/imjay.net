var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
console.log(__dirname);

const config = {
    user: "jcenteno-001",                   // NOTE that this was username in 1.x 
    password: "Sw0rdf!sh",           // optional, prompted if none given
    host: "ftp.smarterasp.net",
    port: 21,
    localRoot: __dirname + '/build',
    remoteRoot: '/jaytech/app/',
    include: ['*', '**/*'],      // this would upload everything except dot files
    // include: ['*.js', 'dist/*'],
    exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps
    deleteRemote: false              // delete existing files at destination before uploading
}
 
// use with promises
ftpDeploy.deploy(config)
    .then(res => console.log('Files successfully transferred!' + res.__dirname))
    .catch(err => console.log(err))
    
// use with callback
ftpDeploy.deploy(config, function(err) {
    if (err) { console.log(err) }
    else { console.log('finished'); }
});

// ftpDeploy.on('uploading', function(data) {
//     console.log("Uploading - " + data.filename);             // partial path with filename being uploaded
// });

ftpDeploy.on('uploaded', function(data) {
    console.log("Uploaded - " + data.filename);             // partial path with filename being uploaded
});

ftpDeploy.on('upload-error', function (data) {
    console.log(data.err); // data will also include filename, relativePath, and other goodies
});