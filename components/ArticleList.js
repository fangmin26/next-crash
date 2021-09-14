import ArticleItem from "./ArticleItem";
export default function ArticleList({ articles }) {
  return (
    <>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </>
  );
}
