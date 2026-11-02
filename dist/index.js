import { defineComponent as x, computed as S, openBlock as t, createBlock as $, resolveDynamicComponent as _e, createElementBlock as a, normalizeClass as h, createElementVNode as s, createCommentVNode as m, renderSlot as V, createVNode as c, unref as v, withCtx as b, createTextVNode as p, toDisplayString as d, Fragment as k, renderList as C, normalizeStyle as P, ref as R, useModel as L, mergeModels as T, useId as ze, mergeProps as Ce, withDirectives as W, vModelDynamic as Re, withModifiers as J, watch as Ie, onMounted as Ee, onBeforeUnmount as Oe, reactive as Ue, Teleport as Ne, vModelText as X, withKeys as $e } from "vue";
import { Zap as Fe, X as He, Wallet as Ke, Users as Ge, UserPlus as We, User as Ze, Upload as qe, TriangleAlert as Je, TrendingUp as Qe, Trash2 as Xe, Sparkles as Ye, SlidersHorizontal as et, ShieldOff as tt, ShieldCheck as at, ShieldAlert as nt, Shield as lt, Settings as st, Send as ot, Search as it, RefreshCw as rt, RadioTower as dt, Radio as ct, Plus as ut, Plug as mt, Phone as ft, Paperclip as bt, Mic as xt, MessageSquareDot as gt, MessageSquare as ht, Menu as vt, Map as pt, Mail as yt, LogOut as kt, Lock as $t, ListChecks as wt, Languages as _t, Key as zt, Info as Ct, House as St, Hash as Vt, Globe as Mt, Gavel as Bt, Funnel as Lt, Flag as Tt, Filter as Dt, FileText as At, FilePlus as Pt, FileCheck as jt, EyeOff as Rt, Eye as It, EllipsisVertical as Et, Download as Ot, DollarSign as Ut, Database as Nt, CreditCard as Ft, Copy as Ht, Clock as Kt, CircleX as Gt, CircleHelp as Wt, CircleDollarSign as Zt, CircleCheck as qt, CircleAlert as Jt, Circle as Qt, ChevronsLeft as Xt, ChevronUp as Yt, ChevronRight as ea, ChevronLeft as ta, ChevronDown as aa, Check as na, ChartPie as la, ChartLine as sa, ChartColumn as oa, Calendar as ia, Building2 as ra, BookOpen as da, BellRing as ca, Bell as ua, Ban as ma, ArrowRight as fa, ArrowLeftRight as ba, ArrowLeft as xa, Activity as ga } from "lucide-vue-next";
import { DropdownMenuRoot as fe, DropdownMenuTrigger as be, DropdownMenuPortal as xe, DropdownMenuContent as ge, DropdownMenuItem as te, TooltipProvider as ha, TooltipRoot as va, TooltipTrigger as pa, TooltipPortal as ya, TooltipContent as ka, TooltipArrow as $a, SelectRoot as wa, SelectTrigger as _a, SelectValue as za, SelectIcon as Ca, SelectPortal as Sa, SelectContent as Va, SelectViewport as Ma, SelectItem as Ba, SelectItemText as La, SelectItemIndicator as Ta, CheckboxRoot as Da, CheckboxIndicator as Aa, AccordionRoot as Pa, AccordionItem as ja, AccordionHeader as Ra, AccordionTrigger as Ia, AccordionContent as Ea, TreeRoot as Oa, TreeItem as Ua, PopoverRoot as Se, PopoverTrigger as Ve, PopoverPortal as Me, PopoverContent as Be, PinInputRoot as Na, PinInputInput as Fa, RadioGroupRoot as Ha, RadioGroupItem as Ka, RadioGroupIndicator as Ga, SliderRoot as Wa, SliderTrack as Za, SliderRange as qa, SliderThumb as Ja, SwitchRoot as Qa, SwitchThumb as Xa, DialogRoot as le, DialogPortal as se, DialogOverlay as oe, DialogContent as ie, DialogTitle as re, DropdownMenuSeparator as Ya, TabsRoot as en, TabsList as tn, TabsTrigger as an, TabsContent as nn, DialogTrigger as he, DialogDescription as ve, AlertDialogRoot as ln, AlertDialogTrigger as sn, AlertDialogPortal as on, AlertDialogOverlay as rn, AlertDialogContent as dn, AlertDialogTitle as cn, AlertDialogDescription as un, AlertDialogCancel as mn, AlertDialogAction as fn, DialogClose as Le, PopoverArrow as bn } from "reka-ui";
const Te = {
  activity: ga,
  "arrow-left": xa,
  "arrow-left-right": ba,
  "arrow-right": fa,
  ban: ma,
  bell: ua,
  "bell-ring": ca,
  book: da,
  building: ra,
  calendar: ia,
  "chart-column": oa,
  "chart-line": sa,
  "chart-pie": la,
  check: na,
  "chevron-down": aa,
  "chevron-left": ta,
  "chevron-right": ea,
  "chevron-up": Yt,
  "chevrons-left": Xt,
  circle: Qt,
  "circle-alert": Jt,
  "circle-check": qt,
  "circle-dollar": Zt,
  "circle-help": Wt,
  "circle-x": Gt,
  clock: Kt,
  copy: Ht,
  "credit-card": Ft,
  database: Nt,
  dollar: Ut,
  download: Ot,
  ellipsis: Et,
  eye: It,
  "eye-off": Rt,
  "file-check": jt,
  "file-plus": Pt,
  file: At,
  filter: Dt,
  flag: Tt,
  funnel: Lt,
  gavel: Bt,
  globe: Mt,
  hash: Vt,
  home: St,
  info: Ct,
  key: zt,
  languages: _t,
  "list-checks": wt,
  lock: $t,
  logout: kt,
  mail: yt,
  map: pt,
  menu: vt,
  message: ht,
  "message-dot": gt,
  mic: xt,
  paperclip: bt,
  phone: ft,
  plug: mt,
  plus: ut,
  radio: ct,
  tower: dt,
  refresh: rt,
  search: it,
  send: ot,
  settings: st,
  shield: lt,
  "shield-alert": nt,
  "shield-check": at,
  "shield-off": tt,
  sliders: et,
  sparkles: Ye,
  trash: Xe,
  trend: Qe,
  warning: Je,
  upload: qe,
  user: Ze,
  "user-plus": We,
  users: Ge,
  wallet: Ke,
  x: He,
  zap: Fe
}, Wm = Object.keys(Te), _ = /* @__PURE__ */ x({
  __name: "Icon",
  props: {
    name: {},
    size: { default: 16 },
    strokeWidth: { default: 1.75 }
  },
  setup(e) {
    const l = e, o = S(() => Te[l.name]);
    return (i, n) => (t(), $(_e(o.value), {
      size: e.size,
      "stroke-width": e.strokeWidth,
      "aria-hidden": "true",
      class: "shrink-0"
    }, null, 8, ["size", "stroke-width"]));
  }
}), xn = ["type", "disabled", "aria-busy"], gn = {
  key: 0,
  class: "size-4 animate-spin",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true"
}, I = /* @__PURE__ */ x({
  __name: "Button",
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    icon: {},
    iconRight: {},
    loading: { type: Boolean },
    disabled: { type: Boolean },
    block: { type: Boolean },
    type: { default: "button" }
  },
  setup(e) {
    const l = {
      primary: "bg-brand-600 text-white shadow-primary hover:bg-brand-700",
      secondary: "border border-line bg-surface text-gray-700 shadow-xs hover:bg-gray-50 hover:border-line-strong",
      ghost: "text-gray-700 hover:bg-gray-100",
      danger: "bg-danger-600 text-white shadow-xs hover:bg-danger-700",
      "danger-soft": "border border-danger-200 bg-danger-50 text-danger-700 hover:bg-danger-100",
      warning: "border border-warning-500/70 bg-surface text-warning-700 hover:bg-warning-50",
      "on-dark": "text-white/85 hover:bg-white/10 hover:text-white"
    }, o = { sm: "h-[var(--button-height-sm)] gap-1.5 rounded-md px-3 text-xs", md: "h-[var(--button-height-md)] gap-2 rounded-md px-4 text-[13px]", lg: "h-[var(--button-height-lg)] gap-2 rounded-md px-5 text-sm" };
    return (i, n) => (t(), a("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      "aria-busy": e.loading || void 0,
      class: h(["inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors duration-150 disabled:cursor-not-allowed", [
        o[e.size],
        e.block && "w-full",
        e.disabled && e.variant === "primary" ? "bg-[#c5d1ea] text-white shadow-none" : l[e.variant],
        e.disabled && e.variant !== "primary" && "opacity-50",
        e.loading && "opacity-80"
      ]])
    }, [
      e.loading ? (t(), a("svg", gn, [...n[0] || (n[0] = [
        s("circle", {
          cx: "12",
          cy: "12",
          r: "9",
          stroke: "currentColor",
          "stroke-opacity": ".3",
          "stroke-width": "3"
        }, null, -1),
        s("path", {
          d: "M21 12a9 9 0 0 0-9-9",
          stroke: "currentColor",
          "stroke-width": "3",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : e.icon ? (t(), $(_, {
        key: 1,
        name: e.icon
      }, null, 8, ["name"])) : m("", !0),
      V(i.$slots, "default"),
      e.iconRight ? (t(), $(_, {
        key: 2,
        name: e.iconRight
      }, null, 8, ["name"])) : m("", !0)
    ], 10, xn));
  }
}), hn = ["aria-label", "title", "disabled"], vn = {
  key: 0,
  class: "absolute top-1 right-1 size-2 rounded-full bg-danger-500 ring-2 ring-white",
  "aria-hidden": "true"
}, O = /* @__PURE__ */ x({
  __name: "IconButton",
  props: {
    icon: {},
    label: {},
    variant: { default: "soft" },
    size: { default: "md" },
    dot: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const l = {
      soft: "rounded-sm border border-line bg-gray-100 text-gray-600 hover:bg-gray-200",
      outline: "rounded-sm border border-line bg-surface text-gray-600 shadow-xs hover:bg-gray-50",
      ghost: "rounded-sm text-gray-600 hover:bg-gray-100",
      "on-brand": "rounded-full bg-white/15 text-white hover:bg-white/25",
      round: "rounded-full border border-line bg-surface text-ink shadow-xs hover:bg-gray-50"
    }, o = { sm: "size-7", md: "size-9", lg: "size-11" };
    return (i, n) => (t(), a("button", {
      type: "button",
      "aria-label": e.label,
      title: e.label,
      disabled: e.disabled,
      class: h(["relative inline-flex items-center justify-center transition-colors disabled:cursor-not-allowed disabled:opacity-40", [l[e.variant], o[e.size]]])
    }, [
      c(_, {
        name: e.icon,
        size: e.size === "sm" ? 14 : e.size === "lg" ? 20 : 16
      }, null, 8, ["name", "size"]),
      e.dot ? (t(), a("span", vn)) : m("", !0)
    ], 10, hn));
  }
}), pn = ["href"], pe = /* @__PURE__ */ x({
  __name: "LinkArrow",
  props: {
    href: { default: "#" },
    icon: {},
    arrow: { type: Boolean, default: !0 },
    size: { default: "md" }
  },
  setup(e) {
    return (l, o) => (t(), a("a", {
      href: e.href,
      class: h(["inline-flex items-center gap-1 font-medium text-brand-600 hover:underline underline-offset-2", e.size === "sm" ? "text-[13px]" : "text-sm"])
    }, [
      e.icon ? (t(), $(_, {
        key: 0,
        name: e.icon,
        size: 14
      }, null, 8, ["name"])) : m("", !0),
      V(l.$slots, "default"),
      e.arrow ? (t(), $(_, {
        key: 1,
        name: "arrow-right",
        size: 14
      })) : m("", !0)
    ], 10, pn));
  }
}), Zm = /* @__PURE__ */ x({
  __name: "MenuButton",
  props: {
    label: {},
    icon: {},
    items: {},
    variant: { default: "secondary" },
    size: { default: "md" }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const o = l;
    return (i, n) => (t(), $(v(fe), null, {
      default: b(() => [
        c(v(be), { "as-child": "" }, {
          default: b(() => [
            c(I, {
              variant: e.variant,
              size: e.size,
              icon: e.icon,
              "icon-right": "chevron-down"
            }, {
              default: b(() => [
                p(d(e.label), 1)
              ]),
              _: 1
            }, 8, ["variant", "size", "icon"])
          ]),
          _: 1
        }),
        c(v(xe), null, {
          default: b(() => [
            c(v(ge), {
              "side-offset": 6,
              align: "end",
              class: "z-50 min-w-48 rounded-md border border-line bg-surface p-1 shadow-pop"
            }, {
              default: b(() => [
                (t(!0), a(k, null, C(e.items, (r) => (t(), $(v(te), {
                  key: r.label,
                  disabled: r.disabled,
                  class: h(["flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-sm outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40 data-[highlighted]:bg-brand-50", r.danger ? "text-danger-600" : "text-gray-700"]),
                  onSelect: (u) => o("select", r)
                }, {
                  default: b(() => [
                    r.icon ? (t(), $(_, {
                      key: 0,
                      name: r.icon
                    }, null, 8, ["name"])) : m("", !0),
                    p(" " + d(r.label), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "class", "onSelect"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), qm = /* @__PURE__ */ x({
  __name: "RowActions",
  props: {
    items: {},
    label: { default: "Row actions" }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const o = l;
    return (i, n) => (t(), $(v(fe), null, {
      default: b(() => [
        c(v(be), { "as-child": "" }, {
          default: b(() => [
            c(O, {
              icon: "ellipsis",
              label: e.label,
              variant: "outline",
              size: "sm"
            }, null, 8, ["label"])
          ]),
          _: 1
        }),
        c(v(xe), null, {
          default: b(() => [
            c(v(ge), {
              "side-offset": 4,
              align: "end",
              class: "z-50 min-w-44 rounded-md border border-line bg-surface p-1 shadow-pop"
            }, {
              default: b(() => [
                (t(!0), a(k, null, C(e.items, (r) => (t(), $(v(te), {
                  key: r.label,
                  disabled: r.disabled,
                  class: h(["flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-[13px] outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40 data-[highlighted]:bg-brand-50", r.danger ? "text-danger-600" : "text-gray-700"]),
                  onSelect: (u) => o("select", r)
                }, {
                  default: b(() => [
                    r.icon ? (t(), $(_, {
                      key: 0,
                      name: r.icon
                    }, null, 8, ["name"])) : m("", !0),
                    p(d(r.label), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "class", "onSelect"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), yn = ["aria-label", "aria-valuenow", "aria-valuemax"], N = /* @__PURE__ */ x({
  __name: "ProgressBar",
  props: {
    value: {},
    max: { default: 100 },
    tone: { default: "brand" },
    size: { default: "sm" },
    label: { default: "Progress" }
  },
  setup(e) {
    const l = {
      brand: "bg-brand-600",
      gradient: "bg-gradient-to-r from-brand-300 to-brand-600",
      success: "bg-success-600",
      warning: "bg-warning-600",
      danger: "bg-danger-600",
      muted: "bg-gray-300"
    }, o = { xs: "h-1", sm: "h-1.5", md: "h-2.5" };
    return (i, n) => (t(), a("div", {
      role: "progressbar",
      "aria-label": e.label,
      "aria-valuenow": e.value,
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      class: h(["w-full overflow-hidden rounded-full bg-gray-200/80", o[e.size]])
    }, [
      s("div", {
        class: h(["h-full rounded-full transition-[width] duration-300", l[e.tone]]),
        style: P({ width: `${Math.min(e.value / e.max * 100, 100)}%` })
      }, null, 6)
    ], 10, yn));
  }
}), kn = {
  class: "rounded-lg border border-brand-200/80 bg-gradient-to-b from-brand-50 to-surface p-4",
  "aria-label": "AI recommendation"
}, $n = { class: "eyebrow-mono flex items-center gap-1.5 !text-brand-700" }, wn = { class: "mt-2 text-lg font-semibold text-ink" }, _n = { class: "mt-2 flex items-center gap-2" }, zn = { class: "font-mono text-xs font-medium whitespace-nowrap text-ink-2" }, Cn = { class: "mt-3 flex flex-col gap-1.5" }, Jm = /* @__PURE__ */ x({
  __name: "AiRecommendation",
  props: {
    action: {},
    confidence: {},
    reasons: {}
  },
  setup(e) {
    return (l, o) => (t(), a("aside", kn, [
      s("p", $n, [
        c(_, {
          name: "sparkles",
          size: 14
        }),
        o[0] || (o[0] = p(" AI recommendation", -1))
      ]),
      s("p", wn, d(e.action), 1),
      s("div", _n, [
        c(N, {
          value: e.confidence,
          label: "Confidence"
        }, null, 8, ["value"]),
        s("span", zn, d(e.confidence) + "% confidence", 1)
      ]),
      s("ul", Cn, [
        (t(!0), a(k, null, C(e.reasons, (i) => (t(), a("li", {
          key: i,
          class: "flex gap-2 text-[13px] leading-5 text-gray-700"
        }, [
          c(_, {
            name: "check",
            size: 14,
            class: "mt-0.5 text-brand-600"
          }),
          p(d(i), 1)
        ]))), 128))
      ])
    ]));
  }
}), Sn = { class: "inline-flex items-center gap-2" }, Vn = ["width", "height"], Mn = ["d", "opacity", "fill"], Z = /* @__PURE__ */ x({
  __name: "LogoMark",
  props: {
    size: { default: 24 },
    wordmark: {},
    tile: { type: Boolean },
    onDark: { type: Boolean }
  },
  setup(e) {
    const l = [
      { d: "M21 5L29 11L21 17V5Z", o: 0.95 },
      { d: "M35 13V23L27 20L35 13Z", o: 0.85 },
      { d: "M35 29L27 34V25L35 29Z", o: 0.75 },
      { d: "M21 37L13 31L21 25V37Z", o: 0.95 },
      { d: "M7 29V19L15 22L7 29Z", o: 0.85 },
      { d: "M7 13L15 8V17L7 13Z", o: 0.75 }
    ];
    return (o, i) => (t(), a("span", Sn, [
      s("span", {
        class: h(["inline-flex shrink-0 items-center justify-center", e.tile ? "rounded-full bg-brand-600 shadow-primary" : ""]),
        style: P(e.tile ? { width: `${e.size * 1.6}px`, height: `${e.size * 1.6}px` } : {})
      }, [
        (t(), a("svg", {
          width: e.size,
          height: e.size,
          viewBox: "0 0 42 42",
          role: "img",
          "aria-label": "ConsentOS aperture mark"
        }, [
          (t(), a(k, null, C(l, (n) => s("path", {
            key: n.d,
            d: n.d,
            opacity: n.o,
            fill: e.tile || e.onDark ? "#ffffff" : "#3b5bff"
          }, null, 8, Mn)), 64))
        ], 8, Vn))
      ], 6),
      e.wordmark ? (t(), a("span", {
        key: 0,
        class: h(["text-[17px] font-semibold tracking-tight", e.onDark ? "text-white" : "text-ink"])
      }, d(e.wordmark), 3)) : m("", !0)
    ]));
  }
}), Bn = { class: "flex items-start gap-4 rounded-xl border border-brand-200/80 bg-gradient-to-r from-surface to-brand-50 p-5" }, Ln = { class: "min-w-0 text-[15px] leading-6 text-gray-700" }, Qm = /* @__PURE__ */ x({
  __name: "AiSummary",
  setup(e) {
    return (l, o) => (t(), a("div", Bn, [
      c(Z, {
        tile: "",
        size: 22,
        class: "drop-shadow-[0_6px_10px_rgb(37_99_235/0.3)]"
      }),
      s("p", Ln, [
        V(l.$slots, "default")
      ])
    ]));
  }
}), Tn = ["src", "alt"], Dn = ["aria-label"], De = /* @__PURE__ */ x({
  __name: "Avatar",
  props: {
    name: {},
    src: {},
    size: { default: "md" },
    color: { default: "#2563eb" }
  },
  setup(e) {
    const l = e, o = S(() => l.name.split(/\s+/).map((n) => n[0]).slice(0, 2).join("").toUpperCase()), i = { sm: "size-7 text-[11px]", md: "size-9 text-[13px]", lg: "size-12 text-base" };
    return (n, r) => (t(), a("span", {
      class: h(["inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-semibold text-white", i[e.size]]),
      style: P({ background: e.color })
    }, [
      e.src ? (t(), a("img", {
        key: 0,
        src: e.src,
        alt: e.name,
        class: "size-full object-cover"
      }, null, 8, Tn)) : (t(), a("span", {
        key: 1,
        "aria-label": e.name
      }, d(o.value), 9, Dn))
    ], 6));
  }
}), F = /* @__PURE__ */ x({
  __name: "Badge",
  props: {
    variant: { default: "neutral" },
    size: { default: "md" },
    dot: { type: Boolean },
    icon: {},
    caps: { type: Boolean }
  },
  setup(e) {
    const l = {
      success: "bg-success-100 text-success-700",
      warning: "bg-warning-50 text-warning-700",
      danger: "bg-danger-100 text-danger-700",
      info: "bg-info-100 text-info-700",
      neutral: "bg-gray-100 text-gray-600",
      brand: "bg-brand-50 text-brand-700",
      role: "bg-[#fff4da] text-[#8a6410]"
    }, o = { success: "bg-success-600", warning: "bg-warning-600", danger: "bg-danger-600", info: "bg-info-600", neutral: "bg-gray-400", brand: "bg-brand-600", role: "bg-[#8a6410]" };
    return (i, n) => (t(), a("span", {
      class: h(["inline-flex items-center gap-1 rounded-full font-medium whitespace-nowrap", [l[e.variant], e.size === "sm" ? "px-2 py-px text-[11px] leading-4" : "px-2.5 py-0.5 text-xs leading-[18px]", e.caps && "tracking-wider uppercase"]])
    }, [
      e.dot ? (t(), a("span", {
        key: 0,
        class: h(["size-1.5 rounded-full", o[e.variant]]),
        "aria-hidden": "true"
      }, null, 2)) : m("", !0),
      e.icon ? (t(), $(_, {
        key: 1,
        name: e.icon,
        size: 12
      }, null, 8, ["name"])) : m("", !0),
      V(i.$slots, "default")
    ], 2));
  }
}), An = { class: "flex items-center gap-2.5" }, Pn = {
  key: 0,
  class: "flex min-w-0 flex-col items-start gap-0.5"
}, jn = { class: "truncate text-sm leading-tight text-ink" }, Ae = /* @__PURE__ */ x({
  __name: "UserChip",
  props: {
    name: {},
    role: {},
    compact: { type: Boolean }
  },
  setup(e) {
    return (l, o) => (t(), a("span", An, [
      c(De, { name: e.name }, null, 8, ["name"]),
      e.compact ? m("", !0) : (t(), a("span", Pn, [
        s("span", jn, d(e.name), 1),
        c(F, {
          variant: "role",
          size: "sm",
          caps: ""
        }, {
          default: b(() => [
            p(d(e.role), 1)
          ]),
          _: 1
        })
      ]))
    ]));
  }
}), Rn = { class: "flex h-[var(--app-header-height)] items-center justify-between border-b border-line px-4" }, In = {
  class: "flex-1 overflow-y-auto py-3",
  "aria-label": "Primary"
}, En = {
  key: 0,
  class: "eyebrow px-4 pt-1 pb-1.5 !font-semibold"
}, On = ["aria-current", "aria-expanded", "disabled", "title", "onClick"], Un = { class: "flex-1 truncate" }, Nn = {
  key: 0,
  class: "rounded-full bg-danger-100 px-1.5 text-[11px] font-semibold text-danger-700"
}, Fn = {
  key: 0,
  class: "mt-1 mb-1 flex flex-col gap-1 px-3"
}, Hn = ["aria-current", "disabled", "onClick"], Kn = { class: "flex-1 truncate" }, Gn = {
  key: 0,
  class: "rounded-full bg-gray-100 px-1.5 py-0.5"
}, Wn = /* @__PURE__ */ x({
  __name: "SidebarNav",
  props: {
    groups: {},
    active: {},
    user: {},
    product: { default: "WiselyConsent" },
    expanded: { default: () => [] },
    startCollapsed: { type: Boolean }
  },
  emits: ["navigate"],
  setup(e, { emit: l }) {
    const o = e, i = l, n = R(o.startCollapsed), r = R(new Set(o.expanded));
    function u(f) {
      r.value.has(f) ? r.value.delete(f) : r.value.add(f);
    }
    return (f, g) => (t(), a("aside", {
      class: h(["flex h-full shrink-0 flex-col border-r border-line bg-surface transition-[width] duration-200", n.value ? "w-[var(--app-sidebar-collapsed-width)]" : "w-[var(--app-sidebar-width)]"])
    }, [
      s("div", Rn, [
        c(Z, {
          wordmark: n.value ? void 0 : e.product,
          size: 22
        }, null, 8, ["wordmark"]),
        n.value ? m("", !0) : (t(), $(O, {
          key: 0,
          icon: "chevrons-left",
          label: "Collapse sidebar",
          size: "sm",
          onClick: g[0] || (g[0] = (y) => n.value = !0)
        }))
      ]),
      n.value ? (t(), $(O, {
        key: 0,
        icon: "chevron-right",
        label: "Expand sidebar",
        size: "sm",
        class: "mx-auto mt-3",
        onClick: g[1] || (g[1] = (y) => n.value = !1)
      })) : m("", !0),
      s("nav", In, [
        (t(!0), a(k, null, C(e.groups, (y) => (t(), a("div", {
          key: y.title,
          class: "mb-3"
        }, [
          n.value ? m("", !0) : (t(), a("p", En, d(y.title), 1)),
          s("ul", null, [
            (t(!0), a(k, null, C(y.items, (w) => (t(), a("li", {
              key: w.id
            }, [
              s("button", {
                type: "button",
                "aria-current": e.active === w.id ? "page" : void 0,
                "aria-expanded": w.children ? r.value.has(w.id) : void 0,
                disabled: w.locked,
                title: n.value ? w.label : void 0,
                class: h(["flex h-10 w-full items-center gap-3 border-l-[3px] px-4 text-left text-sm transition-colors disabled:cursor-not-allowed", [
                  e.active === w.id || w.children?.some((z) => z.id === e.active) ? "border-brand-600 bg-brand-50 text-brand-600" : "border-transparent text-gray-700 hover:bg-gray-50",
                  w.locked && "text-ink-4 hover:bg-transparent",
                  n.value && "justify-center px-0"
                ]]),
                onClick: (z) => w.children ? u(w.id) : i("navigate", w.id)
              }, [
                c(_, {
                  name: w.icon,
                  size: 18
                }, null, 8, ["name"]),
                n.value ? m("", !0) : (t(), a(k, { key: 0 }, [
                  s("span", Un, d(w.label), 1),
                  w.count ? (t(), a("span", Nn, d(w.count), 1)) : m("", !0),
                  w.locked ? (t(), $(_, {
                    key: 1,
                    name: "lock",
                    size: 13
                  })) : m("", !0),
                  w.children ? (t(), $(_, {
                    key: 2,
                    name: r.value.has(w.id) ? "chevron-up" : "chevron-down",
                    size: 14
                  }, null, 8, ["name"])) : m("", !0)
                ], 64))
              ], 10, On),
              w.children && r.value.has(w.id) && !n.value ? (t(), a("ul", Fn, [
                (t(!0), a(k, null, C(w.children, (z) => (t(), a("li", {
                  key: z.id
                }, [
                  s("button", {
                    type: "button",
                    "aria-current": e.active === z.id ? "page" : void 0,
                    disabled: z.locked,
                    class: h(["flex h-9 w-full items-center gap-3 rounded-sm border px-3 text-left text-sm transition-colors disabled:cursor-not-allowed", [e.active === z.id ? "border-brand-200 bg-surface text-brand-600 shadow-xs" : "border-transparent text-gray-700 hover:bg-gray-50", z.locked && "text-ink-4 hover:bg-transparent"]]),
                    onClick: (D) => i("navigate", z.id)
                  }, [
                    c(_, {
                      name: z.icon,
                      size: 16
                    }, null, 8, ["name"]),
                    s("span", Kn, d(z.label), 1),
                    z.locked ? (t(), a("span", Gn, [
                      c(_, {
                        name: "lock",
                        size: 11
                      })
                    ])) : m("", !0)
                  ], 10, Hn)
                ]))), 128))
              ])) : m("", !0)
            ]))), 128))
          ])
        ]))), 128))
      ]),
      s("div", {
        class: h(["border-t border-line p-3", n.value && "flex justify-center"])
      }, [
        c(Ae, {
          name: e.user.name,
          role: e.user.role,
          compact: n.value
        }, null, 8, ["name", "role", "compact"])
      ], 2)
    ], 2));
  }
}), Zn = ["src", "alt"], qn = ["aria-label"], Jn = ["src", "alt"], Qn = ["aria-label"], de = /* @__PURE__ */ x({
  __name: "BrandMark",
  props: {
    name: {},
    color: { default: "#0b1a33" },
    src: {},
    size: { default: "md" },
    shape: { default: "tile" }
  },
  setup(e) {
    const l = e, o = { sm: "size-7 text-xs", md: "size-9 text-sm", lg: "size-11 text-base", xl: "size-14 text-lg" }, i = S(() => l.name.trim()[0]?.toUpperCase());
    return (n, r) => e.shape === "tile" ? (t(), a("span", {
      key: 0,
      class: h(["inline-flex shrink-0 items-center justify-center overflow-hidden rounded-sm font-semibold text-white", o[e.size]]),
      style: P({ background: e.src ? "#fff" : e.color })
    }, [
      e.src ? (t(), a("img", {
        key: 0,
        src: e.src,
        alt: e.name,
        class: "size-full object-contain"
      }, null, 8, Zn)) : (t(), a("span", {
        key: 1,
        "aria-label": e.name
      }, d(i.value), 9, qn))
    ], 6)) : (t(), a("span", {
      key: 1,
      class: h(["inline-flex shrink-0 items-center justify-center rounded-full border border-line bg-gray-100 p-2.5", e.size === "xl" ? "size-14" : "size-12"])
    }, [
      s("span", {
        class: "flex size-full items-center justify-center overflow-hidden rounded-sm text-sm font-semibold text-white",
        style: P({ background: e.src ? "#fff" : e.color })
      }, [
        e.src ? (t(), a("img", {
          key: 0,
          src: e.src,
          alt: e.name,
          class: "size-full object-contain"
        }, null, 8, Jn)) : (t(), a("span", {
          key: 1,
          "aria-label": e.name
        }, d(i.value), 9, Qn))
      ], 4)
    ], 2));
  }
}), Xn = ["aria-label"], Yn = { class: "min-w-0" }, el = { class: "block truncate text-[13px] leading-tight font-medium text-ink" }, tl = { class: "eyebrow block !text-[10px] !leading-3.5" }, al = /* @__PURE__ */ x({
  __name: "OrgSwitcher",
  props: {
    name: {},
    type: {},
    color: { default: "#0b1a33" }
  },
  setup(e) {
    return (l, o) => (t(), a("button", {
      type: "button",
      class: "flex h-11 max-w-52 items-center gap-2.5 rounded-md border border-line bg-gray-50 pr-3 pl-2 text-left hover:bg-gray-100",
      "aria-label": `Organisation: ${e.name}, ${e.type}`
    }, [
      c(de, {
        name: e.name,
        color: e.color,
        size: "sm"
      }, null, 8, ["name", "color"]),
      s("span", Yn, [
        s("span", el, d(e.name), 1),
        s("span", tl, d(e.type), 1)
      ])
    ], 8, Xn));
  }
}), nl = { class: "flex h-[var(--app-header-height)] shrink-0 items-center justify-between gap-4 border-b border-line bg-surface px-6" }, ll = { class: "min-w-0 flex-1" }, sl = { class: "flex items-center gap-3" }, ol = /* @__PURE__ */ x({
  __name: "Topbar",
  props: {
    org: {},
    orgType: {},
    orgColor: { default: "#0b1a33" },
    unread: { type: Boolean }
  },
  emits: ["notifications"],
  setup(e, { emit: l }) {
    const o = l;
    return (i, n) => (t(), a("header", nl, [
      s("div", ll, [
        V(i.$slots, "default")
      ]),
      s("div", sl, [
        c(O, {
          icon: "bell",
          label: "Notifications",
          size: "lg",
          dot: e.unread,
          onClick: n[0] || (n[0] = (r) => o("notifications"))
        }, null, 8, ["dot"]),
        c(al, {
          name: e.org,
          type: e.orgType,
          color: e.orgColor
        }, null, 8, ["name", "type", "color"])
      ])
    ]));
  }
}), il = { class: "flex min-w-0 flex-1 flex-col" }, rl = { class: "flex-1 overflow-y-auto px-8 py-7" }, Xm = /* @__PURE__ */ x({
  __name: "AppShell",
  props: {
    groups: {},
    active: {},
    expanded: {},
    org: { default: "HDFC Bank L" },
    orgType: { default: "Enterprise" },
    orgColor: {},
    tone: { default: "enterprise" },
    user: { default: () => ({ name: "Ravi Menon", role: "Super Admin" }) }
  },
  setup(e) {
    return (l, o) => (t(), a("div", {
      class: h(["flex h-screen min-h-[640px] overflow-hidden", e.tone === "regulator" ? "bg-page-regulator" : "bg-page"])
    }, [
      c(Wn, {
        groups: e.groups,
        active: e.active,
        expanded: e.expanded,
        user: e.user
      }, null, 8, ["groups", "active", "expanded", "user"]),
      s("div", il, [
        c(ol, {
          org: e.org,
          "org-type": e.orgType,
          "org-color": e.orgColor
        }, null, 8, ["org", "org-type", "org-color"]),
        s("main", rl, [
          V(l.$slots, "default")
        ])
      ])
    ], 2));
  }
}), dl = { class: "w-full max-w-md rounded-2xl border border-line bg-surface p-8 shadow-card" }, cl = { class: "portal-type-section-title mt-6" }, ul = {
  key: 0,
  class: "portal-type-page-subtitle mt-1"
}, ml = { class: "portal-stack-form mt-6" }, fl = {
  key: 1,
  class: "mt-6 border-t border-line pt-4 text-center text-[13px] text-ink-2"
}, Ym = /* @__PURE__ */ x({
  __name: "AuthCard",
  props: {
    title: {},
    description: {},
    product: { default: "ConsentOS" }
  },
  setup(e) {
    return (l, o) => (t(), a("section", dl, [
      c(Z, {
        wordmark: e.product,
        size: 26
      }, null, 8, ["wordmark"]),
      s("h1", cl, d(e.title), 1),
      e.description ? (t(), a("p", ul, d(e.description), 1)) : m("", !0),
      s("div", ml, [
        V(l.$slots, "default")
      ]),
      l.$slots.footer ? (t(), a("div", fl, [
        V(l.$slots, "footer")
      ])) : m("", !0)
    ]));
  }
}), H = /* @__PURE__ */ x({
  __name: "Eyebrow",
  props: {
    mono: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    return (l, o) => (t(), $(_e(e.as), {
      class: h(e.mono ? "eyebrow-mono" : "eyebrow")
    }, {
      default: b(() => [
        V(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bl = ["aria-label"], ye = /* @__PURE__ */ x({
  __name: "Hint",
  props: {
    text: {},
    side: { default: "top" }
  },
  setup(e) {
    return (l, o) => (t(), $(v(ha), { "delay-duration": 150 }, {
      default: b(() => [
        c(v(va), null, {
          default: b(() => [
            c(v(pa), { "as-child": "" }, {
              default: b(() => [
                V(l.$slots, "default", {}, () => [
                  s("button", {
                    type: "button",
                    "aria-label": e.text,
                    class: "inline-flex text-ink-3 hover:text-ink"
                  }, [
                    c(_, {
                      name: "info",
                      size: 14
                    })
                  ], 8, bl)
                ])
              ]),
              _: 3
            }),
            c(v(ya), null, {
              default: b(() => [
                c(v(ka), {
                  side: e.side,
                  "side-offset": 6,
                  class: "z-50 max-w-64 rounded-sm bg-navy-900 px-2.5 py-1.5 text-xs leading-[18px] text-white shadow-pop"
                }, {
                  default: b(() => [
                    p(d(e.text) + " ", 1),
                    c(v($a), { class: "fill-navy-900" })
                  ]),
                  _: 1
                }, 8, ["side"])
              ]),
              _: 1
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), xl = { class: "rounded-xl border border-line bg-surface p-5 shadow-card" }, gl = { class: "mt-4 flex items-center gap-2" }, hl = { class: "font-mono text-xs text-ink-3" }, vl = { class: "mt-1 divide-y divide-line" }, pl = { class: "min-w-0 flex-1 text-[13px] font-medium text-ink" }, yl = {
  key: 0,
  class: "text-danger-500"
}, kl = { class: "font-mono text-[11px] whitespace-nowrap text-ink-3" }, ef = /* @__PURE__ */ x({
  __name: "CsvFormatCard",
  props: {
    mandatory: {},
    optional: {}
  },
  emits: ["download"],
  setup(e, { emit: l }) {
    const o = l;
    return (i, n) => (t(), a("section", xl, [
      c(H, { mono: "" }, {
        default: b(() => [...n[1] || (n[1] = [
          p("CSV format", -1)
        ])]),
        _: 1
      }),
      (t(!0), a(k, null, C([{ title: "Mandatory", rows: e.mandatory, variant: "danger", dot: "bg-brand-600" }, { title: "Optional", rows: e.optional, variant: "neutral", dot: "bg-gray-300" }], (r) => (t(), a(k, {
        key: r.title
      }, [
        s("div", gl, [
          c(F, {
            variant: r.variant,
            size: "sm",
            caps: ""
          }, {
            default: b(() => [
              p(d(r.title), 1)
            ]),
            _: 2
          }, 1032, ["variant"]),
          n[2] || (n[2] = s("span", { class: "h-px flex-1 bg-line" }, null, -1)),
          s("span", hl, d(r.rows.length), 1)
        ]),
        s("ul", vl, [
          (t(!0), a(k, null, C(r.rows, (u) => (t(), a("li", {
            key: u.name,
            class: "flex items-center gap-2 py-2.5"
          }, [
            s("span", {
              class: h(["size-1.5 shrink-0 rounded-full", r.dot]),
              "aria-hidden": "true"
            }, null, 2),
            s("span", pl, [
              p(d(u.name), 1),
              r.title === "Mandatory" ? (t(), a("span", yl, " *")) : m("", !0)
            ]),
            s("span", kl, d(u.format), 1),
            c(ye, {
              text: u.help
            }, null, 8, ["text"])
          ]))), 128))
        ])
      ], 64))), 128)),
      c(I, {
        class: "mt-4",
        variant: "secondary",
        icon: "download",
        block: "",
        onClick: n[0] || (n[0] = (r) => o("download"))
      }, {
        default: b(() => [...n[3] || (n[3] = [
          p("Download Template", -1)
        ])]),
        _: 1
      })
    ]));
  }
}), Pe = (e, l) => {
  const o = e.__vccOpts || e;
  for (const [i, n] of l)
    o[i] = n;
  return o;
}, $l = {}, wl = { class: "inline-flex h-5 min-w-5 items-center justify-center rounded-xs border border-line bg-gray-50 px-1 font-mono text-[11px] font-medium text-gray-600 shadow-[0_1px_0_var(--color-line)]" };
function _l(e, l) {
  return t(), a("kbd", wl, [
    V(e.$slots, "default")
  ]);
}
const Q = /* @__PURE__ */ Pe($l, [["render", _l]]), je = /* @__PURE__ */ x({
  __name: "SelectField",
  props: /* @__PURE__ */ T({
    options: {},
    placeholder: { default: "Select" },
    invalid: { type: Boolean },
    disabled: { type: Boolean },
    size: { default: "md" },
    ariaLabel: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue");
    return (o, i) => (t(), $(v(wa), {
      modelValue: l.value,
      "onUpdate:modelValue": i[0] || (i[0] = (n) => l.value = n),
      disabled: e.disabled
    }, {
      default: b(() => [
        c(v(_a), {
          "aria-label": e.ariaLabel || e.placeholder,
          class: h(["flex w-full items-center justify-between gap-2 rounded-md border bg-surface px-3 text-left text-[13px] text-ink outline-none transition-shadow focus:ring-3 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70 data-[placeholder]:text-ink-3", [e.size === "sm" ? "h-[var(--button-height-md)]" : "h-[var(--input-height-md)]", e.invalid ? "border-danger-500 focus:ring-danger-100" : "border-line focus:border-brand-500 focus:ring-brand-100"]])
        }, {
          default: b(() => [
            c(v(za), { placeholder: e.placeholder }, null, 8, ["placeholder"]),
            c(v(Ca), null, {
              default: b(() => [
                c(_, {
                  name: "chevron-down",
                  class: "text-ink-3"
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["aria-label", "class"]),
        c(v(Sa), null, {
          default: b(() => [
            c(v(Va), {
              position: "popper",
              "side-offset": 6,
              class: "z-50 max-h-72 w-[var(--reka-select-trigger-width)] overflow-hidden rounded-md border border-line bg-surface shadow-pop"
            }, {
              default: b(() => [
                c(v(Ma), { class: "p-1" }, {
                  default: b(() => [
                    (t(!0), a(k, null, C(e.options, (n) => (t(), $(v(Ba), {
                      key: n.value,
                      value: n.value,
                      disabled: n.disabled,
                      class: "flex cursor-pointer items-center justify-between rounded-sm px-2.5 py-2 text-sm text-gray-700 outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40 data-[highlighted]:bg-brand-50 data-[state=checked]:font-medium data-[state=checked]:text-brand-600"
                    }, {
                      default: b(() => [
                        c(v(La), null, {
                          default: b(() => [
                            p(d(n.label), 1)
                          ]),
                          _: 2
                        }, 1024),
                        c(v(Ta), null, {
                          default: b(() => [
                            c(_, {
                              name: "check",
                              size: 14
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]))), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "disabled"]));
  }
}), zl = { class: "flex flex-wrap items-center gap-3 rounded-xl border border-line bg-surface p-3 shadow-pop" }, Cl = { class: "min-w-56 flex-1" }, tf = /* @__PURE__ */ x({
  __name: "DecisionBar",
  props: /* @__PURE__ */ T({
    reasons: { default: () => [
      { label: "DLT history clean", value: "dlt-clean" },
      { label: "KYC mismatch", value: "kyc-mismatch" },
      { label: "Complaint threshold exceeded", value: "complaints" },
      { label: "Needs compliance review", value: "review" }
    ] }
  }, {
    reason: {},
    reasonModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["decide"], ["update:reason"]),
  setup(e, { emit: l }) {
    const o = L(e, "reason"), i = l;
    return (n, r) => (t(), a("div", zl, [
      s("div", Cl, [
        c(je, {
          modelValue: o.value,
          "onUpdate:modelValue": r[0] || (r[0] = (u) => o.value = u),
          options: e.reasons,
          placeholder: "Reason code",
          size: "sm"
        }, null, 8, ["modelValue", "options"])
      ]),
      c(I, {
        variant: "ghost",
        size: "sm",
        onClick: r[1] || (r[1] = (u) => i("decide", "blacklist"))
      }, {
        default: b(() => [
          c(Q, null, {
            default: b(() => [...r[5] || (r[5] = [
              p("B", -1)
            ])]),
            _: 1
          }),
          r[6] || (r[6] = p(" Blacklist", -1))
        ]),
        _: 1
      }),
      c(I, {
        variant: "secondary",
        size: "sm",
        onClick: r[2] || (r[2] = (u) => i("decide", "escalate"))
      }, {
        default: b(() => [
          c(Q, null, {
            default: b(() => [...r[7] || (r[7] = [
              p("E", -1)
            ])]),
            _: 1
          }),
          r[8] || (r[8] = p(" Escalate", -1))
        ]),
        _: 1
      }),
      c(I, {
        variant: "danger",
        size: "sm",
        onClick: r[3] || (r[3] = (u) => i("decide", "reject"))
      }, {
        default: b(() => [...r[9] || (r[9] = [
          s("span", { class: "font-mono text-[11px] opacity-80" }, "R", -1),
          p(" Reject", -1)
        ])]),
        _: 1
      }),
      c(I, {
        size: "sm",
        onClick: r[4] || (r[4] = (u) => i("decide", "approve"))
      }, {
        default: b(() => [...r[10] || (r[10] = [
          s("span", { class: "font-mono text-[11px] opacity-80" }, "A", -1),
          p(" Approve", -1)
        ])]),
        _: 1
      })
    ]));
  }
}), E = /* @__PURE__ */ x({
  __name: "IconTile",
  props: {
    icon: {},
    tone: { default: "brand" },
    size: { default: "md" },
    round: { type: Boolean }
  },
  setup(e) {
    const l = {
      brand: "bg-brand-50 text-brand-600",
      success: "bg-success-50 text-success-600",
      warning: "bg-warning-50 text-warning-700",
      danger: "bg-danger-100 text-danger-600",
      neutral: "bg-gray-100 text-gray-600",
      "solid-success": "bg-success-500 text-white"
    }, o = { xs: ["size-6 rounded-[6px]", 13], sm: ["size-8 rounded-sm", 16], md: ["size-11 rounded-md", 20], lg: ["size-14 rounded-lg", 26] };
    return (i, n) => (t(), a("span", {
      class: h(["inline-flex shrink-0 items-center justify-center", [l[e.tone], o[e.size][0], e.round && "!rounded-full"]])
    }, [
      c(_, {
        name: e.icon,
        size: o[e.size][1]
      }, null, 8, ["name", "size"])
    ], 2));
  }
}), Sl = { class: "rounded-lg border border-line bg-surface p-4 shadow-card" }, Vl = { class: "flex items-center gap-2.5" }, Ml = { class: "flex-1 text-sm font-semibold text-ink" }, Bl = { class: "mt-3 flex flex-col gap-1.5" }, Ll = { class: "text-ink-3" }, Tl = { class: "text-right font-medium text-ink" }, af = /* @__PURE__ */ x({
  __name: "EvidenceCard",
  props: {
    title: {},
    icon: {},
    verdict: {},
    verdictTone: {},
    items: {}
  },
  setup(e) {
    return (l, o) => (t(), a("article", Sl, [
      s("header", Vl, [
        c(E, {
          icon: e.icon,
          size: "xs"
        }, null, 8, ["icon"]),
        s("h3", Ml, d(e.title), 1),
        c(F, {
          variant: e.verdictTone,
          size: "sm",
          dot: ""
        }, {
          default: b(() => [
            p(d(e.verdict), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      s("dl", Bl, [
        (t(!0), a(k, null, C(e.items, (i) => (t(), a("div", {
          key: i.label,
          class: "flex justify-between gap-3 text-[13px]"
        }, [
          s("dt", Ll, d(i.label), 1),
          s("dd", Tl, d(i.value), 1)
        ]))), 128))
      ])
    ]));
  }
}), Dl = {
  key: 0,
  class: "rounded-xl border border-warning-200 bg-warning-50 p-4"
}, Al = { class: "flex flex-wrap items-center gap-3" }, Pl = { class: "flex-1 text-sm font-semibold text-ink" }, jl = { class: "mt-3 flex flex-wrap gap-x-5 gap-y-2" }, Rl = {
  key: 1,
  class: "flex items-center gap-2 rounded-xl border border-success-500/30 bg-success-50 px-4 py-3 text-sm font-medium text-success-700",
  role: "status"
}, nf = /* @__PURE__ */ x({
  __name: "GoLiveBanner",
  props: {
    items: {}
  },
  setup(e) {
    const l = e, o = S(() => l.items.filter((i) => i.done).length);
    return (i, n) => o.value < e.items.length ? (t(), a("section", Dl, [
      s("div", Al, [
        c(_, {
          name: "flag",
          size: 18,
          class: "text-warning-700"
        }),
        s("p", Pl, "Go-live checklist: " + d(o.value) + " of " + d(e.items.length) + " complete", 1),
        c(N, {
          class: "!w-40",
          value: o.value,
          max: e.items.length,
          tone: "warning",
          label: "Go-live checklist"
        }, null, 8, ["value", "max"])
      ]),
      s("ul", jl, [
        (t(!0), a(k, null, C(e.items, (r) => (t(), a("li", {
          key: r.label,
          class: h(["flex items-center gap-1.5 text-[13px]", r.done ? "text-success-700" : "text-gray-700"])
        }, [
          c(_, {
            name: r.done ? "circle-check" : "circle",
            size: 14
          }, null, 8, ["name"]),
          p(d(r.label), 1)
        ], 2))), 128))
      ])
    ])) : (t(), a("p", Rl, [
      c(_, { name: "circle-check" }),
      n[0] || (n[0] = p(" All systems operational", -1))
    ]));
  }
}), Il = { class: "relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-600 to-brand-900 p-5 text-white" }, El = { class: "relative" }, Ol = { class: "flex items-start justify-between gap-3" }, Ul = { class: "text-[11px] font-semibold tracking-[0.09em] uppercase text-white/85" }, Nl = {
  key: 0,
  class: "rounded-full bg-white/20 px-3 py-1 text-xs font-medium"
}, Fl = { class: "mt-2 text-4xl leading-tight font-semibold tracking-tight tnum" }, Hl = {
  key: 0,
  class: "mt-0.5 text-[13px] text-white/90"
}, Kl = ["aria-label", "aria-valuenow"], lf = /* @__PURE__ */ x({
  __name: "HeroStat",
  props: {
    label: {},
    value: {},
    caption: {},
    pill: {},
    progress: {}
  },
  setup(e) {
    return (l, o) => (t(), a("article", Il, [
      o[0] || (o[0] = s("svg", {
        class: "absolute top-0 right-0 h-full opacity-20",
        viewBox: "0 0 160 170",
        fill: "none",
        "aria-hidden": "true"
      }, [
        s("path", {
          d: "M40 0H110L40 80Z",
          fill: "#fff",
          "fill-opacity": ".45"
        }),
        s("path", {
          d: "M160 60V170L90 115Z",
          fill: "#fff",
          "fill-opacity": ".45"
        })
      ], -1)),
      s("div", El, [
        s("div", Ol, [
          s("p", Ul, d(e.label), 1),
          e.pill ? (t(), a("span", Nl, d(e.pill), 1)) : m("", !0)
        ]),
        s("p", Fl, d(e.value), 1),
        e.caption ? (t(), a("p", Hl, d(e.caption), 1)) : m("", !0),
        e.progress !== void 0 ? (t(), a("div", {
          key: 1,
          class: "mt-3 h-1.5 overflow-hidden rounded-full bg-brand-500",
          role: "progressbar",
          "aria-label": e.label,
          "aria-valuenow": e.progress,
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, [
          s("div", {
            class: "h-full rounded-full bg-brand-300",
            style: P({ width: `${e.progress}%` })
          }, null, 4)
        ], 8, Kl)) : m("", !0)
      ])
    ]));
  }
}), Gl = /* @__PURE__ */ x({
  __name: "BigStat",
  props: {
    value: {},
    unit: {},
    tone: { default: "ink" },
    size: { default: "lg" }
  },
  setup(e) {
    const l = { ink: "text-ink", brand: "text-brand-600", success: "text-success-600", warning: "text-warning-700", danger: "text-danger-600" }, o = { md: "text-2xl", lg: "text-[32px]", xl: "text-[40px]" };
    return (i, n) => (t(), a("span", {
      class: h(["inline-flex items-baseline gap-1 leading-none font-semibold tracking-tight tnum", l[e.tone]])
    }, [
      s("span", {
        class: h(o[e.size])
      }, d(e.value), 3),
      e.unit ? (t(), a("span", {
        key: 0,
        class: h(["text-sm font-normal tracking-normal", e.tone === "ink" ? "text-ink-2" : ""])
      }, d(e.unit), 3)) : m("", !0)
    ], 2));
  }
}), Wl = { class: "sr-only" }, Zl = /* @__PURE__ */ x({
  __name: "DeltaPill",
  props: {
    direction: { default: "up" },
    tone: { default: "good" }
  },
  setup(e) {
    const l = { good: "bg-success-100 text-success-700", bad: "bg-danger-100 text-danger-700", neutral: "bg-gray-100 text-gray-600" };
    return (o, i) => (t(), a("span", {
      class: h(["inline-flex items-center gap-1 rounded-xs px-2 py-0.5 text-xs font-medium", l[e.tone]])
    }, [
      (t(), a("svg", {
        width: "9",
        height: "8",
        viewBox: "0 0 9 8",
        "aria-hidden": "true",
        class: h(e.direction === "down" && "rotate-180")
      }, [...i[0] || (i[0] = [
        s("path", {
          d: "M4.5 0 9 8H0z",
          fill: "currentColor"
        }, null, -1)
      ])], 2)),
      s("span", Wl, d(e.direction === "up" ? "Up" : "Down"), 1),
      V(o.$slots, "default")
    ], 2));
  }
}), ql = ["viewBox", "aria-label"], Jl = ["points", "fill"], Ql = ["points", "stroke"], ue = 200, Xl = /* @__PURE__ */ x({
  __name: "Sparkline",
  props: {
    data: {},
    tone: { default: "brand" },
    height: { default: 36 },
    label: { default: "Trend" }
  },
  setup(e) {
    const l = e, o = { brand: "#2563eb", success: "#15814c", danger: "#dc2626" }, i = S(() => {
      const u = Math.min(...l.data), f = Math.max(...l.data) - u || 1;
      return l.data.map((g, y) => [y / (l.data.length - 1) * ue, l.height - 3 - (g - u) / f * (l.height - 8)]);
    }), n = S(() => i.value.map((u) => u.join(",")).join(" ")), r = S(() => `0,${l.height} ${n.value} ${ue},${l.height}`);
    return (u, f) => (t(), a("svg", {
      viewBox: `0 0 ${ue} ${e.height}`,
      preserveAspectRatio: "none",
      class: "block w-full",
      style: P({ height: `${e.height}px` }),
      role: "img",
      "aria-label": e.label
    }, [
      s("polygon", {
        points: r.value,
        fill: o[e.tone],
        "fill-opacity": "0.12"
      }, null, 8, Jl),
      s("polyline", {
        points: n.value,
        fill: "none",
        stroke: o[e.tone],
        "stroke-width": "2",
        "vector-effect": "non-scaling-stroke",
        "stroke-linejoin": "round"
      }, null, 8, Ql)
    ], 12, ql));
  }
}), Yl = ["width", "height", "aria-label"], ke = /* @__PURE__ */ x({
  __name: "Spinner",
  props: {
    size: { default: 24 },
    label: { default: "Loading" }
  },
  setup(e) {
    return (l, o) => (t(), a("svg", {
      width: e.size,
      height: e.size,
      viewBox: "0 0 24 24",
      fill: "none",
      class: "animate-spin",
      role: "status",
      "aria-label": e.label
    }, [...o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "9.5",
        stroke: "#dbeafe",
        "stroke-width": "2.5"
      }, null, -1),
      s("path", {
        d: "M21.5 12A9.5 9.5 0 0 0 12 2.5",
        stroke: "#2563eb",
        "stroke-width": "2.5",
        "stroke-linecap": "round"
      }, null, -1)
    ])], 8, Yl));
  }
}), es = { class: "flex items-start justify-between gap-3" }, ts = {
  key: 0,
  class: "flex flex-1 flex-col items-center justify-center gap-2 text-center"
}, as = {
  key: 0,
  class: "mt-2 text-[13px] text-ink-2"
}, ns = {
  key: 1,
  class: "mt-2"
}, ls = { class: "mt-auto pt-3" }, sf = /* @__PURE__ */ x({
  __name: "KpiCard",
  props: {
    label: {},
    value: {},
    unit: {},
    caption: {},
    icon: {},
    tone: { default: "plain" },
    delta: {},
    deltaTone: { default: "good" },
    trend: {},
    trendTone: { default: "brand" },
    progress: {},
    loading: { type: Boolean }
  },
  setup(e) {
    return (l, o) => (t(), a("article", {
      class: h(["flex min-h-[208px] flex-col overflow-hidden rounded-lg border border-line p-5 shadow-card", e.tone === "brand" ? "bg-gradient-to-b from-brand-50 to-surface to-55%" : e.tone === "danger" ? "bg-gradient-to-b from-danger-100 to-surface to-55%" : "bg-surface"])
    }, [
      s("div", es, [
        c(H, {
          mono: "",
          class: h(e.tone === "brand" ? "!text-brand-700" : e.tone === "danger" ? "!text-danger-600" : "")
        }, {
          default: b(() => [
            p(d(e.label), 1)
          ]),
          _: 1
        }, 8, ["class"]),
        e.icon ? (t(), $(E, {
          key: 0,
          icon: e.icon,
          tone: e.tone === "danger" ? "danger" : "brand",
          size: "sm",
          class: "-mt-1 -mr-1"
        }, null, 8, ["icon", "tone"])) : m("", !0)
      ]),
      e.loading ? (t(), a("div", ts, [
        c(ke),
        o[0] || (o[0] = s("p", { class: "text-sm font-semibold text-ink" }, "Loading data", -1))
      ])) : (t(), a(k, { key: 1 }, [
        c(Gl, {
          class: "mt-2",
          value: e.value,
          unit: e.unit,
          tone: e.tone === "brand" ? "brand" : e.tone === "danger" ? "danger" : "ink"
        }, null, 8, ["value", "unit", "tone"]),
        e.caption ? (t(), a("p", as, d(e.caption), 1)) : m("", !0),
        e.delta ? (t(), a("div", ns, [
          c(Zl, {
            tone: e.deltaTone,
            direction: e.deltaTone === "neutral" ? "down" : "up"
          }, {
            default: b(() => [
              p(d(e.delta), 1)
            ]),
            _: 1
          }, 8, ["tone", "direction"])
        ])) : m("", !0),
        s("div", ls, [
          e.progress !== void 0 ? (t(), $(N, {
            key: 0,
            value: e.progress,
            size: "md",
            label: e.label
          }, null, 8, ["value", "label"])) : e.trend ? (t(), $(Xl, {
            key: 1,
            data: e.trend,
            tone: e.trendTone,
            label: `${e.label} trend`
          }, null, 8, ["data", "tone", "label"])) : m("", !0)
        ])
      ], 64))
    ], 2));
  }
}), ss = { class: "flex flex-col gap-2.5" }, of = /* @__PURE__ */ x({
  __name: "LiveChecks",
  props: {
    checks: {}
  },
  setup(e) {
    return (l, o) => (t(), a("ul", ss, [
      (t(!0), a(k, null, C(e.checks, (i) => (t(), a("li", {
        key: i.label,
        class: "flex items-center gap-2.5 text-sm"
      }, [
        i.state === "running" ? (t(), $(ke, {
          key: 0,
          size: 18,
          label: `${i.label} running`
        }, null, 8, ["label"])) : i.state === "pass" ? (t(), $(_, {
          key: 1,
          name: "circle-check",
          size: 18,
          class: "text-success-600"
        })) : i.state === "fail" ? (t(), $(_, {
          key: 2,
          name: "circle-x",
          size: 18,
          class: "text-danger-600"
        })) : (t(), $(_, {
          key: 3,
          name: "circle",
          size: 18,
          class: "text-gray-300"
        })),
        s("span", {
          class: h(["flex-1", i.state === "pending" ? "text-ink-3" : "text-ink"])
        }, d(i.label), 3),
        i.detail ? (t(), a("span", {
          key: 4,
          class: h(["text-[13px]", i.state === "fail" ? "text-danger-700" : "text-ink-3"])
        }, d(i.detail), 3)) : m("", !0)
      ]))), 128))
    ]));
  }
}), os = {
  key: 0,
  class: "block h-0.5 w-2.5 rounded bg-white"
}, is = ["for"], rs = {
  key: 0,
  class: "block text-[13px] leading-5 text-ink-3"
}, G = /* @__PURE__ */ x({
  __name: "Checkbox",
  props: /* @__PURE__ */ T({
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    description: {},
    ariaLabel: {}
  }, {
    modelValue: { type: [Boolean, String], default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue"), o = ze();
    return (i, n) => (t(), a("div", {
      class: h(["flex items-start gap-2.5", e.disabled && "opacity-50"])
    }, [
      c(v(Da), {
        id: v(o),
        modelValue: l.value,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => l.value = r),
        "aria-label": e.ariaLabel,
        disabled: e.disabled,
        class: h(["mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-[5px] border bg-surface transition-colors data-[state=checked]:border-brand-600 data-[state=checked]:bg-brand-600 data-[state=indeterminate]:border-brand-600 data-[state=indeterminate]:bg-brand-600 disabled:cursor-not-allowed", e.invalid ? "border-danger-500" : "border-line-strong"])
      }, {
        default: b(() => [
          c(v(Aa), { class: "text-white" }, {
            default: b(() => [
              l.value === "indeterminate" ? (t(), a("span", os)) : (t(), $(_, {
                key: 1,
                name: "check",
                size: 13,
                "stroke-width": 3
              }))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["id", "modelValue", "aria-label", "disabled", "class"]),
      i.$slots.default ? (t(), a("label", {
        key: 0,
        for: v(o),
        class: "text-sm leading-[22px] text-ink select-none"
      }, [
        V(i.$slots, "default"),
        e.description ? (t(), a("span", rs, d(e.description), 1)) : m("", !0)
      ], 8, is)) : m("", !0)
    ], 2));
  }
}), ds = { class: "border-b border-line last:border-0" }, cs = { class: "flex flex-wrap items-center gap-x-6 gap-y-3 px-5 py-4" }, us = { class: "min-w-56 flex-1" }, ms = { class: "flex flex-wrap items-center gap-2 text-[15px] font-semibold text-ink" }, fs = { class: "mt-1 text-[13px] text-ink-2" }, bs = { class: "flex flex-wrap gap-8" }, xs = { class: "eyebrow" }, gs = { class: "text-xs text-ink-2" }, hs = { class: "flex items-center gap-2" }, vs = {
  key: 0,
  class: "border-t border-line bg-gray-50 px-5 py-3 pl-14"
}, ps = { class: "mb-2 text-xs text-ink-2" }, ys = { class: "flex flex-col gap-2" }, ks = { class: "min-w-40 flex-1" }, $s = { class: "font-mono text-[13px] font-medium text-ink" }, ws = { class: "text-xs text-ink-2" }, _s = { class: "min-w-28 text-right" }, zs = { class: "text-sm font-semibold text-ink tnum" }, Cs = { class: "text-xs text-ink-2" }, rf = /* @__PURE__ */ x({
  __name: "LobFileGroup",
  props: /* @__PURE__ */ T({
    title: {},
    fileCount: {},
    summary: {},
    amounts: {},
    files: {},
    defaultOpen: { type: Boolean }
  }, {
    selected: { type: Boolean, default: !1 },
    selectedModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["review"], ["update:selected"]),
  setup(e, { emit: l }) {
    const o = e, i = l, n = R(o.defaultOpen), r = L(e, "selected");
    return (u, f) => (t(), a("section", ds, [
      s("div", cs, [
        c(G, {
          modelValue: r.value,
          "onUpdate:modelValue": f[0] || (f[0] = (g) => r.value = g),
          "aria-label": `Select ${e.title}`
        }, null, 8, ["modelValue", "aria-label"]),
        s("div", us, [
          s("h3", ms, [
            p(d(e.title), 1),
            c(F, { size: "sm" }, {
              default: b(() => [
                p(d(e.fileCount) + " " + d(e.fileCount === 1 ? "file" : "files"), 1)
              ]),
              _: 1
            })
          ]),
          s("p", fs, d(e.summary), 1)
        ]),
        s("dl", bs, [
          (t(!0), a(k, null, C(e.amounts, (g) => (t(), a("div", {
            key: g.label,
            class: "min-w-24 text-right"
          }, [
            s("dt", xs, d(g.label), 1),
            s("dd", {
              class: h(["mt-1 text-sm font-semibold tnum", g.highlight ? "text-warning-700" : "text-ink"])
            }, d(g.amount), 3),
            s("dd", gs, d(g.consents), 1)
          ]))), 128))
        ]),
        s("div", hs, [
          c(I, {
            size: "sm",
            onClick: f[1] || (f[1] = (g) => i("review"))
          }, {
            default: b(() => [...f[3] || (f[3] = [
              p("Review", -1)
            ])]),
            _: 1
          }),
          c(O, {
            icon: n.value ? "chevron-down" : "chevron-right",
            label: n.value ? "Hide files" : "Show files",
            variant: "outline",
            size: "md",
            "aria-expanded": !!n.value,
            onClick: f[2] || (f[2] = (g) => n.value = !n.value)
          }, null, 8, ["icon", "label", "aria-expanded"])
        ])
      ]),
      n.value && e.files?.length ? (t(), a("div", vs, [
        s("p", ps, "Files in " + d(e.title), 1),
        s("ul", ys, [
          (t(!0), a(k, null, C(e.files, (g) => (t(), a("li", {
            key: g.name,
            class: "flex flex-wrap items-center gap-4 rounded-lg border border-line bg-surface px-4 py-3"
          }, [
            s("div", ks, [
              s("p", $s, d(g.name), 1),
              s("p", ws, d(g.meta), 1)
            ]),
            c(F, {
              variant: g.statusVariant,
              icon: g.statusIcon
            }, {
              default: b(() => [
                p(d(g.status), 1)
              ]),
              _: 2
            }, 1032, ["variant", "icon"]),
            s("div", _s, [
              s("p", zs, d(g.amount), 1),
              s("p", Cs, d(g.consents), 1)
            ]),
            c(I, {
              variant: "secondary",
              size: "sm"
            }, {
              default: b(() => [
                p(d(g.action), 1)
              ]),
              _: 2
            }, 1024)
          ]))), 128))
        ])
      ])) : m("", !0)
    ]));
  }
}), Ss = ["width", "height", "viewBox", "aria-label"], Vs = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Ms = {
  key: 0,
  class: "absolute inset-0 flex flex-col items-center justify-center text-center"
}, Bs = {
  key: 0,
  class: "text-xs text-ink-3"
}, Ls = /* @__PURE__ */ x({
  __name: "DonutChart",
  props: {
    segments: {},
    center: {},
    caption: {},
    size: { default: 200 },
    thickness: { default: 28 },
    gap: { default: 1.2 }
  },
  setup(e) {
    const l = e, o = S(() => {
      const n = l.segments.reduce((g, y) => g + y.value, 0) || 1, r = (l.size - l.thickness) / 2, u = 2 * Math.PI * r;
      let f = 0;
      return l.segments.map((g) => {
        const y = g.value / n, w = l.segments.length > 1 ? l.gap / 100 * u : 0, z = { ...g, r, dash: `${Math.max(y * u - w, 0.5)} ${u}`, offset: -f * u - w / 2 };
        return f += y, z;
      });
    }), i = S(() => l.segments.map((n) => `${n.label}: ${n.value}`).join(", "));
    return (n, r) => (t(), a("div", {
      class: "relative inline-block shrink-0",
      style: P({ width: `${e.size}px`, height: `${e.size}px` })
    }, [
      (t(), a("svg", {
        width: e.size,
        height: e.size,
        viewBox: `0 0 ${e.size} ${e.size}`,
        role: "img",
        "aria-label": i.value,
        class: "-rotate-90"
      }, [
        (t(!0), a(k, null, C(o.value, (u) => (t(), a("circle", {
          key: u.label,
          cx: e.size / 2,
          cy: e.size / 2,
          r: u.r,
          fill: "none",
          stroke: u.color,
          "stroke-width": e.thickness,
          "stroke-dasharray": u.dash,
          "stroke-dashoffset": u.offset
        }, null, 8, Vs))), 128))
      ], 8, Ss)),
      e.center ? (t(), a("div", Ms, [
        s("span", {
          class: "font-semibold tracking-tight text-ink tnum",
          style: P({ fontSize: `${Math.max(e.size * 0.12, 15)}px` })
        }, d(e.center), 5),
        e.caption ? (t(), a("span", Bs, d(e.caption), 1)) : m("", !0)
      ])) : m("", !0)
    ], 4));
  }
}), Ts = { class: "flex flex-wrap items-center gap-x-8 gap-y-5 rounded-xl border border-line bg-surface p-6 shadow-card" }, Ds = { class: "grid min-w-0 flex-1 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6" }, As = { class: "eyebrow flex items-center gap-1.5" }, Ps = { class: "mt-2 flex items-baseline gap-1.5" }, js = { class: "text-[32px] leading-10 font-semibold tracking-tight text-ink tnum" }, Rs = {
  key: 0,
  class: "text-sm font-medium text-ink-2"
}, Is = ["aria-label"], Es = {
  key: 0,
  class: "mt-1 text-[13px] leading-[18px] text-ink-2"
}, df = /* @__PURE__ */ x({
  __name: "MetricStrip",
  props: {
    segments: {},
    center: {},
    caption: {},
    metrics: {}
  },
  setup(e) {
    return (l, o) => (t(), a("section", Ts, [
      c(Ls, {
        segments: e.segments,
        center: e.center,
        caption: e.caption,
        size: 164,
        thickness: 20
      }, null, 8, ["segments", "center", "caption"]),
      s("dl", Ds, [
        (t(!0), a(k, null, C(e.metrics, (i, n) => (t(), a("div", {
          key: i.label,
          class: h(["min-w-0", n > 0 && "lg:border-l lg:border-line lg:pl-6"])
        }, [
          s("dt", As, [
            i.dot ? (t(), a("span", {
              key: 0,
              class: "size-2 rounded-full",
              style: P({ background: i.dot }),
              "aria-hidden": "true"
            }, null, 4)) : m("", !0),
            p(d(i.label), 1)
          ]),
          s("dd", Ps, [
            s("span", js, d(i.value), 1),
            i.share ? (t(), a("span", Rs, d(i.share), 1)) : m("", !0),
            i.downloadable ? (t(), a("button", {
              key: 1,
              type: "button",
              class: "text-ink-2 hover:text-brand-600",
              "aria-label": `Download ${i.label}`
            }, [
              c(_, { name: "download" })
            ], 8, Is)) : m("", !0)
          ]),
          i.caption ? (t(), a("dd", Es, d(i.caption), 1)) : m("", !0)
        ], 2))), 128))
      ])
    ]));
  }
}), Os = { class: "rounded-xl border border-line bg-surface p-6 shadow-card" }, Us = { class: "eyebrow text-center" }, Ns = { class: "mt-6 grid gap-6 md:auto-cols-fr md:grid-flow-col" }, Fs = ["aria-current"], Hs = { class: "portal-type-body-emphasis mt-3" }, Ks = { class: "portal-type-page-subtitle mt-1 max-w-56" }, cf = /* @__PURE__ */ x({
  __name: "NextSteps",
  props: {
    title: { default: "What happens next" },
    steps: {}
  },
  setup(e) {
    return (l, o) => (t(), a("section", Os, [
      s("p", Us, d(e.title), 1),
      s("ol", Ns, [
        (t(!0), a(k, null, C(e.steps, (i, n) => (t(), a("li", {
          key: i.title,
          class: "relative flex flex-col items-center text-center",
          "aria-current": i.state === "active" ? "step" : void 0
        }, [
          n < e.steps.length - 1 ? (t(), a("span", {
            key: 0,
            class: h(["absolute top-5 left-1/2 hidden h-0.5 w-full md:block", i.state === "done" ? "bg-success-600" : "bg-line"]),
            "aria-hidden": "true"
          }, null, 2)) : m("", !0),
          s("span", {
            class: h(["relative flex size-10 items-center justify-center rounded-full", i.state === "done" ? "bg-success-600 text-white" : i.state === "active" ? "border-2 border-brand-600 bg-surface text-brand-600" : "border border-brand-200 bg-brand-50 text-brand-600"])
          }, [
            c(_, {
              name: i.state === "done" ? "check" : i.icon,
              size: i.state === "done" ? 16 : 18
            }, null, 8, ["name", "size"])
          ], 2),
          s("p", Hs, d(i.title), 1),
          s("p", Ks, d(i.description), 1)
        ], 8, Fs))), 128))
      ])
    ]));
  }
}), Gs = { class: "inline-flex items-center gap-1.5 rounded-full border border-line bg-gray-100/70 px-3 py-1 text-[13px] text-gray-600" }, Ws = /* @__PURE__ */ x({
  __name: "LockedPill",
  setup(e) {
    return (l, o) => (t(), a("span", Gs, [
      c(_, {
        name: "lock",
        size: 13
      }),
      V(l.$slots, "default")
    ]));
  }
}), Zs = {
  class: "inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-surface py-1.5 pr-4 pl-3 text-[13px] text-ink-2 shadow-xs",
  role: "timer"
}, qs = {
  key: 0,
  class: "text-ink-3"
}, Js = { class: "rounded-[5px] bg-brand-50 px-2 py-1 font-mono text-xs font-medium text-brand-600 tnum" }, Qs = { key: 0 }, Xs = /* @__PURE__ */ x({
  __name: "CountdownPill",
  props: {
    label: {},
    parts: {},
    unit: {}
  },
  setup(e) {
    return (l, o) => (t(), a("span", Zs, [
      c(_, { name: "clock" }),
      p(" " + d(e.label) + " ", 1),
      (t(!0), a(k, null, C(e.parts, (i, n) => (t(), a(k, { key: n }, [
        n ? (t(), a("span", qs, ":")) : m("", !0),
        s("span", Js, d(i), 1)
      ], 64))), 128)),
      e.unit ? (t(), a("span", Qs, d(e.unit), 1)) : m("", !0)
    ]));
  }
}), Ys = { class: "overflow-hidden rounded-xl border border-line bg-surface shadow-card" }, eo = { class: "flex items-center justify-between gap-4 px-6 py-4" }, to = { class: "text-lg text-ink" }, ao = { class: "text-center" }, no = { class: "text-2xl leading-7 font-semibold text-ink tnum" }, lo = { class: "p-5" }, so = {
  key: 0,
  class: "absolute top-7 bottom-0 left-[12px] border-l border-dashed border-brand-300",
  "aria-hidden": "true"
}, oo = { class: "flex flex-wrap items-center gap-x-4 gap-y-2" }, io = { class: "min-w-48 flex-1" }, ro = { class: "text-base font-medium text-ink" }, co = { class: "font-mono text-xs text-ink-2 tnum" }, uo = ["aria-expanded", "aria-label", "onClick"], mo = {
  key: 1,
  class: "mt-3 divide-y divide-line rounded-md border border-line"
}, fo = {
  key: 1,
  class: "size-2 rounded-full bg-brand-600"
}, bo = { class: "min-w-40 flex-1 text-sm text-ink" }, xo = { class: "sr-only" }, go = {
  key: 0,
  class: "text-xs text-ink-3"
}, uf = /* @__PURE__ */ x({
  __name: "OnboardingPath",
  props: {
    title: {},
    percent: {},
    stages: {}
  },
  emits: ["task"],
  setup(e, { emit: l }) {
    const o = e, i = l, n = R(new Set(o.stages.map((f, g) => f.tasks ? g : -1)));
    function r(f) {
      n.value.has(f) ? n.value.delete(f) : n.value.add(f);
    }
    const u = (f) => f.tasks?.filter((g) => g.done).length ?? 0;
    return (f, g) => (t(), a("section", Ys, [
      s("header", eo, [
        s("h2", to, d(e.title), 1),
        s("div", ao, [
          s("p", no, d(e.percent) + "%", 1),
          g[0] || (g[0] = s("p", { class: "eyebrow-mono !text-[10px]" }, "Complete", -1))
        ])
      ]),
      c(N, {
        value: e.percent,
        size: "xs",
        label: e.title
      }, null, 8, ["value", "label"]),
      s("ol", lo, [
        (t(!0), a(k, null, C(e.stages, (y, w) => (t(), a("li", {
          key: y.title,
          class: "relative pb-6 pl-9 last:pb-0"
        }, [
          w < e.stages.length - 1 ? (t(), a("span", so)) : m("", !0),
          s("span", {
            class: h(["absolute top-0 left-0 flex size-6 items-center justify-center rounded-full text-xs font-medium", y.tasks ? "bg-brand-600 text-white" : "border border-line-strong bg-gray-50 text-gray-600"])
          }, d(w + 1), 3),
          s("div", oo, [
            s("div", io, [
              s("h3", ro, d(y.title), 1),
              y.learnMore ? (t(), $(pe, {
                key: 0,
                size: "sm",
                class: "mt-0.5"
              }, {
                default: b(() => [...g[1] || (g[1] = [
                  p("Learn more", -1)
                ])]),
                _: 1
              })) : m("", !0)
            ]),
            y.tasks ? (t(), a(k, { key: 0 }, [
              s("span", co, d(u(y)) + "/" + d(y.tasks.length), 1),
              c(N, {
                class: "!w-24",
                value: u(y),
                max: y.tasks.length,
                size: "xs",
                label: `${y.title} progress`
              }, null, 8, ["value", "max", "label"])
            ], 64)) : m("", !0),
            y.lockedText ? (t(), $(Ws, { key: 1 }, {
              default: b(() => [
                p(d(y.lockedText), 1)
              ]),
              _: 2
            }, 1024)) : m("", !0),
            y.countdown ? (t(), $(Xs, Ce({
              key: 2,
              ref_for: !0
            }, y.countdown), null, 16)) : m("", !0),
            y.tasks ? (t(), a("button", {
              key: 3,
              type: "button",
              class: "text-ink-3 hover:text-ink",
              "aria-expanded": n.value.has(w),
              "aria-label": `Toggle ${y.title}`,
              onClick: (z) => r(w)
            }, [
              c(_, {
                name: n.value.has(w) ? "chevron-up" : "chevron-down"
              }, null, 8, ["name"])
            ], 8, uo)) : m("", !0)
          ]),
          y.tasks && n.value.has(w) ? (t(), a("ul", mo, [
            (t(!0), a(k, null, C(y.tasks, (z) => (t(), a("li", {
              key: z.label,
              class: "flex flex-wrap items-center gap-3 px-4 py-3"
            }, [
              s("span", {
                class: h(["flex size-5 shrink-0 items-center justify-center rounded-full", z.done ? "bg-success-600 text-white" : "border-2 border-brand-600"])
              }, [
                z.done ? (t(), $(_, {
                  key: 0,
                  name: "check",
                  size: 12,
                  "stroke-width": 3
                })) : (t(), a("span", fo))
              ], 2),
              c(E, {
                icon: z.icon,
                tone: z.done ? "neutral" : "brand",
                size: "xs"
              }, null, 8, ["icon", "tone"]),
              s("span", bo, [
                p(d(z.label), 1),
                s("span", xo, d(z.done ? " (done)" : " (to do)"), 1)
              ]),
              z.meta ? (t(), a("span", go, d(z.meta), 1)) : m("", !0),
              z.cta ? (t(), $(I, {
                key: 1,
                size: "sm",
                "icon-right": "arrow-right",
                onClick: (D) => i("task", z)
              }, {
                default: b(() => [
                  p(d(z.cta), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])) : m("", !0)
            ]))), 128))
          ])) : m("", !0)
        ]))), 128))
      ])
    ]));
  }
}), ho = { class: "flex flex-wrap items-start gap-4 border-b border-line pb-5" }, vo = { class: "min-w-56 flex-1" }, po = { class: "text-xl font-semibold tracking-tight text-ink" }, yo = { class: "mt-1 text-sm text-ink-2" }, ko = { class: "text-right" }, $o = { class: "mt-1.5 text-[13px] text-ink-3" }, wo = { class: "mt-5 grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-6" }, _o = { class: "eyebrow flex items-center gap-1.5" }, zo = ["aria-label"], Co = { class: "mt-0.5 text-[13px] text-ink-3" }, mf = /* @__PURE__ */ x({
  __name: "OutcomeSummary",
  props: {
    title: {},
    description: {},
    status: {},
    time: {},
    stats: {},
    tone: { default: "success" }
  },
  setup(e) {
    const l = { neutral: "text-ink", success: "text-success-600", warning: "text-warning-700" };
    return (o, i) => (t(), a("section", {
      class: h(["rounded-xl border bg-gradient-to-br to-surface to-40% p-6", e.tone === "pending" ? "border-warning-200 from-warning-50" : "border-success-500/40 from-success-50"])
    }, [
      s("header", ho, [
        c(E, {
          icon: e.tone === "pending" ? "clock" : "check",
          tone: "solid-success",
          size: "lg",
          class: h(e.tone === "pending" && "!bg-warning-500")
        }, null, 8, ["icon", "class"]),
        s("div", vo, [
          s("h2", po, d(e.title), 1),
          s("p", yo, d(e.description), 1)
        ]),
        s("div", ko, [
          c(F, {
            variant: e.tone === "pending" ? "warning" : "success",
            dot: ""
          }, {
            default: b(() => [
              p(d(e.status), 1)
            ]),
            _: 1
          }, 8, ["variant"]),
          s("p", $o, d(e.time), 1)
        ])
      ]),
      s("ul", wo, [
        (t(!0), a(k, null, C(e.stats, (n) => (t(), a("li", {
          key: n.label,
          class: "flex gap-3"
        }, [
          c(E, {
            icon: n.icon,
            tone: n.tone
          }, null, 8, ["icon", "tone"]),
          s("div", null, [
            s("p", _o, [
              p(d(n.label), 1),
              s("button", {
                type: "button",
                class: "text-ink-4 hover:text-brand-600",
                "aria-label": `Download ${n.label}`
              }, [
                c(_, {
                  name: "download",
                  size: 13
                })
              ], 8, zo)
            ]),
            s("p", {
              class: h(["mt-1 text-[26px] leading-8 font-semibold tracking-tight tnum", l[n.tone]])
            }, d(n.value), 3),
            s("p", Co, d(n.caption), 1)
          ])
        ]))), 128))
      ])
    ], 2));
  }
}), So = { class: "portal-type-section-title" }, Vo = {
  key: 0,
  class: "portal-type-body mt-0.5 !text-ink-2"
}, Mo = { class: "mt-5 flex flex-col gap-3.5" }, Bo = ["aria-current"], Lo = {
  key: 0,
  class: "sr-only"
}, To = { class: "mt-5 flex items-center gap-3" }, Do = {
  key: 2,
  class: "mt-3 text-[13px] text-ink-2"
}, ff = /* @__PURE__ */ x({
  __name: "ProcessStatus",
  props: {
    title: {},
    description: {},
    steps: {},
    percent: {},
    estimate: {},
    tone: { default: "brand" },
    cancelLabel: { default: "Cancel Migration" }
  },
  emits: ["cancel"],
  setup(e, { emit: l }) {
    const o = l;
    return (i, n) => (t(), a("section", null, [
      s("h2", So, d(e.title), 1),
      e.description ? (t(), a("p", Vo, d(e.description), 1)) : m("", !0),
      s("ol", Mo, [
        (t(!0), a(k, null, C(e.steps, (r) => (t(), a("li", {
          key: r.label,
          class: h(["flex items-center gap-3 text-sm", r.state === "active" ? "font-medium text-ink" : "text-ink-2"]),
          "aria-current": r.state === "active" ? "step" : void 0
        }, [
          s("span", {
            class: h(["size-2 shrink-0 rounded-full", r.state === "done" ? "bg-success-600" : r.state === "active" ? "bg-brand-600" : "bg-gray-300"]),
            "aria-hidden": "true"
          }, null, 2),
          p(" " + d(r.label), 1),
          r.state === "done" ? (t(), a("span", Lo, " (done)")) : m("", !0)
        ], 10, Bo))), 128))
      ]),
      s("div", To, [
        c(N, {
          value: e.percent,
          tone: e.tone === "success" ? "success" : "gradient",
          size: "sm",
          label: e.title
        }, null, 8, ["value", "tone", "label"]),
        s("span", {
          class: h(["text-[13px] font-semibold tnum", e.tone === "success" ? "text-success-600" : "text-brand-600"])
        }, d(e.percent) + "%", 3)
      ]),
      e.estimate ? (t(), a("p", {
        key: 1,
        class: h(["mt-4 inline-block rounded-full px-3.5 py-1.5 text-[13px]", e.tone === "success" ? "border border-success-500/30 bg-success-100 text-success-700" : "bg-brand-50 text-brand-700"])
      }, "Estimated time: " + d(e.estimate), 3)) : m("", !0),
      e.cancelLabel ? (t(), a("p", Do, [
        n[1] || (n[1] = p("Something wrong? ", -1)),
        s("button", {
          type: "button",
          class: "text-brand-600 underline underline-offset-2",
          onClick: n[0] || (n[0] = (r) => o("cancel"))
        }, d(e.cancelLabel), 1)
      ])) : m("", !0)
    ]));
  }
}), Ao = { class: "overflow-hidden rounded-xl bg-[#e4e8f0]" }, Po = { class: "grid items-center gap-8 rounded-xl border border-line bg-surface p-6 lg:grid-cols-2" }, jo = {
  key: 0,
  class: "px-5 py-3.5 text-center text-[13px] text-ink"
}, bf = /* @__PURE__ */ x({
  __name: "ProcessingPanel",
  setup(e) {
    return (l, o) => (t(), a("section", Ao, [
      s("div", Po, [
        s("div", null, [
          V(l.$slots, "art")
        ]),
        s("div", null, [
          V(l.$slots, "default")
        ])
      ]),
      l.$slots.footer ? (t(), a("p", jo, [
        V(l.$slots, "footer")
      ])) : m("", !0)
    ]));
  }
}), Ro = { class: "min-w-64 flex-1" }, Io = { class: "flex flex-wrap items-center gap-2 text-[15px] font-semibold text-ink" }, Eo = {
  key: 0,
  class: "mt-1 max-w-2xl text-sm leading-[22px] text-ink-2"
}, Oo = {
  key: 0,
  class: "flex flex-wrap items-center gap-2"
}, xf = /* @__PURE__ */ x({
  __name: "ResultCard",
  props: {
    tone: { default: "neutral" },
    icon: {},
    title: {},
    tag: {},
    description: {}
  },
  setup(e) {
    const l = e, o = {
      brand: { edge: "border-l-brand-500", bg: "bg-gradient-to-r from-surface to-brand-50", border: "border-brand-200/70", tile: "brand", tag: "brand" },
      warning: { edge: "border-l-warning-600", bg: "bg-surface", border: "border-line", tile: "warning", tag: "warning" },
      neutral: { edge: "border-l-gray-300", bg: "bg-surface", border: "border-line", tile: "neutral", tag: "neutral" },
      success: { edge: "border-l-success-600", bg: "bg-gradient-to-r from-surface to-success-50", border: "border-success-500/30", tile: "success", tag: "success" },
      attention: { edge: "border-l-warning-500", bg: "bg-gradient-to-r from-surface to-warning-50", border: "border-warning-200", tile: "warning", tag: "warning" },
      danger: { edge: "border-l-danger-600", bg: "bg-gradient-to-r from-surface to-danger-50", border: "border-danger-200", tile: "danger", tag: "danger" }
    }, i = S(() => o[l.tone]);
    return (n, r) => (t(), a("article", {
      class: h(["flex flex-wrap items-center gap-4 rounded-xl border border-l-4 p-5", [i.value.edge, i.value.bg, i.value.border]])
    }, [
      c(E, {
        icon: e.icon,
        tone: i.value.tile,
        size: "lg"
      }, null, 8, ["icon", "tone"]),
      s("div", Ro, [
        s("h3", Io, [
          p(d(e.title) + " ", 1),
          e.tag ? (t(), $(F, {
            key: 0,
            variant: i.value.tag
          }, {
            default: b(() => [
              p(d(e.tag), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : m("", !0)
        ]),
        e.description || n.$slots.default ? (t(), a("p", Eo, [
          V(n.$slots, "default", {}, () => [
            p(d(e.description), 1)
          ])
        ])) : m("", !0)
      ]),
      n.$slots.actions ? (t(), a("div", Oo, [
        V(n.$slots, "actions")
      ])) : m("", !0)
    ], 2));
  }
}), Uo = {
  class: "rounded-xl border border-line bg-gray-50 p-3",
  "aria-hidden": "true"
}, No = { class: "rounded-lg border border-line bg-surface shadow-card" }, Fo = { class: "flex items-center justify-between gap-3 border-b border-line px-3 py-2" }, Ho = { class: "flex items-center gap-1.5 truncate font-mono text-[11px] font-medium text-ink" }, Ko = { class: "flex items-center gap-1 rounded-full bg-success-100 px-2 py-0.5 text-[10px] font-medium text-success-700" }, Go = { class: "relative overflow-hidden px-3 py-2 font-mono text-[10.5px] leading-[1.7] whitespace-pre text-ink-2" }, Wo = { class: "flex items-center gap-2 px-3 pb-2.5" }, gf = /* @__PURE__ */ x({
  __name: "ScanPreview",
  props: {
    fileName: {},
    lines: { default: 12 }
  },
  setup(e) {
    const l = (o) => Array.from({ length: 4 }, (i, n) => (o * 2654435761 * (n + 3) >>> 0).toString(16).padStart(8, "0").slice(0, 8)).join("  ");
    return (o, i) => (t(), a("div", Uo, [
      s("div", No, [
        s("div", Fo, [
          s("span", Ho, [
            c(_, {
              name: "lock",
              size: 12,
              class: "text-success-600"
            }),
            p(d(e.fileName), 1)
          ]),
          s("span", Ko, [
            c(_, {
              name: "lock",
              size: 10
            }),
            i[0] || (i[0] = p("Encrypted", -1))
          ])
        ]),
        s("div", Go, [
          (t(!0), a(k, null, C(e.lines, (n) => (t(), a("div", {
            key: n,
            class: h(n === 2 && "bg-brand-50")
          }, d(l(n)), 3))), 128))
        ]),
        s("div", Wo, [
          c(Z, {
            tile: "",
            size: 14
          }),
          i[1] || (i[1] = s("span", { class: "text-[11px] text-ink-2" }, "Scanning", -1))
        ])
      ])
    ]));
  }
}), Zo = { class: "rounded-lg border border-brand-200/70 bg-brand-50 p-3" }, qo = { class: "portal-type-label" }, Jo = { class: "mt-0.5 font-mono text-[11px] text-ink-2" }, hf = /* @__PURE__ */ x({
  __name: "SetupCard",
  props: {
    title: { default: "Finish your setup" },
    done: {},
    total: {},
    cta: { default: "Continue setup" }
  },
  setup(e) {
    return (l, o) => (t(), a("section", Zo, [
      s("p", qo, d(e.title), 1),
      s("p", Jo, d(e.done) + " of " + d(e.total) + " complete", 1),
      c(N, {
        class: "mt-2",
        value: e.done,
        max: e.total,
        size: "xs",
        label: e.title
      }, null, 8, ["value", "max", "label"]),
      c(pe, {
        size: "sm",
        class: "mt-2"
      }, {
        default: b(() => [
          p(d(e.cta), 1)
        ]),
        _: 1
      })
    ]));
  }
}), Qo = ["id", "type", "placeholder", "disabled", "readonly", "aria-invalid", "aria-label"], Xo = {
  key: 2,
  class: "text-[13px] text-ink-3"
}, ce = /* @__PURE__ */ x({
  __name: "TextInput",
  props: /* @__PURE__ */ T({
    placeholder: {},
    type: { default: "text" },
    icon: {},
    prefix: {},
    suffix: {},
    mono: { type: Boolean },
    invalid: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    id: {},
    ariaLabel: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue");
    return (o, i) => (t(), a("div", {
      class: h(["flex h-[var(--input-height-md)] items-center gap-2 rounded-md border bg-surface px-3 transition-shadow focus-within:ring-3", [
        e.invalid ? "border-danger-500 focus-within:ring-danger-100" : "border-line focus-within:border-brand-500 focus-within:ring-brand-100",
        e.disabled && "cursor-not-allowed bg-gray-100 opacity-70",
        e.readonly && "bg-gray-50"
      ]])
    }, [
      e.icon ? (t(), $(_, {
        key: 0,
        name: e.icon,
        class: "text-ink-3"
      }, null, 8, ["name"])) : m("", !0),
      e.prefix ? (t(), a("span", {
        key: 1,
        class: h(["text-sm text-ink-3", e.mono && "font-mono"])
      }, d(e.prefix), 3)) : m("", !0),
      W(s("input", {
        id: e.id,
        "onUpdate:modelValue": i[0] || (i[0] = (n) => l.value = n),
        type: e.type,
        placeholder: e.placeholder,
        disabled: e.disabled,
        readonly: e.readonly,
        "aria-invalid": e.invalid || void 0,
        "aria-label": e.ariaLabel,
        class: h(["h-full w-full min-w-0 bg-transparent text-[13px] text-ink outline-none placeholder:text-ink-4 disabled:cursor-not-allowed", e.mono && "font-mono"])
      }, null, 10, Qo), [
        [Re, l.value]
      ]),
      e.suffix ? (t(), a("span", Xo, d(e.suffix), 1)) : m("", !0),
      V(o.$slots, "end")
    ], 2));
  }
}), Yo = { class: "flex flex-col gap-1.5" }, ei = ["for"], ti = {
  key: 0,
  class: "text-danger-500"
}, ai = {
  key: 1,
  role: "alert",
  class: "flex items-center gap-1 text-[13px] text-danger-700"
}, ni = {
  key: 2,
  class: "text-[13px] text-ink-3"
}, li = /* @__PURE__ */ x({
  __name: "FormField",
  props: {
    label: {},
    required: { type: Boolean },
    hint: {},
    error: {},
    disabled: { type: Boolean },
    forId: {}
  },
  setup(e) {
    return (l, o) => (t(), a("div", Yo, [
      e.label ? (t(), a("label", {
        key: 0,
        for: e.forId,
        class: h(["portal-type-label", e.disabled ? "text-ink-3" : "text-ink"])
      }, [
        p(d(e.label), 1),
        e.required ? (t(), a("span", ti, " *")) : m("", !0)
      ], 10, ei)) : m("", !0),
      V(l.$slots, "default"),
      e.error ? (t(), a("p", ai, [
        c(_, {
          name: "circle-alert",
          size: 14
        }),
        p(d(e.error), 1)
      ])) : e.hint ? (t(), a("p", ni, d(e.hint), 1)) : m("", !0)
    ]));
  }
}), si = {
  key: 0,
  class: "flex items-start gap-3 rounded-lg border border-success-500/30 bg-success-50 p-4"
}, oi = { class: "text-[13px] text-ink-2" }, ii = { class: "portal-type-body-emphasis" }, ri = { class: "mt-0.5" }, di = {
  key: 0,
  class: "font-mono"
}, ci = {
  key: 1,
  class: "flex flex-col gap-4 rounded-lg border border-line bg-surface p-4"
}, ui = { class: "text-[13px]" }, vf = /* @__PURE__ */ x({
  __name: "SignatureBlock",
  props: /* @__PURE__ */ T({
    signed: {},
    agreement: {}
  }, {
    name: { default: "" },
    nameModifiers: {},
    accepted: { type: Boolean, default: !1 },
    acceptedModifiers: {}
  }),
  emits: ["update:name", "update:accepted"],
  setup(e) {
    const l = L(e, "name"), o = L(e, "accepted");
    return (i, n) => e.signed ? (t(), a("section", si, [
      c(_, {
        name: "shield-check",
        size: 20,
        class: "text-success-600"
      }),
      s("div", oi, [
        s("p", ii, "Signed by " + d(e.signed.name), 1),
        s("p", ri, [
          p(d(e.signed.time), 1),
          e.signed.ip ? (t(), a("span", di, " · " + d(e.signed.ip), 1)) : m("", !0)
        ])
      ])
    ])) : (t(), a("section", ci, [
      c(li, {
        label: "Type your full name",
        required: ""
      }, {
        default: b(() => [
          c(ce, {
            modelValue: l.value,
            "onUpdate:modelValue": n[0] || (n[0] = (r) => l.value = r),
            placeholder: "Full name",
            "aria-label": "Full name"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }),
      c(G, {
        modelValue: o.value,
        "onUpdate:modelValue": n[1] || (n[1] = (r) => o.value = r)
      }, {
        default: b(() => [
          s("span", ui, "I have read and accept " + d(e.agreement || "this agreement") + " on behalf of my organisation.", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), mi = { class: "rounded-lg border border-line bg-surface p-4 shadow-card" }, fi = { class: "text-sm font-medium text-ink" }, bi = {
  key: 0,
  class: "mt-1 text-[13px] text-ink-3"
}, pf = /* @__PURE__ */ x({
  __name: "SummaryStat",
  props: {
    value: {},
    label: {},
    detail: {},
    tone: { default: "ink" }
  },
  setup(e) {
    const l = { ink: "text-ink", danger: "text-danger-600", warning: "text-warning-700", success: "text-success-600", brand: "text-brand-600" };
    return (o, i) => (t(), a("article", mi, [
      s("p", {
        class: h(["text-[28px] leading-9 font-semibold tracking-tight tnum", l[e.tone]])
      }, d(e.value), 3),
      s("p", fi, d(e.label), 1),
      e.detail ? (t(), a("p", bi, d(e.detail), 1)) : m("", !0)
    ]));
  }
}), xi = { class: "rounded-xl border border-line bg-surface p-5 shadow-card" }, gi = { class: "mt-4 text-sm font-semibold text-ink-2" }, hi = { class: "mt-3 flex flex-col gap-3" }, vi = { class: "sr-only" }, pi = { class: "text-[13px] text-ink-3" }, yf = /* @__PURE__ */ x({
  __name: "UploadChecklist",
  props: {
    title: { default: "Upload checklist" },
    items: {}
  },
  setup(e) {
    const l = e, o = S(() => Math.round(l.items.filter((i) => i.done).length / l.items.length * 100));
    return (i, n) => (t(), a("section", xi, [
      c(H, { mono: "" }, {
        default: b(() => [
          p(d(e.title), 1)
        ]),
        _: 1
      }),
      s("p", {
        class: h(["mt-2 text-xl font-semibold tnum", o.value ? "text-brand-600" : "text-ink-3"])
      }, d(o.value) + "%", 3),
      c(N, {
        class: "mt-2",
        value: o.value,
        label: e.title
      }, null, 8, ["value", "label"]),
      s("p", gi, d(o.value === 100 ? "All set" : "What's pending?"), 1),
      s("ul", hi, [
        (t(!0), a(k, null, C(e.items, (r) => (t(), a("li", {
          key: r.label,
          class: "flex items-start gap-2.5"
        }, [
          s("span", {
            class: h(["mt-px flex size-[18px] shrink-0 items-center justify-center rounded-full", r.done ? "bg-success-600 text-white" : "border border-line-strong"])
          }, [
            r.done ? (t(), $(_, {
              key: 0,
              name: "check",
              size: 11,
              "stroke-width": 3
            })) : m("", !0)
          ], 2),
          s("div", null, [
            s("p", {
              class: h(["text-sm", r.done ? "text-ink" : "text-ink-2"])
            }, [
              p(d(r.label), 1),
              s("span", vi, d(r.done ? " (done)" : " (pending)"), 1)
            ], 2),
            s("p", pi, d(r.detail), 1)
          ])
        ]))), 128))
      ])
    ]));
  }
}), yi = { class: "relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-50/70 to-brand-50 px-8 py-9" }, ki = { class: "relative max-w-3xl" }, $i = { class: "mt-2 text-[36px] leading-[44px] font-semibold tracking-tight text-ink" }, wi = { class: "text-brand-600" }, _i = { class: "mt-4 text-[15px] leading-[26px] text-gray-700" }, kf = /* @__PURE__ */ x({
  __name: "WelcomeHero",
  props: {
    eyebrow: {},
    lead: {},
    name: {},
    description: {}
  },
  setup(e) {
    return (l, o) => (t(), a("section", yi, [
      o[0] || (o[0] = s("svg", {
        class: "absolute top-0 right-0 h-full",
        viewBox: "0 0 340 230",
        fill: "none",
        "aria-hidden": "true"
      }, [
        s("path", {
          d: "M0 0H200L0 110Z",
          fill: "#dbe7fe"
        }),
        s("path", {
          d: "M340 40V230L150 145Z",
          fill: "#d3e1fd"
        })
      ], -1)),
      s("div", ki, [
        c(H, {
          mono: "",
          class: "!text-brand-700"
        }, {
          default: b(() => [
            p(d(e.eyebrow), 1)
          ]),
          _: 1
        }),
        s("h1", $i, [
          p(d(e.lead) + " ", 1),
          s("span", wi, d(e.name) + ".", 1)
        ]),
        s("p", _i, d(e.description), 1)
      ])
    ]));
  }
}), zi = ["viewBox", "aria-label"], Ci = ["id"], Si = ["x1", "x2", "y1", "y2"], Vi = ["x", "y"], Mi = ["x", "y"], Bi = ["d", "fill"], Li = ["d"], Ti = { key: 0 }, Di = ["x1", "x2", "y1", "y2"], Ai = ["cx", "cy"], Pi = ["x", "y"], q = 640, $f = /* @__PURE__ */ x({
  __name: "AreaChart",
  props: {
    data: {},
    xLabels: { default: () => [] },
    ySuffix: { default: "%" },
    yTicks: { default: 5 },
    height: { default: 220 },
    label: { default: "Trend over time" }
  },
  setup(e) {
    const l = e, o = { t: 10, r: 8, b: 26, l: 40 }, i = ze(), n = R(null), r = S(() => {
      const B = Math.min(...l.data), A = Math.max(...l.data), M = Math.max(Math.ceil((A - B) / (l.yTicks - 1) / 5) * 5, 1), j = Math.floor(B / M) * M;
      return { min: j, max: j + M * (l.yTicks - 1), step: M };
    }), u = (B) => o.l + B / (l.data.length - 1) * (q - o.l - o.r), f = (B) => o.t + (1 - (B - r.value.min) / (r.value.max - r.value.min)) * (l.height - o.t - o.b), g = S(() => l.data.map((B, A) => `${A ? "L" : "M"}${u(A).toFixed(1)} ${f(B).toFixed(1)}`).join(" ")), y = S(() => `${g.value} L${u(l.data.length - 1)} ${l.height - o.b} L${u(0)} ${l.height - o.b} Z`), w = S(() => Array.from({ length: l.yTicks }, (B, A) => r.value.min + A * r.value.step)), z = S(() => l.xLabels.map((B, A) => ({ label: B, at: u(A / Math.max(l.xLabels.length - 1, 1) * (l.data.length - 1)) })));
    function D(B) {
      const A = B.currentTarget.getBoundingClientRect(), M = (B.clientX - A.left) / A.width * q;
      n.value = Math.max(0, Math.min(l.data.length - 1, Math.round((M - o.l) / (q - o.l - o.r) * (l.data.length - 1))));
    }
    return (B, A) => (t(), a("svg", {
      viewBox: `0 0 ${q} ${e.height}`,
      class: "block w-full",
      role: "img",
      "aria-label": e.label,
      onMousemove: D,
      onMouseleave: A[0] || (A[0] = (M) => n.value = null)
    }, [
      s("defs", null, [
        s("linearGradient", {
          id: v(i),
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [...A[1] || (A[1] = [
          s("stop", {
            offset: "0",
            "stop-color": "#2563eb",
            "stop-opacity": ".16"
          }, null, -1),
          s("stop", {
            offset: "1",
            "stop-color": "#2563eb",
            "stop-opacity": "0"
          }, null, -1)
        ])], 8, Ci)
      ]),
      (t(!0), a(k, null, C(w.value, (M) => (t(), a("g", { key: M }, [
        s("line", {
          x1: o.l,
          x2: q - o.r,
          y1: f(M),
          y2: f(M),
          stroke: "#e6eaf2",
          "stroke-dasharray": "3 4"
        }, null, 8, Si),
        s("text", {
          x: o.l - 8,
          y: f(M) + 4,
          "text-anchor": "end",
          "font-size": "11",
          fill: "#6b7280"
        }, d(M) + d(e.ySuffix), 9, Vi)
      ]))), 128)),
      (t(!0), a(k, null, C(z.value, (M) => (t(), a("text", {
        key: M.label,
        x: M.at,
        y: e.height - 6,
        "text-anchor": "middle",
        "font-size": "11",
        fill: "#6b7280"
      }, d(M.label), 9, Mi))), 128)),
      s("path", {
        d: y.value,
        fill: `url(#${v(i)})`
      }, null, 8, Bi),
      s("path", {
        d: g.value,
        fill: "none",
        stroke: "#2563eb",
        "stroke-width": "2",
        "stroke-linejoin": "round"
      }, null, 8, Li),
      n.value !== null ? (t(), a("g", Ti, [
        s("line", {
          x1: u(n.value),
          x2: u(n.value),
          y1: o.t,
          y2: e.height - o.b,
          stroke: "#0b1a33",
          "stroke-opacity": ".25"
        }, null, 8, Di),
        s("circle", {
          cx: u(n.value),
          cy: f(e.data[n.value]),
          r: "4",
          fill: "#2563eb",
          stroke: "#fff",
          "stroke-width": "2"
        }, null, 8, Ai),
        s("text", {
          x: u(n.value),
          y: Math.max(f(e.data[n.value]) - 10, 12),
          "text-anchor": "middle",
          "font-size": "12",
          "font-weight": "600",
          fill: "#0b1a33"
        }, d(e.data[n.value]) + d(e.ySuffix), 9, Pi)
      ])) : m("", !0)
    ], 40, zi));
  }
}), ji = { class: "w-full divide-y divide-line" }, Ri = { class: "flex min-w-0 flex-1 items-center gap-1.5 text-gray-700" }, Ii = { class: "truncate" }, Ei = ["aria-label", "onClick"], Oi = { class: "font-semibold text-ink tnum" }, Ui = {
  key: 0,
  class: "w-8 text-right text-xs text-ink-3 tnum"
}, wf = /* @__PURE__ */ x({
  __name: "ChartLegend",
  props: {
    items: {}
  },
  emits: ["expand"],
  setup(e, { emit: l }) {
    const o = l;
    return (i, n) => (t(), a("ul", ji, [
      (t(!0), a(k, null, C(e.items, (r) => (t(), a("li", {
        key: r.label,
        class: "flex items-center gap-2.5 py-3.5 text-sm first:pt-0 last:pb-0"
      }, [
        s("span", {
          class: "size-2.5 shrink-0 rounded-[3px]",
          style: P({ background: r.color }),
          "aria-hidden": "true"
        }, null, 4),
        s("span", Ri, [
          s("span", Ii, d(r.label), 1),
          r.expandable ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "flex size-4 shrink-0 items-center justify-center rounded-xs border border-line text-xs leading-none text-brand-600 hover:bg-brand-50",
            "aria-label": `Show ${r.label} breakdown`,
            onClick: (u) => o("expand", r.label)
          }, "+", 8, Ei)) : m("", !0)
        ]),
        s("span", Oi, d(r.value), 1),
        r.share ? (t(), a("span", Ui, d(r.share), 1)) : m("", !0)
      ]))), 128))
    ]));
  }
}), Ni = ["viewBox", "aria-label"], Fi = ["points", "fill"], Hi = ["x", "y"], Ki = ["x", "y"], K = 420, _f = /* @__PURE__ */ x({
  __name: "FunnelChart",
  props: {
    stages: {},
    height: { default: 280 }
  },
  setup(e) {
    const l = e, o = ["#1d4ed8", "#2563eb", "#3b82f6", "#2563eb", "#1e40af", "#1d4ed8"], i = S(() => {
      const n = l.height / l.stages.length, r = 0.46 / l.stages.length;
      return l.stages.map((u, f) => {
        const g = (z) => K * r * z / 2, y = g(f), w = g(f + 1);
        return { ...u, color: o[f % o.length], y: f * n, h: n, points: `${y},${f * n} ${K - y},${f * n} ${K - w},${f * n + n - 3} ${w},${f * n + n - 3}` };
      });
    });
    return (n, r) => (t(), a("svg", {
      viewBox: `0 0 ${K} ${e.height}`,
      class: "mx-auto block w-full max-w-md",
      role: "img",
      "aria-label": e.stages.map((u) => `${u.label} ${u.value}`).join(", ")
    }, [
      (t(!0), a(k, null, C(i.value, (u) => (t(), a("g", {
        key: u.label
      }, [
        s("polygon", {
          points: u.points,
          fill: u.color
        }, null, 8, Fi),
        s("text", {
          x: K / 2,
          y: u.y + u.h / 2 - 3,
          "text-anchor": "middle",
          "font-size": "14",
          "font-weight": "600",
          fill: "#fff"
        }, d(u.value), 9, Hi),
        s("text", {
          x: K / 2,
          y: u.y + u.h / 2 + 13,
          "text-anchor": "middle",
          "font-size": "10.5",
          fill: "#fff"
        }, d(u.label), 9, Ki)
      ]))), 128))
    ], 8, Ni));
  }
}), Gi = ["viewBox", "aria-label"], Wi = ["d", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Zi = {
  key: 0,
  class: "absolute inset-x-0 bottom-0 text-center"
}, qi = { class: "text-[28px] leading-8 font-semibold tracking-tight text-ink tnum" }, Ji = {
  key: 0,
  class: "eyebrow"
}, zf = /* @__PURE__ */ x({
  __name: "GaugeChart",
  props: {
    segments: {},
    center: {},
    caption: {},
    width: { default: 280 },
    thickness: { default: 38 }
  },
  setup(e) {
    const l = e, o = S(() => {
      const r = l.segments.reduce((w, z) => w + z.value, 0) || 1, u = (l.width - l.thickness) / 2, f = Math.PI * u, g = l.segments.length > 1 ? 1.5 : 0;
      let y = 0;
      return l.segments.map((w) => {
        const z = w.value / r * f, D = { ...w, r: u, dash: `${Math.max(z - g, 0.5)} ${2 * f}`, offset: -y };
        return y += z, D;
      });
    }), i = S(() => l.width / 2 + 2), n = S(() => l.segments.map((r) => `${r.label}: ${r.value}`).join(", "));
    return (r, u) => (t(), a("div", {
      class: "relative mx-auto",
      style: P({ width: `${e.width}px`, maxWidth: "100%" })
    }, [
      (t(), a("svg", {
        viewBox: `0 0 ${e.width} ${i.value}`,
        class: "block w-full",
        role: "img",
        "aria-label": n.value
      }, [
        (t(!0), a(k, null, C(o.value, (f) => (t(), a("path", {
          key: f.label,
          d: `M ${e.thickness / 2} ${e.width / 2} A ${f.r} ${f.r} 0 0 1 ${e.width - e.thickness / 2} ${e.width / 2}`,
          fill: "none",
          stroke: f.color,
          "stroke-width": e.thickness,
          "stroke-dasharray": f.dash,
          "stroke-dashoffset": f.offset
        }, null, 8, Wi))), 128))
      ], 8, Gi)),
      e.center ? (t(), a("div", Zi, [
        s("p", qi, d(e.center), 1),
        e.caption ? (t(), a("p", Ji, d(e.caption), 1)) : m("", !0)
      ])) : m("", !0)
    ], 4));
  }
}), Qi = ["aria-label"], Xi = { class: "text-[11px] font-medium text-ink tnum" }, Yi = ["title"], Cf = /* @__PURE__ */ x({
  __name: "MiniBars",
  props: {
    items: {},
    height: { default: 160 }
  },
  setup(e) {
    const l = e, o = S(() => Math.max(...l.items.map((i) => i.value), 1));
    return (i, n) => (t(), a("div", {
      class: "flex items-end gap-2",
      style: P({ height: `${e.height + 36}px` }),
      role: "img",
      "aria-label": e.items.map((r) => `${r.label} ${r.display ?? r.value}`).join(", ")
    }, [
      (t(!0), a(k, null, C(e.items, (r) => (t(), a("div", {
        key: r.label,
        class: "flex min-w-0 flex-1 flex-col items-center gap-1.5"
      }, [
        s("span", Xi, d(r.display ?? r.value), 1),
        s("div", {
          class: "w-full max-w-11 rounded-t-xs bg-brand-500 transition-colors hover:bg-brand-700",
          style: P({ height: `${r.value / o.value * e.height}px` })
        }, null, 4),
        s("span", {
          class: "w-full truncate text-center text-[11px] text-ink-3",
          title: r.label
        }, d(r.label), 9, Yi)
      ]))), 128))
    ], 12, Qi));
  }
}), er = { class: "flex flex-col gap-4" }, tr = {
  key: 0,
  class: "mt-px flex size-[22px] shrink-0 items-center justify-center rounded-full bg-brand-50 text-[11px] font-semibold text-brand-700"
}, ar = { class: "min-w-0 flex-1" }, nr = { class: "mb-1.5 flex justify-between gap-2 text-sm" }, lr = { class: "h-1.5 overflow-hidden rounded-full bg-gray-100" }, Sf = /* @__PURE__ */ x({
  __name: "RankedBars",
  props: {
    items: {},
    rank: { type: Boolean },
    max: {}
  },
  setup(e) {
    const l = e, o = S(() => l.max ?? Math.max(...l.items.map((n) => n.value))), i = (n) => ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"][Math.min(n, 4)];
    return (n, r) => (t(), a("ol", er, [
      (t(!0), a(k, null, C(e.items, (u, f) => (t(), a("li", {
        key: u.label,
        class: "flex items-start gap-2.5"
      }, [
        e.rank ? (t(), a("span", tr, d(f + 1), 1)) : m("", !0),
        s("div", ar, [
          s("div", nr, [
            s("span", {
              class: h(e.rank ? "font-medium text-ink" : "text-gray-700")
            }, d(u.label), 3),
            s("span", {
              class: h(["font-semibold text-ink tnum", e.rank && "font-mono text-[13px]"])
            }, d(u.display ?? u.value), 3)
          ]),
          s("div", lr, [
            s("div", {
              class: "h-full rounded-full",
              style: P({ width: `${u.value / o.value * 100}%`, background: e.rank ? "#3b82f6" : i(f) })
            }, null, 4)
          ])
        ])
      ]))), 128))
    ]));
  }
}), sr = { class: "m-0" }, or = ["viewBox", "aria-label"], ir = ["d", "fill"], rr = ["x", "y", "height", "fill"], dr = ["x", "y", "text-anchor"], cr = {
  key: 0,
  "font-size": "11",
  fill: "#6b7280"
}, ur = ["x", "y", "text-anchor"], mr = {
  key: 0,
  class: "mt-2 text-center text-xs text-ink-3"
}, Y = 14, Vf = /* @__PURE__ */ x({
  __name: "SankeyFlow",
  props: {
    nodes: {},
    links: {},
    width: { default: 1e3 },
    height: { default: 400 },
    footnote: {}
  },
  setup(e) {
    const l = e, o = S(() => Object.fromEntries(l.nodes.map((n) => [n.id, n]))), i = S(
      () => l.links.map((n) => {
        const r = o.value[n.from], u = o.value[n.to], f = n.h ?? r.h, g = n.h2 ?? n.h ?? u.h, y = r.y + (n.fromY ?? 0), w = u.y + (n.toY ?? 0), z = r.x + Y, D = u.x, B = (z + D) / 2;
        return {
          d: `M${z} ${y} C${B} ${y} ${B} ${w} ${D} ${w} L${D} ${w + g} C${B} ${w + g} ${B} ${y + f} ${z} ${y + f} Z`,
          fill: n.color ?? "#dbeafe"
        };
      })
    );
    return (n, r) => (t(), a("figure", sr, [
      (t(), a("svg", {
        viewBox: `0 0 ${e.width} ${e.height}`,
        class: "block w-full",
        role: "img",
        "aria-label": e.nodes.map((u) => `${u.label} ${u.value}`).join(", ")
      }, [
        (t(!0), a(k, null, C(i.value, (u, f) => (t(), a("path", {
          key: f,
          d: u.d,
          fill: u.fill,
          "fill-opacity": ".45"
        }, null, 8, ir))), 128)),
        (t(!0), a(k, null, C(e.nodes, (u) => (t(), a("g", {
          key: u.id
        }, [
          s("rect", {
            x: u.x,
            y: u.y,
            width: Y,
            height: Math.max(u.h, 2),
            rx: "1",
            fill: u.color ?? "#bfdbfe"
          }, null, 8, rr),
          s("text", {
            x: u.align === "left" ? u.x - 10 : u.x + Y + 10,
            y: u.y + u.h / 2 - 2,
            "text-anchor": u.align === "left" ? "end" : "start",
            "font-size": "14",
            fill: "#1f2937"
          }, [
            p(d(u.label), 1),
            u.sub ? (t(), a("tspan", cr, d(u.sub), 1)) : m("", !0)
          ], 8, dr),
          s("text", {
            x: u.align === "left" ? u.x - 10 : u.x + Y + 10,
            y: u.y + u.h / 2 + 16,
            "text-anchor": u.align === "left" ? "end" : "start",
            "font-size": "15",
            "font-weight": "500",
            fill: "#0b1a33"
          }, d(u.value), 9, ur)
        ]))), 128))
      ], 8, or)),
      e.footnote ? (t(), a("figcaption", mr, d(e.footnote), 1)) : m("", !0)
    ]));
  }
}), fr = { class: "m-0" }, br = { class: "mb-2 flex flex-wrap justify-end gap-x-4 gap-y-1" }, xr = ["viewBox", "aria-label"], gr = ["x1", "x2", "y1", "y2", "stroke-dasharray"], hr = ["x", "y"], vr = ["x", "y", "width", "height", "fill"], pr = ["x", "y"], me = 640, Mf = /* @__PURE__ */ x({
  __name: "StackedBars",
  props: {
    categories: {},
    series: {},
    ticks: { default: 5 },
    format: { type: Function, default: (e) => e >= 1e3 ? `${e / 1e3}k` : String(e) },
    height: { default: 240 }
  },
  setup(e) {
    const l = e, o = { t: 10, r: 8, b: 26, l: 44 }, i = S(() => {
      const y = Math.max(...l.categories.map((z, D) => l.series.reduce((B, A) => B + A.values[D], 0)), 1), w = Math.pow(10, Math.floor(Math.log10(y)));
      return Math.ceil(y / w) * w;
    }), n = (y) => o.t + (1 - y / i.value) * (l.height - o.t - o.b), r = S(() => Array.from({ length: l.ticks + 1 }, (y, w) => i.value / l.ticks * w)), u = S(() => (me - o.l - o.r) / l.categories.length), f = S(
      () => l.categories.map((y, w) => {
        let z = 0;
        return {
          label: y,
          x: o.l + u.value * w + u.value * 0.34,
          w: u.value * 0.32,
          parts: l.series.map((D) => {
            const B = { color: D.color, y: n(z + D.values[w]), h: n(z) - n(z + D.values[w]), label: D.label, value: D.values[w] };
            return z += D.values[w], B;
          })
        };
      })
    ), g = S(() => l.categories.map((y, w) => `${y}: ${l.series.map((z) => `${z.label} ${l.format(z.values[w])}`).join(", ")}`).join("; "));
    return (y, w) => (t(), a("figure", fr, [
      s("ul", br, [
        (t(!0), a(k, null, C(e.series, (z) => (t(), a("li", {
          key: z.label,
          class: "flex items-center gap-1.5 text-xs text-ink-2"
        }, [
          s("span", {
            class: "size-2.5 rounded-[3px]",
            style: P({ background: z.color }),
            "aria-hidden": "true"
          }, null, 4),
          p(d(z.label), 1)
        ]))), 128))
      ]),
      (t(), a("svg", {
        viewBox: `0 0 ${me} ${e.height}`,
        class: "block w-full",
        role: "img",
        "aria-label": g.value
      }, [
        (t(!0), a(k, null, C(r.value, (z) => (t(), a("g", { key: z }, [
          s("line", {
            x1: o.l,
            x2: me - o.r,
            y1: n(z),
            y2: n(z),
            stroke: "#e4e8f0",
            "stroke-dasharray": z ? "3 4" : void 0
          }, null, 8, gr),
          s("text", {
            x: o.l - 8,
            y: n(z) + 4,
            "text-anchor": "end",
            "font-size": "11",
            fill: "#5c6781"
          }, d(e.format(z)), 9, hr)
        ]))), 128)),
        (t(!0), a(k, null, C(f.value, (z) => (t(), a("g", {
          key: z.label
        }, [
          (t(!0), a(k, null, C(z.parts, (D) => (t(), a("rect", {
            key: D.label,
            x: z.x,
            y: D.y,
            width: z.w,
            height: D.h,
            fill: D.color
          }, [
            s("title", null, d(z.label) + ", " + d(D.label) + ": " + d(e.format(D.value)), 1)
          ], 8, vr))), 128)),
          s("text", {
            x: z.x + z.w / 2,
            y: e.height - 8,
            "text-anchor": "middle",
            "font-size": "11",
            fill: "#5c6781"
          }, d(z.label), 9, pr)
        ]))), 128))
      ], 8, xr))
    ]));
  }
}), yr = { class: "relative w-full max-w-[460px]" }, kr = ["viewBox"], $r = ["onMouseenter"], wr = ["x", "y", "width", "height", "fill", "stroke"], _r = ["x", "y", "fill"], zr = { class: "mt-2 flex items-center justify-between gap-4" }, Cr = {
  class: "text-xs text-ink-2",
  "aria-live": "polite"
}, Sr = { class: "font-semibold text-ink" }, U = 46, Bf = /* @__PURE__ */ x({
  __name: "StateTileMap",
  props: {
    values: {},
    unit: {}
  },
  setup(e) {
    const l = e, o = [
      ["JK", "Jammu & Kashmir", 2, 0],
      ["LA", "Ladakh", 3, 0],
      ["HP", "Himachal Pradesh", 3, 1],
      ["PB", "Punjab", 2, 1],
      ["UK", "Uttarakhand", 4, 1],
      ["HR", "Haryana", 3, 2],
      ["DL", "Delhi", 4, 2],
      ["RJ", "Rajasthan", 2, 2],
      ["UP", "Uttar Pradesh", 5, 2],
      ["AR", "Arunachal Pradesh", 9, 2],
      ["GJ", "Gujarat", 1, 3],
      ["MP", "Madhya Pradesh", 3, 3],
      ["CG", "Chhattisgarh", 4, 3],
      ["BR", "Bihar", 6, 3],
      ["SK", "Sikkim", 7, 2],
      ["AS", "Assam", 8, 3],
      ["NL", "Nagaland", 9, 3],
      ["MH", "Maharashtra", 2, 4],
      ["JH", "Jharkhand", 5, 3],
      ["WB", "West Bengal", 6, 4],
      ["OD", "Odisha", 5, 4],
      ["ML", "Meghalaya", 7, 3],
      ["MN", "Manipur", 8, 4],
      ["TR", "Tripura", 7, 4],
      ["MZ", "Mizoram", 8, 5],
      ["GA", "Goa", 2, 5],
      ["KA", "Karnataka", 3, 5],
      ["TG", "Telangana", 4, 4],
      ["AP", "Andhra Pradesh", 4, 5],
      ["KL", "Kerala", 3, 6],
      ["TN", "Tamil Nadu", 4, 6]
    ], i = R(null), n = S(() => Math.max(...Object.values(l.values), 1));
    function r(f) {
      const g = l.values[f];
      if (g === void 0) return "#f3f4f7";
      const y = g / n.value;
      return y > 0.8 ? "#2563eb" : y > 0.5 ? "#60a5fa" : y > 0.3 ? "#93c5fd" : y > 0.12 ? "#bfdbfe" : "#dbeafe";
    }
    const u = S(() => o.find((f) => f[0] === i.value));
    return (f, g) => (t(), a("div", yr, [
      (t(), a("svg", {
        viewBox: `0 0 ${U * 10} ${U * 7}`,
        class: "block w-full max-w-[460px]",
        role: "img",
        "aria-label": "India state-wise values, tile map"
      }, [
        (t(), a(k, null, C(o, ([y, w, z, D]) => s("g", {
          key: y,
          onMouseenter: (B) => i.value = y,
          onMouseleave: g[0] || (g[0] = (B) => i.value = null)
        }, [
          s("title", null, d(w) + ": " + d(e.values[y] ?? "No data") + " " + d(e.unit), 1),
          s("rect", {
            x: z * U + 2,
            y: D * U + 2,
            width: U - 4,
            height: U - 4,
            rx: "6",
            fill: r(y),
            stroke: i.value === y ? "#0b1a33" : "none",
            "stroke-width": "1.5"
          }, null, 8, wr),
          s("text", {
            x: z * U + U / 2,
            y: D * U + U / 2 + 4,
            "text-anchor": "middle",
            "font-size": "11",
            "font-weight": "500",
            fill: (e.values[y] ?? 0) / n.value > 0.5 ? "#fff" : "#374151",
            "pointer-events": "none"
          }, d(y), 9, _r)
        ], 40, $r)), 64))
      ], 8, kr)),
      s("div", zr, [
        g[1] || (g[1] = s("div", { class: "w-48" }, [
          s("div", { class: "h-1.5 rounded-full bg-gradient-to-r from-brand-100 to-brand-600" }),
          s("div", { class: "mt-1 flex justify-between font-mono text-[10px] text-ink-3" }, [
            s("span", null, "Low"),
            s("span", null, "High")
          ])
        ], -1)),
        s("p", Cr, [
          u.value ? (t(), a(k, { key: 0 }, [
            p(d(u.value[1]) + ": ", 1),
            s("b", Sr, d(e.values[u.value[0]] ?? "No data") + " " + d(e.unit), 1)
          ], 64)) : m("", !0)
        ])
      ])
    ]));
  }
}), Vr = /* @__PURE__ */ x({
  __name: "Skeleton",
  props: {
    width: { default: "100%" },
    height: { default: "14px" },
    circle: { type: Boolean }
  },
  setup(e) {
    return (l, o) => (t(), a("span", {
      class: h(["block animate-shimmer bg-[linear-gradient(90deg,#f3f4f7_25%,#e6eaf2_50%,#f3f4f7_75%)] bg-[length:200%_100%]", e.circle ? "rounded-full" : "rounded-xs"]),
      style: P({ width: e.width, height: e.height }),
      "aria-hidden": "true"
    }, null, 6));
  }
}), Mr = ["role"], Br = { class: "mt-3 text-sm font-semibold text-ink" }, Lr = { class: "mt-3 text-sm font-semibold text-ink" }, Tr = {
  key: 0,
  class: "mt-1.5 max-w-sm text-[13px] leading-5 text-ink-2"
}, Dr = /* @__PURE__ */ x({
  __name: "PanelState",
  props: {
    kind: { default: "empty" },
    title: {},
    description: {},
    icon: {},
    actionLabel: {},
    minHeight: { default: "220px" }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const o = e, i = l, n = S(() => o.icon ?? (o.kind === "error" ? "warning" : "database"));
    return (r, u) => (t(), a("div", {
      class: "flex flex-col items-center justify-center px-6 py-8 text-center",
      style: P({ minHeight: e.minHeight }),
      role: e.kind === "error" ? "alert" : "status"
    }, [
      e.kind === "loading" ? (t(), a(k, { key: 0 }, [
        c(ke),
        s("p", Br, d(e.title || "Loading data"), 1)
      ], 64)) : (t(), a(k, { key: 1 }, [
        c(E, {
          icon: n.value,
          tone: e.kind === "error" ? "danger" : "brand",
          size: "sm"
        }, null, 8, ["icon", "tone"]),
        s("p", Lr, d(e.title), 1),
        e.description ? (t(), a("p", Tr, d(e.description), 1)) : m("", !0),
        e.actionLabel ? (t(), $(I, {
          key: 1,
          class: "mt-4",
          size: "sm",
          variant: e.kind === "error" ? "secondary" : "primary",
          icon: e.kind === "error" ? "refresh" : void 0,
          onClick: u[0] || (u[0] = (f) => i("action"))
        }, {
          default: b(() => [
            p(d(e.actionLabel), 1)
          ]),
          _: 1
        }, 8, ["variant", "icon"])) : m("", !0)
      ], 64))
    ], 12, Mr));
  }
}), Ar = { class: "overflow-x-auto" }, Pr = { class: "w-full border-collapse text-sm" }, jr = { class: "sr-only" }, Rr = { class: "border-b border-line bg-[#f5f8fd]" }, Ir = {
  key: 0,
  class: "w-10",
  scope: "col"
}, Er = {
  key: 1,
  class: "w-10 pl-4",
  scope: "col"
}, Or = ["aria-sort"], Ur = ["onClick"], Nr = { key: 1 }, Fr = ["colspan"], Hr = ["onClick"], Kr = {
  key: 0,
  class: "pl-4"
}, Gr = ["aria-expanded", "onClick"], Wr = {
  key: 0,
  class: "border-b border-line bg-brand-50/30"
}, Zr = ["colspan"], qr = {
  key: 0,
  class: "border-t border-line bg-brand-50 font-semibold text-ink"
}, Lf = /* @__PURE__ */ x({
  __name: "DataTable",
  props: /* @__PURE__ */ T({
    columns: {},
    rows: {},
    rowKey: { default: "id" },
    selectable: { type: Boolean },
    expandable: { type: Boolean },
    loading: { type: Boolean },
    emptyTitle: { default: "Nothing here yet" },
    emptyDescription: {},
    caption: { default: "Table" }
  }, {
    selected: { default: () => [] },
    selectedModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["rowClick"], ["update:selected"]),
  setup(e, { emit: l }) {
    const o = e, i = l, n = L(e, "selected"), r = R(null), u = R(null), f = S(() => {
      if (!r.value) return o.rows;
      const { key: B, dir: A } = r.value;
      return [...o.rows].sort((M, j) => M[B] > j[B] ? A : M[B] < j[B] ? -A : 0);
    }), g = S(() => n.value.length ? n.value.length === o.rows.length ? !0 : "indeterminate" : !1);
    function y(B) {
      r.value = r.value?.key !== B ? { key: B, dir: 1 } : r.value.dir === 1 ? { key: B, dir: -1 } : null;
    }
    function w() {
      n.value = g.value === !0 ? [] : o.rows.map((B) => B[o.rowKey]);
    }
    function z(B) {
      n.value = n.value.includes(B) ? n.value.filter((A) => A !== B) : [...n.value, B];
    }
    const D = S(() => o.columns.length + (o.selectable ? 1 : 0) + (o.expandable ? 1 : 0));
    return (B, A) => (t(), a("div", Ar, [
      s("table", Pr, [
        s("caption", jr, d(e.caption), 1),
        s("thead", null, [
          s("tr", Rr, [
            e.expandable ? (t(), a("th", Ir, [...A[1] || (A[1] = [
              s("span", { class: "sr-only" }, "Expand", -1)
            ])])) : m("", !0),
            e.selectable ? (t(), a("th", Er, [
              c(G, {
                "model-value": g.value,
                "aria-label": "Select all rows",
                "onUpdate:modelValue": w
              }, null, 8, ["model-value"])
            ])) : m("", !0),
            (t(!0), a(k, null, C(e.columns, (M) => (t(), a("th", {
              key: M.key,
              scope: "col",
              class: h(["eyebrow !font-semibold px-4 py-3 whitespace-nowrap", M.align === "right" ? "text-right" : "text-left"]),
              style: P({ width: M.width }),
              "aria-sort": r.value?.key === M.key ? r.value.dir === 1 ? "ascending" : "descending" : void 0
            }, [
              M.sortable ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "inline-flex items-center gap-1 uppercase hover:text-ink",
                onClick: (j) => y(M.key)
              }, [
                p(d(M.label) + " ", 1),
                c(_, {
                  name: r.value?.key === M.key && r.value.dir === -1 ? "chevron-down" : r.value?.key === M.key ? "chevron-up" : "chevron-down",
                  size: 12,
                  class: h(r.value?.key === M.key ? "text-brand-600" : "opacity-40")
                }, null, 8, ["name", "class"])
              ], 8, Ur)) : (t(), a(k, { key: 1 }, [
                p(d(M.label), 1)
              ], 64))
            ], 14, Or))), 128))
          ])
        ]),
        s("tbody", null, [
          e.loading ? (t(), a(k, { key: 0 }, C(5, (M) => s("tr", {
            key: M,
            class: "border-b border-line last:border-0"
          }, [
            (t(!0), a(k, null, C(D.value, (j) => (t(), a("td", {
              key: j,
              class: "px-4 py-4"
            }, [
              c(Vr, {
                width: j === 1 ? "70%" : "55%"
              }, null, 8, ["width"])
            ]))), 128))
          ])), 64)) : e.rows.length ? (t(!0), a(k, { key: 2 }, C(f.value, (M) => (t(), a(k, {
            key: M[e.rowKey]
          }, [
            s("tr", {
              class: h(["border-b border-line transition-colors last:border-0 hover:bg-gray-50", [n.value.includes(M[e.rowKey]) && "bg-brand-50/60", u.value === M[e.rowKey] && "bg-brand-50/40"]]),
              onClick: (j) => i("rowClick", M)
            }, [
              e.expandable ? (t(), a("td", Kr, [
                s("button", {
                  type: "button",
                  "aria-expanded": u.value === M[e.rowKey],
                  "aria-label": "Toggle row detail",
                  class: "text-ink-3 hover:text-ink",
                  onClick: J((j) => u.value = u.value === M[e.rowKey] ? null : M[e.rowKey], ["stop"])
                }, [
                  c(_, {
                    name: "chevron-right",
                    class: h(["transition-transform", u.value === M[e.rowKey] && "rotate-90 text-brand-600"])
                  }, null, 8, ["class"])
                ], 8, Gr)
              ])) : m("", !0),
              e.selectable ? (t(), a("td", {
                key: 1,
                class: "pl-4",
                onClick: A[0] || (A[0] = J(() => {
                }, ["stop"]))
              }, [
                c(G, {
                  "model-value": n.value.includes(M[e.rowKey]),
                  "aria-label": `Select row ${M[e.rowKey]}`,
                  "onUpdate:modelValue": (j) => z(M[e.rowKey])
                }, null, 8, ["model-value", "aria-label", "onUpdate:modelValue"])
              ])) : m("", !0),
              (t(!0), a(k, null, C(e.columns, (j) => (t(), a("td", {
                key: j.key,
                class: h(["px-4 py-3.5 text-gray-700", [j.align === "right" && "text-right", j.mono && "font-mono text-[13px]"]])
              }, [
                V(B.$slots, `cell-${j.key}`, {
                  row: M,
                  value: M[j.key]
                }, () => [
                  p(d(M[j.key]), 1)
                ])
              ], 2))), 128))
            ], 10, Hr),
            e.expandable && u.value === M[e.rowKey] ? (t(), a("tr", Wr, [
              s("td", {
                colspan: D.value,
                class: "px-6 py-5"
              }, [
                V(B.$slots, "expanded", { row: M })
              ], 8, Zr)
            ])) : m("", !0)
          ], 64))), 128)) : (t(), a("tr", Nr, [
            s("td", { colspan: D.value }, [
              c(Dr, {
                title: e.emptyTitle,
                description: e.emptyDescription
              }, {
                default: b(() => [
                  V(B.$slots, "empty")
                ]),
                _: 3
              }, 8, ["title", "description"])
            ], 8, Fr)
          ]))
        ]),
        B.$slots.foot ? (t(), a("tfoot", qr, [
          V(B.$slots, "foot")
        ])) : m("", !0)
      ])
    ]));
  }
}), Jr = /* @__PURE__ */ x({
  __name: "SearchInput",
  props: /* @__PURE__ */ T({
    placeholder: { default: "Search" },
    shortcut: {}
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue");
    return (o, i) => (t(), $(ce, {
      modelValue: l.value,
      "onUpdate:modelValue": i[1] || (i[1] = (n) => l.value = n),
      type: "search",
      icon: "search",
      placeholder: e.placeholder,
      "aria-label": e.placeholder
    }, {
      end: b(() => [
        l.value ? (t(), a("button", {
          key: 0,
          type: "button",
          "aria-label": "Clear search",
          class: "text-ink-3 hover:text-ink",
          onClick: i[0] || (i[0] = (n) => l.value = "")
        }, [
          c(_, {
            name: "x",
            size: 14
          })
        ])) : e.shortcut ? (t(), $(Q, { key: 1 }, {
          default: b(() => [
            p(d(e.shortcut), 1)
          ]),
          _: 1
        })) : m("", !0)
      ]),
      _: 1
    }, 8, ["modelValue", "placeholder", "aria-label"]));
  }
}), Qr = { class: "overflow-hidden rounded-xl border border-line bg-surface shadow-card" }, Xr = { class: "flex flex-wrap items-center gap-3 border-b border-line px-4 py-3" }, Yr = { class: "min-w-48 flex-1" }, ed = { class: "portal-type-panel-title" }, td = {
  key: 0,
  class: "portal-type-body-muted"
}, ad = { class: "w-56" }, nd = ["src", "title"], ld = ["aria-label"], sd = { class: "portal-stack-dense mx-auto max-w-2xl rounded-sm bg-surface p-8 text-[13px] leading-6 text-gray-700 shadow-card" }, Tf = /* @__PURE__ */ x({
  __name: "DocumentViewer",
  props: {
    title: {},
    meta: {},
    src: {},
    height: { default: "480px" }
  },
  emits: ["download"],
  setup(e, { emit: l }) {
    const o = l, i = R("");
    return (n, r) => (t(), a("section", Qr, [
      s("header", Xr, [
        s("div", Yr, [
          s("p", ed, d(e.title), 1),
          e.meta ? (t(), a("p", td, d(e.meta), 1)) : m("", !0)
        ]),
        s("div", ad, [
          c(Jr, {
            modelValue: i.value,
            "onUpdate:modelValue": r[0] || (r[0] = (u) => i.value = u),
            placeholder: "Find in document"
          }, null, 8, ["modelValue"])
        ]),
        c(I, {
          variant: "secondary",
          icon: "download",
          onClick: r[1] || (r[1] = (u) => o("download"))
        }, {
          default: b(() => [...r[2] || (r[2] = [
            p("Download", -1)
          ])]),
          _: 1
        })
      ]),
      e.src ? (t(), a("iframe", {
        key: 0,
        src: e.src,
        title: e.title,
        class: "block w-full",
        style: P({ height: e.height })
      }, null, 12, nd)) : (t(), a("div", {
        key: 1,
        class: "overflow-auto bg-gray-100 p-6",
        style: P({ height: e.height }),
        tabindex: "0",
        "aria-label": e.title
      }, [
        s("article", sd, [
          V(n.$slots, "default")
        ])
      ], 12, ld))
    ]));
  }
}), od = { class: "flex flex-col gap-3" }, id = { class: "flex flex-wrap items-center gap-2" }, rd = {
  key: 0,
  class: "flex flex-wrap items-center gap-2"
}, dd = ["aria-label", "onClick"], Df = /* @__PURE__ */ x({
  __name: "FilterBar",
  props: {
    chips: { default: () => [] },
    chipsModifiers: {}
  },
  emits: ["update:chips"],
  setup(e) {
    const l = L(e, "chips");
    return (o, i) => (t(), a("div", od, [
      s("div", id, [
        V(o.$slots, "default")
      ]),
      l.value.length ? (t(), a("div", rd, [
        (t(!0), a(k, null, C(l.value, (n) => (t(), a("span", {
          key: n.key,
          class: "inline-flex items-center gap-1 rounded-full bg-brand-50 py-1 pr-1.5 pl-2.5 text-xs font-medium text-brand-700"
        }, [
          p(d(n.label) + " ", 1),
          s("button", {
            type: "button",
            "aria-label": `Remove filter ${n.label}`,
            class: "rounded-full hover:bg-brand-100",
            onClick: (r) => l.value = l.value.filter((u) => u.key !== n.key)
          }, [
            c(_, {
              name: "x",
              size: 12
            })
          ], 8, dd)
        ]))), 128)),
        s("button", {
          type: "button",
          class: "text-xs font-medium text-ink-2 hover:text-ink hover:underline",
          onClick: i[0] || (i[0] = (n) => l.value = [])
        }, "Clear all")
      ])) : m("", !0)
    ]));
  }
}), cd = ["title"], ud = { class: "sr-only" }, Af = /* @__PURE__ */ x({
  __name: "HashBadge",
  props: {
    hash: {},
    verified: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, o = `${l.hash.slice(0, 6)}…${l.hash.slice(-4)}`;
    return (i, n) => (t(), a("span", {
      class: h(["inline-flex items-center gap-1.5 font-mono text-xs", e.verified ? "text-success-700" : "text-danger-700"]),
      title: e.hash
    }, [
      c(_, {
        name: e.verified ? "shield-check" : "shield-alert",
        size: 14
      }, null, 8, ["name"]),
      p(d(o) + " "),
      s("span", ud, d(e.verified ? "Hash verified" : "Hash mismatch"), 1)
    ], 10, cd));
  }
}), md = { class: "overflow-x-auto rounded-sm border border-line bg-surface py-2 font-mono text-xs leading-5" }, Pf = /* @__PURE__ */ x({
  __name: "JsonDiff",
  props: {
    before: {},
    after: {}
  },
  setup(e) {
    const l = e, o = S(() => [.../* @__PURE__ */ new Set([...Object.keys(l.before), ...Object.keys(l.after)])].flatMap((n) => {
      const r = JSON.stringify(l.before[n]), u = JSON.stringify(l.after[n]);
      return r === u ? [{ sign: " ", text: `${n}: ${r}`, tone: "text-ink-3" }] : [
        ...r !== void 0 ? [{ sign: "-", text: `${n}: ${r}`, tone: "bg-danger-50 text-danger-700" }] : [],
        ...u !== void 0 ? [{ sign: "+", text: `${n}: ${u}`, tone: "bg-success-50 text-success-700" }] : []
      ];
    }));
    return (i, n) => (t(), a("pre", md, [
      s("code", null, [
        (t(!0), a(k, null, C(o.value, (r, u) => (t(), a("span", {
          key: u,
          class: h(["block px-3", r.tone])
        }, d(r.sign) + " " + d(r.text), 3))), 128))
      ])
    ]));
  }
}), fd = { class: "inline-flex items-center gap-2 text-sm text-ink" }, bd = /* @__PURE__ */ x({
  __name: "ChannelLabel",
  props: {
    channel: {}
  },
  setup(e) {
    const l = e, o = {
      SMS: { icon: "message", color: "text-brand-600" },
      Voice: { icon: "phone", color: "text-violet-600" },
      RCS: { icon: "message-dot", color: "text-success-600" },
      Email: { icon: "mail", color: "text-warning-600" }
    }, i = S(() => o[l.channel]);
    return (n, r) => (t(), a("span", fd, [
      c(_, {
        name: i.value.icon,
        size: 18,
        class: h(i.value.color)
      }, null, 8, ["name", "class"]),
      p(d(e.channel), 1)
    ]));
  }
}), xd = /* @__PURE__ */ x({
  __name: "CornerTag",
  props: {
    tone: { default: "pending" },
    static: { type: Boolean }
  },
  setup(e) {
    const l = {
      pending: "border-warning-200 bg-warning-100 text-warning-700",
      accepted: "border-brand-200 bg-brand-50 text-brand-700",
      neutral: "border-line bg-gray-100 text-gray-600"
    };
    return (o, i) => (t(), a("span", {
      class: h(["inline-block rounded-bl-xs border px-2 py-0.5 font-mono text-[10px] font-medium tracking-widest uppercase", [l[e.tone], !e.static && "absolute top-0 right-0 rounded-tr-[inherit]"]])
    }, [
      V(o.$slots, "default")
    ], 2));
  }
}), gd = { class: "overflow-x-auto rounded-lg border border-line bg-surface shadow-card" }, hd = { class: "w-full min-w-[720px] border-collapse" }, vd = { class: "mt-2.5 text-sm font-semibold text-ink" }, pd = {
  scope: "row",
  class: "px-5 py-3 text-left font-normal"
}, yd = { class: "block text-sm text-ink" }, kd = { class: "block text-xs text-ink-3" }, $d = { class: "border-t border-line bg-gray-50" }, wd = ["colspan"], _d = {
  scope: "row",
  class: "py-3 pr-5 pl-9 text-left font-normal"
}, jf = /* @__PURE__ */ x({
  __name: "RateMatrix",
  props: {
    owners: {},
    activities: {},
    scrubbing: {}
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const o = l, i = (n) => n === null ? "N/A" : `₹${n.toFixed(2)}`;
    return (n, r) => (t(), a("div", gd, [
      s("table", hd, [
        r[2] || (r[2] = s("caption", { class: "sr-only" }, "Rates by channel owner", -1)),
        s("thead", null, [
          s("tr", null, [
            r[0] || (r[0] = s("th", {
              class: "w-1/4 bg-page",
              scope: "col"
            }, [
              s("span", { class: "sr-only" }, "Activity")
            ], -1)),
            (t(!0), a(k, null, C(e.owners, (u) => (t(), a("th", {
              key: u.id,
              scope: "col",
              class: h(["relative border-l border-line px-4 pt-7 pb-5 font-normal", u.status === "pending" ? "bg-[#fffcf5]" : "bg-page"])
            }, [
              c(xd, {
                tone: u.status
              }, {
                default: b(() => [
                  p(d(u.status), 1)
                ]),
                _: 2
              }, 1032, ["tone"]),
              c(de, {
                name: u.name,
                color: u.color,
                size: "lg",
                class: "mx-auto"
              }, null, 8, ["name", "color"]),
              s("p", vd, d(u.name), 1),
              c(I, {
                class: "mt-3",
                size: "sm",
                variant: u.ctaVariant,
                "icon-right": "arrow-right",
                onClick: (f) => o("action", u)
              }, {
                default: b(() => [
                  p(d(u.cta), 1)
                ]),
                _: 2
              }, 1032, ["variant", "onClick"])
            ], 2))), 128))
          ])
        ]),
        s("tbody", null, [
          (t(!0), a(k, null, C(e.activities, (u) => (t(), a("tr", {
            key: u.label,
            class: "border-t border-line"
          }, [
            s("th", pd, [
              s("span", yd, d(u.label), 1),
              s("span", kd, d(u.sub), 1)
            ]),
            (t(!0), a(k, null, C(e.owners, (f) => (t(), a("td", {
              key: f.id,
              class: h(["border-l border-line text-center font-mono text-sm font-medium", [f.status === "pending" && "bg-[#fffcf5]", u.rates[f.id] === null ? "text-ink-3" : "text-ink"]])
            }, d(i(u.rates[f.id])), 3))), 128))
          ]))), 128)),
          s("tr", $d, [
            s("th", {
              colspan: e.owners.length + 1,
              scope: "colgroup",
              class: "px-5 py-2.5 text-left font-normal"
            }, [...r[1] || (r[1] = [
              s("span", { class: "eyebrow-mono !font-semibold" }, "Scrubbing", -1),
              s("span", { class: "ml-2 text-xs text-ink-3" }, "per consent scrub, priced per channel", -1)
            ])], 8, wd)
          ]),
          (t(!0), a(k, null, C(e.scrubbing, (u) => (t(), a("tr", {
            key: u.label,
            class: "border-t border-line"
          }, [
            s("th", _d, [
              u.channel ? (t(), $(bd, {
                key: 0,
                channel: u.channel
              }, null, 8, ["channel"])) : m("", !0)
            ]),
            (t(!0), a(k, null, C(e.owners, (f) => (t(), a("td", {
              key: f.id,
              class: h(["border-l border-line text-center font-mono text-sm font-medium", [f.status === "pending" && "bg-[#fffcf5]", u.rates[f.id] === null ? "text-ink-3" : "text-ink"]])
            }, d(i(u.rates[f.id])), 3))), 128))
          ]))), 128))
        ])
      ])
    ]));
  }
}), zd = { class: "px-4 pb-4 text-[13px] leading-5 text-ink-2" }, Rf = /* @__PURE__ */ x({
  __name: "AccordionList",
  props: {
    items: {},
    defaultOpen: {}
  },
  setup(e) {
    return (l, o) => (t(), $(v(Pa), {
      type: "single",
      collapsible: "",
      "default-value": e.defaultOpen,
      class: "divide-y divide-line rounded-md border border-line bg-surface"
    }, {
      default: b(() => [
        (t(!0), a(k, null, C(e.items, (i) => (t(), $(v(ja), {
          key: i.id,
          value: i.id
        }, {
          default: b(() => [
            c(v(Ra), null, {
              default: b(() => [
                c(v(Ia), { class: "group flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-medium text-ink" }, {
                  default: b(() => [
                    p(d(i.title) + " ", 1),
                    c(_, {
                      name: "chevron-down",
                      class: "text-ink-3 transition-transform group-data-[state=open]:rotate-180"
                    })
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024),
            c(v(Ea), { class: "overflow-hidden" }, {
              default: b(() => [
                s("p", zd, d(i.body), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["value"]))), 128))
      ]),
      _: 1
    }, 8, ["default-value"]));
  }
}), Cd = { class: "flex flex-col" }, Sd = {
  key: 0,
  class: "absolute top-8 bottom-1 left-[15px] border-l border-dashed border-brand-300",
  "aria-hidden": "true"
}, Vd = { class: "min-w-0 pt-0.5" }, Md = { class: "text-sm text-ink" }, Bd = { class: "mt-0.5 text-xs text-ink-3" }, If = /* @__PURE__ */ x({
  __name: "ActivityFeed",
  props: {
    items: {}
  },
  setup(e) {
    return (l, o) => (t(), a("ol", Cd, [
      (t(!0), a(k, null, C(e.items, (i, n) => (t(), a("li", {
        key: n,
        class: "relative flex gap-3 pb-5 last:pb-0"
      }, [
        n < e.items.length - 1 ? (t(), a("span", Sd)) : m("", !0),
        c(E, {
          icon: i.icon,
          tone: i.tone || "neutral",
          size: "sm",
          round: ""
        }, null, 8, ["icon", "tone"]),
        s("div", Vd, [
          s("p", Md, d(i.title), 1),
          s("p", Bd, d(i.time) + " · " + d(i.actor), 1)
        ])
      ]))), 128))
    ]));
  }
}), Ld = { class: "inline-flex items-center -space-x-2" }, Td = {
  key: 0,
  class: "z-10 inline-flex size-7 items-center justify-center rounded-full bg-gray-100 text-[11px] font-medium text-gray-600 ring-2 ring-white"
}, Ef = /* @__PURE__ */ x({
  __name: "AvatarGroup",
  props: {
    names: {},
    max: { default: 3 }
  },
  setup(e) {
    return (l, o) => (t(), a("span", Ld, [
      (t(!0), a(k, null, C(e.names.slice(0, e.max), (i) => (t(), $(De, {
        key: i,
        name: i,
        size: "sm",
        class: "ring-2 ring-white"
      }, null, 8, ["name"]))), 128)),
      e.names.length > e.max ? (t(), a("span", Td, "+" + d(e.names.length - e.max), 1)) : m("", !0)
    ]));
  }
}), Dd = {
  key: 0,
  class: "flex flex-wrap items-start justify-between gap-3 border-b border-line px-5 py-4"
}, Ad = { class: "min-w-0" }, Pd = { class: "portal-type-panel-title flex items-center gap-2.5" }, jd = {
  key: 0,
  class: "mt-1 text-[13px] text-ink-2"
}, Rd = {
  key: 0,
  class: "flex items-center gap-2"
}, Id = {
  key: 1,
  class: "border-t border-line px-5 py-3"
}, Of = /* @__PURE__ */ x({
  __name: "Card",
  props: {
    title: {},
    description: {},
    icon: {},
    flush: { type: Boolean },
    muted: { type: Boolean }
  },
  setup(e) {
    return (l, o) => (t(), a("section", {
      class: h(["overflow-hidden rounded-lg border border-line shadow-card", e.muted ? "bg-gray-50" : "bg-surface"])
    }, [
      e.title || l.$slots.header ? (t(), a("header", Dd, [
        V(l.$slots, "header", {}, () => [
          s("div", Ad, [
            s("h3", Pd, [
              e.icon ? (t(), $(E, {
                key: 0,
                icon: e.icon,
                size: "xs"
              }, null, 8, ["icon"])) : m("", !0),
              p(d(e.title), 1)
            ]),
            e.description ? (t(), a("p", jd, d(e.description), 1)) : m("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), a("div", Rd, [
          V(l.$slots, "actions")
        ])) : m("", !0)
      ])) : m("", !0),
      s("div", {
        class: h(!e.flush && "p-5")
      }, [
        V(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), a("footer", Id, [
        V(l.$slots, "footer")
      ])) : m("", !0)
    ], 2));
  }
}), Ed = {
  class: "font-medium text-ink tnum",
  tabindex: "0"
}, Uf = /* @__PURE__ */ x({
  __name: "CompactCount",
  props: {
    value: {},
    suffix: {}
  },
  setup(e) {
    const l = e, o = S(() => {
      const n = l.value, r = (u) => u.toFixed(2).replace(/\.?0+$/, "");
      return n >= 1e7 ? `${r(n / 1e7)} Cr` : n >= 1e5 ? `${r(n / 1e5)} L` : n >= 1e3 ? `${r(n / 1e3)}k` : String(n);
    }), i = S(() => l.value.toLocaleString("en-IN") + (l.suffix ? ` ${l.suffix}` : ""));
    return (n, r) => (t(), $(ye, { text: i.value }, {
      default: b(() => [
        s("span", Ed, d(o.value), 1)
      ]),
      _: 1
    }, 8, ["text"]));
  }
}), Od = {
  key: 0,
  class: "flex items-center gap-3",
  role: "separator"
}, Ud = { class: "eyebrow" }, Nd = {
  key: 2,
  class: "inline-block h-full min-h-4 w-px bg-line align-middle",
  role: "separator",
  "aria-orientation": "vertical"
}, Nf = /* @__PURE__ */ x({
  __name: "Divider",
  props: {
    orientation: { default: "horizontal" },
    dashed: { type: Boolean }
  },
  setup(e) {
    return (l, o) => l.$slots.default ? (t(), a("div", Od, [
      o[0] || (o[0] = s("span", { class: "h-px flex-1 bg-line" }, null, -1)),
      s("span", Ud, [
        V(l.$slots, "default")
      ]),
      o[1] || (o[1] = s("span", { class: "h-px flex-1 bg-line" }, null, -1))
    ])) : e.orientation === "horizontal" ? (t(), a("hr", {
      key: 1,
      class: h(["border-0 border-t border-line", e.dashed && "border-dashed"])
    }, null, 2)) : (t(), a("span", Nd));
  }
}), Fd = { class: "divide-y divide-line" }, Hd = { class: "eyebrow !text-[10.5px]" }, Kd = ["title"], Ff = /* @__PURE__ */ x({
  __name: "KeyValueList",
  props: {
    items: {}
  },
  setup(e) {
    return (l, o) => (t(), a("dl", Fd, [
      (t(!0), a(k, null, C(e.items, (i) => (t(), a("div", {
        key: i.label,
        class: "grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center gap-3 py-3 first:pt-0 last:pb-0"
      }, [
        s("dt", Hd, d(i.label), 1),
        s("dd", {
          class: h(["truncate text-[13px] text-ink", i.mono && "font-mono"]),
          title: i.value
        }, d(i.value), 11, Kd)
      ]))), 128))
    ]));
  }
}), Gd = { class: "inline-flex items-center gap-1.5 font-mono text-[13px] text-ink" }, Wd = ["aria-label"], Hf = /* @__PURE__ */ x({
  __name: "MaskedValue",
  props: {
    value: {},
    visibleEnd: { default: 4 },
    revealable: { type: Boolean }
  },
  emits: ["reveal"],
  setup(e, { emit: l }) {
    const o = e, i = l, n = R(!1), r = S(() => "•".repeat(Math.max(o.value.length - o.visibleEnd, 0)) + o.value.slice(-o.visibleEnd));
    function u() {
      n.value = !n.value, n.value && i("reveal");
    }
    return (f, g) => (t(), a("span", Gd, [
      p(d(n.value ? e.value : r.value) + " ", 1),
      e.revealable ? (t(), a("button", {
        key: 0,
        type: "button",
        class: "text-ink-3 hover:text-ink",
        "aria-label": n.value ? "Hide value" : "Reveal value",
        onClick: u
      }, [
        c(_, {
          name: n.value ? "eye-off" : "eye",
          size: 14
        }, null, 8, ["name"])
      ], 8, Wd)) : m("", !0)
    ]));
  }
}), Zd = { class: "inline-flex h-8 items-center gap-1.5 rounded-sm border border-line bg-gray-100/70 px-2.5 font-mono text-xs text-gray-700" }, Kf = /* @__PURE__ */ x({
  __name: "MetaChip",
  props: {
    icon: {}
  },
  setup(e) {
    return (l, o) => (t(), a("span", Zd, [
      e.icon ? (t(), $(_, {
        key: 0,
        name: e.icon,
        size: 14
      }, null, 8, ["name"])) : m("", !0),
      V(l.$slots, "default")
    ]));
  }
}), qd = {
  // Consent
  OPTED_IN: { tone: "success", label: "Opted in" },
  OPTED_OUT: { tone: "warning", label: "Opted out" },
  NO_ACTION: { tone: "neutral", label: "No action" },
  REVOKED: { tone: "danger", label: "Revoked" },
  // Migration
  VALIDATING: { tone: "brand", label: "Validating" },
  PENDING_APPROVAL: { tone: "warning", label: "Pending approval" },
  APPROVED: { tone: "success", label: "Approved" },
  REJECTED: { tone: "danger", label: "Rejected" },
  ESCALATED: { tone: "info", label: "Escalated" },
  BLACKLISTED: { tone: "danger", label: "Blacklisted" },
  SLA_BREACHED: { tone: "danger", label: "SLA breached" },
  // Channel owner
  PRE_CONFIGURED: { tone: "neutral", label: "Pre-configured" },
  INVITED: { tone: "info", label: "Invited" },
  ACTIVATED: { tone: "brand", label: "Activated" },
  PROFILE_VERIFIED: { tone: "brand", label: "Profile verified" },
  OPERATIONAL: { tone: "success", label: "Operational" },
  SUSPENDED: { tone: "warning", label: "Suspended" },
  TERMINATED: { tone: "danger", label: "Terminated" },
  // User
  ACTIVE: { tone: "success", label: "Active" },
  INACTIVE: { tone: "neutral", label: "Inactive" },
  LOCKED: { tone: "danger", label: "Locked" },
  // GTM partner
  CHECK_IN_PROGRESS: { tone: "brand", label: "Checks running" },
  SUSPENDED_GLOBAL: { tone: "warning", label: "Suspended globally" },
  REMOVED_GLOBAL: { tone: "danger", label: "Removed globally" },
  // Rate card
  DRAFT: { tone: "neutral", label: "Draft" },
  PUBLISHED: { tone: "info", label: "Published" },
  SUPERSEDED: { tone: "neutral", label: "Superseded" },
  ACTIVE_UNLOCKED: { tone: "warning", label: "Active, unlocked" }
}, Gf = /* @__PURE__ */ x({
  __name: "StatusChip",
  props: {
    status: {},
    size: { default: "md" }
  },
  setup(e) {
    const l = e, o = S(() => qd[l.status] ?? { tone: "neutral", label: l.status });
    return (i, n) => (t(), $(F, {
      variant: o.value.tone,
      size: e.size,
      dot: ""
    }, {
      default: b(() => [
        p(d(o.value.label), 1)
      ]),
      _: 1
    }, 8, ["variant", "size"]));
  }
}), Jd = {}, Qd = { class: "inline-flex items-center rounded-full bg-page-app px-2.5 py-1 text-[12px] text-ink-2" };
function Xd(e, l) {
  return t(), a("span", Qd, [
    V(e.$slots, "default")
  ]);
}
const Yd = /* @__PURE__ */ Pe(Jd, [["render", Xd]]), ec = {
  key: 1,
  class: "w-3.5"
}, tc = { class: "flex-1 truncate" }, ac = {
  key: 3,
  class: "font-mono text-[11px] text-ink-3"
}, Wf = /* @__PURE__ */ x({
  __name: "TreeList",
  props: {
    items: {},
    defaultExpanded: { default: () => [] },
    ariaLabel: { default: "Tree" }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const o = l;
    return (i, n) => (t(), $(v(Oa), {
      items: e.items,
      "get-key": (r) => r.id,
      "default-expanded": e.defaultExpanded,
      "aria-label": e.ariaLabel,
      class: "flex flex-col gap-0.5 text-[13px]"
    }, {
      default: b(({ flattenItems: r }) => [
        (t(!0), a(k, null, C(r, (u) => (t(), $(v(Ua), Ce({
          key: u._id
        }, { ref_for: !0 }, u.bind, {
          class: "flex h-9 cursor-pointer items-center gap-2 rounded-sm pr-2 outline-none hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-brand-600 data-[selected]:bg-brand-50 data-[selected]:text-brand-600",
          style: { paddingLeft: `${u.level * 16 - 8}px` },
          onSelect: (f) => o("select", u.value.id)
        }), {
          default: b(({ isExpanded: f }) => [
            u.hasChildren ? (t(), $(_, {
              key: 0,
              name: "chevron-right",
              size: 14,
              class: h(["text-ink-3 transition-transform", f && "rotate-90"])
            }, null, 8, ["class"])) : (t(), a("span", ec)),
            u.value.icon ? (t(), $(_, {
              key: 2,
              name: u.value.icon,
              size: 15,
              class: "text-ink-2"
            }, null, 8, ["name"])) : m("", !0),
            s("span", tc, d(u.value.label), 1),
            u.value.count !== void 0 ? (t(), a("span", ac, d(u.value.count), 1)) : m("", !0)
          ]),
          _: 2
        }, 1040, ["style", "onSelect"]))), 128))
      ]),
      _: 1
    }, 8, ["items", "get-key", "default-expanded", "aria-label"]));
  }
}), nc = {
  class: "block max-w-full truncate",
  tabindex: "0"
}, Zf = /* @__PURE__ */ x({
  __name: "TruncatedText",
  props: {
    text: {}
  },
  setup(e) {
    return (l, o) => (t(), $(ye, { text: e.text }, {
      default: b(() => [
        s("span", nc, d(e.text), 1)
      ]),
      _: 1
    }, 8, ["text"]));
  }
}), lc = ["role"], sc = { class: "min-w-0 flex-1 text-[13px] leading-5 text-gray-700" }, oc = {
  key: 0,
  class: "text-sm font-semibold text-ink"
}, ic = {
  key: 1,
  class: "mt-2 flex gap-2"
}, qf = /* @__PURE__ */ x({
  __name: "Alert",
  props: {
    tone: { default: "info" },
    title: {},
    dismissible: { type: Boolean },
    icon: {}
  },
  emits: ["dismiss"],
  setup(e, { emit: l }) {
    const o = e, i = l, n = {
      info: { box: "border-brand-200 bg-brand-50", icon: "text-brand-600", glyph: "info" },
      success: { box: "border-success-500/30 bg-success-50", icon: "text-success-600", glyph: "circle-check" },
      warning: { box: "border-warning-200 bg-warning-50", icon: "text-warning-700", glyph: "warning" },
      danger: { box: "border-danger-200 bg-danger-50", icon: "text-danger-600", glyph: "circle-alert" }
    }, r = S(() => n[o.tone]);
    return (u, f) => (t(), a("div", {
      class: h(["flex items-start gap-3 rounded-md border p-3.5", r.value.box]),
      role: o.tone === "danger" ? "alert" : "status"
    }, [
      c(_, {
        name: e.icon || r.value.glyph,
        size: 18,
        class: h([r.value.icon, "mt-px"])
      }, null, 8, ["name", "class"]),
      s("div", sc, [
        e.title ? (t(), a("p", oc, d(e.title), 1)) : m("", !0),
        V(u.$slots, "default"),
        u.$slots.actions ? (t(), a("div", ic, [
          V(u.$slots, "actions")
        ])) : m("", !0)
      ]),
      e.dismissible ? (t(), a("button", {
        key: 0,
        type: "button",
        "aria-label": "Dismiss",
        class: "text-ink-3 hover:text-ink",
        onClick: f[0] || (f[0] = (g) => i("dismiss"))
      }, [
        c(_, { name: "x" })
      ])) : m("", !0)
    ], 10, lc));
  }
}), rc = ["role"], dc = { class: "portal-type-form-section mt-4" }, cc = {
  key: 0,
  class: "portal-type-page-subtitle mt-1.5 max-w-md"
}, uc = {
  key: 1,
  class: "mt-5 flex flex-wrap justify-center gap-2"
}, Jf = /* @__PURE__ */ x({
  __name: "FeedbackCard",
  props: {
    variant: { default: "success" },
    title: {},
    description: {},
    primaryLabel: {},
    secondaryLabel: {}
  },
  emits: ["primary", "secondary"],
  setup(e, { emit: l }) {
    const o = e, i = l, r = {
      success: { wrap: "bg-success-100 text-success-600", icon: "check", button: "bg-success-600" },
      error: { wrap: "bg-danger-100 text-danger-700", icon: "x", button: "bg-danger-700" },
      warning: { wrap: "bg-warning-100 text-warning-700", icon: "warning", button: "bg-warning-700" }
    }[o.variant];
    return (u, f) => (t(), a("section", {
      class: "flex flex-col items-center rounded-2xl border border-[var(--color-border-dialog)] bg-surface p-6 text-center",
      role: e.variant === "error" ? "alert" : "status"
    }, [
      s("span", {
        class: h(["flex size-[68px] items-center justify-center rounded-full", v(r).wrap])
      }, [
        c(_, {
          name: v(r).icon,
          size: 30
        }, null, 8, ["name"])
      ], 2),
      s("h3", dc, d(e.title), 1),
      e.description ? (t(), a("p", cc, [
        V(u.$slots, "default", {}, () => [
          p(d(e.description), 1)
        ])
      ])) : m("", !0),
      e.primaryLabel || e.secondaryLabel ? (t(), a("div", uc, [
        e.secondaryLabel ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "h-[var(--button-height-confirm)] min-w-32 rounded-md border border-line bg-surface px-[18px] text-[13px] font-medium text-ink hover:bg-gray-100",
          onClick: f[0] || (f[0] = (g) => i("secondary"))
        }, d(e.secondaryLabel), 1)) : m("", !0),
        e.primaryLabel ? (t(), a("button", {
          key: 1,
          type: "button",
          class: h(["h-[var(--button-height-confirm)] min-w-32 rounded-md px-[18px] text-[13px] font-medium text-white hover:opacity-90", v(r).button]),
          onClick: f[1] || (f[1] = (g) => i("primary"))
        }, d(e.primaryLabel), 3)) : m("", !0)
      ])) : m("", !0)
    ], 8, rc));
  }
}), mc = { class: "relative flex size-2" }, fc = {
  key: 0,
  class: "absolute inset-0 animate-ping rounded-full bg-success-500 opacity-60 motion-reduce:animate-none"
}, Qf = /* @__PURE__ */ x({
  __name: "LiveIndicator",
  props: {
    state: { default: "live" }
  },
  setup(e) {
    return (l, o) => (t(), a("span", {
      class: h(["inline-flex items-center gap-1.5 text-xs font-medium", e.state === "live" ? "text-success-600" : e.state === "paused" ? "text-warning-700" : "text-ink-2"])
    }, [
      s("span", mc, [
        e.state === "live" ? (t(), a("span", fc)) : m("", !0),
        s("span", {
          class: h(["relative size-2 rounded-full", e.state === "live" ? "bg-success-600" : e.state === "paused" ? "bg-warning-500" : "bg-gray-400"])
        }, null, 2)
      ]),
      V(l.$slots, "default", {}, () => [
        p(d(e.state === "live" ? "Live" : e.state === "paused" ? "Paused" : "Closed"), 1)
      ])
    ], 2));
  }
}), bc = { class: "min-w-0 flex-1" }, xc = { class: "mt-0.5 text-xs text-ink-3" }, Xf = /* @__PURE__ */ x({
  __name: "NotificationItem",
  props: {
    icon: { default: "bell" },
    tone: { default: "brand" },
    title: {},
    time: {},
    cta: {},
    unread: { type: Boolean }
  },
  emits: ["dismiss"],
  setup(e, { emit: l }) {
    const o = l;
    return (i, n) => (t(), a("article", {
      class: h(["flex gap-3 px-4 py-3.5", e.unread && "bg-brand-50/60"])
    }, [
      c(E, {
        icon: e.icon,
        tone: e.tone,
        size: "sm"
      }, null, 8, ["icon", "tone"]),
      s("div", bc, [
        s("p", {
          class: h(["text-sm text-ink", e.unread && "font-medium"])
        }, d(e.title), 3),
        s("p", xc, d(e.time), 1),
        e.cta ? (t(), $(pe, {
          key: 0,
          size: "sm",
          class: "mt-1.5"
        }, {
          default: b(() => [
            p(d(e.cta), 1)
          ]),
          _: 1
        })) : m("", !0)
      ]),
      s("button", {
        type: "button",
        "aria-label": "Dismiss notification",
        class: "self-start text-ink-3 hover:text-ink",
        onClick: n[0] || (n[0] = (r) => o("dismiss"))
      }, [
        c(_, {
          name: "x",
          size: 14
        })
      ])
    ], 2));
  }
}), gc = ["aria-label"], hc = { class: "text-[13px] text-ink-2" }, Yf = /* @__PURE__ */ x({
  __name: "PageLoader",
  props: {
    label: { default: "Loading" },
    fullscreen: { type: Boolean }
  },
  setup(e) {
    return (l, o) => (t(), a("div", {
      class: h(["flex flex-col items-center justify-center gap-3 bg-surface/80", e.fullscreen ? "fixed inset-0 z-[var(--z-overlay)]" : "min-h-64"]),
      role: "status",
      "aria-label": e.label
    }, [
      c(Z, {
        size: 36,
        class: "animate-pulse motion-reduce:animate-none"
      }),
      s("p", hc, d(e.label), 1)
    ], 10, gc));
  }
}), eb = /* @__PURE__ */ x({
  __name: "SlaTimer",
  props: {
    seconds: {},
    ticking: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, o = R(l.seconds);
    Ie(() => l.seconds, (g) => o.value = g);
    let i;
    Ee(() => {
      l.ticking && (i = setInterval(() => {
        o.value = Math.max(o.value - 1, 0);
      }, 1e3));
    }), Oe(() => clearInterval(i));
    const n = (g) => String(g).padStart(2, "0"), r = S(() => `${n(Math.floor(o.value / 3600))}:${n(Math.floor(o.value % 3600 / 60))}:${n(o.value % 60)}`), u = S(() => o.value <= 0 ? "breached" : o.value < 3600 ? "critical" : o.value < 21600 ? "warning" : "normal"), f = { normal: "bg-gray-100 text-gray-700", warning: "bg-warning-100 text-warning-700", critical: "bg-danger-100 text-danger-700 animate-pulse-danger", breached: "bg-danger-600 text-white" };
    return (g, y) => (t(), a("span", {
      class: h(["inline-flex h-7 items-center gap-1.5 rounded-sm px-2 font-mono text-xs font-medium tnum", f[u.value]]),
      role: "timer"
    }, [
      c(_, {
        name: u.value === "breached" ? "warning" : "clock",
        size: 13
      }, null, 8, ["name"]),
      p(" " + d(u.value === "breached" ? "SLA breached" : r.value), 1)
    ], 2));
  }
}), vc = { class: "flex flex-wrap items-center gap-4 rounded-xl bg-navy-900 px-5 py-4 shadow-bar" }, pc = { class: "flex size-11 shrink-0 items-center justify-center rounded-md bg-navy-700 text-brand-300" }, yc = { class: "min-w-48 flex-1" }, kc = { class: "text-[15px] font-semibold text-white" }, $c = {
  key: 0,
  class: "mt-0.5 text-[13px] text-white/60"
}, wc = { class: "flex flex-wrap items-center gap-2" }, tb = /* @__PURE__ */ x({
  __name: "StickyActionBar",
  props: {
    title: {},
    detail: {}
  },
  setup(e) {
    return (l, o) => (t(), a("div", vc, [
      s("span", pc, [
        c(_, {
          name: "shield",
          size: 20
        })
      ]),
      s("div", yc, [
        s("p", kc, d(e.title), 1),
        e.detail ? (t(), a("p", $c, d(e.detail), 1)) : m("", !0)
      ]),
      s("div", wc, [
        V(l.$slots, "default")
      ])
    ]));
  }
}), _c = {
  class: "fixed right-6 bottom-6 z-[60] flex w-[360px] max-w-[calc(100vw-32px)] flex-col gap-2",
  "aria-live": "polite"
}, zc = { class: "flex-1" }, Cc = ["onClick"], Sc = ["onClick"], ae = Ue([]);
let Vc = 1;
function ab() {
  return {
    show(e) {
      const l = Vc++;
      ae.push({ ...e, id: l }), setTimeout(() => ne(l), e.duration ?? 5e3);
    },
    dismiss: ne
  };
}
function ne(e) {
  const l = ae.findIndex((o) => o.id === e);
  l >= 0 && ae.splice(l, 1);
}
const nb = /* @__PURE__ */ x({
  __name: "ToastStack",
  setup(e) {
    const l = { success: "circle-check", danger: "circle-alert", warning: "warning", info: "info" }, o = { success: "text-success-500", danger: "text-danger-500", warning: "text-warning-500", info: "text-brand-300" };
    return (i, n) => (t(), $(Ne, { to: "body" }, [
      s("ol", _c, [
        (t(!0), a(k, null, C(ae, (r) => (t(), a("li", {
          key: r.id,
          class: "flex items-center gap-3 rounded-md bg-navy-900 px-4 py-3 text-sm text-white shadow-bar"
        }, [
          c(_, {
            name: l[r.tone],
            size: 18,
            class: h(o[r.tone])
          }, null, 8, ["name", "class"]),
          s("span", zc, d(r.title), 1),
          r.action ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "font-medium text-brand-300 hover:underline",
            onClick: (u) => ne(r.id)
          }, d(r.action), 9, Cc)) : m("", !0),
          s("button", {
            type: "button",
            "aria-label": "Dismiss",
            class: "text-white/60 hover:text-white",
            onClick: (u) => ne(r.id)
          }, [
            c(_, {
              name: "x",
              size: 14
            })
          ], 8, Sc)
        ]))), 128))
      ])
    ]));
  }
}), Mc = {
  class: "flex flex-wrap gap-2",
  role: "group",
  "aria-label": "Preferred channels"
}, Bc = ["aria-pressed", "disabled", "onClick"], Lc = /* @__PURE__ */ x({
  __name: "ChannelChoice",
  props: /* @__PURE__ */ T({
    options: { default: () => ["SMS", "Calls"] },
    disabled: { type: Boolean }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue");
    function o(i) {
      l.value = l.value.includes(i) ? l.value.filter((n) => n !== i) : [...l.value, i];
    }
    return (i, n) => (t(), a("div", Mc, [
      (t(!0), a(k, null, C(e.options, (r) => (t(), a("button", {
        key: r,
        type: "button",
        "aria-pressed": l.value.includes(r),
        disabled: e.disabled,
        class: h(["inline-flex h-8 items-center gap-2 rounded-full pr-3.5 pl-2 text-[13px] transition-colors disabled:cursor-not-allowed disabled:opacity-50", l.value.includes(r) ? "bg-app-tint font-medium text-app-600" : "bg-gray-100 text-ink-2"]),
        onClick: (u) => o(r)
      }, [
        s("span", {
          class: h(["flex size-[18px] items-center justify-center rounded-full", l.value.includes(r) ? "bg-app-500 text-white" : "border-2 border-line-strong"])
        }, [
          l.value.includes(r) ? (t(), $(_, {
            key: 0,
            name: "check",
            size: 11,
            "stroke-width": 3
          })) : m("", !0)
        ], 2),
        p(" " + d(r), 1)
      ], 10, Bc))), 128))
    ]));
  }
}), Tc = ["min", "max", "disabled", "aria-invalid", "aria-label"], we = /* @__PURE__ */ x({
  __name: "DateField",
  props: /* @__PURE__ */ T({
    min: {},
    max: {},
    invalid: { type: Boolean },
    disabled: { type: Boolean },
    ariaLabel: {}
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue");
    return (o, i) => W((t(), a("input", {
      "onUpdate:modelValue": i[0] || (i[0] = (n) => l.value = n),
      type: "date",
      min: e.min,
      max: e.max,
      disabled: e.disabled,
      "aria-invalid": e.invalid || void 0,
      "aria-label": e.ariaLabel,
      class: h(["h-[var(--input-height-md)] rounded-md border bg-surface px-3 font-mono text-xs text-ink outline-none transition-shadow focus:ring-3 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70", e.invalid ? "border-danger-500 focus:ring-danger-100" : "border-line focus:border-brand-500 focus:ring-brand-100"])
    }, null, 10, Tc)), [
      [X, l.value]
    ]);
  }
}), Dc = { class: "text-gray-600" }, lb = /* @__PURE__ */ x({
  __name: "DeclarationCheck",
  props: /* @__PURE__ */ T({
    invalid: { type: Boolean },
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue");
    return (o, i) => (t(), a("div", {
      class: h(["rounded-md border p-4 transition-colors", [e.invalid ? "border-danger-500" : l.value ? "border-brand-300 bg-brand-50" : "border-brand-200/70 bg-surface"]])
    }, [
      c(G, {
        modelValue: l.value,
        "onUpdate:modelValue": i[0] || (i[0] = (n) => l.value = n),
        disabled: e.disabled,
        invalid: e.invalid
      }, {
        default: b(() => [
          s("span", Dc, [
            V(o.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["modelValue", "disabled", "invalid"])
    ], 2));
  }
}), Ac = { class: "mx-auto flex size-24 items-center justify-center rounded-full bg-surface shadow-pop" }, Pc = { class: "relative text-brand-400" }, jc = { class: "mt-5 text-[15px] font-medium text-gray-600" }, Rc = ["disabled"], Ic = { class: "mt-1 text-[13px] text-ink-3" }, Ec = {
  key: 1,
  class: "mx-auto flex max-w-md items-center gap-3 text-left"
}, Oc = { class: "min-w-0 flex-1" }, Uc = { class: "truncate font-mono text-[13px] font-medium text-ink" }, Nc = {
  key: 0,
  class: "mt-0.5 text-[13px] text-danger-700"
}, Fc = {
  key: 1,
  class: "mt-0.5 text-[13px] text-success-700"
}, sb = /* @__PURE__ */ x({
  __name: "FileDropzone",
  props: {
    state: { default: "idle" },
    disabled: { type: Boolean },
    fileName: {},
    fileMeta: {},
    progress: { default: 0 },
    errorText: {},
    hint: { default: "One file per upload. CSV only. Up to 100 MB" }
  },
  emits: ["files", "remove"],
  setup(e, { emit: l }) {
    const o = l, i = R(!1), n = R();
    function r(u) {
      i.value = !1, u.dataTransfer?.files.length && o("files", u.dataTransfer.files);
    }
    return (u, f) => (t(), a("div", {
      class: h(["rounded-md border border-dashed px-6 py-10 text-center transition-colors", [
        e.disabled ? "border-brand-200/70 bg-gray-50 opacity-70" : i.value ? "border-brand-500 bg-brand-50" : "border-brand-300 bg-surface",
        e.state === "error" && "border-danger-500 bg-danger-50",
        e.state === "done" && "border-success-500 bg-success-50 border-solid"
      ]]),
      onDragover: f[3] || (f[3] = J((g) => i.value = !e.disabled, ["prevent"])),
      onDragleave: f[4] || (f[4] = (g) => i.value = !1),
      onDrop: J(r, ["prevent"])
    }, [
      e.state === "idle" ? (t(), a(k, { key: 0 }, [
        s("div", Ac, [
          s("span", Pc, [
            c(_, {
              name: "shield",
              size: 56,
              "stroke-width": 1,
              fill: "currentColor",
              "fill-opacity": "0.75"
            }),
            c(_, {
              name: "upload",
              size: 18,
              class: "absolute top-[19px] left-[19px] text-white"
            })
          ])
        ]),
        s("p", jc, [
          f[5] || (f[5] = p(" Drop your CSV here, or ", -1)),
          s("button", {
            type: "button",
            disabled: e.disabled,
            class: "font-medium text-brand-600 hover:underline disabled:cursor-not-allowed disabled:no-underline",
            onClick: f[0] || (f[0] = (g) => n.value?.click())
          }, "browse", 8, Rc)
        ]),
        s("p", Ic, d(e.hint), 1),
        s("input", {
          ref_key: "input",
          ref: n,
          type: "file",
          accept: ".csv",
          class: "sr-only",
          tabindex: "-1",
          "aria-label": "Choose CSV file",
          onChange: f[1] || (f[1] = (g) => g.target.files && o("files", g.target.files))
        }, null, 544)
      ], 64)) : (t(), a("div", Ec, [
        s("span", {
          class: h(["flex size-11 shrink-0 items-center justify-center rounded-md", e.state === "error" ? "bg-danger-100 text-danger-600" : e.state === "done" ? "bg-success-100 text-success-600" : "bg-brand-50 text-brand-600"])
        }, [
          c(_, {
            name: e.state === "error" ? "warning" : e.state === "done" ? "file-check" : "file",
            size: 20
          }, null, 8, ["name"])
        ], 2),
        s("div", Oc, [
          s("p", Uc, d(e.fileName), 1),
          e.state === "error" ? (t(), a("p", Nc, d(e.errorText), 1)) : e.state === "done" ? (t(), a("p", Fc, d(e.fileMeta), 1)) : (t(), $(N, {
            key: 2,
            class: "mt-2",
            value: e.progress,
            size: "sm",
            label: `Encrypting and uploading ${e.fileName}`
          }, null, 8, ["value", "label"]))
        ]),
        s("button", {
          type: "button",
          "aria-label": "Remove file",
          class: "text-ink-3 hover:text-ink",
          onClick: f[2] || (f[2] = (g) => o("remove"))
        }, [
          c(_, { name: "x" })
        ])
      ]))
    ], 34));
  }
}), Hc = { class: "max-h-60 overflow-auto" }, Kc = {
  key: 0,
  class: "px-2.5 py-3 text-center text-[13px] text-ink-3"
}, ob = /* @__PURE__ */ x({
  __name: "MultiSelect",
  props: /* @__PURE__ */ T({
    options: {},
    placeholder: { default: "Select" },
    searchable: { type: Boolean, default: !0 }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = e, o = L(e, "modelValue"), i = R(""), n = S(() => l.options.filter((f) => f.label.toLowerCase().includes(i.value.toLowerCase()))), r = S(() => {
      if (!o.value.length) return l.placeholder;
      const f = l.options.find((g) => g.value === o.value[0])?.label;
      return o.value.length === 1 ? f : `${f} +${o.value.length - 1}`;
    });
    function u(f) {
      o.value = o.value.includes(f) ? o.value.filter((g) => g !== f) : [...o.value, f];
    }
    return (f, g) => (t(), $(v(Se), null, {
      default: b(() => [
        c(v(Ve), {
          class: h(["flex h-[var(--input-height-md)] w-full items-center justify-between gap-2 rounded-md border border-line bg-surface px-3 text-left text-[13px] outline-none focus:border-brand-500 focus:ring-3 focus:ring-brand-100", o.value.length ? "text-ink" : "text-ink-3"])
        }, {
          default: b(() => [
            p(d(r.value) + " ", 1),
            c(_, {
              name: "chevron-down",
              class: "text-ink-3"
            })
          ]),
          _: 1
        }, 8, ["class"]),
        c(v(Me), null, {
          default: b(() => [
            c(v(Be), {
              "side-offset": 6,
              align: "start",
              class: "z-50 w-[var(--reka-popover-trigger-width)] rounded-md border border-line bg-surface p-1 shadow-pop"
            }, {
              default: b(() => [
                e.searchable ? W((t(), a("input", {
                  key: 0,
                  "onUpdate:modelValue": g[0] || (g[0] = (y) => i.value = y),
                  placeholder: "Search",
                  "aria-label": "Search options",
                  class: "mb-1 h-9 w-full rounded-sm bg-gray-100 px-2.5 text-sm outline-none placeholder:text-ink-4"
                }, null, 512)), [
                  [X, i.value]
                ]) : m("", !0),
                s("ul", Hc, [
                  (t(!0), a(k, null, C(n.value, (y) => (t(), a("li", {
                    key: y.value,
                    class: "rounded-sm px-2.5 py-2 hover:bg-brand-50"
                  }, [
                    c(G, {
                      "model-value": o.value.includes(y.value),
                      "onUpdate:modelValue": (w) => u(y.value)
                    }, {
                      default: b(() => [
                        p(d(y.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["model-value", "onUpdate:modelValue"])
                  ]))), 128)),
                  n.value.length ? m("", !0) : (t(), a("li", Kc, 'No matches for "' + d(i.value) + '"', 1))
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Gc = ["disabled"], Wc = ["value", "disabled", "aria-label"], Zc = ["disabled"], ib = /* @__PURE__ */ x({
  __name: "NumberInput",
  props: /* @__PURE__ */ T({
    min: {},
    max: {},
    step: { default: 1 },
    disabled: { type: Boolean },
    ariaLabel: { default: "Quantity" }
  }, {
    modelValue: { default: 0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = e, o = L(e, "modelValue");
    function i(r) {
      return Math.min(l.max ?? 1 / 0, Math.max(l.min ?? -1 / 0, r));
    }
    function n(r) {
      const u = Number(r.target.value);
      Number.isNaN(u) || (o.value = i(u));
    }
    return (r, u) => (t(), a("div", {
      class: h(["inline-flex h-[var(--input-height-md)] items-center overflow-hidden rounded-md border border-line bg-surface focus-within:border-brand-500 focus-within:ring-3 focus-within:ring-brand-100", e.disabled && "opacity-60"])
    }, [
      s("button", {
        type: "button",
        class: "flex h-full w-9 items-center justify-center text-ink-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40",
        "aria-label": "Decrease",
        disabled: e.disabled || e.min !== void 0 && o.value <= e.min,
        onClick: u[0] || (u[0] = (f) => o.value = i(o.value - e.step))
      }, [...u[2] || (u[2] = [
        s("span", { class: "block h-0.5 w-2.5 rounded bg-current" }, null, -1)
      ])], 8, Gc),
      s("input", {
        value: o.value,
        inputmode: "numeric",
        disabled: e.disabled,
        "aria-label": e.ariaLabel,
        class: "h-full w-14 border-x border-line bg-transparent text-center font-mono text-[13px] text-ink outline-none",
        onChange: n
      }, null, 40, Wc),
      s("button", {
        type: "button",
        class: "flex h-full w-9 items-center justify-center text-ink-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40",
        "aria-label": "Increase",
        disabled: e.disabled || e.max !== void 0 && o.value >= e.max,
        onClick: u[1] || (u[1] = (f) => o.value = i(o.value + e.step))
      }, [
        c(_, {
          name: "plus",
          size: 14
        })
      ], 8, Zc)
    ], 2));
  }
}), rb = /* @__PURE__ */ x({
  __name: "OtpInput",
  props: /* @__PURE__ */ T({
    length: { default: 6 },
    invalid: { type: Boolean },
    disabled: { type: Boolean }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["complete"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const o = L(e, "modelValue"), i = l;
    return (n, r) => (t(), $(v(Na), {
      modelValue: o.value,
      "onUpdate:modelValue": r[0] || (r[0] = (u) => o.value = u),
      otp: "",
      disabled: e.disabled,
      class: "flex gap-2",
      "aria-label": "One-time passcode",
      onComplete: r[1] || (r[1] = (u) => i("complete", u))
    }, {
      default: b(() => [
        (t(!0), a(k, null, C(e.length, (u, f) => (t(), $(v(Fa), {
          key: f,
          index: f,
          inputmode: "numeric",
          "aria-label": `Digit ${f + 1}`,
          class: h(["size-12 rounded-md border bg-surface text-center font-mono text-lg font-semibold text-ink outline-none focus:ring-3 disabled:cursor-not-allowed disabled:bg-gray-100", e.invalid ? "border-danger-500 focus:ring-danger-100" : "border-line-strong/70 focus:border-brand-500 focus:ring-brand-100"])
        }, null, 8, ["index", "aria-label", "class"]))), 128))
      ]),
      _: 1
    }, 8, ["modelValue", "disabled"]));
  }
}), qc = { class: "flex flex-col gap-3" }, Jc = ["aria-label"], Qc = ["aria-valuenow"], Xc = { class: "grid grid-cols-2 gap-x-4 gap-y-1.5" }, db = /* @__PURE__ */ x({
  __name: "PasswordInput",
  props: /* @__PURE__ */ T({
    showRules: { type: Boolean },
    placeholder: { default: "Enter password" },
    invalid: { type: Boolean }
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue"), o = R(!1), i = S(() => [
      { label: "At least 12 characters", ok: l.value.length >= 12 },
      { label: "One uppercase letter", ok: /[A-Z]/.test(l.value) },
      { label: "One number", ok: /\d/.test(l.value) },
      { label: "One special character", ok: /[^A-Za-z0-9]/.test(l.value) }
    ]), n = S(() => i.value.filter((u) => u.ok).length), r = S(() => ["bg-gray-200", "bg-danger-500", "bg-warning-500", "bg-warning-500", "bg-success-500"][n.value]);
    return (u, f) => (t(), a("div", qc, [
      c(ce, {
        modelValue: l.value,
        "onUpdate:modelValue": f[1] || (f[1] = (g) => l.value = g),
        type: o.value ? "text" : "password",
        icon: "key",
        placeholder: e.placeholder,
        invalid: e.invalid,
        "aria-label": "Password"
      }, {
        end: b(() => [
          s("button", {
            type: "button",
            "aria-label": o.value ? "Hide password" : "Show password",
            class: "text-ink-3 hover:text-ink",
            onClick: f[0] || (f[0] = (g) => o.value = !o.value)
          }, [
            c(_, {
              name: o.value ? "eye-off" : "eye"
            }, null, 8, ["name"])
          ], 8, Jc)
        ]),
        _: 1
      }, 8, ["modelValue", "type", "placeholder", "invalid"]),
      e.showRules ? (t(), a(k, { key: 0 }, [
        s("div", {
          class: "flex gap-1",
          role: "progressbar",
          "aria-valuenow": n.value,
          "aria-valuemin": "0",
          "aria-valuemax": "4",
          "aria-label": "Password strength"
        }, [
          (t(), a(k, null, C(4, (g) => s("span", {
            key: g,
            class: h(["h-1 flex-1 rounded-full", g <= n.value ? r.value : "bg-gray-200"])
          }, null, 2)), 64))
        ], 8, Qc),
        s("ul", Xc, [
          (t(!0), a(k, null, C(i.value, (g) => (t(), a("li", {
            key: g.label,
            class: h(["flex items-center gap-1.5 text-[13px]", g.ok ? "text-success-600" : "text-ink-3"])
          }, [
            c(_, {
              name: g.ok ? "circle-check" : "circle",
              size: 14
            }, null, 8, ["name"]),
            p(d(g.label), 1)
          ], 2))), 128))
        ])
      ], 64)) : m("", !0)
    ]));
  }
}), Yc = { class: "text-sm leading-[22px] text-ink" }, eu = {
  key: 0,
  class: "block text-[13px] leading-5 text-ink-3"
}, cb = /* @__PURE__ */ x({
  __name: "RadioGroup",
  props: /* @__PURE__ */ T({
    options: {},
    orientation: { default: "vertical" },
    card: { type: Boolean },
    ariaLabel: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue");
    return (o, i) => (t(), $(v(Ha), {
      modelValue: l.value,
      "onUpdate:modelValue": i[0] || (i[0] = (n) => l.value = n),
      "aria-label": e.ariaLabel,
      class: h(["flex gap-3", e.orientation === "vertical" ? "flex-col" : "flex-row flex-wrap"])
    }, {
      default: b(() => [
        (t(!0), a(k, null, C(e.options, (n) => (t(), a("label", {
          key: n.value,
          class: h(["flex items-start gap-2.5", [n.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer", e.card && "flex-1 rounded-md border bg-surface p-3.5", e.card && (l.value === n.value ? "border-brand-500 bg-brand-50" : "border-line")]])
        }, [
          c(v(Ka), {
            value: n.value,
            disabled: n.disabled,
            class: "mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface data-[state=checked]:border-brand-600"
          }, {
            default: b(() => [
              c(v(Ga), { class: "block size-2.5 rounded-full bg-brand-600" })
            ]),
            _: 1
          }, 8, ["value", "disabled"]),
          s("span", Yc, [
            p(d(n.label) + " ", 1),
            n.description ? (t(), a("span", eu, d(n.description), 1)) : m("", !0)
          ])
        ], 2))), 128))
      ]),
      _: 1
    }, 8, ["modelValue", "aria-label", "class"]));
  }
}), tu = { class: "flex flex-col gap-1.5" }, au = {
  key: 0,
  role: "alert",
  class: "text-[13px] text-danger-700"
}, nu = {
  key: 1,
  class: "text-[13px] text-ink-3"
}, ub = /* @__PURE__ */ x({
  __name: "RateInput",
  props: /* @__PURE__ */ T({
    floor: {},
    disabled: { type: Boolean },
    unit: {},
    ariaLabel: {}
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = e, o = L(e, "modelValue"), i = () => l.floor !== void 0 && o.value !== "" && Number(o.value) < l.floor;
    return (n, r) => (t(), a("div", tu, [
      c(ce, {
        modelValue: o.value,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => o.value = u),
        mono: "",
        prefix: "₹",
        suffix: e.unit,
        disabled: e.disabled,
        invalid: i(),
        "aria-label": e.ariaLabel || "Rate in rupees"
      }, null, 8, ["modelValue", "suffix", "disabled", "invalid", "aria-label"]),
      i() ? (t(), a("p", au, "Direct sender rate can't be below the GTM floor of ₹" + d(e.floor.toFixed(2)) + ". Raise it to publish.", 1)) : e.floor !== void 0 ? (t(), a("p", nu, "GTM floor ₹" + d(e.floor.toFixed(2)), 1)) : m("", !0)
    ]));
  }
}), lu = { class: "flex flex-col gap-2" }, su = { class: "flex justify-between text-sm" }, ou = { class: "text-ink-2" }, iu = { class: "font-mono font-medium text-ink" }, mb = /* @__PURE__ */ x({
  __name: "SliderField",
  props: /* @__PURE__ */ T({
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    label: {},
    format: {}
  }, {
    modelValue: { default: 50 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = e, o = L(e, "modelValue"), i = S({ get: () => [o.value], set: (r) => {
      o.value = r[0];
    } }), n = S(() => l.format ? l.format(o.value) : String(o.value));
    return (r, u) => (t(), a("div", lu, [
      s("div", su, [
        s("span", ou, d(e.label), 1),
        s("span", iu, d(n.value), 1)
      ]),
      c(v(Wa), {
        modelValue: i.value,
        "onUpdate:modelValue": u[0] || (u[0] = (f) => i.value = f),
        min: e.min,
        max: e.max,
        step: e.step,
        class: "relative flex h-5 w-full touch-none items-center select-none"
      }, {
        default: b(() => [
          c(v(Za), { class: "relative h-1.5 grow rounded-full bg-gray-200" }, {
            default: b(() => [
              c(v(qa), { class: "absolute h-full rounded-full bg-brand-600" })
            ]),
            _: 1
          }),
          c(v(Ja), {
            "aria-label": e.label,
            class: "block size-5 rounded-full border-2 border-brand-600 bg-white shadow-xs"
          }, null, 8, ["aria-label"])
        ]),
        _: 1
      }, 8, ["modelValue", "min", "max", "step"])
    ]));
  }
}), ru = { class: "flex min-h-11 flex-wrap items-center gap-1.5 rounded-md border border-line-strong/70 bg-surface px-2 py-1.5 focus-within:border-brand-500 focus-within:ring-3 focus-within:ring-brand-100" }, du = ["aria-label", "onClick"], cu = ["placeholder", "aria-label", "onKeydown"], fb = /* @__PURE__ */ x({
  __name: "TagsField",
  props: /* @__PURE__ */ T({
    placeholder: { default: "Type and press Enter" }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue"), o = R("");
    function i() {
      const r = o.value.trim();
      r && !l.value.includes(r) && (l.value = [...l.value, r]), o.value = "";
    }
    function n() {
      !o.value && l.value.length && (l.value = l.value.slice(0, -1));
    }
    return (r, u) => (t(), a("div", ru, [
      (t(!0), a(k, null, C(l.value, (f) => (t(), a("span", {
        key: f,
        class: "inline-flex items-center gap-1 rounded-full bg-brand-50 py-1 pr-1.5 pl-2.5 text-[13px] font-medium text-brand-600"
      }, [
        p(d(f) + " ", 1),
        s("button", {
          type: "button",
          "aria-label": `Remove ${f}`,
          class: "rounded-full hover:bg-brand-100",
          onClick: (g) => l.value = l.value.filter((y) => y !== f)
        }, [
          c(_, {
            name: "x",
            size: 13
          })
        ], 8, du)
      ]))), 128)),
      W(s("input", {
        "onUpdate:modelValue": u[0] || (u[0] = (f) => o.value = f),
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        class: "h-7 min-w-32 flex-1 bg-transparent px-1 text-sm outline-none placeholder:text-ink-4",
        onKeydown: [
          $e(J(i, ["prevent"]), ["enter"]),
          $e(n, ["backspace"])
        ]
      }, null, 40, cu), [
        [X, o.value]
      ])
    ]));
  }
}), uu = { class: "relative" }, mu = ["rows", "placeholder", "maxlength", "disabled", "aria-invalid", "aria-label"], fu = {
  key: 0,
  class: "absolute right-3 bottom-3 font-mono text-[11px] text-ink-2"
}, bb = /* @__PURE__ */ x({
  __name: "TextArea",
  props: /* @__PURE__ */ T({
    placeholder: {},
    rows: { default: 4 },
    maxLength: {},
    invalid: { type: Boolean },
    disabled: { type: Boolean },
    ariaLabel: {}
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue");
    return (o, i) => (t(), a("div", uu, [
      W(s("textarea", {
        "onUpdate:modelValue": i[0] || (i[0] = (n) => l.value = n),
        rows: e.rows,
        placeholder: e.placeholder,
        maxlength: e.maxLength,
        disabled: e.disabled,
        "aria-invalid": e.invalid || void 0,
        "aria-label": e.ariaLabel,
        class: h(["w-full resize-y rounded-md border bg-surface px-3 py-2.5 text-[13px] text-ink outline-none transition-shadow placeholder:text-ink-4 focus:ring-3 disabled:cursor-not-allowed disabled:bg-gray-100", e.invalid ? "border-danger-500 focus:ring-danger-100" : "border-line focus:border-brand-500 focus:ring-brand-100"])
      }, null, 10, mu), [
        [X, l.value]
      ]),
      e.maxLength ? (t(), a("span", fu, d(l.value.length) + "/" + d(e.maxLength), 1)) : m("", !0)
    ]));
  }
}), ee = /* @__PURE__ */ x({
  __name: "Toggle",
  props: /* @__PURE__ */ T({
    tone: { default: "consent" },
    size: { default: "md" },
    disabled: { type: Boolean },
    label: {},
    hideLabel: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue");
    return (o, i) => (t(), a("label", {
      class: h(["inline-flex items-center gap-2.5", e.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"])
    }, [
      s("span", {
        class: h(e.hideLabel ? "sr-only" : "text-sm text-ink")
      }, d(e.label), 3),
      c(v(Qa), {
        modelValue: l.value,
        "onUpdate:modelValue": i[0] || (i[0] = (n) => l.value = n),
        disabled: e.disabled,
        class: h(["relative inline-flex shrink-0 items-center rounded-full bg-[#eaedf0] transition-colors duration-200", [e.size === "sm" ? "h-5 w-9" : "h-6 w-11", e.tone === "consent" ? "data-[state=checked]:bg-success-500" : e.tone === "success" ? "data-[state=checked]:bg-success-600" : "data-[state=checked]:bg-brand-600"]])
      }, {
        default: b(() => [
          c(v(Xa), {
            class: h(["block rounded-full bg-white shadow-[0_1px_3px_rgb(11_26_51/0.25)] transition-transform duration-200", e.size === "sm" ? "size-4 translate-x-0.5 data-[state=checked]:translate-x-[18px]" : "size-5 translate-x-0.5 data-[state=checked]:translate-x-[22px]"])
          }, null, 8, ["class"])
        ]),
        _: 1
      }, 8, ["modelValue", "disabled", "class"])
    ], 2));
  }
}), bu = { class: "flex items-center gap-3 rounded-b-[20px] bg-gradient-to-b from-app-400 to-app-600 px-5 py-6 text-white" }, xu = {
  key: 1,
  class: "rounded-full bg-white/20 p-1"
}, gu = { class: "min-w-0 flex-1" }, hu = {
  key: 0,
  class: "truncate text-sm text-white/70"
}, xb = /* @__PURE__ */ x({
  __name: "AppHeader",
  props: {
    title: {},
    subtitle: {},
    back: { type: Boolean },
    search: { type: Boolean },
    brand: {}
  },
  emits: ["back", "search", "more"],
  setup(e, { emit: l }) {
    const o = l;
    return (i, n) => (t(), a("header", bu, [
      e.back ? (t(), $(O, {
        key: 0,
        icon: "arrow-left",
        label: "Back",
        variant: "on-brand",
        onClick: n[0] || (n[0] = (r) => o("back"))
      })) : m("", !0),
      e.brand ? (t(), a("span", xu, [
        c(de, {
          name: e.brand.name,
          color: e.brand.color,
          size: "md",
          class: "!rounded-full"
        }, null, 8, ["name", "color"])
      ])) : m("", !0),
      s("div", gu, [
        s("h1", {
          class: h(["truncate font-semibold tracking-tight", e.back ? "text-lg leading-6" : "text-2xl leading-8"])
        }, d(e.title), 3),
        e.subtitle ? (t(), a("p", hu, d(e.subtitle), 1)) : m("", !0)
      ]),
      e.search ? (t(), $(O, {
        key: 2,
        icon: "search",
        label: "Search",
        variant: "on-brand",
        size: "lg",
        class: "!rounded-lg",
        onClick: n[1] || (n[1] = (r) => o("search"))
      })) : m("", !0),
      e.back ? (t(), $(O, {
        key: 3,
        icon: "ellipsis",
        label: "More options",
        variant: "on-brand",
        onClick: n[2] || (n[2] = (r) => o("more"))
      })) : m("", !0)
    ]));
  }
}), vu = {
  class: "flex shrink-0 justify-around border-t border-line bg-surface px-3 py-2",
  "aria-label": "Main"
}, pu = ["aria-current", "onClick"], gb = /* @__PURE__ */ x({
  __name: "BottomNav",
  props: /* @__PURE__ */ T({
    items: { default: () => [
      { id: "home", label: "Home", icon: "home" },
      { id: "wallet", label: "My Wallet", icon: "wallet" },
      { id: "profile", label: "Profile", icon: "user" }
    ] }
  }, {
    modelValue: { default: "home" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue");
    return (o, i) => (t(), a("nav", vu, [
      (t(!0), a(k, null, C(e.items, (n) => (t(), a("button", {
        key: n.id,
        type: "button",
        "aria-current": l.value === n.id ? "page" : void 0,
        class: h(["flex min-h-11 min-w-[76px] flex-col items-center gap-0.5 rounded-[14px] px-3 py-1.5 text-xs transition-colors", l.value === n.id ? "bg-[#e9eefa] font-medium text-app-600" : "text-ink-2"]),
        onClick: (r) => l.value = n.id
      }, [
        c(_, {
          name: n.icon,
          size: 20
        }, null, 8, ["name"]),
        p(d(n.label), 1)
      ], 10, pu))), 128))
    ]));
  }
}), yu = ["aria-label"], ku = ["aria-selected", "aria-label", "onClick"], $u = /* @__PURE__ */ x({
  __name: "CarouselDots",
  props: /* @__PURE__ */ T({
    count: {},
    ariaLabel: {}
  }, {
    modelValue: { default: 0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue");
    return (o, i) => (t(), a("div", {
      class: "flex items-center justify-center gap-1.5",
      role: "tablist",
      "aria-label": e.ariaLabel || "Slides"
    }, [
      (t(!0), a(k, null, C(e.count, (n) => (t(), a("button", {
        key: n,
        type: "button",
        role: "tab",
        "aria-selected": l.value === n - 1,
        "aria-label": `Slide ${n}`,
        class: h(["h-1.5 rounded-full transition-all", l.value === n - 1 ? "w-5 bg-app-500" : "w-1.5 bg-gray-300"]),
        onClick: (r) => l.value = n - 1
      }, null, 10, ku))), 128))
    ], 8, yu));
  }
}), wu = { class: "grid grid-cols-2 divide-x divide-line rounded-[20px] border border-line bg-surface shadow-card" }, _u = { class: "flex items-center justify-between gap-2 p-4" }, zu = { class: "mt-0.5 text-2xl leading-8 font-semibold text-ink tnum" }, Cu = { class: "flex items-center justify-between gap-2 p-4" }, Su = { class: "mt-0.5 text-2xl leading-8 font-semibold text-ink tnum" }, hb = /* @__PURE__ */ x({
  __name: "ConsentSplit",
  props: {
    optedIn: {},
    optedOut: {}
  },
  setup(e) {
    return (l, o) => (t(), a("ul", wu, [
      s("li", _u, [
        s("div", null, [
          c(H, { as: "span" }, {
            default: b(() => [...o[0] || (o[0] = [
              p("Opted in", -1)
            ])]),
            _: 1
          }),
          s("p", zu, d(e.optedIn), 1)
        ]),
        c(E, {
          icon: "shield-check",
          tone: "success",
          size: "md",
          class: "!rounded-lg !bg-[#e7f8f2]"
        })
      ]),
      s("li", Cu, [
        s("div", null, [
          c(H, { as: "span" }, {
            default: b(() => [...o[1] || (o[1] = [
              p("Opted out", -1)
            ])]),
            _: 1
          }),
          s("p", Su, d(e.optedOut), 1)
        ]),
        c(E, {
          icon: "shield-off",
          tone: "warning",
          size: "md",
          class: "!rounded-lg"
        })
      ])
    ]));
  }
}), Vu = { class: "flex items-center gap-3 border-b border-line/70 px-5 py-3.5" }, Mu = { class: "min-w-0 flex-1" }, Bu = { class: "truncate text-base leading-5 font-semibold text-ink" }, Lu = { class: "truncate text-[13px] text-ink-2" }, vb = /* @__PURE__ */ x({
  __name: "GreetingBar",
  props: {
    name: {},
    tagline: { default: "Stop spam. Stay in control." },
    unread: { type: Boolean }
  },
  emits: ["language", "notifications"],
  setup(e, { emit: l }) {
    const o = l;
    return (i, n) => (t(), a("header", Vu, [
      c(Z, {
        tile: "",
        size: 24
      }),
      s("div", Mu, [
        s("p", Bu, "Hi, " + d(e.name), 1),
        s("p", Lu, d(e.tagline), 1)
      ]),
      c(O, {
        icon: "languages",
        label: "Change language",
        variant: "round",
        size: "lg",
        onClick: n[0] || (n[0] = (r) => o("language"))
      }),
      c(O, {
        icon: "bell",
        label: "Notifications",
        variant: "round",
        size: "lg",
        dot: e.unread,
        onClick: n[1] || (n[1] = (r) => o("notifications"))
      }, null, 8, ["dot"])
    ]));
  }
}), Tu = {
  type: "button",
  class: "flex min-h-[72px] w-full items-center gap-3 rounded-[20px] border border-line bg-surface p-4 text-left shadow-card transition-colors hover:bg-gray-50"
}, Du = {
  key: 1,
  class: "relative"
}, Au = {
  key: 0,
  class: "absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-app-500 ring-2 ring-white"
}, Pu = { class: "min-w-0 flex-1" }, ju = { class: "block text-[15px] leading-5 font-semibold text-ink" }, Ru = {
  key: 0,
  class: "block text-xs leading-5 text-ink-3"
}, Iu = {
  key: 1,
  class: "block text-[13px] leading-[18px] text-ink-2"
}, pb = /* @__PURE__ */ x({
  __name: "ListCard",
  props: {
    title: {},
    description: {},
    meta: {},
    icon: {},
    brand: {},
    unread: { type: Boolean }
  },
  setup(e) {
    return (l, o) => (t(), a("button", Tu, [
      e.icon ? (t(), $(E, {
        key: 0,
        icon: e.icon,
        tone: "neutral",
        size: "md",
        class: "!rounded-lg !bg-gray-100"
      }, null, 8, ["icon"])) : m("", !0),
      e.brand ? (t(), a("span", Du, [
        c(de, {
          name: e.brand.name,
          color: e.brand.color,
          shape: "circle"
        }, null, 8, ["name", "color"]),
        e.unread ? (t(), a("span", Au, [...o[0] || (o[0] = [
          s("span", { class: "sr-only" }, "New", -1)
        ])])) : m("", !0)
      ])) : m("", !0),
      s("span", Pu, [
        s("span", ju, d(e.title), 1),
        e.meta ? (t(), a("span", Ru, d(e.meta), 1)) : m("", !0),
        e.description ? (t(), a("span", Iu, d(e.description), 1)) : m("", !0)
      ]),
      c(_, {
        name: "chevron-right",
        class: "text-ink-3"
      })
    ]));
  }
}), yb = /* @__PURE__ */ x({
  __name: "PhoneFrame",
  props: {
    height: { default: "auto" }
  },
  setup(e) {
    return (l, o) => (t(), a("div", {
      class: "relative mx-auto flex w-[390px] max-w-full flex-col overflow-hidden rounded-[28px] border border-line bg-page-app shadow-pop",
      style: P({ height: e.height })
    }, [
      V(l.$slots, "default")
    ], 4));
  }
}), Eu = {
  "aria-roledescription": "carousel",
  "aria-label": "Highlights"
}, Ou = { class: "relative flex min-h-[170px] items-center overflow-hidden rounded-[20px] bg-[#1c69d8] p-5 text-white" }, Uu = { class: "relative z-10 max-w-[58%]" }, Nu = { class: "text-[21px] leading-[25px] font-semibold tracking-tight" }, Fu = { class: "mt-2 text-xs leading-[18px] text-white/95" }, Hu = {
  class: "absolute right-4 flex flex-col gap-2 rounded-[18px] border border-white/25 bg-white/15 p-3",
  "aria-hidden": "true",
  inert: ""
}, kb = /* @__PURE__ */ x({
  __name: "PromoBanner",
  props: {
    slides: {}
  },
  setup(e) {
    const l = R(0);
    return (o, i) => (t(), a("section", Eu, [
      s("div", Ou, [
        s("div", Uu, [
          s("h2", Nu, d(e.slides[l.value].title), 1),
          s("p", Fu, d(e.slides[l.value].body), 1)
        ]),
        V(o.$slots, "art", {}, () => [
          s("div", Hu, [
            c(ee, {
              "model-value": !0,
              label: "On",
              "hide-label": "",
              size: "sm",
              tone: "brand"
            }),
            c(ee, {
              "model-value": !0,
              label: "On",
              "hide-label": "",
              size: "sm",
              tone: "brand"
            }),
            c(ee, {
              "model-value": !1,
              label: "Off",
              "hide-label": "",
              size: "sm",
              tone: "brand"
            })
          ])
        ])
      ]),
      c($u, {
        modelValue: l.value,
        "onUpdate:modelValue": i[0] || (i[0] = (n) => l.value = n),
        count: e.slides.length,
        class: "mt-3"
      }, null, 8, ["modelValue", "count"])
    ]));
  }
}), Ku = { class: "py-4 first:pt-0 last:pb-0" }, Gu = { class: "flex items-center gap-3" }, Wu = { class: "min-w-0 flex-1 text-[17px] leading-[22px] font-semibold text-ink" }, Zu = { class: "flex flex-wrap gap-2" }, $b = /* @__PURE__ */ x({
  __name: "PurposeItem",
  props: /* @__PURE__ */ T({
    title: {},
    benefits: { default: () => [] },
    channelOptions: { default: () => ["SMS", "Calls"] }
  }, {
    enabled: { type: Boolean, default: !1 },
    enabledModifiers: {},
    channels: { default: () => ["SMS"] },
    channelsModifiers: {}
  }),
  emits: ["update:enabled", "update:channels"],
  setup(e) {
    const l = L(e, "enabled"), o = L(e, "channels");
    return (i, n) => (t(), a("section", Ku, [
      s("div", Gu, [
        s("h3", Wu, d(e.title), 1),
        c(_, {
          name: "shield-check",
          size: 18,
          class: "text-app-500"
        }),
        c(ee, {
          modelValue: l.value,
          "onUpdate:modelValue": n[0] || (n[0] = (r) => l.value = r),
          label: `Consent for ${e.title}`,
          "hide-label": ""
        }, null, 8, ["modelValue", "label"])
      ]),
      l.value ? (t(), a(k, { key: 0 }, [
        c(H, { class: "mt-3 mb-2" }, {
          default: b(() => [...n[2] || (n[2] = [
            p("Preferred channels", -1)
          ])]),
          _: 1
        }),
        c(Lc, {
          modelValue: o.value,
          "onUpdate:modelValue": n[1] || (n[1] = (r) => o.value = r),
          options: e.channelOptions
        }, null, 8, ["modelValue", "options"])
      ], 64)) : m("", !0),
      e.benefits.length ? (t(), a(k, { key: 1 }, [
        c(H, { class: "mt-3 mb-2" }, {
          default: b(() => [...n[3] || (n[3] = [
            p("Consent benefits", -1)
          ])]),
          _: 1
        }),
        s("div", Zu, [
          (t(!0), a(k, null, C(e.benefits, (r) => (t(), $(Yd, { key: r }, {
            default: b(() => [
              p(d(r), 1)
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ], 64)) : m("", !0)
    ]));
  }
}), qu = { "aria-label": "Breadcrumb" }, Ju = { class: "flex flex-wrap items-center gap-1.5 text-[13px]" }, Qu = ["href"], Xu = {
  key: 2,
  "aria-current": "page",
  class: "font-medium text-ink"
}, wb = /* @__PURE__ */ x({
  __name: "Breadcrumbs",
  props: {
    items: {}
  },
  setup(e) {
    return (l, o) => (t(), a("nav", qu, [
      s("ol", Ju, [
        (t(!0), a(k, null, C(e.items, (i, n) => (t(), a("li", {
          key: i.label,
          class: "flex items-center gap-1.5"
        }, [
          n ? (t(), $(_, {
            key: 0,
            name: "chevron-right",
            size: 13,
            class: "text-ink-4"
          })) : m("", !0),
          n < e.items.length - 1 ? (t(), a("a", {
            key: 1,
            href: i.href || "#",
            class: "text-ink-2 hover:text-brand-600 hover:underline"
          }, d(i.label), 9, Qu)) : (t(), a("span", Xu, d(i.label), 1))
        ]))), 128))
      ])
    ]));
  }
}), Yu = { class: "flex items-center gap-2.5 border-b border-line px-4" }, em = { class: "max-h-80 overflow-auto p-2" }, tm = { class: "eyebrow px-2 py-1.5" }, am = ["onClick"], nm = { class: "flex-1" }, lm = {
  key: 0,
  class: "px-2 py-8 text-center text-sm text-ink-3"
}, _b = /* @__PURE__ */ x({
  __name: "CommandPalette",
  props: /* @__PURE__ */ T({
    items: {}
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["select"], ["update:open"]),
  setup(e, { emit: l }) {
    const o = e, i = L(e, "open"), n = l, r = R(""), u = S(() => {
      const f = o.items.filter((g) => g.label.toLowerCase().includes(r.value.toLowerCase()));
      return [...new Set(f.map((g) => g.group))].map((g) => ({ group: g, items: f.filter((y) => y.group === g) }));
    });
    return (f, g) => (t(), $(v(le), {
      open: i.value,
      "onUpdate:open": g[1] || (g[1] = (y) => i.value = y)
    }, {
      default: b(() => [
        c(v(se), null, {
          default: b(() => [
            c(v(oe), { class: "fixed inset-0 z-50 bg-navy-900/40 animate-overlay" }),
            c(v(ie), {
              class: "fixed top-[15%] left-1/2 z-50 w-[92vw] max-w-xl -translate-x-1/2 overflow-hidden rounded-lg bg-surface shadow-pop",
              "aria-describedby": ""
            }, {
              default: b(() => [
                c(v(re), { class: "sr-only" }, {
                  default: b(() => [...g[2] || (g[2] = [
                    p("Universal search", -1)
                  ])]),
                  _: 1
                }),
                s("div", Yu, [
                  c(_, {
                    name: "search",
                    class: "text-ink-3"
                  }),
                  W(s("input", {
                    "onUpdate:modelValue": g[0] || (g[0] = (y) => r.value = y),
                    placeholder: "Search senders, GTMs, users, agreements",
                    "aria-label": "Search",
                    class: "h-12 w-full bg-transparent text-sm outline-none placeholder:text-ink-4"
                  }, null, 512), [
                    [X, r.value]
                  ]),
                  c(Q, null, {
                    default: b(() => [...g[3] || (g[3] = [
                      p("Esc", -1)
                    ])]),
                    _: 1
                  })
                ]),
                s("div", em, [
                  (t(!0), a(k, null, C(u.value, (y) => (t(), a("div", {
                    key: y.group,
                    class: "mb-1"
                  }, [
                    s("p", tm, d(y.group), 1),
                    (t(!0), a(k, null, C(y.items, (w) => (t(), a("button", {
                      key: w.label,
                      type: "button",
                      class: "flex w-full items-center gap-2.5 rounded-sm px-2 py-2 text-left text-sm text-gray-700 hover:bg-brand-50",
                      onClick: (z) => {
                        n("select", w), i.value = !1;
                      }
                    }, [
                      c(_, {
                        name: w.icon,
                        class: "text-ink-3"
                      }, null, 8, ["name"]),
                      s("span", nm, d(w.label), 1),
                      w.shortcut ? (t(), $(Q, { key: 0 }, {
                        default: b(() => [
                          p(d(w.shortcut), 1)
                        ]),
                        _: 2
                      }, 1024)) : m("", !0)
                    ], 8, am))), 128))
                  ]))), 128)),
                  u.value.length ? m("", !0) : (t(), a("p", lm, 'Nothing matches "' + d(r.value) + '". Try a sender name, PEID or user email.', 1))
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["open"]));
  }
}), sm = ["aria-label"], om = ["aria-pressed", "onClick"], im = {
  key: 0,
  class: "tnum"
}, rm = /* @__PURE__ */ x({
  __name: "FilterPills",
  props: /* @__PURE__ */ T({
    options: {},
    size: { default: "sm" },
    tone: { default: "admin" },
    ariaLabel: { default: "Filter" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue");
    return (o, i) => (t(), a("div", {
      class: "flex flex-wrap gap-2",
      role: "group",
      "aria-label": e.ariaLabel
    }, [
      (t(!0), a(k, null, C(e.options, (n) => (t(), a("button", {
        key: n.value,
        type: "button",
        "aria-pressed": l.value === n.value,
        class: h(["rounded-full border font-medium whitespace-nowrap transition-colors", [
          e.size === "sm" ? "h-8 px-3 text-[13px]" : "h-10 px-4 text-sm",
          l.value === n.value ? e.tone === "app" ? "border-app-600 bg-app-600 text-white" : e.tone === "dark" ? "border-navy-900 bg-navy-900 text-white" : "border-brand-600 bg-brand-600 text-white" : "border-line bg-surface text-gray-600 hover:bg-gray-50"
        ]]),
        onClick: (r) => l.value = n.value
      }, [
        p(d(n.label), 1),
        n.count !== void 0 ? (t(), a("span", im, d(e.tone === "dark" ? ` · ${n.count.toLocaleString("en-IN")}` : ` (${n.count})`), 1)) : m("", !0)
      ], 10, om))), 128))
    ], 8, sm));
  }
}), dm = { class: "flex flex-wrap items-start justify-between gap-4" }, cm = { class: "min-w-0" }, um = { class: "portal-type-page-title" }, mm = {
  key: 0,
  class: "portal-type-page-subtitle mt-1.5 max-w-3xl"
}, fm = {
  key: 0,
  class: "flex items-center gap-2"
}, zb = /* @__PURE__ */ x({
  __name: "PageHeader",
  props: {
    title: {},
    description: {}
  },
  setup(e) {
    return (l, o) => (t(), a("div", dm, [
      s("div", cm, [
        s("h1", um, d(e.title), 1),
        e.description ? (t(), a("p", mm, d(e.description), 1)) : m("", !0)
      ]),
      l.$slots.actions ? (t(), a("div", fm, [
        V(l.$slots, "actions")
      ])) : m("", !0)
    ]));
  }
}), bm = {
  class: "flex items-center justify-between gap-4",
  "aria-label": "Pagination"
}, xm = { class: "flex items-center gap-3" }, gm = { class: "w-20" }, hm = {
  class: "font-mono text-xs text-ink-2 tnum",
  "aria-live": "polite"
}, vm = { class: "flex items-center gap-1" }, pm = {
  key: 0,
  class: "px-1.5 text-[13px] text-ink-3"
}, ym = ["aria-current", "onClick"], Cb = /* @__PURE__ */ x({
  __name: "Pagination",
  props: /* @__PURE__ */ T({
    total: {},
    compact: { type: Boolean },
    pageSizes: {}
  }, {
    modelValue: { default: 1 },
    modelModifiers: {},
    pageSize: { default: 10 },
    pageSizeModifiers: {}
  }),
  emits: ["update:modelValue", "update:pageSize"],
  setup(e) {
    const l = e, o = L(e, "modelValue"), i = L(e, "pageSize"), n = S(() => Math.max(Math.ceil(l.total / i.value), 1)), r = S(() => l.total ? (o.value - 1) * i.value + 1 : 0), u = S(() => Math.min(o.value * i.value, l.total)), f = S(() => {
      const g = n.value;
      if (g <= 7) return Array.from({ length: g }, (w, z) => z + 1);
      const y = o.value;
      return y <= 3 ? [1, 2, 3, 4, "…", g] : y >= g - 2 ? [1, "…", g - 3, g - 2, g - 1, g] : [1, "…", y - 1, y, y + 1, "…", g];
    });
    return (g, y) => (t(), a("nav", bm, [
      s("div", xm, [
        e.pageSizes ? (t(), a(k, { key: 0 }, [
          y[3] || (y[3] = s("span", { class: "text-xs text-ink-2" }, "Rows per page", -1)),
          s("div", gm, [
            c(je, {
              "model-value": String(i.value),
              size: "sm",
              "aria-label": "Rows per page",
              options: e.pageSizes.map((w) => ({ label: String(w), value: String(w) })),
              "onUpdate:modelValue": y[0] || (y[0] = (w) => {
                i.value = Number(w), o.value = 1;
              })
            }, null, 8, ["model-value", "options"])
          ])
        ], 64)) : m("", !0),
        s("span", hm, d(r.value) + "-" + d(u.value) + " of " + d(e.total.toLocaleString("en-IN")), 1)
      ]),
      s("div", vm, [
        c(O, {
          icon: "chevron-left",
          label: "Previous page",
          variant: "outline",
          size: "sm",
          disabled: o.value <= 1,
          onClick: y[1] || (y[1] = (w) => o.value--)
        }, null, 8, ["disabled"]),
        e.compact ? m("", !0) : (t(!0), a(k, { key: 0 }, C(f.value, (w, z) => (t(), a(k, { key: z }, [
          w === "…" ? (t(), a("span", pm, "…")) : (t(), a("button", {
            key: 1,
            type: "button",
            "aria-current": w === o.value ? "page" : void 0,
            class: h(["size-7 rounded-sm text-[13px] tnum", w === o.value ? "bg-navy-900 font-medium text-white" : "text-gray-700 hover:bg-gray-100"]),
            onClick: (D) => o.value = w
          }, d(w), 11, ym))
        ], 64))), 128)),
        c(O, {
          icon: "chevron-right",
          label: "Next page",
          variant: "outline",
          size: "sm",
          disabled: o.value >= n.value,
          onClick: y[2] || (y[2] = (w) => o.value++)
        }, null, 8, ["disabled"])
      ])
    ]));
  }
}), km = { class: "flex flex-wrap items-center gap-3" }, $m = {
  key: 0,
  class: "flex items-center gap-2"
}, Sb = /* @__PURE__ */ x({
  __name: "PeriodFilter",
  props: /* @__PURE__ */ T({
    presets: { default: () => [
      { label: "7D", value: "7d" },
      { label: "30D", value: "30d" },
      { label: "90D", value: "90d" },
      { label: "Custom", value: "custom" }
    ] }
  }, {
    modelValue: { default: "30d" },
    modelModifiers: {},
    from: { default: "" },
    fromModifiers: {},
    to: { default: "" },
    toModifiers: {}
  }),
  emits: ["update:modelValue", "update:from", "update:to"],
  setup(e) {
    const l = e, o = L(e, "modelValue"), i = L(e, "from"), n = L(e, "to"), r = S(() => o.value === "custom" && l.presets.some((u) => u.value === "custom"));
    return (u, f) => (t(), a("div", km, [
      c(rm, {
        modelValue: o.value,
        "onUpdate:modelValue": f[0] || (f[0] = (g) => o.value = g),
        options: e.presets,
        "aria-label": "Period"
      }, null, 8, ["modelValue", "options"]),
      r.value ? (t(), a("div", $m, [
        c(we, {
          modelValue: i.value,
          "onUpdate:modelValue": f[1] || (f[1] = (g) => i.value = g),
          "aria-label": "From date"
        }, null, 8, ["modelValue"]),
        f[3] || (f[3] = s("span", { class: "text-xs text-ink-3" }, "to", -1)),
        c(we, {
          modelValue: n.value,
          "onUpdate:modelValue": f[2] || (f[2] = (g) => n.value = g),
          "aria-label": "To date",
          min: i.value
        }, null, 8, ["modelValue", "min"])
      ])) : m("", !0)
    ]));
  }
}), wm = { class: "relative overflow-hidden rounded-lg border border-line bg-surface shadow-card" }, _m = { class: "grid gap-4 p-5 sm:grid-cols-2 xl:grid-cols-4" }, zm = ["aria-current"], Cm = { class: "min-w-0 flex-1" }, Sm = {
  key: 0,
  href: "#",
  class: "text-[13px] font-medium text-brand-600 hover:underline"
}, Vb = /* @__PURE__ */ x({
  __name: "PhaseTracker",
  props: {
    phases: {},
    progress: {}
  },
  setup(e) {
    return (l, o) => (t(), a("div", wm, [
      s("div", {
        class: "absolute top-0 left-0 h-[3px] rounded-r-full bg-gradient-to-r from-brand-600 to-brand-400",
        style: P({ width: `${e.progress ?? 0}%` }),
        "aria-hidden": "true"
      }, null, 4),
      s("ol", _m, [
        (t(!0), a(k, null, C(e.phases, (i, n) => (t(), a("li", {
          key: i.title,
          class: "flex items-center gap-3",
          "aria-current": i.state === "active" ? "step" : void 0
        }, [
          s("span", {
            class: h(["flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-medium", i.state === "done" ? "bg-success-600 text-white" : i.state === "active" ? "bg-brand-600 text-white" : "bg-gray-100 text-ink-2"])
          }, [
            i.state === "done" ? (t(), $(_, {
              key: 0,
              name: "check",
              size: 18,
              "stroke-width": 2.5
            })) : (t(), a(k, { key: 1 }, [
              p(d(n + 1), 1)
            ], 64))
          ], 2),
          s("div", Cm, [
            s("p", {
              class: h(["text-[15px] font-medium", i.state === "done" ? "text-ink" : "text-gray-700"])
            }, d(i.title), 3),
            i.linked ? (t(), a("a", Sm, d(i.detail), 1)) : (t(), a("p", {
              key: 1,
              class: h(["font-mono text-xs", i.state === "active" ? "font-medium text-brand-600" : "text-ink-3"])
            }, d(i.detail), 3))
          ]),
          n < e.phases.length - 1 ? (t(), $(_, {
            key: 0,
            name: "arrow-right",
            class: "hidden text-ink-4 xl:block"
          })) : m("", !0)
        ], 8, zm))), 128))
      ])
    ]));
  }
}), Vm = {
  key: 0,
  class: "truncate px-2.5 py-2 text-xs text-ink-2"
}, Mb = /* @__PURE__ */ x({
  __name: "ProfileMenu",
  props: {
    name: {},
    role: {},
    email: {},
    items: { default: () => [
      { label: "My profile", icon: "user" },
      { label: "Settings", icon: "settings" },
      { label: "Help and docs", icon: "circle-help" }
    ] }
  },
  emits: ["select", "signOut"],
  setup(e, { emit: l }) {
    const o = l;
    return (i, n) => (t(), $(v(fe), null, {
      default: b(() => [
        c(v(be), {
          class: "w-full rounded-md p-1.5 text-left hover:bg-gray-100",
          "aria-label": `Account menu for ${e.name}`
        }, {
          default: b(() => [
            c(Ae, {
              name: e.name,
              role: e.role
            }, null, 8, ["name", "role"])
          ]),
          _: 1
        }, 8, ["aria-label"]),
        c(v(xe), null, {
          default: b(() => [
            c(v(ge), {
              side: "top",
              align: "start",
              "side-offset": 6,
              class: "z-50 w-60 rounded-md border border-line bg-surface p-1 shadow-pop"
            }, {
              default: b(() => [
                e.email ? (t(), a("div", Vm, d(e.email), 1)) : m("", !0),
                (t(!0), a(k, null, C(e.items, (r) => (t(), $(v(te), {
                  key: r.label,
                  class: "flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-[13px] text-gray-700 outline-none data-[highlighted]:bg-brand-50",
                  onSelect: (u) => o("select", r.label)
                }, {
                  default: b(() => [
                    c(_, {
                      name: r.icon
                    }, null, 8, ["name"]),
                    p(d(r.label), 1)
                  ]),
                  _: 2
                }, 1032, ["onSelect"]))), 128)),
                c(v(Ya), { class: "my-1 h-px bg-line" }),
                c(v(te), {
                  class: "flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-[13px] text-danger-600 outline-none data-[highlighted]:bg-danger-50",
                  onSelect: n[0] || (n[0] = (r) => o("signOut"))
                }, {
                  default: b(() => [
                    c(_, { name: "logout" }),
                    n[1] || (n[1] = p("Sign out ", -1))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Mm = ["aria-label"], Bm = ["aria-pressed", "onClick"], Bb = /* @__PURE__ */ x({
  __name: "SegmentedControl",
  props: /* @__PURE__ */ T({
    options: {},
    ariaLabel: { default: "View" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue");
    return (o, i) => (t(), a("div", {
      class: "inline-flex rounded-md bg-gray-200 p-0.5",
      role: "group",
      "aria-label": e.ariaLabel
    }, [
      (t(!0), a(k, null, C(e.options, (n) => (t(), a("button", {
        key: n.value,
        type: "button",
        "aria-pressed": l.value === n.value,
        class: h(["inline-flex h-7 items-center gap-1.5 rounded-sm px-3 text-xs font-medium transition-colors", l.value === n.value ? "bg-surface text-ink shadow-xs" : "text-ink-2 hover:text-ink"]),
        onClick: (r) => l.value = n.value
      }, [
        n.icon ? (t(), $(_, {
          key: 0,
          name: n.icon,
          size: 14
        }, null, 8, ["name"])) : m("", !0),
        p(d(n.label), 1)
      ], 10, Bm))), 128))
    ], 8, Mm));
  }
}), Lm = {
  class: "flex w-full items-center gap-3",
  "aria-label": "Progress"
}, Tm = ["aria-current"], Dm = {
  key: 0,
  class: "sr-only"
}, Am = {
  key: 0,
  class: "h-px min-w-4 flex-1 bg-line-strong",
  "aria-hidden": "true"
}, Lb = /* @__PURE__ */ x({
  __name: "Stepper",
  props: {
    steps: {},
    current: {},
    errorStep: {}
  },
  setup(e) {
    return (l, o) => (t(), a("ol", Lm, [
      (t(!0), a(k, null, C(e.steps, (i, n) => (t(), a("li", {
        key: i,
        class: h(["flex items-center gap-3", n < e.steps.length - 1 && "min-w-0 flex-1"]),
        "aria-current": n === e.current ? "step" : void 0
      }, [
        s("span", {
          class: h(["flex size-8 shrink-0 items-center justify-center rounded-full text-[13px] font-medium", n === e.errorStep ? "bg-danger-600 text-white" : n < e.current ? "bg-success-600 text-white" : n === e.current ? "bg-brand-600 text-white" : "border border-line-strong bg-surface text-ink-2"])
        }, [
          n === e.errorStep ? (t(), $(_, {
            key: 0,
            name: "x",
            size: 14,
            "stroke-width": 2.5
          })) : n < e.current ? (t(), $(_, {
            key: 1,
            name: "check",
            size: 14,
            "stroke-width": 2.5
          })) : (t(), a(k, { key: 2 }, [
            p(d(n + 1), 1)
          ], 64))
        ], 2),
        s("span", {
          class: h(["text-[13px] whitespace-nowrap", n === e.current ? "font-medium text-ink" : "text-ink-2"])
        }, [
          p(d(i), 1),
          n < e.current ? (t(), a("span", Dm, " (complete)")) : m("", !0)
        ], 2),
        n < e.steps.length - 1 ? (t(), a("span", Am)) : m("", !0)
      ], 10, Tm))), 128))
    ]));
  }
}), Pm = {
  key: 1,
  class: "tnum"
}, Tb = /* @__PURE__ */ x({
  __name: "Tabs",
  props: /* @__PURE__ */ T({
    items: {},
    variant: { default: "underline" },
    ariaLabel: { default: "Tabs" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = L(e, "modelValue");
    return (o, i) => (t(), $(v(en), {
      modelValue: l.value,
      "onUpdate:modelValue": i[0] || (i[0] = (n) => l.value = n)
    }, {
      default: b(() => [
        c(v(tn), {
          "aria-label": e.ariaLabel,
          class: h(["flex flex-wrap", e.variant === "underline" ? "gap-1 border-b border-line" : "gap-2"])
        }, {
          default: b(() => [
            (t(!0), a(k, null, C(e.items, (n) => (t(), $(v(an), {
              key: n.id,
              value: n.id,
              disabled: n.locked,
              class: h(["inline-flex items-center gap-2 text-sm whitespace-nowrap transition-colors disabled:cursor-not-allowed disabled:text-ink-4", e.variant === "underline" ? "-mb-px border-b-2 border-transparent px-3.5 py-3 text-ink-2 hover:text-ink data-[state=active]:border-navy-900 data-[state=active]:font-semibold data-[state=active]:text-ink" : "h-8 rounded-full border border-line bg-surface px-3 text-[13px] font-medium text-gray-600 hover:bg-gray-50 data-[state=active]:border-brand-600 data-[state=active]:bg-brand-600 data-[state=active]:text-white"])
            }, {
              default: b(() => [
                n.icon ? (t(), $(_, {
                  key: 0,
                  name: n.icon
                }, null, 8, ["name"])) : m("", !0),
                p(" " + d(n.label) + " ", 1),
                n.count !== void 0 ? (t(), a("span", Pm, "(" + d(n.count) + ")", 1)) : m("", !0),
                n.locked ? (t(), $(_, {
                  key: 2,
                  name: "lock",
                  size: 13
                })) : m("", !0)
              ]),
              _: 2
            }, 1032, ["value", "disabled", "class"]))), 128))
          ]),
          _: 1
        }, 8, ["aria-label", "class"]),
        (t(!0), a(k, null, C(e.items, (n) => (t(), $(v(nn), {
          key: n.id,
          value: n.id,
          class: "pt-5 outline-none"
        }, {
          default: b(() => [
            V(o.$slots, n.id)
          ]),
          _: 2
        }, 1032, ["value"]))), 128))
      ]),
      _: 3
    }, 8, ["modelValue"]));
  }
}), jm = { class: "mt-4" }, Db = /* @__PURE__ */ x({
  __name: "BottomSheet",
  props: /* @__PURE__ */ T({
    title: {},
    description: {}
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const l = L(e, "open");
    return (o, i) => (t(), $(v(le), {
      open: l.value,
      "onUpdate:open": i[0] || (i[0] = (n) => l.value = n)
    }, {
      default: b(() => [
        o.$slots.trigger ? (t(), $(v(he), {
          key: 0,
          "as-child": ""
        }, {
          default: b(() => [
            V(o.$slots, "trigger")
          ]),
          _: 3
        })) : m("", !0),
        c(v(se), null, {
          default: b(() => [
            c(v(oe), { class: "fixed inset-0 z-50 bg-navy-900/45 animate-overlay" }),
            c(v(ie), {
              class: "fixed right-0 bottom-0 left-0 z-50 mx-auto max-h-[85vh] w-full max-w-[420px] overflow-auto rounded-t-2xl bg-surface px-5 pt-2 pb-6 shadow-pop animate-sheet",
              "aria-describedby": e.description ? void 0 : ""
            }, {
              default: b(() => [
                i[1] || (i[1] = s("span", {
                  class: "mx-auto mb-4 block h-1 w-10 rounded-full bg-gray-300",
                  "aria-hidden": "true"
                }, null, -1)),
                c(v(re), { class: "text-lg font-semibold text-ink" }, {
                  default: b(() => [
                    p(d(e.title), 1)
                  ]),
                  _: 1
                }),
                e.description ? (t(), $(v(ve), {
                  key: 0,
                  class: "mt-1 text-sm text-ink-2"
                }, {
                  default: b(() => [
                    p(d(e.description), 1)
                  ]),
                  _: 1
                })) : m("", !0),
                s("div", jm, [
                  V(o.$slots, "default")
                ])
              ]),
              _: 3
            }, 8, ["aria-describedby"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Rm = { class: "mt-6 flex justify-end gap-2" }, Ab = /* @__PURE__ */ x({
  __name: "ConfirmDialog",
  props: /* @__PURE__ */ T({
    title: {},
    description: {},
    confirmLabel: { default: "Confirm" },
    cancelLabel: { default: "Cancel" },
    tone: { default: "primary" },
    icon: {}
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["confirm"], ["update:open"]),
  setup(e, { emit: l }) {
    const o = L(e, "open"), i = l;
    return (n, r) => (t(), $(v(ln), {
      open: o.value,
      "onUpdate:open": r[1] || (r[1] = (u) => o.value = u)
    }, {
      default: b(() => [
        n.$slots.trigger ? (t(), $(v(sn), {
          key: 0,
          "as-child": ""
        }, {
          default: b(() => [
            V(n.$slots, "trigger")
          ]),
          _: 3
        })) : m("", !0),
        c(v(on), null, {
          default: b(() => [
            c(v(rn), { class: "fixed inset-0 z-50 bg-navy-900/45 animate-overlay" }),
            c(v(dn), { class: "fixed top-1/2 left-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-surface p-6 shadow-pop animate-modal" }, {
              default: b(() => [
                e.icon ? (t(), $(E, {
                  key: 0,
                  icon: e.icon,
                  tone: e.tone === "danger" ? "danger" : "brand",
                  class: "mb-4"
                }, null, 8, ["icon", "tone"])) : m("", !0),
                c(v(cn), { class: "text-lg font-semibold tracking-tight text-ink" }, {
                  default: b(() => [
                    p(d(e.title), 1)
                  ]),
                  _: 1
                }),
                c(v(un), { class: "mt-1.5 text-sm leading-[22px] text-ink-2" }, {
                  default: b(() => [
                    p(d(e.description), 1)
                  ]),
                  _: 1
                }),
                V(n.$slots, "default"),
                s("div", Rm, [
                  c(v(mn), { "as-child": "" }, {
                    default: b(() => [
                      c(I, { variant: "secondary" }, {
                        default: b(() => [
                          p(d(e.cancelLabel), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  c(v(fn), { "as-child": "" }, {
                    default: b(() => [
                      c(I, {
                        variant: e.tone,
                        onClick: r[0] || (r[0] = (u) => i("confirm"))
                      }, {
                        default: b(() => [
                          p(d(e.confirmLabel), 1)
                        ]),
                        _: 1
                      }, 8, ["variant"])
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Im = { class: "flex items-start justify-between gap-4 border-b border-line px-5 py-4" }, Em = { class: "flex-1 overflow-auto" }, Om = {
  key: 0,
  class: "flex justify-end gap-2 border-t border-line px-5 py-3"
}, Pb = /* @__PURE__ */ x({
  __name: "Drawer",
  props: /* @__PURE__ */ T({
    title: {},
    description: {},
    width: { default: 480 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const l = L(e, "open");
    return (o, i) => (t(), $(v(le), {
      open: l.value,
      "onUpdate:open": i[0] || (i[0] = (n) => l.value = n)
    }, {
      default: b(() => [
        o.$slots.trigger ? (t(), $(v(he), {
          key: 0,
          "as-child": ""
        }, {
          default: b(() => [
            V(o.$slots, "trigger")
          ]),
          _: 3
        })) : m("", !0),
        c(v(se), null, {
          default: b(() => [
            c(v(oe), { class: "fixed inset-0 z-50 bg-navy-900/35 animate-overlay" }),
            c(v(ie), {
              class: "fixed inset-y-0 right-0 z-50 flex max-w-full flex-col bg-surface shadow-pop animate-drawer",
              style: P({ width: `${e.width}px` }),
              "aria-describedby": e.description ? void 0 : ""
            }, {
              default: b(() => [
                s("header", Im, [
                  s("div", null, [
                    c(v(re), { class: "text-base font-semibold text-ink" }, {
                      default: b(() => [
                        p(d(e.title), 1)
                      ]),
                      _: 1
                    }),
                    e.description ? (t(), $(v(ve), {
                      key: 0,
                      class: "mt-0.5 text-[13px] text-ink-2"
                    }, {
                      default: b(() => [
                        p(d(e.description), 1)
                      ]),
                      _: 1
                    })) : m("", !0)
                  ]),
                  c(v(Le), {
                    "aria-label": "Close",
                    class: "text-ink-3 hover:text-ink"
                  }, {
                    default: b(() => [
                      c(_, {
                        name: "x",
                        size: 18
                      })
                    ]),
                    _: 1
                  })
                ]),
                s("div", Em, [
                  V(o.$slots, "default")
                ]),
                o.$slots.footer ? (t(), a("footer", Om, [
                  V(o.$slots, "footer")
                ])) : m("", !0)
              ]),
              _: 3
            }, 8, ["style", "aria-describedby"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Um = { class: "flex items-start justify-between gap-4" }, Nm = { class: "mt-4 text-sm text-gray-700" }, Fm = {
  key: 1,
  class: "mt-6 flex justify-end gap-2"
}, jb = /* @__PURE__ */ x({
  __name: "Modal",
  props: /* @__PURE__ */ T({
    title: {},
    description: {},
    size: { default: "md" }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const l = L(e, "open"), o = { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-3xl" };
    return (i, n) => (t(), $(v(le), {
      open: l.value,
      "onUpdate:open": n[0] || (n[0] = (r) => l.value = r)
    }, {
      default: b(() => [
        i.$slots.trigger ? (t(), $(v(he), {
          key: 0,
          "as-child": ""
        }, {
          default: b(() => [
            V(i.$slots, "trigger")
          ]),
          _: 3
        })) : m("", !0),
        c(v(se), null, {
          default: b(() => [
            c(v(oe), { class: "fixed inset-0 z-50 bg-navy-900/45 animate-overlay" }),
            c(v(ie), {
              class: h(["fixed top-1/2 left-1/2 z-50 max-h-[85vh] w-[92vw] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-xl bg-surface p-6 shadow-pop animate-modal", o[e.size]]),
              "aria-describedby": e.description ? void 0 : ""
            }, {
              default: b(() => [
                s("div", Um, [
                  c(v(re), { class: "text-lg font-semibold tracking-tight text-ink" }, {
                    default: b(() => [
                      p(d(e.title), 1)
                    ]),
                    _: 1
                  }),
                  c(v(Le), {
                    "aria-label": "Close",
                    class: "text-ink-3 hover:text-ink"
                  }, {
                    default: b(() => [
                      c(_, {
                        name: "x",
                        size: 18
                      })
                    ]),
                    _: 1
                  })
                ]),
                e.description ? (t(), $(v(ve), {
                  key: 0,
                  class: "mt-1.5 text-sm leading-[22px] text-ink-2"
                }, {
                  default: b(() => [
                    p(d(e.description), 1)
                  ]),
                  _: 1
                })) : m("", !0),
                s("div", Nm, [
                  V(i.$slots, "default")
                ]),
                i.$slots.footer ? (t(), a("div", Fm, [
                  V(i.$slots, "footer")
                ])) : m("", !0)
              ]),
              _: 3
            }, 8, ["class", "aria-describedby"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Rb = /* @__PURE__ */ x({
  __name: "PopoverCard",
  props: {
    side: { default: "bottom" },
    width: { default: 300 }
  },
  setup(e) {
    return (l, o) => (t(), $(v(Se), null, {
      default: b(() => [
        c(v(Ve), { "as-child": "" }, {
          default: b(() => [
            V(l.$slots, "trigger")
          ]),
          _: 3
        }),
        c(v(Me), null, {
          default: b(() => [
            c(v(Be), {
              side: e.side,
              "side-offset": 8,
              class: "z-50 rounded-md border border-line bg-surface p-4 text-sm text-gray-700 shadow-pop",
              style: P({ width: `${e.width}px` })
            }, {
              default: b(() => [
                V(l.$slots, "default"),
                c(v(bn), { class: "fill-surface" })
              ]),
              _: 3
            }, 8, ["side", "style"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
});
export {
  Rf as AccordionList,
  If as ActivityFeed,
  Jm as AiRecommendation,
  Qm as AiSummary,
  qf as Alert,
  xb as AppHeader,
  Xm as AppShell,
  $f as AreaChart,
  Ym as AuthCard,
  De as Avatar,
  Ef as AvatarGroup,
  F as Badge,
  Gl as BigStat,
  gb as BottomNav,
  Db as BottomSheet,
  de as BrandMark,
  wb as Breadcrumbs,
  I as Button,
  Of as Card,
  $u as CarouselDots,
  Lc as ChannelChoice,
  bd as ChannelLabel,
  wf as ChartLegend,
  G as Checkbox,
  _b as CommandPalette,
  Uf as CompactCount,
  Ab as ConfirmDialog,
  hb as ConsentSplit,
  xd as CornerTag,
  Xs as CountdownPill,
  ef as CsvFormatCard,
  Lf as DataTable,
  we as DateField,
  tf as DecisionBar,
  lb as DeclarationCheck,
  Zl as DeltaPill,
  Nf as Divider,
  Tf as DocumentViewer,
  Ls as DonutChart,
  Pb as Drawer,
  af as EvidenceCard,
  H as Eyebrow,
  Jf as FeedbackCard,
  sb as FileDropzone,
  Df as FilterBar,
  rm as FilterPills,
  li as FormField,
  _f as FunnelChart,
  zf as GaugeChart,
  nf as GoLiveBanner,
  vb as GreetingBar,
  Af as HashBadge,
  lf as HeroStat,
  ye as Hint,
  _ as Icon,
  O as IconButton,
  E as IconTile,
  Pf as JsonDiff,
  Q as Kbd,
  Ff as KeyValueList,
  sf as KpiCard,
  pe as LinkArrow,
  pb as ListCard,
  of as LiveChecks,
  Qf as LiveIndicator,
  rf as LobFileGroup,
  Ws as LockedPill,
  Z as LogoMark,
  Hf as MaskedValue,
  Zm as MenuButton,
  Kf as MetaChip,
  df as MetricStrip,
  Cf as MiniBars,
  jb as Modal,
  ob as MultiSelect,
  cf as NextSteps,
  Xf as NotificationItem,
  ib as NumberInput,
  uf as OnboardingPath,
  al as OrgSwitcher,
  rb as OtpInput,
  mf as OutcomeSummary,
  zb as PageHeader,
  Yf as PageLoader,
  Cb as Pagination,
  Dr as PanelState,
  db as PasswordInput,
  Sb as PeriodFilter,
  Vb as PhaseTracker,
  yb as PhoneFrame,
  Rb as PopoverCard,
  ff as ProcessStatus,
  bf as ProcessingPanel,
  Mb as ProfileMenu,
  N as ProgressBar,
  kb as PromoBanner,
  $b as PurposeItem,
  cb as RadioGroup,
  Sf as RankedBars,
  ub as RateInput,
  jf as RateMatrix,
  xf as ResultCard,
  qm as RowActions,
  Vf as SankeyFlow,
  gf as ScanPreview,
  Jr as SearchInput,
  Bb as SegmentedControl,
  je as SelectField,
  hf as SetupCard,
  Wn as SidebarNav,
  vf as SignatureBlock,
  Vr as Skeleton,
  eb as SlaTimer,
  mb as SliderField,
  Xl as Sparkline,
  ke as Spinner,
  Mf as StackedBars,
  Bf as StateTileMap,
  Gf as StatusChip,
  Lb as Stepper,
  tb as StickyActionBar,
  pf as SummaryStat,
  Tb as Tabs,
  Yd as Tag,
  fb as TagsField,
  bb as TextArea,
  ce as TextInput,
  nb as ToastStack,
  ee as Toggle,
  ol as Topbar,
  Wf as TreeList,
  Zf as TruncatedText,
  yf as UploadChecklist,
  Ae as UserChip,
  kf as WelcomeHero,
  Wm as iconNames,
  Te as icons,
  qd as statusMap,
  ab as useToast
};
