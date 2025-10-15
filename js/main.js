// ParentShopper JavaScript - Minimal, Performance-Focused

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('mobile-menu-open');
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    // Search functionality (basic implementation)
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    
    if (searchInput && searchButton) {
        // Handle search button click
        searchButton.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
        
        // Handle Enter key in search input
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
    
    // Lazy loading for images (when they're added)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading states for external links
    document.querySelectorAll('a[href*="amazon"]').forEach(link => {
        link.addEventListener('click', function() {
            // Add loading indicator or tracking here when affiliate links are implemented
            console.log('Affiliate link clicked:', this.href);
        });
    });
});

// Search function
function performSearch(query) {
    if (!query.trim()) return;
    
    // For now, redirect to a search results page or show alert
    // In a full implementation, this would search through static content
    console.log('Searching for:', query);
    
    // Simple implementation: redirect to categories with search term
    const searchUrl = `categories/pushchairs.html?search=${encodeURIComponent(query)}`;
    window.location.href = searchUrl;
}

// Utility function to format prices
function formatPrice(price) {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    }).format(price);
}

// Utility function to debounce function calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance monitoring (basic)
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            console.log('Page load time:', loadTime + 'ms');
            
            // Log if page takes longer than 2 seconds
            if (loadTime > 2000) {
                console.warn('Page load time exceeds 2 seconds:', loadTime + 'ms');
            }
        }, 0);
    });
}

















