const question_119=`QUESTION NO: 119 디지털 마케팅 회사에는 다양한 팀에 속한 여러 AWS 계정이 있습니다. 크리에이티브 팀은 AWS 계정의 Amazon S3 버킷을 사용하여 회사 마케팅 캠페인의 콘텐츠로 사용되는 이미지와 미디어 파일을 안전하게 저장합니다. 크리에이티브 팀은 전략 팀이 개체를 볼 수 있도록 전략 팀과 S3 버킷을 공유하려고 합니다. 솔루션 설계자가 전략 계정에서 이름이 strategy_reviewer인 IAM 역할을 생성했습니다. 또한 솔루션 설계자는 Creative 계정에 사용자 지정 AWS Key Management Service(AWS KMS) 키를 설정하고 키를 S3 버킷과 연결했습니다. 그러나 전략 계정의 사용자가 IAM 역할을 맡고 S3 버킷의 객체에 액세스하려고 하면 계정을 받습니다. 솔루션 설계자는 전략 계정의 사용자가 S3 버킷에 액세스할 수 있는지 확인해야 합니다. 솔루션은 이러한 사용자에게 필요한 최소한의 권한만 제공해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (3개를 선택하세요.) A. S3 버킷에 대한 읽기 권한을 포함하는 버킷 정책을 생성합니다. 버킷 정책의 주체를 전략 계정의 계정 ID로 설정합니다. B. S3 버킷에 대한 전체 권한을 부여하고 사용자 지정 KMS 키에 대한 암호 해독 권한을 부여하도록 strategy_reviewer IAM 역할을 업데이트합니다. C. Creative 계정에서 사용자 지정 KMS 키 정책을 업데이트하여 strategy_reviewer IAM 역할에 암호 해독 권한을 부여합니다. D. S3 버킷에 대한 읽기 권한을 포함하는 버킷 정책을 생성합니다. 버킷 정책의 주체를 익명 사용자로 설정합니다. E. Creative 계정에서 사용자 지정 KMS 키 정책을 업데이트하여 strategy_reviewer IAM 역할에 암호화 권한을 부여합니다. F. S3 버킷에 대한 읽기 권한을 부여하고 사용자 지정 KMS 키에 대한 암호 해독 권한을 부여하도록 strategy_reviewer IAM 역할을 업데이트합니다. Answer: A,C,F Explanation: https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-deniederror-s3/
GPT 3.5 says "텍스트에서 제공된 답변은 잘못되었습니다.

전략 계정의 사용자가 크리에이티브 계정의 S3 버킷에 액세스할 수 있도록 하려면 다음 단계를 수행해야 합니다:

A. S3 버킷에 대한 읽기 권한을 포함하는 버킷 정책을 생성합니다. 버킷 정책에서 주체를 전략 계정의 계정 ID로 설정합니다. 이렇게 하면 전략 계정이 S3 버킷에 액세스할 수 있습니다.

C. 크리에이티브 계정의 사용자 정의 KMS 키 정책을 업데이트하여 strategy_reviewer IAM 역할에 대한 복호화 권한을 부여합니다. 이렇게 하면 strategy_reviewer 역할이 S3 버킷의 객체를 복호화할 수 있습니다.

F. 전략 계정의 strategy_reviewer IAM 역할을 업데이트하여 S3 버킷에 대한 읽기 권한과 사용자 정의 KMS 키에 대한 복호화 권한을 부여합니다. 이렇게 하면 strategy_reviewer 역할이 S3 버킷에 액세스하고 객체를 복호화할 수 있습니다.

요구 사항을 충족하기 위한 올바른 단계는 A, C 및 F입니다."`;