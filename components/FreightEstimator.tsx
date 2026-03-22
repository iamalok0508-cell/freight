"use client";

import { useState, useRef, useEffect } from "react";
import { estimateFreight, ROUTES, type EstimateResult } from "@/lib/data";
import styles from "./FreightEstimator.module.css";

function formatINR(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

function ConfidencePill({ level }: { level: "high" | "medium" | "low" }) {
  const map = {
    high: { label: "Exact match", color: "#b8f562", bg: "rgba(184,245,98,0.12)" },
    medium: { label: "High confidence", color: "#6ef0c0", bg: "rgba(110,240,192,0.12)" },
    low: { label: "Estimated", color: "#f5c842", bg: "rgba(245,200,66,0.12)" },
  };
  const c = map[level];
  return (
    <span style={{ background: c.bg, color: c.color, fontSize: 11, fontWeight: 600, fontFamily: "var(--mono)", letterSpacing: "0.1em", padding: "3px 10px", borderRadius: 20, textTransform: "uppercase" }}>
      {c.label}
    </span>
  );
}

function StatCard({ label, value, sub, accent }: { label: string; value: string; sub?: string; accent?: boolean }) {
  return (
    <div className={styles.statCard} data-accent={accent}>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statValue} data-accent={accent}>{value}</div>
      {sub && <div className={styles.statSub}>{sub}</div>}
    </div>
  );
}

export default function FreightEstimator() {
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<EstimateResult | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("recent_pincodes");
    if (saved) setRecentSearches(JSON.parse(saved));
  }, []);

  function saveRecent(pin: string) {
    const updated = [pin, ...recentSearches.filter((p) => p !== pin)].slice(0, 6);
    setRecentSearches(updated);
    localStorage.setItem("recent_pincodes", JSON.stringify(updated));
  }

  function handleSearch(pin?: string) {
    const target = (pin || pincode).trim();
    if (target.length !== 6 || !/^\d{6}$/.test(target)) {
      setError("Please enter a valid 6-digit pincode");
      return;
    }
    setError("");
    setLoading(true);
    setSearched(false);

    // Simulate brief loading for UX
    setTimeout(() => {
      const res = estimateFreight(target);
      if (!res) {
        setError("Could not estimate cost for this pincode. Try a nearby pincode.");
        setResult(null);
      } else {
        setResult(res);
        saveRecent(target);
      }
      setLoading(false);
      setSearched(true);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 600);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

  function handlePincodeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
    setPincode(val);
    setError("");
    if (val.length < 6) { setResult(null); setSearched(false); }
  }

  // Stats for homepage
  const totalRoutes = ROUTES.length;
  const states = new Set(ROUTES.map((r) => r.state)).size;
  const maxDist = Math.max(...ROUTES.map((r) => r.distanceKm));

  return (
    <div className={styles.page}>
      {/* Ambient background */}
      <div className={styles.ambientTop} />
      <div className={styles.ambientBottom} />

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logoRow}>
          <span className={styles.logoDot} />
          <span className={styles.logoText}>Duraxia Industries · Dabaspet</span>
        </div>
        <h1 className={styles.h1}>
          Freight <span className={styles.accentText}>Cost</span>
          <br />Estimator
        </h1>
        <p className={styles.subtitle}>
          Enter any delivery pincode — get an instant freight estimate
          <br />based on {totalRoutes} real shipments across {states} states
        </p>
      </header>

      {/* Search card */}
      <div className={styles.searchCard}>
        <label className={styles.inputLabel}>Delivery Pincode</label>
        <div className={styles.inputRow}>
          <div className={styles.inputWrap}>
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              placeholder="e.g. 500001"
              value={pincode}
              onChange={handlePincodeChange}
              onKeyDown={handleKeyDown}
              className={styles.pincodeInput}
              maxLength={6}
              autoFocus
            />
            {pincode.length > 0 && (
              <span className={styles.charCount}>{pincode.length}/6</span>
            )}
          </div>
          <button
            className={styles.searchBtn}
            onClick={() => handleSearch()}
            disabled={loading || pincode.length !== 6}
          >
            {loading ? (
              <span className={styles.spinner} />
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="m11 11 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Estimate
              </>
            )}
          </button>
        </div>

        {error && (
          <p className={styles.errorMsg}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#f56262" strokeWidth="1.3" />
              <path d="M7 4v3M7 9.5v.5" stroke="#f56262" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            {error}
          </p>
        )}

        {/* Quick examples */}
        <div className={styles.quickRow}>
          <span className={styles.quickLabel}>Quick examples:</span>
          {["500001", "625001", "411001", "600001", "560001"].map((pin) => (
            <button key={pin} className={styles.quickChip} onClick={() => { setPincode(pin); handleSearch(pin); }}>
              {pin}
            </button>
          ))}
        </div>

        {/* Recent searches */}
        {recentSearches.length > 0 && (
          <div className={styles.recentRow}>
            <span className={styles.quickLabel}>Recent:</span>
            {recentSearches.map((pin) => (
              <button key={pin} className={styles.recentChip} onClick={() => { setPincode(pin); handleSearch(pin); }}>
                {pin}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Result */}
      {searched && result && (
        <div className={styles.resultSection} ref={resultRef}>
          {/* Destination header */}
          <div className={styles.resultHeader}>
            <div>
              <div className={styles.resultDestRow}>
                <span className={styles.resultDest}>{result.destination}</span>
                <ConfidencePill level={result.confidence} />
              </div>
              <div className={styles.resultMeta}>
                <span className={styles.metaPin}>📍 {result.pincode}</span>
                <span className={styles.metaDot}>·</span>
                <span>{result.state}</span>
                <span className={styles.metaDot}>·</span>
                <span>~{result.distanceKm.toLocaleString()} km from factory</span>
              </div>
            </div>
          </div>

          {/* Main cost display */}
          <div className={styles.costBanner}>
            <div className={styles.costLabel}>Estimated freight cost</div>
            <div className={styles.costAmount}>{formatINR(result.estimatedCost)}</div>
            <div className={styles.costRange}>
              Range: {formatINR(result.minCost)} — {formatINR(result.maxCost)}
            </div>
          </div>

          {/* Stats grid */}
          <div className={styles.statsGrid}>
            <StatCard label="Distance" value={`${result.distanceKm.toLocaleString()} km`} sub="road estimate" />
            <StatCard label="Rate per km" value={`₹${result.ratePerKm}`} sub="avg from history" />
            <StatCard label="Suggested vehicle" value={result.vehicleSuggestion} />
            <StatCard label="Min cost" value={formatINR(result.minCost)} sub="lower bound" />
            <StatCard label="Max cost" value={formatINR(result.maxCost)} sub="upper bound" />
            <StatCard
              label="Confidence"
              value={result.confidence === "high" ? "High" : result.confidence === "medium" ? "Medium" : "Low"}
              sub={result.type === "exact" ? "exact match" : result.type === "nearby" ? "nearby route" : "interpolated"}
              accent={result.confidence === "high"}
            />
          </div>

          {/* Note */}
          <div className={styles.noteBox}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
              <circle cx="7" cy="7" r="6" stroke="#6ef0c0" strokeWidth="1.3" />
              <path d="M7 6v4M7 4.5V4" stroke="#6ef0c0" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <span>{result.note}</span>
          </div>

          {/* Similar routes table */}
          {result.similarRoutes.length > 0 && (
            <div className={styles.similarSection}>
              <div className={styles.sectionTitle}>
                {result.type === "exact" ? "All shipments to this pincode" : "Nearest reference routes"}
              </div>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Destination</th>
                      <th>Pincode</th>
                      <th>Vehicle</th>
                      <th className={styles.numCol}>Distance</th>
                      <th className={styles.numCol}>Cost</th>
                      <th className={styles.numCol}>₹/km</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.similarRoutes.map((r, i) => (
                      <tr key={i} className={r.pincode === result.pincode ? styles.highlightRow : ""}>
                        <td>{r.destination}</td>
                        <td><span className={styles.monoText}>{r.pincode}</span></td>
                        <td><span className={styles.vehicleTag}>{r.vehicleType}</span></td>
                        <td className={styles.numCol}>{r.distanceKm.toLocaleString()} km</td>
                        <td className={styles.numCol}>{formatINR(r.cost)}</td>
                        <td className={styles.numCol}>
                          <span className={styles.rateTag}>₹{r.ratePerKm}</span>
                        </td>
                        <td><span className={styles.dateText}>{r.date}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* New search button */}
          <button className={styles.newSearchBtn} onClick={() => { setResult(null); setSearched(false); setPincode(""); inputRef.current?.focus(); }}>
            ← Search another pincode
          </button>
        </div>
      )}

      {/* All routes mini browser */}
      {!searched && (
        <AllRoutes onSelect={(pin) => { setPincode(pin); handleSearch(pin); }} />
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        <span>Duraxia Industries · Dabaspet, Nelamangala · 562111</span>
        <span className={styles.footerDot}>·</span>
        <span>Data from Cosmo Carrying shipments</span>
      </footer>
    </div>
  );
}

function AllRoutes({ onSelect }: { onSelect: (pin: string) => void }) {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState<"cost" | "distance" | "rate">("distance");

  const filtered = ROUTES
    .filter((r) =>
      r.destination.toLowerCase().includes(filter.toLowerCase()) ||
      r.pincode.includes(filter) ||
      r.state.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "cost") return a.cost - b.cost;
      if (sort === "distance") return a.distanceKm - b.distanceKm;
      return a.ratePerKm - b.ratePerKm;
    });

  return (
    <div className={styles.allRoutes}>
      <div className={styles.allRoutesHeader}>
        <div className={styles.sectionTitle}>All known routes</div>
        <div className={styles.allRoutesControls}>
          <input
            type="text"
            placeholder="Search destination, state, pincode…"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={styles.filterInput}
          />
          <div className={styles.sortBtns}>
            {(["distance", "cost", "rate"] as const).map((s) => (
              <button key={s} className={sort === s ? styles.sortBtnActive : styles.sortBtn} onClick={() => setSort(s)}>
                {s === "rate" ? "₹/km" : s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.routeGrid}>
        {filtered.map((r, i) => (
          <button key={i} className={styles.routeCard} onClick={() => onSelect(r.pincode)}>
            <div className={styles.routeCardTop}>
              <span className={styles.routeCardDest}>{r.destination}</span>
              <span className={r.approved ? styles.approvedDot : styles.pendingDot} title={r.approved ? "Approved" : "Pending"} />
            </div>
            <div className={styles.routeCardState}>{r.state}</div>
            <div className={styles.routeCardMeta}>
              <span className={styles.monoText} style={{ fontSize: 11 }}>{r.pincode}</span>
              <span>·</span>
              <span>{r.distanceKm} km</span>
            </div>
            <div className={styles.routeCardCost}>
              <span className={styles.routeCardCostVal}>₹{(r.cost / 1000).toFixed(0)}k</span>
              <span className={styles.routeCardRate}>₹{r.ratePerKm}/km</span>
            </div>
          </button>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className={styles.noResults}>No routes match "{filter}"</div>
      )}
    </div>
  );
}
