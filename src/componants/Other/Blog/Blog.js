import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-10 text-start my-10'>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Different the between SQL and noSQL?</h2>
                    <p>
                        1. SQL databases are relational, NoSQL databases are non-relational. <br />
                        2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                        3.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    </p>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is jwt? And does work it?</h2>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p>

                </div>
            </div>
            <div className="card mt-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is Different between Javascript and NodeJS?</h2>
                    <h3 className='font-semibold  mt-3 text-2xl'>JavaScript:</h3>
                    <p>It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.It's a programming language, after all. Any browser with a competent browser engine will operate.It's most commonly used on client-side servers.</p>
                    <h3 className='font-semibold  mt-3 text-2xl'>NodeJS:</h3>

                    <p>It's a bridge, open-source Js runtime environment for executing Js on the server.It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming.It's mainly popular on the server-side.</p>

                </div>
            </div>
            <div className="card mt-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does NodeJS handle miltiple at the same time?</h2>
                    <p>Node JS is one of the most popular runtime environments, to build backend servers. Despite of its single-threaded nature, Node JS performs quite well because of its asynchronous and non-blocking behavior. It is regularly used to build backend servers that interact with websites, mobile applications, and more. Let’s take a look at the topic-

                        How single threaded Node JS handles concurrency when multiple I/O operations are happening?

                        It means that, how does Node JS handle multiple client requests, even when it uses a single thread? Using a single thread would mean, that it would handle the request and response of a single client at a time. So, how does Node JS work when multiple clients are firing requests?</p>

                </div>
            </div>

        </div>
    );
};

export default Blog;