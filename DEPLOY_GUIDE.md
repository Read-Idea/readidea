# readidea 배포 가이드

## ⚠️ 중요 주의사항

### 1. CNAME 파일 보호
**절대 CNAME 파일을 삭제하거나 수정하지 마세요!**
- 이 파일은 커스텀 도메인 설정을 위한 것입니다
- Push 전에 항상 `git pull`을 먼저 실행하세요

### 2. 폴더 구조 주의
**readidea 폴더 자체를 업로드하면 안됩니다!**

✅ **올바른 구조:**
```
https://github.com/Read-Idea/readidea (루트)
├── CNAME
├── index.html
├── script.js
├── styles.css
└── ...
```

❌ **잘못된 구조:**
```
https://github.com/Read-Idea/readidea
└── readidea/    # 폴더가 생기면 안됨!
    ├── index.html
    └── ...
```

## 📋 Push 전 체크리스트

```bash
# 1. readidea 디렉토리로 이동
cd /Users/ieungyu/readidea

# 2. 원격 변경사항 가져오기 (CNAME 보존)
git pull origin main

# 3. 변경사항 확인
git status

# 4. 파일 추가
git add .

# 5. 커밋
git commit -m "설명 메시지"

# 6. Push
git push origin main
```

## 🔐 GitHub 인증

Personal Access Token이 필요합니다:
- https://github.com/settings/tokens 에서 생성
- 권한: `repo` 전체 체크
- 생성된 토큰을 안전한 곳에 보관

## 📁 프로젝트 정보

- **GitHub 계정**: Read-Idea
- **저장소**: https://github.com/Read-Idea/readidea
- **웹사이트**: https://read-idea.github.io/readidea/
- **타입**: 정적 웹사이트 (HTML, CSS, JS만)

## 🎨 기술 스택

- HTML5
- CSS3 (블랙 & 화이트 미니멀 디자인)
- Vanilla JavaScript
- 폰트:
  - **영어**: Myriad Pro
  - **한글**: 나눔스퀘어 (NanumSquare)
  - CDN: https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css

## 📱 연락처

- Email: contact@readidea.com
- Phone: 010-XXXX-XXXX
- Location: 서울특별시
- KakaoTalk: https://open.kakao.com/o/sKysmdZh

## 🚀 GitHub Pages 설정

1. https://github.com/Read-Idea/readidea/settings/pages
2. Source: `main` 브랜치, `/ (root)` 폴더
3. Save 클릭

## 💡 일반적인 작업

### 파일 수정 후 배포
```bash
cd /Users/ieungyu/readidea
git pull origin main
# 파일 수정...
git add .
git commit -m "업데이트 내용"
git push origin main
```

### 새 컴퓨터에서 시작
```bash
git clone https://github.com/Read-Idea/readidea.git
cd readidea
# Personal Access Token 설정 필요
```

## 🛠️ 문제 해결

### Push 거부 (fetch first)
```bash
git pull origin main
git push origin main
```

### CNAME 파일 복구
```bash
git fetch origin
git checkout origin/main -- CNAME
git commit -m "Restore CNAME"
git push origin main
```

---
**마지막 업데이트**: 2024년 10월 28일
