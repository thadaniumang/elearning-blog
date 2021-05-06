const blogs = document.querySelector('.blogs');

const allBlogs = [
    {
        img: '../assets/images/blogs/7branches.jpg',
        title: '7 Major Branches Of Discrete Mathematics',
        author: 'Neelam Tyagi',
        content: 'Discrete Mathematics is a branch of mathematics including discrete elements that deploy algebra and arithmetic....',
        link: 'https://www.analyticssteps.com/blogs/7-major-branches-discrete-mathematics'
    },
    {
        title: 'How I Got the Highest Grade in my Discrete Math Class',
        content: 'During my sophomore year at Dartmouth I took a course in discrete mathematics. The tests were not calibrated to any standard scale, ...',
        link: 'https://www.calnewport.com/blog/2008/11/25/case-study-how-i-got-the-highest-grade-in-my-discrete-math-class/'
    },
    {
        img: '../assets/images/blogs/oracle.png',
        title: 'What Is Database?',
        author: 'Oracle',
        content: 'Databases and spreadsheets (such as Microsoft Excel) are both convenient ways to store information. The primary differences between the two are....',
        link: 'https://www.oracle.com/in/database/what-is-database/'
    },
    {
        img: '../assets/images/blogs/sql.jpg',
        title: 'SQL queries: The Top 10 Most Used',
        author: 'Kasia Mikoluk',
        content: 'Databases are like big swimming pools. If you don’t know how to swim, that big pool could be a daunting, dark place to be....',
        link: 'https://blog.udemy.com/sql-queries/'
    }
];

const createCard = (img, title, content, author, link) => {
    htmlContent = `
    <a href=${link} target="_blank">
        <div class="card">
            <div class="card-image">
                <img src=${img} alt=${img}>
            </div>
            <div class="card-content">
                <div class="card-text">
                    <h2>${title.toUpperCase()}</h2>
                    <p>${content}</p>
                </div> <br> <br>
                <div class="card-bottom">
                    <p> - ${author}</p>
                </div>
            </div>
        </div>
    </a>
    `

    return htmlContent;
}

allBlogs.forEach(({img, title, content, author, link}) => {

    if (!img) {
        img = '../assets/images/blogs/placeholder-blog.jfif'
    }

    if (!author) {
        author = 'Anonymous'
    }

    const html = createCard(img, title, content, author, link)
    blogs.innerHTML += html;
})