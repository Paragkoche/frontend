import Blogslider from "../Slider/blogslider";

const TrendingBlogs = () => {
  return (
    <section className="py-4 relative mb-20 md:px-20 px-52 sm:px-5">
      <h1 className="text-5xl font-bold">Trending Blogs </h1>
      <div className="my-20 w-full h-full">
        <Blogslider />
      </div>
    </section>
  );
};

export default TrendingBlogs;
