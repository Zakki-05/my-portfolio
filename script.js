/* --- CURSOR --- */
        const cursorDot = document.getElementById('cursor-dot');
        const cursorOutline = document.getElementById('cursor-outline');

        window.addEventListener('mousemove', (e) => {
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
            cursorOutline.style.left = `${e.clientX}px`;
            cursorOutline.style.top = `${e.clientY}px`;
        });

        document.querySelectorAll('.hover-trigger, a, button').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('hovered');
                cursorDot.style.width = '12px';
                cursorDot.style.height = '12px';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('hovered');
                cursorDot.style.width = '8px';
                cursorDot.style.height = '8px';
            });
        });

        /* --- THEME TOGGLE --- */
        const themeBtn = document.getElementById('theme-toggle');
        const themeIcon = themeBtn.querySelector('i');
        const body = document.body;

        if (localStorage.getItem('theme') === 'light') {
            body.classList.add('light-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');

            if (body.classList.contains('light-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });

        /* --- SCROLL ANIMATIONS --- */
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInUp');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.addEventListener('DOMContentLoaded', () => {
            const elementsToAnimate = document.querySelectorAll('.skill-category, .sys-log-card, .achievement-card, .project-item, .section-header, .hero-text > *');
            elementsToAnimate.forEach(el => {
                el.classList.add('hidden');
                observer.observe(el);
            });
        });

        /* --- GITHUB FETCH WITH MANUAL LINKS --- */
        async function loadProjects() {
            const container = document.getElementById('project-list');
            const username = 'Zakki-05';

            /* Manual GitHub and Netlify links */
            const manualLinks = {
                "Al-Huda-Islamic-School": {
                    github: "https://github.com/Zakki-05/Al_Huda_1",
                    live: "https://al-huda-islamic-school.netlify.app/",
                    description: "Islamic school website with course information",
                    topics: ["HTML", "CSS", "JavaScript", "Education"]
                },
                "AL-BR-Cafe": {
                    github: "https://github.com/Zakki-05/BR",
                    live: "https://al-br-cafe.netlify.app/",
                    description: "Restaurant website with menu and ordering system",
                    topics: ["HTML", "CSS", "JavaScript", "Restaurant"]
                },
                "TechZone-E-Commerce": {
                    github: "https://github.com/Zakki-05/JS-project",
                    live: "https://techzone-e-commerce.netlify.app/",
                    description: "E-commerce platform for tech products",
                    topics: ["HTML", "CSS", "JavaScript", "E-commerce"]
                },
                "Tell-Me-A-Joke-App": {
                    github: "https://github.com/Zakki-05/Tell-Me-a-Joke-App",
                    live: "https://tell-me-a-joke-app.netlify.app/",
                    description: "Random joke generator application",
                    topics: ["HTML", "CSS", "JavaScript", "API"]
                },
                "Guess-The-Number-Application": {
                    github: "https://github.com/Zakki-05/Guess-The-Number",
                    live: "https://guess-the-number-application.netlify.app/",
                    description: "Interactive number guessing game",
                    topics: ["HTML", "CSS", "JavaScript", "Game"]
                },
                "Computer-Quiz-App": {
                    github: "https://github.com/Zakki-05/quiz",
                    live: "https://quiz-zakki-05.netlify.app/",
                    description: "Computer science quiz application",
                    topics: ["HTML", "CSS", "JavaScript", "Quiz"]
                },
                "QR-Code-Generator": {
                    github: "https://github.com/Zakki-05/QR-Code",
                    live: "https://qr-code-generator-zakki-05.netlify.app/",
                    description: "QR code generator with customization options",
                    topics: ["HTML", "CSS", "JavaScript", "Utility"]
                },
                "Color-Palette-Generator": {
                    github: "https://github.com/Zakki-05/color-palette",
                    live: "https://color-palette-zakki-05.netlify.app/",
                    description: "Generate beautiful color palettes for design",
                    topics: ["HTML", "CSS", "JavaScript", "Design"]
                },
                "To-Do-List": {
                    github: "https://github.com/Zakki-05/to-do-list",
                    live: "https://to-do-list-zakki-05.netlify.app/",
                    description: "Task management application with local storage",
                    topics: ["HTML", "CSS", "JavaScript", "Productivity"]
                },
                "Valid-Register-Form": {
                    github: "https://github.com/Zakki-05/valid-register-form",
                    live: "https://valid-rehister-form-by-zakki-05.netlify.app/",
                    description: "Form validation with user-friendly feedback",
                    topics: ["HTML", "CSS", "JavaScript", "Forms"]
                },
                "Astra-Ai": {
                    github: "https://github.com/Zakki-05",
                    live: "https://astra-ai-1.netlify.app/",
                    description: "AI-powered application with modern interface",
                    topics: ["wordpress", "php", "AI"]
                },
                "Digi-Marketing": {
                    github: "https://github.com/Zakki-05/Digital-Marketing",
                    live: "https://digital-marketing-zakki.netlify.app/",
                    description: "Digital marketing agency website",
                    topics: ["HTML", "CSS", "JavaScript", "Marketing"]
                },
                "Tech-Zone": {
                    github: "https://github.com/Zakki-05/ownProject",
                    live: "https://tech-zone-zakki-05.netlify.app/",
                    description: "Technology blog and resource hub",
                    topics: ["HTML", "CSS", "JavaScript", "Blog"]
                },
                "Google-workspace": {
                    github: "https://github.com/Zakki-05/Google-Workspace",
                    live: "https://cloneproj01-zakki.netlify.app/",
                    description: "Google Workspace inspired interface",
                    topics: ["HTML", "CSS", "JavaScript", "UI/UX"]
                }
            };

            let finalRepos = [];

            try {
                console.log("Fetching from GitHub...");
                const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);

                if (!res.ok) {
                    throw new Error(`GitHub API error: ${res.status}`);
                }

                const repos = await res.json();
                console.log("GitHub repos found:", repos);

                // Use manual links for both GitHub and live demo
                finalRepos = Object.keys(manualLinks).map(name => {
                    const repoData = repos.find(repo => repo.name === name) || {};
                    const manualData = manualLinks[name];

                    return {
                        name: name,
                        description: repoData.description || manualData.description,
                        html_url: manualData.github,
                        homepage: manualData.live,
                        topics: repoData.topics || manualData.topics,
                        hasLiveLink: true
                    };
                });

                console.log("Final repos with manual links:", finalRepos);

            } catch (error) {
                console.log("Error fetching from GitHub, using fallback:", error);
                // Use fallback with all manual links
                finalRepos = Object.keys(manualLinks).map(name => ({
                    name: name,
                    description: manualLinks[name].description,
                    html_url: manualLinks[name].github,
                    homepage: manualLinks[name].live,
                    topics: manualLinks[name].topics,
                    hasLiveLink: true
                }));
            }

            render(finalRepos);

            function render(data) {
                if (!container) {
                    console.error("Container element not found!");
                    return;
                }

                container.innerHTML = "";

                if (data.length === 0) {
                    container.innerHTML = '<div class="project-item"><p>No projects found</p></div>';
                    return;
                }

                data.forEach((repo, i) => {
                    const num = (i + 1).toString().padStart(2, '0');
                    const formattedName = repo.name.replace(/-/g, " ");

                    console.log(`Rendering: ${repo.name}, Live: ${repo.homepage}, GitHub: ${repo.html_url}`);

                    /* LIVE DEMO BUTTON */
                    const liveBtn = `
                <a href="${repo.homepage}" target="_blank" class="btn-live hover-trigger">
                    <i class="fas fa-external-link-alt"></i>
                    <span>Live</span>
                </a>
            `;

                    /* GITHUB BUTTON */
                    const githubBtn = `
                <a href="${repo.html_url}" target="_blank" class="btn-icon btn-github hover-trigger">
                    <i class="fab fa-github"></i>
                </a>
            `;

                    const html = `
                <div class="project-item hover-trigger hidden">
                    <div class="mono" style="color: var(--text-dim);">${num} //</div>

                    <div>
                        <h3 class="proj-title">${formattedName}</h3>
                        <p style="color: var(--text-dim); font-size: 0.9rem; margin-top: 0.5rem;">
                            ${repo.description}
                        </p>
                    </div>

                    <div class="mono" style="margin-top: 1rem; color: var(--text-dim);">
                        ${repo.topics.map(t => "#" + t.toUpperCase()).join(" ")}
                    </div>

                    <div class="proj-actions">
                        ${liveBtn}
                        ${githubBtn}
                    </div>
                </div>
            `;

                    container.innerHTML += html;
                });

                // Observe the newly created project items
                document.querySelectorAll('.project-item').forEach(el => {
                    observer.observe(el);
                });
            }
        }

        // Call the function
        loadProjects();

        /* --- PROJECT COUNTER ANIMATION --- */
        function animateCounter() {
            const counterElement = document.getElementById('project-count');
            const targetValue = parseInt(counterElement.textContent);
            let currentValue = 0;
            const increment = Math.ceil(targetValue / 50); // Adjust speed
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= targetValue) {
                    currentValue = targetValue;
                    clearInterval(timer);
                }
                counterElement.textContent = currentValue;
            }, 30);
        }

        // Start counter animation when achievements section is in view
        const achievementsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter();
                    achievementsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        // Observe achievements section
        const achievementsSection = document.getElementById('achievements');
        if (achievementsSection) {
            achievementsObserver.observe(achievementsSection);
        }

        /* Pulse Animation */
        const style = document.createElement("style");
        style.innerHTML = `
@keyframes pulse {
    0% { opacity: .5; }
    50% { opacity: 1; box-shadow: 0 0 20px var(--accent-primary); }
    100% { opacity: .5; }
}`;
        document.head.appendChild(style);