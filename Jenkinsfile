// node {
//     def app
//     stage('clone repository') {
//         checkout scm
//     }
//     stage('Build') {
//         echo 'Building dependencies...'
//         sh 'npm i'
//     }

//     stage('Run Application') {
//         echo 'Run Application'
//         sh 'node index.jx'
//     }
// // stage('Build docker Image'){
// //   app = docker.build("lttung11/nodejs-cmt-blog")
// // }
// //  stage('Test Image'){
// //    app.inside {
// //      sh 'echo "TEST PASSED"'
// //   }
// // }
// }

pipeline {
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Application') {
            echo 'Run Application'
            sh 'node index.jx'
        }
    }
}
