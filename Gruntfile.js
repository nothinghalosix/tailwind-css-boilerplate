module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/styles.min.css' : 'sass/**/*.scss'
				},
				options: {
					style: 'compressed',
				}
			}
		},
		watch: {
			cssmin: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
  grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
