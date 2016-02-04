module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      clone: {
        command: 'git clone https://github.com/gabrielecirulli/2048.git'
      },
      patch: {
        command: [
          'patch 2048/index.html        patch/load_bot',
          'patch 2048/js/application.js patch/export_gm'
        ].join('&&')
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('init', ['shell:clone', 'shell:patch'])
};