module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      submodule: {
        command: [
          'git submodule init',
          'git submodule update --recursive'
        ].join('&&')
      },
      mkdir: {
        command: 'mkdir -p public/javascript'
      },
      copy: {
        command: ['cp -rf 3rd/2048/ 2048',
          'cp -f 3rd/object-watch.js/object-watch.js public/javascript/watch.js'
        ].join('&&')
      },
      patch: {
        command: [
          'patch 2048/index.html        patch/load_bot',
          'patch 2048/js/application.js patch/export_gm'
        ].join('&&')
      },
      clean: {
        command: 'rm -rf 2048 public'
      }
    },
    uglify: {
      build: {
        src: 'bot/*.js',
        dest: 'public/javascripts/bot.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('init', ['shell:submodule', 'shell:mkdir', 'shell:copy', 'shell:patch', 'uglify'])
  grunt.registerTask('clean', ['shell:clean'])
};