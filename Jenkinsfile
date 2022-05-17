node {
    def app 
    env.NODEJS_HOME = "${tool 'Node 16.x'}"
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
     stage('clone repository') {
      checkout scm  
    }
    stage('Install nodemon') {
        sh 'npm i nodemon'
    }
    stage('Build') {
        echo 'Building dependencies...'
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
