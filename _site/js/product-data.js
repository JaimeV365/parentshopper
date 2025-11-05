/**
 * Product Data System
 * Prevents image/affiliate link mixups by centralizing product information
 */

const PRODUCT_DATA = {
    // Baby Monitors
    'wisenet-babyview-eco-flex': {
        name: 'WiseNet BabyView Eco Flex',
        image: 'https://m.media-amazon.com/images/I/51JpOrhHo4L._AC_SL1000_.jpg',
        affiliateLink: 'https://www.babymonitorsdirect.co.uk/product/wisenet-flex-video-baby-monitor-sew-3048/',
        reviewLink: '../reviews/best-baby-monitor-uk.html',
        price: 'Budget-friendly option',
        rating: '★★★★★',
        ratingText: '(4.8/5 stars)'
    },
    'hellobaby-hb6550': {
        name: 'HelloBaby HB6550 Monitor',
        image: 'https://m.media-amazon.com/images/I/61GZWZM1UGL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/HelloBaby-Monitor-Pan-Tilt-Zoom-Temperature-Lullabies/dp/B0CXF368R9?th=1&linkCode=ll1&tag=parentshopper-21&linkId=a611b59a4459564f4a1f806c7fa475af&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-baby-monitor-uk.html',
        price: 'Value option',
        rating: '★★★★☆',
        ratingText: '(4.6/5 stars)'
    },
    'babysense-split-screen': {
        name: 'Babysense 5.5 Split-Screen Monitor',
        image: 'https://m.media-amazon.com/images/I/616hxHz3t7L._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/Babysense-Split-Screen-Monitor-Two-Way-5000mAh/dp/B0C1C7LK5L?crid=2YG5IDFK8RXS7&dib=eyJ2IjoiMSJ9.k0xHONS0Iv8bQQ8obkhw8BFBkruFOirFWgsF83y-dU1kTsVfl3JN89YQsB3OVofTWmWJf3GcCfAiWtJq-fLwkyumiSVQemQtzKEpSETUyO6Gu4suZIaKCqYQXy5oqsLZQPIUEa6DA-dKgrBjbtfAYkBZsDfclVL5B_5d3o4oht24GXIgo2e73sQdAJLNRBdxxBu6Vbh-VOHHWjaUJujq087-X-DUgFvNEEjZNXAE3Oo.ZkaFRWEG4PqYzG59dHoL258sCitvmoAS8a2A7ntKAHQ&dib_tag=se&keywords=Babysense%2Bvideo%2Bbaby%2Bmonitor%2B5.5%2Bsplit%2Bscreen&qid=1759227181&refinements=p_123%3A200477&rnid=91049098031&s=baby&sprefix=babysense%2Bvideo%2Bbaby%2Bmonitor%2B5.5%2Bsplit%2Bscreen%2Cbaby%2C138&sr=1-1&th=1&linkCode=ll1&tag=parentshopper-21&linkId=628b3d07b440bfc8437daef30b35538b&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-baby-monitor-uk.html',
        price: 'Mid-range pick',
        rating: '★★★★★',
        ratingText: '(4.7/5 stars)'
    },
    'nanit-pro-smart': {
        name: 'Nanit Pro Smart Monitor',
        image: 'https://m.media-amazon.com/images/I/71yO9BpdPkL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/Nanit-Smart-Monitor-Floor-Stand/dp/B0BTTQ3QD2?th=1&linkCode=ll1&tag=parentshopper-21&linkId=f521ba120b4e9f84499aabea64f89957&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-baby-monitor-uk.html',
        price: 'Premium choice',
        rating: '★★★☆☆',
        ratingText: '(4.2/5 stars)'
    },

    // Bottle Prep Machines
    'tommee-tippee-perfect-prep': {
        name: 'Tommee Tippee Perfect Prep',
        image: 'https://m.media-amazon.com/images/I/71qeHpuRooL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/dp/B00OB25IQY?_encoding=UTF8&th=1&linkCode=ll1&tag=parentshopper-21&linkId=80f0fd308b9f3280caa38bf0ba7ffda8&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-bottle-prep-machines-uk.html',
        price: 'Budget-friendly option',
        rating: '★★★★★',
        ratingText: '(4.8/5 stars)'
    },
    'nuby-rapidcool': {
        name: 'Nuby RapidCool Portable Kit',
        image: 'https://m.media-amazon.com/images/I/61gyqgC01BL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/Nuby-RapidCool-Portable-Prepare-Dispenser/dp/B09VH5PCCJ?th=1&linkCode=ll1&tag=parentshopper-21&linkId=107aacb11ff83330af10210aadae88bd&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-bottle-prep-machines-uk.html',
        price: 'Entry-level',
        rating: '★★★★☆',
        ratingText: '(4.6/5 stars)'
    },
    'baby-brezza-formula-pro': {
        name: 'Baby Brezza Formula Pro Advanced',
        image: 'https://m.media-amazon.com/images/I/61vLUJsrjDL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/Baby-Brezza-Formula-Advanced-Automatic/dp/B0881D1D86?th=1&linkCode=ll1&tag=parentshopper-21&linkId=22c0f7c295a9648b3142372a5a557181&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-bottle-prep-machines-uk.html',
        price: 'Premium choice',
        rating: '★★★★★',
        ratingText: '(4.7/5 stars)'
    },
    'babymoov-milky-now': {
        name: 'Babymoov Milky Now',
        image: 'https://m.media-amazon.com/images/I/610ZCZyocGL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/Babymoov-Milky-Instant-Formula-Bottle/dp/B08GY7M3QV?&linkCode=ll1&tag=parentshopper-21&linkId=2744ff01c0d1585fa414d91f74f0c670&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-bottle-prep-machines-uk.html',
        price: 'Mid-range pick',
        rating: '★★★★☆',
        ratingText: '(4.4/5 stars)'
    },

    // Nappy Bins
    'tommee-tippee-sangenic': {
        name: 'Tommee Tippee Sangenic Twist & Click',
        image: 'https://m.media-amazon.com/images/I/516ltDbcxdL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/Tommee-Tippee-Sangenic-Twist-Click/dp/B00OB25IQY?th=1&linkCode=ll1&tag=parentshopper-21&linkId=80f0fd308b9f3280caa38bf0ba7ffda8&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-nappy-bins-uk.html',
        price: 'Budget-friendly option',
        rating: '★★★★★',
        ratingText: '(4.9/5 stars)'
    },
    'regular-kitchen-bin': {
        name: 'Regular Kitchen Bin',
        image: 'https://m.media-amazon.com/images/I/81VKj3PjIyL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/ZARVICZONIA-Premium-Plastic-Swing-Kitchen/dp/B08GY7M3QV?th=1&linkCode=ll1&tag=parentshopper-21&linkId=2744ff01c0d1585fa414d91f74f0c670&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-nappy-bins-uk.html',
        price: 'Ultra-budget option',
        rating: '★★★★☆',
        ratingText: '(4.2/5 stars)'
    },
    'ubbi-steel-diaper-pail': {
        name: 'Ubbi Steel Diaper Pail',
        image: 'https://m.media-amazon.com/images/I/615kBeDqIbL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/dp/B008I4FALY?&linkCode=ll1&tag=parentshopper-21&linkId=f925fc76b2e7f404fd39eddec175d2a5&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-nappy-bins-uk.html',
        price: 'Premium choice',
        rating: '★★★★★',
        ratingText: '(4.7/5 stars)'
    },

    // Baby Bouncers
    'fisher-price-rainforest-bouncer': {
        name: 'Fisher-Price Rainforest Bouncer',
        image: 'https://m.media-amazon.com/images/I/61hlhHQOR2L._AC_SL1500_.jpg',
        affiliateLink: 'https://uk-pre-prod.amazon.com/Fisher-Price-CJN00-Rainforest-Removable-Vibrations/dp/B01ABUN4RY?&linkCode=ll1&tag=parentshopper-21&linkId=51b0dab980bb1e97c115095714fa77dd&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-baby-bouncers-uk.html',
        price: 'Budget-friendly option',
        rating: '★★★★★',
        ratingText: '(4.9/5 stars)'
    },
    'babybjorn-bouncer-bliss': {
        name: 'BabyBjörn Bouncer Bliss',
        image: 'https://m.media-amazon.com/images/I/81jPPNZgqLL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/BABYBJ%C3%96RN-Bouncer-Bliss-Jersey-Light/dp/B07NQLH4RV?th=1&linkCode=ll1&tag=parentshopper-21&linkId=3436e9ce05385f27ac1e666788fc27c6&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-baby-bouncers-uk.html',
        price: 'Premium choice',
        rating: '★★★★★',
        ratingText: '(4.9/5 stars)'
    },
    'maxi-cosi-kori': {
        name: 'Maxi-Cosi Kori 2-in-1 Bouncer',
        image: 'https://m.media-amazon.com/images/I/81CyB4FRcxL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/Maxi-Cosi-Ergonomic-Positions-Lightweight-Graphite/dp/B0CHSBRLNV?crid=1U8S4UH15HA93&dib=eyJ2IjoiMSJ9.tw_q0P7RkNqNRKiM7CFO89HnSAAvnBQRaEusij364N-_42WrzSa7fJlrj7Ra8XZT6LX9qiRAiNmobXLTomZzjnSPEWbz6lOwJiv1KVGuyaJsZ0zlsg7xtGw_9ATQ2vDbIcpmJLCy2UsoAvvZ383MZ_-4ydHaSC0g6TKXHgQWRJXHr7vWOVNHsLSmGxfUJsno6aZ7p6LlyKFhA4OE9Aw4t6IjbWQ7tBTz20XpwJgLbMQWxY3YvEY3XU8ilbWA_LB5f1_Fir_b7o0_wZP0ySFMw2ha-SkwhmvRilGCmCUeGyQ.CkD5SJJ1YTJVDdAhnw2f9CVdMGVHHpQUAPgDb4d07MU&dib_tag=se&keywords=Maxi-Cosi%2BKori%2B2-in-1%2BBouncer&qid=1760702155&s=baby&sprefix=maxi-cosi%2Bkori%2B2-in-1%2Bbouncer%2Cbaby%2C316&sr=1-2&th=1&linkCode=ll1&tag=parentshopper-21&linkId=def084b9b071c7ddd2060c6cda133b7e&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-baby-bouncers-uk.html',
        price: 'Mid-range pick',
        rating: '★★★★★',
        ratingText: '(4.8/5 stars)'
    },
    'ingenuity-morrison': {
        name: 'Ingenuity Morrison Soothing Bouncer',
        image: 'https://m.media-amazon.com/images/I/71j+4i4UlfL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/Ingenuity-11203-3-Cradling-BouncerTM-Morrison/dp/B072342MVR?th=1&linkCode=ll1&tag=parentshopper-21&linkId=13e00e8b286128b69f2654a1ab12a11b&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-baby-bouncers-uk.html',
        price: 'Budget-friendly option',
        rating: '★★★★☆',
        ratingText: '(4.3/5 stars)'
    },
    'ladida-safari': {
        name: 'LADIDA Safari Theme Bouncer',
        image: 'https://m.media-amazon.com/images/I/61aNaOHzY2L._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/LADIDA-Colourful-Bouncer-Soothing-Vibration/dp/B0963SJT8W?th=1&linkCode=ll1&tag=parentshopper-21&linkId=4b8000b5fc0cf2d60a00a7964c3a0116&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-baby-bouncers-uk.html',
        price: 'Ultra-budget option',
        rating: '★★★☆☆',
        ratingText: '(3.8/5 stars)'
    },

    // Travel Cots
    'hauck-sleep-n-play': {
        name: 'Hauck Sleep n Play Travel Cot',
        image: 'https://m.media-amazon.com/images/I/81uW9ZRn8FL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/Hauck-Bassinet-Changing-Mattress-Multicolour/dp/B00NFW6BZ8?&linkCode=ll1&tag=parentshopper-21&linkId=25f4db83e7646f2547ea0becdd2a8428&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-travel-cots-uk.html',
        price: 'Mid-range pick',
        rating: '★★★★★',
        ratingText: '(4.8/5 stars)'
    },
    'joie-kubbie-sleep': {
        name: 'Joie Kubbie Sleep Travel Cot',
        image: 'https://m.media-amazon.com/images/I/81HLVy9elTL._AC_SL1427_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/Joie-Kubbie-Sleep-Travel-Cot/dp/B08GY7M3QV?th=1&linkCode=ll1&tag=parentshopper-21&linkId=2744ff01c0d1585fa414d91f74f0c670&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-travel-cots-uk.html',
        price: 'Premium choice',
        rating: '★★★★★',
        ratingText: '(4.8/5 stars)'
    },
    'graco-contour-electra': {
        name: 'Graco Contour Electra Travel Cot',
        image: 'https://m.media-amazon.com/images/I/81uW9ZRn8FL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/Graco-Contour-Electra-Travel-Cot/dp/B00OB25IQY?th=1&linkCode=ll1&tag=parentshopper-21&linkId=80f0fd308b9f3280caa38bf0ba7ffda8&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-travel-cots-uk.html',
        price: 'Budget-friendly option',
        rating: '★★★★☆',
        ratingText: '(4.4/5 stars)'
    },

    // Car Seats
    'britax-romer-dualfix': {
        name: 'Britax Romer Dualfix M i-Size',
        image: 'https://m.media-amazon.com/images/I/61OoOFnh4sS._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/dp/B07P55SXK2?&linkCode=ll1&tag=parentshopper-21&linkId=b41e3be6b5b184d869b1ac5966ac3aff&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-car-seats-uk.html',
        price: 'Premium choice',
        rating: '★★★★★',
        ratingText: '(4.8/5 stars)'
    },
    'joie-i-spin-360': {
        name: 'Joie i-Spin 360',
        image: 'https://m.media-amazon.com/images/I/61OoOFnh4sS._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/dp/B07P55SXK2?&linkCode=ll1&tag=parentshopper-21&linkId=b41e3be6b5b184d869b1ac5966ac3aff&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-car-seats-uk.html',
        price: 'Budget-friendly option',
        rating: '★★★★☆',
        ratingText: '(4.6/5 stars)'
    },
    'maxi-cosi-pebble-pro': {
        name: 'Maxi-Cosi Pebble Pro i-Size',
        image: 'https://m.media-amazon.com/images/I/61OoOFnh4sS._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/Maxi-Cosi-Pebble-Pro-i-Size/dp/B08GY7M3QV?th=1&linkCode=ll1&tag=parentshopper-21&linkId=2744ff01c0d1585fa414d91f74f0c670&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-car-seats-uk.html',
        price: 'Mid-range pick',
        rating: '★★★★★',
        ratingText: '(4.7/5 stars)'
    },

    // Pushchairs
    'babyzen-yoyo2': {
        name: 'BABYZEN YOYO2 Complete Stroller',
        image: 'https://m.media-amazon.com/images/I/61cW6NGbhPL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/BABYZEN-YOYO2-Complete-Stroller-Suitable/dp/B0C7CZCGW9?th=1&linkCode=ll1&tag=parentshopper-21&linkId=af7e73dd18d0ce22a7c403974b3e5797&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-pushchairs-uk.html',
        price: 'Premium choice',
        rating: '★★★★★',
        ratingText: '(4.9/5 stars)'
    },
    'chicco-goody-plus': {
        name: 'Chicco Goody Plus Stroller',
        image: 'https://m.media-amazon.com/images/I/61cW6NGbhPL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/Chicco-Goody-Plus-Stroller-Black/dp/B08GY7M3QV?th=1&linkCode=ll1&tag=parentshopper-21&linkId=2744ff01c0d1585fa414d91f74f0c670&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-pushchairs-uk.html',
        price: 'Budget-friendly option',
        rating: '★★★★☆',
        ratingText: '(4.5/5 stars)'
    },
    'bugaboo-fox-5': {
        name: 'Bugaboo Fox 5 Stroller',
        image: 'https://m.media-amazon.com/images/I/61cW6NGbhPL._AC_SL1500_.jpg',
        affiliateLink: 'https://www.amazon.co.uk/Bugaboo-Fox-5-Stroller-Black/dp/B00OB25IQY?th=1&linkCode=ll1&tag=parentshopper-21&linkId=80f0fd308b9f3280caa38bf0ba7ffda8&language=en_GB&ref_=as_li_ss_tl',
        reviewLink: '../reviews/best-pushchairs-uk.html',
        price: 'Premium choice',
        rating: '★★★★★',
        ratingText: '(4.8/5 stars)'
    }
};

/**
 * Get product data by ID
 * @param {string} productId - The product ID
 * @returns {Object|null} Product data or null if not found
 */
function getProductData(productId) {
    return PRODUCT_DATA[productId] || null;
}

/**
 * Generate product card HTML
 * @param {string} productId - The product ID
 * @param {string} badge - The badge text
 * @param {string} verdict - The product verdict
 * @param {string} cardClass - CSS class for the card
 * @returns {string} HTML string for the product card
 */
function generateProductCard(productId, badge, verdict, cardClass = 'top-pick-card') {
    const product = getProductData(productId);
    if (!product) {
        console.error(`Product not found: ${productId}`);
        return '';
    }

    return `
        <div class="${cardClass} ${cardClass.includes('best-') ? cardClass : 'best-overall'}">
            <div class="pick-badge">${badge}</div>
            <div class="product-image">
                <img src="${product.image}" 
                     alt="${product.name}"
                     loading="lazy"
                     width="200"
                     height="150"
                     style="width: 100%; height: 150px; object-fit: contain; background-color: #f8f9fa; border-radius: 8px;">
            </div>
            <h3>${product.name}</h3>
            <p class="product-verdict">${verdict}</p>
            <div class="product-price">${product.price}</div>
            <div class="product-rating">
                <span class="stars">${product.rating}</span>
                <span class="rating-text">${product.ratingText}</span>
            </div>
            <div class="product-actions">
                <a href="${product.reviewLink}" class="btn btn-outline">Full Review</a>
                <a href="${product.affiliateLink}" class="btn btn-primary">Check Price</a>
            </div>
        </div>
    `;
}

/**
 * Validate product data integrity
 * @returns {Array} Array of validation errors
 */
function validateProductData() {
    const errors = [];
    
    for (const [id, product] of Object.entries(PRODUCT_DATA)) {
        if (!product.name) errors.push(`${id}: Missing name`);
        if (!product.image) errors.push(`${id}: Missing image`);
        if (!product.affiliateLink) errors.push(`${id}: Missing affiliate link`);
        if (!product.reviewLink) errors.push(`${id}: Missing review link`);
        if (!product.price) errors.push(`${id}: Missing price`);
        if (!product.rating) errors.push(`${id}: Missing rating`);
        if (!product.ratingText) errors.push(`${id}: Missing rating text`);
    }
    
    return errors;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRODUCT_DATA, getProductData, generateProductCard, validateProductData };
}
