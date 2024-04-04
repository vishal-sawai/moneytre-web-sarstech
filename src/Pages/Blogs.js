import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { blogs } from '../Api/'

function Blogs() {

  const [blog] = useState(blogs);

  return (
    <div className='main'>
      <Topbar />
      <Header />
      <main id="main">
        <section class="breadcrumbs">
          <div class="container">

            <ol>
              <li> <Link to={'/'}><a>Home</a></Link>  </li>
            </ol>


          </div>
        </section>
        <section id="blog" class="blog">

          <div class="container" data-aos="fade-up" data-aos-delay="100">

            <div class="row gy-4 posts-list">


              {blog.map((blog) => {
                return (
                  <div class="col-xl-4 col-lg-6">
                    <article class="card-border">
                      <div class="post-img">
                        <img src={blog.image} alt="" class="img-fluid" />
                      </div>
                      <h2 class="title">
                        <Link to={`/blogdetails/${blog.id}`}>{blog.title}</Link>
                      </h2>

                      <div class="d-flex align-items-center">
                        <img src="assets/img/blog/blog-author-4.jpg" alt="" class="img-fluid post-author-img flex-shrink-0" />
                        <div class="post-meta">
                          <p class="post-author">{blog.userName}</p>
                          <p class="post-date">
                            <time datetime="2022-01-01">{blog.publishDate}</time>
                          </p>
                        </div>
                      </div>

                    </article>
                  </div>
                )
              })
              }
            </div>
          </div>

        </section>

      </main>
      <Footer />
    </div>
  )
}

export default Blogs