function Footer() {
  return (
    <footer className="py-8 px-4 bg-[#505052] text-center text-slate-400 text-sm mt-20 w-full">
      <div className="flex items-center justify-center gap-4">
        <span>&copy; {new Date().getFullYear()} Yarm Building Solutions. All rights reserved.</span>
        <img src='/images/ybs-logo-1.png' alt="Yarm Building Solutions Logo" className="h-8 w-auto inline-block" />
      </div>
    </footer>
  )
}

export default Footer