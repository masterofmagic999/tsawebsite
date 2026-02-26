


let everypost = {
    posts: [
        {
            title: "The Future of AI",
            description: "Exploring how generative models are reshaping the creative industry.",
            tag: "Technology"
        },
        {
            title: "Morning Coffee Rituals",
            description: "A deep dive into the best brewing methods for the perfect start to your day.",
            tag: "Lifestyle"
        },
        {
            title: "Minimalist Web Design",
            description: "Why less is often more when it comes to user experience and interface design.",
            tag: "Design"
        },
        {
            title: "Remote Work Essentials",
            description: "The top 10 tools you need to stay productive while working from home.",
            tag: "Productivity"
        },
        {
            title: "Urban Gardening 101",
            description: "How to grow your own vegetables even if you live in a small apartment.",
            tag: "announcement"
        },
        {
            title: "The Rise of Electric Vehicles",
            description: "Analyzing the global shift toward sustainable transportation and infrastructure.",
            tag: "general info"
        },
        {
            title: "Understanding Blockchain",
            description: "A beginner-friendly guide to decentralized ledgers and their applications.",
            tag: "events"
        },
        {
            title: "Mental Health in the Digital Age",
            description: "Strategies for maintaining balance in a world of constant notifications.",
            tag: "events"
        },
        {
            title: "Mastering the Command Line",
            description: "Boost your developer workflow by learning these essential terminal commands.",
            tag: "Programming"
        },
        {
            title: "Travel on a Budget",
            description: "Hidden gems around the world that won't break the bank.",
            tag: "Adventure"
        },
        {
            title: "The Art of Storytelling",
            description: "Techniques for crafting compelling narratives that resonate with audiences.",
            tag: "general info"
        },
        {
            title: "Sustainable Fashion Trends",
            description: "How brands are moving toward ethical production and recycled materials.",
            tag: "announcement"
        },
        {
            title: "Intro to Machine Learning",
            description: "Breaking down the core concepts behind neural networks and data sets.",
            tag: "Education"
        },
        {
            title: "Cooking with Spices",
            description: "Transform your home meals by understanding the basics of spice pairing.",
            tag: "Culinary"
        },
        {
            title: "Space Exploration News",
            description: "An update on the latest missions to Mars and the outer solar system.",
            tag: "events"
        },
        {
            title: "Effective Time Management",
            description: "Practical advice on using time-blocking to reclaim your schedule.",
            tag: "Business"
        },
        {
            title: "Indoor Fitness Routines",
            description: "Stay active with these high-intensity workouts you can do in your living room.",
            tag: "Health"
        },
        {
            title: "Photography Lighting Tips",
            description: "Learn how to manipulate natural light to take stunning portrait photos.",
            tag: "Photography"
        },
        {
            title: "Cybersecurity Basics",
            description: "Essential steps to protect your personal data and online identity.",
            tag: "Security"
        },
        {
            title: "The Psychology of Habits",
            description: "Why we do what we do and how to build routines that actually stick.",
            tag: "announcement"
        }
    ],
}

function search(query) {
    
}

function filter(tagName) {
    for (let i = 0; i < everypost.posts.length; i++) {
        document.getElementById(i).style.display = "inline-flex"
    }
    for (let i = 0; i < everypost.posts.length; i++) {
        if (everypost.posts[i].tag !== tagName) {
            document.getElementById(i).style.display = "none"
        }
    }
}


function displayPosts() {
    for (let i = 0; i < everypost.posts.length; i++) {
        function addPosts() {
            let postsContainer = document.getElementById('posts-container');
            const containerdiv = document.createElement("div");
            containerdiv.setAttribute("class", "tiny-post-container");
            containerdiv.setAttribute("id", i);
            postsContainer.appendChild(containerdiv);
            const heading = document.createElement("h3");
            const headingNode = document.createTextNode(everypost.posts[i].title);
            heading.appendChild(headingNode);
            heading.setAttribute("class", "google-sans-subclass");
            heading.setAttribute("id", "post-title");
            containerdiv.appendChild(heading);
            const para = document.createElement("p");
            const node = document.createTextNode(everypost.posts[i].description);
            para.appendChild(node);
            para.setAttribute("class", "google-sans-subclass");
            para.setAttribute("id", "post");
            containerdiv.appendChild(para);
            const tag = document.createElement("p");    
            const tagNode = document.createTextNode(everypost.posts[i].tag);
            tag.appendChild(tagNode);
            tag.setAttribute("class", "google-sans-tagclass");
            tag.setAttribute("id", "tag");
            containerdiv.appendChild(tag);
        }
        addPosts();
    }

}





window.onload = function() {
    displayPosts();
};







