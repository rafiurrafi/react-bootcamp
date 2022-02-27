import React from "react";

const SectionPopular = () => {
  return (
    <section className="section-popular">
      <div className="container">
        <h2 className="title">Popular news</h2>
        <Card />
      </div>
    </section>
  );
};
function Card() {
  return (
    <div className="card">
      <img
        src="https://media.istockphoto.com/photos/retro-1940s-film-noir-detective-or-gangster-picture-id485901830?b=1&k=20&m=485901830&s=170667a&w=0&h=Fl85Wr9icycdw6aUtTBNaOcn8_1UfHX19nhU4zsik-s="
        alt=""
      />
      <h3 className="py-3">This will to prepare to win that matters.</h3>
      <div className="left-news__meta py-3 d-flex">
        <a href="" className="meta__link meta__link--border pr-2">
          Abdur Rahman
        </a>
        <p className="left-news__date meta__link--border px-2">June 19, 2022</p>
        <p className="left-news__date pl-2">Football</p>
      </div>
    </div>
  );
}
export default SectionPopular;
