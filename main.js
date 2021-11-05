/* Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes. */

/* dichiarazione delle variabili utili a modificare i post */
const postList = document.querySelector('.posts-list');

/* creazione dei 5 array */
const newPost = [
    {
        userImage: 'https://unsplash.it/300/300?image=15',
        userName: 'Phil Mangione',
        datePost: '4 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imagePost: 'https://unsplash.it/600/300?image=171',
        numberLike: '80',
    },
    {
        userImage: 'https://unsplash.it/300/300?image=16',
        userName: 'Peppino Impastato',
        datePost: `${randomNumber(1,5)} mesi fa`,
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.',
        imagePost: 'https://unsplash.it/600/300?image=172',
        numberLike: randomNumber(1,150),
    },
    {
        userImage: 'https://unsplash.it/300/300?image=17',
        userName: 'Vincenzo Imbruttito',
        datePost: `${randomNumber(2,10)} ore fa`,
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias. Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imagePost: 'https://unsplash.it/600/300?image=173',
        numberLike: randomNumber(1,150),
    },
    {
        userImage: 'https://unsplash.it/300/300?image=18',
        userName: 'Leonardo Da Vinci',
        datePost: `${randomNumber(1,10)} giorni fa`,
        postText: 'Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imagePost: 'https://unsplash.it/600/300?image=174',
        numberLike: randomNumber(1,150),
    },
    {
        userImage: 'https://unsplash.it/300/300?image=19',
        userName: 'Daniele Rossi',
        datePost: `${randomNumber(1,10)} giorni fa`,
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imagePost: 'https://unsplash.it/600/300?image=175',
        numberLike: randomNumber(1,150),
    },
];

/* stampa dei 5 array */
for (let i = 0; i < newPost.length; i++) {

    const post = newPost[i];

    postList.innerHTML += 
    `<div class="post">

        <div class="post__header">

            <div class="post-meta">

                <div class="post-meta__icon">

                    <img class="profile-pic" src="${post.userImage}" alt="Phil Mangione">
                </div>

                <div class="post-meta__data">

                    <div class="post-meta__author">${post.userName}</div>
                    <div class="post-meta__time">${post.datePost}</div>
                </div>
            </div>
        </div>

        <div class="post__text">${post.postText}</div>

        <div class="post__image">

            <img src="${post.imagePost}" alt="">
        </div>

        <div class="post__footer">

            <div class="likes js-likes">

                <div class="likes__cta">

                    <a class="like-button  js-like-button" href="#" data-postid="1">

                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${post.numberLike}</b> persone
                </div>
            </div>
        </div>
    </div>`;
}


/* random number per like e data post */
function randomNumber(min,max) {
    let number = Math.floor(Math.random() * (max - min +1)) +min;
    return number;
}

