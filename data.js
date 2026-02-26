function filter(tagName) {
    for (let i = 0; i < everypost.posts.length; i++) {
        document.getElementById(`post-${i}`).style.display = "inline-flex";
    }
    for (let i = 0; i < everypost.posts.length; i++) {
        if (everypost.posts[i].tag !== tagName) {
            document.getElementById(`post-${i}`).style.display = "none";
        }
    }
}

function search(query) {
    query = query.toLowerCase();
    for (let i = 0; i < everypost.posts.length; i++) {
        document.getElementById(`post-${i}`).style.display = "inline-flex";
    }
    for (let i = 0; i < everypost.posts.length; i++) {
        let post = everypost.posts[i];
        let post_content = (post.title + " " + post.description).toLowerCase();
        if (post_content.indexOf(query) > -1) {

        } else {
            document.getElementById(`post-${i}`).style.display = 'none';
        }
    }
}
let everypost = {
    posts: [
        {
            title: "The Future of AI",
            description: "Exploring how generative models are reshaping the creative industry.",
            content: "<strong>Generative AI</strong> is transforming how we conceptualize art and code. This shift marks a new era of human-machine synergy.",
            tag: "Technology"
        },
        {
            title: "Morning Coffee Rituals",
            description: "A deep dive into the best brewing methods for the perfect start to your day.",
            content: "Mastering the perfect pour-over requires patience and thermal precision. A dedicated ritual sets a focused tone for the day.",
            tag: "Lifestyle"
        },
        {
            title: "Minimalist Web Design",
            description: "Why less is often more when it comes to user experience and interface design.",
            content: "Clutter-free interfaces prioritize user intent over visual noise. Simplicity is the ultimate sophistication in modern UX.",
            tag: "Design"
        },
        {
            title: "Remote Work Essentials",
            description: "The top 10 tools you need to stay productive while working from home.",
            content: "The right ergonomic setup and digital tools prevent home-office burnout. Efficiency starts with a curated workspace.",
            tag: "Productivity"
        },
        {
            title: "Urban Gardening 101",
            description: "How to grow your own vegetables even if you live in a small apartment.",
            content: "Vertical planters turn tiny balconies into thriving green sanctuaries. You don't need a yard to harvest fresh produce.",
            tag: "announcement"
        },
        {
            title: "The Rise of Electric Vehicles",
            description: "Analyzing the global shift toward sustainable transportation and infrastructure.",
            content: "Mass adoption of EVs is driving a total overhaul of urban power grids. The future of transit is quiet, clean, and electric.",
            tag: "general info"
        },
        {
            title: "Understanding Blockchain",
            description: "A beginner-friendly guide to decentralized ledgers and their applications.",
            content: "Blockchain provides a transparent, tamper-proof record for digital transactions. Its utility extends far beyond just cryptocurrency.",
            tag: "events"
        },
        {
            title: "Mental Health in the Digital Age",
            description: "Strategies for maintaining balance in a world of constant notifications.",
            content: "Digital wellness starts with setting firm boundaries on screen time. Reclaiming your focus requires intentional offline breaks.",
            tag: "events"
        },
        {
            title: "Mastering the Command Line",
            description: "Boost your developer workflow by learning these essential terminal commands.",
            content: "The terminal offers a level of speed and control that GUIs cannot match. Essential shell commands are a developer's true superpower.",
            tag: "Programming"
        },
        {
            title: "Travel on a Budget",
            description: "Hidden gems around the world that won't break the bank.",
            content: "Memorable travel experiences often lie outside of expensive tourist traps. Strategic planning makes global exploration affordable for everyone.",
            tag: "Adventure"
        },
        {
            title: "The Art of Storytelling",
            description: "Techniques for crafting compelling narratives that resonate with audiences.",
            content: "Every great story is anchored by a relatable emotional core. Master the arc to keep your audience truly captivated.",
            tag: "general info"
        },
        {
            title: "Sustainable Fashion Trends",
            description: "How brands are moving toward ethical production and recycled materials.",
            content: "Ethical manufacturing is becoming the new standard for modern apparel. Conscious consumerism is reshaping the global fashion industry.",
            tag: "announcement"
        },
        {
            title: "Intro to Machine Learning",
            description: "Breaking down the core concepts behind neural networks and data sets.",
            content: "Machine learning algorithms learn from data to predict future outcomes. It is the engine driving today's most advanced software.",
            tag: "Education"
        },
        {
            title: "Cooking with Spices",
            description: "Transform your home meals by understanding the basics of spice pairing.",
            content: "A deep understanding of spice profiles can elevate any basic ingredient. Experimenting with aromatics is the key to culinary mastery.",
            tag: "Culinary"
        },
        {
            title: "Space Exploration News",
            description: "An update on the latest missions to Mars and the outer solar system.",
            content: "New robotic missions are searching for signs of life on the Red Planet. Humanity's reach into the cosmos is expanding faster than ever.",
            tag: "events"
        },
        {
            title: "Effective Time Management",
            description: "Practical advice on using time-blocking to reclaim your schedule.",
            content: "Time-blocking ensures your most important work gets the attention it deserves. Control your calendar before it starts to control you.",
            tag: "Business"
        },
        {
            title: "Indoor Fitness Routines",
            description: "Stay active with these high-intensity workouts you can do in your living room.",
            content: "Effective exercise doesn't require a gym membership or heavy equipment. Consistency is the most vital component of any fitness journey.",
            tag: "Health"
        },
        {
            title: "Photography Lighting Tips",
            description: "Learn how to manipulate natural light to take stunning portrait photos.",
            content: "Great photography is essentially the art of chasing the right light. Understanding shadows is just as important as finding the glow.",
            tag: "Photography"
        },
        {
            title: "Cybersecurity Basics",
            description: "Essential steps to protect your personal data and online identity.",
            content: "Robust digital hygiene is your first defense against sophisticated cyber threats. Use a password manager to secure your digital life.",
            tag: "Security"
        },
        {
            title: "The Psychology of Habits",
            description: "Why we do what we do and how to build routines that actually stick.",
            content: "Our lives are shaped by the small actions we perform repeatedly. Design your environment to make good habits the default path.",
            tag: "announcement"
        }
    ],
}


document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    if (postsContainer) {
        postsContainer.innerHTML = '';
        displayPosts();
    }
    let search_input = document.getElementById("search-input");
    if (search_input) {
        search_input.addEventListener("keyup", function () {
            search(search_input.value);
        });
    }
});

function diplayPostModal(postIndex) {
    let modal = document.getElementById('myModal');
    let closer = document.getElementById("close");
    modal.style.display = 'block';
    let post_title = document.getElementById('modal-post-title');
    let post_content = document.getElementById('modal-post-content');
    closer.onclick = function() {
        modal.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    post_title.innerHTML = everypost.posts[postIndex].title;
    post_content.innerHTML = everypost.posts[postIndex].content;   
}

function displayPosts() {
    let postsContainer = document.getElementById('posts-container');
    for (let i = 0; i < everypost.posts.length; i++) {
        const containerdiv = document.createElement("div");
        containerdiv.className = "tiny-post-container";
        containerdiv.id = `post-${i}`;
        const heading = document.createElement("h3");
        heading.className = "google-sans-subclass";
        heading.id = `post-title-${i}`;
        heading.textContent = everypost.posts[i].title;
        heading.addEventListener('click', function() {
            diplayPostModal(i);
        })
        const para = document.createElement("p");
        para.className = "google-sans-subclass";
        para.id = `post-description-${i}`;
        para.textContent = everypost.posts[i].description;
        para.addEventListener('click', function() {
            diplayPostModal(i);
        })
        const tag = document.createElement("p");
        tag.className = "google-sans-tagclass";
        tag.id = `tag-${i}`;
        tag.textContent = everypost.posts[i].tag;
        tag.addEventListener('click', function() {
            diplayPostModal(i);
        })
        containerdiv.appendChild(heading);
        containerdiv.appendChild(para);
        containerdiv.appendChild(tag);
        postsContainer.appendChild(containerdiv);
    }
}



// Removed duplicate DOMContentLoaded event listener







