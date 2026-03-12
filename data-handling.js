import { everypost } from "./post-data.js";



let currentFilter;
let currentSearch;
let currentPage = 1;
const pageSize = 10;
let matchedPosts = [];

function setMatchesFromCurrentView() {
    matchedPosts = [];
    for (let i = 0; i < everypost.posts.length; i++) {
        if (document.getElementById(`post-${i}`).style.display !== 'none') {
            matchedPosts.push(i);
        }
    }
}

function applyPagination() {
    const totalPages = Math.max(1, Math.ceil(matchedPosts.length / pageSize));
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    for (let i = 0; i < matchedPosts.length; i++) {
        document.getElementById(`post-${matchedPosts[i]}`).style.display = 'none';
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    for (let matchedIndex = startIndex; matchedIndex < endIndex && matchedIndex < matchedPosts.length; matchedIndex++) {
        const postId = matchedPosts[matchedIndex];
            document.getElementById(`post-${postId}`).style.display = '';
    }

    document.getElementById('page-info').textContent = `Page ${currentPage} out of ${totalPages}`;
    const isOnFirstPage = currentPage === 1;
    const isOnLastPage = currentPage === totalPages;
    document.getElementById('page-prev').disabled = isOnFirstPage;
    document.getElementById('page-next').disabled = isOnLastPage;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        applyPagination();
    }
}

function nextPage() {
    const totalPages = Math.max(1, Math.ceil(matchedPosts.length / pageSize));
    if (currentPage < totalPages) {
        currentPage++;
        applyPagination();
    }
}

function really_clear() {
    currentFilter = undefined;
    currentSearch = undefined;
    currentPage = 1;
    clear();
    let search_input = document.getElementById("search-input");
    if (search_input) {
        search_input.value = "";
    }
    setMatchesFromCurrentView();
    applyPagination();
}


function clear() {
    for (let i = 0; i < everypost.posts.length; i++) {
           document.getElementById(`post-${i}`).style.display = '';
    }
}

function really_filter(tagName) {
    for (let i = 0; i < everypost.posts.length; i++) {
        if (everypost.posts[i].tag !== tagName) {
            document.getElementById(`post-${i}`).style.display = "none";
        }
    }
}

function really_silter(text, filter) {
    text = text.toLowerCase();
    for (let i = 0; i < everypost.posts.length; i++) {
        let post = everypost.posts[i];
        let post_content = (post.title + " " + post.description).toLowerCase();
        if (post_content.indexOf(text) > -1 && everypost.posts[i].tag == filter) {
            //do nothing
        } else {
            document.getElementById(`post-${i}`).style.display = 'none';
        }
    }
}

function really_search(text) {
    text = text.toLowerCase();
    for (let i = 0; i < everypost.posts.length; i++) {
        let post = everypost.posts[i];
        let post_content = (post.title + " " + post.description).toLowerCase();
        if (post_content.indexOf(text) > -1) {
            //do nothing
        } else {
            document.getElementById(`post-${i}`).style.display = 'none';
        }
    }
}

function changePage(query, type) {
    if (type === 'filter_query') {
        clear();
        currentFilter = query;
        if (currentSearch) {
            really_silter(currentSearch, query);
        } else {
            really_filter(query);
        }
    } else if (type === 'search_query') {
        if (currentFilter) {
            clear();
            really_silter(query, currentFilter);
            currentSearch = query;
        } else {
            clear();
            really_search(query);
            currentSearch = query;
        }
    }
    currentPage = 1;
    setMatchesFromCurrentView();
    applyPagination();
}




document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    if (postsContainer) {
        postsContainer.innerHTML = '';
        displayPosts();
        setMatchesFromCurrentView();
        applyPagination();
    }
    let search_input = document.getElementById("search-input");
    if (search_input) {
        search_input.addEventListener("keyup", function () {
            changePage(search_input.value, 'search_query')
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
        containerdiv.addEventListener('click', function() {
            diplayPostModal(i);
        })
        const heading = document.createElement("h3");
        heading.className = "google-sans-subclass";
        heading.id = `post-title-${i}`;
        heading.textContent = everypost.posts[i].title;
        const para = document.createElement("p");
        para.className = "google-sans-subclass";
        para.id = `post-description-${i}`;
        para.textContent = everypost.posts[i].description;
        const tag = document.createElement("p");
        tag.className = "google-sans-tagclass";
        tag.id = `tag-${i}`;
        tag.textContent = everypost.posts[i].tag;
        containerdiv.appendChild(heading);
        containerdiv.appendChild(para);
        containerdiv.appendChild(tag);
        postsContainer.appendChild(containerdiv);
    }
}

window.changePage = changePage;
window.really_clear = really_clear;
window.prevPage = prevPage;
window.nextPage = nextPage;









