const question_112=`QUESTION NO: 112 회사의 공개 API는 Amazon Elastic Container Service(Amazon ECS)에서 작업으로 실행됩니다. 작업은 Application Load Balancer(ALB) 뒤에 있는 AWS Fargate에서 실행되며 CPU 사용률을 기반으로 작업에 대해 Service Auto Scaling으로 구성됩니다. 이 서비스는 몇 달 동안 잘 운영되고 있습니다. 최근에 API 성능이 느려지고 애플리케이션을 사용할 수 없게 되었습니다. 이 회사는 API에 대해 상당한 수의 SQL 주입 공격이 발생했으며 API 서비스가 최대 규모로 확장되었음을 발견했습니다. 솔루션 설계자는 SQL 인젝션 공격이 ECS API 서비스에 도달하지 못하도록 방지하는 솔루션을 구현해야 합니다. 솔루션은 합법적인 트래픽을 허용해야 하며 운영 효율성을 극대화해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까? A. 새 AWS WAF 웹 ACL을 생성하여 ECS 작업 앞에서 ALB로 전달되는 HTTP 요청 및 HTTPS 요청을 모니터링합니다. B. 새 AWS WAF Bot Control 구현을 생성합니다. AWS WAF Bot Control 관리형 규칙 그룹에 규칙을 추가하여 트래픽을 모니터링하고 ECS 작업 앞의 ALB에 대한 적법한 트래픽만 허용합니다. C. 새 AWS WAF 웹 ACL을 생성합니다. SQL 데이터베이스 규칙 그룹과 일치하는 요청을 차단하는 새 규칙을 추가합니다. 해당 규칙과 일치하지 않는 다른 모든 트래픽을 허용하도록 웹 ACL을 설정합니다. ECS 작업 앞의 ALB에 웹 ACL을 연결합니다. D. 새 AWS WAF 웹 ACL을 생성합니다. AWS WAF에서 새로운 빈 IP 세트를 생성합니다. 새 IP 세트의 IP 주소에서 발생하는 요청을 차단하려면 웹 ACL에 새 규칙을 추가하십시오. SQL 주입 공격을 보내는 IP 주소에 대한 API 로그를 스크랩하는 AWS Lambda 함수를 생성하고 해당 IP 주소를 IP 세트에 추가합니다. ECS 작업 앞의 ALB에 웹 ACL을 연결합니다. Answer: C Explanation: The company should create a new AWS WAF web ACL. The company should add a new rule that blocks requests that match the SQL database rule group. The company should set the web ACL to allow all other traffic that does not match those rules. The company should attach the web ACL to the ALB in front of the ECS tasks. This solution will meet the requirements because AWS WAF is a web application firewall that lets you monitor and control web requests that are forwarded to your web applications. You can use AWS WAF to define customizable web security rules that control which traffic can access your web applications and which traffic should be blocked1. By creating a new AWS WAF web ACL, the company can create a collection of rules that define the conditions for allowing or blocking web requests. By adding a new rule that blocks requests that match the SQL database rule group, the company can prevent SQL injection attacks from reaching the ECS API service. The SQL database rule group is a managed rule group provided by AWS that contains rules to protect against common SQL injection attack patterns2. By setting the web ACL to allow all other traffic that does not match those rules, the company can ensure that legitimate traffic can access the API service. By attaching the web ACL to the ALB in front of the ECS tasks, the company can apply the web security rules to all requests that are forwarded by the load balancer. The other options are not correct because: Creating a new AWS WAF Bot Control implementation would not prevent SQL injection attacks from reaching the ECS API service. AWS WAF Bot Control is a feature that gives you visibility and control over common and pervasive bot traffic that can consume excess resources, skew metrics, cause downtime, or perform other undesired activities. However, it does not protect against SQL injection attacks, which are malicious attempts to execute unauthorized SQL statements against your database3. Creating a new AWS WAF web ACL to monitor the HTTP requests and HTTPS requests that are forwarded to the ALB in front of the ECS tasks would not prevent SQL injection attacks from reaching the ECS API service. Monitoring mode is a feature that enables you to evaluate how your rules would perform without actually blocking any requests. However, this mode does not provide any protection against attacks, as it only logs and counts requests that match your rules4. Creating a new AWS WAF web ACL and creating a new empty IP set in AWS WAF would not prevent SQL injection attacks from reaching the ECS API service. An IP set is a feature that enables you to specify a list of IP addresses or CIDR blocks that you want to allow or block based on their source IP address. However, this approach would not be effective or efficient against SQL injection attacks, as it would require constantly updating the IP set with new IP addresses of attackers, and it would not block attackers who use proxies or VPNs. Reference: https://aws.amazon.com/waf/ https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groupslist. html#sql-injection-rule-group https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-monitoring-mode.html https://docs.aws.amazon.com/waf/latest/developerguide/waf-ip-sets.html`;