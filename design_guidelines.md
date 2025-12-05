# Design Guidelines: Brown CS Student Portfolio

## Design Approach
**Reference-Based Hybrid:** Combining the minimalist elegance of Tejas Mehta's portfolio with Bryan Chung's dynamic elements and interactive features. Drawing additional inspiration from modern developer portfolios like Linear's clean aesthetics and Stripe's purposeful use of space.

**Core Principles:**
- Sophisticated minimalism with bold focal points
- Strategic use of animation for engagement without distraction
- Content-first hierarchy with generous breathing room
- Professional polish befitting a top-tier CS program

## Typography Hierarchy

**Font Selection:** Inter or SF Pro Display via Google Fonts CDN

**Scale:**
- Hero Name: 4xl to 6xl (responsive), font-weight-700
- Rotating Titles: 2xl to 3xl, font-weight-500, slightly muted opacity
- Section Headers: 3xl to 4xl, font-weight-600
- Project Titles: xl to 2xl, font-weight-600
- Body Text: base to lg, font-weight-400, leading-relaxed
- Metadata/Tags: sm to base, font-weight-500

## Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 24, 32 (p-4, h-8, mb-12, py-16, gap-24, pt-32)

**Container Strategy:**
- Full-width sections with max-w-7xl inner containers
- Content sections: max-w-6xl for optimal reading
- Hero section: Full viewport with centered content max-w-4xl

**Vertical Rhythm:**
- Section padding: py-20 (mobile), py-32 (desktop)
- Inter-section spacing: mb-16 to mb-24
- Component internal spacing: gap-8 to gap-12

## Hero Section Design

**Layout:** Full viewport (90-100vh) with centered content

**Elements:**
1. **Name Display:** Large, bold, centered - your full name
2. **Rotating Titles Animation:** Smooth fade-in/out cycling through 5-7 titles:
   - "Computer Science Student @ Brown University"
   - "Full-Stack Developer"
   - "AI/ML Researcher"
   - "Open Source Contributor"
   - (Add 3-4 more relevant titles)
   
3. **Bio Paragraph:** max-w-2xl, centered, 2-3 sentences introducing yourself, your passions, and goals

4. **Profile Image:** Circular frame (w-40 to w-48), positioned above name with subtle glow effect, professional headshot

5. **Quick Links Bar:** Horizontal flex row with icon + label combinations:
   - GitHub, LinkedIn, Email, Phone, Location (Providence, RI)
   - Use Heroicons, clickable with smooth hover states

6. **Background Treatment:** Navy blue gradient (#0a192f to #112240) with animated subtle gradient mesh or geometric patterns, low opacity flowing shapes

## Projects Section

**Layout:** 2-column grid on desktop (grid-cols-1 md:grid-cols-2), gap-8

**Project Card Structure:**
- Hover-responsive cards with subtle elevation increase
- Project thumbnail/logo at top (aspect-ratio-16/9 or square logo)
- Title + one-line description
- Tech stack tags (inline-flex, gap-2, pill-shaped badges)
- "View Project" link with arrow icon
- GitHub star count if applicable

**Categorization:** Group into subsections:
- Featured Projects (2-3 top projects, larger cards)
- Academic Projects
- Personal Projects

## Experience Timeline

**Layout:** Vertical timeline with alternating left-right content (desktop), stacked (mobile)

**Timeline Visual:** Vertical line with circular nodes at each experience point

**Experience Card:**
- Organization logo (small, 32x32 to 48x48)
- Role title (font-semibold, text-lg)
- Organization name + location
- Date range (text-sm, muted)
- 2-3 bullet points of key achievements/responsibilities

## Research Publications

**Layout:** Single column, max-w-4xl, stacked cards with gap-6

**Publication Card:**
- Paper title (text-xl, font-semibold, clickable to external link)
- Conference/Journal badge (pill-shaped, distinctive styling)
- Authors list (your name highlighted/bolded)
- Publication date
- 2-3 line abstract excerpt
- "Read Full Paper" CTA with external link icon
- Venue logo if available (IEEE, ACM, etc.)

## Skills Section

**Layout:** 3-4 column grid on desktop (grid-cols-2 md:grid-cols-4)

**Skill Categories:**
- Programming Languages
- Frameworks & Libraries  
- Tools & Technologies
- Specializations (AI/ML, Web Dev, etc.)

**Visual Treatment:** Logo grid with technology icons/logos, name labels below, organized by category with subtle dividers

## Awards Section

**Layout:** Masonry-style grid or 2-column layout

**Award Card:**
- Award name (text-lg, font-semibold)
- Issuing organization with logo
- Date received
- Brief context if needed (e.g., "Top 5% nationally")
- Icon/badge visual element

## Navigation

**Fixed Header:** Sticky navigation with blur background on scroll
- Logo/Name on left
- Nav links on right: Projects, Experience, Research, Skills, Awards, Contact
- Smooth scroll to sections on click
- Mobile: Hamburger menu with slide-out drawer

## Footer

**Layout:** 3-column grid on desktop, stacked mobile

**Content:**
- Column 1: Brief tagline + Brown University affiliation
- Column 2: Quick navigation links
- Column 3: Social links with icons
- Bottom: Copyright notice, "Built with [tech stack]"

## Component Library

**Buttons:** Rounded-lg, py-2 px-4, font-medium, subtle hover scale and brightness
**Cards:** Rounded-xl, subtle border or shadow, hover:shadow-lg transition
**Tags/Badges:** Rounded-full, px-3 py-1, text-sm, semi-transparent backgrounds
**Links:** Underline-offset-4, hover:opacity-70 transition
**Icons:** Heroicons (outline for general, solid for emphasis), consistent 20-24px sizing

## Animations

**Strategic Use Only:**
- Hero rotating titles: 3s fade transition between items
- Scroll-triggered fade-in for section headers (once on first view)
- Card hover: subtle elevation and scale (scale-105)
- Navigation scroll: smooth scroll behavior
- NO parallax, NO continuous animations, NO distracting motion

## Images

**Hero Background:** Abstract gradient mesh with flowing shapes in navy blues (#0a192f, #112240, #1e3a5f), animated subtly with CSS gradients

**Profile Photo:** Professional headshot, circular crop, positioned centrally above name in hero

**Project Thumbnails:** Screenshots or logos for each project, aspect-ratio maintained, rounded corners

**Organization Logos:** For experiences (GitHub, company logos), awards (competition logos), research (conference logos) - keep consistent sizing (32-48px height)

**No Stock Photos:** All images should be authentic - your actual photo, real project screenshots, actual company/organization logos

This design creates a sophisticated, professional portfolio that showcases your CS achievements while maintaining Brown University's academic prestige. The navy gradient background provides visual interest without distraction, while the structured sections ensure easy navigation through your impressive credentials.