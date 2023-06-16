pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.jenkins'
      dir '.'
      args '-e CHROME_BIN=/bin/chromium -e NG_CLI_ANALYTICS="false"'
    }
  }
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
    stage('test') {
      steps {
        sh 'node_modules/.bin/ng test --watch=false --progress=false --browsers=ChromeHeadlessCI'
      }
    }

    stage('deploy') {
        when { branch 'master' }

        steps {
            echo 'Deploying'

            sshPublisher(
                publishers: [
                    sshPublisherDesc(
                    configName: 'droplet-ssh",
                    transfers: [
                        sshTransfer(
                            sourceFiles: 'dist/Homepage/**',
                            remoteDirectory: '/home/cameron/docker/homepage/html',
                            execCommand: 'echo Finished'
                        )
                    ]
                ]
            )
        }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: 'dist/Homepage/**', fingerprint: true
      junit 'src/junit-report/**/*.xml'
    }
  }
}

