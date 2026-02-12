import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-panel-bg">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-white">Painel</h1>
        <p className="text-slate-400">Acesse sua conta para continuar.</p>
        <Link
          href="/login"
          className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-colors"
        >
          Ir para Login
        </Link>
      </div>
    </main>
  );
}
