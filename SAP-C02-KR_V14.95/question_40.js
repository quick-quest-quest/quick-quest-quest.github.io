const question_40=`QUESTION NO: 40 비디오 스트리밍 회사는 최근 비디오 공유를 위한 모바일 앱을 출시했습니다. 앱은 us-east-1 리전의 Amazon S3 버킷에 다양한 파일을 업로드합니다. 파일 크기 범위는 1GB에서 10GB입니다. 호주에서 앱에 액세스하는 사용자는 오랜 시간이 걸리는 업로드를 경험했습니다. 이러한 사용자에게는 파일이 완전히 업로드되지 않는 경우가 있습니다. 솔루션 설계자는 이러한 업로드에 대한 앱의 성능을 개선해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까? (2개를 선택하세요.) A. S3 버킷에서 S3 Transfer Acceleration 활성화 업로드에 Transfer Acceleration 엔드포인트를 사용하도록 앱 구성 B. 업로드를 수신하도록 각 리전에서 S3 버킷을 구성합니다. S3 교차 리전 복제를 사용하여 파일을 배포 S3 버킷에 복사합니다. C. 가장 가까운 S3 버킷 리전으로 업로드를 라우팅하도록 지연 시간 기반 라우팅으로 Amazon Route 53을 설정합니다. D. 비디오 파일을 청크로 나누도록 앱 구성 멀티파트 업로드를 사용하여 파일을 Amazon S3로 전송합니다. E. 업로드하기 전에 파일에 임의의 접두사를 추가하도록 앱을 수정합니다. Answer: A,D Explanation: https://aws.amazon.com/premiumsupport/knowledge-center/s3-upload-large-files/ Enabling S3 Transfer Acceleration on the S3 bucket and configuring the app to use the Transfer Acceleration endpoint for uploads will improve the app's performance for these uploads by leveraging Amazon CloudFront's globally distributed edge locations to accelerate the uploads. Breaking the video files into chunks and using a multipart upload to transfer files to Amazon S3 will also improve the app's performance by allowing parts of the file to be uploaded in parallel, reducing the overall upload time.`;