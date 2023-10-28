const question_153=`QUESTION NO: 153 회사의 공장 및 자동화 애플리케이션이 단일 VPC에서 실행되고 있습니다. Amazon EC2, Amazon Elastic Container Service(Amazon ECS) 및 Amazon RDS의 조합에서 20개 이상의 애플리케이션이 실행됩니다. 이 회사에는 세 팀에 소프트웨어 엔지니어가 분산되어 있습니다. 세 팀 중 하나가 각 애플리케이션을 소유하며, 매번 모든 애플리케이션의 비용과 성능을 책임집니다. 팀 리소스에는 해당 애플리케이션과 팀을 나타내는 태그가 있습니다. 팀은 일상 활동에 IAM 액세스를 사용합니다. 회사는 월별 AWS 청구서에서 각 애플리케이션 또는 팀에 귀속되는 비용을 결정해야 합니다. 회사는 또한 지난 12개월의 비용을 비교하고 향후 12개월의 비용을 예측하는 데 도움이 되는 보고서를 생성할 수 있어야 합니다. 솔루션 설계자는 이러한 비용 보고서를 제공하는 AWS Billing and Cost Management 솔루션을 추천해야 합니다. 이러한 요구 사항을 충족하는 작업 조합은 무엇입니까? (3개를 선택하세요.) A. 애플리케이션과 팀을 나타내는 사용자 정의 비용 할당 태그를 활성화합니다. B. 애플리케이션과 팀을 나타내는 AWS 생성 비용 할당 태그를 활성화합니다. C. Billing and Cost Management에서 각 애플리케이션에 대한 비용 범주를 생성합니다. D. Billing and Cost Management에 대한 IAM 액세스를 활성화합니다. E. 비용 예산을 만듭니다. F. 비용 탐색기를 활성화합니다. Answer: A,C,F Explanation: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-cost-categories.html https://aws.amazon.com/premiumsupport/knowledge-center/cost-explorer-analyze-spendingand-usage/ https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-cost-categories.html https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html The best combination of actions to meet the company's requirements is Options A, C, and F. Option A involves activating the user-defined cost allocation tags that represent the application and the team. This will allow the company to assign costs to different applications or teams, and will allow them to be tracked in the monthly AWS bill. Option C involves creating a cost category for each application in Billing and Cost Management. This will allow the company to easily identify and compare costs across different applications and teams. Option F involves enabling Cost Explorer. This will allow the company to view the costs of their AWS resources over the last 12 months and to create forecasts for the next 12 months. These recommendations are in line with the official Amazon Textbook and Resources for the AWS Certified Solutions Architect - Professional certification. In particular, the book states that "You can use cost allocation tags to group your costs by application, team, or other categories" (Source: https://d1.awsstatic.com/training-and-certification/docs-sa-pro/AWS_Certified_Solutions_Architect_Professional_Exam_Guide_EN_v1.5.pdf). Additionally, the book states that "Cost Explorer enables you to view the costs of your AWS resources over the last 12 months and to create forecasts for the next 12 months" (Source: https://d1.awsstatic.com/training-and-certification/docs-sapro/ AWS_Certified_Solutions_Architect_Professional_Exam_Guide_EN_v1.5.pdf).`;