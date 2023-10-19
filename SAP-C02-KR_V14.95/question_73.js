const question_73=`QUESTION NO: 73 회사는 온프레미스에서 호스팅하는 애플리케이션에서 메타데이터를 수집하기 위해 서비스를 사용합니다. TV 및 인터넷 라디오와 같은 소비자 장치는 애플리케이션에 액세스합니다. 많은 구형 장치는 특정 HTTP 헤더를 지원하지 않으며 이러한 헤더가 응답에 있을 때 오류를 표시합니다. 회사는 User-Agent 헤더로 회사에서 식별한 이전 장치로 전송된 응답에서 지원되지 않는 헤더를 제거하도록 온프레미스 로드 밸런서를 구성했습니다. 회사는 서비스를 AWS로 마이그레이션하고 서버리스 기술을 채택하고 이전 장치를 지원할 수 있는 기능을 유지하려고 합니다. 회사는 이미 애플리케이션을 AWS Lambda 함수 세트로 마이그레이션했습니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. 메타데이터 서비스를 위한 Amazon CloudFront 배포를 생성합니다. Application Load Balancer(ALB)를 생성합니다. 요청을 ALB로 전달하도록 CloudFront 배포를 구성합니다. 각 요청 유형에 대해 올바른 Lambda 함수를 호출하도록 ALB를 구성합니다. User-Agent 헤더의 값을 기반으로 문제가 있는 헤더를 제거하는 CloudFront 함수를 생성합니다. B. 메타데이터 서비스에 대한 Amazon API Gateway REST API를 생성합니다. 각 요청 유형에 대해 올바른 Lambda 함수를 호출하도록 API Gateway를 구성합니다. User-Agent 헤더의 값을 기반으로 문제가 있는 헤더를 제거하도록 기본 게이트웨이 응답을 수정합니다. C. 메타데이터 서비스에 대한 Amazon API Gateway HTTP API를 생성합니다. 각 요청 유형에 대해 올바른 Lambda 함수를 호출하도록 API Gateway를 구성합니다. User-Agent의 값을 기반으로 문제가 있는 헤더를 제거하는 응답 매핑 템플릿을 만듭니다. 응답 데이터 매핑을 HTTP API와 연결합니다. D. 메타데이터 서비스에 대한 Amazon CloudFront 배포를 생성합니다. Application Load Balancer(ALB)를 생성합니다. 요청을 ALB로 전달하도록 CloudFront 배포를 구성합니다. 각 요청 유형에 대해 올바른 Lambda 함수를 호출하도록 ALB를 구성합니다. User-Agent 헤더 값을 기반으로 최종 사용자 요청에 대한 응답으로 문제가 있는 헤더를 제거하는 Lambda@Edge 함수를 생성합니다. Answer: D(A인것같음) Explanation: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambdaexamples.html`;