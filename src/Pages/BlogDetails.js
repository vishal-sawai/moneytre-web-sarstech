import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
// import { blogs } from '../Api/'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function BlogDetails() {

    const { id } = useParams();

    // Server Url
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    const [blog, setBlog] = React.useState(null);

    // Fetch Blog
    const fetchBlog = async () => {
        try {
            const response = await axios.get(`${serverUrl}/blog/get_blog/${id}`);
            setBlog(response.data.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }



    useEffect(() => {
        window.scrollTo(0, 0)
        fetchBlog();
    }, [])


    if (!blog) {
        return <div className='d-flex justify-center' style={{ height: "100vh" }}><h1 className='m-auto display-3'>Blog not found</h1></div>
    }

    return (
        <div className='main'>
            <Topbar />
            <Header />

            <main id="main">

                <div data-aos="fade" className="page-title">

                    <div className="container">

                    </div>

                    <nav className="breadcrumbs">
                        <div className="container">
                            <ol>
                                <li> <Link to={'/'}><a>Home</a></Link>  </li>
                                <li> <Link to={'/blogs'}><a>Blog</a></Link>  </li>

                            </ol>

                        </div>
                    </nav>
                </div>
                <section id="blog-details" className="blog-details">

                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="section-title">

                            <h2>Blog Details</h2>

                        </div>
                        <div className="row">
                            <div className="col-lg-1"></div>
                            <div className="col-md-10 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <div className="container">
                                    <article className="article">
                                        <div>
                                            <img src="../assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
                                        </div>
                                        <h2 className="title">{blog.title}</h2>

                                        <div className="meta-top">
                                            <ul>
                                                <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">{blog.userName}</a></li>
                                                <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2020-01-01">{blog.publishDate}</time></a></li>
                                                <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-details.html">0
                                                    Comments</a></li>
                                            </ul>
                                        </div>

                                        <div className="content">
                                            <p>{blog.description}</p>
                                        </div>


                                    </article>
                                    {/* comment*/}
                                    <div className="comment-form">
                                        <h4>Comments</h4>
                                        <form action="" method="post">
                                            <div className="form-group mt-1">
                                                <textarea className="form-control" name="comment" rows="5" placeholder="Write a comment"></textarea>
                                            </div>
                                            <div className="text-start mt-2"><button className="btn btn-primary" type="submit">Post Comment</button></div>
                                        </form>
                                    </div>

                                    {/* Show All comment */}
                                    <div className="comments">
                                        <div className="comment">
                                            <div className="d-flex align-items-start">
                                                <img src="assets/img/blog/blog-author-1.jpg" alt="" className="img-fluid" />
                                                <div className="comment-body">
                                                    <h5>John Doe</h5>
                                                    <time datetime="2020-01-01">Jan 1, 2020</time>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut libero
                                                        nec felis scelerisque suscipit. Sed nec porttitor lectus. Donec
                                                        ultricies, lacus ut mattis aliquet, metus quam rhoncus leo, nec
                                                        vulputate nisl sem sit amet eros.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="comment">
                                            <div className="d-flex align-items-start">
                                                <img src="assets/img/blog/blog-author-2.jpg" alt="" className="img-fluid" />
                                                <div className="comment-body">
                                                    <h5>John Doe</h5>
                                                    <time datetime="2020-01-01">Jan 1, 2020</time>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut libero
                                                        nec felis scelerisque suscipit. Sed nec porttitor lectus. Donec
                                                        ultricies, lacus ut mattis aliquet, metus quam rhoncus leo, nec
                                                        vulputate nisl sem sit amet eros.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>




                    </div>

                </section>

            </main>
            <Footer />

        </div>
    )
}

export default BlogDetails