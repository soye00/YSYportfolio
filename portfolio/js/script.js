// 햄버거 메뉴
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navMenu.classList.toggle('hidden');
});

// 네비게이션 메뉴 링크 클릭 시 동작
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
        navMenu.classList.remove('active');
        navMenu.classList.add('hidden');
    });
});

// 프로젝트 정보
const projects = [
    {
        title: "개인 포트폴리오 웹 사이트",
        date: "2025.07 (1명)",
        summary: `<ul style="list-style-type: disc; padding-left: 1.5em; margin-top: 0.5rem">
                <li>HTML, Tailwind CSS, JavaScript를 활용해 반응형 포트폴리오 웹사이트를 직접 설계 및 구현</li>
                <li>Scroll 이벤트 기반의 맨 위로 이동 버튼, 모달 팝업(README/이미지 슬라이더) 등 다양한 사용자 편의 기능 포함</li>
                <li>프로젝트 데이터를 JavaScript 객체로 관리하여 동적으로 프로젝트 카드 생성 및 모달 제어 기능 구현</li>                
                <li>Vercel을 통한 정적 사이트 배포</li>
            </ul>`,
        readme: `
                <h3 class="text-xl font-semibold">💡 주요 기능</h3>
                <ul>
                    <li>반응형 레이아웃: Tailwind CSS를 활용해 모바일/PC 화면에 모두 대응</li>
                    <li>프로젝트 목록 렌더링: JavaScript 객체 배열을 이용한 동적 생성</li>
                    <li>모달 기능: README 및 이미지 슬라이더 팝업 구현</li>
                    <li>Scroll To Top 버튼: 스크롤 위치 감지하여 버튼 표시 및 부드러운 이동 처리</li>
                </ul>
                <h3 class="text-xl font-semibold">📝 Meaning</h3>
                <p>프로젝트를 소개하고 기술 역량을 정리할 수 있는 공간이 필요하다고 느껴 직접 사이트를 구현 했습니다. 구조부터 전부 직접 설계하며 반응형 레이아웃, DOM 조작, 모달 구현 등 프론트엔드 기본기를 복습할 수 있는 계기가 되었습니다.</p>
                <p>특히 프로젝트 정보를 하드코딩하지 않고 JavaScript 객체로 관리하고 이를 기반으로 화면을 렌더링하면서 재사용성과 유지보수 측면에서도 구조화된 접근을 시도했습니다.</p>
                <p>기능적으로는 scroll 이벤트, 모달, 슬라이더 구현 등 실제 사용자 경험을 고려한 인터랙션을 적용해보았고 이를 통해 JS 이벤트 흐름과 DOM 조작에 대한 이해도를 높일 수 있었습니다.</p>                
               
            `,
        images: ["images/p7.png", "images/p7-1.png", "images/p7-2.png", "images/p7-3.png", "images/p7-4.png", "images/p7-5.png",
                "images/p7-6.png"],
        link: "https://yunsoyeon-portfolio.vercel.app/",
        tech: "HTML5, Tailwind CSS, JavaScript, GitHub, Vercel"
    },
    {
        title: "ICECARE : 제빙기 청소 업체 웹&앱 서비스",
        date: "2025.06 ~ 2025.07 (4명 풀스택)",
        summary: `<ul style="list-style-type: disc; padding-left: 1.5em; margin-top: 0.5rem">
                <li>Node.js와 Express 기반의 제빙기 청소 예약 서비스 풀스택 개발</li>
                <li>고객용 서비스의 로그인, 회원가입, 예약 등록·조회·관리 UI 전반을 Nunjucks + Bootstrap으로 구현</li>
                <li>Supabase를 활용한 사용자/예약 정보 CRUD 및 푸시 알림 구독·전송 기능 구현</li>
                <li>프론트·백엔드를 직접 설계 및 연결하며 실무 수준의 전체 서비스 흐름을 경험</li>
                <li>Cloudtype을 통한 서버 배포, GitHub/SourceTree로 협업 및 버전 관리 진행</li>
            </ul>`,
        readme: `
                <h3 class="text-xl font-semibold">💡 주요 기능</h3>
                <ul>
                    <li>로그인 / 회원가입: 3단계 UI, 주소 검색, Web Push 구독 포함</li>
                    <li>예약 등록: 주소 자동 입력, 날짜·시간 선택, 유효성 검사</li>
                    <li>예약 조회 / 상세 보기: 상태별 탭, 기사 정보 표시, 취소/결제 처리</li>
                    <li>푸시 알림: Web Push API + VAPID 키 기반 푸시 전송</li>
                    <li>내 정보 관리: 프로필 및 비밀번호 수정 기능</li>
                </ul>
                <h3 class="text-xl font-semibold">📝 Meaning</h3>
                <p>처음으로 프론트엔드와 백엔드를 직접 설계하고 연결해보며 단순한 기능 구현을 넘어 서비스 전반의 흐름을 설계하고 이해하는 경험을 할 수 있었습니다. 특히 UI/UX를 기획하고 구성하는 과정에서는 사용자 관점에서의 불편함을 고려하며 화면을 설계하려고 노력했으며 그 과정에서 사용자 경험(UX)의 중요성과 이를 반영한 컴포넌트 구조 설계에 대해 고민해볼 수 있었습니다.</p>
                <p>또한 Web Push 알림 기능, 주소 검색 API, 비동기 통신 처리 등 실무에서 자주 활용되는 기능들을 직접 구현하며 실질적인 사용자 편의 기능의 기술적 구현 방식을 익힐 수 있었습니다. 이 과정에서 서버와의 비동기 데이터 흐름, 로딩 처리, 예외 처리에 대한 이해도 함께 높일 수 있었습니다.</p>
                <p>더불어 입력 유효성 검사, 사용자 인증과 권한 처리, 데이터의 클라이언트–서버 간 흐름 제어 등 보안과 관련된 부분들을 신경 쓰며 작업한 경험은 단순한 UI 개발을 넘어서 풀스택 개발자로서의 실무 감각을 키우는 데 큰 도움이 되었습니다.</p>
                <p>무엇보다도 이 프로젝트를 통해 화면 단위의 구현이 아닌 실제 사용자의 서비스 흐름 전체를 고려한 설계 경험을 쌓을 수 있었고 이를 바탕으로 서비스를 구조적으로 바라보는 시야를 넓힐 수 있었습니다.</p>
                <h3 class="text-xl font-semibold">⚙️ 환경 변수 설정</h3>
                <pre class="bg-gray-100 rounded p-12 text-sm text-gray-800 overflow-x-auto">
SUPABASE_URL=https://********
SUPABASE_ANON_KEY=********
SESSION_SECRET=********
NODE_ENV=production</pre>
            `,
        images: ["images/p6.png", "images/p6-1.png", "images/p6-2.png", "images/p6-3.png", "images/p6-4.png",
            "images/p6-5.png", "images/p6-6.png", "images/p6-7.png", "images/p6-8.png", "images/p6-9.png",
            "images/p6-10.png", "images/p6-11.png", "images/p6-12.png"],
        link: "https://port-0-icemobile-manaowvf213a09cd.sel4.cloudtype.app/",
        tech: "Node.js, Express, Nunjucks, Bootstrap, JavaScript, HTML5, CSS3, Axios, Supabase, Cloudtype, GitHub, SourceTree"
    },
    {
        title: "STARBUS : 실시간 대구 버스 정보 제공 웹&앱 서비스",
        date: "2025.05 ~ 2025.06 (4명 프론트엔드)",
        summary: `<ul style="list-style-type: disc; padding-left: 1.5em; margin-top: 0.5rem">
                <li>정류장 검색, 즐겨찾기 관리, 버스 도착 정보 확인, 지도 표시 기능 구현</li>
                <li>대구 버스 API·Kakao Maps API 연동으로 실시간 데이터 시각화 처리</li>
                <li>디바운싱, 로딩 처리, 자동 갱신 로직 등을 통해 사용자 경험 최적화</li>
                <li>localStorage로 즐겨찾기 상태 관리</li>
                <li>Vercel을 통한 배포 및 GitHub/SourceTree로 버전 관리 및 협업 진행</li>
            </ul>`,
        readme: `
                <h3 class="text-xl font-semibold">💡 주요 기능</h3>
                <ul>
                    <li>정류장 검색: 디바운싱 적용으로 검색 성능 최적화</li>
                    <li>즐겨찾기 관리: localStorage를 활용한 사용자별 저장</li>
                    <li>버스 도착 정보: 대구 버스 API로 실시간 데이터 표시</li>
                    <li>지도 표시: Kakao Maps API를 통한 정류장 위치 시각화</li>
                    <li>자동 갱신: 실시간 데이터 새로고침 로직 구현</li>
                </ul>
                <h3 class="text-xl font-semibold">📝 Meaning</h3>
                <p>다양한 외부 API(Kakao Maps, 대구 버스 정보)를 직접 연동하며 실시간 데이터를 활용한 서비스를 처음으로 구현해보았습니다.
                   공공 데이터를 실제 사용자 경험에 적용해보는 과정에서 API 호출, 비동기 처리, 상태 관리의 중요성을 실감할 수 있었습니다.</p>
                <p>특히 검색 기능에는 디바운싱 기법을 적용하고 도착 정보 갱신에는 자동 새로고침 로직을 도입하는 등 프론트엔드 성능 최적화를 고려한 UI/UX 개선을 집중적으로 고민해볼 수 있었습니다.</p>
                <p>사용자별 즐겨찾기 데이터를 localStorage를 통해 관리하면서 클라이언트 측 데이터 저장 방식에 대해 더 깊이 이해할 수 있었고 로그인 없이도 개인화된 정보를 제공하는 방법을 설계할 수 있었습니다.</p>
                <p>검색, 도착 정보, 지도, 즐겨찾기 기능을 유기적으로 연결하는 화면 흐름을 직접 설계하면서 실제 사용자 관점에서 필요한 정보와 흐름이 무엇인지 고민하는 경험을 할 수 있었습니다.
                   기술 구현뿐 아니라 정보 구조와 사용자 동선에 대한 고려도 함께 이루어진 의미 있는 프로젝트였습니다.</p>
                <h3 class="text-xl font-semibold">⚙️ 환경 변수 설정</h3>
                <pre class="bg-gray-100 rounded p-4 text-sm text-gray-800 overflow-x-auto">
# 카카오맵 키
VITE_KAKAO_API_KEY=7785********

#supabase 키
VITE_SUPABASE_URL=https://********
VITE_SUPABASE_ANON_KEY=********

#전국(TAGO) 정류소 키
VITE_TAGO_ENC_KEY=l7L9HOYK5********
VITE_TAGO_DEC_KEY=l7L9HOYK5********

#대구버스정보시스템 키
VITE_DAEGU_ENC_KEY=l7L9HOYK5m********
VITE_DAEGU_DEC_KEY=l7L9HOYK5m********
</pre>
            `,
        images: ["images/p5.png", "images/p5-1.png", "images/p5-2.png", "images/p5-3.png", "images/p5-4.png",
            "images/p5-5.png", "images/p5-6.png", "images/p5-7.png", "images/p5-8.png", "images/p5-9.png"],
        link: "https://public-traffic-alpha.vercel.app/",
        tech: "React, CSS3, JavaScript, Axios, Ant.design, Vercel, GitHub, SourceTree"
    },
    {
        title: "ICECARE : 제빙기 청소 업체 관리자용 웹사이트",
        date: "2025.04 ~ 2025.05 (4명 프론트엔드)",
        summary: `<ul style="list-style-type: disc; padding-left: 1.5em; margin-top: 0.5rem">
                <li>React와 Ant Design으로 개발한 예약 관리 시스템</li>
                <li>예약 등록/수정/조회/검색/통계 등 예약 전반을 관리하는 통합 인터페이스 설계</li>
                <li>반응형 레이아웃, 폼 검증, 자동 계산, 필터링 기능 등을 포함한 사용자 중심 UI 구현</li>
                <li>Supabase와 연동하여 예약 데이터 CRUD 로직 구현 및 실시간 상태 관리</li>
                <li>Vercel을 통한 배포 및 GitHub/SourceTree로 버전 관리 및 협업 진행</li>
            </ul>`,
        readme: `
                <h3 class="text-xl font-semibold">💡 주요 기능</h3>
                <ul>
                    <li>예약 관리: 등록, 수정, 삭제, 조회 기능</li>
                    <li>검색 및 필터링: 날짜, 상태별 예약 검색</li>
                    <li>통계 대시보드: 예약 상태 및 통계 시각화</li>
                    <li>폼 검증: 사용자 입력 유효성 검사</li>
                </ul>
                <h3 class="text-xl font-semibold">📝 Meaning</h3>
                <p>React와 Ant Design을 활용해 예약 등록부터 수정, 조회, 통계까지 하나의 흐름으로 연결되는 통합 예약 관리 UI를 직접 설계하고 구현해보았습니다. 각 화면과 기능이 유기적으로 작동하도록 구조화하는 과정에서 프론트엔드 설계 능력과 화면 구성에 대한 직관을 키울 수 있었습니다.</p>
                <p>또한 사용자 편의를 고려해 입력 폼 자동화, 유효성 검사, 반응형 레이아웃, 자동 계산, 인라인 수정 기능을 적용하면서 다양한 프론트엔드 기술들을 실제로 적용해볼 수 있었습니다. 특히 예약 날짜 제한, 연락처 포맷팅, 용량에 따른 자동 계산 등의 기능 구현은 사용자 중심의 UI/UX 설계 경험으로 이어졌습니다.</p>
                <p>예약 상태와 흐름을 직관적으로 보여주기 위해 통계 대시보드와 테이블 필터링 UI를 구성하며 데이터 시각화와 관리 효율성을 모두 고려한 설계를 시도했습니다. 예약 상태별 통계를 한눈에 파악할 수 있도록 카드를 배치하고 아이콘을 함께 사용하는 방식으로 시각적인 명확성을 높일 수 있었습니다.</p>
                <p>Supabase를 활용해 예약 데이터를 실시간으로 저장하고 불러오는 과정을 직접 구현하면서 서버리스 백엔드와 클라이언트 간의 데이터 흐름을 이해하고 오류 처리 및 상태 관리를 함께 다루는 경험도 쌓을 수 있었습니다.</p>
                <p>전반적으로 이 프로젝트를 통해 단순한 CRUD를 넘어 실제 서비스의 흐름을 고려한 구조적 UI/UX 설계, 프론트엔드 퍼포먼스 최적화, 데이터 흐름 관리까지 다양한 영역의 개발 역량을 통합적으로 키울 수 있었습니다.</p>
                <h3 class="text-xl font-semibold">⚙️ Usage</h3>
                <pre class="bg-gray-100 rounded p-4 text-sm text-gray-800 overflow-x-auto">
ID : admin
PW : admin!!!!
</pre>
            `,
        images: ["images/p4.png","images/p4-1.png", "images/p4-2.png"],
        link: "https://ice-care-admin.vercel.app/",
        tech: "React, CSS3, JavaScript, SupaBase, Ant.design, Vercel, GitHub, SourceTree"
    },
    {
        title: "ICECARE : 제빙기 청소 업체 고객용 웹사이트",
        date: "2025.03 ~ 2025.04 (4명 프론트엔드)",
        summary: `<ul style="list-style-type: disc; padding-left: 1.5em; margin-top: 0.5rem">
                <li>예약 날짜/시간 선택, 주소 검색(Daum API), 예약 확인 모달 등 직관적인 예약 UI 설계</li>
                <li>예약 내역 조회 화면과 입력 폼을 통해 사용자 편의성 강화</li>
                <li>Supabase와 연동하여 예약 정보 저장 및 조회 기능 구현</li>
                <li>GitHub & SourceTree를 활용해 협업과 버전 관리 경험</li>
            </ul>`,
        readme: `
                <h3 class="text-xl font-semibold">💡 주요 기능</h3>
                <ul>
                    <li>예약 등록: 날짜·시간 선택, 주소 검색(Daum API), 개인정보 동의 포함</li>
                    <li>예약 조회/수정: 연락처 기반 내역 조회</li>
                    <li>데이터 연동: Supabase로 예약 저장·조회 및 입력값 검증 처리</li>
                </ul>
                <h3 class="text-xl font-semibold">📝 Meaning</h3>
                <p>Supabase를 이용하여 프론트엔드와 DB 간의 데이터 흐름을 직접 설계하고 연동해 보면서 단순한 화면 구현을 넘어서 실제 서비스형 웹 개발에 필요한 데이터 처리 및 상태 관리의 기초를 경험했습니다.</p>
                <p>또한 폼 검증 로직 및 입력 데이터 포맷팅(예: 전화번호 하이픈 자동 삽입)을 직접 구현함으로써 사용자 입력 데이터의 신뢰성을 높이는 개발 방식에 대한 감을 익힐 수 있었습니다.</p>
                <p>무엇보다 기획–UI 구현–데이터 연동까지 전반적인 제작 과정을 실습하면서 기획력과 구현력, 문제 해결력을 종합적으로 키울 수 있던 프로젝트였습니다.</p>
            `,
        images: ["images/p3.png", "images/p3-1.png", "images/p3-2.png", "images/p3-3.png", "images/p3-4.png", "images/p3-5.png"],
        link: "https://haracedaily.github.io/renew_ice_clean/",
        tech: "HTML5, CSS3, JavaScript, SupaBase, GitHub, SourceTree"
    },
    {
        title: "위드고 고객용 웹사이트",
        date: "2025.02 ~ 2025.03 (4명 프론트엔드)",
        summary: `<ul style="list-style-type: disc; padding-left: 1.5em; margin-top: 0.5rem">
                <li>주의사항 및 이용 규정을 아이콘 중심으로 직관적으로 안내</li>
                <li>애니메이션 및 인터랙션 요소로 사용자 집중도 향상</li>
                <li>GitHub & SourceTree를 활용한 버전 관리 경험</li>
            </ul>`,
        readme: `
                <h3 class="text-xl font-semibold">💡 주요 기능</h3>
                <ul>
                    <li>서비스 소개 UI: 서비스 흐름 안내, 아이콘 기반 정보 전달, Top 버튼 및 애니메이션 적용</li>
                </ul>
                <h3 class="text-xl font-semibold">📝 Meaning</h3>
                <p>서비스 흐름과 주의사항을 시각적으로 명확하게 전달하여 사용자 이해도를 높일 수 있었고 실제 사용자 반응을 고려한 인터페이스 설계의 중요성을 체감했습니다.</p>
                <p>또한 애니메이션과 인터랙션 요소를 적용하면서 사용자 몰입감을 유도하는 효과적인 표현 방식을 학습했습니다.</p>
            `,
        images: ["images/p2.png", "images/p2-1.png", "images/p2-2.png", "images/p2-3.png", "images/p2-4.png",
            "images/p2-5.png", "images/p2-6.png", "images/p2-7.png"],
        link: "https://cjo3o.github.io/p2-jim/index.html",
        tech: "HTML5, CSS3, JavaScript, GitHub, SourceTree"
    },
    {
        title: "꼬박2 가계부 어플",
        date: "2025.01 ~ 2025.02 (3명 프론트엔드)",
        summary: `<ul style="list-style-type: disc; padding-left: 1.5em; margin-top: 0.5rem">
                <li>로그인, 수입/지출 입력, 카테고리 설정, 잠금 설정 등 화면 UI 구현</li>
                <li>사용자 플로우와 시각적 일관성을 고려한 화면 흐름 및 디자인 설계</li>
                <li>실제 기능 없이도 UX 관점에서 레이아웃, 컬러, 아이콘 등을 세밀하게 구성</li>
                <li>사용자 중심 UI 설계의 중요성 학습</li>
            </ul>`,
        readme: `
                <h3 class="text-xl font-semibold">📝 Meaning</h3>
                <p>이번 프로젝트를 통해 단순히 예쁜 UI를 만드는 것 이상으로 사용자 플로우를 고려한 화면 설계의 중요성을 배웠습니다.</p>
                <p>사용자 관점에서의 일관된 흐름과 인터페이스 구성은 전체 사용 경험에 큰 영향을 미친다는 것을 체감했습니다.</p>
                <p>로그인이나 화면 잠금 같은 민감한 기능의 경우 시각적인 안정감과 신뢰를 주는 UI가 중요하다는 사실도 알게 되었고 이를 위해 컬러 톤, 아이콘 스타일, 여백 등 세부적인 디자인 요소를 조율하는 반복적인 과정을 경험하며 실력을 키울 수 있었습니다.</p>
                <p>전체적으로 사용자의 입장에서 기능을 상상하며 설계하는 연습이 되었고 이는 향후 실제 개발 프로젝트에서도 매우 유용한 자산이 될 것이라 느꼈습니다.</p>
            `,
        images: ["images/p1.png","images/p1-1.png","images/p1-2.png","images/p1-3.png", "images/p1-4.png",
            "images/p1-5.png", "images/p1-6.png", "images/p1-7.png","images/p1-8.png","images/p1-9.png"],
        link: "https://soye00.github.io/my-tests/p1/p1-firstpg.html",
        tech: "HTML5, CSS3, GitHub"
    }
];

// 카드 렌더링
const projectList = document.getElementById('project-list');
projectList.innerHTML = '';
projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'bg-white p-6 rounded-lg shadow-md project-card flex flex-col items-start';
    projectCard.setAttribute('data-index', index);
    projectCard.innerHTML = `
            <img src="${project.images[0]}" alt="${project.title}" class="project-img mb-4 w-full h-40 object-cover rounded">
            <h3 class="text-xl font-bold mb-1 text-left w-full">${project.title}</h3>
            <div class="mb-1 text-left w-full text-gray-700">${project.date}</div>
            <div class="mb-2 text-left w-full text-gray-800">${project.summary}</div>
            <div class="mb-4 text-left w-full flex items-center gap-2">
                <span class='inline-block align-middle' style="height: 2em; border-left: 3px solid #3b82f6; margin-right: 8px;"></span>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="break-all text-blue-600 hover:underline">${project.link}</a>
            </div>
            <div class="mb-6 w-full">
                <span class='bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-medium w-full inline-block'>${project.tech}</span>
            </div>
            <div class="flex w-full gap-2 mb-2">
                <button class="readme-btn custom-btn border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white" data-index="${index}">README</button>
                <button class="image-btn custom-btn border-gray-500 text-gray-700 hover:bg-gray-500 hover:text-white" data-index="${index}">이미지</button>
            </div>
        `;
    projectList.appendChild(projectCard);
});

// 모달 열릴 때 배경 스크롤 차단
function disableBodyScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
}

// 모달 닫힐 때 배경 스크롤 복구
function enableBodyScroll() {
    document.body.style.overflow = '';
    document.body.style.height = '';
}

// README 모달 동작
const readmeModal = document.getElementById('readme-modal');
const readmeModalTitle = document.getElementById('readme-modal-title');
const readmeModalDate = document.getElementById('readme-modal-date');
const readmeModalLink = document.getElementById('readme-modal-link');
const readmeModalSummary = document.getElementById('readme-modal-summary');
const readmeModalDescription = document.getElementById('readme-modal-description');
const readmeModalTech = document.getElementById('readme-modal-tech');
document.querySelectorAll('.readme-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const idx = btn.getAttribute('data-index');
        const project = projects[idx];
        readmeModalTitle.textContent = project.title;
        readmeModalDate.textContent = project.date;
        readmeModalLink.href = project.link;
        readmeModalLink.textContent = project.link;
        readmeModalSummary.innerHTML = project.summary;
        readmeModalDescription.innerHTML = project.readme;
        readmeModalTech.textContent = project.tech;
        readmeModal.style.display = 'flex';
        disableBodyScroll();
    });
});
document.querySelector('.modal-close-readme').addEventListener('click', () => {
    readmeModal.style.display = 'none';
    enableBodyScroll();
});
readmeModal.addEventListener('click', (e) => {
    if (e.target === readmeModal) {
        readmeModal.style.display = 'none';
        enableBodyScroll();
    }
});

// 이미지 슬라이더 모달 동작
const imageModal = document.getElementById('image-modal');
const sliderImage = document.getElementById('slider-image');
const sliderCount = document.getElementById('slider-count');
let currentSliderIdx = 0;
let currentProjectImages = [];

document.querySelectorAll('.image-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const idx = btn.getAttribute('data-index');
        currentProjectImages = projects[idx].images;
        currentSliderIdx = 0;
        updateSlider();
        imageModal.style.display = 'flex';
        disableBodyScroll();
    });
});

function updateSlider() {
    if (currentProjectImages.length === 0) return;
    sliderImage.src = currentProjectImages[currentSliderIdx];
    sliderCount.textContent = `${currentSliderIdx + 1} / ${currentProjectImages.length}`;
}

document.getElementById('prev-image').addEventListener('click', () => {
    currentSliderIdx = (currentSliderIdx - 1 + currentProjectImages.length) % currentProjectImages.length;
    updateSlider();
});

document.getElementById('next-image').addEventListener('click', () => {
    currentSliderIdx = (currentSliderIdx + 1) % currentProjectImages.length;
    updateSlider();
});

document.querySelector('.modal-close-image').addEventListener('click', () => {
    imageModal.style.display = 'none';
    enableBodyScroll();
});

imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.style.display = 'none';
        enableBodyScroll();
    }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (readmeModal.style.display === 'flex') {
            readmeModal.style.display = 'none';
            enableBodyScroll();
        }
        if (imageModal.style.display === 'flex') {
            imageModal.style.display = 'none';
            enableBodyScroll();
        }
    }
});

// 탑 버튼
const topBtn = document.getElementById('top-btn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        topBtn.style.display = 'flex';
    } else {
        topBtn.style.display = 'none';
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 스타일 추가
if (!document.getElementById('custom-btn-style')) {
    const style = document.createElement('style');
    style.id = 'custom-btn-style';
    style.innerHTML = `
        .custom-btn {
            background: #fff;
            border-width: 2px;
            border-style: solid;
            border-radius: 0.5rem;
            padding: 0.25rem 0.75rem;
            font-weight: 500;
            font-size: 0.95rem;
            min-width: 70px;
            transition: background 0.2s, color 0.2s;
        }
        .custom-btn:focus {
            outline: none;
            box-shadow: 0 0 0 2px #3b82f6;
        }
        .readme-btn:hover {
            background: #3b82f6 !important;
            color: #fff !important;
            border-color: #3b82f6 !important;
        }
        .image-btn:hover {
            background: #6b7280 !important;
            color: #fff !important;
            border-color: #6b7280 !important;
        }
        `;
    document.head.appendChild(style);
}

// 카드 호버 효과 제거
if (!document.getElementById('no-card-hover-style')) {
    const style = document.createElement('style');
    style.id = 'no-card-hover-style';
    style.innerHTML = `
        .project-card {
            box-shadow: none !important;
            border: none !important;
            background: #fff !important;
            transition: none !important;
        }
        `;
    document.head.appendChild(style);
}