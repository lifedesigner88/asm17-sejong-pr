# CHANGELOG

이 문서는 학습/개발 진행 내역을 단계별로 기록한다.

## 2026-03-09

### Step 1. Repository Bootstrapping
- 무엇:
  - Git 저장소 초기화 및 첫 커밋 생성
  - `README.md`, `AGENTS.md` 작성
  - GitHub 원격(`lifedesigner88/260309_persona-mirror`) 연결 및 `main` 푸시
- 왜:
  - 프로젝트 기준 문서와 협업 규칙을 먼저 고정해 이후 구현의 일관성을 확보하기 위해
- 결과:
  - `main` 브랜치가 원격과 동기화됨
  - 루트에 기준 문서 2종이 준비됨

### Step 2. Git Workflow Definition
- 무엇:
  - `README.md`에 `Git Workflow (Learning Mode)` 섹션 추가
  - `AGENTS.md`에 Git Workflow 준수 규칙 추가
- 왜:
  - 학습 단위별 브랜치 전략(`main`, `feat/*`, `study/*`)을 명확히 하기 위해
- 결과:
  - 브랜치/커밋 운영 기준이 문서화됨

### Step 3. Phase 0 Skeleton (on `feat/phase0-project-bootstrap`)
- 무엇:
  - 프로젝트 기본 디렉토리 생성:
    - `apps/frontend`, `apps/backend`, `apps/ai-worker`
    - `libs/shared-interfaces`, `libs/ai-models`, `libs/ui-components`
    - `infrastructure/terraform`
  - 기본 설정 파일 추가:
    - `.gitignore`, `.nvmrc(22)`, `.python-version(3.11)`
    - `docker-compose.yml` 초안
    - `nx.json` 초안
  - 디렉토리 안내 문서 추가:
    - `apps/README.md`, `libs/README.md`, `infrastructure/README.md`
  - `README.md` Phase 0 체크리스트 일부 완료 처리
- 왜:
  - Nx/FastAPI/Frontend 실제 스캐폴딩 전에 경로/역할/런타임 기준을 고정하기 위해
- 결과:
  - 부트스트랩 커밋 생성:
    - `597a324 feat(bootstrap): add phase0 project skeleton and base configs`

### Step 4. Parallel Learning Workspace
- 무엇:
  - Git worktree 생성:
    - `/home/sejong/new_project` -> `feat/phase0-project-bootstrap`
    - `/home/sejong/new_project-main` -> `main`
- 왜:
  - 참고 코드와 따라치기 코드를 별도 창에서 병렬 학습하기 위해
- 결과:
  - VS Code에서 두 작업 폴더를 동시에 운영 가능한 상태가 됨

