const question_220=`QUESTION NO: 220 회사에서 고객이 온라인 주문에 사용하는 애플리케이션을 업데이트하고 있습니다. 최근 악성 행위자의 애플리케이션 공격 횟수가 증가했습니다. 회사는 Amazon Elastic Container Service(Amazon ECS) 클러스터에서 업데이트된 애플리케이션을 호스팅합니다. 회사는 Amazon DynamoDB를 사용하여 애플리케이션 데이터를 저장합니다. 공용 Application Load Balancer(ALB)는 최종 사용자에게 애플리케이션에 대한 액세스 권한을 제공합니다. 회사는 공격을 예방하고 공격이 진행되는 동안 최소한의 서비스 중단으로 비즈니스 연속성을 보장해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.) A. ALB를 오리진으로 사용하여 Amazon CloudFront 배포를 생성합니다. CloudFront 도메인에 사용자 지정 헤더와 임의 값을 추가합니다. 헤더와 값이 일치하는 경우 트래픽을 조건부로 전달하도록 ALB를 구성합니다. B. 두 AWS 지역에 애플리케이션을 배포합니다. 동일한 가중치로 두 리전으로 라우팅하도록 Amazon Route 53을 구성합니다. C. Amazon ECS 작업에 대한 자동 조정을 구성합니다. DynamoDB Accelerator(DAX) 클러스터를 생성합니다. D. DynamoDB의 오버헤드를 줄이도록 Amazon ElastiCache를 구성합니다. E. 적절한 규칙 그룹을 포함하는 AWS WAF 웹 ACL을 배포합니다. 웹 ACL을 Amazon CloudFront 배포와 연결합니다. Answer: A,E Explanation: The company should create an Amazon CloudFront distribution with the ALB as the origin. The company should add a custom header and random value on the CloudFront domain. The company should configure the ALB to conditionally forward traffic if the header and value match. The company should also deploy an AWS WAF web ACL that includes an appropriate rule group. The company should associate the web ACL with the Amazon CloudFront distribution. This solution will meet the requirements most cost-effectively because Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment1. By creating an Amazon CloudFront distribution with the ALB as the origin, the company can improve the performance and availability of its application by caching static content at edge locations closer to end users. By adding a custom header and random value on the CloudFront domain, the company can prevent direct access to the ALB and ensure that only requests from CloudFront are forwarded to the ECS tasks. By configuring the ALB to conditionally forward traffic if the header and value match, the company can implement origin access identity (OAI) for its ALB origin. OAI is a feature that enables you to restrict access to your content by requiring users to access your content through CloudFront URLs2. By deploying an AWS WAF web ACL that includes an appropriate rule group, the company can prevent attacks and ensure business continuity with minimal service interruptions during an ongoing attack. AWS WAF is a web application firewall that lets you monitor and control web requests that are forwarded to your web applications. You can use AWS WAF to define customizable web security rules that control which traffic can access your web applications and which traffic should be blocked3. By associating the web ACL with the Amazon CloudFront distribution, the company can apply the web security rules to all requests that are forwarded by CloudFront. The other options are not correct because: Deploying the application in two AWS Regions and configuring Amazon Route 53 to route to both Regions with equal weight would not prevent attacks or ensure business continuity. Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service that routes end users to Internet applications by translating names like www.example.com into numeric IP addresses4. However, routing traffic to multiple Regions would not protect against attacks or provide failover in case of an outage. It would also increase operational complexity and costs compared to using CloudFront and AWS WAF. Configuring auto scaling for Amazon ECS tasks and creating a DynamoDB Accelerator (DAX) cluster would not prevent attacks or ensure business continuity. Auto scaling is a feature that enables you to automatically adjust your ECS tasks based on demand or a schedule. DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement. However, these features would not protect against attacks or provide failover in case of an outage. They would also increase operational complexity and costs compared to using CloudFront and AWS WAF. Configuring Amazon ElastiCache to reduce overhead on DynamoDB would not prevent attacks or ensure business continuity. Amazon ElastiCache is a fully managed in-memory data store service that makes it easy to deploy, operate, and scale popular open-source compatible in-memory data stores. However, this service would not protect against attacks or provide failover in case of an outage. It would also increase operational complexity and costs compared to using CloudFront and AWS WAF. Reference: https://aws.amazon.com/cloudfront/ https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-contentrestricting-access-to-s3.html https://aws.amazon.com/waf/ https://aws.amazon.com/route53/ https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html https://aws.amazon.com/dynamodb/dax/ https://aws.amazon.com/elasticache/`;