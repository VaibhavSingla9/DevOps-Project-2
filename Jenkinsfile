pipeline{
    agent any 

    stages{
        stage("Checkout"){
            steps{
                echo "Starting CI Pipeline"
            }
        }

        stage("Check Environment") {
    steps {
        sh 'echo $PATH'
        sh 'which node || true'
        sh 'which npm || true'
            }
        }

        stage("Install Dependencies"){
            steps{
                sh "npm ci"
            }
        }

        stage("Run Tests"){
            steps{
                sh "npm test"
            }
        }
    }
}