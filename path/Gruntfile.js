module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'contentsAssets/styles/css/style.css' : 'contentsAssets/styles/scss/style.scss',
                    'contentsAssets/styles/css/session-details.css' : 'contentsAssets/styles/scss/session-details.scss',
                    'contentsAssets/styles/css/login.css' : 'contentsAssets/styles/scss/login.scss'
                }
            }
        },
        browserify: {
            dist: {
                files: {
                  'app/bundles/bundle.js': ['app/app.js'],
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }        
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('default',['sass', 'browserify']);
    
    //To run these tasks when there is a build going on.
    grunt.registerTask('dev',['sass','jshint']);
}