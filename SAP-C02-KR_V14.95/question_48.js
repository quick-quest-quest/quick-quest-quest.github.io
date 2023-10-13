const question_48=`QUESTION NO: 48 회사는 사용자에게 맞춤형 애플리케이션에서 이미지를 업로드할 수 있는 기능을 제공합니다. 업로드 프로세스는 Amazon S3 버킷에서 이미지를 처리하고 저장하는 AWS Lambda 함수를 호출합니다. 애플리케이션은 특정 함수 버전 ARN을 사용하여 Lambda 함수를 호출합니다. Lambda 함수는 환경 변수를 사용하여 이미지 처리 매개변수를 수락합니다. 회사는 종종 최적의 이미지 처리 출력을 얻기 위해 Lambda 함수의 환경 변수를 조정합니다. 회사는 다양한 매개변수를 테스트하고 결과를 확인한 후 업데이트된 환경 변수로 새 기능 버전을 게시합니다. 또한 이 업데이트 프로세스에서는 새 기능 버전 ARN을 호출하기 위해 사용자 지정 애플리케이션을 자주 변경해야 합니다. 이러한 변경 사항은 사용자에게 방해가 됩니다. 솔루션 설계자는 이 프로세스를 단순화하여 사용자의 혼란을 최소화해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. 게시된 Lambda 함수 버전의 환경 변수를 직접 수정합니다. SLATEST 버전을 사용하여 이미지 처리 매개변수를 테스트합니다. B. 이미지 처리 매개변수를 저장할 Amazon DynamoDB 테이블을 생성합니다. DynamoDB 테이블에서 이미지 처리 매개변수를 검색하도록 Lambda 함수를 수정합니다. C. Lambda 함수 내에서 이미지 처리 매개변수를 직접 코딩하고 환경 변수를 제거합니다. 회사에서 매개변수를 업데이트하면 새 기능 버전을 게시합니다. D. Lambda 함수 별칭을 생성합니다. 함수 별칭 ARN을 사용하도록 클라이언트 애플리케이션을 수정합니다. 회사에서 테스트를 완료하면 함수의 새 버전을 가리키도록 Lambda 별칭을 재구성합니다. Answer: D Explanation: A Lambda function alias allows you to point to a specific version of a function and also can be updated to point to a new version of the function without modifying the client application. This way, the company can test different versions of the function with different environment variables and, once the optimal parameters are found, update the alias to point to the new version, without the need to update the client application. By using this approach, the company can simplify the process of updating the environment variables, minimize disruption to users, and reduce the operational overhead. Reference: AWS Lambda documentation: https://aws.amazon.com/lambda/ AWS Lambda Aliases documentation: https://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html AWS Lambda versioning and aliases documentation: https://aws.amazon.com/blogs/compute/versioning-aliases-inaws-lambda/`;