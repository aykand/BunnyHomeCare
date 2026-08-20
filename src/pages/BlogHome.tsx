import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  X,
} from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import Seo from "../components/Seo";

export default function BlogHome() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories: string[] = [
    "All",
    "Family Caregiving",
    "Switching Agencies",
    "Home Care",
    "Caregiver Support",
  ];

  const hasActiveFilter =
    searchTerm.trim() !== "" || activeCategory !== "All";

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" ||
        post.category === activeCategory;

      const searchableText = [
        post.title,
        post.excerpt,
        post.category,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        query === "" || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const displayedPosts = hasActiveFilter
    ? filteredPosts
    : otherPosts;

  const clearFilters = (): void => {
    setSearchTerm("");
    setActiveCategory("All");
  };

  return (
    <>
      <Seo
        title="Bunny Home Care Blog | Home Care Tips for Pennsylvania Families"
        description="Read Bunny Home Care articles about family caregiving, home care services, switching agencies, and caregiver support in Pennsylvania."
        canonical="https://www.bunnyhomecare.com/blog"
      />

      <main className="bg-gray-50 min-h-screen pt-24">
        {/* Hero */}
        <section className="px-6 py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#37575f] bg-[#30d5c8]/15 px-4 py-2 rounded-full mb-5 border border-[#30d5c8]/30">
              Bunny Home Care Blog
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-[#37575f] leading-tight mb-6">
              Helpful Home Care Resources for Pennsylvania Families
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Learn about family caregiving, senior care, switching home care
              agencies, and how Bunny Home Care supports families with trusted
              service.
            </p>
          </div>
        </section>

        {/* Search and Categories */}
        <section className="px-6 pb-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6 flex flex-col lg:flex-row gap-5 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search articles..."
                  aria-label="Search blog articles"
                  className="w-full rounded-xl border border-gray-200 pl-12 pr-11 py-3 text-gray-700 focus:outline-none focus:border-[#30d5c8] focus:ring-2 focus:ring-[#30d5c8]/20"
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    aria-label="Clear search"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#37575f] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      activeCategory === category
                        ? "bg-[#30d5c8] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-[#30d5c8]/15 hover:text-[#37575f]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {!hasActiveFilter && featuredPost && (
          <section className="px-6 pb-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                <div className="h-72 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 md:p-10 text-left flex flex-col justify-center">
                  <span className="inline-block w-fit text-xs font-bold uppercase tracking-widest text-[#37575f] bg-[#30d5c8]/15 px-3 py-1 rounded-full mb-4">
                    Featured Article
                  </span>

                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#37575f] mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#30d5c8]" />
                      {featuredPost.date}
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#30d5c8]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 bg-[#30d5c8] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#28c5b9] transition-colors w-fit"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div className="text-left">
                <h2 className="text-3xl font-extrabold text-[#37575f]">
                  {hasActiveFilter ? "Search Results" : "Latest Articles"}
                </h2>

                <p className="text-gray-500 mt-2">
                  {hasActiveFilter
                    ? `${filteredPosts.length} ${
                        filteredPosts.length === 1
                          ? "article"
                          : "articles"
                      } found`
                    : "Simple guides for families and caregivers."}
                </p>
              </div>

              {hasActiveFilter && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#37575f] hover:text-[#30d5c8] transition-colors w-fit"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              )}
            </div>

            {displayedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 text-left">
                      <span className="inline-block text-xs font-bold text-[#37575f] bg-[#30d5c8]/15 px-3 py-1 rounded-full mb-4">
                        {post.category}
                      </span>

                      <h3 className="text-xl font-bold text-[#37575f] mb-3 leading-snug group-hover:text-[#30d5c8] transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-5">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-[#37575f] font-semibold hover:text-[#30d5c8] transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-gray-100 rounded-2xl py-16 px-6 text-center">
                <Search className="w-10 h-10 text-gray-300 mx-auto mb-4" />

                <h3 className="text-xl font-bold text-[#37575f] mb-2">
                  No articles found
                </h3>

                <p className="text-gray-500 mb-6">
                  Try a different search term or category.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="bg-[#30d5c8] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#28c5b9] transition-colors"
                >
                  View All Articles
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto bg-[#37575f] rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Need Help with Home Care?
            </h2>

            <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Bunny Home Care helps families understand their options, switch
              agencies smoothly, and receive support in their own language.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#become-a-caregiver"
                className="bg-[#30d5c8] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#28c5b9] transition-colors"
              >
                Get Started
              </a>

              <a
                href="tel:+12674839642"
                className="bg-white text-[#37575f] px-7 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}