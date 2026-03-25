const navList = document.getElementById('navList');
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
const projectButtons = document.querySelectorAll('.project-btn');
const projectModal = document.getElementById('projectModal');
const projectDetail = document.getElementById('projectDetail');
const closeModal = document.getElementById('closeModal');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

const projectData = {
  star: {
    title:'StarEvents Online Event Ticketing',
    content:`<p><strong>Stack:</strong> ASP.NET MVC, C#, SQL Server, HTML, CSS, JavaScript, Bootstrap</p>
      <p>A complete online ticketing platform for StarEvents Pvt Ltd with organizer dashboard.</p>
      <ul>
        <li>User registration, login, profile management</li>
        <li>Event creation, pricing, secure ticket purchase</li>
        <li>QR-coded e-tickets, loyalty points, promotions</li>
        <li>Real-time sales analytics and admin panel</li>
        <li>3-tier architecture with OOP principles</li>
      </ul>`
  },
  nestlings: {
    title:'Nestlings Childcare Marketplace (Final Year Project)',
    content:`<p><strong>Stack:</strong> PHP, MySQL, Bootstrap, HTML/CSS/JS</p>
      <ul>
        <li>Provider verification and parent dashboard</li>
        <li>Activity updates (photos/videos), routine customization</li>
        <li>AI chatbot, reviews, ratings, booking and schedule management</li>
      </ul>`
  },
  echo: {
    title:'Echo Hotel Reservation System',
    content:`<p><strong>Stack:</strong> PHP, MySQL, Bootstrap</p>
      <ul>
        <li>Room reservation and availability checking</li>
        <li>Pricing management, branch support, admin dashboard</li>
      </ul>`
  },
  evideo: {
    title:'E-Video Cloud UI (Figma Design)',
    content:`<p>UI/UX design for cloud video rental/streaming platform.</p>
      <ul>
        <li>Producer registration, discover interface</li>
        <li>Rent/own options, library/playlist management</li>
        <li>Modern interface and responsive design</li>
      </ul>`
  },
  malcolm: {
    title:'Malcolm Photography Website',
    content:`<p><strong>Stack:</strong> HTML, CSS, JavaScript, PHP, MySQL</p>
      <ul>
        <li>Multipage portfolio, gallery views, contact form</li>
        <li>Responsive layout, SEO optimization, documentation</li>
      </ul>`
  },
  grifindo: {
    title:'Grifindo Toys Payroll System',
    content:`<p><strong>Stack:</strong> C#, SQL Server, Report Viewer</p>
      <ul>
        <li>Salary calculations, overtime and allowances</li>
        <li>Employee records and payroll reports</li>
      </ul>`
  },
  alliance: {
    title:'Alliance Health LAN Network Design',
    content:`<p><strong>Tools:</strong> Cisco Packet Tracer</p>
      <ul>
        <li>Enterprise LAN with VLANs, static IP, routing, isolation</li>
        <li>Wi-Fi zones, DHCP, DNS, proxy, VTP</li>
        <li>Topology diagram, testing with ping/traceroute/SSH</li>
      </ul>`
  }
};

menuToggle.addEventListener('click', () => navList.classList.toggle('open'));
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('nav-stick');
  } else {
    navbar.classList.remove('nav-stick');
  }
});
document.querySelectorAll('.nav-list a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    navList.classList.remove('open');
    const target = document.querySelector(anchor.getAttribute('href'));
    target.scrollIntoView({ behavior:'smooth', block:'start' });
  });
});

projectButtons.forEach(btn => btn.addEventListener('click', () => {
  const key = btn.dataset.project;
  const project = projectData[key];
  if (project) {
    projectDetail.innerHTML = `<h3>${project.title}</h3>${project.content}`;
    projectModal.classList.remove('hidden');
  }
}));

closeModal.addEventListener('click', () => projectModal.classList.add('hidden'));
projectModal.addEventListener('click', e => {
  if (e.target === projectModal) projectModal.classList.add('hidden');
});

document.querySelectorAll('[data-lightbox]').forEach(img => {
  img.addEventListener('click', e => {
    e.preventDefault();
    lightboxImage.src = img.href;
    lightbox.classList.remove('hidden');
  });
});
lightboxClose.addEventListener('click', () => lightbox.classList.add('hidden'));
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.add('hidden');
});