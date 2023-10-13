const question_62=`QUESTION NO: 62 한 회사가 단일 AWS 계정에서 여러 워크로드를 실행하고 있습니다. 새로운 회사 정책에 따르면 엔지니어는 승인된 리소스만 프로비저닝할 수 있으며 엔지니어는 AWS CloudFormation을 사용하여 이러한 리소스를 프로비저닝해야 합니다. 솔루션 설계자는 엔지니어가 액세스에 사용하는 IAM 역할에 새로운 제한을 적용하는 솔루션을 만들어야 합니다. 솔루션 설계자는 솔루션을 생성하기 위해 무엇을 해야 합니까? A. 승인된 리소스가 포함된 AWS CloudFormation 템플릿을 Amazon S3 버킷에 업로드합니다. Amazon S3 및 AWS CloudFormation에 대한 액세스만 허용하도록 엔지니어의 IAM 역할에 대한 IAM 정책을 업데이트합니다. AWS CloudFormation 템플릿을 사용하여 리소스를 프로비저닝합니다. B. 승인된 리소스 및 AWS CloudFormation의 프로비저닝만 허용하는 권한으로 엔지니어의 IAM 역할에 대한 IAM 정책을 업데이트합니다. AWS CloudFormation 템플릿을 사용하여 승인된 리소스로 스택을 생성합니다. C. AWS CloudFormation 작업만 허용하는 권한으로 엔지니어의 IAM 역할에 대한 IAM 정책을 업데이트합니다. 승인된 리소스를 프로비저닝할 수 있는 권한이 있는 새 IAM 정책을 생성하고 정책을 새 IAM 서비스 역할에 할당합니다. 스택 생성 중에 AWS CloudFormation에 IAM 서비스 역할을 할당합니다. D. AWS CloudFormation 스택에서 리소스를 프로비저닝합니다. 자체 AWS CloudFormation 스택에 대한 액세스만 허용하도록 엔지니어의 IAM 역할에 대한 IAM 정책을 업데이트합니다. Answer: B(C인것같음) Explanation: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/security-bestpractices. html#use-iam-to-control-access https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iamservicerole. html`;