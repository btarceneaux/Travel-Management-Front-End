pipeline 
{ 

    agent any

    triggers {
        pollSCM('* * * * *')
    }

    stages {

        stage('Source checkout') 
        {
            steps {
                echo 'Cloning source code is finished.'
            }
        }

        stage('Test') {
            steps {
                echo 'Cloning source test is finished.'
            }
        }

        stage('Docker build') {
            steps {
                echo 'Build dokcer image'
                sh ''' docker image build -t travel-management-frontend .'''
            }
        }

        stage('Docker deploy') {
            steps {
                echo '----------------- This is a docker deploment phase ----------'
                sh '''
                (if  [ $(docker ps -a | grep travel-management-frontend-container | cut -d " " -f1) ]; then \
                        echo $(docker rm -f travel-management-frontend-container); \
                        echo "---------------- successfully removed travel-management-frontend-container ----------------"
                     else \
                    echo OK; \
                 fi;);
                docker container run --network travel-management-network --restart always --name travel-management-frontend-container -p 4000:80 -d travel-management-frontend
            '''
            }
        }
    }
}