"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Aqui você pode integrar com sua API de autenticação
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-panel-bg px-4">
      {/* Fundo com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-800/10 pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Card de login */}
        <div className="bg-panel-card border border-panel-border rounded-2xl shadow-xl shadow-black/20 p-8">
          {/* Logo / Título */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white">PAINEL</h1>
            <p className="text-slate-400 mt-1 text-sm">
              Entre com suas credenciais para acessar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800/80 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label
                htmlFor="senha"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Senha
              </label>
              <input
                id="senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800/80 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-slate-600 bg-slate-800 text-primary-500 focus:ring-primary-500"
                />
                Lembrar de mim
              </label>
              <Link
                href="#"
                className="text-primary-400 hover:text-primary-300 transition"
              >
                Esqueci a senha
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Não tem conta?{" "}
            <Link href="#" className="text-primary-400 hover:text-primary-300">
              Solicitar acesso
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-slate-600 text-xs">
          <Link href="/" className="hover:text-slate-500">
            ← Voltar ao início
          </Link>
        </p>
      </div>
    </main>
  );
}
