function loadPosts() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Res => Res.json())
        .then(data => displayPost(data))
}


loadPosts();

function displayPost(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('posts');


        div.innerHTML = `
        <h3> ${post.title} </h3>
        <p>  ${post.body} </p>
        `;

        postContainer.appendChild(div);

        console.log(post.title);
    }

}

/* 
Name: Leanne Graham email: Sincere@april.biz
Name: Ervin Howell email: Shanna@melissa.tv
Name: Clementine Bauch email: Nathan@yesenia.net
Name: Patricia Lebsack email: Julianne.OConner@kory.org
Name: Chelsey Dietrich email: Lucio_Hettinger@annie.ca
Name: Mrs. Dennis Schulist email: Karley_Dach@jasper.info
Name: Kurtis Weissnat email: Telly.Hoeger@billy.biz
Name: Nicholas Runolfsdottir V email: Sherwood@rosamond.me
Name: Glenna Reichert email: Chaim_McDermott@dana.io
Name: Clementina DuBuque email: Rey.Padberg@karina.biz
Name: Leanne Graham email: Sincere@april.biz
Name: Ervin Howell email: Shanna@melissa.tv
Name: Clementine Bauch email: Nathan@yesenia.net
Name: Patricia Lebsack email: Julianne.OConner@kory.org
Name: Chelsey Dietrich email: Lucio_Hettinger@annie.ca
Name: Mrs. Dennis Schulist email: Karley_Dach@jasper.info
Name: Kurtis Weissnat email: Telly.Hoeger@billy.biz
Name: Nicholas Runolfsdottir V email: Sherwood@rosamond.me
Name: Glenna Reichert email: Chaim_McDermott@dana.io
Name: Clementina DuBuque email: Rey.Padberg@karina.biz
Name: Leanne Graham email: Sincere@april.biz
Name: Ervin Howell email: Shanna@melissa.tv
Name: Clementine Bauch email: Nathan@yesenia.net
Name: Patricia Lebsack email: Julianne.OConner@kory.org
Name: Chelsey Dietrich email: Lucio_Hettinger@annie.ca
Name: Mrs. Dennis Schulist email: Karley_Dach@jasper.info
Name: Kurtis Weissnat email: Telly.Hoeger@billy.biz
Name: Nicholas Runolfsdottir V email: Sherwood@rosamond.me
Name: Glenna Reichert email: Chaim_McDermott@dana.io
Name: Clementina DuBuque email: Rey.Padberg@karina.biz
 */