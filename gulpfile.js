var gulp = require ('gulp');
  gulp.task('default', ()=>{
    require('./test.js');
    console.log('Hello Gulp!')
  });
