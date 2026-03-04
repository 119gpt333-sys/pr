# PRD: 서울소방GPT Research Platform (Vibe-Coding Edition)

## 1. 프로젝트 목적 (Purpose)
본 프로젝트는 서울소방의 데이터 기반 재난 대응 체계를 지원하기 위해, 파편화된 기술 지식과 연구 자료를 한곳에 모으고 AI 어시스턴트를 통해 실시간 인사이트를 제공하는 **프리미엄 지식 아카이브 플랫폼**을 구축하는 것을 목적으로 합니다.

---

## 2. 사용자 시나리오 (User Personas & Stories)

### 2.1. 사용자 페르소나
- **김소방 (30대, 현장 대원)**: "구조 현장에서 사용했던 특수 장비의 효율성을 기록하고 동료들과 공유하고 싶어요."
- **이연구 (40대, 기술 연구원)**: "최신 AI 기반 화재 감지 알고리즘이 실제 현장에서 어떻게 적용되는지 기술 트렌드를 분석하고 싶어요."

### 2.2. 핵심 사용자 흐름 (User Flows)
1. **지식 탐색**: 홈 화면 접속 -> 최신 연구 자료 확인 -> 관심 있는 카드 클릭 -> 마크다운 형식의 상세 기술 내용 열람.
2. **지식 공유**: '글쓰기' 버튼 클릭 -> 이미지 업로드(자동 압축) -> 본문 작성(Markdown) -> 게시물 등록 -> 실시간 목록 업데이트.
3. **AI 상담**: 우측 하단 챗봇 클릭 -> 소방 기술 질문 입력 -> Gemini AI 엔진의 전문 답변 수신.

---

## 3. 기능 상세 사양 (Functional Specifications)

### 3.1. 게시물 관리 시스템 (Advanced CMS)
- **데이터 모델 (Schema)**:
  - `id`: UUID (Primary Key)
  - `category`: ENUM ('RESEARCH', 'NEWS', 'NOTICE', 'BOARD')
  - `title`: String (Max 200 chars)
  - `content`: Text (Markdown Support)
  - `image_url`: String (Supabase Storage Public URL)
  - `tags`: Array of Strings
  - `author`: String
  - `date`: Date (ISO 8601)
- **에디터 기능**:
  - `react-markdown`을 활용한 실시간 프리뷰 지원.
  - 마크다운 문법을 통한 코드 블록, 인용구, 강조 기능 지원.

### 3.2. 이미지 엔진 (Image Optimization Engine)
- **압축 로직**: 
  - `canvas.toBlob`을 사용하여 클라이언트 사이드 압축.
  - JPEG 포맷, 품질 0.4 설정.
  - 해상도는 가로/세로 최대 1200px (16:9 또는 1:1 대응).
- **스토리지 연동**:
  - Supabase Storage `images` 버킷 내 `post-images/` 경로 저장.
  - 유니크 파일명 생성: `[random-hash]-[timestamp].[ext]`.

### 3.3. AI 어시스턴트 (Intelligent Chat)
- **LLM 엔진**: Google Gemini 1.5 Flash (속도 및 성능 최적화).
- **시스템 프롬프트 (Context)**: 
  - "당신은 서울소방의 전문 지식 어시스턴트입니다. 전문적이고 신뢰감 있는 어조로 소방 관련 지식을 답변하세요."
  - 기술적 용어 사용 권장 및 출처가 불분명한 정보에 대한 경계 알림 포함.

---

## 4. UI/UX 디자인 요구사항 (Design System)

### 4.1. 비주얼 컨셉: "Modern Heroism"
- **Color Palette**:
  - `Primary`: #E31B23 (서울소방 Red - 신뢰와 열정)
  - `Secondary`: #0F172A (Slate 900 - 기술적 전문성)
  - `Accent`: #F8FAFC (Slate 50 - 깨끗하고 넓은 공간감)
- **Typography**:
  - `Headings`: 'Pretendard', 'Inter' (Bold/Black, Tracking -2%)
  - `Body`: 'Pretendard' (Regular/Medium, Line Height 1.6)

### 4.2. 주요 인터랙션 UI (Vibe-Coding Specs)
- **Glassmorphism**: 모달 창 및 사이드바에 `backdrop-blur-xl` 및 `bg-white/80` 적용.
- **Micro-Animations**:
  - 게시물 카드 호버 시 `scale-105` 및 `shadow-2xl` 전환.
  - 페이지 전환 시 `framer-motion`을 활용한 부드러운 페이드 인/아웃.
  - 로딩 시 전용 스피너 및 스켈레톤 UI 제공.

---

## 5. 기술적 제약 및 보안 (Tech Specs & Security)

### 5.1. 보안 아키텍처 (Supabase RLS)
- **Posts Table Policy**:
  - `SELECT`: Anyone (Anonymous)
  - `INSERT/UPDATE/DELETE`: Anyone (Anonymous - 초기 개발 목적) -> 추후 `auth.uid()` 기반으로 제한 예정.
- **Storage Policy**:
  - `images` 버킷에 대한 Public Read 및 Anonymous Write 권한 부여 (SQL Policy 적용).

### 5.2. 성능 목표
- **이미지 업로드 시간**: 2초 내외 (압축 로직 포함).
- **Lighthouse 점수**: Performance 90+, Accessibility 95+, Best Practices 100 목표.
- **SEO**: Meta Tags(Title, Description), Semantic HTML5 구조 준수.

---

## 6. 개발 단계별 마일스톤 (Development Roadmap)

1.  **Stage 1: Core Infra (완료)**
    - Supabase 설정, 기본 CRUD 연동, 이미지 압축 및 스토리지 업로드 최적화.
2.  **Stage 2: AI & UX Polish (진행 예정)**
    - Gemini 채팅 고도화, 사이트 전반의 마이크로 애니메이션 추가, 다크 모드(Optional) 지원.
3.  **Stage 3: Advanced Search & Community (미래)**
    - 벡터 유사도 기반 검색, 게시물 댓글 및 좋아요 기능, 대원 로그인 시스템 연동.
