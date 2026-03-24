# SoMa Community

> SW마에스트로 17기(ASM17) 팀빌딩을 위해 만든 작은 커뮤니티 앱입니다.
>
> 대면 팀빌딩 전에 지원자들이 면접 일정, GitHub, 자기소개 Notion 링크를 미리 공유하고, 같은 면접 맥락의 사람들을 더 빨리 파악할 수 있으면 좋겠다는 문제에서 시작했습니다.
>
> 아직 큰 플랫폼이 아니라, 실제 팀빌딩 흐름을 먼저 풀기 위해 만든 초기 버전입니다.

영문 README는 [README_eng.md](README_eng.md)에서 볼 수 있습니다.

## 왜 만들었나요

SW Maestro 17 팀빌딩은 실제로 시기가 정해져 있고, 그 전에 사람을 파악해야 하는 문제입니다.

하지만 오프라인에서 만나기 전에는 누가 어떤 사람인지 판단할 수 있는 정보가 거의 없습니다. 대부분은 이름, 짧은 소개, 혹은 채팅방에 공유된 GitHub 링크 정도만 보고 팀원을 가늠하게 됩니다.

이 프로젝트는 아래 문제의식에서 시작했습니다.

> 직접 만나기 전에 지원자들이 면접 일정, GitHub, 자기소개 링크를 공유하고, 같은 면접 맥락의 사람들을 미리 볼 수 있다면 팀빌딩이 훨씬 쉬워지지 않을까?

SoMa Community는 이 아이디어를 작고 실제로 쓸 수 있는 제품 형태로 옮겨보려는 시도입니다.

제 creator PR 페이지도 여기에 포함되어 있지만, 그것이 제품 전체는 아닙니다. creator PR 페이지는 팀빌딩 흐름 안에 들어 있는 하나의 화면이고, 중심은 커뮤니티 앱 자체입니다.

## 지금 사용자가 할 수 있는 것

- 회원가입하고 로그인하기
- 면접 날짜와 시작 시간 등 면접 관련 정보 입력하기
- GitHub 링크 추가하기
- 자기소개 Notion 링크 추가하기
- 같은 면접 맥락에 있는 사람들 확인하기
- 팀빌딩 전에 가능한 팀원을 더 빠르게 파악하기
- creator PR / 소개 페이지 열람하기

## 현재 핵심 사용 흐름

1. 사용자가 회원가입합니다.
2. 면접 날짜, 시작 시간, 슬롯 관련 정보를 입력합니다.
3. GitHub 링크와 자기소개 Notion 링크를 추가합니다.
4. 시스템이 사용자를 하나의 면접 맥락에 배치합니다.
5. 사용자는 팀빌딩 전에 같은 면접 맥락의 다른 사람들을 봅니다.
6. 그 정보를 바탕으로 실제로 이야기해볼 만한 사람을 더 빨리 판단합니다.

## 주요 기능

- 이메일 회원가입, 로그인, PIN 재설정
- SW Maestro 17 지원자를 위한 면접 일정 입력
- GitHub 프로필 링크 입력
- 자기소개 Notion 링크 입력
- 같은 면접 맥락의 사람들을 보는 대시보드 / 슬롯 기반 탐색
- 제품 제작자의 creator PR / introduction 페이지
- 상세 멤버 보기 접근을 위한 관리자 승인 플로우
- 한국어 / 영어 UI 지원

## 앞으로의 방향

현재 범위는 의도적으로 좁게 잡았습니다.

지금 목표는 팀빌딩 전에 사람을 더 잘 파악하게 만드는 것입니다. 아직 다듬어진 대규모 커뮤니티 플랫폼은 아닙니다.

만약 충분한 사용자가 모이고, 프로필 데이터가 어느 정도 쌓인다면 다음 단계로는 아래 방향을 생각하고 있습니다.

- 비전이나 방향성이 비슷한 사람을 추천하는 AI 보조 기능
- 더 나은 팀빌딩 후보 탐색과 shortlist 지원
- creator 페이지를 넘어서는 참가자 프로필 화면 확장

이 항목들은 로드맵 아이디어이며, 현재 완성된 기능은 아닙니다.

## 기술 스택

| 레이어    | 기술                                                                      |
| --------- | ------------------------------------------------------------------------- |
| Frontend  | React 19, React Router v7, TypeScript, Tailwind CSS, Vite                 |
| Backend   | FastAPI, SQLAlchemy, Supabase Postgres                                    |
| AI Worker | Python, LangGraph, Claude API (`claude-haiku-4-5`) — 이후 실험용으로 유지 |
| Tooling   | Nx, pnpm, uv                                                              |
| Infra     | Docker Compose                                                            |

주요 디렉터리:

- `apps/frontend` — 커뮤니티 UI, 대시보드, 검증 플로우, creator PR 페이지
- `apps/backend` — 인증, 검증, 대시보드, 관리자, persona API
- `apps/ai-worker` — 이후 AI 기능 실험을 위한 레거시 / 실험용 워커
- `infrastructure/terraform` — 인프라 관련 작업 공간

## 로컬 개발 / 실행 방법

### 준비물

- Node `24.11.0`
- Python `3.11.15`
- `pnpm`
- `uv`
- Docker 선택 사항

### 최초 설정

```bash
git clone <repo-url>
cd 260309_persona-mirror
node scripts/setup-dev.mjs
```

초기 설정 이후에는 아래 명령을 사용합니다.

```bash
pnpm setup
```

### 환경 변수

`apps/frontend/.env`, `apps/backend/.env`는 필요할 때 `.env.example`을 기반으로 생성됩니다.

백엔드와 AI 워커를 사용하려면 다음 값을 채워야 합니다.

```text
DATABASE_URL=...
ANTHROPIC_API_KEY=...
RESEND_API_KEY=...   # optional
```

AI 워커를 쓴다면 `apps/backend/.env`와 `apps/ai-worker/.env`에 같은 `DATABASE_URL`을 넣어야 합니다.

### 로컬 실행

```bash
pnpm dev
```

주요 로컬 주소:

- Frontend: `http://localhost:3000`
- 메인 진입 화면: `http://localhost:3000/seoul/dashboard`
- Creator PR 페이지: `http://localhost:3000/persona/sejong`
- Backend API 문서: `http://localhost:8000/docs`

### Docker 실행

```bash
pnpm docker
pnpm docker:logs
pnpm docker:down
```

### 품질 확인

```bash
pnpm test:backend
pnpm lint
pnpm format
```

## 데모 / 화면

아직 정리된 스크린샷은 저장소에 포함되어 있지 않습니다.

지금은 아래 경로로 직접 확인하는 것이 가장 빠릅니다.

- `http://localhost:3000/seoul/dashboard` — 메인 커뮤니티 / 면접 맥락 탐색 흐름
- `http://localhost:3000/persona/sejong` — 제품 안에 포함된 creator PR 페이지
- `http://localhost:8000/docs` — 백엔드 API 문서
