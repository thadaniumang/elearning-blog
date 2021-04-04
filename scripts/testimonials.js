// forEach array method
// innerHTML DOM method
// toUpperCase string method

const cardSection = document.querySelector('.testimonials-card');

const testimonials = [
    {
        course: "Common",
        title: "Great Insights",
        body: "LearnSchool has helped me a lot in clearing my basic concepts in Database Systems and Discrete Mathematics. Very precise and informative content. Cheatsheets are the show-stealer!",
        author: "Mario"
    },
    {
        course: "Common",
        title: "Amazing Content",
        body: "This is exactly what I was looking for. Kudos to the LearnSchool team for such informative content on various topics. The blog sections was incredibly interesting!",
        author: "Chun-li"        
    },
    {
        course: "DBMS",
        title: "Best of the resources",
        body: "I started with the Database Management Systems course last month and must say this is by far the best free online resource I have ever encountered",
        author: "Luigi"
    },
    {
        course: "DAM",
        title: "Maths like never before",
        body: "Never had this idea that the concepts we're learning have got so many applications in reality and are indeed so useful in solving problems.",
        author: "Shaun"
    }
]

const createCard = (title, content, author) => {
    htmlContent = `
    <div class="card">
        <div class="card-content">
            <div class="card-text">
                <h2>${title.toUpperCase()}</h2>
                <p>${content}</p>
            </div>
            <div class="card-bottom">
                <p> - ${author}</p>
            </div>
        </div>
    </div>
    `

    return htmlContent;
}

testimonials.forEach(({title, body, author}) => {
    const html = createCard(title, body, author)
    cardSection.innerHTML += html;
})