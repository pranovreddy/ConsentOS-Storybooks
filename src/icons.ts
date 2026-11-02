import {
  Activity, ArrowLeft, ArrowLeftRight, ArrowRight, Ban, Bell, BellRing, BookOpen, Building2, Calendar, ChartColumn, ChartLine,
  ChartPie, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsLeft, Circle, CircleAlert, CircleCheck, CircleDollarSign,
  CircleHelp, CircleX, Clock, Copy, CreditCard, Database, DollarSign, Download, EllipsisVertical, Eye, EyeOff, FileCheck, FilePlus, FileText, Filter, Flag,
  Funnel, Gavel, Globe, Hash, House, Info, Key, Languages, ListChecks, Lock, LogOut, Mail, Map, Menu, MessageSquare, MessageSquareDot, Mic, Paperclip, Phone,
  Plug, Plus, Radio, RadioTower, RefreshCw, Search, Send, Settings, Shield, ShieldAlert, ShieldCheck, ShieldOff, SlidersHorizontal, Sparkles, Trash2, TrendingUp, TriangleAlert,
  Upload, User, UserPlus, Users, Wallet, X, Zap,
} from '@lucide/vue'

export const icons = {
  activity: Activity, 'arrow-left': ArrowLeft, 'arrow-left-right': ArrowLeftRight, 'arrow-right': ArrowRight, ban: Ban, bell: Bell, 'bell-ring': BellRing,
  book: BookOpen, building: Building2, calendar: Calendar, 'chart-column': ChartColumn, 'chart-line': ChartLine, 'chart-pie': ChartPie, check: Check,
  'chevron-down': ChevronDown, 'chevron-left': ChevronLeft, 'chevron-right': ChevronRight, 'chevron-up': ChevronUp, 'chevrons-left': ChevronsLeft, circle: Circle,
  'circle-alert': CircleAlert, 'circle-check': CircleCheck, 'circle-dollar': CircleDollarSign, 'circle-help': CircleHelp, 'circle-x': CircleX, clock: Clock, copy: Copy,
  'credit-card': CreditCard, database: Database, dollar: DollarSign, download: Download, ellipsis: EllipsisVertical, eye: Eye, 'eye-off': EyeOff, 'file-check': FileCheck, 'file-plus': FilePlus,
  file: FileText, filter: Filter, flag: Flag, funnel: Funnel, gavel: Gavel, globe: Globe, hash: Hash, home: House, info: Info, key: Key, languages: Languages, 'list-checks': ListChecks,
  lock: Lock, logout: LogOut, mail: Mail, map: Map, menu: Menu, message: MessageSquare, 'message-dot': MessageSquareDot, mic: Mic, paperclip: Paperclip, phone: Phone, plug: Plug, plus: Plus,
  radio: Radio, tower: RadioTower, refresh: RefreshCw, search: Search, send: Send, settings: Settings, shield: Shield, 'shield-alert': ShieldAlert, 'shield-check': ShieldCheck, 'shield-off': ShieldOff,
  sliders: SlidersHorizontal, sparkles: Sparkles, trash: Trash2, trend: TrendingUp, warning: TriangleAlert, upload: Upload, user: User, 'user-plus': UserPlus, users: Users, wallet: Wallet, x: X, zap: Zap,
} as const

export type IconName = keyof typeof icons
export const iconNames = Object.keys(icons) as IconName[]
