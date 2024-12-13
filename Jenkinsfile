pipeline {
    agent any

    environment {
        // Define any environment variables if necessary
        NODE_HOME = "/usr/local/bin" // Adjust this according to your environment
        PATH = "${NODE_HOME}:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                git branch: 'main', url: 'https://github.com/Tdos21/Deviare-Projects-Capstone-project-healthcare-.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                // Ensure npm and node are installed in the agent
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the Angular app...'
                sh 'npm run build --prod' // 'ng build --prod' could also be used if Angular CLI is installed globally
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm run test' // Run unit tests if defined in package.json
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the Angular app...'
                // Example of deploying to a web server or cloud service
                // Adjust according to your deployment method (e.g., AWS S3, Firebase, etc.)
                // Example command to deploy to AWS S3
                // sh 'aws s3 sync ./dist/your-app s3://your-bucket-name/ --delete'
                
                // If using a server:
                // sh 'scp -r ./dist/your-app user@server:/path/to/deploy'
            }
        }
    }

    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed. Please check the logs.'
        }
    }
}
