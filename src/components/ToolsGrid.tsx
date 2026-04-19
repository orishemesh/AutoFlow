type ToolIcon =
  | { kind: 'img'; src: string; alt: string }
  | { kind: 'svg'; title: string; svg: React.ReactNode };

const tools: ToolIcon[] = [
  { kind: 'img', src: 'https://cdn.simpleicons.org/gmail/EA4335', alt: 'Gmail' },
  { kind: 'img', src: 'https://cdn.simpleicons.org/mailchimp/FFE01B', alt: 'Mailchimp' },
  { kind: 'img', src: 'https://cdn.simpleicons.org/googlesheets/34A853', alt: 'Google Sheets' },
  {
    kind: 'svg',
    title: 'Slack',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-label="Slack">
        <path fill="#E01E5A" d="M8.843 14.131a1.354 1.354 0 0 1-2.708 0v-1.354h1.354a1.354 1.354 0 0 1 1.354 1.354zm-.677-3.392a1.354 1.354 0 0 0 0-2.708H4.774a1.354 1.354 0 0 0 0 2.708z" />
        <path fill="#E01E5A" d="M9.52 14.131a1.354 1.354 0 0 0 2.708 0v-3.392a1.354 1.354 0 0 0-2.708 0z" />
        <path fill="#36C5F0" d="M10.874 8.843a1.354 1.354 0 0 1 0-2.708H12.228V7.489a1.354 1.354 0 0 1-1.354 1.354zm3.392-.677a1.354 1.354 0 0 0 0-2.708H10.874a1.354 1.354 0 0 0 0 2.708z" />
        <path fill="#36C5F0" d="M10.874 9.52a1.354 1.354 0 0 0-2.708 0v3.392a1.354 1.354 0 0 0 2.708 0z" />
        <path fill="#2EB67D" d="M16.518 10.874a1.354 1.354 0 0 1 2.708 0v1.354h-1.354a1.354 1.354 0 0 1-1.354-1.354zm.677 3.392a1.354 1.354 0 0 0 0 2.708h3.391a1.354 1.354 0 0 0 0-2.708z" />
        <path fill="#2EB67D" d="M15.841 10.874a1.354 1.354 0 0 0-2.708 0v3.392a1.354 1.354 0 0 0 2.708 0z" />
        <path fill="#ECB22E" d="M15.157 16.518a1.354 1.354 0 0 1 0 2.708h-1.354v-1.354a1.354 1.354 0 0 1 1.354-1.354zm-3.392.677a1.354 1.354 0 0 0 0 2.708h3.392a1.354 1.354 0 0 0 0-2.708z" />
        <path fill="#ECB22E" d="M14.48 15.841a1.354 1.354 0 0 0 2.708 0v-3.392a1.354 1.354 0 0 0-2.708 0z" />
      </svg>
    ),
  },
  { kind: 'img', src: 'https://cdn.simpleicons.org/facebook/1877F2', alt: 'Facebook' },
  { kind: 'img', src: 'https://cdn.simpleicons.org/googlecalendar/4285F4', alt: 'Google Calendar' },
  {
    kind: 'svg',
    title: 'OpenAI',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" aria-label="OpenAI">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387 2.006-1.162a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.398-.669zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  { kind: 'img', src: 'https://cdn.simpleicons.org/mysql/4479A1', alt: 'MySQL' },
  { kind: 'img', src: 'https://cdn.simpleicons.org/cashapp/00C244', alt: 'Cash App' },
  { kind: 'img', src: 'https://cdn.simpleicons.org/whatsapp/25D366', alt: 'WhatsApp' },
  { kind: 'img', src: 'https://cdn.simpleicons.org/n8n/EA4B71', alt: 'n8n' },
  { kind: 'img', src: 'https://cdn.simpleicons.org/instagram/E4405F', alt: 'Instagram' },
  { kind: 'img', src: 'https://cdn.simpleicons.org/airtable/18BFFF', alt: 'Airtable' },
  { kind: 'img', src: 'https://cdn.simpleicons.org/asana/F06A6A', alt: 'Asana' },
  { kind: 'img', src: 'https://cdn.simpleicons.org/discord/5865F2', alt: 'Discord' },
  { kind: 'img', src: 'https://cdn.simpleicons.org/postgresql/4169E1', alt: 'PostgreSQL' },
];

export default function ToolsGrid() {
  return (
    <section id="tools" aria-labelledby="tools-heading">
      <div className="container">
        <header className="section-header fade-up">
          <span className="section-tag">אינטגרציות</span>
          <h2
            className="section-title"
            id="tools-heading"
            style={{ color: 'var(--deep-indigo)' }}
          >
            עובד עם הכלים שכבר יש לך
          </h2>
          <p className="section-subtitle">כל הוורקפלואים מוכנים לחיבור מיידי</p>
        </header>
        <div className="tools-grid fade-up">
          {tools.map((tool, i) =>
            tool.kind === 'img' ? (
              <div key={i} className="tool-card">
                <img src={tool.src} alt={tool.alt} loading="lazy" />
              </div>
            ) : (
              <div key={i} className="tool-card" title={tool.title}>
                {tool.svg}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
