const question_23=`QUESTION NO: 23 회사에는 AWS Organizations에 조직이 있습니다. 이 회사는 AWS Control Tower를 사용하여 조직의 랜딩 존을 배포하고 있습니다. 회사는 거버넌스 및 정책 집행을 구현하려고 합니다. 회사는 회사의 프로덕션 OU에서 유휴 상태에서 암호화되지 않은 Amazon RDS DB 인스턴스를 감지하는 정책을 구현해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까? A. AWS Control Tower에서 필수 가드레일을 켭니다. 프로덕션 OU에 필수 가드레일을 적용합니다. B. AWS Control Tower의 강력 권장 가드레일 목록에서 적절한 가드레일을 활성화합니다. 프로덕션 OU에 가드레일을 적용합니다. C. AWS Config를 사용하여 새로운 필수 가드레일을 생성합니다. 프로덕션 OU의 모든 계정에 규칙을 적용합니다. D. AWS Control Tower에서 사용자 지정 SCP를 생성합니다. 프로덕션 OU에 SCP를 적용합니다. Answer: B Explanation: AWS Control Tower provides a set of "strongly recommended guardrails" that can be enabled to implement governance and policy enforcement. One of these guardrails is "Encrypt Amazon RDS instances" which will detect RDS DB instances that are not encrypted at rest. By enabling this guardrail and applying it to the production OU, the company will be able to enforce encryption for RDS instances in the production environment.`;