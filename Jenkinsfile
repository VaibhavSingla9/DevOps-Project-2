pipeline{
    agent any 

    environment {
    PATH = "/opt/homebrew/bin:/usr/local/bin:${env.PATH}"

    
    AWS_REGION = "ap-south-1"
    AWS_ACCOUNT_ID = "510497448465"
    ECR_REPOSITORY = "510497448465.dkr.ecr.ap-south-1.amazonaws.com/devops-project-2"
    }

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

        stage("Build Docker Image") {
            steps {
                script {
                    env.IMAGE_TAG = sh(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()
                 }

                sh '''
                    docker build --platform linux/amd64 \
                        -t "$ECR_REPOSITORY:$IMAGE_TAG" .
                '''
            }
        }

        stage("Login to ECR") {
            steps {
                sh '''
                    set -o pipefail
                    aws ecr get-login-password --region "$AWS_REGION" |
                    docker login --username AWS --password-stdin 510497448465.dkr.ecr.ap-south-1.amazonaws.com
                '''
            }
        }

        stage("Push Image to ECR") {
            steps {
                sh '''
                    docker push "$ECR_REPOSITORY:$IMAGE_TAG"
                '''
            }
        }

        stage("Deploy to EKS") {
            steps {
                sh '''
                    kubectl set image deployment/devops-project-2 \
                        devops-project-2="$ECR_REPOSITORY:$IMAGE_TAG"
                '''
            }
        }

        stage("Verify Deployment") {
            steps {
                sh '''
                    kubectl rollout status deployment/devops-project-2 --timeout=180s
                '''
            }
        }
    }
}