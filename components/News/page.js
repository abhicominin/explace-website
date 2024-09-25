"use client";
import React, { useEffect, useRef, useCallback, useState } from "react";
import axios from "axios";

const News = () => {
  const fadeInNews = useRef(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const target = fadeInNews.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // target.classList.add("fadeIn");
          // target.classList.style.animation="fadeInNewsAni 3s forwards ease-out"
          document.querySelectorAll(".fadeInNews").forEach((item, index) => {
            item.style.animation = `fadeInAnimation .6s forwards ease-out ${
              index / 10
            }s`;
          });
          document.querySelector(
            ".fadeInNewsLine"
          ).style.animation = `fadeInNewsLineAni .6s forwards ease-out 1.5s`;
        }
        else {
          // Optionally, remove the class when it leaves the viewport
          // target.classList.remove("fadeIn");
          document.querySelectorAll(".fadeInNews").forEach((item, index) => {
            item.style.animation = "none"
          });
          document.querySelector(".fadeInNewsLine").style.animation = "none";

        }
      });
    });

    if (target) {
      observer.observe(target);
    }
    // Cleanup observer when the component unmounts
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://public-api.wordpress.com/wp/v2/sites/exdev0a2e2b7a53.wordpress.com/posts"
      )
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  function convertDate(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
  }

  return (
    <div className="mt-10 grid place-items-center">
      <div ref={fadeInNews} className="flex items-center w-[95%] lg:w-[80%] mb-6">
        <div className="text-base lg:text-4xl mr-3 flex items-center">
          <p className="fadeInNews opacity-0">N</p>
          <p className="fadeInNews opacity-0">E</p>
          <p className="fadeInNews opacity-0">W</p>
          <p className="fadeInNews opacity-0">S</p>
        </div>
        <div className="text-base lg:text-lg mr-3 flex items-center">
          <p className="fadeInNews opacity-0">U</p>
          <p className="fadeInNews opacity-0">p</p>
          <p className="fadeInNews opacity-0">d</p>
          <p className="fadeInNews opacity-0">a</p>
          <p className="fadeInNews opacity-0">t</p>
          <p className="fadeInNews opacity-0">e</p>
        </div>
        <p className="w-full h-[2px] opacity-0 bg-black fadeInNewsLine"></p>
      </div>

      <div className="w-[95%] lg:w-[80%]">
        {posts.map((post, index) => {
          return (
            <div key={index} className="mb-2">
              <p className="text-xl mb-1">
                <span className="text-xs lg:text-sm mr-1">
                  {convertDate(post.date)}
                </span>
                - {post.title.rendered}
              </p>
              {/* <p className="text-xs">{post.title.rendered}</p> */}
            </div>
          );
        })}

        <button className="border-2 mt-5 border-black px-3 py-1 text-xs">
          <a
            href="https://github.com/explace/IshikawaSake_DesignWeb/tree/main/app"
            target="_blank"
          >
            READ ALL
          </a>
        </button>
      </div>
    </div>
  );
};

export default News;
