import { Check, ChevronDown, Copy } from "lucide-react";
import { useCallback, useState } from "react";

const installCommand = "curl -fsSL https://www.solana.new/setup.sh | bash";

const navGroups = ["Products", "Solutions", "Resources"];
const navLinks = ["Blog", "Pricing", "Careers"];
const toolChips = ["MCP", "CLI", "TypeScript SDK", "Rust SDK", "LaserStream", "Webhooks"];

function HeliusMark() {
  return (
    <a className="brand" href="/" aria-label="Helius home">
      <span className="brand__mark" aria-hidden="true">
        <span />
      </span>
      <span className="brand__text">HELIUS</span>
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <nav className="site-header__rail" aria-label="Primary navigation">
        <HeliusMark />

        <div className="nav-menu" aria-label="Product navigation">
          {navGroups.map((item) => (
            <button className="nav-menu__button" type="button" key={item}>
              <span>{item}</span>
              <ChevronDown size={12} strokeWidth={1.8} aria-hidden="true" />
            </button>
          ))}

          {navLinks.map((item) => (
            <a href="/" className="nav-menu__link" key={item}>
              {item}
            </a>
          ))}

          <a className="nav-menu__stake" href="/" aria-label="Stake, 6.01 percent yield">
            <span>Stake</span>
            <strong>6.01%</strong>
          </a>
        </div>

        <div className="header-actions" aria-label="Account and documentation">
          <a className="button button--ghost" href="/">
            Docs
          </a>
          <a className="button button--primary" href="/">
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
}

function CommandBlock() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  const copyCommand = useCallback(async () => {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(installCommand);
      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), 1800);
    } catch {
      setCopyStatus("error");
      window.setTimeout(() => setCopyStatus("idle"), 1800);
    }
  }, []);

  return (
    <div className="command-wrap">
      <div className="command-panel">
        <div className="command-panel__bar">
          <div className="window-dots" aria-hidden="true">
            <span className="window-dots__dot window-dots__dot--active" />
            <span className="window-dots__dot" />
            <span className="window-dots__dot" />
          </div>
          <span className="command-panel__label">INSTALL COMMAND</span>
          <button
            className="copy-button"
            type="button"
            onClick={copyCommand}
            aria-label={copyStatus === "copied" ? "Install command copied" : "Copy install command"}
          >
            {copyStatus === "copied" ? (
              <Check size={21} strokeWidth={1.7} aria-hidden="true" />
            ) : (
              <Copy size={21} strokeWidth={1.7} aria-hidden="true" />
            )}
          </button>
          <span className="sr-only" role="status">
            {copyStatus === "copied" ? "Install command copied." : null}
            {copyStatus === "error" ? "Install command could not be copied." : null}
          </span>
        </div>
        <pre className="command-line" aria-label={`Install command: ${installCommand}`}>
          <code>
            <span aria-hidden="true">$ </span>
            {installCommand}
          </code>
        </pre>
      </div>

      <div className="command-meta">
        <p>using Helius MCP, CLI, SDKs, and webhooks</p>
        <div className="mini-chip-row" aria-label="Primary tooling">
          <span>MCP</span>
          <span>CLI</span>
          <span>SDK</span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <main className="hero-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__label">
          <span aria-hidden="true" />
          <p>PRIVATE SPL TRANSACTION INFRASTRUCTURE</p>
        </div>

        <div className="hero__copy">
          <h1 id="hero-title">Become invisible</h1>
          <p>
            The Private Payments API builds unsigned SPL token transactions for deposits,
            transfers, withdrawals, swaps, and mint initialization across Solana.
          </p>
        </div>

        <CommandBlock />

        <div className="tool-strip" aria-label="Supported Helius tools">
          {toolChips.map((tool) => (
            <span className="tool-chip" key={tool}>
              {tool}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
    </div>
  );
}
