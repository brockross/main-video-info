module.exports = function(grunt) {
  grunt.initConfig({
    aws: grunt.file.readJSON(".aws.json"),
    aws_s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>"

      },
      dist: {
        options: {
          bucket: "fec-movie-info"
        },
        files: [
          {
            expand: true,
            cwd: "client/dist/",
            src: ["**"],
            dest: "/scripts"
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-aws-s3");

  grunt.registerTask("deploy", "aws_s3");
};