import axios from 'axios';

export default function Post({ post }) {
  return (
    <h1>{post.contents}</h1> 
  )
} 

const kakao = (keyword) => {
  return axios.create({
    baseURL: "https://dapi.kakao.com/v2/search/blog?target=title",
    headers: { Authorization: process.env.NEXT_PUBLIC_KAKAO_API_KEY },
    params: { query: keyword }
  });
}

export async function getStaticPaths() {
  const res = await kakao("하이").get();
  const posts = res.data.documents;

  const paths = posts.map((post, idx) => ({
    params: { id: String(idx) }, 
  }));

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await kakao("하이").get();
  const post = res.data.documents[params.id];

  return { props: {post} }
}
