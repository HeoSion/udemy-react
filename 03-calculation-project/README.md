# 💰 투자 계산기 (Investment Calculator)

React를 사용하여 만든 간단한 투자 수익 계산기입니다.

![alt text](image.png)

## ✨ 주요 기능

- **사용자 입력**
  - 초기 투자량
  - 연간 투자량
  - 예상 연 수익률 (%)
  - 투자 기간 (년)
- **실시간 계산**: 입력 값이 바뀌면 결과가 즉시 갱신됨
- **결과 표시**
  - 투자 종료 시점의 가치
  - 매년 발생한 이자
  - 총 이자
  - 투자 원금

## 📂 프로젝트 구조

src/  
│ App.jsx # 메인 컴포넌트  
│ index.css # 전역 스타일  
├─ assets/  
│ ├─ investment-logo.png   
│      
├─ components/  
│ ├─ Header.jsx # 상단 로고 및 제목  
│ ├─ Header.css # 헤더 스타일  
│ ├─ UserInput.jsx # 사용자 입력 폼  
│ ├─ Results.jsx # 결과 테이블  
│  
└─ util/  
└─ investment.js # 투자 결과 계산 로직
