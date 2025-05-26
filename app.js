// --- Nav HTML ---
const navbarHTML = `
  <div class="nav-logo">
    <span>🖐️</span> MindSpring
    <span class="byline">by Wellness Centre IITR</span>
  </div>
  <ul class="nav-links">
    <li><a href="/" data-link>Home</a></li>
    <li><a href="/resources" data-link>Resources</a></li>
    <li><a href="/emergency-support" data-link>Emergency Support</a></li>
    <li><a href="/community" data-link>Community</a></li>
  </ul>
  <div class="nav-actions">
    <div class="nav-icon" title="Notifications">🔔</div>
    <div class="nav-icon" title="Profile">👤</div>
  </div>
`;

// --- Page HTML ---
const pages = {
  "/": homePage,
  "/resources": resourcesPage,
  "/emergency-support": emergencyPage,
  "/community": communityPage,
};

function homePage() {
  return `
  <section class="page-section">
    <h1>Welcome to your ThriveBoard</h1>
    <div class="quick-actions">
      <button>Start Journaling</button>
      <button>Check Community</button>
      <button>Start a Wellness Journey</button>
      <button>Explore Resources</button>
      <button>Book a Meeting</button>
    </div>
    <h2>Mood History</h2>
    <div class="card" style="margin-bottom:2rem;">
      <div style="font-weight:600;color:var(--slate);margin-bottom:0.2rem;">Mood Over Time</div>
      <div style="font-size:1.1rem;margin-bottom:0.6rem;">Average: <b>Neutral</b></div>
      <img src="assets/mood-graph.jpg" alt="Mood Graph" style="background:#F8F9FA;">
    </div>
    <h2>Your Wellness Journey</h2>
    <div class="card-row">
      <div class="card">
        <img src="assets/journal.jpg" alt="Journal"/>
        <div class="card-title">Journal Entries</div>
        <div class="card-desc">Reflect on your thoughts and track growth.</div>
      </div>
      <div class="card">
        <img src="assets/meditate.jpg" alt="Mindful"/>
        <div class="card-title">Engage in mindful practices</div>
        <div class="card-desc">Discover activities to enhance well-being.</div>
      </div>
      <div class="card">
        <img src="assets/community.jpg" alt="Community"/>
        <div class="card-title">Connect with others</div>
        <div class="card-desc">Join discussions and support fellow students.</div>
      </div>
    </div>
    <h2>Wellness Journey</h2>
    <div class="card" style="margin-bottom:2rem;">
      <div style="margin-bottom:0.7rem;">Overall Progress</div>
      <div style="background:var(--mint);height:10px;border-radius:5px;width:60%;"></div>
      <ul style="list-style:none;padding:0;margin-top:1.2rem;">
        <li>✔️ Mindfulness Meditation <span style="color:var(--gray);font-size:0.95rem;">Completed</span></li>
        <li>📝 Gratitude Journaling <span style="color:var(--gray);font-size:0.95rem;">In Progress</span></li>
        <li>🏃‍♂️ Physical Activity <span style="color:var(--gray);font-size:0.95rem;">Not Started</span></li>
      </ul>
    </div>
    <div class="account-box">
      <b>Start Journaling</b>
      <div style="margin:1rem 0 0.5rem 0;">Reflect on your thoughts and feelings. Write about your day, your goals, or anything on your mind.</div>
      <button>New Entry</button>
    </div>
    ${emergencyContactsHTML()}
  </section>
  `;
}

function resourcesPage() {
  return `
  <section class="page-section">
    <h1>Resource Garden</h1>
    <div class="text-muted" style="margin-bottom:1.2rem;">Explore a variety of self-help resources to support your well-being.</div>
    <input type="search" placeholder="Search resources"/>
    <div class="resource-tags">
      <button>Videos</button>
      <button>Articles</button>
      <button>Exercises</button>
      <button>Motivational</button>
    </div>
    <div class="card-row">
      <div class="card">
        <img src="assets/mindfulness.jpg" alt="Mindfulness"/>
        <div class="card-title">Mindfulness Meditation</div>
        <div class="card-desc">Video</div>
      </div>
      <div class="card">
        <img src="assets/stress.jpg" alt="Stress"/>
        <div class="card-title">Stress Management Techniques</div>
        <div class="card-desc">Article</div>
      </div>
      <div class="card">
        <img src="assets/resilience.jpg" alt="Resilience"/>
        <div class="card-title">Building Resilience</div>
        <div class="card-desc">Exercise</div>
      </div>
      <div class="card">
        <img src="assets/selftalk.jpg" alt="Self Talk"/>
        <div class="card-title">Positive Self-Talk</div>
        <div class="card-desc">Motivational</div>
      </div>
      <div class="card">
        <img src="assets/sleep.jpg" alt="Sleep"/>
        <div class="card-title">Healthy Sleep Habits</div>
        <div class="card-desc">Article</div>
      </div>
      <div class="card">
        <img src="assets/timemanage.jpg" alt="Time Management"/>
        <div class="card-title">Time Management Strategies</div>
        <div class="card-desc">Exercise</div>
      </div>
      <div class="card">
        <img src="assets/goal.jpg" alt="Goal"/>
        <div class="card-title">Goal Setting for Success</div>
        <div class="card-desc">Video</div>
      </div>
      <div class="card">
        <img src="assets/emotional.jpg" alt="Emotional"/>
        <div class="card-title">Emotional Intelligence</div>
        <div class="card-desc">Motivational</div>
      </div>
    </div>
    <div class="anonymous-stories-card">
      <img src="assets/leaf-card.jpg" alt="Stories"/>
      <div class="anonymous-stories-content">
        <b>You are not alone</b>
        <div style="margin:0.7rem 0;">Read overcoming stories from students like you, who also suffered problems and overcame them. Or express yourself without revealing your identity. Your story can inspire and help others.</div>
        <button>Read Stories</button>
        <button>Share Your Own</button>
      </div>
    </div>
    <div style="margin-bottom:2rem;">
      <b>Confused about what you are feeling?</b>
      <div>Take our quick mood quiz — it’s like a selfie, but for your feelings!</div>
      <button style="margin-top:0.7rem;">Do a mini check-up</button>
    </div>
    <div class="account-box">
      <b>Create an anonymous account</b>
      <div style="margin:1rem 0 0.5rem 0;">With your account you can save resources, talk to other students, join groups and book meetings with institute counselors. All of this while data will safe and anonymous.</div>
      <button>Create Account</button>
    </div>
    ${emergencyContactsHTML()}
  </section>
  `;
}

function emergencyPage() {
  return `
  <section class="page-section">
    <h1>Reach-Out Desk</h1>
    <div class="card-row" style="gap:2.5rem;">
      <div style="flex:2">
        <h2>Instant Messaging</h2>
        <button class="btn-main">DM a Counselor</button>
        <h2 style="margin-top:2rem;">Counselor Information</h2>
        <div>
          <span style="color:var(--accent-green);font-weight:600;">Available</span><br>
          <b>Dr. Anya Sharma</b><br>
          <span class="text-muted">Licensed Professional Counselor</span>
        </div>
        <h2 style="margin-top:2rem;">Book an meeting</h2>
        <div class="text-muted">Check availability schedules of different counselors and book an meeting for future.</div>
        <button style="margin-top:0.7rem;">Check Availability</button>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;">
        <img src="assets/hand-help.jpg" alt="Helping Hand" style="width:220px;height:180px;object-fit:cover;background:var(--sky-blue);border-radius:16px;">
      </div>
    </div>
    ${emergencyContactsHTML()}
  </section>
  `;
}

function communityPage() {
  return `
  <section class="page-section">
    <h1>Connect Commons</h1>
    <div class="text-muted" style="margin-bottom:1.2rem;">Engage with peers in a supportive environment. Share stories, join group chats, and participate in events.</div>
    <h2>Group Chats</h2>
    <div class="card-row">
      <div class="card">
        <img src="assets/study-buddies.jpg" alt="Study Buddies"/>
        <div class="card-title">Study Buddies</div>
        <div class="card-desc">Find study partners and share notes.</div>
      </div>
      <div class="card">
        <img src="assets/mindful.jpg" alt="Mindful Moments"/>
        <div class="card-title">Mindful Moments</div>
        <div class="card-desc">Discuss mindfulness practices and tips.</div>
      </div>
      <div class="card">
        <img src="assets/creative.jpg" alt="Creative Corner"/>
        <div class="card-title">Creative Corner</div>
        <div class="card-desc">Share your creative projects and get feedback.</div>
      </div>
    </div>
    <h2>Events</h2>
    <div class="card-row">
      <div class="card">
        <img src="assets/workshop.jpg" alt="Workshop"/>
        <div class="card-title">Wellness Workshop</div>
        <div class="card-desc">Join us for a workshop on stress management and self-care techniques.</div>
        <button>Register</button>
      </div>
      <div class="card">
        <img src="assets/group-meet.jpg" alt="Study Group"/>
        <div class="card-title">Study Group Meetup</div>
        <div class="card-desc">Connect with fellow students for a collaborative study session.</div>
        <button>Join</button>
      </div>
    </div>
    <h2>Media Creation</h2>
    <div class="card-row">
      <div class="card">
        <img src="assets/media-create.jpg" alt="Media Creation"/>
        <div class="card-title">Create and Share</div>
        <div class="card-desc">Express yourself creatively with our meme and media creation section.</div>
        <button>Create</button>
      </div>
    </div>
    <h2>Anonymous DMs and Voice Notes</h2>
    <div class="card-row">
      <div class="card">
        <img src="assets/anonymous.jpg" alt="Anonymous"/>
        <div class="card-title">Connect Anonymously</div>
        <div class="card-desc">Reach out to peers privately and securely. Send messages or voice notes without revealing your identity.</div>
        <button>Start Chat</button>
      </div>
    </div>
    ${emergencyContactsHTML()}
  </section>
  `;
}

// --- Emergency Contacts ---
function emergencyContactsHTML() {
  return `
  <div class="emergency-contacts">
    <h3>Emergency Contacts</h3>
    <ul>
      <li><span class="icon">📞</span><div><strong>Emergency Services</strong><div class="text-muted">Call 911 for immediate help</div></div></li>
      <li><span class="icon">💬</span><div><strong>Crisis Text Line</strong><div class="text-muted">Text HOME to 741741</div></div></li>
      <li><span class="icon">📱</span><div><strong>National Suicide Prevention Lifeline</strong><div class="text-muted">Call 1-800-273-8255</div></div></li>
    </ul>
    <button class="btn-main" style="margin-top:0.5rem;">Need Help?</button>
  </div>
  `;
}

// --- SPA Routing ---
function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  renderPage(path);
}

function setActiveNav(path) {
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function renderPage(path) {
  const pageFn = pages[path] || (() => `<section class="page-section"><h1>404 - Page Not Found</h1></section>`);
  document.getElementById('content').innerHTML = pageFn();
  setActiveNav(path);
  // Re-bind nav links
  document.querySelectorAll('[data-link]').forEach(link => {
    link.onclick = e => {
      e.preventDefault();
      navigate(link.getAttribute('href'));
    };
  });
}

// --- Initial Render ---
window.onload = () => {
  document.getElementById('navbar').innerHTML = navbarHTML;
  renderPage(window.location.pathname);
  document.querySelectorAll('[data-link]').forEach(link => {
    link.onclick = e => {
      e.preventDefault();
      navigate(link.getAttribute('href'));
    };
  });
};

// --- Handle browser navigation (back/forward) ---
window.onpopstate = () => {
  renderPage(window.location.pathname);
};
