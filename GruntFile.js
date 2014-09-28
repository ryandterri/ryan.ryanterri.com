/**
 * Created by ryan on 9/27/14.
 */
module.exports = function(grunt){

    grunt.initConfig({
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
                    'src/css/font-awesome.css': 'bower_components/font-awesome/less/font-awesome.less'
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
        },
        watch: {
            uglify: {
                files: 'src/scripts/*.js',
                tasks: 'uglify'
            },
            cssmin: {
                files: 'src/css/*.css',
                tasks: 'cssmin',
                options: {
                    livereload: true
                }
            },
            less: {
                files: 'src/less/*.less',
                tasks: 'less'
            }
        }
    });

    require('load-grunt-tasks')(grunt);
};