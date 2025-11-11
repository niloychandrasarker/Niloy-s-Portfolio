import React from "react";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Quiet Weight of Life",
      excerpt:
        "A quiet reflection on love, loss, and the strange weight of simply existing — The Weight of Living captures how life remains beautiful, cruel, and unbearably real all at once.",
      link: "https://rabitlog.vercel.app/the-quiet-weight-of-life",
    },
    {
      id: 2,
      title: "Integrate Clerk Authentication in Your Node.js & React App",
      excerpt:
        "This document provides a comprehensive guide on how Clerk authentication is implemented and configured in the Rabitlog Blog Application.",
      link: "https://rabitlog.vercel.app/integrate-clerk-authentication-in-your-node.js-&-react-app-%E2%80%94-step-by-step-guide",
    },
    {
      id: 4,
      title:
        "Your Ultimate MERN Stack Deployment Guide (Node.js + Vite + MongoDB + Vercel)",
      excerpt:
        "If you’ve built a MERN Stack application (MongoDB, Express, React/Vite, Node.js) and want to take it live, this guide will walk you through a step-by-step deployment process on Vercel — for both backend and frontend. Let’s dive in!",
      link: "https://rabitlog.vercel.app/your-ultimate-mern-stack-deployment-guide-(node.js-+-vite-+-mongodb-+-vercel)",
    },
    {
      id: 5,
      title: "The Echo of Silence",
      excerpt:
        "A soft whisper of loneliness and the strange comfort found in quiet moments of pain.",
      link: "https://rabitlog.vercel.app/the-echo-of-silence",
    },
    {
      id: 3,
      title:
        "Complete Guide: How to Connect MongoDB with Node.js (2025 Edition)",
      excerpt:
        "If you’re building a backend using Node.js, one of the most essential steps is connecting your app to a database — and MongoDB is a top choice for modern web development. In this guide, you’ll learn step-by-step how to connect MongoDB with Node.js, both locally and using MongoDB Atlas (cloud).",
      link: "https://rabitlog.vercel.app/complete-guide:-how-to-connect-mongodb-with-node.js-(2025-edition)",
    },
    {
      id: 6,
      title: "We Keep Going",
      excerpt:
        "A reminder that even in the face of loss and confusion, we continue — not because we’re strong, but because we must.",
      link: "https://rabitlog.vercel.app/we-keep-going",
    },
  ];

  return (
    <section id="blog" className="py-10 md:py-10 bg-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Blog & Articles
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Sharing knowledge and experiences in competitive programming
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`relative group rounded-2xl bg-white border-2 border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-500 overflow-hidden animate-scale-in stagger-${Math.min(
                index + 1,
                10
              )}`}
            >
              {/* Rotating Blue Corner */}
              <div className="blog-card-corner"></div>

              {/* Content */}
              <div className="relative p-5 z-20">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-3"></div>

                {/* Read More Link */}
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
