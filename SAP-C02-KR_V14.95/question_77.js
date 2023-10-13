const question_77=`QUESTION NO: 77 회사는 Amazon EC2 인스턴스에서 기존 웹 애플리케이션을 실행하고 있습니다. 회사는 애플리케이션을 컨테이너에서 실행되는 마이크로서비스로 리팩터링해야 합니다. 애플리케이션의 별도 버전은 생산 및 테스트라는 두 가지 환경에 존재합니다. 애플리케이션에 대한 부하는 가변적이지만 최소 부하와 최대 부하가 알려져 있습니다. 솔루션 설계자는 운영 복잡성을 최소화하는 서버리스 아키텍처로 업데이트된 애플리케이션을 설계해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까? A. 컨테이너 이미지를 함수로 AWS Lambda에 업로드합니다. 예상되는 최대 로드를 처리하도록 연결된 Lambda 함수에 대한 동시성 제한을 구성합니다. Amazon API Gateway 내에서 두 개의 별도 Lambda 통합을 구성합니다. 하나는 프로덕션용이고 다른 하나는 테스트용입니다. B. 컨테이너 이미지를 Amazon Elastic Container Registry(Amazon ECR)에 업로드합니다. 예상 로드를 처리하기 위해 Fargate 시작 유형을 사용하여 2개의 자동 확장 Amazon Elastic Container Service(Amazon ECS) 클러스터를 구성합니다. ECR 이미지에서 작업을 배포합니다. 두 개의 개별 Application Load Balancer를 구성하여 트래픽을 ECS 클러스터로 보냅니다. C. 컨테이너 이미지를 Amazon Elastic Container Registry(Amazon ECR)에 업로드합니다. 예상 로드를 처리하기 위해 Fargate 시작 유형을 사용하여 2개의 자동 확장 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 구성합니다. ECR 이미지에서 작업을 배포합니다. 두 개의 개별 Application Load Balancer를 구성하여 트래픽을 EKS 클러스터로 보냅니다. D. 컨테이너 이미지를 AWS Elastic Beanstalk에 업로드합니다. Elastic Beanstalk에서 프로덕션 및 테스트를 위한 별도의 환경과 배포를 생성합니다. 트래픽을 Elastic Beanstalk 배포로 보내도록 두 개의 개별 Application Load Balancer를 구성합니다. Answer: D Explanation: minimizes operational + microservices that run on containers = AWS Elastic Beanstalk
GPT 3.5 says "본문에서 제공된 답은 D입니다. 설명에 따르면 AWS Elastic Beanstalk은 운영 복잡성을 최소화하고 컨테이너에서 실행되는 마이크로서비스를 배포할 수 있도록 해줍니다.

이 답은 맞습니다. AWS Elastic Beanstalk은 여러 환경에서 애플리케이션을 배포하고 실행하기 쉽게 해주는 완전히 관리되는 서비스입니다. 이 서비스는 기반 인프라를 추상화하고 용량 프로비저닝, 로드 밸런싱, 자동 스케일링과 같은 작업을 처리합니다. 또한 컨테이너에서 애플리케이션을 실행할 수 있으므로 기존 웹 애플리케이션을 마이크로서비스로 리팩토링하는 데 적합한 선택입니다.

A 옵션은 잘못된 답입니다. AWS Lambda는 짧은 지속 시간의 함수를 실행하기 위해 설계된 서버리스 컴퓨팅 서비스입니다. 웹 애플리케이션을 마이크로서비스로 리팩토링하는 데 적합한 선택이 아닙니다.

B 옵션은 잘못된 답입니다. Amazon Elastic Container Service (ECS)는 컨테이너 오케스트레이션 서비스로, 기반 인프라를 수동으로 관리하고 ECS 클러스터의 스케일링을 수동으로 처리해야 합니다. 이는 문제에서 요구한 대로 운영 복잡성을 최소화하지 않습니다.

C 옵션은 잘못된 답입니다. Amazon Elastic Kubernetes Service (EKS)는 관리형"`;