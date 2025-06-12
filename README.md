
# 🎧 AOMG Official Website Renewal

## 🔥 프로젝트 개요
본 프로젝트는 AOMG 힙합 레이블의 공식 홈페이지를 리뉴얼한 웹사이트입니다.  
기존 사이트의 구조적 한계를 보완하고, AOMG만의 독창적인 감성과 시각적 정체성(Visual Identity) 을 강조하며, 사용자 중심의 인터페이스를 제공하는 것을 목표로 하였습니다.

## 🎯 리뉴얼 목적
🎨 AOMG만의 톤앤매너 강화: 브랜드 감성과 어울리는 컬러 팔레트, 강렬한 타이포그래피, 비디오 기반 시각 요소로 몰입감 있는 UI 구성
🧩 직관적인 사용자 경험(UX): 누구나 쉽게 콘텐츠에 접근하고, 아티스트 정보를 탐색할 수 있도록 UI 구조 개선
🖼️ 비주얼 중심 레이아웃: 이미지, 영상, 모션을 적극 활용해 브랜드 아이덴티티를 시각적으로 표현
📅 스케줄 기능 추가: 아티스트 활동 일정을 확인할 수 있는 서브페이지 구성
🔗 SNS 연동 기능 강화: 각 아티스트의 공식 SNS 링크와 아이콘을 통해 외부 채널 접근 용이성 확보
🧹 최신 정보 반영: 탈퇴 아티스트 정보 삭제 및 최신 아티스트 라인업 반영
🧱 Footer 구성: 사이트 완성도 및 신뢰도 향상

## 🛠️ 주요 기능
- 이미지 및 데이터 연동
- GSAP ScrollTrigger 애니메이션 적용
- 페이지 내 슬라이드 이동 제어
- 사용자 중심의 UI 구조 및 콘텐츠 배치
- OpenWeather 날씨 API 연동
- 지도 API를 활용한 위치 기반 기능
- 페이지네이션 적용
- AOS 부드러운 요소 진입 애니메이션 제공
- 비디오 백그라운드	몰입감을 위한 메인 배경 영상 사용

## 🗂️주요 페이지 구성
# 💁‍♂️ 메인페이지
- header
    aomg의 로고 배치, 로고와 비슷한 서체의 영문체 사용, 오버 시 포인트 컬러 전환 효과
    사용자의 스크롤 값에 따라 투명도 또는 배경색을 주어 편의성 제공
    반응형으로 실행 시 상단 네비게이션 사라지며, 오른쪽 상단 햄버거 기능 포함
    반응형의 햄버거 버튼을 클릭하면 오른쪽에서 왼쪽으로 서브 페이지 보여짐
- Main
    신규 뮤직비디오 영상 재생을 통해 비주얼적으로 보여지는 배경- 스와이퍼 슬라이드 기능 포함
    prev, next 버튼 또는 손가락 슬라이딩을 통해 스와이퍼 가능
    클릭 시 해당 뮤직비디오와 연결된 url로 이동 가능
- section01(introduction)
    볼드한 텍스트로 시각적인 효과를 주며, 브랜드 아이덴티티를 강조하는 메세지 전달
    신규 발매한 앨범 소개- 스와이퍼 기능으로 구현
- section02(artist)
    아티스트 이미지를 aos로 띄워 사용자에게 몰입감 전달
    데이터 값을 활용해 아티스트 이름 클릭 시 해당 이미지 표시 기능 포함
    배경 클릭 시 원래 상태로 돌아가도록 구현
- section03(news)
    스와이퍼 기능을 통해 뉴스 내용 확인 가능
    해당 회사에 관련한 뉴스 기사를 가독성 있게 전달
- section04(about)
    회사 이미지를 보여줌과 동시에 서브페이지로 넘어갈 수 있도록 텍스트 오버 효과
- Footer
    x, 페이스북, 인스타그램, 유튜브 등 SNS 아이콘을 통한 외부 채널 연결
    하단 푸터를 통해 사이트 정보 및 완성도 강화
  
# 💁‍♂️ 서브페이지
- about(회사 소개 페이지)
    aomg 소속 아티스트의 공연 영상 요소에 스크롤 트리거를 활용하여 확대하며 몰입감을 줌
    aomg의 비전 및 가치, 회사에 대해 소개하는 글을 aos 활용하여 보여줌
    로고 이미지를 3d영상으로 띄워 힙합 레이블인 브랜드 아이덴티티를 강조하는 분위기 조성
    회사의 위치 소개와 지도api 기능을 활용하여 시각적으로 보여줌
- artist(아티스트 소개 페이지, 아티스트 인포페이지 포함)
    아티스트 리스트를 스와이퍼 슬라이드로 구현
    아티스트 이미지 클릭 시 해당 아티스트의 상세 정보를 확인하는 인포페이지로 이동
    아티스트 이미지 오버 시 해당 아티스트 이름 표시 기능 포함
    하단에 배치된 바로 스크롤 및 확인 가능
- schedule(스케줄)
    왼쪽 리스트 섹션, 아티스트의 자세한 일정 확인 가능
    각 날짜별로 방송, 공연, 생일 등 이벤트 표시
    OpenWeather API를 이용한 날씨 정보 연동 후 달력에 표시
    상단 비주얼 영역, 썸네일 이미지에 GSAP 스크롤 애니메이션 포함
- news(뉴스 페이지)
    table 요소를 활용한 리스트 형태의 뉴스 기사 페이지
    많은 정보를 쉽게 찾고 파악하도록 페이지네이션 활용
- store(굿즈 페이지)
    aomg소속 아티스트들의 굿즈를 소개하는 스토어 페이지
    스와이퍼 슬라이드를 활용해 베스트 아이템과 신규 앨범을 확인 가능
    전체적인 제품을 소개하는 페이지는 간격을 조절한 후 페이지네이션 기능 활용

## 🧩 사용 기술
- **HTML / SCSS / JavaScript**
- **GSAP (ScrollTrigger)** : 스크롤 트리거 기반 애니메이션
- **AOS (Animate on Scroll)** : 스크롤 시 요소 애니메이션
- **OpenWeather API** : 실시간 날씨 정보 연동

## 📁 폴더 구조
```
📦aomg-renewal
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

📝 설치 및 실행 방법
별도의 빌드 환경 없이 정적 페이지 형태로 동작합니다.
웹 서버 또는 로컬에서 다음과 같이 실행할 수 있습니다:
    # VSCode Live Server 또는
    (https://chan4871.github.io/aomg/)

## 📌 기여 및 참고
- 본 프로젝트는 교육 및 포트폴리오 용도로 제작되었습니다.
- 데이터는 실제 AOMG 활동 및 일정을 기반으로 하였으며, 일부 정보는 예시일 수 있습니다.
- 날씨 API: OpenWeather API
- 스크롤 인터랙션: GSAP & AOS

💬 제작 의도
본 프로젝트는 브랜드의 개성을 살리는 웹 디자인과 동시에,
사용자 중심의 편리한 인터페이스를 통해 방문자가 쉽게 정보를 탐색할 수 있도록 구성하였습니다.
AOMG 팬들과 대중 모두에게 유용한 포털로 작동하길 기대합니다.

