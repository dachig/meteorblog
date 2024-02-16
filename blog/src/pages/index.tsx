import BlogPostDialog from "@/components/blogPostDialog";
import Navigation from "@/components/header";
import GetLastPost from "@/functions/getLastPost";
import { Post } from "@/types";

export const getStaticProps = async () => {
  const lastPost = await GetLastPost();
  return {
    props: {
      lastPost: lastPost,
    },
  };
};

interface HomeProps {
  lastPost: Post;
}

const Home = ({ lastPost }: HomeProps) => {
  return (
    <>
      <div className="bg-slate-100">
        <Navigation />
        <div>
          <div>
            <h2>Welcome to my blog!</h2>
            <p>
              This blogpage will be my personal documentation of my internsip at
              Meteor Digital NV.
            </p>
            <p>
              Meteor Digital NV is een vooraanstaand technologiebedrijf dat zich
              specialiseert in het bieden van uitgebreide e-commerce oplossingen
              en digitale diensten. Door middel van innovatieve
              softwareontwikkeling en geavanceerde webapplicaties helpt Meteor
              Digital NV bedrijven uit diverse sectoren om hun online
              aanwezigheid te versterken en succesvolle digitale
              handelsplatformen te creëren.
            </p>
            <p>
              Met een diepgaande expertise en een toegewijd team van ervaren
              professionals, biedt Meteor Digital NV niet alleen op maat
              gemaakte oplossingen, maar ook consultancydiensten en strategisch
              advies aan hun klanten. Of het nu gaat om het ontwikkelen van een
              nieuwe e-commerce website, het optimaliseren van bestaande
              digitale processen, of het integreren van geavanceerde functies,
              Meteor Digital NV staat garant voor betrouwbare en klantgerichte
              service.
            </p>
            <p>
              Daarnaast onderscheidt Meteor Digital NV zich door zijn toewijding
              aan doorlopende ondersteuning en onderhoud, waardoor klanten
              verzekerd zijn van een soepele werking en blijvend succes van hun
              digitale platformen. Dankzij hun proactieve aanpak, blijft Meteor
              Digital NV een betrouwbare partner voor bedrijven die streven naar
              groei en innovatie in de steeds veranderende digitale wereld.
            </p>
          </div>
          <BlogPostDialog lastPost={lastPost} />
        </div>
      </div>
    </>
  );
};
export default Home;
