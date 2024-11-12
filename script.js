// Data portfolio dengan kategori
const portfolioItems = [
  {
    image: "portofolio1.png",
    title: "Modern Elegance",
    description: "Desain modern dengan sentuhan klasik",
    category: "modern",
  },
  {
    image: "portfolio 3.jpg",
    title: "Classic Romance",
    description: "Desain elegan dengan nuansa romantis",
    category: "klasik",
  },
  {
    image: "portfolio 4.jpg",
    title: "Minimalist Beauty",
    description: "Desain minimalis yang mempesona",
    category: "minimalis",
  },
  {
    image: "portfolio 5.jpg",
    title: "Rustic Charm",
    description: "Desain rustic yang menawan",
    category: "klasik",
  },
  {
    image: "portfolio 6.jpg",
    title: "Modern Vintage",
    description: "Perpaduan modern dan vintage",
    category: "modern",
  },
  {
    image: "portfolio 7.jpg",
    title: "Elegant Gold",
    description: "Desain mewah dengan aksen emas",
    category: "klasik",
  },
  {
    image: "portfolio 8.jpg",
    title: "Natural Green",
    description: "Desain dengan tema natural",
    category: "minimalis",
  },
  {
    image: "portfolio 9.jpg",
    title: "Modern Blue",
    description: "Desain modern dengan tema biru",
    category: "modern",
  },
  {
    image: "portfolio 10.jpg",
    title: "Modern Blue",
    description: "Desain modern dengan tema biru",
    category: "modern",
  },{
    image: "portfolio 11.jpg",
    title: "Modern Blue",
    description: "Desain modern dengan tema biru",
    category: "modern",
  },{
    image: "portfolio 12.jpg",
    title: "Modern Blue",
    description: "Desain modern dengan tema biru",
    category: "modern",
  },{
    image: "portfolio 13.jpg",
    title: "Modern Blue",
    description: "Desain modern dengan tema biru",
    category: "modern",
  },{
    image: "portfolio 14.jpg",
    title: "Modern Blue",
    description: "Desain modern dengan tema biru",
    category: "modern",
  },{
    image: "portfolio 15.jpg",
    title: "Modern Blue",
    description: "Desain modern dengan tema biru",
    category: "modern",
  },{
    image: "portfolio 16.jpg",
    title: "Modern Blue",
    description: "Desain modern dengan tema biru",
    category: "modern",
  },
  {
    image: "portfolio 17.jpg",
    title: "Modern Blue",
    description: "Desain modern dengan tema biru",
    category: "modern",
  },
  {
    image: "portfolio 18.jpg",
    title: "Modern Blue",
    description: "Desain modern dengan tema biru",
    category: "modern",
  },
  {
    image: "portfolio 19.jpg",
    title: "Modern Blue",
    description: "Desain modern dengan tema biru",
    category: "modern",
  },
];

// State untuk tracking
let isShowingAll = false;
let currentFilter = "semua";
const itemsPerPage = 2;

// Function untuk membuat portfolio item
function createPortfolioItem(item) {
  return `
        <div class="portfolio-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.title}" />
            <div class="portfolio-item-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `;
}

// Function untuk filter dan render portfolio items
function filterAndRenderItems() {
  const portfolioGrid = document.querySelector(".portfolio-grid");
  let filteredItems = portfolioItems;

  // Filter berdasarkan kategori
  if (currentFilter !== "semua") {
    filteredItems = portfolioItems.filter(
      (item) => item.category.toLowerCase() === currentFilter.toLowerCase()
    );
  }

  // Terapkan limit jika tidak showing all
  const visibleItems = isShowingAll
    ? filteredItems
    : filteredItems.slice(0, itemsPerPage);

  // Render items
  portfolioGrid.innerHTML = visibleItems
    .map((item) => createPortfolioItem(item))
    .join("");

  // Update tombol See More
  const seeMoreButton = document.querySelector(".see-more-button");
  if (seeMoreButton) {
    seeMoreButton.style.display =
      filteredItems.length > itemsPerPage ? "flex" : "none";
  }
}

// Function untuk handle see more button
function handleSeeMore() {
  const button = document.querySelector(".see-more-button");
  const buttonText = button.querySelector(".button-text");
  const buttonIcon = button.querySelector(".button-icon");

  isShowingAll = !isShowingAll;
  filterAndRenderItems();

  buttonText.textContent = isShowingAll ? "Show Less" : "See More";
  buttonIcon.style.transform = isShowingAll ? "rotate(180deg)" : "rotate(0)";
}

// Function untuk handle filter buttons
function handleFilterClick(event) {
  if (!event.target.classList.contains("filter-button")) return;

  // Remove active class from all buttons
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.classList.remove("active");
  });

  // Add active class to clicked button
  event.target.classList.add("active");

  // Update current filter
  currentFilter = event.target.getAttribute("data-filter");

  // Reset showing all state
  isShowingAll = false;
  const buttonText = document.querySelector(".see-more-button .button-text");
  const buttonIcon = document.querySelector(".see-more-button .button-icon");
  if (buttonText) buttonText.textContent = "See More";
  if (buttonIcon) buttonIcon.style.transform = "rotate(0)";

  // Filter and render items
  filterAndRenderItems();
}

// Function untuk initialize portfolio
function initPortfolio() {
  // Render initial items
  filterAndRenderItems();

  // Add event listeners
  document
    .querySelector(".portfolio-filters")
    .addEventListener("click", handleFilterClick);

  const seeMoreButton = document.querySelector(".see-more-button");
  if (seeMoreButton) {
    seeMoreButton.addEventListener("click", handleSeeMore);
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initPortfolio);

document.addEventListener("DOMContentLoaded", function () {
  // Update copyright year
  const yearSpan = document.getElementById("current-year");
  yearSpan.textContent = new Date().getFullYear();

  // Add hover animation for social icons
  const socialLinks = document.querySelectorAll(".social-link");

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Smooth scroll for navigation links
  const footerLinks = document.querySelectorAll(".footer-link");

  footerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

function sendWhatsApp(event) {
  event.preventDefault();

  // Get form values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Format the message for WhatsApp
  const formattedMessage =
    `*Pesan dari Website ICS Project*\n\n` +
    `*Nama:* ${fullName}\n` +
    `*Email:* ${email}\n` +
    `*Telepon:* ${phone}\n\n` +
    `*Pesan:*\n${message}`;

  // WhatsApp number (replace with your business number)
  const waNumber = "628982106000"; // Ganti dengan nomor WA bisnis Anda

  // Create WhatsApp URL
  const waURL = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    formattedMessage
  )}`;

  // Open WhatsApp in new tab
  window.open(waURL, "_blank");

  // Optional: Reset form after sending
  document.getElementById("contactForm").reset();

  return false;
}

// Optional: Phone number validation
document.getElementById("phone").addEventListener("input", function (e) {
  // Remove non-numeric characters
  this.value = this.value.replace(/[^0-9]/g, "");
});

// Check if the carousel needs to be reset
const track = document.querySelector('.logo-track');
let trackWidth = track.offsetWidth;
let containerWidth = document.querySelector('.logo-carousel').offsetWidth;

// Clone additional items if needed for smooth infinite scroll
function checkAndCloneItems() {
    const slides = track.querySelectorAll('.logo-slide');
    const totalWidth = Array.from(slides).reduce((width, slide) => {
        return width + slide.offsetWidth + parseInt(getComputedStyle(slide).marginLeft) * 2;
    }, 0);

    // If total width is less than 3 times container width, clone more items
    if (totalWidth < containerWidth * 3) {
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });
    }
}

// Initial check
checkAndCloneItems();

// Recheck on window resize
window.addEventListener('resize', () => {
    containerWidth = document.querySelector('.logo-carousel').offsetWidth;
    checkAndCloneItems();
});

// Optional: Reset animation when it completes
track.addEventListener('animationend', () => {
    track.style.animation = 'none';
    track.offsetHeight; // Trigger reflow
    track.style.animation = null;
});

