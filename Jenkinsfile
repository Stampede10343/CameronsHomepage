pipeline {
    agent { docker { image 'node:13.10-alpine' } }
    stages {
        stage('setup') {
            steps {
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'node_modules/.bin/ng build --prod'
            }
        }
        stage('lint') {
            steps {
                sh 'node_modules/.bin/ng lint'
            }
        }
    }
}
