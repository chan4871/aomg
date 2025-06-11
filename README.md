
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
- 홈(Home)
    비주얼 비디오 배경, 브랜드 인트로, GSAP 스크롤 애니메이션 포함

- 아티스트(Artists)
    아티스트 리스트 및 상세 정보 확인 가능
    이름 클릭 시 해당 이미지 표시 기능 포함

- 스케줄(Schedule)
    달력 형태의 일정 확인 가능
    각 날짜별로 방송, 공연, 생일 등 이벤트 표시
    OpenWeather API를 이용한 날씨 정보 연동

- SNS & Footer
    인스타그램, 유튜브, 트위터 등 SNS 아이콘을 통한 외부 채널 연결
    하단 푸터를 통해 사이트 정보 및 완성도 강화

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

