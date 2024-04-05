import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
// import { blogs } from '../Api/'
import { FaRegShareSquare } from "react-icons/fa";
import axios from 'axios'
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';



function Blogs() {

  const [blog, setBlog] = useState([]);

  // Server Url
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  // Fetch Blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${serverUrl}/blog/get_all_blog`);
      setBlog(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);


  const [currentBlogId, setCurrentBlogId] = useState(null);

  const handleShow = (blogId) => {
    setCurrentBlogId(blogId);
  };

  // Share Blog Url
  const shareUrl = 'http://localhost:3000/blogdetails/' + currentBlogId;

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
                        <img src={`data:image/jpeg;base64,${blog.image}`} alt="" class="img-fluid" />
                      </div>
                      <p className="post-category">{blog.type_blog}</p>
                      <h2 class="title">
                        <Link to={`/blogdetails/${blog.id}`}>{blog.title}</Link>
                      </h2>

                      <div class="d-flex align-items-center justify-content-between">
                        <div className='d-flex'>
                          <img src="assets/img/blog/hetal.jpeg" alt="" class="img-fluid post-author-img flex-shrink-0" />
                          <div class="post-meta">
                            <p class="post-author">Hetal shah</p>
                            <p class="post-date">
                              <time datetime={new Date(blog.dateandtime).toISOString()}>
                                {new Date(blog.dateandtime).toLocaleString()}
                              </time>                            </p>
                          </div>
                        </div>

                        {/* Shares blog */}
                        <div className="post-share">
                          <FaRegShareSquare data-bs-toggle="modal" data-bs-target="#ShareModal" style={{ fontSize: "20px", cursor: "pointer" }} onClick={() => handleShow(blog.id)} />
                        </div>

                      </div>

                      {/* Share Blog Modal */}
                      <div class="modal fade" id="ShareModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title text-danger" id="exampleModalLabel">Share</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body d-flex flex-wrap justify-content-around px-5 py-4">
                              <FacebookShareButton className="my-2"
                                url={shareUrl}>
                                <FacebookIcon size={40} round={true} />
                              </FacebookShareButton>

                              <WhatsappShareButton className="my-2"
                                url={shareUrl}>
                                <WhatsappIcon size={40} round={true} />
                              </WhatsappShareButton>

                              <LinkedinShareButton className="my-2"
                                url={shareUrl}>
                                <LinkedinIcon size={40} round={true} />
                              </LinkedinShareButton>

                              <EmailShareButton className="my-2"
                                url={shareUrl}>
                                <EmailIcon size={40} round={true} />
                              </EmailShareButton>

                              <TelegramShareButton className="my-2"
                                url={shareUrl}>
                                <TelegramIcon size={40} round={true} />
                              </TelegramShareButton>

                              <TwitterShareButton className="my-2"
                                url={shareUrl}>
                                <TwitterIcon size={40} round={true} />
                              </TwitterShareButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                )
              })
              }
            </div>
          </div>

        </section >

      </main >
      <Footer />
    </div >
  )
}

export default Blogs