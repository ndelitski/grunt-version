var fs = require('fs'),
    path = require('path'),
    packageFilePath = path.resolve(__dirname, './../package.json'),
    packages = require(packageFilePath);

require('shelljs/global');

module.exports = function(grunt) {
    grunt.registerTask('version', 'Updating version of the project', function(version) {
        if (!version){
            grunt.fail.fatal('no version specified');
        }

        //update package.json
        packages.version = version;
        fs.writeFileSync(packageFilePath, JSON.stringify(packages, null, 2));
        //commit changes
        exec('git add package.json');
        exec('git commit -m "bumped to ' + version + '"');
    });
}