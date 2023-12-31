const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "Russeau",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
    {
        name: "Frida Kahlo",
        username: "rivera1934",
        location: "Coyoacan, Mexico",
        avatar: "images/avatar-kahlo.png",
        post: "images/post-kahlo.png",
        comment: "Love ya, guys. More details in bio.",
        likes: 20234
    },

    {
        name: "Andy Warhol",
        username: "loureed1945",
        location: "New York, USA",
        avatar: "images/avatar-warhol.png",
        post: "images/post-warhol.webp",
        comment: "Your 15 minutes of fame. :)",
        likes: 2212
    }
]

// Function to create and append a profile to the container
function createProfile(profile) {
    // Create a unique identifier for each profile container
    const profileContainer = document.createElement('div')
    profileContainer.id = profile.username;
    profileContainer.classList.add('profile')

    // Create profile avatar image
    const avatarImg = document.createElement('img')
    avatarImg.src = profile.avatar;
    avatarImg.classList.add('profile-avatar')

    // Create profile information div
    const infoDiv = document.createElement('div')
    infoDiv.classList.add('profile-info')

    // Create profile name paragraph
    const namePara = document.createElement('p')
    namePara.classList.add('name')
    namePara.textContent = profile.name

    // Create profile location paragraph
    const locationPara = document.createElement('p');
    locationPara.classList.add('location');
    locationPara.textContent = profile.location;

    // Create post image
    const postImg = document.createElement('img')
    postImg.src = profile.post;
    postImg.classList.add('photo-post')

    // Create icon buttons div
    const iconButtonsDiv = document.createElement('div')
    iconButtonsDiv.classList.add('icon-buttons')

    const heartButton = createIconButton('images/icon-heart.png')
    heartButton.addEventListener('click', () => {
        handleLikeClick(profile.username)
    });

    const commentButton = createIconButton('images/icon-comment.png')
    const dmButton = createIconButton('images/icon-dm.png')

    iconButtonsDiv.appendChild(heartButton)
    iconButtonsDiv.appendChild(commentButton)
    iconButtonsDiv.appendChild(dmButton)

    // Create likes paragraph
    const likesPara = document.createElement('p')
    likesPara.classList.add('likes')
    likesPara.textContent = `${profile.likes} likes`

    // Create comments paragraph
    const commentsPara = document.createElement('p')
    commentsPara.classList.add('comments')
    commentsPara.innerHTML = `<span class="user-comment">${profile.username}</span>${profile.comment}`

    // Append elements to profile info div
    infoDiv.appendChild(namePara)
    infoDiv.appendChild(locationPara)
    profileContainer.appendChild(avatarImg)
    profileContainer.appendChild(infoDiv)
    profileContainer.appendChild(postImg)
    profileContainer.appendChild(iconButtonsDiv)
    profileContainer.appendChild(likesPara)
    profileContainer.appendChild(commentsPara)

    // Append profile container to the profiles container
    const profilesContainer = document.querySelector('#profiles-container')
    profilesContainer.appendChild(profileContainer)
}

// Function to create an icon button
function createIconButton(iconSrc) {
    const button = document.createElement('button')
    const iconImg = document.createElement('img')
    iconImg.src = iconSrc;
    iconImg.classList.add('icon-btn')
    button.appendChild(iconImg)
    return button
}

// Function to handle the like button click event
function handleLikeClick(username) {
    const profile = posts.find((p) => p.username === username)
    if (profile) {
        profile.likes++
        const likesPara = document.querySelector(`#${username} .likes`)
        if (likesPara) {
            likesPara.textContent = `${profile.likes} likes`
        }
    }
}

// Loop through the posts array and create profiles
for (const profile of posts) {
    createProfile(profile)
}
