module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
              options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
              },
              dist: {
                // the files to concatenate
                src: ['src/**/*.ts'],
                // the location of the resulting JS file
                dest: 'dist/<%= pkg.name %>.js'
              }
            },
    uglify: {
              options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
              },
              dist: {
                files: {
                  'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
              }
            },
    qunit: {
              files: ['test/**/*.html']
            },
    jshint: {
              // define the files to lint
              files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
              // configure JSHint (documented at http://www.jshint.com/docs/)
              options: {
                // more options here if you want to override JSHint defaults
                globals: {
                  jQuery: true,
                  console: true,
                  module: true
                }
              }
            }
    // jshint: {
    //   files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
    //   options: {
    //     globals: {
    //       jQuery: true
    //     }
    //   }
    // },
    // watch: {
    //   files: ['<%= jshint.files %>'],
    //   tasks: ['jshint']
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};