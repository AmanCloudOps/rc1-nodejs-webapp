# CI/CD Pipeline with Jenkins, Docker, and GitHub Webhooks

## Automate Code Testing and Deployment
This project demonstrates a **CI/CD pipeline** using **Jenkins, Docker, and GitHub Webhooks** for automated build, test, and deployment of a **Node.js application** to an **AWS EC2** instance.

---

## Tech Stack
- **Node.js** - Application runtime environment
- **Docker** - Containerization platform for app packaging
- **Jenkins** - CI/CD automation server
- **GitHub** - Version control and source code management
- **AWS EC2** - Cloud platform for deployment
- **GitHub Webhooks** - Automated build trigger on code push events

---

## Setup and Installation

### Step 1: Create Project Directory
```sh
mkdir jenkins-project && cd jenkins-project
```

### Step 2: Install Node.js Dependencies
```sh
npm init -y
npm install express
```

### Step 3: Create Application Files
Create the following essential files:
- `package.json`: Project metadata and dependencies
- `package-lock.json`: Auto-generated dependency lockfile
- `index.js`: Application entry point and main logic

### Step 4: Run the Application
```sh
npm start
```
Now, open your browser and visit:
👉 http://localhost:3000

---

## Docker Setup
### Step 5: Install Docker
Follow the official Docker installation guide for your OS.

### Step 6: Create a Dockerfile
Build a Docker image:
```sh
docker build -t node-app .
```
Run the container:
```sh
docker run -d -p 3000:3000 node-app
```
Check your application at:
👉 http://localhost:3000

---

## Jenkins Installation & Configuration

### Step 7: Install Java (Required for Jenkins)
```sh
sudo apt update
sudo apt install openjdk-11-jdk -y
```

### Step 8: Install Jenkins
Follow the [Jenkins installation guide](https://www.jenkins.io/doc/book/installing/) for your system.

### Step 9: Access Jenkins
Visit:
👉 http://localhost:8080

### Step 10: Install Necessary Jenkins Plugins
Install plugins required for CI/CD (e.g., GitHub Plugin, Docker Pipeline, etc.).

---

## Jenkins Pipeline Setup

### Step 11: Create a Jenkins Pipeline
1. Log in to Jenkins
2. Click **New Item** → **Pipeline**
3. Enter a name and click **OK**
4. Configure the pipeline by adding a `Jenkinsfile`
5. Save and apply the configuration

### Sample Jenkinsfile
```groovy
pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/your-repo.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-app .'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy to AWS') {
            steps {
                sh 'docker run -d -p 3000:3000 node-app'
            }
        }
    }
}
```

---

## GitHub Webhook Configuration

### Step 12: Configure GitHub Webhooks
1. Go to **GitHub Repository → Settings → Webhooks**
2. Add a new webhook:
   - **Payload URL**: `<JENKINS_URL>/github-webhook/`
   - **Content type**: `application/json`
   - **Events**: Push events

### Step 13: Configure Jenkins to Receive Webhooks
1. Go to **Jenkins → Configure Jenkins → GitHub Webhook**
2. Enable GitHub Webhook plugin
3. Set the GitHub API URL and credentials

### Step 14: Trigger the Pipeline
1. Make changes to your Node.js app
2. Commit and push the changes
3. The pipeline should trigger automatically, building, testing, and deploying your app to **AWS EC2**

---

## Access the Deployed Application

Once the deployment is complete, visit the instance’s public IP:
👉 `http://<instance-ip>:3000`

🎉 **Congratulations!** You now have a fully functional CI/CD pipeline using Jenkins, Docker, and GitHub Webhooks!

