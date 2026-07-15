export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} PT Tirta Mega Nusantara. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
