# AI 실무 활용 – 개인 브랜딩 모바일 랜딩 페이지

AI 활용이 막막한 직장인을 위한 **실무 AI 협업**, **업무 자동화**, **데이터 인사이트** 콘텐츠를 소개하는 모바일 우선 랜딩 페이지입니다.

---

## 프로젝트 설명

| 항목 | 내용 |
|------|------|
| **목적** | 개인 브랜딩 및 모바일 랜딩용 정적 웹 페이지 |
| **기술 스택** | HTML, CSS, JavaScript (빌드 없이 브라우저에서 바로 실행) |
| **UI** | 밝은 톤(라이트 테마), 반응형 레이아웃, 주제별 아이콘, 스크롤 애니메이션 |

### 제공 콘텐츠 (3개 주제)

1. **AI 워크 스마트** – 실전 AI활용법 & 성공 사례 (전구 아이콘)
2. **AI 동료 만들기** – NO-CODE / LOW-CODE 업무 자동화 (블록 아이콘)
3. **AI로 데이터 인사이트 발견** – 데이터 분석 & 시각화 (막대 그래프 아이콘)

### 페이지 구조 (4개 섹션)

1. **히어로** – 한 줄 소개 문구  
2. **주제 소개** – 3개 주제 카드 (아이콘 + 제목 + 설명)  
3. **커피챗 신청** – 구글 폼 링크 버튼 (새 탭에서 열림)  
4. **푸터** – 저작권 표시  

### 커피챗 신청

- **"커피챗 신청하기"** 버튼 클릭 시 [구글 폼](https://docs.google.com/forms/d/e/1FAIpQLScFUyLipa-kSA7TRdiI6tqyX4_E6J_uBQ8Avjj7sLfBqdPjyQ/viewform?usp=publish-editor)이 새 탭에서 열립니다.
- 구글 폼에서 이름, 연락처, 문의 내용을 입력해 신청할 수 있습니다.

---

## 파일 구조

```
pr/
├── index.html          # 메인 HTML (시맨틱 구조, 메타 태그, 4개 섹션, 주제별 아이콘)
├── style/
│   └── main.css        # 디자인 시스템(CSS 변수), 반응형 레이아웃, 애니메이션, 아이콘 스타일
├── scripts/
│   └── main.js         # 스크롤 애니메이션(Intersection Observer), 스무스 스크롤
└── README.MD            # 프로젝트 설명 및 실행 방법
```

---

## 실행 방법

### 1. 로컬에서 바로 열기

- `index.html` 파일을 더블클릭하거나 브라우저로 드래그하여 엽니다.

**Windows (PowerShell 또는 CMD):**

```bash
start index.html
```

### 2. 로컬 서버로 실행 (권장)

같은 폴더에서 HTTP 서버를 띄운 뒤 브라우저로 접속합니다.

**Python 3:**

```bash
python -m http.server 8080
```

**Node.js (npx):**

```bash
npx serve -p 8080
```

- 브라우저에서 **http://localhost:8080** 으로 접속합니다.

### 3. 배포

- **GitHub Pages**, **Netlify**, **Vercel** 등에 `pr` 폴더를 그대로 업로드하면 정적 사이트로 배포할 수 있습니다.

---

## 커스터마이징

- **스타일**: `style/main.css` 상단의 `:root` 변수(색상, 간격, 폰트 등)를 수정하면 전체 톤을 바꿀 수 있습니다.
- **구글 폼 URL 변경**: `index.html`의 커피챗 버튼 `href` 값을 새 구글 폼 주소로 바꾸면 됩니다.

---

## 브라우저 지원

- 최신 Chrome, Firefox, Safari, Edge  
- 모바일 브라우저 (iOS Safari, Android Chrome)  
- 스크롤 애니메이션은 `IntersectionObserver`를 사용하며, 미지원 환경에서는 애니메이션 없이 콘텐츠만 표시됩니다.
