const question_94=`QUESTION NO: 94 회사는 개발자가 Amazon EC2만 사용하도록 제한하기 위해 AWS Organizations를 구현하는 과정에 있습니다. Amazon S3 및 Amazon DynamoDB. 개발자 계정은 전용 조직 단위(OU)에 상주합니다. 솔루션 설계자는 개발자 계정에 다음 SCP를 구현했습니다. 
{
	""Version"": ""2012-10-17"",
	""Statement"": [
		{
		""Sid"": ""AllowEC2"",
		""Effect"":
		""Allow"",
		""Action"": ""ec2:*"", ""Resource"": ""*""
		},
	{
		""Sid"": ""AllowDynamoDB"",
		""Effect"": ""Allow"",
		""Action"": ""dynamodb:*"", ""Resource"": "*""
	},
	{
		""Sid"": ""AllowS3"", 
		""Effect"": ""Allow"", 
		""Action": ""s3:*"", 
		""Resource": "*""
	}
]
이 정책이 배포되면 개발자 계정의 IAM 사용자는 정책에 나열되지 않은 AWS 서비스를 계속 사용할 수 있습니다. 이 정책의 범위를 벗어나는 서비스를 사용하는 개발자의 능력을 제거하기 위해 솔루션 설계자는 무엇을 해야 합니까? A. 제한해야 하는 각 AWS 서비스에 대해 명시적인 거부 문을 만듭니다. B. 개발자 계정의 OU에서 전체 AWS 액세스 SCP를 제거합니다. C. 모든 서비스를 명시적으로 거부하도록 전체 AWS 액세스 SCP를 수정합니다. D. SCP 끝에 와일드카드를 사용하여 명시적인 거부 문을 추가합니다. Answer: B Explanation: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inheritan ce_auth.html`;