module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'})

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            all: {
                files: ["_/examples/**/*.*", "src/**/*.*"],
                tasks: [],
                options: {
                    livereload: true
                }
            }
        },

        uglify: {
            options: {
                banner: '/* <%= pkg.name %> -v <%= pkg.version %> - Licensed under the <%= pkg.license %> lincese*/\n',
            },
            lib: {
                src: 'src/pixelify.js',
                dest: 'dist/pixelify.min.js'
            }
        }
    })

   grunt.registerTask('default', ['watch'])
   grunt.registerTask('dist', ['uglify'])

}
