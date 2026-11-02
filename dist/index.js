import { defineComponent as b, computed as L, openBlock as A, createBlock as k, resolveDynamicComponent as Xe, createElementBlock as t, normalizeClass as g, createElementVNode as l, createCommentVNode as c, renderSlot as B, createVNode as i, unref as x, withCtx as v, createTextVNode as h, toDisplayString as d, Fragment as y, renderList as z, normalizeStyle as T, ref as N, useModel as O, mergeModels as V, useId as Pe, mergeProps as ze, withDirectives as W, vModelDynamic as Ne, withModifiers as U, watch as je, onMounted as Se, onBeforeUnmount as Ie, reactive as Fe, Teleport as Je, vModelText as $, withKeys as ke } from "vue";
import { Zap as Qe, X as qe, Wallet as Me, Users as Ee, UserPlus as We, User as Ge, Upload as Ke, TriangleAlert as Ue, TrendingUp as Ye, Trash2 as $e, Sparkles as _e, SlidersHorizontal as eA, ShieldOff as AA, ShieldCheck as tA, ShieldAlert as nA, Shield as aA, Settings as lA, Send as sA, Search as oA, RefreshCw as rA, RadioTower as dA, Radio as iA, Plus as uA, Plug as cA, Phone as fA, Paperclip as vA, Mic as bA, MessageSquareDot as mA, MessageSquare as gA, Menu as xA, Map as hA, Mail as pA, LogOut as yA, Lock as kA, ListChecks as wA, Languages as XA, Key as PA, Info as zA, House as LA, Hash as BA, Globe as HA, Gavel as CA, Funnel as OA, Flag as VA, Filter as DA, FileText as RA, FilePlus as TA, FileCheck as ZA, EyeOff as NA, Eye as jA, EllipsisVertical as SA, Download as IA, DollarSign as FA, Database as JA, CreditCard as QA, Copy as qA, Clock as MA, CircleX as EA, CircleHelp as WA, CircleDollarSign as GA, CircleCheck as KA, CircleAlert as UA, Circle as YA, ChevronsLeft as $A, ChevronUp as _A, ChevronRight as et, ChevronLeft as At, ChevronDown as tt, Check as nt, ChartPie as at, ChartLine as lt, ChartColumn as st, Calendar as ot, Building2 as rt, BookOpen as dt, BellRing as it, Bell as ut, Ban as ct, ArrowRight as ft, ArrowLeftRight as vt, ArrowLeft as bt, Activity as mt } from "lucide-vue-next";
import { DropdownMenuRoot as fe, DropdownMenuTrigger as ve, DropdownMenuPortal as be, DropdownMenuContent as me, DropdownMenuItem as Ae, TooltipProvider as gt, TooltipRoot as xt, TooltipTrigger as ht, TooltipPortal as pt, TooltipContent as yt, TooltipArrow as kt, SelectRoot as wt, SelectTrigger as Xt, SelectValue as Pt, SelectIcon as zt, SelectPortal as Lt, SelectContent as Bt, SelectViewport as Ht, SelectItem as Ct, SelectItemText as Ot, SelectItemIndicator as Vt, CheckboxRoot as Dt, CheckboxIndicator as Rt, AccordionRoot as Tt, AccordionItem as Zt, AccordionHeader as Nt, AccordionTrigger as jt, AccordionContent as St, TreeRoot as It, TreeItem as Ft, PopoverRoot as Le, PopoverTrigger as Be, PopoverPortal as He, PopoverContent as Ce, PinInputRoot as Jt, PinInputInput as Qt, RadioGroupRoot as qt, RadioGroupItem as Mt, RadioGroupIndicator as Et, SliderRoot as Wt, SliderTrack as Gt, SliderRange as Kt, SliderThumb as Ut, SwitchRoot as Yt, SwitchThumb as $t, DialogRoot as ae, DialogPortal as le, DialogOverlay as se, DialogContent as oe, DialogTitle as re, DropdownMenuSeparator as _t, TabsRoot as en, TabsList as An, TabsTrigger as tn, TabsContent as nn, DialogTrigger as ge, DialogDescription as xe, AlertDialogRoot as an, AlertDialogTrigger as ln, AlertDialogPortal as sn, AlertDialogOverlay as on, AlertDialogContent as rn, AlertDialogTitle as dn, AlertDialogDescription as un, AlertDialogCancel as cn, AlertDialogAction as fn, DialogClose as Oe, PopoverArrow as vn } from "reka-ui";
const Ve = {
  activity: mt,
  "arrow-left": bt,
  "arrow-left-right": vt,
  "arrow-right": ft,
  ban: ct,
  bell: ut,
  "bell-ring": it,
  book: dt,
  building: rt,
  calendar: ot,
  "chart-column": st,
  "chart-line": lt,
  "chart-pie": at,
  check: nt,
  "chevron-down": tt,
  "chevron-left": At,
  "chevron-right": et,
  "chevron-up": _A,
  "chevrons-left": $A,
  circle: YA,
  "circle-alert": UA,
  "circle-check": KA,
  "circle-dollar": GA,
  "circle-help": WA,
  "circle-x": EA,
  clock: MA,
  copy: qA,
  "credit-card": QA,
  database: JA,
  dollar: FA,
  download: IA,
  ellipsis: SA,
  eye: jA,
  "eye-off": NA,
  "file-check": ZA,
  "file-plus": TA,
  file: RA,
  filter: DA,
  flag: VA,
  funnel: OA,
  gavel: CA,
  globe: HA,
  hash: BA,
  home: LA,
  info: zA,
  key: PA,
  languages: XA,
  "list-checks": wA,
  lock: kA,
  logout: yA,
  mail: pA,
  map: hA,
  menu: xA,
  message: gA,
  "message-dot": mA,
  mic: bA,
  paperclip: vA,
  phone: fA,
  plug: cA,
  plus: uA,
  radio: iA,
  tower: dA,
  refresh: rA,
  search: oA,
  send: sA,
  settings: lA,
  shield: aA,
  "shield-alert": nA,
  "shield-check": tA,
  "shield-off": AA,
  sliders: eA,
  sparkles: _e,
  trash: $e,
  trend: Ye,
  warning: Ue,
  upload: Ke,
  user: Ge,
  "user-plus": We,
  users: Ee,
  wallet: Me,
  x: qe,
  zap: Qe
}, Kc = Object.keys(Ve), X = /* @__PURE__ */ b({
  __name: "Icon",
  props: {
    name: {},
    size: { default: 16 },
    strokeWidth: { default: 1.75 }
  },
  setup(e) {
    const a = e, s = L(() => Ve[a.name]);
    return (o, n) => (A(), k(Xe(s.value), {
      size: e.size,
      "stroke-width": e.strokeWidth,
      "aria-hidden": "true",
      class: "shrink-0"
    }, null, 8, ["size", "stroke-width"]));
  }
}), bn = ["type", "disabled", "aria-busy"], mn = {
  key: 0,
  class: "size-4 animate-spin",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true"
}, j = /* @__PURE__ */ b({
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
    const a = {
      primary: "bg-brand-600 text-white shadow-primary hover:bg-brand-700",
      secondary: "border border-line bg-surface text-gray-700 shadow-xs hover:bg-gray-50 hover:border-line-strong",
      ghost: "text-gray-700 hover:bg-gray-100",
      danger: "bg-danger-600 text-white shadow-xs hover:bg-danger-700",
      "danger-soft": "border border-danger-200 bg-danger-50 text-danger-700 hover:bg-danger-100",
      warning: "border border-warning-500/70 bg-surface text-warning-700 hover:bg-warning-50",
      "on-dark": "text-white/85 hover:bg-white/10 hover:text-white"
    }, s = { sm: "h-[var(--button-height-sm)] gap-1.5 rounded-md px-3 text-xs", md: "h-[var(--button-height-md)] gap-2 rounded-md px-4 text-[13px]", lg: "h-[var(--button-height-lg)] gap-2 rounded-md px-5 text-sm" };
    return (o, n) => (A(), t("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      "aria-busy": e.loading || void 0,
      class: g(["inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors duration-150 disabled:cursor-not-allowed", [
        s[e.size],
        e.block && "w-full",
        e.disabled && e.variant === "primary" ? "bg-[#c5d1ea] text-white shadow-none" : a[e.variant],
        e.disabled && e.variant !== "primary" && "opacity-50",
        e.loading && "opacity-80"
      ]])
    }, [
      e.loading ? (A(), t("svg", mn, [...n[0] || (n[0] = [
        l("circle", {
          cx: "12",
          cy: "12",
          r: "9",
          stroke: "currentColor",
          "stroke-opacity": ".3",
          "stroke-width": "3"
        }, null, -1),
        l("path", {
          d: "M21 12a9 9 0 0 0-9-9",
          stroke: "currentColor",
          "stroke-width": "3",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : e.icon ? (A(), k(X, {
        key: 1,
        name: e.icon
      }, null, 8, ["name"])) : c("", !0),
      B(o.$slots, "default"),
      e.iconRight ? (A(), k(X, {
        key: 2,
        name: e.iconRight
      }, null, 8, ["name"])) : c("", !0)
    ], 10, bn));
  }
}), gn = ["aria-label", "title", "disabled"], xn = {
  key: 0,
  class: "absolute top-1 right-1 size-2 rounded-full bg-danger-500 ring-2 ring-white",
  "aria-hidden": "true"
}, I = /* @__PURE__ */ b({
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
    const a = {
      soft: "rounded-sm border border-line bg-gray-100 text-gray-600 hover:bg-gray-200",
      outline: "rounded-sm border border-line bg-surface text-gray-600 shadow-xs hover:bg-gray-50",
      ghost: "rounded-sm text-gray-600 hover:bg-gray-100",
      "on-brand": "rounded-full bg-white/15 text-white hover:bg-white/25",
      round: "rounded-full border border-line bg-surface text-ink shadow-xs hover:bg-gray-50"
    }, s = { sm: "size-7", md: "size-9", lg: "size-11" };
    return (o, n) => (A(), t("button", {
      type: "button",
      "aria-label": e.label,
      title: e.label,
      disabled: e.disabled,
      class: g(["relative inline-flex items-center justify-center transition-colors disabled:cursor-not-allowed disabled:opacity-40", [a[e.variant], s[e.size]]])
    }, [
      i(X, {
        name: e.icon,
        size: e.size === "sm" ? 14 : e.size === "lg" ? 20 : 16
      }, null, 8, ["name", "size"]),
      e.dot ? (A(), t("span", xn)) : c("", !0)
    ], 10, gn));
  }
}), hn = ["href"], he = /* @__PURE__ */ b({
  __name: "LinkArrow",
  props: {
    href: { default: "#" },
    icon: {},
    arrow: { type: Boolean, default: !0 },
    size: { default: "md" }
  },
  setup(e) {
    return (a, s) => (A(), t("a", {
      href: e.href,
      class: g(["inline-flex items-center gap-1 font-medium text-brand-600 hover:underline underline-offset-2", e.size === "sm" ? "text-[13px]" : "text-sm"])
    }, [
      e.icon ? (A(), k(X, {
        key: 0,
        name: e.icon,
        size: 14
      }, null, 8, ["name"])) : c("", !0),
      B(a.$slots, "default"),
      e.arrow ? (A(), k(X, {
        key: 1,
        name: "arrow-right",
        size: 14
      })) : c("", !0)
    ], 10, hn));
  }
}), Uc = /* @__PURE__ */ b({
  __name: "MenuButton",
  props: {
    label: {},
    icon: {},
    items: {},
    variant: { default: "secondary" },
    size: { default: "md" }
  },
  emits: ["select"],
  setup(e, { emit: a }) {
    const s = a;
    return (o, n) => (A(), k(x(fe), null, {
      default: v(() => [
        i(x(ve), { "as-child": "" }, {
          default: v(() => [
            i(j, {
              variant: e.variant,
              size: e.size,
              icon: e.icon,
              "icon-right": "chevron-down"
            }, {
              default: v(() => [
                h(d(e.label), 1)
              ]),
              _: 1
            }, 8, ["variant", "size", "icon"])
          ]),
          _: 1
        }),
        i(x(be), null, {
          default: v(() => [
            i(x(me), {
              "side-offset": 6,
              align: "end",
              class: "z-50 min-w-48 rounded-md border border-line bg-surface p-1 shadow-pop"
            }, {
              default: v(() => [
                (A(!0), t(y, null, z(e.items, (r) => (A(), k(x(Ae), {
                  key: r.label,
                  disabled: r.disabled,
                  class: g(["flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-sm outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40 data-[highlighted]:bg-brand-50", r.danger ? "text-danger-600" : "text-gray-700"]),
                  onSelect: (u) => s("select", r)
                }, {
                  default: v(() => [
                    r.icon ? (A(), k(X, {
                      key: 0,
                      name: r.icon
                    }, null, 8, ["name"])) : c("", !0),
                    h(" " + d(r.label), 1)
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
}), Yc = /* @__PURE__ */ b({
  __name: "RowActions",
  props: {
    items: {},
    label: { default: "Row actions" }
  },
  emits: ["select"],
  setup(e, { emit: a }) {
    const s = a;
    return (o, n) => (A(), k(x(fe), null, {
      default: v(() => [
        i(x(ve), { "as-child": "" }, {
          default: v(() => [
            i(I, {
              icon: "ellipsis",
              label: e.label,
              variant: "outline",
              size: "sm"
            }, null, 8, ["label"])
          ]),
          _: 1
        }),
        i(x(be), null, {
          default: v(() => [
            i(x(me), {
              "side-offset": 4,
              align: "end",
              class: "z-50 min-w-44 rounded-md border border-line bg-surface p-1 shadow-pop"
            }, {
              default: v(() => [
                (A(!0), t(y, null, z(e.items, (r) => (A(), k(x(Ae), {
                  key: r.label,
                  disabled: r.disabled,
                  class: g(["flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-[13px] outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40 data-[highlighted]:bg-brand-50", r.danger ? "text-danger-600" : "text-gray-700"]),
                  onSelect: (u) => s("select", r)
                }, {
                  default: v(() => [
                    r.icon ? (A(), k(X, {
                      key: 0,
                      name: r.icon
                    }, null, 8, ["name"])) : c("", !0),
                    h(d(r.label), 1)
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
}), pn = ["aria-label", "aria-valuenow", "aria-valuemax"], J = /* @__PURE__ */ b({
  __name: "ProgressBar",
  props: {
    value: {},
    max: { default: 100 },
    tone: { default: "brand" },
    size: { default: "sm" },
    label: { default: "Progress" }
  },
  setup(e) {
    const a = {
      brand: "bg-brand-600",
      gradient: "bg-gradient-to-r from-brand-300 to-brand-600",
      success: "bg-success-600",
      warning: "bg-warning-600",
      danger: "bg-danger-600",
      muted: "bg-gray-300"
    }, s = { xs: "h-1", sm: "h-1.5", md: "h-2.5" };
    return (o, n) => (A(), t("div", {
      role: "progressbar",
      "aria-label": e.label,
      "aria-valuenow": e.value,
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      class: g(["w-full overflow-hidden rounded-full bg-gray-200/80", s[e.size]])
    }, [
      l("div", {
        class: g(["h-full rounded-full transition-[width] duration-300", a[e.tone]]),
        style: T({ width: `${Math.min(e.value / e.max * 100, 100)}%` })
      }, null, 6)
    ], 10, pn));
  }
}), yn = {
  class: "rounded-lg border border-brand-200/80 bg-gradient-to-b from-brand-50 to-surface p-4",
  "aria-label": "AI recommendation"
}, kn = { class: "eyebrow-mono flex items-center gap-1.5 !text-brand-700" }, wn = { class: "mt-2 text-lg font-semibold text-ink" }, Xn = { class: "mt-2 flex items-center gap-2" }, Pn = { class: "font-mono text-xs font-medium whitespace-nowrap text-ink-2" }, zn = { class: "mt-3 flex flex-col gap-1.5" }, $c = /* @__PURE__ */ b({
  __name: "AiRecommendation",
  props: {
    action: {},
    confidence: {},
    reasons: {}
  },
  setup(e) {
    return (a, s) => (A(), t("aside", yn, [
      l("p", kn, [
        i(X, {
          name: "sparkles",
          size: 14
        }),
        s[0] || (s[0] = h(" AI recommendation", -1))
      ]),
      l("p", wn, d(e.action), 1),
      l("div", Xn, [
        i(J, {
          value: e.confidence,
          label: "Confidence"
        }, null, 8, ["value"]),
        l("span", Pn, d(e.confidence) + "% confidence", 1)
      ]),
      l("ul", zn, [
        (A(!0), t(y, null, z(e.reasons, (o) => (A(), t("li", {
          key: o,
          class: "flex gap-2 text-[13px] leading-5 text-gray-700"
        }, [
          i(X, {
            name: "check",
            size: 14,
            class: "mt-0.5 text-brand-600"
          }),
          h(d(o), 1)
        ]))), 128))
      ])
    ]));
  }
}), Ln = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACvAAAAJMCAYAAAAmbXMxAAAAtGVYSWZJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAABmAAAAAAAAAGAAAAABAAAAYAAAAAEAAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAA8AoAAAOgBAABAAAATAIAAAAAAADQAGS+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFTWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI2LTA5LTAxPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkRhdGE+eyZxdW90O2RvYyZxdW90OzomcXVvdDtEQUhUNy1TQkpwcyZxdW90OywmcXVvdDt1c2VyJnF1b3Q7OiZxdW90O1VBRTBBeVhOR2pZJnF1b3Q7LCZxdW90O2JyYW5kJnF1b3Q7OiZxdW90O0JBRTBBLTE4UnpBJnF1b3Q7fTwvQXR0cmliOkRhdGE+CiAgICAgPEF0dHJpYjpFeHRJZD4wZDdkMWJhMi00ZjM4LTRhOWEtYTcxNC01ODFiMGM1NjFjMjU8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyc+CiAgPGRjOnRpdGxlPgogICA8cmRmOkFsdD4KICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+RGlnaSBDb25zZW50IC0gMTwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5QcmFub3YgUmVkZHkgRGFtbWFubmFnYXJpPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmEgZG9jPURBSFQ3LVNCSnBzIHVzZXI9VUFFMEF5WE5HalkgYnJhbmQ9QkFFMEEtMThSekE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+GB810QAAIABJREFUeJzs3QucnHV9L/5FtIXsPEMyz2it0mpbWjWF7POIp622tahsEOQOIUFFYBMC7OZ+AxQk7gaSgIBB/GvbY62tp6d6etP2f/S01dZz2mprT23PqULVXqy1tRdFUUGFeX5nJiFsuCTksjvfmdn3+/X6vDbkxWXm+3ue30yGz/52aAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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teWrRkI+cnbvvw/nxRkhnJP1/p/Ujw0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+X/AYiecGa+jUsWAAAAAElFTkSuQmCC", Bn = "data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBK5M8r6NfbEjUAAAAASUVORK5CYII=", Hn = ["src"], Cn = ["width", "height"], On = ["d", "opacity", "fill"], G = /* @__PURE__ */ b({
  __name: "LogoMark",
  props: {
    size: { default: 24 },
    wordmark: { type: Boolean },
    tile: { type: Boolean },
    onDark: { type: Boolean }
  },
  setup(e) {
    const a = [
      { d: "M21 5L29 11L21 17V5Z", o: 0.95 },
      { d: "M35 13V23L27 20L35 13Z", o: 0.85 },
      { d: "M35 29L27 34V25L35 29Z", o: 0.75 },
      { d: "M21 37L13 31L21 25V37Z", o: 0.95 },
      { d: "M7 29V19L15 22L7 29Z", o: 0.85 },
      { d: "M7 13L15 8V17L7 13Z", o: 0.75 }
    ];
    return (s, o) => e.wordmark ? (A(), t("img", {
      key: 0,
      src: e.onDark ? x(Bn) : x(Ln),
      alt: "DigiConsent",
      class: "block w-auto max-w-full shrink-0",
      style: T({ height: `${e.size * 1.7}px` })
    }, null, 12, Hn)) : (A(), t("span", {
      key: 1,
      class: g(["inline-flex shrink-0 items-center justify-center", e.tile ? "rounded-full bg-brand-600 shadow-primary" : ""]),
      style: T(e.tile ? { width: `${e.size * 1.6}px`, height: `${e.size * 1.6}px` } : {})
    }, [
      (A(), t("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 42 42",
        role: "img",
        "aria-label": "DigiConsent"
      }, [
        (A(), t(y, null, z(a, (n) => l("path", {
          key: n.d,
          d: n.d,
          opacity: n.o,
          fill: e.tile || e.onDark ? "#ffffff" : "#3b5bff"
        }, null, 8, On)), 64))
      ], 8, Cn))
    ], 6));
  }
}), Vn = { class: "flex items-start gap-4 rounded-xl border border-brand-200/80 bg-gradient-to-r from-surface to-brand-50 p-5" }, Dn = { class: "min-w-0 text-[15px] leading-6 text-gray-700" }, _c = /* @__PURE__ */ b({
  __name: "AiSummary",
  setup(e) {
    return (a, s) => (A(), t("div", Vn, [
      i(G, {
        tile: "",
        size: 22,
        class: "drop-shadow-[0_6px_10px_rgb(37_99_235/0.3)]"
      }),
      l("p", Dn, [
        B(a.$slots, "default")
      ])
    ]));
  }
}), Rn = ["src", "alt"], Tn = ["aria-label"], De = /* @__PURE__ */ b({
  __name: "Avatar",
  props: {
    name: {},
    src: {},
    size: { default: "md" },
    color: { default: "#2563eb" }
  },
  setup(e) {
    const a = e, s = L(() => a.name.split(/\s+/).map((n) => n[0]).slice(0, 2).join("").toUpperCase()), o = { sm: "size-7 text-[11px]", md: "size-9 text-[13px]", lg: "size-12 text-base" };
    return (n, r) => (A(), t("span", {
      class: g(["inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-semibold text-white", o[e.size]]),
      style: T({ background: e.color })
    }, [
      e.src ? (A(), t("img", {
        key: 0,
        src: e.src,
        alt: e.name,
        class: "size-full object-cover"
      }, null, 8, Rn)) : (A(), t("span", {
        key: 1,
        "aria-label": e.name
      }, d(s.value), 9, Tn))
    ], 6));
  }
}), Q = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: { default: "neutral" },
    size: { default: "md" },
    dot: { type: Boolean },
    icon: {},
    caps: { type: Boolean }
  },
  setup(e) {
    const a = {
      success: "bg-success-100 text-success-700",
      warning: "bg-warning-50 text-warning-700",
      danger: "bg-danger-100 text-danger-700",
      info: "bg-info-100 text-info-700",
      neutral: "bg-gray-100 text-gray-600",
      brand: "bg-brand-50 text-brand-700",
      role: "bg-[#fff4da] text-[#8a6410]"
    }, s = { success: "bg-success-600", warning: "bg-warning-600", danger: "bg-danger-600", info: "bg-info-600", neutral: "bg-gray-400", brand: "bg-brand-600", role: "bg-[#8a6410]" };
    return (o, n) => (A(), t("span", {
      class: g(["inline-flex items-center gap-1 rounded-full font-medium whitespace-nowrap", [a[e.variant], e.size === "sm" ? "px-2 py-px text-[11px] leading-4" : "px-2.5 py-0.5 text-xs leading-[18px]", e.caps && "tracking-wider uppercase"]])
    }, [
      e.dot ? (A(), t("span", {
        key: 0,
        class: g(["size-1.5 rounded-full", s[e.variant]]),
        "aria-hidden": "true"
      }, null, 2)) : c("", !0),
      e.icon ? (A(), k(X, {
        key: 1,
        name: e.icon,
        size: 12
      }, null, 8, ["name"])) : c("", !0),
      B(o.$slots, "default")
    ], 2));
  }
}), Zn = { class: "flex items-center gap-2.5" }, Nn = {
  key: 0,
  class: "flex min-w-0 flex-col items-start gap-0.5"
}, jn = { class: "truncate text-sm leading-tight text-ink" }, Re = /* @__PURE__ */ b({
  __name: "UserChip",
  props: {
    name: {},
    role: {},
    compact: { type: Boolean }
  },
  setup(e) {
    return (a, s) => (A(), t("span", Zn, [
      i(De, { name: e.name }, null, 8, ["name"]),
      e.compact ? c("", !0) : (A(), t("span", Nn, [
        l("span", jn, d(e.name), 1),
        i(Q, {
          variant: "role",
          size: "sm",
          caps: ""
        }, {
          default: v(() => [
            h(d(e.role), 1)
          ]),
          _: 1
        })
      ]))
    ]));
  }
}), Sn = { class: "flex h-[var(--app-header-height)] items-center justify-between border-b border-line px-4" }, In = {
  class: "flex-1 overflow-y-auto py-3",
  "aria-label": "Primary"
}, Fn = {
  key: 0,
  class: "eyebrow px-4 pt-1 pb-1.5 !font-semibold"
}, Jn = ["aria-current", "aria-expanded", "disabled", "title", "onClick"], Qn = { class: "flex-1 truncate" }, qn = {
  key: 0,
  class: "rounded-full bg-danger-100 px-1.5 text-[11px] font-semibold text-danger-700"
}, Mn = {
  key: 0,
  class: "mt-1 mb-1 flex flex-col gap-1 px-3"
}, En = ["aria-current", "disabled", "onClick"], Wn = { class: "flex-1 truncate" }, Gn = {
  key: 0,
  class: "rounded-full bg-gray-100 px-1.5 py-0.5"
}, Kn = /* @__PURE__ */ b({
  __name: "SidebarNav",
  props: {
    groups: {},
    active: {},
    user: {},
    expanded: { default: () => [] },
    startCollapsed: { type: Boolean }
  },
  emits: ["navigate"],
  setup(e, { emit: a }) {
    const s = e, o = a, n = N(s.startCollapsed), r = N(new Set(s.expanded));
    function u(f) {
      r.value.has(f) ? r.value.delete(f) : r.value.add(f);
    }
    return (f, m) => (A(), t("aside", {
      class: g(["flex h-full shrink-0 flex-col border-r border-line bg-surface transition-[width] duration-200", n.value ? "w-[var(--app-sidebar-collapsed-width)]" : "w-[var(--app-sidebar-width)]"])
    }, [
      l("div", Sn, [
        i(G, {
          wordmark: !n.value,
          size: 22
        }, null, 8, ["wordmark"]),
        n.value ? c("", !0) : (A(), k(I, {
          key: 0,
          icon: "chevrons-left",
          label: "Collapse sidebar",
          size: "sm",
          onClick: m[0] || (m[0] = (p) => n.value = !0)
        }))
      ]),
      n.value ? (A(), k(I, {
        key: 0,
        icon: "chevron-right",
        label: "Expand sidebar",
        size: "sm",
        class: "mx-auto mt-3",
        onClick: m[1] || (m[1] = (p) => n.value = !1)
      })) : c("", !0),
      l("nav", In, [
        (A(!0), t(y, null, z(e.groups, (p) => (A(), t("div", {
          key: p.title,
          class: "mb-3"
        }, [
          n.value ? c("", !0) : (A(), t("p", Fn, d(p.title), 1)),
          l("ul", null, [
            (A(!0), t(y, null, z(p.items, (w) => (A(), t("li", {
              key: w.id
            }, [
              l("button", {
                type: "button",
                "aria-current": e.active === w.id ? "page" : void 0,
                "aria-expanded": w.children ? r.value.has(w.id) : void 0,
                disabled: w.locked,
                title: n.value ? w.label : void 0,
                class: g(["flex h-10 w-full items-center gap-3 border-l-[3px] px-4 text-left text-sm transition-colors disabled:cursor-not-allowed", [
                  e.active === w.id || w.children?.some((P) => P.id === e.active) ? "border-brand-600 bg-brand-50 text-brand-600" : "border-transparent text-gray-700 hover:bg-gray-50",
                  w.locked && "text-ink-4 hover:bg-transparent",
                  n.value && "justify-center px-0"
                ]]),
                onClick: (P) => w.children ? u(w.id) : o("navigate", w.id)
              }, [
                i(X, {
                  name: w.icon,
                  size: 18
                }, null, 8, ["name"]),
                n.value ? c("", !0) : (A(), t(y, { key: 0 }, [
                  l("span", Qn, d(w.label), 1),
                  w.count ? (A(), t("span", qn, d(w.count), 1)) : c("", !0),
                  w.locked ? (A(), k(X, {
                    key: 1,
                    name: "lock",
                    size: 13
                  })) : c("", !0),
                  w.children ? (A(), k(X, {
                    key: 2,
                    name: r.value.has(w.id) ? "chevron-up" : "chevron-down",
                    size: 14
                  }, null, 8, ["name"])) : c("", !0)
                ], 64))
              ], 10, Jn),
              w.children && r.value.has(w.id) && !n.value ? (A(), t("ul", Mn, [
                (A(!0), t(y, null, z(w.children, (P) => (A(), t("li", {
                  key: P.id
                }, [
                  l("button", {
                    type: "button",
                    "aria-current": e.active === P.id ? "page" : void 0,
                    disabled: P.locked,
                    class: g(["flex h-9 w-full items-center gap-3 rounded-sm border px-3 text-left text-sm transition-colors disabled:cursor-not-allowed", [e.active === P.id ? "border-brand-200 bg-surface text-brand-600 shadow-xs" : "border-transparent text-gray-700 hover:bg-gray-50", P.locked && "text-ink-4 hover:bg-transparent"]]),
                    onClick: (D) => o("navigate", P.id)
                  }, [
                    i(X, {
                      name: P.icon,
                      size: 16
                    }, null, 8, ["name"]),
                    l("span", Wn, d(P.label), 1),
                    P.locked ? (A(), t("span", Gn, [
                      i(X, {
                        name: "lock",
                        size: 11
                      })
                    ])) : c("", !0)
                  ], 10, En)
                ]))), 128))
              ])) : c("", !0)
            ]))), 128))
          ])
        ]))), 128))
      ]),
      l("div", {
        class: g(["border-t border-line p-3", n.value && "flex justify-center"])
      }, [
        i(Re, {
          name: e.user.name,
          role: e.user.role,
          compact: n.value
        }, null, 8, ["name", "role", "compact"])
      ], 2)
    ], 2));
  }
}), Un = ["src", "alt"], Yn = ["aria-label"], $n = ["src", "alt"], _n = ["aria-label"], de = /* @__PURE__ */ b({
  __name: "BrandMark",
  props: {
    name: {},
    color: { default: "#0b1a33" },
    src: {},
    size: { default: "md" },
    shape: { default: "tile" }
  },
  setup(e) {
    const a = e, s = { sm: "size-7 text-xs", md: "size-9 text-sm", lg: "size-11 text-base", xl: "size-14 text-lg" }, o = L(() => a.name.trim()[0]?.toUpperCase());
    return (n, r) => e.shape === "tile" ? (A(), t("span", {
      key: 0,
      class: g(["inline-flex shrink-0 items-center justify-center overflow-hidden rounded-sm font-semibold text-white", s[e.size]]),
      style: T({ background: e.src ? "#fff" : e.color })
    }, [
      e.src ? (A(), t("img", {
        key: 0,
        src: e.src,
        alt: e.name,
        class: "size-full object-contain"
      }, null, 8, Un)) : (A(), t("span", {
        key: 1,
        "aria-label": e.name
      }, d(o.value), 9, Yn))
    ], 6)) : (A(), t("span", {
      key: 1,
      class: g(["inline-flex shrink-0 items-center justify-center rounded-full border border-line bg-gray-100 p-2.5", e.size === "xl" ? "size-14" : "size-12"])
    }, [
      l("span", {
        class: "flex size-full items-center justify-center overflow-hidden rounded-sm text-sm font-semibold text-white",
        style: T({ background: e.src ? "#fff" : e.color })
      }, [
        e.src ? (A(), t("img", {
          key: 0,
          src: e.src,
          alt: e.name,
          class: "size-full object-contain"
        }, null, 8, $n)) : (A(), t("span", {
          key: 1,
          "aria-label": e.name
        }, d(o.value), 9, _n))
      ], 4)
    ], 2));
  }
}), ea = ["aria-label"], Aa = { class: "min-w-0" }, ta = { class: "block truncate text-[13px] leading-tight font-medium text-ink" }, na = { class: "eyebrow block !text-[10px] !leading-3.5" }, aa = /* @__PURE__ */ b({
  __name: "OrgSwitcher",
  props: {
    name: {},
    type: {},
    color: { default: "#0b1a33" }
  },
  setup(e) {
    return (a, s) => (A(), t("button", {
      type: "button",
      class: "flex h-11 max-w-52 items-center gap-2.5 rounded-md border border-line bg-gray-50 pr-3 pl-2 text-left hover:bg-gray-100",
      "aria-label": `Organisation: ${e.name}, ${e.type}`
    }, [
      i(de, {
        name: e.name,
        color: e.color,
        size: "sm"
      }, null, 8, ["name", "color"]),
      l("span", Aa, [
        l("span", ta, d(e.name), 1),
        l("span", na, d(e.type), 1)
      ])
    ], 8, ea));
  }
}), la = { class: "flex h-[var(--app-header-height)] shrink-0 items-center justify-between gap-4 border-b border-line bg-surface px-6" }, sa = { class: "min-w-0 flex-1" }, oa = { class: "flex items-center gap-3" }, ra = /* @__PURE__ */ b({
  __name: "Topbar",
  props: {
    org: {},
    orgType: {},
    orgColor: { default: "#0b1a33" },
    unread: { type: Boolean }
  },
  emits: ["notifications"],
  setup(e, { emit: a }) {
    const s = a;
    return (o, n) => (A(), t("header", la, [
      l("div", sa, [
        B(o.$slots, "default")
      ]),
      l("div", oa, [
        i(I, {
          icon: "bell",
          label: "Notifications",
          size: "lg",
          dot: e.unread,
          onClick: n[0] || (n[0] = (r) => s("notifications"))
        }, null, 8, ["dot"]),
        i(aa, {
          name: e.org,
          type: e.orgType,
          color: e.orgColor
        }, null, 8, ["name", "type", "color"])
      ])
    ]));
  }
}), da = { class: "flex min-w-0 flex-1 flex-col" }, ia = { class: "flex-1 overflow-y-auto px-8 py-7" }, ef = /* @__PURE__ */ b({
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
    return (a, s) => (A(), t("div", {
      class: g(["flex h-screen min-h-[640px] overflow-hidden", e.tone === "regulator" ? "bg-page-regulator" : "bg-page"])
    }, [
      i(Kn, {
        groups: e.groups,
        active: e.active,
        expanded: e.expanded,
        user: e.user
      }, null, 8, ["groups", "active", "expanded", "user"]),
      l("div", da, [
        i(ra, {
          org: e.org,
          "org-type": e.orgType,
          "org-color": e.orgColor
        }, null, 8, ["org", "org-type", "org-color"]),
        l("main", ia, [
          B(a.$slots, "default")
        ])
      ])
    ], 2));
  }
}), ua = { class: "w-full max-w-md rounded-2xl border border-line bg-surface p-8 shadow-card" }, ca = { class: "portal-type-section-title mt-6" }, fa = {
  key: 0,
  class: "portal-type-page-subtitle mt-1"
}, va = { class: "portal-stack-form mt-6" }, ba = {
  key: 1,
  class: "mt-6 border-t border-line pt-4 text-center text-[13px] text-ink-2"
}, Af = /* @__PURE__ */ b({
  __name: "AuthCard",
  props: {
    title: {},
    description: {}
  },
  setup(e) {
    return (a, s) => (A(), t("section", ua, [
      i(G, {
        wordmark: "",
        size: 26,
        class: "-ml-2"
      }),
      l("h1", ca, d(e.title), 1),
      e.description ? (A(), t("p", fa, d(e.description), 1)) : c("", !0),
      l("div", va, [
        B(a.$slots, "default")
      ]),
      a.$slots.footer ? (A(), t("div", ba, [
        B(a.$slots, "footer")
      ])) : c("", !0)
    ]));
  }
}), q = /* @__PURE__ */ b({
  __name: "Eyebrow",
  props: {
    mono: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    return (a, s) => (A(), k(Xe(e.as), {
      class: g(e.mono ? "eyebrow-mono" : "eyebrow")
    }, {
      default: v(() => [
        B(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ma = ["aria-label"], pe = /* @__PURE__ */ b({
  __name: "Hint",
  props: {
    text: {},
    side: { default: "top" }
  },
  setup(e) {
    return (a, s) => (A(), k(x(gt), { "delay-duration": 150 }, {
      default: v(() => [
        i(x(xt), null, {
          default: v(() => [
            i(x(ht), { "as-child": "" }, {
              default: v(() => [
                B(a.$slots, "default", {}, () => [
                  l("button", {
                    type: "button",
                    "aria-label": e.text,
                    class: "inline-flex text-ink-3 hover:text-ink"
                  }, [
                    i(X, {
                      name: "info",
                      size: 14
                    })
                  ], 8, ma)
                ])
              ]),
              _: 3
            }),
            i(x(pt), null, {
              default: v(() => [
                i(x(yt), {
                  side: e.side,
                  "side-offset": 6,
                  class: "z-50 max-w-64 rounded-sm bg-navy-900 px-2.5 py-1.5 text-xs leading-[18px] text-white shadow-pop"
                }, {
                  default: v(() => [
                    h(d(e.text) + " ", 1),
                    i(x(kt), { class: "fill-navy-900" })
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
}), ga = { class: "rounded-xl border border-line bg-surface p-5 shadow-card" }, xa = { class: "mt-4 flex items-center gap-2" }, ha = { class: "font-mono text-xs text-ink-3" }, pa = { class: "mt-1 divide-y divide-line" }, ya = { class: "min-w-0 flex-1 text-[13px] font-medium text-ink" }, ka = {
  key: 0,
  class: "text-danger-500"
}, wa = { class: "font-mono text-[11px] whitespace-nowrap text-ink-3" }, tf = /* @__PURE__ */ b({
  __name: "CsvFormatCard",
  props: {
    mandatory: {},
    optional: {}
  },
  emits: ["download"],
  setup(e, { emit: a }) {
    const s = a;
    return (o, n) => (A(), t("section", ga, [
      i(q, { mono: "" }, {
        default: v(() => [...n[1] || (n[1] = [
          h("CSV format", -1)
        ])]),
        _: 1
      }),
      (A(!0), t(y, null, z([{ title: "Mandatory", rows: e.mandatory, variant: "danger", dot: "bg-brand-600" }, { title: "Optional", rows: e.optional, variant: "neutral", dot: "bg-gray-300" }], (r) => (A(), t(y, {
        key: r.title
      }, [
        l("div", xa, [
          i(Q, {
            variant: r.variant,
            size: "sm",
            caps: ""
          }, {
            default: v(() => [
              h(d(r.title), 1)
            ]),
            _: 2
          }, 1032, ["variant"]),
          n[2] || (n[2] = l("span", { class: "h-px flex-1 bg-line" }, null, -1)),
          l("span", ha, d(r.rows.length), 1)
        ]),
        l("ul", pa, [
          (A(!0), t(y, null, z(r.rows, (u) => (A(), t("li", {
            key: u.name,
            class: "flex items-center gap-2 py-2.5"
          }, [
            l("span", {
              class: g(["size-1.5 shrink-0 rounded-full", r.dot]),
              "aria-hidden": "true"
            }, null, 2),
            l("span", ya, [
              h(d(u.name), 1),
              r.title === "Mandatory" ? (A(), t("span", ka, " *")) : c("", !0)
            ]),
            l("span", wa, d(u.format), 1),
            i(pe, {
              text: u.help
            }, null, 8, ["text"])
          ]))), 128))
        ])
      ], 64))), 128)),
      i(j, {
        class: "mt-4",
        variant: "secondary",
        icon: "download",
        block: "",
        onClick: n[0] || (n[0] = (r) => s("download"))
      }, {
        default: v(() => [...n[3] || (n[3] = [
          h("Download Template", -1)
        ])]),
        _: 1
      })
    ]));
  }
}), Te = (e, a) => {
  const s = e.__vccOpts || e;
  for (const [o, n] of a)
    s[o] = n;
  return s;
}, Xa = {}, Pa = { class: "inline-flex h-5 min-w-5 items-center justify-center rounded-xs border border-line bg-gray-50 px-1 font-mono text-[11px] font-medium text-gray-600 shadow-[0_1px_0_var(--color-line)]" };
function za(e, a) {
  return A(), t("kbd", Pa, [
    B(e.$slots, "default")
  ]);
}
const Y = /* @__PURE__ */ Te(Xa, [["render", za]]), Ze = /* @__PURE__ */ b({
  __name: "SelectField",
  props: /* @__PURE__ */ V({
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
    const a = O(e, "modelValue");
    return (s, o) => (A(), k(x(wt), {
      modelValue: a.value,
      "onUpdate:modelValue": o[0] || (o[0] = (n) => a.value = n),
      disabled: e.disabled
    }, {
      default: v(() => [
        i(x(Xt), {
          "aria-label": e.ariaLabel || e.placeholder,
          class: g(["flex w-full items-center justify-between gap-2 rounded-md border bg-surface px-3 text-left text-[13px] text-ink outline-none transition-shadow focus:ring-3 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70 data-[placeholder]:text-ink-3", [e.size === "sm" ? "h-[var(--button-height-md)]" : "h-[var(--input-height-md)]", e.invalid ? "border-danger-500 focus:ring-danger-100" : "border-line focus:border-brand-500 focus:ring-brand-100"]])
        }, {
          default: v(() => [
            i(x(Pt), { placeholder: e.placeholder }, null, 8, ["placeholder"]),
            i(x(zt), null, {
              default: v(() => [
                i(X, {
                  name: "chevron-down",
                  class: "text-ink-3"
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["aria-label", "class"]),
        i(x(Lt), null, {
          default: v(() => [
            i(x(Bt), {
              position: "popper",
              "side-offset": 6,
              class: "z-50 max-h-72 w-[var(--reka-select-trigger-width)] overflow-hidden rounded-md border border-line bg-surface shadow-pop"
            }, {
              default: v(() => [
                i(x(Ht), { class: "p-1" }, {
                  default: v(() => [
                    (A(!0), t(y, null, z(e.options, (n) => (A(), k(x(Ct), {
                      key: n.value,
                      value: n.value,
                      disabled: n.disabled,
                      class: "flex cursor-pointer items-center justify-between rounded-sm px-2.5 py-2 text-sm text-gray-700 outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40 data-[highlighted]:bg-brand-50 data-[state=checked]:font-medium data-[state=checked]:text-brand-600"
                    }, {
                      default: v(() => [
                        i(x(Ot), null, {
                          default: v(() => [
                            h(d(n.label), 1)
                          ]),
                          _: 2
                        }, 1024),
                        i(x(Vt), null, {
                          default: v(() => [
                            i(X, {
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
}), La = { class: "flex flex-wrap items-center gap-3 rounded-xl border border-line bg-surface p-3 shadow-pop" }, Ba = { class: "min-w-56 flex-1" }, nf = /* @__PURE__ */ b({
  __name: "DecisionBar",
  props: /* @__PURE__ */ V({
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
  emits: /* @__PURE__ */ V(["decide"], ["update:reason"]),
  setup(e, { emit: a }) {
    const s = O(e, "reason"), o = a;
    return (n, r) => (A(), t("div", La, [
      l("div", Ba, [
        i(Ze, {
          modelValue: s.value,
          "onUpdate:modelValue": r[0] || (r[0] = (u) => s.value = u),
          options: e.reasons,
          placeholder: "Reason code",
          size: "sm"
        }, null, 8, ["modelValue", "options"])
      ]),
      i(j, {
        variant: "ghost",
        size: "sm",
        onClick: r[1] || (r[1] = (u) => o("decide", "blacklist"))
      }, {
        default: v(() => [
          i(Y, null, {
            default: v(() => [...r[5] || (r[5] = [
              h("B", -1)
            ])]),
            _: 1
          }),
          r[6] || (r[6] = h(" Blacklist", -1))
        ]),
        _: 1
      }),
      i(j, {
        variant: "secondary",
        size: "sm",
        onClick: r[2] || (r[2] = (u) => o("decide", "escalate"))
      }, {
        default: v(() => [
          i(Y, null, {
            default: v(() => [...r[7] || (r[7] = [
              h("E", -1)
            ])]),
            _: 1
          }),
          r[8] || (r[8] = h(" Escalate", -1))
        ]),
        _: 1
      }),
      i(j, {
        variant: "danger",
        size: "sm",
        onClick: r[3] || (r[3] = (u) => o("decide", "reject"))
      }, {
        default: v(() => [...r[9] || (r[9] = [
          l("span", { class: "font-mono text-[11px] opacity-80" }, "R", -1),
          h(" Reject", -1)
        ])]),
        _: 1
      }),
      i(j, {
        size: "sm",
        onClick: r[4] || (r[4] = (u) => o("decide", "approve"))
      }, {
        default: v(() => [...r[10] || (r[10] = [
          l("span", { class: "font-mono text-[11px] opacity-80" }, "A", -1),
          h(" Approve", -1)
        ])]),
        _: 1
      })
    ]));
  }
}), S = /* @__PURE__ */ b({
  __name: "IconTile",
  props: {
    icon: {},
    tone: { default: "brand" },
    size: { default: "md" },
    round: { type: Boolean }
  },
  setup(e) {
    const a = {
      brand: "bg-brand-50 text-brand-600",
      success: "bg-success-50 text-success-600",
      warning: "bg-warning-50 text-warning-700",
      danger: "bg-danger-100 text-danger-600",
      neutral: "bg-gray-100 text-gray-600",
      "solid-success": "bg-success-500 text-white"
    }, s = { xs: ["size-6 rounded-[6px]", 13], sm: ["size-8 rounded-sm", 16], md: ["size-11 rounded-md", 20], lg: ["size-14 rounded-lg", 26] };
    return (o, n) => (A(), t("span", {
      class: g(["inline-flex shrink-0 items-center justify-center", [a[e.tone], s[e.size][0], e.round && "!rounded-full"]])
    }, [
      i(X, {
        name: e.icon,
        size: s[e.size][1]
      }, null, 8, ["name", "size"])
    ], 2));
  }
}), Ha = { class: "rounded-lg border border-line bg-surface p-4 shadow-card" }, Ca = { class: "flex items-center gap-2.5" }, Oa = { class: "flex-1 text-sm font-semibold text-ink" }, Va = { class: "mt-3 flex flex-col gap-1.5" }, Da = { class: "text-ink-3" }, Ra = { class: "text-right font-medium text-ink" }, af = /* @__PURE__ */ b({
  __name: "EvidenceCard",
  props: {
    title: {},
    icon: {},
    verdict: {},
    verdictTone: {},
    items: {}
  },
  setup(e) {
    return (a, s) => (A(), t("article", Ha, [
      l("header", Ca, [
        i(S, {
          icon: e.icon,
          size: "xs"
        }, null, 8, ["icon"]),
        l("h3", Oa, d(e.title), 1),
        i(Q, {
          variant: e.verdictTone,
          size: "sm",
          dot: ""
        }, {
          default: v(() => [
            h(d(e.verdict), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      l("dl", Va, [
        (A(!0), t(y, null, z(e.items, (o) => (A(), t("div", {
          key: o.label,
          class: "flex justify-between gap-3 text-[13px]"
        }, [
          l("dt", Da, d(o.label), 1),
          l("dd", Ra, d(o.value), 1)
        ]))), 128))
      ])
    ]));
  }
}), Ta = {
  key: 0,
  class: "rounded-xl border border-warning-200 bg-warning-50 p-4"
}, Za = { class: "flex flex-wrap items-center gap-3" }, Na = { class: "flex-1 text-sm font-semibold text-ink" }, ja = { class: "mt-3 flex flex-wrap gap-x-5 gap-y-2" }, Sa = {
  key: 1,
  class: "flex items-center gap-2 rounded-xl border border-success-500/30 bg-success-50 px-4 py-3 text-sm font-medium text-success-700",
  role: "status"
}, lf = /* @__PURE__ */ b({
  __name: "GoLiveBanner",
  props: {
    items: {}
  },
  setup(e) {
    const a = e, s = L(() => a.items.filter((o) => o.done).length);
    return (o, n) => s.value < e.items.length ? (A(), t("section", Ta, [
      l("div", Za, [
        i(X, {
          name: "flag",
          size: 18,
          class: "text-warning-700"
        }),
        l("p", Na, "Go-live checklist: " + d(s.value) + " of " + d(e.items.length) + " complete", 1),
        i(J, {
          class: "!w-40",
          value: s.value,
          max: e.items.length,
          tone: "warning",
          label: "Go-live checklist"
        }, null, 8, ["value", "max"])
      ]),
      l("ul", ja, [
        (A(!0), t(y, null, z(e.items, (r) => (A(), t("li", {
          key: r.label,
          class: g(["flex items-center gap-1.5 text-[13px]", r.done ? "text-success-700" : "text-gray-700"])
        }, [
          i(X, {
            name: r.done ? "circle-check" : "circle",
            size: 14
          }, null, 8, ["name"]),
          h(d(r.label), 1)
        ], 2))), 128))
      ])
    ])) : (A(), t("p", Sa, [
      i(X, { name: "circle-check" }),
      n[0] || (n[0] = h(" All systems operational", -1))
    ]));
  }
}), Ia = { class: "relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-600 to-brand-900 p-5 text-white" }, Fa = { class: "relative" }, Ja = { class: "flex items-start justify-between gap-3" }, Qa = { class: "text-[11px] font-semibold tracking-[0.09em] uppercase text-white/85" }, qa = {
  key: 0,
  class: "rounded-full bg-white/20 px-3 py-1 text-xs font-medium"
}, Ma = { class: "mt-2 text-4xl leading-tight font-semibold tracking-tight tnum" }, Ea = {
  key: 0,
  class: "mt-0.5 text-[13px] text-white/90"
}, Wa = ["aria-label", "aria-valuenow"], sf = /* @__PURE__ */ b({
  __name: "HeroStat",
  props: {
    label: {},
    value: {},
    caption: {},
    pill: {},
    progress: {}
  },
  setup(e) {
    return (a, s) => (A(), t("article", Ia, [
      s[0] || (s[0] = l("svg", {
        class: "absolute top-0 right-0 h-full opacity-20",
        viewBox: "0 0 160 170",
        fill: "none",
        "aria-hidden": "true"
      }, [
        l("path", {
          d: "M40 0H110L40 80Z",
          fill: "#fff",
          "fill-opacity": ".45"
        }),
        l("path", {
          d: "M160 60V170L90 115Z",
          fill: "#fff",
          "fill-opacity": ".45"
        })
      ], -1)),
      l("div", Fa, [
        l("div", Ja, [
          l("p", Qa, d(e.label), 1),
          e.pill ? (A(), t("span", qa, d(e.pill), 1)) : c("", !0)
        ]),
        l("p", Ma, d(e.value), 1),
        e.caption ? (A(), t("p", Ea, d(e.caption), 1)) : c("", !0),
        e.progress !== void 0 ? (A(), t("div", {
          key: 1,
          class: "mt-3 h-1.5 overflow-hidden rounded-full bg-brand-500",
          role: "progressbar",
          "aria-label": e.label,
          "aria-valuenow": e.progress,
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, [
          l("div", {
            class: "h-full rounded-full bg-brand-300",
            style: T({ width: `${e.progress}%` })
          }, null, 4)
        ], 8, Wa)) : c("", !0)
      ])
    ]));
  }
}), Ga = /* @__PURE__ */ b({
  __name: "BigStat",
  props: {
    value: {},
    unit: {},
    tone: { default: "ink" },
    size: { default: "lg" }
  },
  setup(e) {
    const a = { ink: "text-ink", brand: "text-brand-600", success: "text-success-600", warning: "text-warning-700", danger: "text-danger-600" }, s = { md: "text-2xl", lg: "text-[32px]", xl: "text-[40px]" };
    return (o, n) => (A(), t("span", {
      class: g(["inline-flex items-baseline gap-1 leading-none font-semibold tracking-tight tnum", a[e.tone]])
    }, [
      l("span", {
        class: g(s[e.size])
      }, d(e.value), 3),
      e.unit ? (A(), t("span", {
        key: 0,
        class: g(["text-sm font-normal tracking-normal", e.tone === "ink" ? "text-ink-2" : ""])
      }, d(e.unit), 3)) : c("", !0)
    ], 2));
  }
}), Ka = { class: "sr-only" }, Ua = /* @__PURE__ */ b({
  __name: "DeltaPill",
  props: {
    direction: { default: "up" },
    tone: { default: "good" }
  },
  setup(e) {
    const a = { good: "bg-success-100 text-success-700", bad: "bg-danger-100 text-danger-700", neutral: "bg-gray-100 text-gray-600" };
    return (s, o) => (A(), t("span", {
      class: g(["inline-flex items-center gap-1 rounded-xs px-2 py-0.5 text-xs font-medium", a[e.tone]])
    }, [
      (A(), t("svg", {
        width: "9",
        height: "8",
        viewBox: "0 0 9 8",
        "aria-hidden": "true",
        class: g(e.direction === "down" && "rotate-180")
      }, [...o[0] || (o[0] = [
        l("path", {
          d: "M4.5 0 9 8H0z",
          fill: "currentColor"
        }, null, -1)
      ])], 2)),
      l("span", Ka, d(e.direction === "up" ? "Up" : "Down"), 1),
      B(s.$slots, "default")
    ], 2));
  }
}), Ya = ["viewBox", "aria-label"], $a = ["points", "fill"], _a = ["points", "stroke"], ue = 200, el = /* @__PURE__ */ b({
  __name: "Sparkline",
  props: {
    data: {},
    tone: { default: "brand" },
    height: { default: 36 },
    label: { default: "Trend" }
  },
  setup(e) {
    const a = e, s = { brand: "#2563eb", success: "#15814c", danger: "#dc2626" }, o = L(() => {
      const u = Math.min(...a.data), f = Math.max(...a.data) - u || 1;
      return a.data.map((m, p) => [p / (a.data.length - 1) * ue, a.height - 3 - (m - u) / f * (a.height - 8)]);
    }), n = L(() => o.value.map((u) => u.join(",")).join(" ")), r = L(() => `0,${a.height} ${n.value} ${ue},${a.height}`);
    return (u, f) => (A(), t("svg", {
      viewBox: `0 0 ${ue} ${e.height}`,
      preserveAspectRatio: "none",
      class: "block w-full",
      style: T({ height: `${e.height}px` }),
      role: "img",
      "aria-label": e.label
    }, [
      l("polygon", {
        points: r.value,
        fill: s[e.tone],
        "fill-opacity": "0.12"
      }, null, 8, $a),
      l("polyline", {
        points: n.value,
        fill: "none",
        stroke: s[e.tone],
        "stroke-width": "2",
        "vector-effect": "non-scaling-stroke",
        "stroke-linejoin": "round"
      }, null, 8, _a)
    ], 12, Ya));
  }
}), Al = ["width", "height", "aria-label"], ye = /* @__PURE__ */ b({
  __name: "Spinner",
  props: {
    size: { default: 24 },
    label: { default: "Loading" }
  },
  setup(e) {
    return (a, s) => (A(), t("svg", {
      width: e.size,
      height: e.size,
      viewBox: "0 0 24 24",
      fill: "none",
      class: "animate-spin",
      role: "status",
      "aria-label": e.label
    }, [...s[0] || (s[0] = [
      l("circle", {
        cx: "12",
        cy: "12",
        r: "9.5",
        stroke: "#dbeafe",
        "stroke-width": "2.5"
      }, null, -1),
      l("path", {
        d: "M21.5 12A9.5 9.5 0 0 0 12 2.5",
        stroke: "#2563eb",
        "stroke-width": "2.5",
        "stroke-linecap": "round"
      }, null, -1)
    ])], 8, Al));
  }
}), tl = { class: "flex items-start justify-between gap-3" }, nl = {
  key: 0,
  class: "flex flex-1 flex-col items-center justify-center gap-2 text-center"
}, al = {
  key: 0,
  class: "mt-2 text-[13px] text-ink-2"
}, ll = {
  key: 1,
  class: "mt-2"
}, sl = { class: "mt-auto pt-3" }, of = /* @__PURE__ */ b({
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
    return (a, s) => (A(), t("article", {
      class: g(["flex min-h-[208px] flex-col overflow-hidden rounded-lg border border-line p-5 shadow-card", e.tone === "brand" ? "bg-gradient-to-b from-brand-50 to-surface to-55%" : e.tone === "danger" ? "bg-gradient-to-b from-danger-100 to-surface to-55%" : "bg-surface"])
    }, [
      l("div", tl, [
        i(q, {
          mono: "",
          class: g(e.tone === "brand" ? "!text-brand-700" : e.tone === "danger" ? "!text-danger-600" : "")
        }, {
          default: v(() => [
            h(d(e.label), 1)
          ]),
          _: 1
        }, 8, ["class"]),
        e.icon ? (A(), k(S, {
          key: 0,
          icon: e.icon,
          tone: e.tone === "danger" ? "danger" : "brand",
          size: "sm",
          class: "-mt-1 -mr-1"
        }, null, 8, ["icon", "tone"])) : c("", !0)
      ]),
      e.loading ? (A(), t("div", nl, [
        i(ye),
        s[0] || (s[0] = l("p", { class: "text-sm font-semibold text-ink" }, "Loading data", -1))
      ])) : (A(), t(y, { key: 1 }, [
        i(Ga, {
          class: "mt-2",
          value: e.value,
          unit: e.unit,
          tone: e.tone === "brand" ? "brand" : e.tone === "danger" ? "danger" : "ink"
        }, null, 8, ["value", "unit", "tone"]),
        e.caption ? (A(), t("p", al, d(e.caption), 1)) : c("", !0),
        e.delta ? (A(), t("div", ll, [
          i(Ua, {
            tone: e.deltaTone,
            direction: e.deltaTone === "neutral" ? "down" : "up"
          }, {
            default: v(() => [
              h(d(e.delta), 1)
            ]),
            _: 1
          }, 8, ["tone", "direction"])
        ])) : c("", !0),
        l("div", sl, [
          e.progress !== void 0 ? (A(), k(J, {
            key: 0,
            value: e.progress,
            size: "md",
            label: e.label
          }, null, 8, ["value", "label"])) : e.trend ? (A(), k(el, {
            key: 1,
            data: e.trend,
            tone: e.trendTone,
            label: `${e.label} trend`
          }, null, 8, ["data", "tone", "label"])) : c("", !0)
        ])
      ], 64))
    ], 2));
  }
}), ol = { class: "flex flex-col gap-2.5" }, rf = /* @__PURE__ */ b({
  __name: "LiveChecks",
  props: {
    checks: {}
  },
  setup(e) {
    return (a, s) => (A(), t("ul", ol, [
      (A(!0), t(y, null, z(e.checks, (o) => (A(), t("li", {
        key: o.label,
        class: "flex items-center gap-2.5 text-sm"
      }, [
        o.state === "running" ? (A(), k(ye, {
          key: 0,
          size: 18,
          label: `${o.label} running`
        }, null, 8, ["label"])) : o.state === "pass" ? (A(), k(X, {
          key: 1,
          name: "circle-check",
          size: 18,
          class: "text-success-600"
        })) : o.state === "fail" ? (A(), k(X, {
          key: 2,
          name: "circle-x",
          size: 18,
          class: "text-danger-600"
        })) : (A(), k(X, {
          key: 3,
          name: "circle",
          size: 18,
          class: "text-gray-300"
        })),
        l("span", {
          class: g(["flex-1", o.state === "pending" ? "text-ink-3" : "text-ink"])
        }, d(o.label), 3),
        o.detail ? (A(), t("span", {
          key: 4,
          class: g(["text-[13px]", o.state === "fail" ? "text-danger-700" : "text-ink-3"])
        }, d(o.detail), 3)) : c("", !0)
      ]))), 128))
    ]));
  }
}), rl = {
  key: 0,
  class: "block h-0.5 w-2.5 rounded bg-white"
}, dl = ["for"], il = {
  key: 0,
  class: "block text-[13px] leading-5 text-ink-3"
}, E = /* @__PURE__ */ b({
  __name: "Checkbox",
  props: /* @__PURE__ */ V({
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
    const a = O(e, "modelValue"), s = Pe();
    return (o, n) => (A(), t("div", {
      class: g(["flex items-start gap-2.5", e.disabled && "opacity-50"])
    }, [
      i(x(Dt), {
        id: x(s),
        modelValue: a.value,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => a.value = r),
        "aria-label": e.ariaLabel,
        disabled: e.disabled,
        class: g(["mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-[5px] border bg-surface transition-colors data-[state=checked]:border-brand-600 data-[state=checked]:bg-brand-600 data-[state=indeterminate]:border-brand-600 data-[state=indeterminate]:bg-brand-600 disabled:cursor-not-allowed", e.invalid ? "border-danger-500" : "border-line-strong"])
      }, {
        default: v(() => [
          i(x(Rt), { class: "text-white" }, {
            default: v(() => [
              a.value === "indeterminate" ? (A(), t("span", rl)) : (A(), k(X, {
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
      o.$slots.default ? (A(), t("label", {
        key: 0,
        for: x(s),
        class: "text-sm leading-[22px] text-ink select-none"
      }, [
        B(o.$slots, "default"),
        e.description ? (A(), t("span", il, d(e.description), 1)) : c("", !0)
      ], 8, dl)) : c("", !0)
    ], 2));
  }
}), ul = { class: "border-b border-line last:border-0" }, cl = { class: "flex flex-wrap items-center gap-x-6 gap-y-3 px-5 py-4" }, fl = { class: "min-w-56 flex-1" }, vl = { class: "flex flex-wrap items-center gap-2 text-[15px] font-semibold text-ink" }, bl = { class: "mt-1 text-[13px] text-ink-2" }, ml = { class: "flex flex-wrap gap-8" }, gl = { class: "eyebrow" }, xl = { class: "text-xs text-ink-2" }, hl = { class: "flex items-center gap-2" }, pl = {
  key: 0,
  class: "border-t border-line bg-gray-50 px-5 py-3 pl-14"
}, yl = { class: "mb-2 text-xs text-ink-2" }, kl = { class: "flex flex-col gap-2" }, wl = { class: "min-w-40 flex-1" }, Xl = { class: "font-mono text-[13px] font-medium text-ink" }, Pl = { class: "text-xs text-ink-2" }, zl = { class: "min-w-28 text-right" }, Ll = { class: "text-sm font-semibold text-ink tnum" }, Bl = { class: "text-xs text-ink-2" }, df = /* @__PURE__ */ b({
  __name: "LobFileGroup",
  props: /* @__PURE__ */ V({
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
  emits: /* @__PURE__ */ V(["review"], ["update:selected"]),
  setup(e, { emit: a }) {
    const s = e, o = a, n = N(s.defaultOpen), r = O(e, "selected");
    return (u, f) => (A(), t("section", ul, [
      l("div", cl, [
        i(E, {
          modelValue: r.value,
          "onUpdate:modelValue": f[0] || (f[0] = (m) => r.value = m),
          "aria-label": `Select ${e.title}`
        }, null, 8, ["modelValue", "aria-label"]),
        l("div", fl, [
          l("h3", vl, [
            h(d(e.title), 1),
            i(Q, { size: "sm" }, {
              default: v(() => [
                h(d(e.fileCount) + " " + d(e.fileCount === 1 ? "file" : "files"), 1)
              ]),
              _: 1
            })
          ]),
          l("p", bl, d(e.summary), 1)
        ]),
        l("dl", ml, [
          (A(!0), t(y, null, z(e.amounts, (m) => (A(), t("div", {
            key: m.label,
            class: "min-w-24 text-right"
          }, [
            l("dt", gl, d(m.label), 1),
            l("dd", {
              class: g(["mt-1 text-sm font-semibold tnum", m.highlight ? "text-warning-700" : "text-ink"])
            }, d(m.amount), 3),
            l("dd", xl, d(m.consents), 1)
          ]))), 128))
        ]),
        l("div", hl, [
          i(j, {
            size: "sm",
            onClick: f[1] || (f[1] = (m) => o("review"))
          }, {
            default: v(() => [...f[3] || (f[3] = [
              h("Review", -1)
            ])]),
            _: 1
          }),
          i(I, {
            icon: n.value ? "chevron-down" : "chevron-right",
            label: n.value ? "Hide files" : "Show files",
            variant: "outline",
            size: "md",
            "aria-expanded": !!n.value,
            onClick: f[2] || (f[2] = (m) => n.value = !n.value)
          }, null, 8, ["icon", "label", "aria-expanded"])
        ])
      ]),
      n.value && e.files?.length ? (A(), t("div", pl, [
        l("p", yl, "Files in " + d(e.title), 1),
        l("ul", kl, [
          (A(!0), t(y, null, z(e.files, (m) => (A(), t("li", {
            key: m.name,
            class: "flex flex-wrap items-center gap-4 rounded-lg border border-line bg-surface px-4 py-3"
          }, [
            l("div", wl, [
              l("p", Xl, d(m.name), 1),
              l("p", Pl, d(m.meta), 1)
            ]),
            i(Q, {
              variant: m.statusVariant,
              icon: m.statusIcon
            }, {
              default: v(() => [
                h(d(m.status), 1)
              ]),
              _: 2
            }, 1032, ["variant", "icon"]),
            l("div", zl, [
              l("p", Ll, d(m.amount), 1),
              l("p", Bl, d(m.consents), 1)
            ]),
            i(j, {
              variant: "secondary",
              size: "sm"
            }, {
              default: v(() => [
                h(d(m.action), 1)
              ]),
              _: 2
            }, 1024)
          ]))), 128))
        ])
      ])) : c("", !0)
    ]));
  }
}), Hl = ["width", "height", "viewBox", "aria-label"], Cl = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Ol = {
  key: 0,
  class: "absolute inset-0 flex flex-col items-center justify-center text-center"
}, Vl = {
  key: 0,
  class: "text-xs text-ink-3"
}, Dl = /* @__PURE__ */ b({
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
    const a = e, s = L(() => {
      const n = a.segments.reduce((m, p) => m + p.value, 0) || 1, r = (a.size - a.thickness) / 2, u = 2 * Math.PI * r;
      let f = 0;
      return a.segments.map((m) => {
        const p = m.value / n, w = a.segments.length > 1 ? a.gap / 100 * u : 0, P = { ...m, r, dash: `${Math.max(p * u - w, 0.5)} ${u}`, offset: -f * u - w / 2 };
        return f += p, P;
      });
    }), o = L(() => a.segments.map((n) => `${n.label}: ${n.value}`).join(", "));
    return (n, r) => (A(), t("div", {
      class: "relative inline-block shrink-0",
      style: T({ width: `${e.size}px`, height: `${e.size}px` })
    }, [
      (A(), t("svg", {
        width: e.size,
        height: e.size,
        viewBox: `0 0 ${e.size} ${e.size}`,
        role: "img",
        "aria-label": o.value,
        class: "-rotate-90"
      }, [
        (A(!0), t(y, null, z(s.value, (u) => (A(), t("circle", {
          key: u.label,
          cx: e.size / 2,
          cy: e.size / 2,
          r: u.r,
          fill: "none",
          stroke: u.color,
          "stroke-width": e.thickness,
          "stroke-dasharray": u.dash,
          "stroke-dashoffset": u.offset
        }, null, 8, Cl))), 128))
      ], 8, Hl)),
      e.center ? (A(), t("div", Ol, [
        l("span", {
          class: "font-semibold tracking-tight text-ink tnum",
          style: T({ fontSize: `${Math.max(e.size * 0.12, 15)}px` })
        }, d(e.center), 5),
        e.caption ? (A(), t("span", Vl, d(e.caption), 1)) : c("", !0)
      ])) : c("", !0)
    ], 4));
  }
}), Rl = { class: "flex flex-wrap items-center gap-x-8 gap-y-5 rounded-xl border border-line bg-surface p-6 shadow-card" }, Tl = { class: "grid min-w-0 flex-1 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6" }, Zl = { class: "eyebrow flex items-center gap-1.5" }, Nl = { class: "mt-2 flex items-baseline gap-1.5" }, jl = { class: "text-[32px] leading-10 font-semibold tracking-tight text-ink tnum" }, Sl = {
  key: 0,
  class: "text-sm font-medium text-ink-2"
}, Il = ["aria-label"], Fl = {
  key: 0,
  class: "mt-1 text-[13px] leading-[18px] text-ink-2"
}, uf = /* @__PURE__ */ b({
  __name: "MetricStrip",
  props: {
    segments: {},
    center: {},
    caption: {},
    metrics: {}
  },
  setup(e) {
    return (a, s) => (A(), t("section", Rl, [
      i(Dl, {
        segments: e.segments,
        center: e.center,
        caption: e.caption,
        size: 164,
        thickness: 20
      }, null, 8, ["segments", "center", "caption"]),
      l("dl", Tl, [
        (A(!0), t(y, null, z(e.metrics, (o, n) => (A(), t("div", {
          key: o.label,
          class: g(["min-w-0", n > 0 && "lg:border-l lg:border-line lg:pl-6"])
        }, [
          l("dt", Zl, [
            o.dot ? (A(), t("span", {
              key: 0,
              class: "size-2 rounded-full",
              style: T({ background: o.dot }),
              "aria-hidden": "true"
            }, null, 4)) : c("", !0),
            h(d(o.label), 1)
          ]),
          l("dd", Nl, [
            l("span", jl, d(o.value), 1),
            o.share ? (A(), t("span", Sl, d(o.share), 1)) : c("", !0),
            o.downloadable ? (A(), t("button", {
              key: 1,
              type: "button",
              class: "text-ink-2 hover:text-brand-600",
              "aria-label": `Download ${o.label}`
            }, [
              i(X, { name: "download" })
            ], 8, Il)) : c("", !0)
          ]),
          o.caption ? (A(), t("dd", Fl, d(o.caption), 1)) : c("", !0)
        ], 2))), 128))
      ])
    ]));
  }
}), Jl = { class: "rounded-xl border border-line bg-surface p-6 shadow-card" }, Ql = { class: "eyebrow text-center" }, ql = { class: "mt-6 grid gap-6 md:auto-cols-fr md:grid-flow-col" }, Ml = ["aria-current"], El = { class: "portal-type-body-emphasis mt-3" }, Wl = { class: "portal-type-page-subtitle mt-1 max-w-56" }, cf = /* @__PURE__ */ b({
  __name: "NextSteps",
  props: {
    title: { default: "What happens next" },
    steps: {}
  },
  setup(e) {
    return (a, s) => (A(), t("section", Jl, [
      l("p", Ql, d(e.title), 1),
      l("ol", ql, [
        (A(!0), t(y, null, z(e.steps, (o, n) => (A(), t("li", {
          key: o.title,
          class: "relative flex flex-col items-center text-center",
          "aria-current": o.state === "active" ? "step" : void 0
        }, [
          n < e.steps.length - 1 ? (A(), t("span", {
            key: 0,
            class: g(["absolute top-5 left-1/2 hidden h-0.5 w-full md:block", o.state === "done" ? "bg-success-600" : "bg-line"]),
            "aria-hidden": "true"
          }, null, 2)) : c("", !0),
          l("span", {
            class: g(["relative flex size-10 items-center justify-center rounded-full", o.state === "done" ? "bg-success-600 text-white" : o.state === "active" ? "border-2 border-brand-600 bg-surface text-brand-600" : "border border-brand-200 bg-brand-50 text-brand-600"])
          }, [
            i(X, {
              name: o.state === "done" ? "check" : o.icon,
              size: o.state === "done" ? 16 : 18
            }, null, 8, ["name", "size"])
          ], 2),
          l("p", El, d(o.title), 1),
          l("p", Wl, d(o.description), 1)
        ], 8, Ml))), 128))
      ])
    ]));
  }
}), Gl = { class: "inline-flex items-center gap-1.5 rounded-full border border-line bg-gray-100/70 px-3 py-1 text-[13px] text-gray-600" }, Kl = /* @__PURE__ */ b({
  __name: "LockedPill",
  setup(e) {
    return (a, s) => (A(), t("span", Gl, [
      i(X, {
        name: "lock",
        size: 13
      }),
      B(a.$slots, "default")
    ]));
  }
}), Ul = {
  class: "inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-surface py-1.5 pr-4 pl-3 text-[13px] text-ink-2 shadow-xs",
  role: "timer"
}, Yl = {
  key: 0,
  class: "text-ink-3"
}, $l = { class: "rounded-[5px] bg-brand-50 px-2 py-1 font-mono text-xs font-medium text-brand-600 tnum" }, _l = { key: 0 }, es = /* @__PURE__ */ b({
  __name: "CountdownPill",
  props: {
    label: {},
    parts: {},
    unit: {}
  },
  setup(e) {
    return (a, s) => (A(), t("span", Ul, [
      i(X, { name: "clock" }),
      h(" " + d(e.label) + " ", 1),
      (A(!0), t(y, null, z(e.parts, (o, n) => (A(), t(y, { key: n }, [
        n ? (A(), t("span", Yl, ":")) : c("", !0),
        l("span", $l, d(o), 1)
      ], 64))), 128)),
      e.unit ? (A(), t("span", _l, d(e.unit), 1)) : c("", !0)
    ]));
  }
}), As = { class: "overflow-hidden rounded-xl border border-line bg-surface shadow-card" }, ts = { class: "flex items-center justify-between gap-4 px-6 py-4" }, ns = { class: "text-lg text-ink" }, as = { class: "text-center" }, ls = { class: "text-2xl leading-7 font-semibold text-ink tnum" }, ss = { class: "p-5" }, os = {
  key: 0,
  class: "absolute top-7 bottom-0 left-[12px] border-l border-dashed border-brand-300",
  "aria-hidden": "true"
}, rs = { class: "flex flex-wrap items-center gap-x-4 gap-y-2" }, ds = { class: "min-w-48 flex-1" }, is = { class: "text-base font-medium text-ink" }, us = { class: "font-mono text-xs text-ink-2 tnum" }, cs = ["aria-expanded", "aria-label", "onClick"], fs = {
  key: 1,
  class: "mt-3 divide-y divide-line rounded-md border border-line"
}, vs = {
  key: 1,
  class: "size-2 rounded-full bg-brand-600"
}, bs = { class: "min-w-40 flex-1 text-sm text-ink" }, ms = { class: "sr-only" }, gs = {
  key: 0,
  class: "text-xs text-ink-3"
}, ff = /* @__PURE__ */ b({
  __name: "OnboardingPath",
  props: {
    title: {},
    percent: {},
    stages: {}
  },
  emits: ["task"],
  setup(e, { emit: a }) {
    const s = e, o = a, n = N(new Set(s.stages.map((f, m) => f.tasks ? m : -1)));
    function r(f) {
      n.value.has(f) ? n.value.delete(f) : n.value.add(f);
    }
    const u = (f) => f.tasks?.filter((m) => m.done).length ?? 0;
    return (f, m) => (A(), t("section", As, [
      l("header", ts, [
        l("h2", ns, d(e.title), 1),
        l("div", as, [
          l("p", ls, d(e.percent) + "%", 1),
          m[0] || (m[0] = l("p", { class: "eyebrow-mono !text-[10px]" }, "Complete", -1))
        ])
      ]),
      i(J, {
        value: e.percent,
        size: "xs",
        label: e.title
      }, null, 8, ["value", "label"]),
      l("ol", ss, [
        (A(!0), t(y, null, z(e.stages, (p, w) => (A(), t("li", {
          key: p.title,
          class: "relative pb-6 pl-9 last:pb-0"
        }, [
          w < e.stages.length - 1 ? (A(), t("span", os)) : c("", !0),
          l("span", {
            class: g(["absolute top-0 left-0 flex size-6 items-center justify-center rounded-full text-xs font-medium", p.tasks ? "bg-brand-600 text-white" : "border border-line-strong bg-gray-50 text-gray-600"])
          }, d(w + 1), 3),
          l("div", rs, [
            l("div", ds, [
              l("h3", is, d(p.title), 1),
              p.learnMore ? (A(), k(he, {
                key: 0,
                size: "sm",
                class: "mt-0.5"
              }, {
                default: v(() => [...m[1] || (m[1] = [
                  h("Learn more", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            p.tasks ? (A(), t(y, { key: 0 }, [
              l("span", us, d(u(p)) + "/" + d(p.tasks.length), 1),
              i(J, {
                class: "!w-24",
                value: u(p),
                max: p.tasks.length,
                size: "xs",
                label: `${p.title} progress`
              }, null, 8, ["value", "max", "label"])
            ], 64)) : c("", !0),
            p.lockedText ? (A(), k(Kl, { key: 1 }, {
              default: v(() => [
                h(d(p.lockedText), 1)
              ]),
              _: 2
            }, 1024)) : c("", !0),
            p.countdown ? (A(), k(es, ze({
              key: 2,
              ref_for: !0
            }, p.countdown), null, 16)) : c("", !0),
            p.tasks ? (A(), t("button", {
              key: 3,
              type: "button",
              class: "text-ink-3 hover:text-ink",
              "aria-expanded": n.value.has(w),
              "aria-label": `Toggle ${p.title}`,
              onClick: (P) => r(w)
            }, [
              i(X, {
                name: n.value.has(w) ? "chevron-up" : "chevron-down"
              }, null, 8, ["name"])
            ], 8, cs)) : c("", !0)
          ]),
          p.tasks && n.value.has(w) ? (A(), t("ul", fs, [
            (A(!0), t(y, null, z(p.tasks, (P) => (A(), t("li", {
              key: P.label,
              class: "flex flex-wrap items-center gap-3 px-4 py-3"
            }, [
              l("span", {
                class: g(["flex size-5 shrink-0 items-center justify-center rounded-full", P.done ? "bg-success-600 text-white" : "border-2 border-brand-600"])
              }, [
                P.done ? (A(), k(X, {
                  key: 0,
                  name: "check",
                  size: 12,
                  "stroke-width": 3
                })) : (A(), t("span", vs))
              ], 2),
              i(S, {
                icon: P.icon,
                tone: P.done ? "neutral" : "brand",
                size: "xs"
              }, null, 8, ["icon", "tone"]),
              l("span", bs, [
                h(d(P.label), 1),
                l("span", ms, d(P.done ? " (done)" : " (to do)"), 1)
              ]),
              P.meta ? (A(), t("span", gs, d(P.meta), 1)) : c("", !0),
              P.cta ? (A(), k(j, {
                key: 1,
                size: "sm",
                "icon-right": "arrow-right",
                onClick: (D) => o("task", P)
              }, {
                default: v(() => [
                  h(d(P.cta), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])) : c("", !0)
            ]))), 128))
          ])) : c("", !0)
        ]))), 128))
      ])
    ]));
  }
}), xs = { class: "flex flex-wrap items-start gap-4 border-b border-line pb-5" }, hs = { class: "min-w-56 flex-1" }, ps = { class: "text-xl font-semibold tracking-tight text-ink" }, ys = { class: "mt-1 text-sm text-ink-2" }, ks = { class: "text-right" }, ws = { class: "mt-1.5 text-[13px] text-ink-3" }, Xs = { class: "mt-5 grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-6" }, Ps = { class: "eyebrow flex items-center gap-1.5" }, zs = ["aria-label"], Ls = { class: "mt-0.5 text-[13px] text-ink-3" }, vf = /* @__PURE__ */ b({
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
    const a = { neutral: "text-ink", success: "text-success-600", warning: "text-warning-700" };
    return (s, o) => (A(), t("section", {
      class: g(["rounded-xl border bg-gradient-to-br to-surface to-40% p-6", e.tone === "pending" ? "border-warning-200 from-warning-50" : "border-success-500/40 from-success-50"])
    }, [
      l("header", xs, [
        i(S, {
          icon: e.tone === "pending" ? "clock" : "check",
          tone: "solid-success",
          size: "lg",
          class: g(e.tone === "pending" && "!bg-warning-500")
        }, null, 8, ["icon", "class"]),
        l("div", hs, [
          l("h2", ps, d(e.title), 1),
          l("p", ys, d(e.description), 1)
        ]),
        l("div", ks, [
          i(Q, {
            variant: e.tone === "pending" ? "warning" : "success",
            dot: ""
          }, {
            default: v(() => [
              h(d(e.status), 1)
            ]),
            _: 1
          }, 8, ["variant"]),
          l("p", ws, d(e.time), 1)
        ])
      ]),
      l("ul", Xs, [
        (A(!0), t(y, null, z(e.stats, (n) => (A(), t("li", {
          key: n.label,
          class: "flex gap-3"
        }, [
          i(S, {
            icon: n.icon,
            tone: n.tone
          }, null, 8, ["icon", "tone"]),
          l("div", null, [
            l("p", Ps, [
              h(d(n.label), 1),
              l("button", {
                type: "button",
                class: "text-ink-4 hover:text-brand-600",
                "aria-label": `Download ${n.label}`
              }, [
                i(X, {
                  name: "download",
                  size: 13
                })
              ], 8, zs)
            ]),
            l("p", {
              class: g(["mt-1 text-[26px] leading-8 font-semibold tracking-tight tnum", a[n.tone]])
            }, d(n.value), 3),
            l("p", Ls, d(n.caption), 1)
          ])
        ]))), 128))
      ])
    ], 2));
  }
}), Bs = { class: "portal-type-section-title" }, Hs = {
  key: 0,
  class: "portal-type-body mt-0.5 !text-ink-2"
}, Cs = { class: "mt-5 flex flex-col gap-3.5" }, Os = ["aria-current"], Vs = {
  key: 0,
  class: "sr-only"
}, Ds = { class: "mt-5 flex items-center gap-3" }, Rs = {
  key: 2,
  class: "mt-3 text-[13px] text-ink-2"
}, bf = /* @__PURE__ */ b({
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
  setup(e, { emit: a }) {
    const s = a;
    return (o, n) => (A(), t("section", null, [
      l("h2", Bs, d(e.title), 1),
      e.description ? (A(), t("p", Hs, d(e.description), 1)) : c("", !0),
      l("ol", Cs, [
        (A(!0), t(y, null, z(e.steps, (r) => (A(), t("li", {
          key: r.label,
          class: g(["flex items-center gap-3 text-sm", r.state === "active" ? "font-medium text-ink" : "text-ink-2"]),
          "aria-current": r.state === "active" ? "step" : void 0
        }, [
          l("span", {
            class: g(["size-2 shrink-0 rounded-full", r.state === "done" ? "bg-success-600" : r.state === "active" ? "bg-brand-600" : "bg-gray-300"]),
            "aria-hidden": "true"
          }, null, 2),
          h(" " + d(r.label), 1),
          r.state === "done" ? (A(), t("span", Vs, " (done)")) : c("", !0)
        ], 10, Os))), 128))
      ]),
      l("div", Ds, [
        i(J, {
          value: e.percent,
          tone: e.tone === "success" ? "success" : "gradient",
          size: "sm",
          label: e.title
        }, null, 8, ["value", "tone", "label"]),
        l("span", {
          class: g(["text-[13px] font-semibold tnum", e.tone === "success" ? "text-success-600" : "text-brand-600"])
        }, d(e.percent) + "%", 3)
      ]),
      e.estimate ? (A(), t("p", {
        key: 1,
        class: g(["mt-4 inline-block rounded-full px-3.5 py-1.5 text-[13px]", e.tone === "success" ? "border border-success-500/30 bg-success-100 text-success-700" : "bg-brand-50 text-brand-700"])
      }, "Estimated time: " + d(e.estimate), 3)) : c("", !0),
      e.cancelLabel ? (A(), t("p", Rs, [
        n[1] || (n[1] = h("Something wrong? ", -1)),
        l("button", {
          type: "button",
          class: "text-brand-600 underline underline-offset-2",
          onClick: n[0] || (n[0] = (r) => s("cancel"))
        }, d(e.cancelLabel), 1)
      ])) : c("", !0)
    ]));
  }
}), Ts = { class: "overflow-hidden rounded-xl bg-[#e4e8f0]" }, Zs = { class: "grid items-center gap-8 rounded-xl border border-line bg-surface p-6 lg:grid-cols-2" }, Ns = {
  key: 0,
  class: "px-5 py-3.5 text-center text-[13px] text-ink"
}, mf = /* @__PURE__ */ b({
  __name: "ProcessingPanel",
  setup(e) {
    return (a, s) => (A(), t("section", Ts, [
      l("div", Zs, [
        l("div", null, [
          B(a.$slots, "art")
        ]),
        l("div", null, [
          B(a.$slots, "default")
        ])
      ]),
      a.$slots.footer ? (A(), t("p", Ns, [
        B(a.$slots, "footer")
      ])) : c("", !0)
    ]));
  }
}), js = { class: "min-w-64 flex-1" }, Ss = { class: "flex flex-wrap items-center gap-2 text-[15px] font-semibold text-ink" }, Is = {
  key: 0,
  class: "mt-1 max-w-2xl text-sm leading-[22px] text-ink-2"
}, Fs = {
  key: 0,
  class: "flex flex-wrap items-center gap-2"
}, gf = /* @__PURE__ */ b({
  __name: "ResultCard",
  props: {
    tone: { default: "neutral" },
    icon: {},
    title: {},
    tag: {},
    description: {}
  },
  setup(e) {
    const a = e, s = {
      brand: { edge: "border-l-brand-500", bg: "bg-gradient-to-r from-surface to-brand-50", border: "border-brand-200/70", tile: "brand", tag: "brand" },
      warning: { edge: "border-l-warning-600", bg: "bg-surface", border: "border-line", tile: "warning", tag: "warning" },
      neutral: { edge: "border-l-gray-300", bg: "bg-surface", border: "border-line", tile: "neutral", tag: "neutral" },
      success: { edge: "border-l-success-600", bg: "bg-gradient-to-r from-surface to-success-50", border: "border-success-500/30", tile: "success", tag: "success" },
      attention: { edge: "border-l-warning-500", bg: "bg-gradient-to-r from-surface to-warning-50", border: "border-warning-200", tile: "warning", tag: "warning" },
      danger: { edge: "border-l-danger-600", bg: "bg-gradient-to-r from-surface to-danger-50", border: "border-danger-200", tile: "danger", tag: "danger" }
    }, o = L(() => s[a.tone]);
    return (n, r) => (A(), t("article", {
      class: g(["flex flex-wrap items-center gap-4 rounded-xl border border-l-4 p-5", [o.value.edge, o.value.bg, o.value.border]])
    }, [
      i(S, {
        icon: e.icon,
        tone: o.value.tile,
        size: "lg"
      }, null, 8, ["icon", "tone"]),
      l("div", js, [
        l("h3", Ss, [
          h(d(e.title) + " ", 1),
          e.tag ? (A(), k(Q, {
            key: 0,
            variant: o.value.tag
          }, {
            default: v(() => [
              h(d(e.tag), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ]),
        e.description || n.$slots.default ? (A(), t("p", Is, [
          B(n.$slots, "default", {}, () => [
            h(d(e.description), 1)
          ])
        ])) : c("", !0)
      ]),
      n.$slots.actions ? (A(), t("div", Fs, [
        B(n.$slots, "actions")
      ])) : c("", !0)
    ], 2));
  }
}), Js = {
  class: "rounded-xl border border-line bg-gray-50 p-3",
  "aria-hidden": "true"
}, Qs = { class: "rounded-lg border border-line bg-surface shadow-card" }, qs = { class: "flex items-center justify-between gap-3 border-b border-line px-3 py-2" }, Ms = { class: "flex items-center gap-1.5 truncate font-mono text-[11px] font-medium text-ink" }, Es = { class: "flex items-center gap-1 rounded-full bg-success-100 px-2 py-0.5 text-[10px] font-medium text-success-700" }, Ws = { class: "relative overflow-hidden px-3 py-2 font-mono text-[10.5px] leading-[1.7] whitespace-pre text-ink-2" }, Gs = { class: "flex items-center gap-2 px-3 pb-2.5" }, xf = /* @__PURE__ */ b({
  __name: "ScanPreview",
  props: {
    fileName: {},
    lines: { default: 12 }
  },
  setup(e) {
    const a = (s) => Array.from({ length: 4 }, (o, n) => (s * 2654435761 * (n + 3) >>> 0).toString(16).padStart(8, "0").slice(0, 8)).join("  ");
    return (s, o) => (A(), t("div", Js, [
      l("div", Qs, [
        l("div", qs, [
          l("span", Ms, [
            i(X, {
              name: "lock",
              size: 12,
              class: "text-success-600"
            }),
            h(d(e.fileName), 1)
          ]),
          l("span", Es, [
            i(X, {
              name: "lock",
              size: 10
            }),
            o[0] || (o[0] = h("Encrypted", -1))
          ])
        ]),
        l("div", Ws, [
          (A(!0), t(y, null, z(e.lines, (n) => (A(), t("div", {
            key: n,
            class: g(n === 2 && "bg-brand-50")
          }, d(a(n)), 3))), 128))
        ]),
        l("div", Gs, [
          i(G, {
            tile: "",
            size: 14
          }),
          o[1] || (o[1] = l("span", { class: "text-[11px] text-ink-2" }, "Scanning", -1))
        ])
      ])
    ]));
  }
}), Ks = { class: "rounded-lg border border-brand-200/70 bg-brand-50 p-3" }, Us = { class: "portal-type-label" }, Ys = { class: "mt-0.5 font-mono text-[11px] text-ink-2" }, hf = /* @__PURE__ */ b({
  __name: "SetupCard",
  props: {
    title: { default: "Finish your setup" },
    done: {},
    total: {},
    cta: { default: "Continue setup" }
  },
  setup(e) {
    return (a, s) => (A(), t("section", Ks, [
      l("p", Us, d(e.title), 1),
      l("p", Ys, d(e.done) + " of " + d(e.total) + " complete", 1),
      i(J, {
        class: "mt-2",
        value: e.done,
        max: e.total,
        size: "xs",
        label: e.title
      }, null, 8, ["value", "max", "label"]),
      i(he, {
        size: "sm",
        class: "mt-2"
      }, {
        default: v(() => [
          h(d(e.cta), 1)
        ]),
        _: 1
      })
    ]));
  }
}), $s = ["id", "type", "placeholder", "disabled", "readonly", "aria-invalid", "aria-label"], _s = {
  key: 2,
  class: "text-[13px] text-ink-3"
}, ie = /* @__PURE__ */ b({
  __name: "TextInput",
  props: /* @__PURE__ */ V({
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
    const a = O(e, "modelValue");
    return (s, o) => (A(), t("div", {
      class: g(["flex h-[var(--input-height-md)] items-center gap-2 rounded-md border bg-surface px-3 transition-shadow focus-within:ring-3", [
        e.invalid ? "border-danger-500 focus-within:ring-danger-100" : "border-line focus-within:border-brand-500 focus-within:ring-brand-100",
        e.disabled && "cursor-not-allowed bg-gray-100 opacity-70",
        e.readonly && "bg-gray-50"
      ]])
    }, [
      e.icon ? (A(), k(X, {
        key: 0,
        name: e.icon,
        class: "text-ink-3"
      }, null, 8, ["name"])) : c("", !0),
      e.prefix ? (A(), t("span", {
        key: 1,
        class: g(["text-sm text-ink-3", e.mono && "font-mono"])
      }, d(e.prefix), 3)) : c("", !0),
      W(l("input", {
        id: e.id,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => a.value = n),
        type: e.type,
        placeholder: e.placeholder,
        disabled: e.disabled,
        readonly: e.readonly,
        "aria-invalid": e.invalid || void 0,
        "aria-label": e.ariaLabel,
        class: g(["h-full w-full min-w-0 bg-transparent text-[13px] text-ink outline-none placeholder:text-ink-4 disabled:cursor-not-allowed", e.mono && "font-mono"])
      }, null, 10, $s), [
        [Ne, a.value]
      ]),
      e.suffix ? (A(), t("span", _s, d(e.suffix), 1)) : c("", !0),
      B(s.$slots, "end")
    ], 2));
  }
}), eo = { class: "flex flex-col gap-1.5" }, Ao = ["for"], to = {
  key: 0,
  class: "text-danger-500"
}, no = {
  key: 1,
  role: "alert",
  class: "flex items-center gap-1 text-[13px] text-danger-700"
}, ao = {
  key: 2,
  class: "text-[13px] text-ink-3"
}, lo = /* @__PURE__ */ b({
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
    return (a, s) => (A(), t("div", eo, [
      e.label ? (A(), t("label", {
        key: 0,
        for: e.forId,
        class: g(["portal-type-label", e.disabled ? "text-ink-3" : "text-ink"])
      }, [
        h(d(e.label), 1),
        e.required ? (A(), t("span", to, " *")) : c("", !0)
      ], 10, Ao)) : c("", !0),
      B(a.$slots, "default"),
      e.error ? (A(), t("p", no, [
        i(X, {
          name: "circle-alert",
          size: 14
        }),
        h(d(e.error), 1)
      ])) : e.hint ? (A(), t("p", ao, d(e.hint), 1)) : c("", !0)
    ]));
  }
}), so = {
  key: 0,
  class: "flex items-start gap-3 rounded-lg border border-success-500/30 bg-success-50 p-4"
}, oo = { class: "text-[13px] text-ink-2" }, ro = { class: "portal-type-body-emphasis" }, io = { class: "mt-0.5" }, uo = {
  key: 0,
  class: "font-mono"
}, co = {
  key: 1,
  class: "flex flex-col gap-4 rounded-lg border border-line bg-surface p-4"
}, fo = { class: "text-[13px]" }, pf = /* @__PURE__ */ b({
  __name: "SignatureBlock",
  props: /* @__PURE__ */ V({
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
    const a = O(e, "name"), s = O(e, "accepted");
    return (o, n) => e.signed ? (A(), t("section", so, [
      i(X, {
        name: "shield-check",
        size: 20,
        class: "text-success-600"
      }),
      l("div", oo, [
        l("p", ro, "Signed by " + d(e.signed.name), 1),
        l("p", io, [
          h(d(e.signed.time), 1),
          e.signed.ip ? (A(), t("span", uo, " · " + d(e.signed.ip), 1)) : c("", !0)
        ])
      ])
    ])) : (A(), t("section", co, [
      i(lo, {
        label: "Type your full name",
        required: ""
      }, {
        default: v(() => [
          i(ie, {
            modelValue: a.value,
            "onUpdate:modelValue": n[0] || (n[0] = (r) => a.value = r),
            placeholder: "Full name",
            "aria-label": "Full name"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }),
      i(E, {
        modelValue: s.value,
        "onUpdate:modelValue": n[1] || (n[1] = (r) => s.value = r)
      }, {
        default: v(() => [
          l("span", fo, "I have read and accept " + d(e.agreement || "this agreement") + " on behalf of my organisation.", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), vo = { class: "rounded-lg border border-line bg-surface p-4 shadow-card" }, bo = { class: "text-sm font-medium text-ink" }, mo = {
  key: 0,
  class: "mt-1 text-[13px] text-ink-3"
}, yf = /* @__PURE__ */ b({
  __name: "SummaryStat",
  props: {
    value: {},
    label: {},
    detail: {},
    tone: { default: "ink" }
  },
  setup(e) {
    const a = { ink: "text-ink", danger: "text-danger-600", warning: "text-warning-700", success: "text-success-600", brand: "text-brand-600" };
    return (s, o) => (A(), t("article", vo, [
      l("p", {
        class: g(["text-[28px] leading-9 font-semibold tracking-tight tnum", a[e.tone]])
      }, d(e.value), 3),
      l("p", bo, d(e.label), 1),
      e.detail ? (A(), t("p", mo, d(e.detail), 1)) : c("", !0)
    ]));
  }
}), go = { class: "rounded-xl border border-line bg-surface p-5 shadow-card" }, xo = { class: "mt-4 text-sm font-semibold text-ink-2" }, ho = { class: "mt-3 flex flex-col gap-3" }, po = { class: "sr-only" }, yo = { class: "text-[13px] text-ink-3" }, kf = /* @__PURE__ */ b({
  __name: "UploadChecklist",
  props: {
    title: { default: "Upload checklist" },
    items: {}
  },
  setup(e) {
    const a = e, s = L(() => Math.round(a.items.filter((o) => o.done).length / a.items.length * 100));
    return (o, n) => (A(), t("section", go, [
      i(q, { mono: "" }, {
        default: v(() => [
          h(d(e.title), 1)
        ]),
        _: 1
      }),
      l("p", {
        class: g(["mt-2 text-xl font-semibold tnum", s.value ? "text-brand-600" : "text-ink-3"])
      }, d(s.value) + "%", 3),
      i(J, {
        class: "mt-2",
        value: s.value,
        label: e.title
      }, null, 8, ["value", "label"]),
      l("p", xo, d(s.value === 100 ? "All set" : "What's pending?"), 1),
      l("ul", ho, [
        (A(!0), t(y, null, z(e.items, (r) => (A(), t("li", {
          key: r.label,
          class: "flex items-start gap-2.5"
        }, [
          l("span", {
            class: g(["mt-px flex size-[18px] shrink-0 items-center justify-center rounded-full", r.done ? "bg-success-600 text-white" : "border border-line-strong"])
          }, [
            r.done ? (A(), k(X, {
              key: 0,
              name: "check",
              size: 11,
              "stroke-width": 3
            })) : c("", !0)
          ], 2),
          l("div", null, [
            l("p", {
              class: g(["text-sm", r.done ? "text-ink" : "text-ink-2"])
            }, [
              h(d(r.label), 1),
              l("span", po, d(r.done ? " (done)" : " (pending)"), 1)
            ], 2),
            l("p", yo, d(r.detail), 1)
          ])
        ]))), 128))
      ])
    ]));
  }
}), ko = { class: "relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-50/70 to-brand-50 px-8 py-9" }, wo = { class: "relative max-w-3xl" }, Xo = { class: "mt-2 text-[36px] leading-[44px] font-semibold tracking-tight text-ink" }, Po = { class: "text-brand-600" }, zo = { class: "mt-4 text-[15px] leading-[26px] text-gray-700" }, wf = /* @__PURE__ */ b({
  __name: "WelcomeHero",
  props: {
    eyebrow: {},
    lead: {},
    name: {},
    description: {}
  },
  setup(e) {
    return (a, s) => (A(), t("section", ko, [
      s[0] || (s[0] = l("svg", {
        class: "absolute top-0 right-0 h-full",
        viewBox: "0 0 340 230",
        fill: "none",
        "aria-hidden": "true"
      }, [
        l("path", {
          d: "M0 0H200L0 110Z",
          fill: "#dbe7fe"
        }),
        l("path", {
          d: "M340 40V230L150 145Z",
          fill: "#d3e1fd"
        })
      ], -1)),
      l("div", wo, [
        i(q, {
          mono: "",
          class: "!text-brand-700"
        }, {
          default: v(() => [
            h(d(e.eyebrow), 1)
          ]),
          _: 1
        }),
        l("h1", Xo, [
          h(d(e.lead) + " ", 1),
          l("span", Po, d(e.name) + ".", 1)
        ]),
        l("p", zo, d(e.description), 1)
      ])
    ]));
  }
}), Lo = ["viewBox", "aria-label"], Bo = ["id"], Ho = ["x1", "x2", "y1", "y2"], Co = ["x", "y"], Oo = ["x", "y"], Vo = ["d", "fill"], Do = ["d"], Ro = { key: 0 }, To = ["x1", "x2", "y1", "y2"], Zo = ["cx", "cy"], No = ["x", "y"], K = 640, Xf = /* @__PURE__ */ b({
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
    const a = e, s = { t: 10, r: 8, b: 26, l: 40 }, o = Pe(), n = N(null), r = L(() => {
      const C = Math.min(...a.data), R = Math.max(...a.data), H = Math.max(Math.ceil((R - C) / (a.yTicks - 1) / 5) * 5, 1), Z = Math.floor(C / H) * H;
      return { min: Z, max: Z + H * (a.yTicks - 1), step: H };
    }), u = (C) => s.l + C / (a.data.length - 1) * (K - s.l - s.r), f = (C) => s.t + (1 - (C - r.value.min) / (r.value.max - r.value.min)) * (a.height - s.t - s.b), m = L(() => a.data.map((C, R) => `${R ? "L" : "M"}${u(R).toFixed(1)} ${f(C).toFixed(1)}`).join(" ")), p = L(() => `${m.value} L${u(a.data.length - 1)} ${a.height - s.b} L${u(0)} ${a.height - s.b} Z`), w = L(() => Array.from({ length: a.yTicks }, (C, R) => r.value.min + R * r.value.step)), P = L(() => a.xLabels.map((C, R) => ({ label: C, at: u(R / Math.max(a.xLabels.length - 1, 1) * (a.data.length - 1)) })));
    function D(C) {
      const R = C.currentTarget.getBoundingClientRect(), H = (C.clientX - R.left) / R.width * K;
      n.value = Math.max(0, Math.min(a.data.length - 1, Math.round((H - s.l) / (K - s.l - s.r) * (a.data.length - 1))));
    }
    return (C, R) => (A(), t("svg", {
      viewBox: `0 0 ${K} ${e.height}`,
      class: "block w-full",
      role: "img",
      "aria-label": e.label,
      onMousemove: D,
      onMouseleave: R[0] || (R[0] = (H) => n.value = null)
    }, [
      l("defs", null, [
        l("linearGradient", {
          id: x(o),
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [...R[1] || (R[1] = [
          l("stop", {
            offset: "0",
            "stop-color": "#2563eb",
            "stop-opacity": ".16"
          }, null, -1),
          l("stop", {
            offset: "1",
            "stop-color": "#2563eb",
            "stop-opacity": "0"
          }, null, -1)
        ])], 8, Bo)
      ]),
      (A(!0), t(y, null, z(w.value, (H) => (A(), t("g", { key: H }, [
        l("line", {
          x1: s.l,
          x2: K - s.r,
          y1: f(H),
          y2: f(H),
          stroke: "#e6eaf2",
          "stroke-dasharray": "3 4"
        }, null, 8, Ho),
        l("text", {
          x: s.l - 8,
          y: f(H) + 4,
          "text-anchor": "end",
          "font-size": "11",
          fill: "#6b7280"
        }, d(H) + d(e.ySuffix), 9, Co)
      ]))), 128)),
      (A(!0), t(y, null, z(P.value, (H) => (A(), t("text", {
        key: H.label,
        x: H.at,
        y: e.height - 6,
        "text-anchor": "middle",
        "font-size": "11",
        fill: "#6b7280"
      }, d(H.label), 9, Oo))), 128)),
      l("path", {
        d: p.value,
        fill: `url(#${x(o)})`
      }, null, 8, Vo),
      l("path", {
        d: m.value,
        fill: "none",
        stroke: "#2563eb",
        "stroke-width": "2",
        "stroke-linejoin": "round"
      }, null, 8, Do),
      n.value !== null ? (A(), t("g", Ro, [
        l("line", {
          x1: u(n.value),
          x2: u(n.value),
          y1: s.t,
          y2: e.height - s.b,
          stroke: "#0b1a33",
          "stroke-opacity": ".25"
        }, null, 8, To),
        l("circle", {
          cx: u(n.value),
          cy: f(e.data[n.value]),
          r: "4",
          fill: "#2563eb",
          stroke: "#fff",
          "stroke-width": "2"
        }, null, 8, Zo),
        l("text", {
          x: u(n.value),
          y: Math.max(f(e.data[n.value]) - 10, 12),
          "text-anchor": "middle",
          "font-size": "12",
          "font-weight": "600",
          fill: "#0b1a33"
        }, d(e.data[n.value]) + d(e.ySuffix), 9, No)
      ])) : c("", !0)
    ], 40, Lo));
  }
}), jo = { class: "w-full divide-y divide-line" }, So = { class: "flex min-w-0 flex-1 items-center gap-1.5 text-gray-700" }, Io = { class: "truncate" }, Fo = ["aria-label", "onClick"], Jo = { class: "font-semibold text-ink tnum" }, Qo = {
  key: 0,
  class: "w-8 text-right text-xs text-ink-3 tnum"
}, Pf = /* @__PURE__ */ b({
  __name: "ChartLegend",
  props: {
    items: {}
  },
  emits: ["expand"],
  setup(e, { emit: a }) {
    const s = a;
    return (o, n) => (A(), t("ul", jo, [
      (A(!0), t(y, null, z(e.items, (r) => (A(), t("li", {
        key: r.label,
        class: "flex items-center gap-2.5 py-3.5 text-sm first:pt-0 last:pb-0"
      }, [
        l("span", {
          class: "size-2.5 shrink-0 rounded-[3px]",
          style: T({ background: r.color }),
          "aria-hidden": "true"
        }, null, 4),
        l("span", So, [
          l("span", Io, d(r.label), 1),
          r.expandable ? (A(), t("button", {
            key: 0,
            type: "button",
            class: "flex size-4 shrink-0 items-center justify-center rounded-xs border border-line text-xs leading-none text-brand-600 hover:bg-brand-50",
            "aria-label": `Show ${r.label} breakdown`,
            onClick: (u) => s("expand", r.label)
          }, "+", 8, Fo)) : c("", !0)
        ]),
        l("span", Jo, d(r.value), 1),
        r.share ? (A(), t("span", Qo, d(r.share), 1)) : c("", !0)
      ]))), 128))
    ]));
  }
}), qo = ["viewBox", "aria-label"], Mo = ["points", "fill"], Eo = ["x", "y"], Wo = ["x", "y"], M = 420, zf = /* @__PURE__ */ b({
  __name: "FunnelChart",
  props: {
    stages: {},
    height: { default: 280 }
  },
  setup(e) {
    const a = e, s = ["#1d4ed8", "#2563eb", "#3b82f6", "#2563eb", "#1e40af", "#1d4ed8"], o = L(() => {
      const n = a.height / a.stages.length, r = 0.46 / a.stages.length;
      return a.stages.map((u, f) => {
        const m = (P) => M * r * P / 2, p = m(f), w = m(f + 1);
        return { ...u, color: s[f % s.length], y: f * n, h: n, points: `${p},${f * n} ${M - p},${f * n} ${M - w},${f * n + n - 3} ${w},${f * n + n - 3}` };
      });
    });
    return (n, r) => (A(), t("svg", {
      viewBox: `0 0 ${M} ${e.height}`,
      class: "mx-auto block w-full max-w-md",
      role: "img",
      "aria-label": e.stages.map((u) => `${u.label} ${u.value}`).join(", ")
    }, [
      (A(!0), t(y, null, z(o.value, (u) => (A(), t("g", {
        key: u.label
      }, [
        l("polygon", {
          points: u.points,
          fill: u.color
        }, null, 8, Mo),
        l("text", {
          x: M / 2,
          y: u.y + u.h / 2 - 3,
          "text-anchor": "middle",
          "font-size": "14",
          "font-weight": "600",
          fill: "#fff"
        }, d(u.value), 9, Eo),
        l("text", {
          x: M / 2,
          y: u.y + u.h / 2 + 13,
          "text-anchor": "middle",
          "font-size": "10.5",
          fill: "#fff"
        }, d(u.label), 9, Wo)
      ]))), 128))
    ], 8, qo));
  }
}), Go = ["viewBox", "aria-label"], Ko = ["d", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Uo = {
  key: 0,
  class: "absolute inset-x-0 bottom-0 text-center"
}, Yo = { class: "text-[28px] leading-8 font-semibold tracking-tight text-ink tnum" }, $o = {
  key: 0,
  class: "eyebrow"
}, Lf = /* @__PURE__ */ b({
  __name: "GaugeChart",
  props: {
    segments: {},
    center: {},
    caption: {},
    width: { default: 280 },
    thickness: { default: 38 }
  },
  setup(e) {
    const a = e, s = L(() => {
      const r = a.segments.reduce((w, P) => w + P.value, 0) || 1, u = (a.width - a.thickness) / 2, f = Math.PI * u, m = a.segments.length > 1 ? 1.5 : 0;
      let p = 0;
      return a.segments.map((w) => {
        const P = w.value / r * f, D = { ...w, r: u, dash: `${Math.max(P - m, 0.5)} ${2 * f}`, offset: -p };
        return p += P, D;
      });
    }), o = L(() => a.width / 2 + 2), n = L(() => a.segments.map((r) => `${r.label}: ${r.value}`).join(", "));
    return (r, u) => (A(), t("div", {
      class: "relative mx-auto",
      style: T({ width: `${e.width}px`, maxWidth: "100%" })
    }, [
      (A(), t("svg", {
        viewBox: `0 0 ${e.width} ${o.value}`,
        class: "block w-full",
        role: "img",
        "aria-label": n.value
      }, [
        (A(!0), t(y, null, z(s.value, (f) => (A(), t("path", {
          key: f.label,
          d: `M ${e.thickness / 2} ${e.width / 2} A ${f.r} ${f.r} 0 0 1 ${e.width - e.thickness / 2} ${e.width / 2}`,
          fill: "none",
          stroke: f.color,
          "stroke-width": e.thickness,
          "stroke-dasharray": f.dash,
          "stroke-dashoffset": f.offset
        }, null, 8, Ko))), 128))
      ], 8, Go)),
      e.center ? (A(), t("div", Uo, [
        l("p", Yo, d(e.center), 1),
        e.caption ? (A(), t("p", $o, d(e.caption), 1)) : c("", !0)
      ])) : c("", !0)
    ], 4));
  }
}), _o = ["aria-label"], er = { class: "text-[11px] font-medium text-ink tnum" }, Ar = ["title"], Bf = /* @__PURE__ */ b({
  __name: "MiniBars",
  props: {
    items: {},
    height: { default: 160 }
  },
  setup(e) {
    const a = e, s = L(() => Math.max(...a.items.map((o) => o.value), 1));
    return (o, n) => (A(), t("div", {
      class: "flex items-end gap-2",
      style: T({ height: `${e.height + 36}px` }),
      role: "img",
      "aria-label": e.items.map((r) => `${r.label} ${r.display ?? r.value}`).join(", ")
    }, [
      (A(!0), t(y, null, z(e.items, (r) => (A(), t("div", {
        key: r.label,
        class: "flex min-w-0 flex-1 flex-col items-center gap-1.5"
      }, [
        l("span", er, d(r.display ?? r.value), 1),
        l("div", {
          class: "w-full max-w-11 rounded-t-xs bg-brand-500 transition-colors hover:bg-brand-700",
          style: T({ height: `${r.value / s.value * e.height}px` })
        }, null, 4),
        l("span", {
          class: "w-full truncate text-center text-[11px] text-ink-3",
          title: r.label
        }, d(r.label), 9, Ar)
      ]))), 128))
    ], 12, _o));
  }
}), tr = { class: "flex flex-col gap-4" }, nr = {
  key: 0,
  class: "mt-px flex size-[22px] shrink-0 items-center justify-center rounded-full bg-brand-50 text-[11px] font-semibold text-brand-700"
}, ar = { class: "min-w-0 flex-1" }, lr = { class: "mb-1.5 flex justify-between gap-2 text-sm" }, sr = { class: "h-1.5 overflow-hidden rounded-full bg-gray-100" }, Hf = /* @__PURE__ */ b({
  __name: "RankedBars",
  props: {
    items: {},
    rank: { type: Boolean },
    max: {}
  },
  setup(e) {
    const a = e, s = L(() => a.max ?? Math.max(...a.items.map((n) => n.value))), o = (n) => ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"][Math.min(n, 4)];
    return (n, r) => (A(), t("ol", tr, [
      (A(!0), t(y, null, z(e.items, (u, f) => (A(), t("li", {
        key: u.label,
        class: "flex items-start gap-2.5"
      }, [
        e.rank ? (A(), t("span", nr, d(f + 1), 1)) : c("", !0),
        l("div", ar, [
          l("div", lr, [
            l("span", {
              class: g(e.rank ? "font-medium text-ink" : "text-gray-700")
            }, d(u.label), 3),
            l("span", {
              class: g(["font-semibold text-ink tnum", e.rank && "font-mono text-[13px]"])
            }, d(u.display ?? u.value), 3)
          ]),
          l("div", sr, [
            l("div", {
              class: "h-full rounded-full",
              style: T({ width: `${u.value / s.value * 100}%`, background: e.rank ? "#3b82f6" : o(f) })
            }, null, 4)
          ])
        ])
      ]))), 128))
    ]));
  }
}), or = { class: "m-0" }, rr = ["viewBox", "aria-label"], dr = ["d", "fill"], ir = ["x", "y", "height", "fill"], ur = ["x", "y", "text-anchor"], cr = {
  key: 0,
  "font-size": "11",
  fill: "#6b7280"
}, fr = ["x", "y", "text-anchor"], vr = {
  key: 0,
  class: "mt-2 text-center text-xs text-ink-3"
}, _ = 14, Cf = /* @__PURE__ */ b({
  __name: "SankeyFlow",
  props: {
    nodes: {},
    links: {},
    width: { default: 1e3 },
    height: { default: 400 },
    footnote: {}
  },
  setup(e) {
    const a = e, s = L(() => Object.fromEntries(a.nodes.map((n) => [n.id, n]))), o = L(
      () => a.links.map((n) => {
        const r = s.value[n.from], u = s.value[n.to], f = n.h ?? r.h, m = n.h2 ?? n.h ?? u.h, p = r.y + (n.fromY ?? 0), w = u.y + (n.toY ?? 0), P = r.x + _, D = u.x, C = (P + D) / 2;
        return {
          d: `M${P} ${p} C${C} ${p} ${C} ${w} ${D} ${w} L${D} ${w + m} C${C} ${w + m} ${C} ${p + f} ${P} ${p + f} Z`,
          fill: n.color ?? "#dbeafe"
        };
      })
    );
    return (n, r) => (A(), t("figure", or, [
      (A(), t("svg", {
        viewBox: `0 0 ${e.width} ${e.height}`,
        class: "block w-full",
        role: "img",
        "aria-label": e.nodes.map((u) => `${u.label} ${u.value}`).join(", ")
      }, [
        (A(!0), t(y, null, z(o.value, (u, f) => (A(), t("path", {
          key: f,
          d: u.d,
          fill: u.fill,
          "fill-opacity": ".45"
        }, null, 8, dr))), 128)),
        (A(!0), t(y, null, z(e.nodes, (u) => (A(), t("g", {
          key: u.id
        }, [
          l("rect", {
            x: u.x,
            y: u.y,
            width: _,
            height: Math.max(u.h, 2),
            rx: "1",
            fill: u.color ?? "#bfdbfe"
          }, null, 8, ir),
          l("text", {
            x: u.align === "left" ? u.x - 10 : u.x + _ + 10,
            y: u.y + u.h / 2 - 2,
            "text-anchor": u.align === "left" ? "end" : "start",
            "font-size": "14",
            fill: "#1f2937"
          }, [
            h(d(u.label), 1),
            u.sub ? (A(), t("tspan", cr, d(u.sub), 1)) : c("", !0)
          ], 8, ur),
          l("text", {
            x: u.align === "left" ? u.x - 10 : u.x + _ + 10,
            y: u.y + u.h / 2 + 16,
            "text-anchor": u.align === "left" ? "end" : "start",
            "font-size": "15",
            "font-weight": "500",
            fill: "#0b1a33"
          }, d(u.value), 9, fr)
        ]))), 128))
      ], 8, rr)),
      e.footnote ? (A(), t("figcaption", vr, d(e.footnote), 1)) : c("", !0)
    ]));
  }
}), br = { class: "m-0" }, mr = { class: "mb-2 flex flex-wrap justify-end gap-x-4 gap-y-1" }, gr = ["viewBox", "aria-label"], xr = ["x1", "x2", "y1", "y2", "stroke-dasharray"], hr = ["x", "y"], pr = ["x", "y", "width", "height", "fill"], yr = ["x", "y"], ce = 640, Of = /* @__PURE__ */ b({
  __name: "StackedBars",
  props: {
    categories: {},
    series: {},
    ticks: { default: 5 },
    format: { type: Function, default: (e) => e >= 1e3 ? `${e / 1e3}k` : String(e) },
    height: { default: 240 }
  },
  setup(e) {
    const a = e, s = { t: 10, r: 8, b: 26, l: 44 }, o = L(() => {
      const p = Math.max(...a.categories.map((P, D) => a.series.reduce((C, R) => C + R.values[D], 0)), 1), w = Math.pow(10, Math.floor(Math.log10(p)));
      return Math.ceil(p / w) * w;
    }), n = (p) => s.t + (1 - p / o.value) * (a.height - s.t - s.b), r = L(() => Array.from({ length: a.ticks + 1 }, (p, w) => o.value / a.ticks * w)), u = L(() => (ce - s.l - s.r) / a.categories.length), f = L(
      () => a.categories.map((p, w) => {
        let P = 0;
        return {
          label: p,
          x: s.l + u.value * w + u.value * 0.34,
          w: u.value * 0.32,
          parts: a.series.map((D) => {
            const C = { color: D.color, y: n(P + D.values[w]), h: n(P) - n(P + D.values[w]), label: D.label, value: D.values[w] };
            return P += D.values[w], C;
          })
        };
      })
    ), m = L(() => a.categories.map((p, w) => `${p}: ${a.series.map((P) => `${P.label} ${a.format(P.values[w])}`).join(", ")}`).join("; "));
    return (p, w) => (A(), t("figure", br, [
      l("ul", mr, [
        (A(!0), t(y, null, z(e.series, (P) => (A(), t("li", {
          key: P.label,
          class: "flex items-center gap-1.5 text-xs text-ink-2"
        }, [
          l("span", {
            class: "size-2.5 rounded-[3px]",
            style: T({ background: P.color }),
            "aria-hidden": "true"
          }, null, 4),
          h(d(P.label), 1)
        ]))), 128))
      ]),
      (A(), t("svg", {
        viewBox: `0 0 ${ce} ${e.height}`,
        class: "block w-full",
        role: "img",
        "aria-label": m.value
      }, [
        (A(!0), t(y, null, z(r.value, (P) => (A(), t("g", { key: P }, [
          l("line", {
            x1: s.l,
            x2: ce - s.r,
            y1: n(P),
            y2: n(P),
            stroke: "#e4e8f0",
            "stroke-dasharray": P ? "3 4" : void 0
          }, null, 8, xr),
          l("text", {
            x: s.l - 8,
            y: n(P) + 4,
            "text-anchor": "end",
            "font-size": "11",
            fill: "#5c6781"
          }, d(e.format(P)), 9, hr)
        ]))), 128)),
        (A(!0), t(y, null, z(f.value, (P) => (A(), t("g", {
          key: P.label
        }, [
          (A(!0), t(y, null, z(P.parts, (D) => (A(), t("rect", {
            key: D.label,
            x: P.x,
            y: D.y,
            width: P.w,
            height: D.h,
            fill: D.color
          }, [
            l("title", null, d(P.label) + ", " + d(D.label) + ": " + d(e.format(D.value)), 1)
          ], 8, pr))), 128)),
          l("text", {
            x: P.x + P.w / 2,
            y: e.height - 8,
            "text-anchor": "middle",
            "font-size": "11",
            fill: "#5c6781"
          }, d(P.label), 9, yr)
        ]))), 128))
      ], 8, gr))
    ]));
  }
}), kr = { class: "relative w-full max-w-[460px]" }, wr = ["viewBox"], Xr = ["onMouseenter"], Pr = ["x", "y", "width", "height", "fill", "stroke"], zr = ["x", "y", "fill"], Lr = { class: "mt-2 flex items-center justify-between gap-4" }, Br = {
  class: "text-xs text-ink-2",
  "aria-live": "polite"
}, Hr = { class: "font-semibold text-ink" }, F = 46, Vf = /* @__PURE__ */ b({
  __name: "StateTileMap",
  props: {
    values: {},
    unit: {}
  },
  setup(e) {
    const a = e, s = [
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
    ], o = N(null), n = L(() => Math.max(...Object.values(a.values), 1));
    function r(f) {
      const m = a.values[f];
      if (m === void 0) return "#f3f4f7";
      const p = m / n.value;
      return p > 0.8 ? "#2563eb" : p > 0.5 ? "#60a5fa" : p > 0.3 ? "#93c5fd" : p > 0.12 ? "#bfdbfe" : "#dbeafe";
    }
    const u = L(() => s.find((f) => f[0] === o.value));
    return (f, m) => (A(), t("div", kr, [
      (A(), t("svg", {
        viewBox: `0 0 ${F * 10} ${F * 7}`,
        class: "block w-full max-w-[460px]",
        role: "img",
        "aria-label": "India state-wise values, tile map"
      }, [
        (A(), t(y, null, z(s, ([p, w, P, D]) => l("g", {
          key: p,
          onMouseenter: (C) => o.value = p,
          onMouseleave: m[0] || (m[0] = (C) => o.value = null)
        }, [
          l("title", null, d(w) + ": " + d(e.values[p] ?? "No data") + " " + d(e.unit), 1),
          l("rect", {
            x: P * F + 2,
            y: D * F + 2,
            width: F - 4,
            height: F - 4,
            rx: "6",
            fill: r(p),
            stroke: o.value === p ? "#0b1a33" : "none",
            "stroke-width": "1.5"
          }, null, 8, Pr),
          l("text", {
            x: P * F + F / 2,
            y: D * F + F / 2 + 4,
            "text-anchor": "middle",
            "font-size": "11",
            "font-weight": "500",
            fill: (e.values[p] ?? 0) / n.value > 0.5 ? "#fff" : "#374151",
            "pointer-events": "none"
          }, d(p), 9, zr)
        ], 40, Xr)), 64))
      ], 8, wr)),
      l("div", Lr, [
        m[1] || (m[1] = l("div", { class: "w-48" }, [
          l("div", { class: "h-1.5 rounded-full bg-gradient-to-r from-brand-100 to-brand-600" }),
          l("div", { class: "mt-1 flex justify-between font-mono text-[10px] text-ink-3" }, [
            l("span", null, "Low"),
            l("span", null, "High")
          ])
        ], -1)),
        l("p", Br, [
          u.value ? (A(), t(y, { key: 0 }, [
            h(d(u.value[1]) + ": ", 1),
            l("b", Hr, d(e.values[u.value[0]] ?? "No data") + " " + d(e.unit), 1)
          ], 64)) : c("", !0)
        ])
      ])
    ]));
  }
}), Cr = /* @__PURE__ */ b({
  __name: "Skeleton",
  props: {
    width: { default: "100%" },
    height: { default: "14px" },
    circle: { type: Boolean }
  },
  setup(e) {
    return (a, s) => (A(), t("span", {
      class: g(["block animate-shimmer bg-[linear-gradient(90deg,#f3f4f7_25%,#e6eaf2_50%,#f3f4f7_75%)] bg-[length:200%_100%]", e.circle ? "rounded-full" : "rounded-xs"]),
      style: T({ width: e.width, height: e.height }),
      "aria-hidden": "true"
    }, null, 6));
  }
}), Or = ["role"], Vr = { class: "mt-3 text-sm font-semibold text-ink" }, Dr = { class: "mt-3 text-sm font-semibold text-ink" }, Rr = {
  key: 0,
  class: "mt-1.5 max-w-sm text-[13px] leading-5 text-ink-2"
}, Tr = /* @__PURE__ */ b({
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
  setup(e, { emit: a }) {
    const s = e, o = a, n = L(() => s.icon ?? (s.kind === "error" ? "warning" : "database"));
    return (r, u) => (A(), t("div", {
      class: "flex flex-col items-center justify-center px-6 py-8 text-center",
      style: T({ minHeight: e.minHeight }),
      role: e.kind === "error" ? "alert" : "status"
    }, [
      e.kind === "loading" ? (A(), t(y, { key: 0 }, [
        i(ye),
        l("p", Vr, d(e.title || "Loading data"), 1)
      ], 64)) : (A(), t(y, { key: 1 }, [
        i(S, {
          icon: n.value,
          tone: e.kind === "error" ? "danger" : "brand",
          size: "sm"
        }, null, 8, ["icon", "tone"]),
        l("p", Dr, d(e.title), 1),
        e.description ? (A(), t("p", Rr, d(e.description), 1)) : c("", !0),
        e.actionLabel ? (A(), k(j, {
          key: 1,
          class: "mt-4",
          size: "sm",
          variant: e.kind === "error" ? "secondary" : "primary",
          icon: e.kind === "error" ? "refresh" : void 0,
          onClick: u[0] || (u[0] = (f) => o("action"))
        }, {
          default: v(() => [
            h(d(e.actionLabel), 1)
          ]),
          _: 1
        }, 8, ["variant", "icon"])) : c("", !0)
      ], 64))
    ], 12, Or));
  }
}), Zr = { class: "overflow-x-auto" }, Nr = { class: "w-full border-collapse text-sm" }, jr = { class: "sr-only" }, Sr = { class: "border-b border-line bg-[#f5f8fd]" }, Ir = {
  key: 0,
  class: "w-10",
  scope: "col"
}, Fr = {
  key: 1,
  class: "w-10 pl-4",
  scope: "col"
}, Jr = ["aria-sort"], Qr = ["onClick"], qr = { key: 1 }, Mr = ["colspan"], Er = ["onClick"], Wr = {
  key: 0,
  class: "pl-4"
}, Gr = ["aria-expanded", "onClick"], Kr = {
  key: 0,
  class: "border-b border-line bg-brand-50/30"
}, Ur = ["colspan"], Yr = {
  key: 0,
  class: "border-t border-line bg-brand-50 font-semibold text-ink"
}, Df = /* @__PURE__ */ b({
  __name: "DataTable",
  props: /* @__PURE__ */ V({
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
  emits: /* @__PURE__ */ V(["rowClick"], ["update:selected"]),
  setup(e, { emit: a }) {
    const s = e, o = a, n = O(e, "selected"), r = N(null), u = N(null), f = L(() => {
      if (!r.value) return s.rows;
      const { key: C, dir: R } = r.value;
      return [...s.rows].sort((H, Z) => H[C] > Z[C] ? R : H[C] < Z[C] ? -R : 0);
    }), m = L(() => n.value.length ? n.value.length === s.rows.length ? !0 : "indeterminate" : !1);
    function p(C) {
      r.value = r.value?.key !== C ? { key: C, dir: 1 } : r.value.dir === 1 ? { key: C, dir: -1 } : null;
    }
    function w() {
      n.value = m.value === !0 ? [] : s.rows.map((C) => C[s.rowKey]);
    }
    function P(C) {
      n.value = n.value.includes(C) ? n.value.filter((R) => R !== C) : [...n.value, C];
    }
    const D = L(() => s.columns.length + (s.selectable ? 1 : 0) + (s.expandable ? 1 : 0));
    return (C, R) => (A(), t("div", Zr, [
      l("table", Nr, [
        l("caption", jr, d(e.caption), 1),
        l("thead", null, [
          l("tr", Sr, [
            e.expandable ? (A(), t("th", Ir, [...R[1] || (R[1] = [
              l("span", { class: "sr-only" }, "Expand", -1)
            ])])) : c("", !0),
            e.selectable ? (A(), t("th", Fr, [
              i(E, {
                "model-value": m.value,
                "aria-label": "Select all rows",
                "onUpdate:modelValue": w
              }, null, 8, ["model-value"])
            ])) : c("", !0),
            (A(!0), t(y, null, z(e.columns, (H) => (A(), t("th", {
              key: H.key,
              scope: "col",
              class: g(["eyebrow !font-semibold px-4 py-3 whitespace-nowrap", H.align === "right" ? "text-right" : "text-left"]),
              style: T({ width: H.width }),
              "aria-sort": r.value?.key === H.key ? r.value.dir === 1 ? "ascending" : "descending" : void 0
            }, [
              H.sortable ? (A(), t("button", {
                key: 0,
                type: "button",
                class: "inline-flex items-center gap-1 uppercase hover:text-ink",
                onClick: (Z) => p(H.key)
              }, [
                h(d(H.label) + " ", 1),
                i(X, {
                  name: r.value?.key === H.key && r.value.dir === -1 ? "chevron-down" : r.value?.key === H.key ? "chevron-up" : "chevron-down",
                  size: 12,
                  class: g(r.value?.key === H.key ? "text-brand-600" : "opacity-40")
                }, null, 8, ["name", "class"])
              ], 8, Qr)) : (A(), t(y, { key: 1 }, [
                h(d(H.label), 1)
              ], 64))
            ], 14, Jr))), 128))
          ])
        ]),
        l("tbody", null, [
          e.loading ? (A(), t(y, { key: 0 }, z(5, (H) => l("tr", {
            key: H,
            class: "border-b border-line last:border-0"
          }, [
            (A(!0), t(y, null, z(D.value, (Z) => (A(), t("td", {
              key: Z,
              class: "px-4 py-4"
            }, [
              i(Cr, {
                width: Z === 1 ? "70%" : "55%"
              }, null, 8, ["width"])
            ]))), 128))
          ])), 64)) : e.rows.length ? (A(!0), t(y, { key: 2 }, z(f.value, (H) => (A(), t(y, {
            key: H[e.rowKey]
          }, [
            l("tr", {
              class: g(["border-b border-line transition-colors last:border-0 hover:bg-gray-50", [n.value.includes(H[e.rowKey]) && "bg-brand-50/60", u.value === H[e.rowKey] && "bg-brand-50/40"]]),
              onClick: (Z) => o("rowClick", H)
            }, [
              e.expandable ? (A(), t("td", Wr, [
                l("button", {
                  type: "button",
                  "aria-expanded": u.value === H[e.rowKey],
                  "aria-label": "Toggle row detail",
                  class: "text-ink-3 hover:text-ink",
                  onClick: U((Z) => u.value = u.value === H[e.rowKey] ? null : H[e.rowKey], ["stop"])
                }, [
                  i(X, {
                    name: "chevron-right",
                    class: g(["transition-transform", u.value === H[e.rowKey] && "rotate-90 text-brand-600"])
                  }, null, 8, ["class"])
                ], 8, Gr)
              ])) : c("", !0),
              e.selectable ? (A(), t("td", {
                key: 1,
                class: "pl-4",
                onClick: R[0] || (R[0] = U(() => {
                }, ["stop"]))
              }, [
                i(E, {
                  "model-value": n.value.includes(H[e.rowKey]),
                  "aria-label": `Select row ${H[e.rowKey]}`,
                  "onUpdate:modelValue": (Z) => P(H[e.rowKey])
                }, null, 8, ["model-value", "aria-label", "onUpdate:modelValue"])
              ])) : c("", !0),
              (A(!0), t(y, null, z(e.columns, (Z) => (A(), t("td", {
                key: Z.key,
                class: g(["px-4 py-3.5 text-gray-700", [Z.align === "right" && "text-right", Z.mono && "font-mono text-[13px]"]])
              }, [
                B(C.$slots, `cell-${Z.key}`, {
                  row: H,
                  value: H[Z.key]
                }, () => [
                  h(d(H[Z.key]), 1)
                ])
              ], 2))), 128))
            ], 10, Er),
            e.expandable && u.value === H[e.rowKey] ? (A(), t("tr", Kr, [
              l("td", {
                colspan: D.value,
                class: "px-6 py-5"
              }, [
                B(C.$slots, "expanded", { row: H })
              ], 8, Ur)
            ])) : c("", !0)
          ], 64))), 128)) : (A(), t("tr", qr, [
            l("td", { colspan: D.value }, [
              i(Tr, {
                title: e.emptyTitle,
                description: e.emptyDescription
              }, {
                default: v(() => [
                  B(C.$slots, "empty")
                ]),
                _: 3
              }, 8, ["title", "description"])
            ], 8, Mr)
          ]))
        ]),
        C.$slots.foot ? (A(), t("tfoot", Yr, [
          B(C.$slots, "foot")
        ])) : c("", !0)
      ])
    ]));
  }
}), $r = /* @__PURE__ */ b({
  __name: "SearchInput",
  props: /* @__PURE__ */ V({
    placeholder: { default: "Search" },
    shortcut: {}
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const a = O(e, "modelValue");
    return (s, o) => (A(), k(ie, {
      modelValue: a.value,
      "onUpdate:modelValue": o[1] || (o[1] = (n) => a.value = n),
      type: "search",
      icon: "search",
      placeholder: e.placeholder,
      "aria-label": e.placeholder
    }, {
      end: v(() => [
        a.value ? (A(), t("button", {
          key: 0,
          type: "button",
          "aria-label": "Clear search",
          class: "text-ink-3 hover:text-ink",
          onClick: o[0] || (o[0] = (n) => a.value = "")
        }, [
          i(X, {
            name: "x",
            size: 14
          })
        ])) : e.shortcut ? (A(), k(Y, { key: 1 }, {
          default: v(() => [
            h(d(e.shortcut), 1)
          ]),
          _: 1
        })) : c("", !0)
      ]),
      _: 1
    }, 8, ["modelValue", "placeholder", "aria-label"]));
  }
}), _r = { class: "overflow-hidden rounded-xl border border-line bg-surface shadow-card" }, ed = { class: "flex flex-wrap items-center gap-3 border-b border-line px-4 py-3" }, Ad = { class: "min-w-48 flex-1" }, td = { class: "portal-type-panel-title" }, nd = {
  key: 0,
  class: "portal-type-body-muted"
}, ad = { class: "w-56" }, ld = ["src", "title"], sd = ["aria-label"], od = { class: "portal-stack-dense mx-auto max-w-2xl rounded-sm bg-surface p-8 text-[13px] leading-6 text-gray-700 shadow-card" }, Rf = /* @__PURE__ */ b({
  __name: "DocumentViewer",
  props: {
    title: {},
    meta: {},
    src: {},
    height: { default: "480px" }
  },
  emits: ["download"],
  setup(e, { emit: a }) {
    const s = a, o = N("");
    return (n, r) => (A(), t("section", _r, [
      l("header", ed, [
        l("div", Ad, [
          l("p", td, d(e.title), 1),
          e.meta ? (A(), t("p", nd, d(e.meta), 1)) : c("", !0)
        ]),
        l("div", ad, [
          i($r, {
            modelValue: o.value,
            "onUpdate:modelValue": r[0] || (r[0] = (u) => o.value = u),
            placeholder: "Find in document"
          }, null, 8, ["modelValue"])
        ]),
        i(j, {
          variant: "secondary",
          icon: "download",
          onClick: r[1] || (r[1] = (u) => s("download"))
        }, {
          default: v(() => [...r[2] || (r[2] = [
            h("Download", -1)
          ])]),
          _: 1
        })
      ]),
      e.src ? (A(), t("iframe", {
        key: 0,
        src: e.src,
        title: e.title,
        class: "block w-full",
        style: T({ height: e.height })
      }, null, 12, ld)) : (A(), t("div", {
        key: 1,
        class: "overflow-auto bg-gray-100 p-6",
        style: T({ height: e.height }),
        tabindex: "0",
        "aria-label": e.title
      }, [
        l("article", od, [
          B(n.$slots, "default")
        ])
      ], 12, sd))
    ]));
  }
}), rd = { class: "flex flex-col gap-3" }, dd = { class: "flex flex-wrap items-center gap-2" }, id = {
  key: 0,
  class: "flex flex-wrap items-center gap-2"
}, ud = ["aria-label", "onClick"], Tf = /* @__PURE__ */ b({
  __name: "FilterBar",
  props: {
    chips: { default: () => [] },
    chipsModifiers: {}
  },
  emits: ["update:chips"],
  setup(e) {
    const a = O(e, "chips");
    return (s, o) => (A(), t("div", rd, [
      l("div", dd, [
        B(s.$slots, "default")
      ]),
      a.value.length ? (A(), t("div", id, [
        (A(!0), t(y, null, z(a.value, (n) => (A(), t("span", {
          key: n.key,
          class: "inline-flex items-center gap-1 rounded-full bg-brand-50 py-1 pr-1.5 pl-2.5 text-xs font-medium text-brand-700"
        }, [
          h(d(n.label) + " ", 1),
          l("button", {
            type: "button",
            "aria-label": `Remove filter ${n.label}`,
            class: "rounded-full hover:bg-brand-100",
            onClick: (r) => a.value = a.value.filter((u) => u.key !== n.key)
          }, [
            i(X, {
              name: "x",
              size: 12
            })
          ], 8, ud)
        ]))), 128)),
        l("button", {
          type: "button",
          class: "text-xs font-medium text-ink-2 hover:text-ink hover:underline",
          onClick: o[0] || (o[0] = (n) => a.value = [])
        }, "Clear all")
      ])) : c("", !0)
    ]));
  }
}), cd = ["title"], fd = { class: "sr-only" }, Zf = /* @__PURE__ */ b({
  __name: "HashBadge",
  props: {
    hash: {},
    verified: { type: Boolean, default: !0 }
  },
  setup(e) {
    const a = e, s = `${a.hash.slice(0, 6)}…${a.hash.slice(-4)}`;
    return (o, n) => (A(), t("span", {
      class: g(["inline-flex items-center gap-1.5 font-mono text-xs", e.verified ? "text-success-700" : "text-danger-700"]),
      title: e.hash
    }, [
      i(X, {
        name: e.verified ? "shield-check" : "shield-alert",
        size: 14
      }, null, 8, ["name"]),
      h(d(s) + " "),
      l("span", fd, d(e.verified ? "Hash verified" : "Hash mismatch"), 1)
    ], 10, cd));
  }
}), vd = { class: "overflow-x-auto rounded-sm border border-line bg-surface py-2 font-mono text-xs leading-5" }, Nf = /* @__PURE__ */ b({
  __name: "JsonDiff",
  props: {
    before: {},
    after: {}
  },
  setup(e) {
    const a = e, s = L(() => [.../* @__PURE__ */ new Set([...Object.keys(a.before), ...Object.keys(a.after)])].flatMap((n) => {
      const r = JSON.stringify(a.before[n]), u = JSON.stringify(a.after[n]);
      return r === u ? [{ sign: " ", text: `${n}: ${r}`, tone: "text-ink-3" }] : [
        ...r !== void 0 ? [{ sign: "-", text: `${n}: ${r}`, tone: "bg-danger-50 text-danger-700" }] : [],
        ...u !== void 0 ? [{ sign: "+", text: `${n}: ${u}`, tone: "bg-success-50 text-success-700" }] : []
      ];
    }));
    return (o, n) => (A(), t("pre", vd, [
      l("code", null, [
        (A(!0), t(y, null, z(s.value, (r, u) => (A(), t("span", {
          key: u,
          class: g(["block px-3", r.tone])
        }, d(r.sign) + " " + d(r.text), 3))), 128))
      ])
    ]));
  }
}), bd = { class: "inline-flex items-center gap-2 text-sm text-ink" }, md = /* @__PURE__ */ b({
  __name: "ChannelLabel",
  props: {
    channel: {}
  },
  setup(e) {
    const a = e, s = {
      SMS: { icon: "message", color: "text-brand-600" },
      Voice: { icon: "phone", color: "text-violet-600" },
      RCS: { icon: "message-dot", color: "text-success-600" },
      Email: { icon: "mail", color: "text-warning-600" }
    }, o = L(() => s[a.channel]);
    return (n, r) => (A(), t("span", bd, [
      i(X, {
        name: o.value.icon,
        size: 18,
        class: g(o.value.color)
      }, null, 8, ["name", "class"]),
      h(d(e.channel), 1)
    ]));
  }
}), gd = /* @__PURE__ */ b({
  __name: "CornerTag",
  props: {
    tone: { default: "pending" },
    static: { type: Boolean }
  },
  setup(e) {
    const a = {
      pending: "border-warning-200 bg-warning-100 text-warning-700",
      accepted: "border-brand-200 bg-brand-50 text-brand-700",
      neutral: "border-line bg-gray-100 text-gray-600"
    };
    return (s, o) => (A(), t("span", {
      class: g(["inline-block rounded-bl-xs border px-2 py-0.5 font-mono text-[10px] font-medium tracking-widest uppercase", [a[e.tone], !e.static && "absolute top-0 right-0 rounded-tr-[inherit]"]])
    }, [
      B(s.$slots, "default")
    ], 2));
  }
}), xd = { class: "overflow-x-auto rounded-lg border border-line bg-surface shadow-card" }, hd = { class: "w-full min-w-[720px] border-collapse" }, pd = { class: "mt-2.5 text-sm font-semibold text-ink" }, yd = {
  scope: "row",
  class: "px-5 py-3 text-left font-normal"
}, kd = { class: "block text-sm text-ink" }, wd = { class: "block text-xs text-ink-3" }, Xd = { class: "border-t border-line bg-gray-50" }, Pd = ["colspan"], zd = {
  scope: "row",
  class: "py-3 pr-5 pl-9 text-left font-normal"
}, jf = /* @__PURE__ */ b({
  __name: "RateMatrix",
  props: {
    owners: {},
    activities: {},
    scrubbing: {}
  },
  emits: ["action"],
  setup(e, { emit: a }) {
    const s = a, o = (n) => n === null ? "N/A" : `₹${n.toFixed(2)}`;
    return (n, r) => (A(), t("div", xd, [
      l("table", hd, [
        r[2] || (r[2] = l("caption", { class: "sr-only" }, "Rates by channel owner", -1)),
        l("thead", null, [
          l("tr", null, [
            r[0] || (r[0] = l("th", {
              class: "w-1/4 bg-page",
              scope: "col"
            }, [
              l("span", { class: "sr-only" }, "Activity")
            ], -1)),
            (A(!0), t(y, null, z(e.owners, (u) => (A(), t("th", {
              key: u.id,
              scope: "col",
              class: g(["relative border-l border-line px-4 pt-7 pb-5 font-normal", u.status === "pending" ? "bg-[#fffcf5]" : "bg-page"])
            }, [
              i(gd, {
                tone: u.status
              }, {
                default: v(() => [
                  h(d(u.status), 1)
                ]),
                _: 2
              }, 1032, ["tone"]),
              i(de, {
                name: u.name,
                color: u.color,
                size: "lg",
                class: "mx-auto"
              }, null, 8, ["name", "color"]),
              l("p", pd, d(u.name), 1),
              i(j, {
                class: "mt-3",
                size: "sm",
                variant: u.ctaVariant,
                "icon-right": "arrow-right",
                onClick: (f) => s("action", u)
              }, {
                default: v(() => [
                  h(d(u.cta), 1)
                ]),
                _: 2
              }, 1032, ["variant", "onClick"])
            ], 2))), 128))
          ])
        ]),
        l("tbody", null, [
          (A(!0), t(y, null, z(e.activities, (u) => (A(), t("tr", {
            key: u.label,
            class: "border-t border-line"
          }, [
            l("th", yd, [
              l("span", kd, d(u.label), 1),
              l("span", wd, d(u.sub), 1)
            ]),
            (A(!0), t(y, null, z(e.owners, (f) => (A(), t("td", {
              key: f.id,
              class: g(["border-l border-line text-center font-mono text-sm font-medium", [f.status === "pending" && "bg-[#fffcf5]", u.rates[f.id] === null ? "text-ink-3" : "text-ink"]])
            }, d(o(u.rates[f.id])), 3))), 128))
          ]))), 128)),
          l("tr", Xd, [
            l("th", {
              colspan: e.owners.length + 1,
              scope: "colgroup",
              class: "px-5 py-2.5 text-left font-normal"
            }, [...r[1] || (r[1] = [
              l("span", { class: "eyebrow-mono !font-semibold" }, "Scrubbing", -1),
              l("span", { class: "ml-2 text-xs text-ink-3" }, "per consent scrub, priced per channel", -1)
            ])], 8, Pd)
          ]),
          (A(!0), t(y, null, z(e.scrubbing, (u) => (A(), t("tr", {
            key: u.label,
            class: "border-t border-line"
          }, [
            l("th", zd, [
              u.channel ? (A(), k(md, {
                key: 0,
                channel: u.channel
              }, null, 8, ["channel"])) : c("", !0)
            ]),
            (A(!0), t(y, null, z(e.owners, (f) => (A(), t("td", {
              key: f.id,
              class: g(["border-l border-line text-center font-mono text-sm font-medium", [f.status === "pending" && "bg-[#fffcf5]", u.rates[f.id] === null ? "text-ink-3" : "text-ink"]])
            }, d(o(u.rates[f.id])), 3))), 128))
          ]))), 128))
        ])
      ])
    ]));
  }
}), Ld = { class: "px-4 pb-4 text-[13px] leading-5 text-ink-2" }, Sf = /* @__PURE__ */ b({
  __name: "AccordionList",
  props: {
    items: {},
    defaultOpen: {}
  },
  setup(e) {
    return (a, s) => (A(), k(x(Tt), {
      type: "single",
      collapsible: "",
      "default-value": e.defaultOpen,
      class: "divide-y divide-line rounded-md border border-line bg-surface"
    }, {
      default: v(() => [
        (A(!0), t(y, null, z(e.items, (o) => (A(), k(x(Zt), {
          key: o.id,
          value: o.id
        }, {
          default: v(() => [
            i(x(Nt), null, {
              default: v(() => [
                i(x(jt), { class: "group flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-medium text-ink" }, {
                  default: v(() => [
                    h(d(o.title) + " ", 1),
                    i(X, {
                      name: "chevron-down",
                      class: "text-ink-3 transition-transform group-data-[state=open]:rotate-180"
                    })
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024),
            i(x(St), { class: "overflow-hidden" }, {
              default: v(() => [
                l("p", Ld, d(o.body), 1)
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
}), Bd = { class: "flex flex-col" }, Hd = {
  key: 0,
  class: "absolute top-8 bottom-1 left-[15px] border-l border-dashed border-brand-300",
  "aria-hidden": "true"
}, Cd = { class: "min-w-0 pt-0.5" }, Od = { class: "text-sm text-ink" }, Vd = { class: "mt-0.5 text-xs text-ink-3" }, If = /* @__PURE__ */ b({
  __name: "ActivityFeed",
  props: {
    items: {}
  },
  setup(e) {
    return (a, s) => (A(), t("ol", Bd, [
      (A(!0), t(y, null, z(e.items, (o, n) => (A(), t("li", {
        key: n,
        class: "relative flex gap-3 pb-5 last:pb-0"
      }, [
        n < e.items.length - 1 ? (A(), t("span", Hd)) : c("", !0),
        i(S, {
          icon: o.icon,
          tone: o.tone || "neutral",
          size: "sm",
          round: ""
        }, null, 8, ["icon", "tone"]),
        l("div", Cd, [
          l("p", Od, d(o.title), 1),
          l("p", Vd, d(o.time) + " · " + d(o.actor), 1)
        ])
      ]))), 128))
    ]));
  }
}), Dd = { class: "inline-flex items-center -space-x-2" }, Rd = {
  key: 0,
  class: "z-10 inline-flex size-7 items-center justify-center rounded-full bg-gray-100 text-[11px] font-medium text-gray-600 ring-2 ring-white"
}, Ff = /* @__PURE__ */ b({
  __name: "AvatarGroup",
  props: {
    names: {},
    max: { default: 3 }
  },
  setup(e) {
    return (a, s) => (A(), t("span", Dd, [
      (A(!0), t(y, null, z(e.names.slice(0, e.max), (o) => (A(), k(De, {
        key: o,
        name: o,
        size: "sm",
        class: "ring-2 ring-white"
      }, null, 8, ["name"]))), 128)),
      e.names.length > e.max ? (A(), t("span", Rd, "+" + d(e.names.length - e.max), 1)) : c("", !0)
    ]));
  }
}), Td = {
  key: 0,
  class: "flex flex-wrap items-start justify-between gap-3 border-b border-line px-5 py-4"
}, Zd = { class: "min-w-0" }, Nd = { class: "portal-type-panel-title flex items-center gap-2.5" }, jd = {
  key: 0,
  class: "mt-1 text-[13px] text-ink-2"
}, Sd = {
  key: 0,
  class: "flex items-center gap-2"
}, Id = {
  key: 1,
  class: "border-t border-line px-5 py-3"
}, Jf = /* @__PURE__ */ b({
  __name: "Card",
  props: {
    title: {},
    description: {},
    icon: {},
    flush: { type: Boolean },
    muted: { type: Boolean }
  },
  setup(e) {
    return (a, s) => (A(), t("section", {
      class: g(["overflow-hidden rounded-lg border border-line shadow-card", e.muted ? "bg-gray-50" : "bg-surface"])
    }, [
      e.title || a.$slots.header ? (A(), t("header", Td, [
        B(a.$slots, "header", {}, () => [
          l("div", Zd, [
            l("h3", Nd, [
              e.icon ? (A(), k(S, {
                key: 0,
                icon: e.icon,
                size: "xs"
              }, null, 8, ["icon"])) : c("", !0),
              h(d(e.title), 1)
            ]),
            e.description ? (A(), t("p", jd, d(e.description), 1)) : c("", !0)
          ])
        ]),
        a.$slots.actions ? (A(), t("div", Sd, [
          B(a.$slots, "actions")
        ])) : c("", !0)
      ])) : c("", !0),
      l("div", {
        class: g(!e.flush && "p-5")
      }, [
        B(a.$slots, "default")
      ], 2),
      a.$slots.footer ? (A(), t("footer", Id, [
        B(a.$slots, "footer")
      ])) : c("", !0)
    ], 2));
  }
}), Fd = {
  class: "font-medium text-ink tnum",
  tabindex: "0"
}, Qf = /* @__PURE__ */ b({
  __name: "CompactCount",
  props: {
    value: {},
    suffix: {}
  },
  setup(e) {
    const a = e, s = L(() => {
      const n = a.value, r = (u) => u.toFixed(2).replace(/\.?0+$/, "");
      return n >= 1e7 ? `${r(n / 1e7)} Cr` : n >= 1e5 ? `${r(n / 1e5)} L` : n >= 1e3 ? `${r(n / 1e3)}k` : String(n);
    }), o = L(() => a.value.toLocaleString("en-IN") + (a.suffix ? ` ${a.suffix}` : ""));
    return (n, r) => (A(), k(pe, { text: o.value }, {
      default: v(() => [
        l("span", Fd, d(s.value), 1)
      ]),
      _: 1
    }, 8, ["text"]));
  }
}), Jd = {
  key: 0,
  class: "flex items-center gap-3",
  role: "separator"
}, Qd = { class: "eyebrow" }, qd = {
  key: 2,
  class: "inline-block h-full min-h-4 w-px bg-line align-middle",
  role: "separator",
  "aria-orientation": "vertical"
}, qf = /* @__PURE__ */ b({
  __name: "Divider",
  props: {
    orientation: { default: "horizontal" },
    dashed: { type: Boolean }
  },
  setup(e) {
    return (a, s) => a.$slots.default ? (A(), t("div", Jd, [
      s[0] || (s[0] = l("span", { class: "h-px flex-1 bg-line" }, null, -1)),
      l("span", Qd, [
        B(a.$slots, "default")
      ]),
      s[1] || (s[1] = l("span", { class: "h-px flex-1 bg-line" }, null, -1))
    ])) : e.orientation === "horizontal" ? (A(), t("hr", {
      key: 1,
      class: g(["border-0 border-t border-line", e.dashed && "border-dashed"])
    }, null, 2)) : (A(), t("span", qd));
  }
}), Md = { class: "divide-y divide-line" }, Ed = { class: "eyebrow !text-[10.5px]" }, Wd = ["title"], Mf = /* @__PURE__ */ b({
  __name: "KeyValueList",
  props: {
    items: {}
  },
  setup(e) {
    return (a, s) => (A(), t("dl", Md, [
      (A(!0), t(y, null, z(e.items, (o) => (A(), t("div", {
        key: o.label,
        class: "grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center gap-3 py-3 first:pt-0 last:pb-0"
      }, [
        l("dt", Ed, d(o.label), 1),
        l("dd", {
          class: g(["truncate text-[13px] text-ink", o.mono && "font-mono"]),
          title: o.value
        }, d(o.value), 11, Wd)
      ]))), 128))
    ]));
  }
}), Gd = { class: "inline-flex items-center gap-1.5 font-mono text-[13px] text-ink" }, Kd = ["aria-label"], Ef = /* @__PURE__ */ b({
  __name: "MaskedValue",
  props: {
    value: {},
    visibleEnd: { default: 4 },
    revealable: { type: Boolean }
  },
  emits: ["reveal"],
  setup(e, { emit: a }) {
    const s = e, o = a, n = N(!1), r = L(() => "•".repeat(Math.max(s.value.length - s.visibleEnd, 0)) + s.value.slice(-s.visibleEnd));
    function u() {
      n.value = !n.value, n.value && o("reveal");
    }
    return (f, m) => (A(), t("span", Gd, [
      h(d(n.value ? e.value : r.value) + " ", 1),
      e.revealable ? (A(), t("button", {
        key: 0,
        type: "button",
        class: "text-ink-3 hover:text-ink",
        "aria-label": n.value ? "Hide value" : "Reveal value",
        onClick: u
      }, [
        i(X, {
          name: n.value ? "eye-off" : "eye",
          size: 14
        }, null, 8, ["name"])
      ], 8, Kd)) : c("", !0)
    ]));
  }
}), Ud = { class: "inline-flex h-8 items-center gap-1.5 rounded-sm border border-line bg-gray-100/70 px-2.5 font-mono text-xs text-gray-700" }, Wf = /* @__PURE__ */ b({
  __name: "MetaChip",
  props: {
    icon: {}
  },
  setup(e) {
    return (a, s) => (A(), t("span", Ud, [
      e.icon ? (A(), k(X, {
        key: 0,
        name: e.icon,
        size: 14
      }, null, 8, ["name"])) : c("", !0),
      B(a.$slots, "default")
    ]));
  }
}), Yd = {
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
}, Gf = /* @__PURE__ */ b({
  __name: "StatusChip",
  props: {
    status: {},
    size: { default: "md" }
  },
  setup(e) {
    const a = e, s = L(() => Yd[a.status] ?? { tone: "neutral", label: a.status });
    return (o, n) => (A(), k(Q, {
      variant: s.value.tone,
      size: e.size,
      dot: ""
    }, {
      default: v(() => [
        h(d(s.value.label), 1)
      ]),
      _: 1
    }, 8, ["variant", "size"]));
  }
}), $d = {}, _d = { class: "inline-flex items-center rounded-full bg-page-app px-2.5 py-1 text-[12px] text-ink-2" };
function ei(e, a) {
  return A(), t("span", _d, [
    B(e.$slots, "default")
  ]);
}
const Ai = /* @__PURE__ */ Te($d, [["render", ei]]), ti = {
  key: 1,
  class: "w-3.5"
}, ni = { class: "flex-1 truncate" }, ai = {
  key: 3,
  class: "font-mono text-[11px] text-ink-3"
}, Kf = /* @__PURE__ */ b({
  __name: "TreeList",
  props: {
    items: {},
    defaultExpanded: { default: () => [] },
    ariaLabel: { default: "Tree" }
  },
  emits: ["select"],
  setup(e, { emit: a }) {
    const s = a;
    return (o, n) => (A(), k(x(It), {
      items: e.items,
      "get-key": (r) => r.id,
      "default-expanded": e.defaultExpanded,
      "aria-label": e.ariaLabel,
      class: "flex flex-col gap-0.5 text-[13px]"
    }, {
      default: v(({ flattenItems: r }) => [
        (A(!0), t(y, null, z(r, (u) => (A(), k(x(Ft), ze({
          key: u._id
        }, { ref_for: !0 }, u.bind, {
          class: "flex h-9 cursor-pointer items-center gap-2 rounded-sm pr-2 outline-none hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-brand-600 data-[selected]:bg-brand-50 data-[selected]:text-brand-600",
          style: { paddingLeft: `${u.level * 16 - 8}px` },
          onSelect: (f) => s("select", u.value.id)
        }), {
          default: v(({ isExpanded: f }) => [
            u.hasChildren ? (A(), k(X, {
              key: 0,
              name: "chevron-right",
              size: 14,
              class: g(["text-ink-3 transition-transform", f && "rotate-90"])
            }, null, 8, ["class"])) : (A(), t("span", ti)),
            u.value.icon ? (A(), k(X, {
              key: 2,
              name: u.value.icon,
              size: 15,
              class: "text-ink-2"
            }, null, 8, ["name"])) : c("", !0),
            l("span", ni, d(u.value.label), 1),
            u.value.count !== void 0 ? (A(), t("span", ai, d(u.value.count), 1)) : c("", !0)
          ]),
          _: 2
        }, 1040, ["style", "onSelect"]))), 128))
      ]),
      _: 1
    }, 8, ["items", "get-key", "default-expanded", "aria-label"]));
  }
}), li = {
  class: "block max-w-full truncate",
  tabindex: "0"
}, Uf = /* @__PURE__ */ b({
  __name: "TruncatedText",
  props: {
    text: {}
  },
  setup(e) {
    return (a, s) => (A(), k(pe, { text: e.text }, {
      default: v(() => [
        l("span", li, d(e.text), 1)
      ]),
      _: 1
    }, 8, ["text"]));
  }
}), si = ["role"], oi = { class: "min-w-0 flex-1 text-[13px] leading-5 text-gray-700" }, ri = {
  key: 0,
  class: "text-sm font-semibold text-ink"
}, di = {
  key: 1,
  class: "mt-2 flex gap-2"
}, Yf = /* @__PURE__ */ b({
  __name: "Alert",
  props: {
    tone: { default: "info" },
    title: {},
    dismissible: { type: Boolean },
    icon: {}
  },
  emits: ["dismiss"],
  setup(e, { emit: a }) {
    const s = e, o = a, n = {
      info: { box: "border-brand-200 bg-brand-50", icon: "text-brand-600", glyph: "info" },
      success: { box: "border-success-500/30 bg-success-50", icon: "text-success-600", glyph: "circle-check" },
      warning: { box: "border-warning-200 bg-warning-50", icon: "text-warning-700", glyph: "warning" },
      danger: { box: "border-danger-200 bg-danger-50", icon: "text-danger-600", glyph: "circle-alert" }
    }, r = L(() => n[s.tone]);
    return (u, f) => (A(), t("div", {
      class: g(["flex items-start gap-3 rounded-md border p-3.5", r.value.box]),
      role: s.tone === "danger" ? "alert" : "status"
    }, [
      i(X, {
        name: e.icon || r.value.glyph,
        size: 18,
        class: g([r.value.icon, "mt-px"])
      }, null, 8, ["name", "class"]),
      l("div", oi, [
        e.title ? (A(), t("p", ri, d(e.title), 1)) : c("", !0),
        B(u.$slots, "default"),
        u.$slots.actions ? (A(), t("div", di, [
          B(u.$slots, "actions")
        ])) : c("", !0)
      ]),
      e.dismissible ? (A(), t("button", {
        key: 0,
        type: "button",
        "aria-label": "Dismiss",
        class: "text-ink-3 hover:text-ink",
        onClick: f[0] || (f[0] = (m) => o("dismiss"))
      }, [
        i(X, { name: "x" })
      ])) : c("", !0)
    ], 10, si));
  }
}), ii = ["role"], ui = { class: "portal-type-form-section mt-4" }, ci = {
  key: 0,
  class: "portal-type-page-subtitle mt-1.5 max-w-md"
}, fi = {
  key: 1,
  class: "mt-5 flex flex-wrap justify-center gap-2"
}, $f = /* @__PURE__ */ b({
  __name: "FeedbackCard",
  props: {
    variant: { default: "success" },
    title: {},
    description: {},
    primaryLabel: {},
    secondaryLabel: {}
  },
  emits: ["primary", "secondary"],
  setup(e, { emit: a }) {
    const s = e, o = a, r = {
      success: { wrap: "bg-success-100 text-success-600", icon: "check", button: "bg-success-600" },
      error: { wrap: "bg-danger-100 text-danger-700", icon: "x", button: "bg-danger-700" },
      warning: { wrap: "bg-warning-100 text-warning-700", icon: "warning", button: "bg-warning-700" }
    }[s.variant];
    return (u, f) => (A(), t("section", {
      class: "flex flex-col items-center rounded-2xl border border-[var(--color-border-dialog)] bg-surface p-6 text-center",
      role: e.variant === "error" ? "alert" : "status"
    }, [
      l("span", {
        class: g(["flex size-[68px] items-center justify-center rounded-full", x(r).wrap])
      }, [
        i(X, {
          name: x(r).icon,
          size: 30
        }, null, 8, ["name"])
      ], 2),
      l("h3", ui, d(e.title), 1),
      e.description ? (A(), t("p", ci, [
        B(u.$slots, "default", {}, () => [
          h(d(e.description), 1)
        ])
      ])) : c("", !0),
      e.primaryLabel || e.secondaryLabel ? (A(), t("div", fi, [
        e.secondaryLabel ? (A(), t("button", {
          key: 0,
          type: "button",
          class: "h-[var(--button-height-confirm)] min-w-32 rounded-md border border-line bg-surface px-[18px] text-[13px] font-medium text-ink hover:bg-gray-100",
          onClick: f[0] || (f[0] = (m) => o("secondary"))
        }, d(e.secondaryLabel), 1)) : c("", !0),
        e.primaryLabel ? (A(), t("button", {
          key: 1,
          type: "button",
          class: g(["h-[var(--button-height-confirm)] min-w-32 rounded-md px-[18px] text-[13px] font-medium text-white hover:opacity-90", x(r).button]),
          onClick: f[1] || (f[1] = (m) => o("primary"))
        }, d(e.primaryLabel), 3)) : c("", !0)
      ])) : c("", !0)
    ], 8, ii));
  }
}), vi = { class: "relative flex size-2" }, bi = {
  key: 0,
  class: "absolute inset-0 animate-ping rounded-full bg-success-500 opacity-60 motion-reduce:animate-none"
}, _f = /* @__PURE__ */ b({
  __name: "LiveIndicator",
  props: {
    state: { default: "live" }
  },
  setup(e) {
    return (a, s) => (A(), t("span", {
      class: g(["inline-flex items-center gap-1.5 text-xs font-medium", e.state === "live" ? "text-success-600" : e.state === "paused" ? "text-warning-700" : "text-ink-2"])
    }, [
      l("span", vi, [
        e.state === "live" ? (A(), t("span", bi)) : c("", !0),
        l("span", {
          class: g(["relative size-2 rounded-full", e.state === "live" ? "bg-success-600" : e.state === "paused" ? "bg-warning-500" : "bg-gray-400"])
        }, null, 2)
      ]),
      B(a.$slots, "default", {}, () => [
        h(d(e.state === "live" ? "Live" : e.state === "paused" ? "Paused" : "Closed"), 1)
      ])
    ], 2));
  }
}), mi = { class: "min-w-0 flex-1" }, gi = { class: "mt-0.5 text-xs text-ink-3" }, ev = /* @__PURE__ */ b({
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
  setup(e, { emit: a }) {
    const s = a;
    return (o, n) => (A(), t("article", {
      class: g(["flex gap-3 px-4 py-3.5", e.unread && "bg-brand-50/60"])
    }, [
      i(S, {
        icon: e.icon,
        tone: e.tone,
        size: "sm"
      }, null, 8, ["icon", "tone"]),
      l("div", mi, [
        l("p", {
          class: g(["text-sm text-ink", e.unread && "font-medium"])
        }, d(e.title), 3),
        l("p", gi, d(e.time), 1),
        e.cta ? (A(), k(he, {
          key: 0,
          size: "sm",
          class: "mt-1.5"
        }, {
          default: v(() => [
            h(d(e.cta), 1)
          ]),
          _: 1
        })) : c("", !0)
      ]),
      l("button", {
        type: "button",
        "aria-label": "Dismiss notification",
        class: "self-start text-ink-3 hover:text-ink",
        onClick: n[0] || (n[0] = (r) => s("dismiss"))
      }, [
        i(X, {
          name: "x",
          size: 14
        })
      ])
    ], 2));
  }
}), xi = ["aria-label"], hi = { class: "text-[13px] text-ink-2" }, Av = /* @__PURE__ */ b({
  __name: "PageLoader",
  props: {
    label: { default: "Loading" },
    fullscreen: { type: Boolean }
  },
  setup(e) {
    return (a, s) => (A(), t("div", {
      class: g(["flex flex-col items-center justify-center gap-3 bg-surface/80", e.fullscreen ? "fixed inset-0 z-[var(--z-overlay)]" : "min-h-64"]),
      role: "status",
      "aria-label": e.label
    }, [
      i(G, {
        size: 36,
        class: "animate-pulse motion-reduce:animate-none"
      }),
      l("p", hi, d(e.label), 1)
    ], 10, xi));
  }
}), tv = /* @__PURE__ */ b({
  __name: "SlaTimer",
  props: {
    seconds: {},
    ticking: { type: Boolean, default: !0 }
  },
  setup(e) {
    const a = e, s = N(a.seconds);
    je(() => a.seconds, (m) => s.value = m);
    let o;
    Se(() => {
      a.ticking && (o = setInterval(() => {
        s.value = Math.max(s.value - 1, 0);
      }, 1e3));
    }), Ie(() => clearInterval(o));
    const n = (m) => String(m).padStart(2, "0"), r = L(() => `${n(Math.floor(s.value / 3600))}:${n(Math.floor(s.value % 3600 / 60))}:${n(s.value % 60)}`), u = L(() => s.value <= 0 ? "breached" : s.value < 3600 ? "critical" : s.value < 21600 ? "warning" : "normal"), f = { normal: "bg-gray-100 text-gray-700", warning: "bg-warning-100 text-warning-700", critical: "bg-danger-100 text-danger-700 animate-pulse-danger", breached: "bg-danger-600 text-white" };
    return (m, p) => (A(), t("span", {
      class: g(["inline-flex h-7 items-center gap-1.5 rounded-sm px-2 font-mono text-xs font-medium tnum", f[u.value]]),
      role: "timer"
    }, [
      i(X, {
        name: u.value === "breached" ? "warning" : "clock",
        size: 13
      }, null, 8, ["name"]),
      h(" " + d(u.value === "breached" ? "SLA breached" : r.value), 1)
    ], 2));
  }
}), pi = { class: "flex flex-wrap items-center gap-4 rounded-xl bg-navy-900 px-5 py-4 shadow-bar" }, yi = { class: "flex size-11 shrink-0 items-center justify-center rounded-md bg-navy-700 text-brand-300" }, ki = { class: "min-w-48 flex-1" }, wi = { class: "text-[15px] font-semibold text-white" }, Xi = {
  key: 0,
  class: "mt-0.5 text-[13px] text-white/60"
}, Pi = { class: "flex flex-wrap items-center gap-2" }, nv = /* @__PURE__ */ b({
  __name: "StickyActionBar",
  props: {
    title: {},
    detail: {}
  },
  setup(e) {
    return (a, s) => (A(), t("div", pi, [
      l("span", yi, [
        i(X, {
          name: "shield",
          size: 20
        })
      ]),
      l("div", ki, [
        l("p", wi, d(e.title), 1),
        e.detail ? (A(), t("p", Xi, d(e.detail), 1)) : c("", !0)
      ]),
      l("div", Pi, [
        B(a.$slots, "default")
      ])
    ]));
  }
}), zi = {
  class: "fixed right-6 bottom-6 z-[60] flex w-[360px] max-w-[calc(100vw-32px)] flex-col gap-2",
  "aria-live": "polite"
}, Li = { class: "flex-1" }, Bi = ["onClick"], Hi = ["onClick"], te = Fe([]);
let Ci = 1;
function av() {
  return {
    show(e) {
      const a = Ci++;
      te.push({ ...e, id: a }), setTimeout(() => ne(a), e.duration ?? 5e3);
    },
    dismiss: ne
  };
}
function ne(e) {
  const a = te.findIndex((s) => s.id === e);
  a >= 0 && te.splice(a, 1);
}
const lv = /* @__PURE__ */ b({
  __name: "ToastStack",
  setup(e) {
    const a = { success: "circle-check", danger: "circle-alert", warning: "warning", info: "info" }, s = { success: "text-success-500", danger: "text-danger-500", warning: "text-warning-500", info: "text-brand-300" };
    return (o, n) => (A(), k(Je, { to: "body" }, [
      l("ol", zi, [
        (A(!0), t(y, null, z(te, (r) => (A(), t("li", {
          key: r.id,
          class: "flex items-center gap-3 rounded-md bg-navy-900 px-4 py-3 text-sm text-white shadow-bar"
        }, [
          i(X, {
            name: a[r.tone],
            size: 18,
            class: g(s[r.tone])
          }, null, 8, ["name", "class"]),
          l("span", Li, d(r.title), 1),
          r.action ? (A(), t("button", {
            key: 0,
            type: "button",
            class: "font-medium text-brand-300 hover:underline",
            onClick: (u) => ne(r.id)
          }, d(r.action), 9, Bi)) : c("", !0),
          l("button", {
            type: "button",
            "aria-label": "Dismiss",
            class: "text-white/60 hover:text-white",
            onClick: (u) => ne(r.id)
          }, [
            i(X, {
              name: "x",
              size: 14
            })
          ], 8, Hi)
        ]))), 128))
      ])
    ]));
  }
}), Oi = {
  class: "flex flex-wrap gap-2",
  role: "group",
  "aria-label": "Preferred channels"
}, Vi = ["aria-pressed", "disabled", "onClick"], Di = /* @__PURE__ */ b({
  __name: "ChannelChoice",
  props: /* @__PURE__ */ V({
    options: { default: () => ["SMS", "Calls"] },
    disabled: { type: Boolean }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const a = O(e, "modelValue");
    function s(o) {
      a.value = a.value.includes(o) ? a.value.filter((n) => n !== o) : [...a.value, o];
    }
    return (o, n) => (A(), t("div", Oi, [
      (A(!0), t(y, null, z(e.options, (r) => (A(), t("button", {
        key: r,
        type: "button",
        "aria-pressed": a.value.includes(r),
        disabled: e.disabled,
        class: g(["inline-flex h-8 items-center gap-2 rounded-full pr-3.5 pl-2 text-[13px] transition-colors disabled:cursor-not-allowed disabled:opacity-50", a.value.includes(r) ? "bg-app-tint font-medium text-app-600" : "bg-gray-100 text-ink-2"]),
        onClick: (u) => s(r)
      }, [
        l("span", {
          class: g(["flex size-[18px] items-center justify-center rounded-full", a.value.includes(r) ? "bg-app-500 text-white" : "border-2 border-line-strong"])
        }, [
          a.value.includes(r) ? (A(), k(X, {
            key: 0,
            name: "check",
            size: 11,
            "stroke-width": 3
          })) : c("", !0)
        ], 2),
        h(" " + d(r), 1)
      ], 10, Vi))), 128))
    ]));
  }
}), Ri = ["min", "max", "disabled", "aria-invalid", "aria-label"], we = /* @__PURE__ */ b({
  __name: "DateField",
  props: /* @__PURE__ */ V({
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
    const a = O(e, "modelValue");
    return (s, o) => W((A(), t("input", {
      "onUpdate:modelValue": o[0] || (o[0] = (n) => a.value = n),
      type: "date",
      min: e.min,
      max: e.max,
      disabled: e.disabled,
      "aria-invalid": e.invalid || void 0,
      "aria-label": e.ariaLabel,
      class: g(["h-[var(--input-height-md)] rounded-md border bg-surface px-3 font-mono text-xs text-ink outline-none transition-shadow focus:ring-3 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70", e.invalid ? "border-danger-500 focus:ring-danger-100" : "border-line focus:border-brand-500 focus:ring-brand-100"])
    }, null, 10, Ri)), [
      [$, a.value]
    ]);
  }
}), Ti = { class: "text-gray-600" }, sv = /* @__PURE__ */ b({
  __name: "DeclarationCheck",
  props: /* @__PURE__ */ V({
    invalid: { type: Boolean },
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const a = O(e, "modelValue");
    return (s, o) => (A(), t("div", {
      class: g(["rounded-md border p-4 transition-colors", [e.invalid ? "border-danger-500" : a.value ? "border-brand-300 bg-brand-50" : "border-brand-200/70 bg-surface"]])
    }, [
      i(E, {
        modelValue: a.value,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => a.value = n),
        disabled: e.disabled,
        invalid: e.invalid
      }, {
        default: v(() => [
          l("span", Ti, [
            B(s.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["modelValue", "disabled", "invalid"])
    ], 2));
  }
}), Zi = { class: "mx-auto flex size-24 items-center justify-center rounded-full bg-surface shadow-pop" }, Ni = { class: "relative text-brand-400" }, ji = { class: "mt-5 text-[15px] font-medium text-gray-600" }, Si = ["disabled"], Ii = { class: "mt-1 text-[13px] text-ink-3" }, Fi = {
  key: 1,
  class: "mx-auto flex max-w-md items-center gap-3 text-left"
}, Ji = { class: "min-w-0 flex-1" }, Qi = { class: "truncate font-mono text-[13px] font-medium text-ink" }, qi = {
  key: 0,
  class: "mt-0.5 text-[13px] text-danger-700"
}, Mi = {
  key: 1,
  class: "mt-0.5 text-[13px] text-success-700"
}, ov = /* @__PURE__ */ b({
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
  setup(e, { emit: a }) {
    const s = a, o = N(!1), n = N();
    function r(u) {
      o.value = !1, u.dataTransfer?.files.length && s("files", u.dataTransfer.files);
    }
    return (u, f) => (A(), t("div", {
      class: g(["rounded-md border border-dashed px-6 py-10 text-center transition-colors", [
        e.disabled ? "border-brand-200/70 bg-gray-50 opacity-70" : o.value ? "border-brand-500 bg-brand-50" : "border-brand-300 bg-surface",
        e.state === "error" && "border-danger-500 bg-danger-50",
        e.state === "done" && "border-success-500 bg-success-50 border-solid"
      ]]),
      onDragover: f[3] || (f[3] = U((m) => o.value = !e.disabled, ["prevent"])),
      onDragleave: f[4] || (f[4] = (m) => o.value = !1),
      onDrop: U(r, ["prevent"])
    }, [
      e.state === "idle" ? (A(), t(y, { key: 0 }, [
        l("div", Zi, [
          l("span", Ni, [
            i(X, {
              name: "shield",
              size: 56,
              "stroke-width": 1,
              fill: "currentColor",
              "fill-opacity": "0.75"
            }),
            i(X, {
              name: "upload",
              size: 18,
              class: "absolute top-[19px] left-[19px] text-white"
            })
          ])
        ]),
        l("p", ji, [
          f[5] || (f[5] = h(" Drop your CSV here, or ", -1)),
          l("button", {
            type: "button",
            disabled: e.disabled,
            class: "font-medium text-brand-600 hover:underline disabled:cursor-not-allowed disabled:no-underline",
            onClick: f[0] || (f[0] = (m) => n.value?.click())
          }, "browse", 8, Si)
        ]),
        l("p", Ii, d(e.hint), 1),
        l("input", {
          ref_key: "input",
          ref: n,
          type: "file",
          accept: ".csv",
          class: "sr-only",
          tabindex: "-1",
          "aria-label": "Choose CSV file",
          onChange: f[1] || (f[1] = (m) => m.target.files && s("files", m.target.files))
        }, null, 544)
      ], 64)) : (A(), t("div", Fi, [
        l("span", {
          class: g(["flex size-11 shrink-0 items-center justify-center rounded-md", e.state === "error" ? "bg-danger-100 text-danger-600" : e.state === "done" ? "bg-success-100 text-success-600" : "bg-brand-50 text-brand-600"])
        }, [
          i(X, {
            name: e.state === "error" ? "warning" : e.state === "done" ? "file-check" : "file",
            size: 20
          }, null, 8, ["name"])
        ], 2),
        l("div", Ji, [
          l("p", Qi, d(e.fileName), 1),
          e.state === "error" ? (A(), t("p", qi, d(e.errorText), 1)) : e.state === "done" ? (A(), t("p", Mi, d(e.fileMeta), 1)) : (A(), k(J, {
            key: 2,
            class: "mt-2",
            value: e.progress,
            size: "sm",
            label: `Encrypting and uploading ${e.fileName}`
          }, null, 8, ["value", "label"]))
        ]),
        l("button", {
          type: "button",
          "aria-label": "Remove file",
          class: "text-ink-3 hover:text-ink",
          onClick: f[2] || (f[2] = (m) => s("remove"))
        }, [
          i(X, { name: "x" })
        ])
      ]))
    ], 34));
  }
}), Ei = { class: "max-h-60 overflow-auto" }, Wi = {
  key: 0,
  class: "px-2.5 py-3 text-center text-[13px] text-ink-3"
}, rv = /* @__PURE__ */ b({
  __name: "MultiSelect",
  props: /* @__PURE__ */ V({
    options: {},
    placeholder: { default: "Select" },
    searchable: { type: Boolean, default: !0 }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const a = e, s = O(e, "modelValue"), o = N(""), n = L(() => a.options.filter((f) => f.label.toLowerCase().includes(o.value.toLowerCase()))), r = L(() => {
      if (!s.value.length) return a.placeholder;
      const f = a.options.find((m) => m.value === s.value[0])?.label;
      return s.value.length === 1 ? f : `${f} +${s.value.length - 1}`;
    });
    function u(f) {
      s.value = s.value.includes(f) ? s.value.filter((m) => m !== f) : [...s.value, f];
    }
    return (f, m) => (A(), k(x(Le), null, {
      default: v(() => [
        i(x(Be), {
          class: g(["flex h-[var(--input-height-md)] w-full items-center justify-between gap-2 rounded-md border border-line bg-surface px-3 text-left text-[13px] outline-none focus:border-brand-500 focus:ring-3 focus:ring-brand-100", s.value.length ? "text-ink" : "text-ink-3"])
        }, {
          default: v(() => [
            h(d(r.value) + " ", 1),
            i(X, {
              name: "chevron-down",
              class: "text-ink-3"
            })
          ]),
          _: 1
        }, 8, ["class"]),
        i(x(He), null, {
          default: v(() => [
            i(x(Ce), {
              "side-offset": 6,
              align: "start",
              class: "z-50 w-[var(--reka-popover-trigger-width)] rounded-md border border-line bg-surface p-1 shadow-pop"
            }, {
              default: v(() => [
                e.searchable ? W((A(), t("input", {
                  key: 0,
                  "onUpdate:modelValue": m[0] || (m[0] = (p) => o.value = p),
                  placeholder: "Search",
                  "aria-label": "Search options",
                  class: "mb-1 h-9 w-full rounded-sm bg-gray-100 px-2.5 text-sm outline-none placeholder:text-ink-4"
                }, null, 512)), [
                  [$, o.value]
                ]) : c("", !0),
                l("ul", Ei, [
                  (A(!0), t(y, null, z(n.value, (p) => (A(), t("li", {
                    key: p.value,
                    class: "rounded-sm px-2.5 py-2 hover:bg-brand-50"
                  }, [
                    i(E, {
                      "model-value": s.value.includes(p.value),
                      "onUpdate:modelValue": (w) => u(p.value)
                    }, {
                      default: v(() => [
                        h(d(p.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["model-value", "onUpdate:modelValue"])
                  ]))), 128)),
                  n.value.length ? c("", !0) : (A(), t("li", Wi, 'No matches for "' + d(o.value) + '"', 1))
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
}), Gi = ["disabled"], Ki = ["value", "disabled", "aria-label"], Ui = ["disabled"], dv = /* @__PURE__ */ b({
  __name: "NumberInput",
  props: /* @__PURE__ */ V({
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
    const a = e, s = O(e, "modelValue");
    function o(r) {
      return Math.min(a.max ?? 1 / 0, Math.max(a.min ?? -1 / 0, r));
    }
    function n(r) {
      const u = Number(r.target.value);
      Number.isNaN(u) || (s.value = o(u));
    }
    return (r, u) => (A(), t("div", {
      class: g(["inline-flex h-[var(--input-height-md)] items-center overflow-hidden rounded-md border border-line bg-surface focus-within:border-brand-500 focus-within:ring-3 focus-within:ring-brand-100", e.disabled && "opacity-60"])
    }, [
      l("button", {
        type: "button",
        class: "flex h-full w-9 items-center justify-center text-ink-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40",
        "aria-label": "Decrease",
        disabled: e.disabled || e.min !== void 0 && s.value <= e.min,
        onClick: u[0] || (u[0] = (f) => s.value = o(s.value - e.step))
      }, [...u[2] || (u[2] = [
        l("span", { class: "block h-0.5 w-2.5 rounded bg-current" }, null, -1)
      ])], 8, Gi),
      l("input", {
        value: s.value,
        inputmode: "numeric",
        disabled: e.disabled,
        "aria-label": e.ariaLabel,
        class: "h-full w-14 border-x border-line bg-transparent text-center font-mono text-[13px] text-ink outline-none",
        onChange: n
      }, null, 40, Ki),
      l("button", {
        type: "button",
        class: "flex h-full w-9 items-center justify-center text-ink-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40",
        "aria-label": "Increase",
        disabled: e.disabled || e.max !== void 0 && s.value >= e.max,
        onClick: u[1] || (u[1] = (f) => s.value = o(s.value + e.step))
      }, [
        i(X, {
          name: "plus",
          size: 14
        })
      ], 8, Ui)
    ], 2));
  }
}), iv = /* @__PURE__ */ b({
  __name: "OtpInput",
  props: /* @__PURE__ */ V({
    length: { default: 6 },
    invalid: { type: Boolean },
    disabled: { type: Boolean }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ V(["complete"], ["update:modelValue"]),
  setup(e, { emit: a }) {
    const s = O(e, "modelValue"), o = a;
    return (n, r) => (A(), k(x(Jt), {
      modelValue: s.value,
      "onUpdate:modelValue": r[0] || (r[0] = (u) => s.value = u),
      otp: "",
      disabled: e.disabled,
      class: "flex gap-2",
      "aria-label": "One-time passcode",
      onComplete: r[1] || (r[1] = (u) => o("complete", u))
    }, {
      default: v(() => [
        (A(!0), t(y, null, z(e.length, (u, f) => (A(), k(x(Qt), {
          key: f,
          index: f,
          inputmode: "numeric",
          "aria-label": `Digit ${f + 1}`,
          class: g(["size-12 rounded-md border bg-surface text-center font-mono text-lg font-semibold text-ink outline-none focus:ring-3 disabled:cursor-not-allowed disabled:bg-gray-100", e.invalid ? "border-danger-500 focus:ring-danger-100" : "border-line-strong/70 focus:border-brand-500 focus:ring-brand-100"])
        }, null, 8, ["index", "aria-label", "class"]))), 128))
      ]),
      _: 1
    }, 8, ["modelValue", "disabled"]));
  }
}), Yi = { class: "flex flex-col gap-3" }, $i = ["aria-label"], _i = ["aria-valuenow"], eu = { class: "grid grid-cols-2 gap-x-4 gap-y-1.5" }, uv = /* @__PURE__ */ b({
  __name: "PasswordInput",
  props: /* @__PURE__ */ V({
    showRules: { type: Boolean },
    placeholder: { default: "Enter password" },
    invalid: { type: Boolean }
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const a = O(e, "modelValue"), s = N(!1), o = L(() => [
      { label: "At least 12 characters", ok: a.value.length >= 12 },
      { label: "One uppercase letter", ok: /[A-Z]/.test(a.value) },
      { label: "One number", ok: /\d/.test(a.value) },
      { label: "One special character", ok: /[^A-Za-z0-9]/.test(a.value) }
    ]), n = L(() => o.value.filter((u) => u.ok).length), r = L(() => ["bg-gray-200", "bg-danger-500", "bg-warning-500", "bg-warning-500", "bg-success-500"][n.value]);
    return (u, f) => (A(), t("div", Yi, [
      i(ie, {
        modelValue: a.value,
        "onUpdate:modelValue": f[1] || (f[1] = (m) => a.value = m),
        type: s.value ? "text" : "password",
        icon: "key",
        placeholder: e.placeholder,
        invalid: e.invalid,
        "aria-label": "Password"
      }, {
        end: v(() => [
          l("button", {
            type: "button",
            "aria-label": s.value ? "Hide password" : "Show password",
            class: "text-ink-3 hover:text-ink",
            onClick: f[0] || (f[0] = (m) => s.value = !s.value)
          }, [
            i(X, {
              name: s.value ? "eye-off" : "eye"
            }, null, 8, ["name"])
          ], 8, $i)
        ]),
        _: 1
      }, 8, ["modelValue", "type", "placeholder", "invalid"]),
      e.showRules ? (A(), t(y, { key: 0 }, [
        l("div", {
          class: "flex gap-1",
          role: "progressbar",
          "aria-valuenow": n.value,
          "aria-valuemin": "0",
          "aria-valuemax": "4",
          "aria-label": "Password strength"
        }, [
          (A(), t(y, null, z(4, (m) => l("span", {
            key: m,
            class: g(["h-1 flex-1 rounded-full", m <= n.value ? r.value : "bg-gray-200"])
          }, null, 2)), 64))
        ], 8, _i),
        l("ul", eu, [
          (A(!0), t(y, null, z(o.value, (m) => (A(), t("li", {
            key: m.label,
            class: g(["flex items-center gap-1.5 text-[13px]", m.ok ? "text-success-600" : "text-ink-3"])
          }, [
            i(X, {
              name: m.ok ? "circle-check" : "circle",
              size: 14
            }, null, 8, ["name"]),
            h(d(m.label), 1)
          ], 2))), 128))
        ])
      ], 64)) : c("", !0)
    ]));
  }
}), Au = { class: "text-sm leading-[22px] text-ink" }, tu = {
  key: 0,
  class: "block text-[13px] leading-5 text-ink-3"
}, cv = /* @__PURE__ */ b({
  __name: "RadioGroup",
  props: /* @__PURE__ */ V({
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
    const a = O(e, "modelValue");
    return (s, o) => (A(), k(x(qt), {
      modelValue: a.value,
      "onUpdate:modelValue": o[0] || (o[0] = (n) => a.value = n),
      "aria-label": e.ariaLabel,
      class: g(["flex gap-3", e.orientation === "vertical" ? "flex-col" : "flex-row flex-wrap"])
    }, {
      default: v(() => [
        (A(!0), t(y, null, z(e.options, (n) => (A(), t("label", {
          key: n.value,
          class: g(["flex items-start gap-2.5", [n.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer", e.card && "flex-1 rounded-md border bg-surface p-3.5", e.card && (a.value === n.value ? "border-brand-500 bg-brand-50" : "border-line")]])
        }, [
          i(x(Mt), {
            value: n.value,
            disabled: n.disabled,
            class: "mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface data-[state=checked]:border-brand-600"
          }, {
            default: v(() => [
              i(x(Et), { class: "block size-2.5 rounded-full bg-brand-600" })
            ]),
            _: 1
          }, 8, ["value", "disabled"]),
          l("span", Au, [
            h(d(n.label) + " ", 1),
            n.description ? (A(), t("span", tu, d(n.description), 1)) : c("", !0)
          ])
        ], 2))), 128))
      ]),
      _: 1
    }, 8, ["modelValue", "aria-label", "class"]));
  }
}), nu = { class: "flex flex-col gap-1.5" }, au = {
  key: 0,
  role: "alert",
  class: "text-[13px] text-danger-700"
}, lu = {
  key: 1,
  class: "text-[13px] text-ink-3"
}, fv = /* @__PURE__ */ b({
  __name: "RateInput",
  props: /* @__PURE__ */ V({
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
    const a = e, s = O(e, "modelValue"), o = () => a.floor !== void 0 && s.value !== "" && Number(s.value) < a.floor;
    return (n, r) => (A(), t("div", nu, [
      i(ie, {
        modelValue: s.value,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => s.value = u),
        mono: "",
        prefix: "₹",
        suffix: e.unit,
        disabled: e.disabled,
        invalid: o(),
        "aria-label": e.ariaLabel || "Rate in rupees"
      }, null, 8, ["modelValue", "suffix", "disabled", "invalid", "aria-label"]),
      o() ? (A(), t("p", au, "Direct sender rate can't be below the GTM floor of ₹" + d(e.floor.toFixed(2)) + ". Raise it to publish.", 1)) : e.floor !== void 0 ? (A(), t("p", lu, "GTM floor ₹" + d(e.floor.toFixed(2)), 1)) : c("", !0)
    ]));
  }
}), su = { class: "flex flex-col gap-2" }, ou = { class: "flex justify-between text-sm" }, ru = { class: "text-ink-2" }, du = { class: "font-mono font-medium text-ink" }, vv = /* @__PURE__ */ b({
  __name: "SliderField",
  props: /* @__PURE__ */ V({
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
    const a = e, s = O(e, "modelValue"), o = L({ get: () => [s.value], set: (r) => {
      s.value = r[0];
    } }), n = L(() => a.format ? a.format(s.value) : String(s.value));
    return (r, u) => (A(), t("div", su, [
      l("div", ou, [
        l("span", ru, d(e.label), 1),
        l("span", du, d(n.value), 1)
      ]),
      i(x(Wt), {
        modelValue: o.value,
        "onUpdate:modelValue": u[0] || (u[0] = (f) => o.value = f),
        min: e.min,
        max: e.max,
        step: e.step,
        class: "relative flex h-5 w-full touch-none items-center select-none"
      }, {
        default: v(() => [
          i(x(Gt), { class: "relative h-1.5 grow rounded-full bg-gray-200" }, {
            default: v(() => [
              i(x(Kt), { class: "absolute h-full rounded-full bg-brand-600" })
            ]),
            _: 1
          }),
          i(x(Ut), {
            "aria-label": e.label,
            class: "block size-5 rounded-full border-2 border-brand-600 bg-white shadow-xs"
          }, null, 8, ["aria-label"])
        ]),
        _: 1
      }, 8, ["modelValue", "min", "max", "step"])
    ]));
  }
}), iu = { class: "flex min-h-11 flex-wrap items-center gap-1.5 rounded-md border border-line-strong/70 bg-surface px-2 py-1.5 focus-within:border-brand-500 focus-within:ring-3 focus-within:ring-brand-100" }, uu = ["aria-label", "onClick"], cu = ["placeholder", "aria-label", "onKeydown"], bv = /* @__PURE__ */ b({
  __name: "TagsField",
  props: /* @__PURE__ */ V({
    placeholder: { default: "Type and press Enter" }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const a = O(e, "modelValue"), s = N("");
    function o() {
      const r = s.value.trim();
      r && !a.value.includes(r) && (a.value = [...a.value, r]), s.value = "";
    }
    function n() {
      !s.value && a.value.length && (a.value = a.value.slice(0, -1));
    }
    return (r, u) => (A(), t("div", iu, [
      (A(!0), t(y, null, z(a.value, (f) => (A(), t("span", {
        key: f,
        class: "inline-flex items-center gap-1 rounded-full bg-brand-50 py-1 pr-1.5 pl-2.5 text-[13px] font-medium text-brand-600"
      }, [
        h(d(f) + " ", 1),
        l("button", {
          type: "button",
          "aria-label": `Remove ${f}`,
          class: "rounded-full hover:bg-brand-100",
          onClick: (m) => a.value = a.value.filter((p) => p !== f)
        }, [
          i(X, {
            name: "x",
            size: 13
          })
        ], 8, uu)
      ]))), 128)),
      W(l("input", {
        "onUpdate:modelValue": u[0] || (u[0] = (f) => s.value = f),
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        class: "h-7 min-w-32 flex-1 bg-transparent px-1 text-sm outline-none placeholder:text-ink-4",
        onKeydown: [
          ke(U(o, ["prevent"]), ["enter"]),
          ke(n, ["backspace"])
        ]
      }, null, 40, cu), [
        [$, s.value]
      ])
    ]));
  }
}), fu = { class: "relative" }, vu = ["rows", "placeholder", "maxlength", "disabled", "aria-invalid", "aria-label"], bu = {
  key: 0,
  class: "absolute right-3 bottom-3 font-mono text-[11px] text-ink-2"
}, mv = /* @__PURE__ */ b({
  __name: "TextArea",
  props: /* @__PURE__ */ V({
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
    const a = O(e, "modelValue");
    return (s, o) => (A(), t("div", fu, [
      W(l("textarea", {
        "onUpdate:modelValue": o[0] || (o[0] = (n) => a.value = n),
        rows: e.rows,
        placeholder: e.placeholder,
        maxlength: e.maxLength,
        disabled: e.disabled,
        "aria-invalid": e.invalid || void 0,
        "aria-label": e.ariaLabel,
        class: g(["w-full resize-y rounded-md border bg-surface px-3 py-2.5 text-[13px] text-ink outline-none transition-shadow placeholder:text-ink-4 focus:ring-3 disabled:cursor-not-allowed disabled:bg-gray-100", e.invalid ? "border-danger-500 focus:ring-danger-100" : "border-line focus:border-brand-500 focus:ring-brand-100"])
      }, null, 10, vu), [
        [$, a.value]
      ]),
      e.maxLength ? (A(), t("span", bu, d(a.value.length) + "/" + d(e.maxLength), 1)) : c("", !0)
    ]));
  }
}), ee = /* @__PURE__ */ b({
  __name: "Toggle",
  props: /* @__PURE__ */ V({
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
    const a = O(e, "modelValue");
    return (s, o) => (A(), t("label", {
      class: g(["inline-flex items-center gap-2.5", e.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"])
    }, [
      l("span", {
        class: g(e.hideLabel ? "sr-only" : "text-sm text-ink")
      }, d(e.label), 3),
      i(x(Yt), {
        modelValue: a.value,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => a.value = n),
        disabled: e.disabled,
        class: g(["relative inline-flex shrink-0 items-center rounded-full bg-[#eaedf0] transition-colors duration-200", [e.size === "sm" ? "h-5 w-9" : "h-6 w-11", e.tone === "consent" ? "data-[state=checked]:bg-success-500" : e.tone === "success" ? "data-[state=checked]:bg-success-600" : "data-[state=checked]:bg-brand-600"]])
      }, {
        default: v(() => [
          i(x($t), {
            class: g(["block rounded-full bg-white shadow-[0_1px_3px_rgb(11_26_51/0.25)] transition-transform duration-200", e.size === "sm" ? "size-4 translate-x-0.5 data-[state=checked]:translate-x-[18px]" : "size-5 translate-x-0.5 data-[state=checked]:translate-x-[22px]"])
          }, null, 8, ["class"])
        ]),
        _: 1
      }, 8, ["modelValue", "disabled", "class"])
    ], 2));
  }
}), mu = { class: "flex items-center gap-3 rounded-b-[20px] bg-gradient-to-b from-app-400 to-app-600 px-5 py-6 text-white" }, gu = {
  key: 1,
  class: "rounded-full bg-white/20 p-1"
}, xu = { class: "min-w-0 flex-1" }, hu = {
  key: 0,
  class: "truncate text-sm text-white/70"
}, gv = /* @__PURE__ */ b({
  __name: "AppHeader",
  props: {
    title: {},
    subtitle: {},
    back: { type: Boolean },
    search: { type: Boolean },
    brand: {}
  },
  emits: ["back", "search", "more"],
  setup(e, { emit: a }) {
    const s = a;
    return (o, n) => (A(), t("header", mu, [
      e.back ? (A(), k(I, {
        key: 0,
        icon: "arrow-left",
        label: "Back",
        variant: "on-brand",
        onClick: n[0] || (n[0] = (r) => s("back"))
      })) : c("", !0),
      e.brand ? (A(), t("span", gu, [
        i(de, {
          name: e.brand.name,
          color: e.brand.color,
          size: "md",
          class: "!rounded-full"
        }, null, 8, ["name", "color"])
      ])) : c("", !0),
      l("div", xu, [
        l("h1", {
          class: g(["truncate font-semibold tracking-tight", e.back ? "text-lg leading-6" : "text-2xl leading-8"])
        }, d(e.title), 3),
        e.subtitle ? (A(), t("p", hu, d(e.subtitle), 1)) : c("", !0)
      ]),
      e.search ? (A(), k(I, {
        key: 2,
        icon: "search",
        label: "Search",
        variant: "on-brand",
        size: "lg",
        class: "!rounded-lg",
        onClick: n[1] || (n[1] = (r) => s("search"))
      })) : c("", !0),
      e.back ? (A(), k(I, {
        key: 3,
        icon: "ellipsis",
        label: "More options",
        variant: "on-brand",
        onClick: n[2] || (n[2] = (r) => s("more"))
      })) : c("", !0)
    ]));
  }
}), pu = {
  class: "flex shrink-0 justify-around border-t border-line bg-surface px-3 py-2",
  "aria-label": "Main"
}, yu = ["aria-current", "onClick"], xv = /* @__PURE__ */ b({
  __name: "BottomNav",
  props: /* @__PURE__ */ V({
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
    const a = O(e, "modelValue");
    return (s, o) => (A(), t("nav", pu, [
      (A(!0), t(y, null, z(e.items, (n) => (A(), t("button", {
        key: n.id,
        type: "button",
        "aria-current": a.value === n.id ? "page" : void 0,
        class: g(["flex min-h-11 min-w-[76px] flex-col items-center gap-0.5 rounded-[14px] px-3 py-1.5 text-xs transition-colors", a.value === n.id ? "bg-[#e9eefa] font-medium text-app-600" : "text-ink-2"]),
        onClick: (r) => a.value = n.id
      }, [
        i(X, {
          name: n.icon,
          size: 20
        }, null, 8, ["name"]),
        h(d(n.label), 1)
      ], 10, yu))), 128))
    ]));
  }
}), ku = ["aria-label"], wu = ["aria-selected", "aria-label", "onClick"], Xu = /* @__PURE__ */ b({
  __name: "CarouselDots",
  props: /* @__PURE__ */ V({
    count: {},
    ariaLabel: {}
  }, {
    modelValue: { default: 0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const a = O(e, "modelValue");
    return (s, o) => (A(), t("div", {
      class: "flex items-center justify-center gap-1.5",
      role: "tablist",
      "aria-label": e.ariaLabel || "Slides"
    }, [
      (A(!0), t(y, null, z(e.count, (n) => (A(), t("button", {
        key: n,
        type: "button",
        role: "tab",
        "aria-selected": a.value === n - 1,
        "aria-label": `Slide ${n}`,
        class: g(["h-1.5 rounded-full transition-all", a.value === n - 1 ? "w-5 bg-app-500" : "w-1.5 bg-gray-300"]),
        onClick: (r) => a.value = n - 1
      }, null, 10, wu))), 128))
    ], 8, ku));
  }
}), Pu = { class: "grid grid-cols-2 divide-x divide-line rounded-[20px] border border-line bg-surface shadow-card" }, zu = { class: "flex items-center justify-between gap-2 p-4" }, Lu = { class: "mt-0.5 text-2xl leading-8 font-semibold text-ink tnum" }, Bu = { class: "flex items-center justify-between gap-2 p-4" }, Hu = { class: "mt-0.5 text-2xl leading-8 font-semibold text-ink tnum" }, hv = /* @__PURE__ */ b({
  __name: "ConsentSplit",
  props: {
    optedIn: {},
    optedOut: {}
  },
  setup(e) {
    return (a, s) => (A(), t("ul", Pu, [
      l("li", zu, [
        l("div", null, [
          i(q, { as: "span" }, {
            default: v(() => [...s[0] || (s[0] = [
              h("Opted in", -1)
            ])]),
            _: 1
          }),
          l("p", Lu, d(e.optedIn), 1)
        ]),
        i(S, {
          icon: "shield-check",
          tone: "success",
          size: "md",
          class: "!rounded-lg !bg-[#e7f8f2]"
        })
      ]),
      l("li", Bu, [
        l("div", null, [
          i(q, { as: "span" }, {
            default: v(() => [...s[1] || (s[1] = [
              h("Opted out", -1)
            ])]),
            _: 1
          }),
          l("p", Hu, d(e.optedOut), 1)
        ]),
        i(S, {
          icon: "shield-off",
          tone: "warning",
          size: "md",
          class: "!rounded-lg"
        })
      ])
    ]));
  }
}), Cu = { class: "flex items-center gap-3 border-b border-line/70 px-5 py-3.5" }, Ou = { class: "min-w-0 flex-1" }, Vu = { class: "truncate text-base leading-5 font-semibold text-ink" }, Du = { class: "truncate text-[13px] text-ink-2" }, pv = /* @__PURE__ */ b({
  __name: "GreetingBar",
  props: {
    name: {},
    tagline: { default: "Stop spam. Stay in control." },
    unread: { type: Boolean }
  },
  emits: ["language", "notifications"],
  setup(e, { emit: a }) {
    const s = a;
    return (o, n) => (A(), t("header", Cu, [
      i(G, {
        tile: "",
        size: 24
      }),
      l("div", Ou, [
        l("p", Vu, "Hi, " + d(e.name), 1),
        l("p", Du, d(e.tagline), 1)
      ]),
      i(I, {
        icon: "languages",
        label: "Change language",
        variant: "round",
        size: "lg",
        onClick: n[0] || (n[0] = (r) => s("language"))
      }),
      i(I, {
        icon: "bell",
        label: "Notifications",
        variant: "round",
        size: "lg",
        dot: e.unread,
        onClick: n[1] || (n[1] = (r) => s("notifications"))
      }, null, 8, ["dot"])
    ]));
  }
}), Ru = {
  type: "button",
  class: "flex min-h-[72px] w-full items-center gap-3 rounded-[20px] border border-line bg-surface p-4 text-left shadow-card transition-colors hover:bg-gray-50"
}, Tu = {
  key: 1,
  class: "relative"
}, Zu = {
  key: 0,
  class: "absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-app-500 ring-2 ring-white"
}, Nu = { class: "min-w-0 flex-1" }, ju = { class: "block text-[15px] leading-5 font-semibold text-ink" }, Su = {
  key: 0,
  class: "block text-xs leading-5 text-ink-3"
}, Iu = {
  key: 1,
  class: "block text-[13px] leading-[18px] text-ink-2"
}, yv = /* @__PURE__ */ b({
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
    return (a, s) => (A(), t("button", Ru, [
      e.icon ? (A(), k(S, {
        key: 0,
        icon: e.icon,
        tone: "neutral",
        size: "md",
        class: "!rounded-lg !bg-gray-100"
      }, null, 8, ["icon"])) : c("", !0),
      e.brand ? (A(), t("span", Tu, [
        i(de, {
          name: e.brand.name,
          color: e.brand.color,
          shape: "circle"
        }, null, 8, ["name", "color"]),
        e.unread ? (A(), t("span", Zu, [...s[0] || (s[0] = [
          l("span", { class: "sr-only" }, "New", -1)
        ])])) : c("", !0)
      ])) : c("", !0),
      l("span", Nu, [
        l("span", ju, d(e.title), 1),
        e.meta ? (A(), t("span", Su, d(e.meta), 1)) : c("", !0),
        e.description ? (A(), t("span", Iu, d(e.description), 1)) : c("", !0)
      ]),
      i(X, {
        name: "chevron-right",
        class: "text-ink-3"
      })
    ]));
  }
}), kv = /* @__PURE__ */ b({
  __name: "PhoneFrame",
  props: {
    height: { default: "auto" }
  },
  setup(e) {
    return (a, s) => (A(), t("div", {
      class: "relative mx-auto flex w-[390px] max-w-full flex-col overflow-hidden rounded-[28px] border border-line bg-page-app shadow-pop",
      style: T({ height: e.height })
    }, [
      B(a.$slots, "default")
    ], 4));
  }
}), Fu = {
  "aria-roledescription": "carousel",
  "aria-label": "Highlights"
}, Ju = { class: "relative flex min-h-[170px] items-center overflow-hidden rounded-[20px] bg-[#1c69d8] p-5 text-white" }, Qu = { class: "relative z-10 max-w-[58%]" }, qu = { class: "text-[21px] leading-[25px] font-semibold tracking-tight" }, Mu = { class: "mt-2 text-xs leading-[18px] text-white/95" }, Eu = {
  class: "absolute right-4 flex flex-col gap-2 rounded-[18px] border border-white/25 bg-white/15 p-3",
  "aria-hidden": "true",
  inert: ""
}, wv = /* @__PURE__ */ b({
  __name: "PromoBanner",
  props: {
    slides: {}
  },
  setup(e) {
    const a = N(0);
    return (s, o) => (A(), t("section", Fu, [
      l("div", Ju, [
        l("div", Qu, [
          l("h2", qu, d(e.slides[a.value].title), 1),
          l("p", Mu, d(e.slides[a.value].body), 1)
        ]),
        B(s.$slots, "art", {}, () => [
          l("div", Eu, [
            i(ee, {
              "model-value": !0,
              label: "On",
              "hide-label": "",
              size: "sm",
              tone: "brand"
            }),
            i(ee, {
              "model-value": !0,
              label: "On",
              "hide-label": "",
              size: "sm",
              tone: "brand"
            }),
            i(ee, {
              "model-value": !1,
              label: "Off",
              "hide-label": "",
              size: "sm",
              tone: "brand"
            })
          ])
        ])
      ]),
      i(Xu, {
        modelValue: a.value,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => a.value = n),
        count: e.slides.length,
        class: "mt-3"
      }, null, 8, ["modelValue", "count"])
    ]));
  }
}), Wu = { class: "py-4 first:pt-0 last:pb-0" }, Gu = { class: "flex items-center gap-3" }, Ku = { class: "min-w-0 flex-1 text-[17px] leading-[22px] font-semibold text-ink" }, Uu = { class: "flex flex-wrap gap-2" }, Xv = /* @__PURE__ */ b({
  __name: "PurposeItem",
  props: /* @__PURE__ */ V({
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
    const a = O(e, "enabled"), s = O(e, "channels");
    return (o, n) => (A(), t("section", Wu, [
      l("div", Gu, [
        l("h3", Ku, d(e.title), 1),
        i(X, {
          name: "shield-check",
          size: 18,
          class: "text-app-500"
        }),
        i(ee, {
          modelValue: a.value,
          "onUpdate:modelValue": n[0] || (n[0] = (r) => a.value = r),
          label: `Consent for ${e.title}`,
          "hide-label": ""
        }, null, 8, ["modelValue", "label"])
      ]),
      a.value ? (A(), t(y, { key: 0 }, [
        i(q, { class: "mt-3 mb-2" }, {
          default: v(() => [...n[2] || (n[2] = [
            h("Preferred channels", -1)
          ])]),
          _: 1
        }),
        i(Di, {
          modelValue: s.value,
          "onUpdate:modelValue": n[1] || (n[1] = (r) => s.value = r),
          options: e.channelOptions
        }, null, 8, ["modelValue", "options"])
      ], 64)) : c("", !0),
      e.benefits.length ? (A(), t(y, { key: 1 }, [
        i(q, { class: "mt-3 mb-2" }, {
          default: v(() => [...n[3] || (n[3] = [
            h("Consent benefits", -1)
          ])]),
          _: 1
        }),
        l("div", Uu, [
          (A(!0), t(y, null, z(e.benefits, (r) => (A(), k(Ai, { key: r }, {
            default: v(() => [
              h(d(r), 1)
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ], 64)) : c("", !0)
    ]));
  }
}), Yu = { "aria-label": "Breadcrumb" }, $u = { class: "flex flex-wrap items-center gap-1.5 text-[13px]" }, _u = ["href"], ec = {
  key: 2,
  "aria-current": "page",
  class: "font-medium text-ink"
}, Pv = /* @__PURE__ */ b({
  __name: "Breadcrumbs",
  props: {
    items: {}
  },
  setup(e) {
    return (a, s) => (A(), t("nav", Yu, [
      l("ol", $u, [
        (A(!0), t(y, null, z(e.items, (o, n) => (A(), t("li", {
          key: o.label,
          class: "flex items-center gap-1.5"
        }, [
          n ? (A(), k(X, {
            key: 0,
            name: "chevron-right",
            size: 13,
            class: "text-ink-4"
          })) : c("", !0),
          n < e.items.length - 1 ? (A(), t("a", {
            key: 1,
            href: o.href || "#",
            class: "text-ink-2 hover:text-brand-600 hover:underline"
          }, d(o.label), 9, _u)) : (A(), t("span", ec, d(o.label), 1))
        ]))), 128))
      ])
    ]));
  }
}), Ac = { class: "flex items-center gap-2.5 border-b border-line px-4" }, tc = { class: "max-h-80 overflow-auto p-2" }, nc = { class: "eyebrow px-2 py-1.5" }, ac = ["onClick"], lc = { class: "flex-1" }, sc = {
  key: 0,
  class: "px-2 py-8 text-center text-sm text-ink-3"
}, zv = /* @__PURE__ */ b({
  __name: "CommandPalette",
  props: /* @__PURE__ */ V({
    items: {}
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ V(["select"], ["update:open"]),
  setup(e, { emit: a }) {
    const s = e, o = O(e, "open"), n = a, r = N(""), u = L(() => {
      const f = s.items.filter((m) => m.label.toLowerCase().includes(r.value.toLowerCase()));
      return [...new Set(f.map((m) => m.group))].map((m) => ({ group: m, items: f.filter((p) => p.group === m) }));
    });
    return (f, m) => (A(), k(x(ae), {
      open: o.value,
      "onUpdate:open": m[1] || (m[1] = (p) => o.value = p)
    }, {
      default: v(() => [
        i(x(le), null, {
          default: v(() => [
            i(x(se), { class: "fixed inset-0 z-50 bg-navy-900/40 animate-overlay" }),
            i(x(oe), {
              class: "fixed top-[15%] left-1/2 z-50 w-[92vw] max-w-xl -translate-x-1/2 overflow-hidden rounded-lg bg-surface shadow-pop",
              "aria-describedby": ""
            }, {
              default: v(() => [
                i(x(re), { class: "sr-only" }, {
                  default: v(() => [...m[2] || (m[2] = [
                    h("Universal search", -1)
                  ])]),
                  _: 1
                }),
                l("div", Ac, [
                  i(X, {
                    name: "search",
                    class: "text-ink-3"
                  }),
                  W(l("input", {
                    "onUpdate:modelValue": m[0] || (m[0] = (p) => r.value = p),
                    placeholder: "Search senders, GTMs, users, agreements",
                    "aria-label": "Search",
                    class: "h-12 w-full bg-transparent text-sm outline-none placeholder:text-ink-4"
                  }, null, 512), [
                    [$, r.value]
                  ]),
                  i(Y, null, {
                    default: v(() => [...m[3] || (m[3] = [
                      h("Esc", -1)
                    ])]),
                    _: 1
                  })
                ]),
                l("div", tc, [
                  (A(!0), t(y, null, z(u.value, (p) => (A(), t("div", {
                    key: p.group,
                    class: "mb-1"
                  }, [
                    l("p", nc, d(p.group), 1),
                    (A(!0), t(y, null, z(p.items, (w) => (A(), t("button", {
                      key: w.label,
                      type: "button",
                      class: "flex w-full items-center gap-2.5 rounded-sm px-2 py-2 text-left text-sm text-gray-700 hover:bg-brand-50",
                      onClick: (P) => {
                        n("select", w), o.value = !1;
                      }
                    }, [
                      i(X, {
                        name: w.icon,
                        class: "text-ink-3"
                      }, null, 8, ["name"]),
                      l("span", lc, d(w.label), 1),
                      w.shortcut ? (A(), k(Y, { key: 0 }, {
                        default: v(() => [
                          h(d(w.shortcut), 1)
                        ]),
                        _: 2
                      }, 1024)) : c("", !0)
                    ], 8, ac))), 128))
                  ]))), 128)),
                  u.value.length ? c("", !0) : (A(), t("p", sc, 'Nothing matches "' + d(r.value) + '". Try a sender name, PEID or user email.', 1))
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
}), oc = ["aria-label"], rc = ["aria-pressed", "onClick"], dc = {
  key: 0,
  class: "tnum"
}, ic = /* @__PURE__ */ b({
  __name: "FilterPills",
  props: /* @__PURE__ */ V({
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
    const a = O(e, "modelValue");
    return (s, o) => (A(), t("div", {
      class: "flex flex-wrap gap-2",
      role: "group",
      "aria-label": e.ariaLabel
    }, [
      (A(!0), t(y, null, z(e.options, (n) => (A(), t("button", {
        key: n.value,
        type: "button",
        "aria-pressed": a.value === n.value,
        class: g(["rounded-full border font-medium whitespace-nowrap transition-colors", [
          e.size === "sm" ? "h-8 px-3 text-[13px]" : "h-10 px-4 text-sm",
          a.value === n.value ? e.tone === "app" ? "border-app-600 bg-app-600 text-white" : e.tone === "dark" ? "border-navy-900 bg-navy-900 text-white" : "border-brand-600 bg-brand-600 text-white" : "border-line bg-surface text-gray-600 hover:bg-gray-50"
        ]]),
        onClick: (r) => a.value = n.value
      }, [
        h(d(n.label), 1),
        n.count !== void 0 ? (A(), t("span", dc, d(e.tone === "dark" ? ` · ${n.count.toLocaleString("en-IN")}` : ` (${n.count})`), 1)) : c("", !0)
      ], 10, rc))), 128))
    ], 8, oc));
  }
}), uc = { class: "flex flex-wrap items-start justify-between gap-4" }, cc = { class: "min-w-0" }, fc = { class: "portal-type-page-title" }, vc = {
  key: 0,
  class: "portal-type-page-subtitle mt-1.5 max-w-3xl"
}, bc = {
  key: 0,
  class: "flex items-center gap-2"
}, Lv = /* @__PURE__ */ b({
  __name: "PageHeader",
  props: {
    title: {},
    description: {}
  },
  setup(e) {
    return (a, s) => (A(), t("div", uc, [
      l("div", cc, [
        l("h1", fc, d(e.title), 1),
        e.description ? (A(), t("p", vc, d(e.description), 1)) : c("", !0)
      ]),
      a.$slots.actions ? (A(), t("div", bc, [
        B(a.$slots, "actions")
      ])) : c("", !0)
    ]));
  }
}), mc = {
  class: "flex items-center justify-between gap-4",
  "aria-label": "Pagination"
}, gc = { class: "flex items-center gap-3" }, xc = { class: "w-20" }, hc = {
  class: "font-mono text-xs text-ink-2 tnum",
  "aria-live": "polite"
}, pc = { class: "flex items-center gap-1" }, yc = {
  key: 0,
  class: "px-1.5 text-[13px] text-ink-3"
}, kc = ["aria-current", "onClick"], Bv = /* @__PURE__ */ b({
  __name: "Pagination",
  props: /* @__PURE__ */ V({
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
    const a = e, s = O(e, "modelValue"), o = O(e, "pageSize"), n = L(() => Math.max(Math.ceil(a.total / o.value), 1)), r = L(() => a.total ? (s.value - 1) * o.value + 1 : 0), u = L(() => Math.min(s.value * o.value, a.total)), f = L(() => {
      const m = n.value;
      if (m <= 7) return Array.from({ length: m }, (w, P) => P + 1);
      const p = s.value;
      return p <= 3 ? [1, 2, 3, 4, "…", m] : p >= m - 2 ? [1, "…", m - 3, m - 2, m - 1, m] : [1, "…", p - 1, p, p + 1, "…", m];
    });
    return (m, p) => (A(), t("nav", mc, [
      l("div", gc, [
        e.pageSizes ? (A(), t(y, { key: 0 }, [
          p[3] || (p[3] = l("span", { class: "text-xs text-ink-2" }, "Rows per page", -1)),
          l("div", xc, [
            i(Ze, {
              "model-value": String(o.value),
              size: "sm",
              "aria-label": "Rows per page",
              options: e.pageSizes.map((w) => ({ label: String(w), value: String(w) })),
              "onUpdate:modelValue": p[0] || (p[0] = (w) => {
                o.value = Number(w), s.value = 1;
              })
            }, null, 8, ["model-value", "options"])
          ])
        ], 64)) : c("", !0),
        l("span", hc, d(r.value) + "-" + d(u.value) + " of " + d(e.total.toLocaleString("en-IN")), 1)
      ]),
      l("div", pc, [
        i(I, {
          icon: "chevron-left",
          label: "Previous page",
          variant: "outline",
          size: "sm",
          disabled: s.value <= 1,
          onClick: p[1] || (p[1] = (w) => s.value--)
        }, null, 8, ["disabled"]),
        e.compact ? c("", !0) : (A(!0), t(y, { key: 0 }, z(f.value, (w, P) => (A(), t(y, { key: P }, [
          w === "…" ? (A(), t("span", yc, "…")) : (A(), t("button", {
            key: 1,
            type: "button",
            "aria-current": w === s.value ? "page" : void 0,
            class: g(["size-7 rounded-sm text-[13px] tnum", w === s.value ? "bg-navy-900 font-medium text-white" : "text-gray-700 hover:bg-gray-100"]),
            onClick: (D) => s.value = w
          }, d(w), 11, kc))
        ], 64))), 128)),
        i(I, {
          icon: "chevron-right",
          label: "Next page",
          variant: "outline",
          size: "sm",
          disabled: s.value >= n.value,
          onClick: p[2] || (p[2] = (w) => s.value++)
        }, null, 8, ["disabled"])
      ])
    ]));
  }
}), wc = { class: "flex flex-wrap items-center gap-3" }, Xc = {
  key: 0,
  class: "flex items-center gap-2"
}, Hv = /* @__PURE__ */ b({
  __name: "PeriodFilter",
  props: /* @__PURE__ */ V({
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
    const a = e, s = O(e, "modelValue"), o = O(e, "from"), n = O(e, "to"), r = L(() => s.value === "custom" && a.presets.some((u) => u.value === "custom"));
    return (u, f) => (A(), t("div", wc, [
      i(ic, {
        modelValue: s.value,
        "onUpdate:modelValue": f[0] || (f[0] = (m) => s.value = m),
        options: e.presets,
        "aria-label": "Period"
      }, null, 8, ["modelValue", "options"]),
      r.value ? (A(), t("div", Xc, [
        i(we, {
          modelValue: o.value,
          "onUpdate:modelValue": f[1] || (f[1] = (m) => o.value = m),
          "aria-label": "From date"
        }, null, 8, ["modelValue"]),
        f[3] || (f[3] = l("span", { class: "text-xs text-ink-3" }, "to", -1)),
        i(we, {
          modelValue: n.value,
          "onUpdate:modelValue": f[2] || (f[2] = (m) => n.value = m),
          "aria-label": "To date",
          min: o.value
        }, null, 8, ["modelValue", "min"])
      ])) : c("", !0)
    ]));
  }
}), Pc = { class: "relative overflow-hidden rounded-lg border border-line bg-surface shadow-card" }, zc = { class: "grid gap-4 p-5 sm:grid-cols-2 xl:grid-cols-4" }, Lc = ["aria-current"], Bc = { class: "min-w-0 flex-1" }, Hc = {
  key: 0,
  href: "#",
  class: "text-[13px] font-medium text-brand-600 hover:underline"
}, Cv = /* @__PURE__ */ b({
  __name: "PhaseTracker",
  props: {
    phases: {},
    progress: {}
  },
  setup(e) {
    return (a, s) => (A(), t("div", Pc, [
      l("div", {
        class: "absolute top-0 left-0 h-[3px] rounded-r-full bg-gradient-to-r from-brand-600 to-brand-400",
        style: T({ width: `${e.progress ?? 0}%` }),
        "aria-hidden": "true"
      }, null, 4),
      l("ol", zc, [
        (A(!0), t(y, null, z(e.phases, (o, n) => (A(), t("li", {
          key: o.title,
          class: "flex items-center gap-3",
          "aria-current": o.state === "active" ? "step" : void 0
        }, [
          l("span", {
            class: g(["flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-medium", o.state === "done" ? "bg-success-600 text-white" : o.state === "active" ? "bg-brand-600 text-white" : "bg-gray-100 text-ink-2"])
          }, [
            o.state === "done" ? (A(), k(X, {
              key: 0,
              name: "check",
              size: 18,
              "stroke-width": 2.5
            })) : (A(), t(y, { key: 1 }, [
              h(d(n + 1), 1)
            ], 64))
          ], 2),
          l("div", Bc, [
            l("p", {
              class: g(["text-[15px] font-medium", o.state === "done" ? "text-ink" : "text-gray-700"])
            }, d(o.title), 3),
            o.linked ? (A(), t("a", Hc, d(o.detail), 1)) : (A(), t("p", {
              key: 1,
              class: g(["font-mono text-xs", o.state === "active" ? "font-medium text-brand-600" : "text-ink-3"])
            }, d(o.detail), 3))
          ]),
          n < e.phases.length - 1 ? (A(), k(X, {
            key: 0,
            name: "arrow-right",
            class: "hidden text-ink-4 xl:block"
          })) : c("", !0)
        ], 8, Lc))), 128))
      ])
    ]));
  }
}), Cc = {
  key: 0,
  class: "truncate px-2.5 py-2 text-xs text-ink-2"
}, Ov = /* @__PURE__ */ b({
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
  setup(e, { emit: a }) {
    const s = a;
    return (o, n) => (A(), k(x(fe), null, {
      default: v(() => [
        i(x(ve), {
          class: "w-full rounded-md p-1.5 text-left hover:bg-gray-100",
          "aria-label": `Account menu for ${e.name}`
        }, {
          default: v(() => [
            i(Re, {
              name: e.name,
              role: e.role
            }, null, 8, ["name", "role"])
          ]),
          _: 1
        }, 8, ["aria-label"]),
        i(x(be), null, {
          default: v(() => [
            i(x(me), {
              side: "top",
              align: "start",
              "side-offset": 6,
              class: "z-50 w-60 rounded-md border border-line bg-surface p-1 shadow-pop"
            }, {
              default: v(() => [
                e.email ? (A(), t("div", Cc, d(e.email), 1)) : c("", !0),
                (A(!0), t(y, null, z(e.items, (r) => (A(), k(x(Ae), {
                  key: r.label,
                  class: "flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-[13px] text-gray-700 outline-none data-[highlighted]:bg-brand-50",
                  onSelect: (u) => s("select", r.label)
                }, {
                  default: v(() => [
                    i(X, {
                      name: r.icon
                    }, null, 8, ["name"]),
                    h(d(r.label), 1)
                  ]),
                  _: 2
                }, 1032, ["onSelect"]))), 128)),
                i(x(_t), { class: "my-1 h-px bg-line" }),
                i(x(Ae), {
                  class: "flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-[13px] text-danger-600 outline-none data-[highlighted]:bg-danger-50",
                  onSelect: n[0] || (n[0] = (r) => s("signOut"))
                }, {
                  default: v(() => [
                    i(X, { name: "logout" }),
                    n[1] || (n[1] = h("Sign out ", -1))
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
}), Oc = ["aria-label"], Vc = ["aria-pressed", "onClick"], Vv = /* @__PURE__ */ b({
  __name: "SegmentedControl",
  props: /* @__PURE__ */ V({
    options: {},
    ariaLabel: { default: "View" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const a = O(e, "modelValue");
    return (s, o) => (A(), t("div", {
      class: "inline-flex rounded-md bg-gray-200 p-0.5",
      role: "group",
      "aria-label": e.ariaLabel
    }, [
      (A(!0), t(y, null, z(e.options, (n) => (A(), t("button", {
        key: n.value,
        type: "button",
        "aria-pressed": a.value === n.value,
        class: g(["inline-flex h-7 items-center gap-1.5 rounded-sm px-3 text-xs font-medium transition-colors", a.value === n.value ? "bg-surface text-ink shadow-xs" : "text-ink-2 hover:text-ink"]),
        onClick: (r) => a.value = n.value
      }, [
        n.icon ? (A(), k(X, {
          key: 0,
          name: n.icon,
          size: 14
        }, null, 8, ["name"])) : c("", !0),
        h(d(n.label), 1)
      ], 10, Vc))), 128))
    ], 8, Oc));
  }
}), Dc = {
  class: "flex w-full items-center gap-3",
  "aria-label": "Progress"
}, Rc = ["aria-current"], Tc = {
  key: 0,
  class: "sr-only"
}, Zc = {
  key: 0,
  class: "h-px min-w-4 flex-1 bg-line-strong",
  "aria-hidden": "true"
}, Dv = /* @__PURE__ */ b({
  __name: "Stepper",
  props: {
    steps: {},
    current: {},
    errorStep: {}
  },
  setup(e) {
    return (a, s) => (A(), t("ol", Dc, [
      (A(!0), t(y, null, z(e.steps, (o, n) => (A(), t("li", {
        key: o,
        class: g(["flex items-center gap-3", n < e.steps.length - 1 && "min-w-0 flex-1"]),
        "aria-current": n === e.current ? "step" : void 0
      }, [
        l("span", {
          class: g(["flex size-8 shrink-0 items-center justify-center rounded-full text-[13px] font-medium", n === e.errorStep ? "bg-danger-600 text-white" : n < e.current ? "bg-success-600 text-white" : n === e.current ? "bg-brand-600 text-white" : "border border-line-strong bg-surface text-ink-2"])
        }, [
          n === e.errorStep ? (A(), k(X, {
            key: 0,
            name: "x",
            size: 14,
            "stroke-width": 2.5
          })) : n < e.current ? (A(), k(X, {
            key: 1,
            name: "check",
            size: 14,
            "stroke-width": 2.5
          })) : (A(), t(y, { key: 2 }, [
            h(d(n + 1), 1)
          ], 64))
        ], 2),
        l("span", {
          class: g(["text-[13px] whitespace-nowrap", n === e.current ? "font-medium text-ink" : "text-ink-2"])
        }, [
          h(d(o), 1),
          n < e.current ? (A(), t("span", Tc, " (complete)")) : c("", !0)
        ], 2),
        n < e.steps.length - 1 ? (A(), t("span", Zc)) : c("", !0)
      ], 10, Rc))), 128))
    ]));
  }
}), Nc = {
  key: 1,
  class: "tnum"
}, Rv = /* @__PURE__ */ b({
  __name: "Tabs",
  props: /* @__PURE__ */ V({
    items: {},
    variant: { default: "underline" },
    ariaLabel: { default: "Tabs" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const a = O(e, "modelValue");
    return (s, o) => (A(), k(x(en), {
      modelValue: a.value,
      "onUpdate:modelValue": o[0] || (o[0] = (n) => a.value = n)
    }, {
      default: v(() => [
        i(x(An), {
          "aria-label": e.ariaLabel,
          class: g(["flex flex-wrap", e.variant === "underline" ? "gap-1 border-b border-line" : "gap-2"])
        }, {
          default: v(() => [
            (A(!0), t(y, null, z(e.items, (n) => (A(), k(x(tn), {
              key: n.id,
              value: n.id,
              disabled: n.locked,
              class: g(["inline-flex items-center gap-2 text-sm whitespace-nowrap transition-colors disabled:cursor-not-allowed disabled:text-ink-4", e.variant === "underline" ? "-mb-px border-b-2 border-transparent px-3.5 py-3 text-ink-2 hover:text-ink data-[state=active]:border-navy-900 data-[state=active]:font-semibold data-[state=active]:text-ink" : "h-8 rounded-full border border-line bg-surface px-3 text-[13px] font-medium text-gray-600 hover:bg-gray-50 data-[state=active]:border-brand-600 data-[state=active]:bg-brand-600 data-[state=active]:text-white"])
            }, {
              default: v(() => [
                n.icon ? (A(), k(X, {
                  key: 0,
                  name: n.icon
                }, null, 8, ["name"])) : c("", !0),
                h(" " + d(n.label) + " ", 1),
                n.count !== void 0 ? (A(), t("span", Nc, "(" + d(n.count) + ")", 1)) : c("", !0),
                n.locked ? (A(), k(X, {
                  key: 2,
                  name: "lock",
                  size: 13
                })) : c("", !0)
              ]),
              _: 2
            }, 1032, ["value", "disabled", "class"]))), 128))
          ]),
          _: 1
        }, 8, ["aria-label", "class"]),
        (A(!0), t(y, null, z(e.items, (n) => (A(), k(x(nn), {
          key: n.id,
          value: n.id,
          class: "pt-5 outline-none"
        }, {
          default: v(() => [
            B(s.$slots, n.id)
          ]),
          _: 2
        }, 1032, ["value"]))), 128))
      ]),
      _: 3
    }, 8, ["modelValue"]));
  }
}), jc = { class: "mt-4" }, Tv = /* @__PURE__ */ b({
  __name: "BottomSheet",
  props: /* @__PURE__ */ V({
    title: {},
    description: {}
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const a = O(e, "open");
    return (s, o) => (A(), k(x(ae), {
      open: a.value,
      "onUpdate:open": o[0] || (o[0] = (n) => a.value = n)
    }, {
      default: v(() => [
        s.$slots.trigger ? (A(), k(x(ge), {
          key: 0,
          "as-child": ""
        }, {
          default: v(() => [
            B(s.$slots, "trigger")
          ]),
          _: 3
        })) : c("", !0),
        i(x(le), null, {
          default: v(() => [
            i(x(se), { class: "fixed inset-0 z-50 bg-navy-900/45 animate-overlay" }),
            i(x(oe), {
              class: "fixed right-0 bottom-0 left-0 z-50 mx-auto max-h-[85vh] w-full max-w-[420px] overflow-auto rounded-t-2xl bg-surface px-5 pt-2 pb-6 shadow-pop animate-sheet",
              "aria-describedby": e.description ? void 0 : ""
            }, {
              default: v(() => [
                o[1] || (o[1] = l("span", {
                  class: "mx-auto mb-4 block h-1 w-10 rounded-full bg-gray-300",
                  "aria-hidden": "true"
                }, null, -1)),
                i(x(re), { class: "text-lg font-semibold text-ink" }, {
                  default: v(() => [
                    h(d(e.title), 1)
                  ]),
                  _: 1
                }),
                e.description ? (A(), k(x(xe), {
                  key: 0,
                  class: "mt-1 text-sm text-ink-2"
                }, {
                  default: v(() => [
                    h(d(e.description), 1)
                  ]),
                  _: 1
                })) : c("", !0),
                l("div", jc, [
                  B(s.$slots, "default")
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
}), Sc = { class: "mt-6 flex justify-end gap-2" }, Zv = /* @__PURE__ */ b({
  __name: "ConfirmDialog",
  props: /* @__PURE__ */ V({
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
  emits: /* @__PURE__ */ V(["confirm"], ["update:open"]),
  setup(e, { emit: a }) {
    const s = O(e, "open"), o = a;
    return (n, r) => (A(), k(x(an), {
      open: s.value,
      "onUpdate:open": r[1] || (r[1] = (u) => s.value = u)
    }, {
      default: v(() => [
        n.$slots.trigger ? (A(), k(x(ln), {
          key: 0,
          "as-child": ""
        }, {
          default: v(() => [
            B(n.$slots, "trigger")
          ]),
          _: 3
        })) : c("", !0),
        i(x(sn), null, {
          default: v(() => [
            i(x(on), { class: "fixed inset-0 z-50 bg-navy-900/45 animate-overlay" }),
            i(x(rn), { class: "fixed top-1/2 left-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-surface p-6 shadow-pop animate-modal" }, {
              default: v(() => [
                e.icon ? (A(), k(S, {
                  key: 0,
                  icon: e.icon,
                  tone: e.tone === "danger" ? "danger" : "brand",
                  class: "mb-4"
                }, null, 8, ["icon", "tone"])) : c("", !0),
                i(x(dn), { class: "text-lg font-semibold tracking-tight text-ink" }, {
                  default: v(() => [
                    h(d(e.title), 1)
                  ]),
                  _: 1
                }),
                i(x(un), { class: "mt-1.5 text-sm leading-[22px] text-ink-2" }, {
                  default: v(() => [
                    h(d(e.description), 1)
                  ]),
                  _: 1
                }),
                B(n.$slots, "default"),
                l("div", Sc, [
                  i(x(cn), { "as-child": "" }, {
                    default: v(() => [
                      i(j, { variant: "secondary" }, {
                        default: v(() => [
                          h(d(e.cancelLabel), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  i(x(fn), { "as-child": "" }, {
                    default: v(() => [
                      i(j, {
                        variant: e.tone,
                        onClick: r[0] || (r[0] = (u) => o("confirm"))
                      }, {
                        default: v(() => [
                          h(d(e.confirmLabel), 1)
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
}), Ic = { class: "flex items-start justify-between gap-4 border-b border-line px-5 py-4" }, Fc = { class: "flex-1 overflow-auto" }, Jc = {
  key: 0,
  class: "flex justify-end gap-2 border-t border-line px-5 py-3"
}, Nv = /* @__PURE__ */ b({
  __name: "Drawer",
  props: /* @__PURE__ */ V({
    title: {},
    description: {},
    width: { default: 480 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const a = O(e, "open");
    return (s, o) => (A(), k(x(ae), {
      open: a.value,
      "onUpdate:open": o[0] || (o[0] = (n) => a.value = n)
    }, {
      default: v(() => [
        s.$slots.trigger ? (A(), k(x(ge), {
          key: 0,
          "as-child": ""
        }, {
          default: v(() => [
            B(s.$slots, "trigger")
          ]),
          _: 3
        })) : c("", !0),
        i(x(le), null, {
          default: v(() => [
            i(x(se), { class: "fixed inset-0 z-50 bg-navy-900/35 animate-overlay" }),
            i(x(oe), {
              class: "fixed inset-y-0 right-0 z-50 flex max-w-full flex-col bg-surface shadow-pop animate-drawer",
              style: T({ width: `${e.width}px` }),
              "aria-describedby": e.description ? void 0 : ""
            }, {
              default: v(() => [
                l("header", Ic, [
                  l("div", null, [
                    i(x(re), { class: "text-base font-semibold text-ink" }, {
                      default: v(() => [
                        h(d(e.title), 1)
                      ]),
                      _: 1
                    }),
                    e.description ? (A(), k(x(xe), {
                      key: 0,
                      class: "mt-0.5 text-[13px] text-ink-2"
                    }, {
                      default: v(() => [
                        h(d(e.description), 1)
                      ]),
                      _: 1
                    })) : c("", !0)
                  ]),
                  i(x(Oe), {
                    "aria-label": "Close",
                    class: "text-ink-3 hover:text-ink"
                  }, {
                    default: v(() => [
                      i(X, {
                        name: "x",
                        size: 18
                      })
                    ]),
                    _: 1
                  })
                ]),
                l("div", Fc, [
                  B(s.$slots, "default")
                ]),
                s.$slots.footer ? (A(), t("footer", Jc, [
                  B(s.$slots, "footer")
                ])) : c("", !0)
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
}), Qc = { class: "flex items-start justify-between gap-4" }, qc = { class: "mt-4 text-sm text-gray-700" }, Mc = {
  key: 1,
  class: "mt-6 flex justify-end gap-2"
}, jv = /* @__PURE__ */ b({
  __name: "Modal",
  props: /* @__PURE__ */ V({
    title: {},
    description: {},
    size: { default: "md" }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const a = O(e, "open"), s = { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-3xl" };
    return (o, n) => (A(), k(x(ae), {
      open: a.value,
      "onUpdate:open": n[0] || (n[0] = (r) => a.value = r)
    }, {
      default: v(() => [
        o.$slots.trigger ? (A(), k(x(ge), {
          key: 0,
          "as-child": ""
        }, {
          default: v(() => [
            B(o.$slots, "trigger")
          ]),
          _: 3
        })) : c("", !0),
        i(x(le), null, {
          default: v(() => [
            i(x(se), { class: "fixed inset-0 z-50 bg-navy-900/45 animate-overlay" }),
            i(x(oe), {
              class: g(["fixed top-1/2 left-1/2 z-50 max-h-[85vh] w-[92vw] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-xl bg-surface p-6 shadow-pop animate-modal", s[e.size]]),
              "aria-describedby": e.description ? void 0 : ""
            }, {
              default: v(() => [
                l("div", Qc, [
                  i(x(re), { class: "text-lg font-semibold tracking-tight text-ink" }, {
                    default: v(() => [
                      h(d(e.title), 1)
                    ]),
                    _: 1
                  }),
                  i(x(Oe), {
                    "aria-label": "Close",
                    class: "text-ink-3 hover:text-ink"
                  }, {
                    default: v(() => [
                      i(X, {
                        name: "x",
                        size: 18
                      })
                    ]),
                    _: 1
                  })
                ]),
                e.description ? (A(), k(x(xe), {
                  key: 0,
                  class: "mt-1.5 text-sm leading-[22px] text-ink-2"
                }, {
                  default: v(() => [
                    h(d(e.description), 1)
                  ]),
                  _: 1
                })) : c("", !0),
                l("div", qc, [
                  B(o.$slots, "default")
                ]),
                o.$slots.footer ? (A(), t("div", Mc, [
                  B(o.$slots, "footer")
                ])) : c("", !0)
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
}), Sv = /* @__PURE__ */ b({
  __name: "PopoverCard",
  props: {
    side: { default: "bottom" },
    width: { default: 300 }
  },
  setup(e) {
    return (a, s) => (A(), k(x(Le), null, {
      default: v(() => [
        i(x(Be), { "as-child": "" }, {
          default: v(() => [
            B(a.$slots, "trigger")
          ]),
          _: 3
        }),
        i(x(He), null, {
          default: v(() => [
            i(x(Ce), {
              side: e.side,
              "side-offset": 8,
              class: "z-50 rounded-md border border-line bg-surface p-4 text-sm text-gray-700 shadow-pop",
              style: T({ width: `${e.width}px` })
            }, {
              default: v(() => [
                B(a.$slots, "default"),
                i(x(vn), { class: "fill-surface" })
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
  Sf as AccordionList,
  If as ActivityFeed,
  $c as AiRecommendation,
  _c as AiSummary,
  Yf as Alert,
  gv as AppHeader,
  ef as AppShell,
  Xf as AreaChart,
  Af as AuthCard,
  De as Avatar,
  Ff as AvatarGroup,
  Q as Badge,
  Ga as BigStat,
  xv as BottomNav,
  Tv as BottomSheet,
  de as BrandMark,
  Pv as Breadcrumbs,
  j as Button,
  Jf as Card,
  Xu as CarouselDots,
  Di as ChannelChoice,
  md as ChannelLabel,
  Pf as ChartLegend,
  E as Checkbox,
  zv as CommandPalette,
  Qf as CompactCount,
  Zv as ConfirmDialog,
  hv as ConsentSplit,
  gd as CornerTag,
  es as CountdownPill,
  tf as CsvFormatCard,
  Df as DataTable,
  we as DateField,
  nf as DecisionBar,
  sv as DeclarationCheck,
  Ua as DeltaPill,
  qf as Divider,
  Rf as DocumentViewer,
  Dl as DonutChart,
  Nv as Drawer,
  af as EvidenceCard,
  q as Eyebrow,
  $f as FeedbackCard,
  ov as FileDropzone,
  Tf as FilterBar,
  ic as FilterPills,
  lo as FormField,
  zf as FunnelChart,
  Lf as GaugeChart,
  lf as GoLiveBanner,
  pv as GreetingBar,
  Zf as HashBadge,
  sf as HeroStat,
  pe as Hint,
  X as Icon,
  I as IconButton,
  S as IconTile,
  Nf as JsonDiff,
  Y as Kbd,
  Mf as KeyValueList,
  of as KpiCard,
  he as LinkArrow,
  yv as ListCard,
  rf as LiveChecks,
  _f as LiveIndicator,
  df as LobFileGroup,
  Kl as LockedPill,
  G as LogoMark,
  Ef as MaskedValue,
  Uc as MenuButton,
  Wf as MetaChip,
  uf as MetricStrip,
  Bf as MiniBars,
  jv as Modal,
  rv as MultiSelect,
  cf as NextSteps,
  ev as NotificationItem,
  dv as NumberInput,
  ff as OnboardingPath,
  aa as OrgSwitcher,
  iv as OtpInput,
  vf as OutcomeSummary,
  Lv as PageHeader,
  Av as PageLoader,
  Bv as Pagination,
  Tr as PanelState,
  uv as PasswordInput,
  Hv as PeriodFilter,
  Cv as PhaseTracker,
  kv as PhoneFrame,
  Sv as PopoverCard,
  bf as ProcessStatus,
  mf as ProcessingPanel,
  Ov as ProfileMenu,
  J as ProgressBar,
  wv as PromoBanner,
  Xv as PurposeItem,
  cv as RadioGroup,
  Hf as RankedBars,
  fv as RateInput,
  jf as RateMatrix,
  gf as ResultCard,
  Yc as RowActions,
  Cf as SankeyFlow,
  xf as ScanPreview,
  $r as SearchInput,
  Vv as SegmentedControl,
  Ze as SelectField,
  hf as SetupCard,
  Kn as SidebarNav,
  pf as SignatureBlock,
  Cr as Skeleton,
  tv as SlaTimer,
  vv as SliderField,
  el as Sparkline,
  ye as Spinner,
  Of as StackedBars,
  Vf as StateTileMap,
  Gf as StatusChip,
  Dv as Stepper,
  nv as StickyActionBar,
  yf as SummaryStat,
  Rv as Tabs,
  Ai as Tag,
  bv as TagsField,
  mv as TextArea,
  ie as TextInput,
  lv as ToastStack,
  ee as Toggle,
  ra as Topbar,
  Kf as TreeList,
  Uf as TruncatedText,
  kf as UploadChecklist,
  Re as UserChip,
  wf as WelcomeHero,
  Kc as iconNames,
  Ve as icons,
  Yd as statusMap,
  av as useToast
};
