import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { F as t, L as n, N as r, l as i, s as a, u as o, w as s } from "./react.CHR6xBda.mjs";
import { E as c, U as l, o as u } from "./framer.dKj5RJCl.mjs";
function d() {
  r(() => {
    if (typeof document > `u` || document.getElementById(`lf-fonts`)) return;
    let e = document.createElement(`link`);
    (e.id = `lf-fonts`),
      (e.rel = `stylesheet`),
      (e.href = `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap`),
      document.head.appendChild(e);
  }, []);
}
function f() {
  return i(`style`, { children: y });
}
function p({ s: e = 14 }) {
  return i(`svg`, {
    width: e,
    height: e,
    viewBox: `0 0 14 14`,
    "aria-hidden": !0,
    children: i(`path`, { d: `M2 7h10M8 3l4 4-4 4`, stroke: `currentColor`, strokeWidth: `1.6`, fill: `none` }),
  });
}
function m({ n: e, t, color: n }) {
  return o(`div`, {
    className: `lf-kick`,
    style: n ? { color: n } : void 0,
    children: [o(`b`, { children: [`[`, e, `]`] }), t],
  });
}
function h(e) {
  let {
      number: n = `11`,
      kicker: r = `Questions`,
      title: a = `Before you ask`,
      intro:
        s = `The questions I get in almost every first call. If yours isn't here, ask it in the form; I answer every one.`,
      contactLabel: c = `Ask something else`,
      contactLink: l = `/contact`,
      accent: u = `#4B3BFF`,
      ink: h = `#0C0C0E`,
      canvas: y = `#ECECE8`,
    } = e,
    x = e.items && e.items.length ? e.items : b.faq;
  d();
  let [S, C] = t(0);
  return o(`section`, {
    className: `lfq2`,
    style: { ...e.style, overflowX: `clip`, width: `100%`, background: y, color: h, fontFamily: g, "--lf-acc": u },
    children: [
      i(f, {}),
      i(`style`, {
        children: `
            .lfq2{container-type:inline-size}
            .lfq2-in{max-width:1312px;margin:0 auto;padding:130px 64px;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:64px;align-items:start}
            .lfq2-panel{background:rgba(255,255,255,.82);border:1px solid rgba(12,12,14,.09);border-radius:16px;box-shadow:0 30px 60px -44px rgba(12,12,14,.5);overflow:hidden}
            .lfq2-ph{display:flex;gap:14px;padding:14px 16px 12px;font:600 12px/1 ${g};border-bottom:1px solid rgba(12,12,14,.08)}
            .lfq2-row{border-bottom:1px solid rgba(12,12,14,.06)}
            .lfq2-row:last-child{border-bottom:0}
            .lfq2-q{width:100%;display:flex;align-items:center;gap:10px;padding:16px 16px;background:transparent;border:0;text-align:left;font:500 18px/1.3 ${g};letter-spacing:-.02em;color:${h};cursor:pointer;transition:background .2s,color .2s}
            .lfq2-q:hover{background:rgba(12,12,14,.03)}
            .lfq2-q:focus-visible{outline:2px solid ${u};outline-offset:-2px}
            .lfq2-row.on .lfq2-q{background:${u}12;color:${u}}
            .lfq2-car{flex:none;transition:transform .45s ${v}}
            .lfq2-row.on .lfq2-car{transform:rotate(90deg)}
            .lfq2-a{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s ${v}}
            .lfq2-row.on .lfq2-a{grid-template-rows:1fr}
            .lfq2-a>div{overflow:hidden}
            .lfq2-a p{margin:0 16px 18px 44px;padding-left:16px;border-left:1.5px solid ${u}55;font:400 16px/1.55 ${g};color:rgba(12,12,14,.72);max-width:620px}
            @container (max-width: 1000px){.lfq2-in{grid-template-columns:1fr;padding:100px 32px;gap:36px}}
            @container (max-width: 640px){.lfq2-in{padding:80px 20px}.lfq2-q{font-size:16px}}
            `,
      }),
      o(`div`, {
        className: `lfq2-in`,
        children: [
          o(`div`, {
            children: [
              i(m, { n, t: r }),
              i(`h2`, {
                style: { margin: `18px 0 0`, font: `600 64px/.96 ${g}`, letterSpacing: `-.055em` },
                children: a,
              }),
              i(`p`, {
                style: { margin: `18px 0 0`, font: `400 18px/1.5 ${g}`, color: `rgba(12,12,14,.72)`, maxWidth: 420 },
                children: s,
              }),
              c ? o(`a`, { className: `lf-l`, href: l, style: { marginTop: 22 }, children: [c, i(p, {})] }) : null,
            ],
          }),
          o(`div`, {
            className: `lfq2-panel`,
            children: [
              o(`div`, {
                className: `lfq2-ph`,
                children: [
                  i(`span`, { children: `Layers` }),
                  i(`span`, { style: { color: `rgba(12,12,14,.4)`, fontWeight: 500 }, children: `FAQ` }),
                  o(`span`, {
                    style: { marginLeft: `auto`, font: `500 10px/1 ${_}`, color: `rgba(12,12,14,.4)` },
                    children: [x.length, ` items`],
                  }),
                ],
              }),
              x.map((e, t) =>
                o(
                  `div`,
                  {
                    className: `lfq2-row${S === t ? ` on` : ``}`,
                    children: [
                      o(`button`, {
                        className: `lfq2-q`,
                        onClick: () => C(S === t ? -1 : t),
                        "aria-expanded": S === t,
                        children: [
                          i(`svg`, {
                            className: `lfq2-car`,
                            width: `10`,
                            height: `10`,
                            viewBox: `0 0 10 10`,
                            "aria-hidden": !0,
                            children: i(`path`, {
                              d: `M3 1.5 7 5 3 8.5`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeWidth: `1.5`,
                            }),
                          }),
                          i(`svg`, {
                            width: `13`,
                            height: `13`,
                            viewBox: `0 0 12 12`,
                            "aria-hidden": !0,
                            style: { flex: `none` },
                            children: i(`path`, {
                              d: `M2 2.5h8M6 2.5v8`,
                              stroke: `currentColor`,
                              strokeWidth: `1.3`,
                              opacity: `.6`,
                            }),
                          }),
                          i(`span`, { style: { flex: 1 }, children: e.q }),
                        ],
                      }),
                      i(`div`, { className: `lfq2-a`, children: i(`div`, { children: i(`p`, { children: e.a }) }) }),
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
var g,
  _,
  v,
  y,
  b,
  x = e(() => {
    n(),
      a(),
      s(),
      l(),
      (g = `Geist, 'Inter Display', Inter, system-ui, sans-serif`),
      (_ = `'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace`),
      (v = `cubic-bezier(.22,1,.36,1)`),
      (y = `
section[class^="lf"] *,footer[class^="lf"] *,header[class^="lf"] *,article[class^="lf"] *,section[class^="lf"],footer[class^="lf"],header[class^="lf"],article[class^="lf"]{box-sizing:border-box}
.lf-kick{font:500 11px/1 ${_};letter-spacing:.05em;text-transform:uppercase;color:rgba(12,12,14,.55);display:flex;align-items:center;gap:10px}
.lf-kick b{font-weight:500;color:var(--lf-acc,#4B3BFF)}
.lf-b{height:48px;padding:0 20px;border-radius:10px;display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${g};letter-spacing:-.015em;text-decoration:none;white-space:nowrap;transition:transform .35s ${v},box-shadow .35s ${v},background .2s,color .2s;cursor:pointer;border:0}
.lf-b:hover{transform:translateY(-2px);box-shadow:0 14px 26px -14px rgba(12,12,14,.55)}
.lf-b:active{transform:translateY(0) scale(.98)}
.lf-b:focus-visible,.lf-l:focus-visible{outline:2px solid var(--lf-acc,#4B3BFF);outline-offset:3px}
.lf-b.ink{background:#0C0C0E;color:#fff}.lf-b.acc{background:var(--lf-acc,#4B3BFF);color:#fff}.lf-b.ghost{background:rgba(255,255,255,.9);color:#0C0C0E;box-shadow:inset 0 0 0 1px rgba(12,12,14,.12)}
.lf-b svg{transition:transform .35s ${v}}.lf-b:hover svg{transform:translateX(3px)}
.lf-l{display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${g};letter-spacing:-.01em;text-decoration:none;color:inherit;padding-bottom:6px;border-bottom:1.5px solid currentColor;transition:gap .35s ${v},color .2s}
.lf-l:hover{gap:16px;color:var(--lf-acc,#4B3BFF)}
.lf-rv{transition:opacity .8s ${v},transform .8s ${v},filter .8s ${v}}
.lf-rv[data-seen="false"]{opacity:0;transform:translateY(18px);filter:blur(4px)}
@media (prefers-reduced-motion: reduce){.lf-rv{transition:none!important}.lf-rv[data-seen="false"]{opacity:1;transform:none;filter:none}}
`),
      (b = {
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
      c(h, {
        number: { type: u.String, title: `Section no.`, defaultValue: `11` },
        kicker: { type: u.String, defaultValue: `Questions` },
        title: { type: u.String, defaultValue: `Before you ask` },
        intro: {
          type: u.String,
          displayTextArea: !0,
          defaultValue: `The questions I get in almost every first call. If yours isn't here, ask it in the form; I answer every one.`,
        },
        contactLabel: { type: u.String, title: `Link label`, defaultValue: `Ask something else` },
        contactLink: { type: u.Link, title: `Link`, defaultValue: `/contact` },
        items: {
          type: u.Array,
          control: {
            type: u.Object,
            controls: {
              q: { type: u.String, title: `Question` },
              a: { type: u.String, title: `Answer`, displayTextArea: !0 },
            },
          },
        },
        accent: { type: u.Color, title: `Selection`, defaultValue: `#4B3BFF` },
        ink: { type: u.Color, defaultValue: `#0C0C0E` },
        canvas: { type: u.Color, defaultValue: `#ECECE8` },
      });
  });
export { x as n, h as t };
//# sourceMappingURL=LayerfolioFAQ.bBGt6o14.mjs.map
