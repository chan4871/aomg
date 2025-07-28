## AOMG_홈페이지 리뉴얼


### 프로젝트 개요
본 프로젝트는 3인 팀으로 구성된 AOMG 힙합 레이블의 공식 홈페이지를 리뉴얼한 웹사이트입니다.  
기존 사이트의 구조적 한계를 보완하고, AOMG만의 독창적인 감성과 시각적 정체성을 강조하며, 사용자 중심의 인터페이스를 제공하는 것을 목표로 하였습니다.

### 팀원 및 역할
- 김민지: 팀장
  메인페이지 - section02(introduction), footer
  서브페이지 - about,  store하단 페이지네이션 부분
- 장서연: 팀원
  메인페이지 - main(swiper), about
  서브페이지 - artist, store상단 스와이퍼 부분
- 이미숙: 팀원
  기여도 - 40% 
  메인페이지 - header, section02(artist),news
  서브페이지 - schedule, news

### 기간
- 기획: 3일 (2025년 05월 14일 ~ 2025년 05월 16일)[15hours]
- 디자인: 5일 (2025년 05월 19일 ~ 2025년 05월 23일)[25hours]
- 개발: 10일 (2025년 05월 26일 ~ 2025년 06월 11일)[50hours]
  
  
### 사용 기술
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![AOS](https://img.shields.io/badge/AOS-3ED0F7?style=for-the-badge&logo=&logoColor=white)
![GSAP ScrollTrigger](https://img.shields.io/badge/GSAP_ScrollTrigger-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

### 사용 api
![OpenWeather](https://img.shields.io/badge/OpenWeather-1E90FF?style=for-the-badge&logo=weather&logoColor=white)
![Naver Map](https://img.shields.io/badge/Naver_Map-03C75A?style=for-the-badge&logo=&logoColor=white)

### 폴더 구조
```
aomg-renewal
├── 📁 css
├── 📁 images
├── 📁 js
│   ├── mainArtist.js
│   ├── mainHeader.js
│   ├── mainNews.js
│   ├── mainSection01.js
│   ├── subAbout.js
│   ├── subArtist.js
│   ├── subArtistSwiper.js
│   ├── subNews.js
│   ├── subSchedule.js
│   ├── subStore.js
│   └── swiper.js
├── 📁 ncl_neovibes
├── 📁 weatherIcon
├── AOMG.html
├── artist-info-sub.html
├── artist-info-sub.scss
├── artist-swiper.scss
├── fonts.scss
├── footer.scss
├── index.html
├── mainAbout.scss
├── mainArtist.scss
├── mainHeader.scss
├── mainMain.scss
├── mainNews.scss
├── mainSection01.scss
├── reset.scss
├── subAbout.scss
├── subArtist.html
├── subArtist.scss
├── subNews.html
├── subNews.scss
├── subSchedule.html
├── subSchedule.scss
├── subStore.html
├── subStore.scss
└── variables.scss

```

### 리뉴얼 목적
- AOMG만의 톤앤매너 강화: 브랜드 감성과 어울리는 컬러 팔레트, 강렬한 타이포그래피, 비디오 기반 시각 요소로 몰입감 있는 UI 구성
- 직관적인 사용자 경험(UX): 누구나 쉽게 콘텐츠에 접근하고, 아티스트 정보를 탐색할 수 있도록 UI 구조 개선
- 비주얼 중심 레이아웃: 이미지, 영상, 모션을 적극 활용해 브랜드 아이덴티티를 시각적으로 표현
- 스케줄 기능 추가: 아티스트 활동 일정을 확인할 수 있는 서브페이지 구성
- SNS 연동 기능 강화: 각 아티스트의 공식 SNS 링크와 아이콘을 통해 외부 채널 접근 용이성 확보
- 최신 정보 반영: 탈퇴 아티스트 정보 삭제 및 최신 아티스트 라인업 반영
- Footer 구성: 사이트 완성도 및 신뢰도 향상

### 주요 기능
- 이미지 및 데이터 연동
- GSAP ScrollTrigger 애니메이션 적용
- 페이지 내 슬라이드 이동 제어
- 사용자 중심의 UI 구조 및 콘텐츠 배치
- OpenWeather 날씨 API 연동
- 지도 API를 활용한 위치 기반 기능
- 페이지네이션 적용
- AOS 부드러운 요소 진입 애니메이션 제공
- 비디오 백그라운드	몰입감을 위한 메인 배경 영상 사용

### 주요 페이지 구성
#### 메인페이지
##### 1) header
 ![image](https://github.com/user-attachments/assets/4fb4596b-bd84-4aab-9dc4-2961b3c7b0a6)
 ![image](https://github.com/user-attachments/assets/49f50a94-071b-4472-a3a9-6474976f846f)

aomg의 로고 배치, 로고와 비슷한 서체의 영문체 사용, 오버 시 포인트 컬러 전환 효과
사용자의 스크롤 값에 따라 투명도 또는 배경색을 주어 편의성 제공
반응형으로 실행 시 상단 네비게이션 사라지며, 오른쪽 상단 햄버거 기능 포함
반응형의 햄버거 버튼을 클릭하면 오른쪽에서 왼쪽으로 서브 페이지 보여짐

##### 2) Main
![Image](https://github.com/user-attachments/assets/da45664c-6dcc-4553-a3c4-0ec1403094a7)
신규 뮤직비디오 영상 재생을 통해 비주얼적으로 보여지는 배경- 스와이퍼 슬라이드 기능 포함
prev, next 버튼 또는 손가락 슬라이딩을 통해 스와이퍼 가능
클릭 시 해당 뮤직비디오와 연결된 url로 이동 가능

##### 3) section01(introduction)
![image](https://github.com/user-attachments/assets/4c7d4c15-3dcb-4ccc-878a-f5b6f66f9520)

볼드한 텍스트로 시각적인 효과를 주며, 브랜드 아이덴티티를 강조하는 메세지 전달
신규 발매한 앨범 소개- 스와이퍼 기능으로 구현

##### 4) section02(artist)
![Image](https://github.com/user-attachments/assets/413eb8b9-a77e-47c9-a2b4-3762d9a32b19)
아티스트 이미지를 aos로 띄워 사용자에게 몰입감 전달
데이터 값을 활용해 아티스트 이름 클릭 시 해당 이미지 표시 기능 포함
배경 클릭 시 원래 상태로 돌아가도록 구현

##### 5) section03(news)
![image](https://github.com/user-attachments/assets/77f54f2d-a843-4aba-be5a-08308c20be1f)
스와이퍼 기능을 통해 뉴스 내용 확인 가능
해당 회사에 관련한 뉴스 기사를 가독성 있게 전달

##### 6) section04(about)
![Image](https://github.com/user-attachments/assets/d87c8648-45da-4a4b-8e5d-5787fae44471)
회사 이미지를 보여줌과 동시에 서브페이지로 넘어갈 수 있도록 텍스트 오버 효과

##### 7) Footer
![image](https://github.com/user-attachments/assets/dab4b1e5-d7f1-49f8-8dcc-86944a407e8c)
x, 페이스북, 인스타그램, 유튜브 등 SNS 아이콘을 통한 외부 채널 연결
하단 푸터를 통해 사이트 정보 및 완성도 강화
  
#### 서브페이지
##### 1) about(회사 소개 페이지)
![image](https://github.com/user-attachments/assets/55dd2546-fb40-462c-915c-838ac8e0bb50)
![image](https://github.com/user-attachments/assets/2a3d5815-a5c7-474f-afe0-0e3e668eefc3)
aomg 소속 아티스트의 공연 영상 요소에 스크롤 트리거를 활용하여 확대하며 몰입감을 줌
aomg의 비전 및 가치, 회사에 대해 소개하는 글을 aos 활용하여 보여줌
로고 이미지를 3d영상으로 띄워 힙합 레이블인 브랜드 아이덴티티를 강조하는 분위기 조성
회사의 위치 소개와 지도api 기능을 활용하여 시각적으로 보여줌

##### 2) artist(아티스트 소개 페이지, 아티스트 인포페이지 포함)
![image](https://github.com/user-attachments/assets/1c620585-5a00-4629-973b-3374e7413838)
![image](https://github.com/user-attachments/assets/6429d1c5-be41-4309-a9f5-48671d5b2a33)
아티스트 리스트를 스와이퍼 슬라이드로 구현
아티스트 이미지 클릭 시 해당 아티스트의 상세 정보를 확인하는 인포페이지로 이동
아티스트 이미지 오버 시 해당 아티스트 이름 표시 기능 포함
하단에 배치된 바로 스크롤 및 확인 가능

##### 3) schedule(스케줄)
![Image](https://github.com/user-attachments/assets/c8247849-f3b6-492f-965f-19cfb8860099)
![image](https://github.com/user-attachments/assets/20d7a530-0e5f-4038-8a5d-3adbafc5522d)

왼쪽 리스트 섹션, 아티스트의 자세한 일정 확인 가능
각 날짜별로 방송, 공연, 생일 등 이벤트 표시
OpenWeather API를 이용한 날씨 정보 연동 후 달력에 표시
상단 비주얼 영역, 썸네일 이미지에 GSAP 스크롤 애니메이션 포함

##### 4) news(뉴스 페이지)
![image](https://github.com/user-attachments/assets/012846cf-045f-42d7-a1b6-12ac96a8e4de)
table 요소를 활용한 리스트 형태의 뉴스 기사 페이지
많은 정보를 쉽게 찾고 파악하도록 페이지네이션 활용

##### 5) store(굿즈 페이지)
![image](https://github.com/user-attachments/assets/e5868fb9-bb76-4094-8aa4-ac26b1c0be85)
aomg소속 아티스트들의 굿즈를 소개하는 스토어 페이지
스와이퍼 슬라이드를 활용해 베스트 아이템과 신규 앨범을 확인 가능
전체적인 제품을 소개하는 페이지는 간격을 조절한 후 페이지네이션 기능 활용

#### 제작 의도
본 프로젝트는 브랜드의 개성을 살리는 웹 디자인과 동시에,
사용자 중심의 편리한 인터페이스를 통해 방문자가 쉽게 정보를 탐색할 수 있도록 구성하였습니다.
AOMG 팬들과 대중 모두에게 유용한 포털로 작동하길 기대합니다.

#### 기여 및 참고
- 본 프로젝트는 교육 및 포트폴리오 용도로 제작되었습니다.
- 데이터는 실제 AOMG 활동 및 일정을 기반으로 하였으며, 일부 정보는 예시일 수 있습니다.
- 날씨 API: OpenWeather API
- 스크롤 인터랙션: GSAP & AOS

#### 프로젝트를 진행하며 겪은 어려움과 배운 점
이번 프로젝트를 통해 다양한 기술을 직접 적용하고, 문제를 해결해나가는 과정을 겪으며 많은 것을 배우게 되었습니다.
##### 1) API 활용에 대한 어려움
처음에는 외부 API 사용이 익숙하지 않아 어디에서 어떻게 호출하고 적용해야 하는지 막막했습니다. 선생님과 함께 학습한 예제 코드들을 분석하고, 공식 문서와 구글 검색, AI 도구 등을 활용해가며 API의 구조와 사용법을 익히려 노력했습니다.
OpenWeather API의 경우, 기본 제공 아이콘이 아닌 별도의 날씨 이미지를 사용해야 했기에, 직접 날씨 이미지 폴더를 구성하고 JavaScript에서 이미지 경로를 다르게 불러오도록 설정하는 방법을 새롭게 알게 되었습니다.
Naver Map API를 사용할 땐, 네이버 클라우드 플랫폼 콘솔에서 애플리케이션을 생성한 후 해당 프로젝트의 URL을 등록하고, 발급받은 Client ID를 HTML의 스크립트 내에 삽입해야 한다는 점도 새롭게 배운 부분입니다.

##### 2) 퍼블리싱 + 인터랙션 구현
서브 페이지 내 스케줄 섹션의 비주얼 영역에서는 좌우로 흩어지는 애니메이션 효과를 주고 싶었지만, 처음엔 방법을 몰랐습니다. 
이에 참고했던 사이트를 개발자 도구로 분석하고, AI의 도움을 받아 코드를 하나하나 살펴보며 해당 효과가 GSAP의 ScrollTrigger 플러그인을 활용한 것임을 알게 되었습니다.
기존 SCSS에서 단순 애니메이션을 주던 방식에서 확장해, 사용자의 스크롤에 반응하는 다이내믹한 인터랙션을 적용할 수 있었습니다.

##### 3) 데이터 속성(data-*) 활용
메인 페이지의 **아티스트 섹션(section02)**에서는 data-* 속성을 활용한 유동적인 기능 구현에 어려움이 있었습니다. 이전에 이 속성에 대해 배운 적은 있었지만, 실제로 프로젝트에서 활용하는 것은 처음이었습니다.
선생님의 조언과 공식 문서를 통해 학습하며, data-* 속성을 통해 동적인 값 전달 및 인터랙션 구현이 가능하다는 점을 실감할 수 있었고, 이를 바탕으로 원하는 효과를 구현할 수 있었습니다.

##### 4) 협업과 코드 병합
프로젝트는 팀원들과 각자 역할을 나눠 진행되었고, 이후 코드 병합 과정에서 다양한 이슈들이 발생했습니다. 이를 통해 폴더 및 파일 구조 설계의 중요성, 코드 스타일 가이드의 필요성, GitHub와 FileZilla를 통한 협업 시 경로 설정의 정확성, 유지보수가 용이한 코드 정리 방식에 대해 알게되었습니다.

#### 마무리하며
 이 프로젝트를 통해 단순히 기능을 구현하는 것에 그치지 않고, 문제를 분석하고 해결해 나가는 과정, 새로운 기술을 익히는 방법, 협업을 위한 커뮤니케이션까지 실제 개발에서 중요한 부분들을 체감할 수 있었습니다.
막막했던 API 연동, 생소했던 라이브러리, 처음 접하는 오류들을 하나씩 해결해나가며 개발자로서 한층 더 성장할 수 있는 값진 경험이었습니다.
