import React from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, PhoneCall } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import Seo from "../components/Seo";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen pt-32 px-6 text-center bg-gray-50">
        <h1 className="text-3xl font-bold text-[#37575f] mb-4">
          Blog post not found
        </h1>

        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[#30d5c8] font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </main>
    );
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Seo
        title={`${post.title} | Bunny Home Care Blog`}
        description={post.excerpt}
        canonical={`https://www.bunnyhomecare.com/blog/${post.slug}`}
      />

      <main className="bg-gray-50 min-h-screen pt-24">
        {/* Article Header */}
        <section className="px-6 py-14 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[#30d5c8] font-semibold mb-8 hover:text-[#28c5b9] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#37575f] bg-[#30d5c8]/15 px-4 py-2 rounded-full mb-5">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-[#37575f] leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-500">
              <span>{post.author}</span>

              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#30d5c8]" />
                {post.date}
              </span>

              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#30d5c8]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-6 -mt-2">
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[280px] md:h-[500px] object-cover"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Article */}
            <article className="lg:col-span-8 bg-white rounded-3xl shadow-sm border border-gray-100 p-7 md:p-10 text-left">
              {post.content.map((section, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  {section.heading && (
                    <h2 className="text-2xl md:text-3xl font-bold text-[#37575f] mb-4">
                      {section.heading}
                    </h2>
                  )}

                  <p className="text-gray-700 leading-8 text-base md:text-lg">
                    {section.paragraph}
                  </p>
                </div>
              ))}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 text-left sticky top-28">
                <h3 className="text-xl font-bold text-[#37575f] mb-4">
                  Need Help?
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Our team can help you understand the process, compare your
                  options, and get started with Bunny Home Care.
                </p>

                <a
                  href="tel:+12674839642"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#30d5c8] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#28c5b9] transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call Us Now
                </a>

                <a
                  href="/#become-a-caregiver"
                  className="inline-flex items-center justify-center w-full mt-3 border border-[#30d5c8] text-[#37575f] px-5 py-3 rounded-xl font-semibold hover:bg-[#30d5c8] hover:text-white transition-colors"
                >
                  Get Started
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* Related Posts */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#37575f] mb-8 text-center">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-left group"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <span className="inline-block text-xs font-bold text-[#37575f] bg-[#30d5c8]/15 px-3 py-1 rounded-full mb-3">
                      {item.category}
                    </span>

                    <h3 className="font-bold text-[#37575f] leading-snug group-hover:text-[#30d5c8] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-3">
                      {item.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}