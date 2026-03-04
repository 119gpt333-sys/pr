import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Flame, Search, ChevronLeft, ChevronRight, Bookmark, MapPin, TrendingUp, BookOpen, Send, Paperclip, X, Download } from 'lucide-react';

const Navbar = () => (
    <nav className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
        <div className="page-shell flex items-center justify-between py-4 gap-6">
            <Link to="/" className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-primary/10 flex items-center justify-center shadow-[0_0_0_1px_rgba(248,250,252,0.06)]">
                    <Flame className="w-5 h-5 text-primary fill-primary" />
                </div>
                <div className="flex flex-col leading-tight">
                    <span className="text-sm font-bold tracking-[0.18em] uppercase text-slate-400">
                        SEOUL FIRE GPT
                    </span>
                    <span className="text-sm md:text-[15px] font-semibold text-slate-50">
                        서울소방 GPT 리서치 플랫폼
                    </span>
                </div>
            </Link>

            <div className="hidden md:flex items-center gap-6 text-[13px] font-semibold text-slate-400">
                <Link to="/" className="text-slate-50">
                    홈
                </Link>
                <button className="hover:text-slate-100 transition-colors">
                    인사이트
                </button>
                <button className="hover:text-slate-100 transition-colors">
                    프로토콜
                </button>
                <button className="hover:text-slate-100 transition-colors">
                    AI 챗봇
                </button>
                <button className="hover:text-slate-100 transition-colors">
                    FAQ
                </button>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden sm:block relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                        type="text"
                        placeholder="통합 검색 (연구, 프로토콜, 뉴스)"
                        className="bg-slate-900/70 border border-slate-700 rounded-full pl-9 pr-4 py-1.5 text-xs md:text-sm w-52 md:w-64 focus:outline-none focus:ring-2 focus:ring-primary/40 text-slate-100 placeholder:text-slate-500 transition-all"
                    />
                </div>
                <button className="hidden md:inline-flex bg-primary text-white px-5 py-1.5 rounded-full text-xs font-bold hover:bg-primary-hover transition-colors shadow-md shadow-primary/40">
                    + 글쓰기
                </button>
                <div className="w-8 h-8 rounded-full bg-slate-700 shrink-0 flex items-center justify-center overflow-hidden border border-slate-500/60">
                    <img src="https://ui-avatars.com/api/?name=User&background=E31B23&color=fff" alt="User Avatar" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </nav>
);

const ResearchCards = () => {
    const cards = [
        {
            id: 1,
            image: 'https://placehold.co/800x480/0F172A/E31B23?text=AI+Prediction',
            tags: ['AI', 'PREDICTION'],
            title: 'AI-Driven Risk Prediction 2024',
            description: 'Implementing transformer models for predicting urban structural fire risks in high-density districts.',
            author: 'Dr. Kim Jin-Su',
            date: 'Jan 12, 2024',
            avatar: 'https://ui-avatars.com/api/?name=Dr+Kim&background=E31B23&color=fff'
        },
        {
            id: 2,
            image: 'https://placehold.co/800x480/0F172A/E31B23?text=Smart+Equipment',
            tags: ['EQUIPMENT', 'STANDARDS'],
            title: 'Smart Equipment Protocols',
            description: 'Standardizing IoT-enabled breathing apparatus for real-time biometrics tracking in field operations.',
            author: 'Chief Park Sang-Hoon',
            date: 'Jan 10, 2024',
            avatar: 'https://ui-avatars.com/api/?name=Chief+Park&background=1E293B&color=fff'
        },
        {
            id: 3,
            image: 'https://placehold.co/800x480/0F172A/E31B23?text=Urban+Safety',
            tags: ['SAFETY', 'URBAN'],
            title: 'Urban Fire Safety 2024 Report',
            description: 'Comprehensive analysis of fire safety regulations for high-rise residential buildings in Gangnam district.',
            author: 'Research Division',
            date: 'Jan 08, 2024',
            avatar: 'https://ui-avatars.com/api/?name=Research&background=475569&color=fff'
        }
    ];

    return (
        <section className="py-4 md:py-10">
            <div className="page-shell">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                    <div>
                        <p className="text-[11px] font-semibold text-sky-400 uppercase tracking-[0.18em] mb-2">
                            INSIGHT · NEW
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-50">
                            인사이트
                        </h2>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-700/80 text-slate-300 hover:border-primary hover:text-primary transition-colors">
                            전체보기
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 text-xs md:text-[13px] font-semibold">
                    {['영상 보기', '추천 인사이트', '전체 보기'].map((label, index) => (
                        <button
                            key={label}
                            className={`px-4 py-1.5 rounded-full border transition-colors ${
                                index === 1
                                    ? 'bg-slate-100 text-slate-900 border-slate-100 shadow-md'
                                    : 'border-slate-700/80 text-slate-300 hover:border-slate-400 hover:text-slate-50'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map(card => (
                        <div
                            key={card.id}
                            className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 shadow-[0_18px_40px_rgba(15,23,42,0.9)] hover:shadow-[0_26px_60px_rgba(15,23,42,1)] hover:-translate-y-1.5 transition-all duration-300"
                        >
                            <div className="h-44 relative overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-3 left-3 flex gap-2">
                                    {card.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="bg-slate-950/80 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-100 border border-slate-700/80"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <p className="text-[11px] font-semibold text-slate-400 mb-1 tracking-[0.16em] uppercase">
                                    RESEARCH · 구조/장비 인사이트
                                </p>
                                <h3 className="text-base md:text-lg font-bold text-slate-50 mb-2.5 leading-snug line-clamp-2">
                                    {card.title}
                                </h3>
                                <p className="text-xs md:text-sm text-slate-400 mb-5 flex-1 leading-relaxed line-clamp-3">
                                    {card.description}
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={card.avatar}
                                            alt={card.author}
                                            className="w-8 h-8 rounded-full object-cover bg-slate-800"
                                        />
                                        <div>
                                            <p className="text-[11px] font-semibold text-slate-200">{card.author}</p>
                                            <p className="text-[10px] text-slate-500 font-medium">{card.date}</p>
                                        </div>
                                    </div>
                                    <button className="text-slate-500 hover:text-primary transition-colors">
                                        <Bookmark size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ChatAssistant = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <div className="w-full max-w-5xl rounded-[2.5rem] shadow-[0_28px_80px_rgba(0,0,0,0.95)] flex flex-col h-[85vh] overflow-hidden relative border border-slate-700/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 animate-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="px-8 py-5 border-b border-slate-800/80 bg-slate-900/80 backdrop-blur flex justify-between items-center shrink-0">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/15 text-primary p-2.5 rounded-2xl border border-primary/30">
                            <Flame size={24} className="fill-primary text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-50">Active Session: Incident #FR-2024-081</h3>
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                Assistant Online • Data-driven Protocol Analysis
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-300 bg-slate-800/80 px-3 py-1 rounded-full tracking-wider uppercase border border-slate-600/80">AUGUST 24, 2024 • 14:32</span>
                        <button className="p-2 text-slate-500 hover:text-slate-200 transition-colors" title="Download Log">
                            <Download size={18} />
                        </button>
                        <button onClick={onClose} className="p-2 text-slate-400 hover:text-primary transition-colors bg-slate-900 rounded-full shadow-sm border border-slate-700/80" title="Close">
                            <X size={18} />
                        </button>
                    </div>
                </div>

                <div className="flex flex-1 overflow-hidden relative">

                    {/* Quick Tools Sidebar (Floating) */}
                    <div className="absolute left-6 top-10 w-64 bg-slate-950/95 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] border border-slate-700/80 p-4 z-10 backdrop-blur-xl">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">
                            QUICK TOOLS
                        </p>
                        <div className="space-y-1">
                            <button className="w-full flex items-center gap-3 px-3 py-3 hover:bg-slate-900 rounded-2xl text-sm font-bold text-slate-100 transition-colors text-left group">
                                <MapPin size={18} className="text-slate-400 group-hover:text-primary" /> Deploy Protocol
                            </button>
                            <button className="w-full flex items-center gap-3 px-3 py-3 hover:bg-slate-900 rounded-2xl text-sm font-bold text-slate-100 transition-colors text-left group">
                                <TrendingUp size={18} className="text-slate-400 group-hover:text-primary" /> Incident
                                Prediction
                            </button>
                            <button className="w-full flex items-center gap-3 px-3 py-3 hover:bg-slate-900 rounded-2xl text-sm font-bold text-slate-100 transition-colors text-left group">
                                <BookOpen size={18} className="text-slate-400 group-hover:text-primary" /> Regulatory
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Chat Content */}
                    <div className="flex-1 overflow-y-auto pl-72 pr-8 py-8 space-y-8 pb-32 text-slate-50">

                        {/* System Message */}
                        <div className="flex gap-4 max-w-3xl">
                            <div className="w-10 h-10 rounded-2xl bg-primary shadow-lg shadow-primary/40 flex items-center justify-center shrink-0 mt-2">
                                <Flame size={20} className="text-white fill-white" />
                            </div>
                            <div className="bg-slate-900/80 rounded-3xl rounded-tl-sm p-6 border border-slate-700/80">
                                <h4 className="text-sm font-bold text-primary mb-2">Gemini Assistant</h4>
                                <p className="text-sm text-slate-100 leading-relaxed mb-4">
                                    Hello. I have synchronized with the <strong className="font-bold">Seoul Metropolitan Fire & Disaster Management Headquarters</strong> real-time database. I am ready to assist with technical analysis, resource allocation strategies, or historical disaster comparisons.
                                </p>
                                <p className="text-sm text-slate-100 leading-relaxed">
                                    How can I support your mission today?
                                </p>
                            </div>
                        </div>

                        {/* User Message */}
                        <div className="flex gap-4 max-w-2xl ml-auto flex-row-reverse">
                            <div className="w-10 h-10 rounded-full bg-slate-800 shadow-sm flex items-center justify-center shrink-0 text-slate-500 overflow-hidden mt-2">
                                <img src="https://ui-avatars.com/api/?name=User&background=E31B23&color=fff" alt="User" className="w-full h-full object-cover" />
                            </div>
                            <div className="bg-primary rounded-3xl rounded-tr-sm p-5 shadow-lg shadow-primary/30 text-white">
                                <p className="text-sm font-medium leading-relaxed">
                                    What is the estimated water requirement for a Grade 1 warehouse fire in Gangnam district, assuming a 2,500m² facility with chemical storage?
                                </p>
                            </div>
                        </div>

                        {/* System Message 2 */}
                        <div className="flex gap-4 max-w-3xl">
                            <div className="w-10 h-10 rounded-2xl bg-primary shadow-lg shadow-primary/40 flex items-center justify-center shrink-0 mt-2">
                                <Flame size={20} className="text-white fill-white" />
                            </div>
                            <div className="bg-slate-900/80 rounded-3xl rounded-tl-sm p-6 border border-slate-700/80">
                                <h4 className="text-sm font-bold text-primary mb-3">Gemini Assistant • Archive Analysis</h4>
                                <p className="text-sm text-slate-100 leading-relaxed mb-6">
                                    Based on the <strong className="font-bold">Seoul Fire Protection Standard (SFPS) Section 4.2</strong> for industrial storage units, the calculations for a Grade 1 warehouse in Gangnam are as follows:
                                </p>

                                <div className="bg-slate-950/70 rounded-xl p-4 font-mono text-sm space-y-3 mb-2 shadow-sm border border-slate-700/80">
                                    <div className="flex justify-between items-center text-slate-300">
                                        <span>Base Calculation (Standard):</span>
                                        <span className="font-medium">6,500 L/min</span>
                                    </div>
                                    <div className="flex justify-between items-center text-slate-300 border-b border-slate-700/80 pb-3">
                                        <span>Chemical Multiplier (Grade 1):</span>
                                        <span className="font-medium">x 1.75</span>
                                    </div>
                                    <div className="flex justify-between items-center text-primary pt-1">
                                        <span className="font-bold">Total Minimum Output:</span>
                                        <span className="font-bold text-lg">11,375 L/min</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Input Area */}
                    <div className="absolute bottom-6 left-72 right-8">
                        <div className="bg-slate-900/90 rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.85)] border border-slate-700/80 p-2 flex items-center">
                            <button className="p-3 text-slate-400 hover:text-primary transition-colors">
                                <Flame size={20} />
                            </button>
                            <input
                                type="text"
                                placeholder="프로토콜, 데이터 분석, 과거 유사 사례를 물어보세요..."
                                className="flex-1 bg-transparent px-2 py-2 text-sm focus:outline-none font-medium text-slate-100 placeholder:text-slate-500"
                            />
                            <button className="p-3 text-slate-400 hover:text-slate-200 transition-colors">
                                <Paperclip size={20} />
                            </button>
                            <button className="bg-primary text-white p-3 rounded-full hover:bg-primary-hover transition-colors shadow-md shadow-primary/40 ml-1 hover:scale-105 active:scale-95">
                                <Send size={20} className="ml-1" />
                            </button>
                        </div>
                        <div className="flex justify-between items-center px-4 mt-3">
                            <div className="flex gap-4">
                                <span className="text-[10px] text-slate-500 font-bold flex items-center gap-1.5">
                                    <strong className="w-2.5 h-3.5 rounded-sm border-2 border-slate-500/70 relative">
                                        <span className="absolute top-0 w-full h-1 bg-slate-500/70" />
                                    </strong>
                                    Encrypted Connection
                                </span>
                                <span className="text-[10px] text-slate-500 font-bold flex items-center gap-1.5">
                                    ◷ History Enabled
                                </span>
                            </div>
                            <span className="text-[10px] text-slate-500 font-medium">Powered by Gemini 1.5 Pro</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const Home = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <div className="min-h-screen pb-20 font-sans selection:bg-primary/20 selection:text-primary animate-in fade-in duration-500">
            <Navbar />

            <section className="py-10 md:py-16">
                <div className="page-shell text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold text-slate-200 mb-6 bg-slate-900/70 border border-slate-700/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        AI 시대를 살아가는 가장 똑똑한 방법
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight text-slate-50 mb-4">
                        SEOUL FIRE GPT 의
                        <br className="hidden sm:block" />
                        <span className="mt-1 inline-block bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500 bg-clip-text text-transparent">
                            AI 인사이트 허브
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-medium mb-8">
                        최신 소방 기술 트렌드, 검증된 프로토콜 엔지니어링 가이드, 그리고 현장에서 바로 적용 가능한
                        바이브 코드까지. 서울소방의 데이터와 경험을 기반으로 한 프리미엄 AI 인사이트를 한 화면에서
                        만나보세요.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        <button className="bg-primary text-white px-7 md:px-8 py-3 rounded-full text-xs md:text-sm font-bold hover:bg-primary-hover transition-all hover:scale-105 shadow-xl shadow-primary/40">
                            오늘의 인사이트 보기
                        </button>
                        <button className="bg-slate-900/80 text-slate-100 px-7 md:px-8 py-3 rounded-full text-xs md:text-sm font-bold border border-slate-700/80 hover:bg-slate-800 transition-all">
                            플랫폼 소개 영상
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 text-[11px] text-slate-400 font-medium">
                        <span>연구 리포트 · 장비 성능 분석 · 재난 유형별 프로토콜</span>
                        <span className="hidden sm:inline-block h-3 w-px bg-slate-600/70" />
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                            Gemini 1.5 Flash 기반 서울소방 전용 어시스턴트
                        </span>
                    </div>
                </div>
            </section>

            <ResearchCards />

            {/* Footer / Copyright */}
            <footer className="bg-secondary text-slate-400 py-10 px-8 mt-12 border-t border-slate-800">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Flame className="w-5 h-5 text-slate-500" />
                        <span className="font-bold text-slate-300 tracking-wider">SEOUL FIRE <span className="opacity-50">GPT</span></span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Contact Center</a>
                    </div>
                    <div className="text-xs text-slate-500">
                        © 2024 Seoul Metropolitan Fire & Disaster Management Headquarters. All rights reserved.
                    </div>
                </div>
            </footer>

            {/* Floating Chat Button */}
            <button
                onClick={() => setIsChatOpen(true)}
                className="fixed bottom-8 right-8 flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-primary text-white shadow-[0_20px_60px_rgba(227,27,35,0.7)] hover:scale-105 active:scale-95 transition-all z-50 overflow-hidden group"
            >
                <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                        <Flame className="fill-white w-5 h-5 group-hover:animate-pulse" />
                    </div>
                    <div className="flex flex-col mr-1">
                        <span className="text-[11px] font-semibold leading-tight">AI 상담 열기</span>
                        <span className="text-[10px] text-white/80 leading-tight">서울소방 전용 Gemini 어시스턴트</span>
                    </div>
                </div>
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-20">
                    1
                </span>
            </button>

            {/* Chat Overlay Modal */}
            <ChatAssistant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
    );
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
