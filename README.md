# 기획 플로우

 - 11월 1일 부터 서비스 시작 / 홍보 시작

개인정보(번호, 카카오id 등 정보 공개) - 개인정보처리방침, 이용약관 넣기(참고. https://505bucket.s3.ap-northeast-2.amazonaws.com/static/personal.html)

미리 작성

- 인풋 어떻게 뭘 받나(음성, 텍스트, 영상)
    - 웹 | 앱 | 카카오 채널
    - 뭘 : 음성, 텍스트, 영상
- 어떻게 저장하나(S3)
    - 어디에 : s3

시간되면 전송

- 어떻게 전송( 수능 끝나는 시간 11월 16일 오후 4시 40분 기준)
    - 카카오 채널로 링크로 보낸다.

포스트 잇, 책상꾸미기, 사진앨범

친구 목록 불러오기

핸드폰 번호 트리꾸미기

핸드폰 번호로 보내기

인풋: 웹 

개발요소: 롤링페이퍼 보여주는 사이트

최대목표

- 실사용 유저를 많이 확보(호선프로님학생들, 인터넷 홍보, sns 타즈아)
- 공통, 특화프로젝트 볼륨이 큰 프로젝트들을 했지만 실사용 유저들을 확보한 경험 없음 → 어떻게든 실사용 유저들을 많이 확보해 일어나는 일들을 경험하고 싶다.


# 23.10.16 팀미팅
주제

1. 수능 - 컨셉에 맞는 디자인 선정
- 앨범, 책상 꾸미기(포스트 잇), 사진 붙이기 등 범용성 높이는 의견 발의

2. 수능 끝나는 시간에 맞춰서 저장된 텍스트, 영상 등 카카오톡이나 문자 형식으로 받아볼 수 잇으면 좋지않을까?
(차별성)
전화번호 등 개인정보를 어떻게 동의를 구할 수 있을까?
수신인이 가입이 안되어있으면 핸드폰 번호 저장 이슈

부모님한테 써달라고 하는 방법은 별로다

컨트님 의견 : 문자발송은 X/ 가입할 때 개인정보 동의를 받는게 좋을 것 같다.(=> 우리의견 : 가입을 강제성을 줘야할 듯/ 최초 발신을 하려면 번호(정보)가 필요함)
2-1. 부모님에게 지정된 날짜에 ???이 완성되었어요 하고 부모님이 학생에게 알려주는 방식을 제시
2-2. 이 사이트를 모를 확률이 어렵다고 생각하기에 -> 다 가입되어있다고 가정하자

3. 가입안되어있을때 페이지는 어떻게 꾸밀것인가?(이름이 다를때 김동현 => 동동이 동현이 등 hash로 키를 만들던가 해서)
컨트님 의견 : 전화번호로 구분하자/ 크게 걱정안해도 될꺼같다

개인정보라는게 여러가지 정보 => 특정 개인을 식별할 수 있는가? 한가지는 개인정보로 안치기 때문에 김동현은 특정은 안되지만 SSAFY_부울경_2반_김동현은 특정할 수 있어서 개인정보
판례에 따라 움직이기에 개인정보에 민감하지 않아도 될 것 같다.

4. 아이디어는 괜찮은가? 어디에 중점인가?(실사용) 남긴 데이터를 검토해야하는건 문제가 없는가?(필터를 써도 한계가 있는데 개발진이 검토해도 괜찮은가?) 
경고문 제의(좋은 방법은 아님) 입력전에 필터링 하면 어떤가? 어쩔 수 없기 때문에 신경 X
스토킹 사례(나중에 고려)

5. 가입했는지 안했는지 모르는데 1차적으로 핸드폰 번호로 보내는데 가입시 서비스 없으면 문자 or 카카오톡? 핸드폰번호 인증으로 가입을 하려고 하는데 전화번호 필수 카카오톡 공유하기 예약발송
카카오를 빼고 우리가 폼을 만들지? vs 카카오로 편의성을 늘릴지(핸드론인증이 잇어서 모순임)
스케줄러를 통해서 카카오톡으로 보낼때 수신자 식별이 힘들다
종합의견 : 무조건적으로 카카오로 다해결하자 핸드폰로그인은 X(plan B 하지말고 무조건 카카오로 하자)

마케팅(필요)
- 소셜미디어로 마케팅
- SSAFY DAY 일정


일단 수능 몰빵
