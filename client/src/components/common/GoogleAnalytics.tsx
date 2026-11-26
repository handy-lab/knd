import Script from "next/script";

// 구글 애널리틱스 4 측정 태그(gtag.js 표준 코드).
// 방문자 공개 화면 레이아웃((public)/layout.tsx)에서만 쓴다. 관리자 화면(/cms)에는 넣지 않는다.
const GA_MEASUREMENT_ID = "G-8RRSYWK2TQ";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
