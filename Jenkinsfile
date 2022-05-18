pipeline {
    stage('clone repository') {
        checkout scm
    }
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
