pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/FikyAnggra/cypress.git']]])
           }
        }
        stage('install') {
            steps {
                bat 'npm install'
                // bat 'cypress install'
            }
        }
        stage('Test') {
            steps {
                // bat 'npx cypress open'
                bat './node_modules/.bin/cypress run'
            }
        }
    }
}
