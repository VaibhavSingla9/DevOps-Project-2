pipeline{
    agent any 

    stages{
        stage("Checkout"){
            steps{
                echo "Starting CI Pipeline"
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