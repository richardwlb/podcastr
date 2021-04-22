export default function Home(props) {
  const { episodes } = props;
  console.log(episodes);

  return (
    episodes.map( (episode) => {
      return(
        <ul>
          <li>{episode.id}</li>
        </ul>
      )
    })
  )
}

// Server Site Rendering
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes');
//   const data = await response.json();

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }

// Static Site Generator
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 2, // Será atualizado a cada 2 minutos.
  }
}