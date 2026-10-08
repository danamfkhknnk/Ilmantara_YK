import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  F as n,
  L as r,
  N as i,
  O as a,
  P as o,
  _ as s,
  c,
  j as l,
  l as u,
  s as d,
  u as f,
  w as p,
  y as m,
  z as h,
} from "./react.CHR6xBda.mjs";
import { a as g, r as _, t as v, x as y } from "./motion.De9yD8td.mjs";
import {
  C as ee,
  E as b,
  L as x,
  R as S,
  T as C,
  U as w,
  Y as T,
  Z as E,
  _t as D,
  a as O,
  b as te,
  ct as k,
  d as ne,
  dt as re,
  ft as ie,
  gt as ae,
  h as oe,
  i as A,
  k as j,
  lt as se,
  mt as ce,
  n as le,
  o as M,
  ot as ue,
  pt as de,
  rt as fe,
  st as pe,
  w as N,
  y as me,
} from "./framer.dKj5RJCl.mjs";
import { i as he, n as ge, r as _e, t as ve } from "./MG0afWxxR.fLuX1diM.mjs";
import { n as ye, t as P } from "./LayerfolioAbout.Cg0zpMFm.mjs";
import { a as be, c as xe, i as Se, n as Ce, r as we, s as Te, t as Ee } from "./DXBcJdPa7.B57IyCzq.mjs";
import { n as De, t as F } from "./LayerfolioNumbers.CvciZhaS.mjs";
import { i as Oe, n as ke, r as I, t as Ae } from "./wfYBJOrXB.JqagdLZA.mjs";
import { n as je, t as L } from "./LayerfolioTicker.Ct6qWf3X.mjs";
import { n as Me, t as R } from "./LayerfolioPageHero.CJa02tpI.mjs";
import Ne, { t as Pe } from "./83wY5YilnHDPT6w2ScCUjiP4bWFjvEWWJ7Dlb7kpdkk.DGzN8wVW.mjs";
function Fe() {
  i(() => {
    if (typeof document > `u` || document.getElementById(`lf-fonts`)) return;
    let e = document.createElement(`link`);
    (e.id = `lf-fonts`),
      (e.rel = `stylesheet`),
      (e.href = `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap`),
      document.head.appendChild(e);
  }, []);
}
function Ie(e, t, r) {
  let [a, o] = n(r >= 0 ? r : t ? 0.6 : 0);
  return (
    i(() => {
      if (t || h === void 0) return;
      let n = 0,
        r = () => {
          n = 0;
          let t = e.current;
          if (!t) return;
          let r = t.getBoundingClientRect(),
            i = h.innerHeight || 900,
            a = U((i - r.top) / (i + r.height));
          o((e) => (Math.abs(e - a) < 0.001 ? e : a));
        },
        i = () => {
          n ||= requestAnimationFrame(r);
        };
      return (
        r(),
        h.addEventListener(`scroll`, i, { passive: !0 }),
        h.addEventListener(`resize`, i),
        () => {
          h.removeEventListener(`scroll`, i), h.removeEventListener(`resize`, i), n && cancelAnimationFrame(n);
        }
      );
    }, [t]),
    a
  );
}
function Le() {
  return u(`style`, { children: K });
}
function Re({ n: e, t, color: n }) {
  return f(`div`, {
    className: `lf-kick`,
    style: n ? { color: n } : void 0,
    children: [f(`b`, { children: [`[`, e, `]`] }), t],
  });
}
function z(e) {
  let {
      number: t = `03`,
      kicker: n = `Experience`,
      title: r = `Version history`,
      intro: i = `Nine years, four teams and one rule: sit where the problem happens before drawing anything.`,
      tools: o = q.tools.join(`, `),
      accent: s = `#4B3BFF`,
      ink: c = `#0C0C0E`,
      canvas: l = `#ECECE8`,
      previewScroll: d = -1,
    } = e,
    p =
      e.entries && e.entries.length
        ? e.entries
        : q.timeline.map((e) => ({ version: e.v, title: e.title, body: e.body, date: e.date }));
  Fe();
  let m = se() || d >= 0,
    h = a(null),
    g = Ie(h, m, d),
    _ = m ? 1 : G.out(W(g, 0.15, 0.7));
  return f(`section`, {
    className: `lftl`,
    style: { ...e.style, overflowX: `clip`, width: `100%`, background: l, color: c, fontFamily: B, "--lf-acc": s },
    children: [
      u(Le, {}),
      u(`style`, {
        children: `
            .lftl{container-type:inline-size}
            .lftl-in{max-width:1312px;margin:0 auto;padding:130px 64px;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:64px}
            .lftl-list{position:relative;padding-left:44px}
            .lftl-it{position:relative;padding:0 0 40px}
            .lftl-it:last-child{padding-bottom:0}
            .lftl-dot{position:absolute;left:-44px;top:4px;width:22px;height:22px;border-radius:22px;background:#fff;border:2px solid ${s};display:flex;align-items:center;justify-content:center;transition:background .4s,transform .4s ${H}}
            .lftl-it.on .lftl-dot{background:${s}}
            .lftl-it:hover .lftl-dot{transform:scale(1.15)}
            .lftl-card{background:rgba(255,255,255,.8);border:1px solid rgba(12,12,14,.09);border-radius:14px;padding:16px 18px;transition:transform .4s ${H},box-shadow .4s ${H}}
            .lftl-it:hover .lftl-card{transform:translateX(4px);box-shadow:0 20px 40px -30px rgba(12,12,14,.5)}
            .lftl-tools{display:flex;flex-wrap:wrap;gap:6px;margin-top:28px}
            .lftl-tools span{display:inline-flex;align-items:center;gap:8px;font:500 13px/1 ${B};padding:9px 11px;border-radius:9px;background:#fff;box-shadow:inset 0 0 0 1px rgba(12,12,14,.08)}
            .lftl-tools span i{width:14px;height:14px;border-radius:4px;background:linear-gradient(135deg,${s},#FF5B24)}
            @container (max-width: 1000px){.lftl-in{grid-template-columns:1fr;padding:100px 32px;gap:40px}}
            @container (max-width: 640px){.lftl-in{padding:80px 20px}}
            `,
      }),
      f(`div`, {
        className: `lftl-in`,
        children: [
          f(`div`, {
            children: [
              u(Re, { n: t, t: n }),
              u(`h2`, {
                style: { margin: `18px 0 0`, font: `600 64px/.96 ${B}`, letterSpacing: `-.055em` },
                children: r,
              }),
              u(`p`, {
                style: { margin: `18px 0 0`, font: `400 18px/1.5 ${B}`, color: `rgba(12,12,14,.72)`, maxWidth: 420 },
                children: i,
              }),
              u(`div`, {
                style: {
                  font: `500 11px/1 ${V}`,
                  letterSpacing: `.05em`,
                  textTransform: `uppercase`,
                  color: `rgba(12,12,14,.5)`,
                  marginTop: 40,
                },
                children: `Tools in the file`,
              }),
              u(`div`, {
                className: `lftl-tools`,
                children: o.split(`,`).map((e) => f(`span`, { children: [u(`i`, {}), e.trim()] }, e)),
              }),
            ],
          }),
          f(`div`, {
            className: `lftl-list`,
            ref: h,
            children: [
              f(`svg`, {
                style: {
                  position: `absolute`,
                  left: 10,
                  top: 14,
                  width: 4,
                  height: `calc(100% - 28px)`,
                  overflow: `visible`,
                },
                "aria-hidden": !0,
                preserveAspectRatio: `none`,
                viewBox: `0 0 4 100`,
                children: [
                  u(`line`, {
                    x1: `1`,
                    y1: `0`,
                    x2: `1`,
                    y2: `100`,
                    stroke: `rgba(12,12,14,.12)`,
                    strokeWidth: `2`,
                    vectorEffect: `non-scaling-stroke`,
                  }),
                  u(`line`, {
                    x1: `1`,
                    y1: `0`,
                    x2: `1`,
                    y2: 100 * _,
                    stroke: s,
                    strokeWidth: `2`,
                    vectorEffect: `non-scaling-stroke`,
                  }),
                ],
              }),
              p.map((e, t) =>
                f(
                  `div`,
                  {
                    className: `lftl-it${_ * p.length > t ? ` on` : ``}`,
                    children: [
                      u(`span`, {
                        className: `lftl-dot`,
                        children:
                          t === 0 && u(`i`, { style: { width: 6, height: 6, borderRadius: 6, background: `#fff` } }),
                      }),
                      f(`div`, {
                        className: `lftl-card`,
                        children: [
                          f(`div`, {
                            style: { display: `flex`, justifyContent: `space-between`, gap: 12, alignItems: `center` },
                            children: [
                              f(`span`, {
                                style: {
                                  font: `500 11px/1 ${V}`,
                                  color: `#fff`,
                                  background: t === 0 ? s : c,
                                  padding: `5px 7px`,
                                  borderRadius: 5,
                                },
                                children: [e.version, t === 0 ? ` · current` : ``],
                              }),
                              u(`span`, {
                                style: { font: `500 11px/1 ${V}`, color: `rgba(12,12,14,.5)`, letterSpacing: `.04em` },
                                children: e.date,
                              }),
                            ],
                          }),
                          u(`h3`, {
                            style: { margin: `14px 0 0`, font: `600 24px/1.1 ${B}`, letterSpacing: `-.035em` },
                            children: e.title,
                          }),
                          u(`p`, {
                            style: { margin: `8px 0 0`, font: `400 15px/1.5 ${B}`, color: `rgba(12,12,14,.68)` },
                            children: e.body,
                          }),
                        ],
                      }),
                    ],
                  },
                  t
                )
              ),
            ],
          }),
        ],
      }),
    ],
  });
}
var B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  ze = e(() => {
    r(),
      d(),
      p(),
      w(),
      (B = `Geist, 'Inter Display', Inter, system-ui, sans-serif`),
      (V = `'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace`),
      (H = `cubic-bezier(.22,1,.36,1)`),
      (U = (e, t = 0, n = 1) => Math.min(n, Math.max(t, e))),
      (W = (e, t, n) => U((e - t) / (n - t))),
      (G = {
        out: (e) => 1 - (1 - e) ** 4,
        inOut: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - (-2 * e + 2) ** 4 / 2),
        io3: (e) => (e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2),
      }),
      (K = `
section[class^="lf"] *,footer[class^="lf"] *,header[class^="lf"] *,article[class^="lf"] *,section[class^="lf"],footer[class^="lf"],header[class^="lf"],article[class^="lf"]{box-sizing:border-box}
.lf-kick{font:500 11px/1 ${V};letter-spacing:.05em;text-transform:uppercase;color:rgba(12,12,14,.55);display:flex;align-items:center;gap:10px}
.lf-kick b{font-weight:500;color:var(--lf-acc,#4B3BFF)}
.lf-b{height:48px;padding:0 20px;border-radius:10px;display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${B};letter-spacing:-.015em;text-decoration:none;white-space:nowrap;transition:transform .35s ${H},box-shadow .35s ${H},background .2s,color .2s;cursor:pointer;border:0}
.lf-b:hover{transform:translateY(-2px);box-shadow:0 14px 26px -14px rgba(12,12,14,.55)}
.lf-b:active{transform:translateY(0) scale(.98)}
.lf-b:focus-visible,.lf-l:focus-visible{outline:2px solid var(--lf-acc,#4B3BFF);outline-offset:3px}
.lf-b.ink{background:#0C0C0E;color:#fff}.lf-b.acc{background:var(--lf-acc,#4B3BFF);color:#fff}.lf-b.ghost{background:rgba(255,255,255,.9);color:#0C0C0E;box-shadow:inset 0 0 0 1px rgba(12,12,14,.12)}
.lf-b svg{transition:transform .35s ${H}}.lf-b:hover svg{transform:translateX(3px)}
.lf-l{display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${B};letter-spacing:-.01em;text-decoration:none;color:inherit;padding-bottom:6px;border-bottom:1.5px solid currentColor;transition:gap .35s ${H},color .2s}
.lf-l:hover{gap:16px;color:var(--lf-acc,#4B3BFF)}
.lf-rv{transition:opacity .8s ${H},transform .8s ${H},filter .8s ${H}}
.lf-rv[data-seen="false"]{opacity:0;transform:translateY(18px);filter:blur(4px)}
@media (prefers-reduced-motion: reduce){.lf-rv{transition:none!important}.lf-rv[data-seen="false"]{opacity:1;transform:none;filter:none}}
`),
      (q = {
        person: {
          name: `Noor Castell`,
          first: `Noor`,
          role: `Product designer`,
          city: `Rotterdam`,
          email: `hello@noorcastell.studio`,
          availability: `Booking projects from November`,
          current: `Design lead at Orrin`,
        },
        cases: [
          {
            slug: `orrin`,
            name: `Orrin`,
            client: `Orrin Payroll`,
            year: `2026`,
            role: `Design lead`,
            duration: `14 months`,
            sector: `Fintech`,
            summary: `Payroll for freelancers, rebuilt so a monthly pay run takes four minutes instead of an afternoon.`,
            headline: `Pay your freelancers in one tap.`,
            stat1: `4 min`,
            stat1Label: `average pay run, down from 3 h`,
            stat2: `−38%`,
            stat2Label: `failed first payments`,
            stat3: `4.8`,
            stat3Label: `App Store rating, 11k reviews`,
            tags: `Fintech, iOS, Design system`,
            bg: `#111214`,
            fg: `#F4F4F0`,
            brand: `#C8F25A`,
            cardA: `€12,480.00`,
            cardASub: `Pay run ready · 14 people`,
            cardB: `Invoice #0142 paid`,
            cover: `1498050108023-c5249f4df085`,
            gallery: [`1510519138101-570d1dca3d66`, `1532896374032-fdffb11e2b8e`],
            problem: [
              `Orrin's customers are small studios that pay between five and forty freelancers a month. Every pay run meant exporting invoices, checking bank details by hand and approving each payment one at a time.`,
              `Support logged the same complaint every week: people didn't trust the total until they had checked it line by line, so a 'quick' pay run took most of an afternoon.`,
            ],
            fix: [
              `I sat in on eleven pay runs over video and timed every step. Two steps did almost all the damage: matching invoices to people, and confirming bank details that hadn't changed in months.`,
              `We replaced the invoice list with a single pay run card that shows who, how much and what changed since last month. Only the changes ask for attention; everything else is pre-checked and collapsed.`,
            ],
            outcome: [
              `The median pay run fell from three hours to four minutes. Failed first payments dropped 38% because new bank details now get a one-cent test transfer before the real one.`,
              `The pay run card became the pattern for the rest of the app, and the design system we built around it now covers 214 components across iOS and web.`,
            ],
            learned: [
              `People don't want fewer screens, they want fewer decisions. The biggest win came from deciding what not to ask, not from redrawing the interface.`,
            ],
            coverUrl: `https://framerusercontent.com/images/EyNglsC5qO5YzdL87lJoka3is2g.jpg`,
            galleryUrls: [
              `https://framerusercontent.com/images/Sxgu1H6NXNCjj1tqm1LJuFogU.jpg`,
              `https://framerusercontent.com/images/kzSGuPb7NDE6q6hY00IANVcQ.jpg`,
            ],
          },
          {
            slug: `quayside`,
            name: `Quayside`,
            client: `Quayside Clinics`,
            year: `2025`,
            role: `Lead product designer`,
            duration: `9 months`,
            sector: `Health`,
            summary: `Online booking for a chain of 23 physio clinics, designed with the receptionists who used to take every call.`,
            headline: `Book physio in under a minute.`,
            stat1: `61%`,
            stat1Label: `of bookings now online`,
            stat2: `−2,400`,
            stat2Label: `phone calls a week`,
            stat3: `23`,
            stat3Label: `clinics on one system`,
            tags: `Health, Web app, Research`,
            bg: `#E6EFEA`,
            fg: `#0D2A22`,
            brand: `#0E7C66`,
            cardA: `Tue 14:30`,
            cardASub: `Knee rehab · Dr. Ilse Brandt`,
            cardB: `3 slots left today`,
            cover: `1576091160399-112ba8d25d1d`,
            gallery: [`1579477402070-798fd86c4904`, `1552960226-639240203497`],
            problem: [
              `Every Quayside clinic took bookings by phone. Receptionists spent the first two hours of each day on hold music and callbacks, and patients who called after six had to try again tomorrow.`,
              `An earlier booking widget failed because it asked patients to choose a treatment type they didn't know the name of.`,
            ],
            fix: [
              `I spent four mornings on reception desks, listening to calls. Patients describe where it hurts, not what treatment they need. So the new flow starts with a body map and a plain question: what's bothering you?`,
              `Receptionists got a shared day view that shows online bookings arriving in real time, with one tap to move or merge them.`,
            ],
            outcome: [
              `Within six months 61% of bookings were made online, and the clinics took 2,400 fewer phone calls a week. The receptionists now spend that time with the people in the waiting room.`,
              `No-shows fell 19% after we added a one-tap reschedule link to the reminder text.`,
            ],
            learned: [
              `The best research happened at the desk, not in the interview room. Watching one real call taught me more than a week of scripted sessions.`,
            ],
            coverUrl: `https://framerusercontent.com/images/bstKOBl540dvdv6ooe65n1qE.jpg`,
            galleryUrls: [
              `https://framerusercontent.com/images/ObTZh92R59nT6xictAIIoPkqJo.jpg`,
              `https://framerusercontent.com/images/bCEdvLZdZ5nozNKc6dAcHQU8J0.jpg`,
            ],
          },
          {
            slug: `holm-and-hearth`,
            name: `Holm & Hearth`,
            client: `Holm & Hearth`,
            year: `2025`,
            role: `Product and web designer`,
            duration: `6 months`,
            sector: `E-commerce`,
            summary: `A furniture store that sold mostly in person. The new shop explains fabrics, sizes and lead times before anyone has to ask.`,
            headline: `Furniture that fits the room.`,
            stat1: `+41%`,
            stat1Label: `online revenue in six months`,
            stat2: `−27%`,
            stat2Label: `returns for wrong size`,
            stat3: `9 s`,
            stat3Label: `to find a sofa that fits`,
            tags: `E-commerce, Shopify, Art direction`,
            bg: `#EFE6DA`,
            fg: `#2B1D14`,
            brand: `#B4532A`,
            cardA: `Linnea lounge chair`,
            cardASub: `€640 · Oat bouclé · ships in 3 wk`,
            cardB: `Fits: 82 cm doorway`,
            cover: `1493809842364-78817add7ffb`,
            gallery: [`1653972233597-05822baa3c4e`, `1631125915902-d8abe9225ff2`],
            problem: [
              `Holm & Hearth's showroom staff answered the same three questions all day: will it fit, what does the fabric feel like, and when will it arrive. The website answered none of them.`,
              `Almost a third of online returns were pieces that didn't fit through a door or up a staircase.`,
            ],
            fix: [
              `We added a 'Will it fit?' check to every product: enter your narrowest doorway and see a yes or no, with the packed size. Fabric swatches ship free within two days, and lead times sit next to the price.`,
              `I art-directed a new photography set shot in real flats, not a studio, so people could judge scale against ordinary rooms.`,
            ],
            outcome: [
              `Online revenue grew 41% in six months and returns for the wrong size fell 27%. The average visitor now finds a sofa that fits in nine seconds from the filter bar.`,
              `Showroom visits went up too: people arrive having already chosen, and come in to sit on it.`,
            ],
            learned: [
              `A small, honest tool beat a big immersive one. We shelved the 3D room planner and shipped a text field that answers the question people actually asked.`,
            ],
            coverUrl: `https://framerusercontent.com/images/ujO45Z407FBRhzl7h0svDSat8U.jpg`,
            galleryUrls: [
              `https://framerusercontent.com/images/Jbn0QwkwITm2L40Pq7ikShxQ2eA.jpg`,
              `https://framerusercontent.com/images/VmwnUqPBspNu7qvocsT6ErbxOOg.jpg`,
            ],
          },
          {
            slug: `vale`,
            name: `Vale`,
            client: `Vale Huts`,
            year: `2024`,
            role: `Product designer`,
            duration: `8 months`,
            sector: `Travel`,
            summary: `Booking for 140 mountain huts across Norway, built to work on a single bar of signal at the trailhead.`,
            headline: `Your bed on the mountain, sorted.`,
            stat1: `140`,
            stat1Label: `huts bookable offline`,
            stat2: `3×`,
            stat2Label: `more mid-week stays`,
            stat3: `180 kb`,
            stat3Label: `first load on 3G`,
            tags: `Travel, Mobile, Offline-first`,
            bg: `#0E2A3B`,
            fg: `#EEF3F5`,
            brand: `#F2B233`,
            cardA: `Hut Fjellro`,
            cardASub: `3 beds left · 7.4 km from trailhead`,
            cardB: `−2° tonight · clear`,
            cover: `1464822759023-fed622ff2c3b`,
            gallery: [`1506744038136-46273834b3fb`, `1631756964162-25c8c07579b5`],
            problem: [
              `Vale's huts were booked through a patchwork of email, a phone line and a paper book in each hut. Hikers found out a hut was full only when they arrived after a seven-hour walk.`,
              `Most bookings happen on the trail, where there is one bar of signal at best.`,
            ],
            fix: [
              `We designed offline-first: the app keeps the hut list, maps and your bookings on the phone, and queues a booking until it finds signal, then confirms by text.`,
              `Every screen had a weight budget. The first load is 180 kb, and the map uses simplified vector tiles that still show every hut and river crossing.`,
            ],
            outcome: [
              `All 140 huts are now bookable offline. Mid-week stays tripled because hikers can finally see which nights are quiet.`,
              `The wardens use the same app to mark beds as taken, so the paper books have been retired.`,
            ],
            learned: [
              `Designing for the worst connection made the product better for everyone. People on fast Wi-Fi noticed the speed first.`,
            ],
            coverUrl: `https://framerusercontent.com/images/P1vzgPktRcOHNQnFLjvjfYcjPk.jpg`,
            galleryUrls: [
              `https://framerusercontent.com/images/7SOhpNY3QBBLLaPOic8yXQ00E.jpg`,
              `https://framerusercontent.com/images/inG8N3OdJfNkUKQLVfJW8hJkHSo.jpg`,
            ],
          },
          {
            slug: `kiln-audio`,
            name: `Kiln Audio`,
            client: `Kiln Audio`,
            year: `2024`,
            role: `Web and brand designer`,
            duration: `4 months`,
            sector: `Consumer hardware`,
            summary: `A launch site and store for a small headphone maker, built around a sound test you can take in the browser.`,
            headline: `Hear the difference first.`,
            stat1: `11,200`,
            stat1Label: `pre-orders in launch week`,
            stat2: `4.1%`,
            stat2Label: `store conversion rate`,
            stat3: `62%`,
            stat3Label: `took the sound test`,
            tags: `Launch, E-commerce, Brand`,
            bg: `#F2C94C`,
            fg: `#1B1406`,
            brand: `#1B1406`,
            cardA: `Kiln One`,
            cardASub: `€249 · Charcoal · ships March`,
            cardB: `Sound test: 94% match`,
            cover: `1505740420928-5e560c06d30e`,
            gallery: [`1599669454699-248893623440`, `1583394838336-acd977736f90`],
            problem: [
              `Kiln had six people, one product and a launch date. Headphones are hard to sell online because nobody can hear them, and big brands win on reviews alone.`,
              `The founders wanted to explain their tuning, but every draft read like a spec sheet.`,
            ],
            fix: [
              `We built a two-minute listening test that plays the same track through four tuning curves and asks which one you prefer. Your answer becomes a recommendation, and the page explains why in one sentence.`,
              `The site uses one bold yellow, big product photography and plain copy. Specs live behind a toggle for the people who want them.`,
            ],
            outcome: [
              `Launch week brought 11,200 pre-orders. 62% of visitors took the sound test, and they converted at twice the rate of those who didn't.`,
              `The test now runs in their pop-up shops on an iPad, so the website and the store speak with one voice.`,
            ],
            learned: [
              `Let people do the thing the product is for, even in a simplified way. One interaction beat ten paragraphs about drivers.`,
            ],
            coverUrl: `https://framerusercontent.com/images/v5NNIau0zcJfok9ssoAb9E4SuOs.jpg`,
            galleryUrls: [
              `https://framerusercontent.com/images/oxXSyO88XZOelKSNl1iEH1s2sak.jpg`,
              `https://framerusercontent.com/images/gqoFEE7Bl7SRLhsDWxuVEHu7Kc.jpg`,
            ],
          },
          {
            slug: `tessel`,
            name: `Tessel`,
            client: `Tessel Architects`,
            year: `2023`,
            role: `Design systems lead`,
            duration: `7 months`,
            sector: `Architecture`,
            summary: `A project archive and design system for a 90-person architecture practice with thirty years of drawings.`,
            headline: `Thirty years of buildings, findable.`,
            stat1: `2,300`,
            stat1Label: `projects archived and searchable`,
            stat2: `−70%`,
            stat2Label: `time spent assembling bid decks`,
            stat3: `46`,
            stat3Label: `components in the system`,
            tags: `Design system, Web, Internal tools`,
            bg: `#DCDAD5`,
            fg: `#161616`,
            brand: `#161616`,
            cardA: `Harbour Library`,
            cardASub: `2019 · Civic · 6,400 m²`,
            cardB: `12 drawings linked`,
            cover: `1569258592171-357ea26da4df`,
            gallery: [`1522743791393-522312deeebf`, `1579724175242-0204ecac28cb`],
            problem: [
              `Tessel's best work was spread across three servers, a basement of flat files and the memories of four partners. Assembling a bid deck took a week of searching.`,
              `Their public website showed twelve projects, all over ten years old.`,
            ],
            fix: [
              `We catalogued 2,300 projects with a small, strict set of fields (year, type, size, status) and built an internal archive where any drawing is two filters away.`,
              `The same components power the public site, so publishing a project is a checkbox, not a design job.`,
            ],
            outcome: [
              `Bid decks now take about a day instead of a week. The public site shows 80 current projects and brought in two competition invitations in its first year.`,
              `The design system has 46 components and a written rulebook the office actually uses.`,
            ],
            learned: [
              `A design system is a list of decisions. The components were the easy part; agreeing what 'status' means took three workshops.`,
            ],
            coverUrl: `https://framerusercontent.com/images/kcShJz4dYJymSiptkbzpYB1JF4.jpg`,
            galleryUrls: [
              `https://framerusercontent.com/images/oki7L32K8gO2FzFf2oS4jv8l6gY.jpg`,
              `https://framerusercontent.com/images/kAeoEAuqyHJ9WMKNUxyv2ayLiV8.jpg`,
            ],
          },
        ],
        journal: [
          {
            slug: `write-the-empty-state-first`,
            title: `Write the empty state first`,
            date: `2026-09-02`,
            category: `Craft`,
            read: `5 min read`,
            cover: `1510519138101-570d1dca3d66`,
            excerpt: `The screen most people see on day one is the one we design last. I've started with it on every project for two years, and it keeps changing the product.`,
            body: [
              `Most products are designed full. The mockups show a dashboard with eighteen months of data, a busy inbox and a team of twelve. Then a real customer signs up and sees a grey box that says 'No items yet'.`,
              `So I now design the empty state before anything else. It forces the first question every product has to answer: what should a new person do in the next thirty seconds?`,
              `At Orrin, writing the empty pay run screen first changed the order of onboarding. Adding one freelancer, not connecting a bank, became the first step, because that was the smallest thing that made the screen useful.`,
              `The rule I use: an empty state must name one action, show what the screen will look like once it's done, and never apologise.`,
            ],
            coverUrl: `https://framerusercontent.com/images/Sxgu1H6NXNCjj1tqm1LJuFogU.jpg`,
          },
          {
            slug: `what-receptionists-taught-me`,
            title: `What receptionists taught me about booking flows`,
            date: `2026-07-18`,
            category: `Research`,
            read: `6 min read`,
            cover: `1576091160399-112ba8d25d1d`,
            excerpt: `Four mornings on a clinic front desk taught me more than a month of interviews. People describe where it hurts, not what they need.`,
            body: [
              `For the Quayside project I asked to sit on reception instead of running interviews. I wore a headset, took notes and said very little.`,
              `The pattern was obvious by the second morning: nobody asks for 'sports massage' or 'manual therapy'. They say 'my knee has been bad since the half-marathon'.`,
              `That became the first screen of the booking flow: a body map and a plain question. The treatment is chosen for you, and you can change it if you know better.`,
              `Research doesn't have to be a formal study. Sometimes the best method is to sit where the problem happens and listen.`,
            ],
            coverUrl: `https://framerusercontent.com/images/bstKOBl540dvdv6ooe65n1qE.jpg`,
          },
          {
            slug: `a-design-system-is-a-list-of-decisions`,
            title: `A design system is a list of decisions`,
            date: `2026-06-04`,
            category: `Systems`,
            read: `7 min read`,
            cover: `1569258592171-357ea26da4df`,
            excerpt: `Components are the easy part. The hard part is agreeing what 'primary' means, and writing it down where people will find it.`,
            body: [
              `Every design system I've inherited had a beautiful component library and no rules. Three teams used the same button in three different ways.`,
              `At Tessel we started with a document instead of a Figma file: forty short decisions, each one sentence long. 'A page has one primary action.' 'Status is one of five words.'`,
              `The components came later and were almost boring to build, because the arguments were already settled.`,
              `If your system is drifting, don't add components. Find the decision nobody wrote down.`,
            ],
            coverUrl: `https://framerusercontent.com/images/kcShJz4dYJymSiptkbzpYB1JF4.jpg`,
          },
          {
            slug: `the-four-minute-pay-run`,
            title: `The four-minute pay run`,
            date: `2026-04-22`,
            category: `Case notes`,
            read: `8 min read`,
            cover: `1498050108023-c5249f4df085`,
            excerpt: `How we cut a three-hour task to four minutes by removing decisions, not screens.`,
            body: [
              `When I joined Orrin, a pay run took most of an afternoon. The interface wasn't bad; it just asked the same questions every month.`,
              `I timed eleven real pay runs. Two steps took 80% of the time: matching invoices to people and re-checking bank details that hadn't changed.`,
              `We moved both into the background. The pay run card now shows only what changed since last month, and everything else is pre-checked.`,
              `The lesson I took away: count decisions, not clicks. A screen with one real decision beats a wizard with five fake ones.`,
            ],
            coverUrl: `https://framerusercontent.com/images/EyNglsC5qO5YzdL87lJoka3is2g.jpg`,
          },
          {
            slug: `how-i-run-a-design-critique`,
            title: `How I run a 45-minute design critique`,
            date: `2026-03-09`,
            category: `Process`,
            read: `4 min read`,
            cover: `1579477402070-798fd86c4904`,
            excerpt: `A fixed agenda, one question per person and no solutions in the first twenty minutes. Here is the format I use every week.`,
            body: [
              `Critiques go wrong when they turn into redesigns by committee. So mine follow a fixed shape.`,
              `Five minutes: the designer states the problem and the one thing they want feedback on. Twenty minutes: questions only, no fixes. Fifteen minutes: suggestions, each tied to the stated goal. Five minutes: the designer says what they'll change.`,
              `The questions-only rule is the important one. It makes people understand the work before they try to improve it.`,
              `Write the notes in the file, next to the frames. Feedback that lives in a chat thread is feedback that gets lost.`,
            ],
            coverUrl: `https://framerusercontent.com/images/ObTZh92R59nT6xictAIIoPkqJo.jpg`,
          },
          {
            slug: `prototype-in-the-real-font`,
            title: `Prototype in the real font, on the real phone`,
            date: `2026-01-27`,
            category: `Craft`,
            read: `3 min read`,
            cover: `1583394838336-acd977736f90`,
            excerpt: `Most usability problems I've missed were invisible on a 27-inch monitor. Test on the device, in the typeface, in daylight.`,
            body: [
              `A design that works on my monitor often fails on a five-year-old phone in the sun. Text that looked calm at 13 px becomes unreadable.`,
              `My rule is simple: nothing goes to review until I've used it on a real phone, outside, for five minutes.`,
              `It's cheap, and it catches the things that matter most: tap targets, contrast and how long the first screen takes to appear.`,
              `The best prototype isn't the most detailed one. It's the one closest to the real conditions.`,
            ],
            coverUrl: `https://framerusercontent.com/images/gqoFEE7Bl7SRLhsDWxuVEHu7Kc.jpg`,
          },
          {
            slug: `pricing-freelance-design`,
            title: `Pricing freelance design by the problem`,
            date: `2025-11-12`,
            category: `Business`,
            read: `6 min read`,
            cover: `1768471125958-78556538fadc`,
            excerpt: `I stopped quoting hours three years ago. Here's how I price a project by what the problem costs the client today.`,
            body: [
              `Hourly pricing punishes speed. The better you get, the less you earn, and the client worries about every meeting on the invoice.`,
              `Now I ask one question in the first call: what does this problem cost you each month? A three-hour pay run for forty studios is easy to put a number on.`,
              `I quote a fixed price for a defined outcome, with two check-ins where we can change scope in writing.`,
              `Clients rarely push back, because the conversation is about their business, not my time.`,
            ],
            coverUrl: `https://framerusercontent.com/images/EVzzVsdGSAc3N0sCk1OxGlBp7U.jpg`,
          },
          {
            slug: `designing-for-one-bar-of-signal`,
            title: `Designing for one bar of signal`,
            date: `2025-09-30`,
            category: `Case notes`,
            read: `5 min read`,
            cover: `1464822759023-fed622ff2c3b`,
            excerpt: `Vale's hikers book huts at the trailhead with almost no connection. Designing for that made the app faster for everyone.`,
            body: [
              `Most of Vale's bookings happen where the signal ends. So we set a rule before drawing anything: every screen must work offline.`,
              `That meant storing the hut list, maps and bookings on the phone, and queuing requests until a connection appears.`,
              `We also set a weight budget of 180 kb for the first load, which ruled out most of the heavy map libraries.`,
              `The side effect surprised us: people in cities rated the app faster than any travel app they used.`,
            ],
            coverUrl: `https://framerusercontent.com/images/P1vzgPktRcOHNQnFLjvjfYcjPk.jpg`,
          },
        ],
        testimonials: [
          {
            name: `Mara Lindqvist`,
            role: `Head of Product`,
            company: `Orrin`,
            quote: `Noor asked better questions in week one than we had in a year. The pay run redesign paid for itself in a month of support tickets.`,
            project: `Orrin`,
            color: `#FF5B24`,
            order: 1,
          },
          {
            name: `Idris Achterberg`,
            role: `Operations Director`,
            company: `Quayside Clinics`,
            quote: `She spent four mornings on our front desk before drawing anything. Our receptionists still talk about it, and the booking flow shows it.`,
            project: `Quayside`,
            color: `#0E7C66`,
            order: 2,
          },
          {
            name: `Saskia Holm`,
            role: `Co-founder`,
            company: `Holm & Hearth`,
            quote: `The 'will it fit?' check was a text field. It cut our returns by a quarter. Noor has no ego about the size of the idea.`,
            project: `Holm & Hearth`,
            color: `#B4532A`,
            order: 3,
          },
          {
            name: `Eirik Dahl`,
            role: `CTO`,
            company: `Vale Huts`,
            quote: `Offline-first sounded like an engineering problem until Noor made it a design rule. Every screen had a weight budget, and she kept us to it.`,
            project: `Vale`,
            color: `#2F6E8F`,
            order: 4,
          },
          {
            name: `Lotte Brink`,
            role: `Founder`,
            company: `Kiln Audio`,
            quote: `We launched with six people and a sound test in the browser. 11,000 pre-orders later, I'd hire Noor for anything.`,
            project: `Kiln Audio`,
            color: `#C99A0E`,
            order: 5,
          },
          {
            name: `Tomas Verhey`,
            role: `Partner`,
            company: `Tessel Architects`,
            quote: `She got ninety architects to agree on what 'status' means. That alone deserves an award.`,
            project: `Tessel`,
            color: `#4B3BFF`,
            order: 6,
          },
        ],
        services: [
          {
            n: `01`,
            title: `Product design`,
            body: `End-to-end design for web and mobile products, from the first sketch to the shipped screen. I work inside your team's rhythm, not beside it.`,
            items: [`UX and UI design`, `Prototyping`, `Usability testing`, `Design QA`],
            price: `From €9,500 / month`,
          },
          {
            n: `02`,
            title: `Websites`,
            body: `Marketing sites and launch pages that explain the product before anyone has to ask, built in Framer so your team can edit them.`,
            items: [`Art direction`, `Copy structure`, `Framer build`, `SEO basics`],
            price: `From €12,000 / project`,
          },
          {
            n: `03`,
            title: `Design systems`,
            body: `A written list of decisions first, then the components. Systems your team will actually use, documented where they work.`,
            items: [`Audit`, `Tokens and components`, `Documentation`, `Team onboarding`],
            price: `From €18,000 / project`,
          },
          {
            n: `04`,
            title: `Research sprints`,
            body: `Two weeks of watching real people use your product, then a short report with the three changes that matter most.`,
            items: [`Field visits`, `Interviews`, `Session recordings`, `Priority report`],
            price: `€7,500 fixed`,
          },
        ],
        process: [
          {
            n: `01`,
            title: `Discover`,
            body: `I sit where the problem happens: on the desk, in the field, in the support queue. One week, no slides.`,
            meta: `Week 1`,
          },
          {
            n: `02`,
            title: `Define`,
            body: `We agree the one outcome that matters and write it down with a number next to it.`,
            meta: `Week 2`,
          },
          {
            n: `03`,
            title: `Design`,
            body: `Prototypes in the real font on the real device, tested with five people every Friday.`,
            meta: `Weeks 3–8`,
          },
          {
            n: `04`,
            title: `Deliver`,
            body: `I stay through the build, review every pull request that touches the interface and measure the result.`,
            meta: `Weeks 8–12`,
          },
        ],
        numbers: [
          { v: `9`, u: `years`, l: `designing software for teams of 5 to 5,000` },
          { v: `31`, u: `products`, l: `shipped to production, and still running` },
          { v: `4.2`, u: `M`, l: `people use them every month` },
          { v: `12`, u: `systems`, l: `design systems built and documented` },
        ],
        faq: [
          {
            q: `What kind of projects do you take on?`,
            a: `Digital products and websites where a real workflow needs untangling: fintech, health, commerce, travel and internal tools. I work best with teams that can ship every week.`,
          },
          {
            q: `Do you work alone or with a team?`,
            a: `Usually alone, embedded in your team. For larger projects I bring in two long-time collaborators: a front-end developer and a researcher.`,
          },
          {
            q: `How do you price projects?`,
            a: `A fixed price for a defined outcome, agreed after a free 20-minute call. Monthly retainers are available for ongoing product work.`,
          },
          {
            q: `Which tools do you use?`,
            a: `Figma for design, Framer for websites and prototypes, and whatever your engineers use for the build. I'm happy to work in your files.`,
          },
          {
            q: `How soon can you start?`,
            a: `I book about six weeks ahead. The next opening is in November; research sprints can sometimes start sooner.`,
          },
          {
            q: `Do you work with clients outside Europe?`,
            a: `Yes. About a third of my clients are in North America. I keep four hours of overlap with your working day.`,
          },
          {
            q: `Can you just do the visual design?`,
            a: `I can, but it's rarely the best use of your budget. Most of the value comes from the research and decisions before the pixels.`,
          },
        ],
        timeline: [
          {
            v: `v2026`,
            title: `Design lead · Orrin`,
            body: `Leading design for payroll across iOS and web; built the Orrin design system.`,
            date: `2025 — now`,
          },
          {
            v: `v2023`,
            title: `Independent designer`,
            body: `Product and web projects for Quayside, Holm & Hearth, Vale, Kiln and Tessel.`,
            date: `2021 — 2025`,
          },
          {
            v: `v2019`,
            title: `Senior product designer · Fietsbank`,
            body: `Designed the bike-lease app used by 300,000 commuters in the Netherlands.`,
            date: `2019 — 2021`,
          },
          {
            v: `v2017`,
            title: `Product designer · Harbour Labs`,
            body: `A studio of twelve making internal tools for ports and logistics companies.`,
            date: `2017 — 2019`,
          },
        ],
        tools: [`Figma`, `Framer`, `FigJam`, `Maze`, `Notion`, `Linear`, `Rive`, `Protopie`],
      }),
      b(z, {
        number: { type: M.String, title: `Section no.`, defaultValue: `03` },
        kicker: { type: M.String, defaultValue: `Experience` },
        title: { type: M.String, defaultValue: `Version history` },
        intro: {
          type: M.String,
          displayTextArea: !0,
          defaultValue: `Nine years, four teams and one rule: sit where the problem happens before drawing anything.`,
        },
        entries: {
          type: M.Array,
          control: {
            type: M.Object,
            controls: {
              version: { type: M.String },
              title: { type: M.String },
              body: { type: M.String, displayTextArea: !0 },
              date: { type: M.String },
            },
          },
        },
        tools: {
          type: M.String,
          displayTextArea: !0,
          defaultValue: `Figma, Framer, FigJam, Maze, Notion, Linear, Rive, Protopie`,
        },
        accent: { type: M.Color, title: `Selection`, defaultValue: `#4B3BFF` },
        ink: { type: M.Color, defaultValue: `#0C0C0E` },
        canvas: { type: M.Color, defaultValue: `#ECECE8` },
        previewScroll: { type: M.Number, title: `Preview scroll`, defaultValue: -1, min: -1, max: 1, step: 0.01 },
      });
  }),
  Be,
  J,
  Y,
  Ve,
  He,
  Ue,
  We,
  X,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Z,
  Ze,
  Q,
  Qe,
  $e,
  $,
  et;
e(() => {
  d(),
    w(),
    v(),
    p(),
    ye(),
    be(),
    De(),
    Me(),
    Oe(),
    je(),
    ze(),
    Ae(),
    Se(),
    he(),
    Pe(),
    (Be = x(R)),
    (J = x(P)),
    (Y = x(F)),
    (Ve = x(z)),
    (He = x(L)),
    (Ue = D(y.div, { nodeId: `HLITz1DBm`, override: Te, scopeId: `yxfoPyg7M` })),
    (We = x(I)),
    (X = D(y.div, { nodeId: `RwpexOUfQ`, override: xe, scopeId: `yxfoPyg7M` })),
    (Ge = {
      Gop_aWsnm: `(min-width: 1200px)`,
      nl7Ty_aPv: `(max-width: 809.98px)`,
      VRa8X3dTP: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (Ke = []),
    (qe = `framer-yyvH6`),
    (Je = { Gop_aWsnm: `framer-v-ypxj1x`, nl7Ty_aPv: `framer-v-e4l7lo`, VRa8X3dTP: `framer-v-8x9dku` }),
    (Ye = (e, t, n) => (e && t ? `position` : n)),
    (Xe = {
      opacity: 0.6,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1.1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.3, ease: [0.22, 1, 0.36, 1], type: `tween` },
    }),
    (Z = () => ({
      from: { alias: `RwpexOUfQ`, data: ke, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      orderBy: [{ collection: `RwpexOUfQ`, name: `RZqQKJG4P`, type: `Identifier` }],
      select: [
        { collection: `RwpexOUfQ`, name: `A01zKlqgA`, type: `Identifier` },
        { collection: `RwpexOUfQ`, name: `JTQPB2tfM`, type: `Identifier` },
        { collection: `RwpexOUfQ`, name: `TvKgpp695`, type: `Identifier` },
        { collection: `RwpexOUfQ`, name: `oRHCqWiJq`, type: `Identifier` },
        { collection: `RwpexOUfQ`, name: `HdhCYL7yq`, type: `Identifier` },
        { collection: `RwpexOUfQ`, name: `MF89GRIKE`, type: `Identifier` },
        { collection: `RwpexOUfQ`, name: `PVmwa23PL`, type: `Identifier` },
        { collection: `RwpexOUfQ`, name: `id`, type: `Identifier` },
      ],
    })),
    (Ze = ({ query: e, pageSize: t, children: n }) => n(de(e))),
    (Q = { Desktop: `Gop_aWsnm`, Phone: `nl7Ty_aPv`, Tablet: `VRa8X3dTP` }),
    (Qe = ({ value: e }) =>
      k() ? null : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    ($e = ({ height: e, id: t, width: n, ...r }) => ({ ...r, variant: Q[r.variant] ?? r.variant ?? `Gop_aWsnm` })),
    ($ = ae(
      s(function (e, n) {
        let r = a(null),
          i = n ?? r,
          s = m(),
          { activeLocale: d, setLocale: p } = re();
        fe();
        let { style: h, className: v, layoutId: b, variant: x, ...S } = $e(e);
        ie(l(() => Ne({}, d), [d]));
        let [C, w] = pe(x, Ge, !1),
          T = j(qe, ve, Ee),
          E = t(ne)?.isLayoutTemplate,
          D = !!t(g)?.transition?.layout,
          k = Ye(E, D);
        return (
          ce(),
          ue({}),
          u(ne.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Q,
              primaryVariantId: `Gop_aWsnm`,
              variantClassNames: Je,
            },
            children: f(_, {
              id: b ?? s,
              children: [
                u(Qe, { value: `html body { background: rgb(255, 255, 255); }` }),
                f(y.div, {
                  ...S,
                  className: j(T, `framer-ypxj1x`, v),
                  ref: i,
                  style: { ...h },
                  children: [
                    u(A, {
                      children: u(O, {
                        className: `framer-jwegth-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `01 Page header`,
                        isAuthoredByUser: !0,
                        layout: k,
                        name: `01 Page header`,
                        nodeId: `pYH0OtYYv`,
                        scopeId: `yxfoPyg7M`,
                        children: u(R, {
                          accent: `rgb(75, 59, 255)`,
                          canvas: `rgb(236, 236, 232)`,
                          cursor: `Theo · Eng`,
                          facts: `Rotterdam, NL|9 years in product|Available from November`,
                          height: `100%`,
                          id: `pYH0OtYYv`,
                          ink: `rgb(12, 12, 14)`,
                          layoutId: `pYH0OtYYv`,
                          lead: `Product designer in Rotterdam. Nine years of making complicated software feel obvious, for teams from five people to five thousand.`,
                          name: `01 Page header`,
                          path: `Portfolio / About`,
                          style: { width: `100%` },
                          title: `About Noor`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    u(ee, {
                      links: [
                        { href: { webPageId: `lgsWNPjru` }, implicitPathVariables: void 0 },
                        { href: { webPageId: `lgsWNPjru` }, implicitPathVariables: void 0 },
                        { href: { webPageId: `lgsWNPjru` }, implicitPathVariables: void 0 },
                      ],
                      children: (e) =>
                        u(A, {
                          children: u(O, {
                            className: `framer-w572b0-container`,
                            "data-code-component-plugin-id": `api`,
                            "data-framer-name": `02 Story`,
                            isAuthoredByUser: !0,
                            layout: k,
                            name: `02 Story`,
                            nodeId: `lQSMauRbJ`,
                            scopeId: `yxfoPyg7M`,
                            children: u(te, {
                              breakpoint: C,
                              overrides: { nl7Ty_aPv: { link: e[2] }, VRa8X3dTP: { link: e[1] } },
                              children: u(P, {
                                accent: `rgb(75, 59, 255)`,
                                body: `I start where the problem happens: on the reception desk, in the pay run, at the trailhead. Then I design the fewest decisions that get someone from stuck to done, and I stay until it ships.`,
                                body2: `Before going independent I designed at Fietsbank and Harbour Labs. Today I lead design at Orrin and take one outside project at a time.`,
                                canvas: `rgb(236, 236, 232)`,
                                facts: `Based in|Rotterdam, NL;Working with|Teams of 5 to 5,000;Languages|English, Dutch, German`,
                                fileName: `at-the-desk.jpg`,
                                height: `100%`,
                                id: `lQSMauRbJ`,
                                ink: `rgb(12, 12, 14)`,
                                kicker: `The short version`,
                                layoutId: `lQSMauRbJ`,
                                link: e[0],
                                linkLabel: `See the work`,
                                name: `02 Story`,
                                number: `02`,
                                previewScroll: -1,
                                skills: `Research, Interaction design, Prototyping, Design systems, Framer, Workshops`,
                                statement: `I've spent nine years [untangling] the software people use at work, for {4.2M people} a month: payroll, physio bookings, furniture and mountain huts.`,
                                style: { width: `100%` },
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                    }),
                    u(A, {
                      children: u(O, {
                        className: `framer-gl4x8h-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `03 Numbers`,
                        isAuthoredByUser: !0,
                        layout: k,
                        name: `03 Numbers`,
                        nodeId: `c9381zlo8`,
                        scopeId: `yxfoPyg7M`,
                        children: u(F, {
                          accent: `rgb(75, 59, 255)`,
                          canvas: `rgb(236, 236, 232)`,
                          height: `100%`,
                          id: `c9381zlo8`,
                          ink: `rgb(12, 12, 14)`,
                          kicker: `In numbers`,
                          layoutId: `c9381zlo8`,
                          name: `03 Numbers`,
                          number: `03`,
                          previewScroll: -1,
                          stats: [],
                          style: { width: `100%` },
                          title: `The file so far`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    u(A, {
                      children: u(O, {
                        className: `framer-1fg4bbc-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `04 Experience`,
                        isAuthoredByUser: !0,
                        layout: k,
                        name: `04 Experience`,
                        nodeId: `FuGkA61sQ`,
                        scopeId: `yxfoPyg7M`,
                        children: u(z, {
                          accent: `rgb(75, 59, 255)`,
                          canvas: `rgb(236, 236, 232)`,
                          entries: [],
                          height: `100%`,
                          id: `FuGkA61sQ`,
                          ink: `rgb(12, 12, 14)`,
                          intro: `Nine years, four teams and one rule: sit where the problem happens before drawing anything.`,
                          kicker: `Experience`,
                          layoutId: `FuGkA61sQ`,
                          name: `04 Experience`,
                          number: `04`,
                          previewScroll: -1,
                          style: { width: `100%` },
                          title: `Version history`,
                          tools: `Figma, Framer, FigJam, Maze, Notion, Linear, Rive, Protopie`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    u(A, {
                      children: u(O, {
                        className: `framer-okwk8h-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `05 Clients`,
                        isAuthoredByUser: !0,
                        layout: k,
                        name: `05 Clients`,
                        nodeId: `IWKRPfLeQ`,
                        scopeId: `yxfoPyg7M`,
                        children: u(L, {
                          accent: `rgb(75, 59, 255)`,
                          canvas: `rgb(236, 236, 232)`,
                          clients: `Orrin · Fintech, Quayside Clinics · Health, Holm & Hearth · Commerce, Vale Huts · Travel, Kiln Audio · Hardware, Tessel Architects · Architecture, Fietsbank · Mobility, Harbour Labs · Logistics`,
                          height: `100%`,
                          id: `IWKRPfLeQ`,
                          ink: `rgb(12, 12, 14)`,
                          label: `Clients and employers`,
                          layoutId: `IWKRPfLeQ`,
                          name: `05 Clients`,
                          skills: `Interaction design, Prototyping, Design systems, User research, Framer sites, Service design, Motion, Workshops, Accessibility, Design QA`,
                          speed: 40,
                          style: { width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                    f(y.section, {
                      className: `framer-158cyme`,
                      "data-framer-name": `06 Testimonials`,
                      layout: k,
                      children: [
                        f(`div`, {
                          className: `framer-hbqj51`,
                          "data-framer-name": `Head`,
                          children: [
                            f(Ue, {
                              className: `framer-hk0gh7`,
                              "data-framer-name": `Head copy`,
                              children: [
                                f(y.div, {
                                  className: `framer-1ol699z`,
                                  "data-framer-name": `Kicker`,
                                  children: [
                                    u(N, {
                                      __fromCanvasComponent: !0,
                                      children: u(o, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-o8en2f`,
                                          "data-styles-preset": `MG0afWxxR`,
                                          dir: `auto`,
                                          style: { "--framer-text-color": `#4B3BFF` },
                                          children: `[06]`,
                                        }),
                                      }),
                                      className: `framer-fmdq77`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    u(N, {
                                      __fromCanvasComponent: !0,
                                      children: u(o, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-o8en2f`,
                                          "data-styles-preset": `MG0afWxxR`,
                                          dir: `auto`,
                                          style: { "--framer-text-color": `rgba(12, 12, 14, 0.55)` },
                                          children: `KIND WORDS`,
                                        }),
                                      }),
                                      className: `framer-asa2x7`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                u(N, {
                                  __fromCanvasComponent: !0,
                                  children: u(o, {
                                    children: u(`h2`, {
                                      className: `framer-styles-preset-mamhr0`,
                                      "data-styles-preset": `DXBcJdPa7`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `#0C0C0E` },
                                      children: `What people say after the handover`,
                                    }),
                                  }),
                                  className: `framer-1aukho9`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            u(`div`, {
                              className: `framer-og56r8`,
                              "data-framer-name": `Head side`,
                              children: u(oe, {
                                href: { webPageId: `lgsWNPjru` },
                                motionChild: !0,
                                nodeId: `NsNc0FD2n`,
                                scopeId: `yxfoPyg7M`,
                                children: u(y.a, {
                                  className: `framer-1ueyzl5 framer-7sen3x`,
                                  "data-border": !0,
                                  "data-framer-name": `Link All projects`,
                                  whileHover: Xe,
                                  children: u(N, {
                                    __fromCanvasComponent: !0,
                                    children: u(o, {
                                      children: u(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `15px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `-0.01em`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-color": `#0C0C0E`,
                                        },
                                        children: `All projects  →`,
                                      }),
                                    }),
                                    className: `framer-nsg85f`,
                                    fonts: [`GF;Geist-500`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        u(X, {
                          className: `framer-8uw85r`,
                          "data-framer-name": `Testimonials list`,
                          children: u(le, {
                            children: u(Ze, {
                              query: Z(),
                              children: (e, t, n) =>
                                u(c, {
                                  children: e?.map(
                                    (
                                      {
                                        A01zKlqgA: e,
                                        HdhCYL7yq: t,
                                        id: n,
                                        JTQPB2tfM: r,
                                        MF89GRIKE: i,
                                        oRHCqWiJq: a,
                                        PVmwa23PL: o,
                                        TvKgpp695: s,
                                      },
                                      c
                                    ) => (
                                      (e ??= ``),
                                      (r ??= ``),
                                      (s ??= ``),
                                      (a ??= ``),
                                      (t ??= ``),
                                      (i ??= `#09F`),
                                      (o ??= ``),
                                      u(
                                        _,
                                        {
                                          id: `RwpexOUfQ-${n}`,
                                          children: u(me.Provider, {
                                            value: { PVmwa23PL: o },
                                            children: u(y.div, {
                                              className: `framer-1dbbp2w`,
                                              "data-framer-name": `Quote cell`,
                                              children: u(A, {
                                                children: u(O, {
                                                  className: `framer-1x6dclh-container`,
                                                  "data-code-component-plugin-id": `api`,
                                                  "data-framer-name": `Layerfolio Quote`,
                                                  isAuthoredByUser: !0,
                                                  name: `Layerfolio Quote`,
                                                  nodeId: `PuNlg_qrc`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `yxfoPyg7M`,
                                                  children: u(I, {
                                                    accent: `rgb(75, 59, 255)`,
                                                    color: i,
                                                    company: s,
                                                    height: `100%`,
                                                    id: `PuNlg_qrc`,
                                                    layoutId: `PuNlg_qrc`,
                                                    name: e,
                                                    project: t,
                                                    quote: a,
                                                    role: r,
                                                    style: { width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        },
                                        n
                                      )
                                    )
                                  ),
                                }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-yyvH6.framer-7sen3x, .framer-yyvH6 .framer-7sen3x { display: block; }`,
        `.framer-yyvH6.framer-ypxj1x { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-yyvH6 .framer-jwegth-container, .framer-yyvH6 .framer-w572b0-container, .framer-yyvH6 .framer-gl4x8h-container, .framer-yyvH6 .framer-1fg4bbc-container, .framer-yyvH6 .framer-okwk8h-container, .framer-yyvH6 .framer-1x6dclh-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-yyvH6 .framer-158cyme { align-content: center; align-items: center; background-color: #ecece8; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; padding: 130px 64px 140px 64px; position: relative; width: 100%; }`,
        `.framer-yyvH6 .framer-hbqj51 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; max-width: 1312px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-yyvH6 .framer-hk0gh7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; max-width: 760px; min-width: 300px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-yyvH6 .framer-1ol699z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-yyvH6 .framer-fmdq77, .framer-yyvH6 .framer-asa2x7, .framer-yyvH6 .framer-nsg85f { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-yyvH6 .framer-1aukho9 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-yyvH6 .framer-og56r8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; max-width: 420px; min-width: 280px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-yyvH6 .framer-1ueyzl5 { --border-bottom-width: 1.5px; --border-color: #0c0c0e; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px 0px 6px 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-yyvH6 .framer-8uw85r { display: grid; flex: none; gap: 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(300px, 1fr)); height: min-content; justify-content: center; max-width: 1312px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-yyvH6 .framer-1dbbp2w { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        ...ge,
        ...Ce,
        `.framer-yyvH6[data-border="true"]::after, .framer-yyvH6 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-yyvH6.framer-ypxj1x { height: min-content; width: 810px; } .framer-yyvH6 .framer-158cyme { padding: 104px 32px 112px 32px; } .framer-yyvH6 .framer-8uw85r { grid-template-columns: repeat(2, minmax(300px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-yyvH6.framer-ypxj1x { height: min-content; width: 390px; } .framer-yyvH6 .framer-158cyme { padding: 81px 20px 87px 20px; } .framer-yyvH6 .framer-8uw85r { grid-template-columns: repeat(1, minmax(300px, 1fr)); }}`,
      ],
      `framer-yyvH6`
    )),
    ($.displayName = `About`),
    ($.defaultProps = { height: 6113, width: 1200 }),
    C(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Geist`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist`,
              url: `https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4mJPby1QNtA.woff2`,
              weight: `500`,
            },
          ],
        },
        ...Be,
        ...J,
        ...Y,
        ...Ve,
        ...He,
        ...We,
        ...S(_e),
        ...S(we),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = T.get(Z(), n, r);
        return E([() => i.preload()], t);
      },
    }),
    (et = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FrameryxfoPyg7M`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"VRa8X3dTP":{"layout":["fixed","auto"]},"nl7Ty_aPv":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `6113`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerScrollSections: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    });
})();
export { et as __FramerMetadata__, $ as default, Ke as queryParamNames };
//# sourceMappingURL=bv9fLZgmFzoNCZ7xOBXra79ToIrIruYExL0TfC1GkmA.BV3NQTKf.mjs.map
