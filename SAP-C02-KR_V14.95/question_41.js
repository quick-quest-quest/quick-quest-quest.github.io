const question_41=`QUESTION NO: 41 한 회사에서 REST 기반 API를 통해 여러 고객에게 날씨 데이터를 제공하고 있습니다. API는 Amazon API Gateway에서 호스팅되며 각 API 작업에 대해 서로 다른 AWS Lambda 함수와 통합됩니다. 이 회사는 DNS에 Amazon Route 53을 사용하고 weather.example.com이라는 리소스 레코드를 생성했습니다. 회사는 API용 데이터를 Amazon DynamoDB 테이블에 저장합니다. 회사는 API가 다른 AWS 리전으로 장애 조치할 수 있는 기능을 제공하는 솔루션이 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. 새 지역에 새 Lambda 함수 세트를 배포합니다. 두 리전의 Lambda 함수를 대상으로 사용하여 엣지 최적화 API 엔드포인트를 사용하도록 API Gateway API를 업데이트합니다. DynamoDB 테이블을 전역 테이블로 변환합니다. B. 다른 리전에 새 API Gateway API 및 Lambda 함수를 배포합니다. Route 53 DNS 레코드를 다중값 응답으로 변경합니다. 답변에 두 API 게이트웨이 API를 모두 추가합니다. 대상 상태 모니터링을 활성화합니다. DynamoDB 테이블을 전역 테이블로 변환합니다. C. 다른 리전에 새 API Gateway API 및 Lambda 함수를 배포합니다. Route 53 DNS 레코드를 장애 조치 레코드로 변경합니다. 대상 상태 모니터링을 활성화합니다. DynamoDB 테이블을 전역 테이블로 변환합니다. D. 새 리전에 새 API 게이트웨이 API를 배포합니다. Lambda 함수를 전역 함수로 변경합니다. Route 53 DNS 레코드를 다중값 응답으로 변경합니다. 답변에 두 API 게이트웨이 API를 모두 추가합니다. 대상 상태 모니터링을 활성화합니다. DynamoDB 테이블을 전역 테이블로 변환합니다. Answer: C Explanation: https://docs.aws.amazon.com/apigateway/latest/developerguide/dns-failover.html`;