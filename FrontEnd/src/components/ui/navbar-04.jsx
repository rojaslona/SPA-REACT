import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react'
import { cn } from '../../lib/utils'
import { LiquidButton } from './liquid-button'

export function Navbar04({
  logo = "H&B SPA",
  logoHref = "/",
  navigationLinks = [],
  cartText,
  cartHref,
  cartCount,
  signInText,
  signInHref,
  onSignInClick,
  searchPlaceholder = "Buscar...",
  onSearchSubmit,
  className,
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)

  // Detect mobile using ResizeObserver
  useEffect(() => {
    const checkMobile = () => {
      if (navRef.current) {
        setIsMobile(navRef.current.offsetWidth < 768)
      }
    }

    checkMobile()
    const resizeObserver = new ResizeObserver(checkMobile)
    
    if (navRef.current) {
      resizeObserver.observe(navRef.current)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const query = formData.get('search')
    if (onSearchSubmit) {
      onSearchSubmit(query)
    }
  }

  return (
    <nav
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-background/95 backdrop-blur-sm',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to={logoHref}
            className="font-cormorant font-bold text-2xl md:text-3xl text-foreground transition-all duration-300 hover:scale-105 z-50"
          >
            {logo}
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-8">
              {/* Navigation Links */}
              <div className="flex items-center gap-6">
                {navigationLinks.map((link, index) => {
                  const isActive = location.pathname === link.to || 
                    (link.to !== '/' && location.pathname.startsWith(link.to))
                  
                  return (
                    <Link
                      key={index}
                      to={link.to}
                      className={cn(
                        'relative font-lato text-sm font-medium transition-colors duration-300',
                        isActive
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* Search Bar */}
              {onSearchSubmit && (
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    type="text"
                    name="search"
                    placeholder={searchPlaceholder}
                    className="w-48 h-9 pl-9 pr-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </form>
              )}

              {/* Cart */}
              {cartHref && (
                <Link to={cartHref} className="relative">
                  <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              )}

              {/* Sign In Button */}
              {(signInHref || onSignInClick) && (
                <LiquidButton
                  variant="default"
                  size="sm"
                  onClick={onSignInClick}
                  asChild={!!signInHref}
                >
                  {signInHref ? (
                    <Link to={signInHref}>
                      <User className="h-4 w-4" />
                      {signInText || "Iniciar Sesión"}
                    </Link>
                  ) : (
                    <>
                      <User className="h-4 w-4" />
                      {signInText || "Iniciar Sesión"}
                    </>
                  )}
                </LiquidButton>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-accent transition-colors z-50"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </motion.button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              {/* Mobile Navigation Links */}
              {navigationLinks.map((link, index) => {
                const isActive = location.pathname === link.to || 
                  (link.to !== '/' && location.pathname.startsWith(link.to))
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      className={cn(
                        'block py-3 px-4 rounded-xl font-lato font-medium transition-all duration-300',
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}

              {/* Mobile Search */}
              {onSearchSubmit && (
                <motion.form
                  onSubmit={handleSearchSubmit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationLinks.length * 0.1 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="search"
                    placeholder={searchPlaceholder}
                    className="w-full h-11 pl-10 pr-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </motion.form>
              )}

              {/* Mobile Actions */}
              <motion.div
                className="flex flex-col gap-3 pt-4 border-t border-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (navigationLinks.length + 1) * 0.1 }}
              >
                {cartHref && (
                  <Link
                    to={cartHref}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-accent transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span className="font-lato font-medium">
                      {cartText || "Carrito"}
                      {cartCount > 0 && ` (${cartCount})`}
                    </span>
                  </Link>
                )}

                {(signInHref || onSignInClick) && (
                  <LiquidButton
                    variant="default"
                    size="lg"
                    className="w-full"
                    onClick={onSignInClick}
                    asChild={!!signInHref}
                  >
                    {signInHref ? (
                      <Link to={signInHref} className="flex items-center justify-center gap-2">
                        <User className="h-4 w-4" />
                        {signInText || "Iniciar Sesión"}
                      </Link>
                    ) : (
                      <>
                        <User className="h-4 w-4" />
                        {signInText || "Iniciar Sesión"}
                      </>
                    )}
                  </LiquidButton>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
