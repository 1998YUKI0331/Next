import axios from 'axios';
import Card from "../src/component/Card/Card"

export default function About({ posts }) {
  return (
    <>
      {posts.map((post, idx) =>
        <div
          key={idx} 
          onClick={() => handleClickCard(idx)}
        >
          <Card 
            title={post.title}
            thumbnail={post.thumbnail}
          />
        </div>
      )}
    </>
  )
}

export async function getServerSideProps() { 
  const kakao = (keyword) => {
    return axios.create({
      baseURL: "https://dapi.kakao.com/v2/search/blog?target=title",
      headers: { Authorization: process.env.NEXT_PUBLIC_KAKAO_API_KEY },
      params: { query: keyword }
    });
  }

  const res = await kakao("하이").get();
  const posts = res.data.documents;
  return { props: { posts } }; 
} 
