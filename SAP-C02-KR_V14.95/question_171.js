const question_171=`QUESTION NO: 171 회사는 두 개의 개별 비즈니스 단위로 구성됩니다. 각 사업부는 AWS Organizations의 단일 조직 내에 자체 AWS 계정을 가지고 있습니다. 비즈니스 단위는 정기적으로 중요한 문서를 서로 공유합니다. 공유를 용이하게 하기 위해 회사는 각 계정에 Amazon S3 버킷을 생성하고 S3 버킷 간에 양방향 복제를 구성했습니다. S3 버킷에는 수백만 개의 객체가 있습니다. 최근 보안 감사에서 두 S3 버킷 모두 유휴 암호화가 활성화되어 있지 않은 것으로 확인되었습니다. 회사 정책에 따라 모든 문서는 저장 시 암호화된 상태로 저장되어야 합니다. 회사는 Amazon S3 관리형 암호화 키(SSE-S3)로 서버 측 암호화를 구현하려고 합니다. 이러한 요구 사항을 충족하는 운영상 가장 효율적인 솔루션은 무엇입니까? A. 두 S3 버킷에서 SSE-S3를 켭니다. S3 배치 작업을 사용하여 동일한 위치에서 객체를 복사하고 암호화합니다. B. 각 계정에서 AWS Key Management Service(AWS KMS) 키를 생성합니다. 해당 AWS 계정에서 해당 KMS 키를 사용하여 각 S3 버킷에서 AWS KMS 키(SSE-KMS)로 서버 측 암호화를 켭니다. S3 배치 작업을 사용하여 객체를 동일한 위치에 복사합니다. C. 각 계정에서 AWS Key Management Service(AWS KMS) 키를 생성합니다. 해당 AWS 계정에서 해당 KMS 키를 사용하여 각 S3 버킷에서 AWS KMS 키(SSE-KMS)로 서버 측 암호화를 켭니다. AWS CLI에서 S3 복사 명령을 사용하여 기존 객체를 암호화합니다. D. 두 S3 버킷에서 SSE-S3를 켭니다. AWS CLI에서 S3 복사 명령을 사용하여 기존 객체를 암호화합니다. Answer: A Explanation: "The S3 buckets have millions of objects" If there are million of objects then you should use Batch operations. https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3- batch-operations/`;