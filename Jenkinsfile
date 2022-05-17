node {
     def app 
     stage('clone repository') {
      checkout scm  
    }
    stage('Build') {
        echo 'Building dependencies...'
        sh 'npm i nodemon'
        sh 'npm i'
    }
     
     stage('Run Application') {
        echo 'Run Application'
        sh 'npm start'
    }
    // stage('Build docker Image'){
    //   app = docker.build("lttung11/nodejs-cmt-blog")
    // }
    //  stage('Test Image'){
    //    app.inside {
    //      sh 'echo "TEST PASSED"'
    //   }  
    // }
}
