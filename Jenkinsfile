pipeline{
    agent any
    
    stages{
        stage("Clone the code"){
            steps{
                echo 'Cloning the code from github'
                git url:"https://github.com/AmanCloudOps/rc1-nodejs-webapp.git/", branch:"main"
            }
        }
        stage("build the image"){
            steps{
                echo "Building the docker image"
                sh "docker build -t nodejs-web-app ."
            }
        }
        stage ("Testing"){
            steps{
                echo "Test the code" 
            }
        }
        stage ("Push the image"){
            steps{
                withCredentials([usernamePassword(credentialsId: 'dockerHubIdPass', passwordVariable: 'dockerPass', usernameVariable: 'dockerUser')]) {
                    sh "docker login -u ${dockerUser} -p ${dockerPass}"
                    sh "docker image tag nodejs-web-app:latest ${dockerUser}/nodejs-web-app:latest"
                    sh "docker push ${dockerUser}/nodejs-web-app:latest"
                }
                echo "Pushing the image to docker hub" 
            }
        }
        stage ("Deploy the app"){
            steps{
                echo "Deploying the webapp successfully" 
            }
        }
    }
}

