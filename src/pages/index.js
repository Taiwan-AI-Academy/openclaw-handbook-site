import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ChatDemo, ChatBubble } from '../components/ChatBubble';

const highlights = [
  {
    title: '🌏 國際研討會議程推薦',
    path: '/docs/information/conference-agenda',
    tag: '資訊',
    platform: 'line',
    chat: [
      { from: 'user', text: '我要去參加 AI 研討會，幾百場 sessions，幫我篩選跟 AI 教育和 Safety 相關的' },
      { from: 'bot', text: '已篩選出 20 場推薦！按時間排序，標記⭐強烈推薦，涵蓋教育/人才/政策/Safety 五大領域 🦐' },
    ],
  },
  {
    title: '🎬 課程宣傳影片製作',
    path: '/docs/development/promo-video',
    tag: '開發',
    platform: 'gchat',
    chat: [
      { from: 'user', text: '幫我做一支課程宣傳影片，40 秒左右，要有動態效果和背景音樂' },
      { from: 'bot', text: 'V2 完成 ✅ 加入更多知識亮點、加快節奏、新增背景音樂，6 段場景結構完整！' },
    ],
  },
  {
    title: '💒 互動喜帖網頁',
    path: '/docs/development/wedding-card',
    tag: '開發',
    platform: 'gchat',
    chat: [
      { from: 'user', text: '幫我做一個互動式電子喜帖網頁，要有信封打開的動畫效果' },
      { from: 'bot', text: '完成了！信封飛入動畫、翻蓋打開、喜帖升起翻轉、花瓣特效、RSVP 表單全都有 ✅' },
    ],
  },
  {
    title: '📝 社群貼文撰寫',
    path: '/docs/communication/social-media-post',
    tag: '通訊',
    platform: 'gchat',
    chat: [
      { from: 'user', text: '幫我寫一篇 FB 貼文，介紹我們團隊用 AI 助手的實際案例' },
      { from: 'bot', text: '幫你寫好了！涵蓋行事曆提醒、會議記錄、輿情監控等場景，要調整語氣長度跟我說！' },
    ],
  },
];

const categories = [
  { name: 'Google Workspace', icon: '🔧', count: 4, desc: 'OAuth 授權、Sheets 讀取、行事曆提醒、Gmail 自動回覆', path: '/docs/category/-google-workspace' },
  { name: '資訊查詢', icon: '📡', count: 5, desc: '天氣交通、生命靈數、食譜、新聞摘要、安全審查', path: '/docs/category/-資訊查詢' },
  { name: '自動化', icon: '⚡', count: 7, desc: '輿情監控、會議轉錄、NotebookLM、排程任務', path: '/docs/category/-自動化' },
  { name: '開發', icon: '💻', count: 3, desc: '課程網站建置、互動喜帖網頁、宣傳影片製作', path: '/docs/category/-開發' },
  { name: '通訊', icon: '💬', count: 3, desc: 'LINE 語音訊息、跨平台溝通、社群貼文撰寫', path: '/docs/category/-通訊' },
  { name: '娛樂', icon: '🎮', count: 1, desc: 'LINE 五子棋對戰遊戲', path: '/docs/category/-娛樂' },
];

function HighlightCard({ title, path, tag, platform, chat }) {
  return (
    <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        border: '1px solid var(--ifm-color-emphasis-200)',
        borderRadius: '16px',
        padding: '1.5rem',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        background: 'var(--ifm-background-surface-color)',
        height: '100%',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = 'var(--ifm-color-primary)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)'; }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{title}</h3>
          <span style={{
            background: 'var(--ifm-color-primary-lightest)',
            color: 'var(--ifm-color-primary-darkest)',
            borderRadius: '20px',
            padding: '2px 10px',
            fontSize: '0.75rem',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}>{tag}</span>
        </div>
        <div style={{ pointerEvents: 'none' }}>
          <ChatDemo platform={platform}>
            {chat.map((msg, i) => (
              <ChatBubble key={i} from={msg.from}>{msg.text}</ChatBubble>
            ))}
          </ChatDemo>
        </div>
      </div>
    </Link>
  );
}

function CategoryCard({ name, icon, count, desc, path }) {
  return (
    <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        border: '1px solid var(--ifm-color-emphasis-200)',
        borderRadius: '12px',
        padding: '1.2rem',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        background: 'var(--ifm-background-surface-color)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.08)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
      >
        <div style={{ fontSize: '2rem', flexShrink: 0 }}>{icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0 }}>{name}</h4>
            <span style={{
              background: 'var(--ifm-color-emphasis-100)',
              borderRadius: '12px',
              padding: '1px 8px',
              fontSize: '0.75rem',
              color: 'var(--ifm-color-emphasis-700)',
            }}>{count}</span>
          </div>
          <p style={{ margin: '4px 0 0', color: 'var(--ifm-color-emphasis-600)', fontSize: '0.85rem' }}>{desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout title="首頁" description="AI 助手的實戰應用案例集">
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        padding: '5rem 2rem 4rem',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>🦐</div>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '0.5rem', color: '#fff' }}>AIA蝦蝦 應用手冊</h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
          團隊 AI 助手的實戰應用案例集<br/>
          <span style={{ fontSize: '1rem', opacity: 0.8 }}>5 大分類 · 16 個真實案例 · 持續更新中</span>
        </p>
        <Link
          to="/docs/category/-google-workspace"
          style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.2)',
            color: '#fff',
            padding: '12px 32px',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: 600,
            textDecoration: 'none',
            border: '2px solid rgba(255,255,255,0.4)',
            transition: 'all 0.2s',
          }}
        >
          瀏覽所有案例 →
        </Link>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Highlights */}
        <div style={{ padding: '3rem 0 2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '0.3rem' }}>⭐ 精選案例</h2>
          <p style={{ textAlign: 'center', color: 'var(--ifm-color-emphasis-600)', marginBottom: '2rem' }}>
            最新的三個應用場景
          </p>
          <div className="highlights-grid">
            {highlights.map((h) => (
              <HighlightCard key={h.title} {...h} />
            ))}
          </div>
        </div>

        {/* Categories */}
        <div style={{ padding: '2rem 0 4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '0.3rem' }}>📂 所有分類</h2>
          <p style={{ textAlign: 'center', color: 'var(--ifm-color-emphasis-600)', marginBottom: '2rem' }}>
            依功能分類瀏覽全部案例
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1rem',
          }}>
            {categories.map((cat) => (
              <CategoryCard key={cat.name} {...cat} />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          marginBottom: '3rem',
          background: 'var(--ifm-color-emphasis-100)',
          borderRadius: '16px',
        }}>
          <p style={{ fontSize: '1.1rem', margin: '0 0 0.5rem' }}>
            💡 有新的應用案例？蝦蝦會自動更新這本手冊！
          </p>
          <p style={{ color: 'var(--ifm-color-emphasis-600)', margin: 0, fontSize: '0.9rem' }}>
            在任何平台跟蝦蝦互動，精彩案例都會被收錄進來
          </p>
        </div>
      </div>
    </Layout>
  );
}
