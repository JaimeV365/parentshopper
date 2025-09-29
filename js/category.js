// Category Page JavaScript - Filtering and Interactions

document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const budgetFilter = document.getElementById('budget-filter');
    const useCaseFilter = document.getElementById('use-case-filter');
    const ageFilter = document.getElementById('age-filter');
    const applyButton = document.querySelector('.filter-apply');
    
    // Product data (in a real implementation, this would come from a JSON file or API)
    const products = [
        {
            id: 'urbanglide-pro',
            name: 'UrbanGlide Pro Pushchair',
            price: { min: 299, max: 349 },
            category: 'city',
            age: 'all',
            budget: '200-400'
        },
        {
            id: 'budgetride-essential',
            name: 'BudgetRide Essential',
            price: { min: 89, max: 129 },
            category: 'all',
            age: 'all',
            budget: '100-200'
        },
        {
            id: 'compactmax-travel',
            name: 'CompactMax Travel',
            price: { min: 199, max: 249 },
            category: 'small-car',
            age: 'all',
            budget: '200-400'
        },
        {
            id: 'luxuryglide-elite',
            name: 'LuxuryGlide Elite',
            price: { min: 599, max: 699 },
            category: 'all',
            age: 'all',
            budget: '400-plus'
        },
        {
            id: 'jogmaster-pro',
            name: 'JogMaster Pro',
            price: { min: 349, max: 399 },
            category: 'jogging',
            age: 'toddler',
            budget: '200-400'
        },
        {
            id: 'twinglide-duo',
            name: 'TwinGlide Duo',
            price: { min: 449, max: 499 },
            category: 'all',
            age: 'all',
            budget: '400-plus'
        }
    ];
    
    // Apply filters
    function applyFilters() {
        const selectedBudget = budgetFilter.value;
        const selectedUseCase = useCaseFilter.value;
        const selectedAge = ageFilter.value;
        
        // Filter products based on selections
        const filteredProducts = products.filter(product => {
            let matches = true;
            
            if (selectedBudget && product.budget !== selectedBudget) {
                matches = false;
            }
            
            if (selectedUseCase && product.category !== selectedUseCase && product.category !== 'all') {
                matches = false;
            }
            
            if (selectedAge && product.age !== selectedAge && product.age !== 'all') {
                matches = false;
            }
            
            return matches;
        });
        
        // Update the display (in a real implementation, this would re-render the product cards)
        console.log('Filtered products:', filteredProducts);
        
        // Show filter results count
        showFilterResults(filteredProducts.length);
    }
    
    // Show filter results
    function showFilterResults(count) {
        let resultsElement = document.querySelector('.filter-results');
        if (!resultsElement) {
            resultsElement = document.createElement('div');
            resultsElement.className = 'filter-results';
            resultsElement.style.cssText = `
                background: var(--color-background-subtle);
                padding: var(--spacing-sm);
                border-radius: var(--radius-md);
                margin: var(--spacing-sm) 0;
                text-align: center;
                font-size: 0.875rem;
                color: var(--color-secondary);
            `;
            document.querySelector('.filters').appendChild(resultsElement);
        }
        
        resultsElement.textContent = `Showing ${count} product${count !== 1 ? 's' : ''}`;
    }
    
    // Event listeners
    if (applyButton) {
        applyButton.addEventListener('click', applyFilters);
    }
    
    // Auto-apply filters on change (optional)
    [budgetFilter, useCaseFilter, ageFilter].forEach(filter => {
        if (filter) {
            filter.addEventListener('change', debounce(applyFilters, 300));
        }
    });
    
    // URL parameter handling for direct links
    function handleUrlParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const search = urlParams.get('search');
        const budget = urlParams.get('budget');
        const filter = urlParams.get('filter');
        
        if (search) {
            // Highlight search term in page
            highlightSearchTerm(search);
        }
        
        if (budget && budgetFilter) {
            budgetFilter.value = budget;
        }
        
        if (filter && useCaseFilter) {
            useCaseFilter.value = filter;
        }
        
        // Apply filters if any parameters are present
        if (search || budget || filter) {
            applyFilters();
        }
    }
    
    // Highlight search terms
    function highlightSearchTerm(term) {
        const elements = document.querySelectorAll('.product-card h3, .product-card .product-verdict');
        elements.forEach(element => {
            const text = element.textContent;
            const regex = new RegExp(`(${term})`, 'gi');
            element.innerHTML = text.replace(regex, '<mark style="background-color: var(--color-accent); color: white; padding: 2px 4px; border-radius: 2px;">$1</mark>');
        });
    }
    
    // Initialize URL parameter handling
    handleUrlParameters();
    
    // Product card interactions
    const productCards = document.querySelectorAll('.product-card, .top-pick-card');
    productCards.forEach(card => {
        // Add click tracking for analytics (when implemented)
        card.addEventListener('click', function(e) {
            if (!e.target.closest('a, button')) {
                const productName = this.querySelector('h3').textContent;
                console.log('Product card clicked:', productName);
            }
        });
    });
    
    // Comparison table interactions
    const comparisonRows = document.querySelectorAll('.comparison-table-content tbody tr');
    comparisonRows.forEach(row => {
        row.addEventListener('click', function(e) {
            if (!e.target.closest('a, button')) {
                const productName = this.querySelector('td:first-child strong').textContent;
                console.log('Comparison row clicked:', productName);
            }
        });
    });
    
    // Smooth scroll to sections
    const sectionLinks = document.querySelectorAll('a[href^="#"]');
    sectionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Lazy load images when they come into view
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Add loading states for affiliate links
    const affiliateLinks = document.querySelectorAll('a[href*="amazon"], .btn-primary');
    affiliateLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add loading state
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.style.opacity = '0.7';
            
            // Reset after a short delay (in real implementation, this would be handled by the redirect)
            setTimeout(() => {
                this.textContent = originalText;
                this.style.opacity = '1';
            }, 1000);
        });
    });
});

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

// Format price for display
function formatPrice(price) {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    }).format(price);
}

// Get product rating as stars
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '☆';
    const emptyStars = 5 - Math.ceil(rating);
    stars += '☆'.repeat(emptyStars);
    return stars;
}


