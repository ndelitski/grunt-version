require('shelljs/global');

module.exports = function(grunt) {
    grunt.registerTask('version', 'Updating version of the project', function(version) {
        if (!version){
            grunt.fail.fatal('no version specified');
        }

        var packages = grunt.file.readJSON('package.json');

        //update package.json
        packages.version = version;
        grunt.file.write('package.json', JSON.stringify(packages, null, 2));

        //commit changes
        exec('git add package.json');
        exec('git commit -m "bumped to ' + version + '"');
    });
}