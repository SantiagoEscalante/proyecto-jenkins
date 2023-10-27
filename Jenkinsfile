pipeline{
    parameters {
        string(name: 'PLAN',defaultValue:'Plan-SociusRGLABRGModeloDevOpsDockerDev',description:'Plan del servicio')
        string(name: 'RESOURCE_GROUP',defaultValue:'SOCIUSRGLAB-RG-MODELODEVOPS-DEV',description:'Grupo de recursos')
        string(name: 'BRANCH', defaultValue:env.BRANCH_NAME, description: 'Valor del Ambiente')
    }   
    agent any
    stages{
        stage('limpiar workspace'){
            steps{
                script{
                    deleteDir()
                }
            }
        }
        stage('desplegar en la Webapp'){
            environment{
                RESOURCE_GROUP = 'SOCIUSRGLAB-RG-MODELODEVOPS-DEV'
                WEBAPP_NAME = 'sociuswebapptest009'
                acr = 'santiagoescalante.azurecr.io'
                azureLog = credentials('AzureCredsSantiago')
                BUILD_VERSIONF = sh(script: 'git describe --tags', returnStdout: true).trim()
            }
            steps{
                 script{
                        env.AZURE_CONFIG_DIR = "${WORKSPACE}/azure-config"
                        withCredentials(bindings: [azureServicePrincipal('devServicePrincipal')]) {
                            sh 'az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET -t $AZURE_TENANT_ID'
                            sh "az webapp config container set --name $WEBAPP_NAME --resource-group $RESOURCE_GROUP --docker-custom-image-name santiagoescalante.azurecr.io/frontend:${BUILD_VERSION}-$BRANCH --docker-registry-server-url https://santiagoescalante.azurecr.io --docker-registry-server-user $azureLog_USR --docker-registry-server-password $azureLog_PSW"
                        }
                 }
            }
        }
    }
}
