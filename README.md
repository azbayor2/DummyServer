# DummyServer

## GitHub Actions Secrets 설정

워크플로우 실행을 위해 GitHub Repository Settings > Secrets and variables > Actions에서 아래 secrets를 등록해야 합니다.

### 공통 (모든 워크플로우)

| Secret 이름 | 설명 |
|---|---|
| `AWS_IAM_ARN` | AWS OIDC 연동을 위한 IAM Role ARN |

### Node.js 워크플로우 (`nodejs-build.yml`)

| Secret 이름 | 설명 |
|---|---|
| `AWS_ECR_NODEJS` | Node.js ECR 리포지토리 URI (예: `123456789.dkr.ecr.ap-northeast-2.amazonaws.com/nodejs`) |
| `ECS_CLUSTER_NAME` | ECS 클러스터 이름 |
| `ECS_NODEJS_TASK_DEFINITION` | Node.js 서비스의 ECS Task Definition 이름 |
| `ECS_NODEJS_SERVICE_NAME` | Node.js ECS 서비스 이름 |
| `ECS_MIGRATION_TASK_DEFINITION` | DB 마이그레이션용 ECS Task Definition 이름 |
| `ECS_MIGRATION_CONTAINER_NAME` | 마이그레이션 Task의 컨테이너 이름 |
| `ECS_SUBNETS` | ECS Task 실행 서브넷 (JSON 배열, 예: `["subnet-xxx","subnet-yyy"]`) |
| `ECS_SECURITY_GROUPS` | ECS Task 실행 보안 그룹 (JSON 배열, 예: `["sg-xxx"]`) |

### Python 워크플로우 (`python-build.yml`)

| Secret 이름 | 설명 |
|---|---|
| `AWS_ECR_PYTHON` | Python ECR 리포지토리 URI |
| `ECS_CLUSTER_NAME` | ECS 클러스터 이름 (Node.js와 동일) |
| `ECS_PYTHON_TASK_DEFINITION` | Python 서비스의 ECS Task Definition 이름 |
| `ECS_PYTHON_SERVICE_NAME` | Python ECS 서비스 이름 |

### Frontend 워크플로우 (`front-deploy.yml`)

| Secret 이름 | 설명 |
|---|---|
| `S3_BUCKET_NAME` | 프론트엔드 정적 파일을 배포할 S3 버킷 이름 |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront 배포 ID (캐시 무효화용) |
