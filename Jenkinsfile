node {
    def app
    stage('clone repository') {
        checkout scm
    }
    stage('Build') {
        echo 'Building dependencies...'
        sh 'npm install nodemon'
        sh 'npm install'
    }
    stage('Run Application') {
        echo 'Run Application...'
        sh 'node index.js'
    }
// stage('Build docker Image'){
//   app = docker.build("nodejs-cmt-blog")
// }
//  stage('Test Image'){
//    app.inside {
//      sh 'echo "TEST PASSED"'
//   }
// }
}

