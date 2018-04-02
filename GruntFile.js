/**
 * Created by ryan on 9/27/14.
 */
module.exports = function(grunt){

    grunt.initConfig({
        copy: {
            fonts: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/bootstrap/',
                    src: ['fonts/**'],
                    dest: 'public/'
                }]
            },
            webfonts: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/font-awesome/web-fonts-with-css/',
                    src: ['webfonts/**'],
                    dest: 'public/'
                }]
            }
        },
        concat: {
            development: {
                src: ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js'],
                dest: 'public/javascripts/site.js'
            }
        },
        less: {
            development:{
                files: {
                    'src/css/bootstrap.css': 'src/less/bootstrap.less',
                    'src/css/font-awesome.css': 'bower_components/font-awesome/web-fonts-with-css/css/fontawesome-all.css'
                }
            }
        },
        uglify:{
            development:{
                files:{
                    'public/javascripts/site.min.js': ['public/javascripts/site.js']
                }
            }
        },
        cssmin: {
            development:{
                files: {
                    'public/stylesheets/site.min.css': ['src/css/*.css']
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('build', ['copy', 'concat', 'uglify', 'less', 'cssmin']);
};