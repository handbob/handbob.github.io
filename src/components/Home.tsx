import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];

    for (let i = 0; i < 10000; i++) {
      vertices.push(THREE.MathUtils.randFloatSpread(2000));
      vertices.push(THREE.MathUtils.randFloatSpread(2000));
      vertices.push(THREE.MathUtils.randFloatSpread(2000));
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({ color: 0x888888 });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="three-background"></div>;
};

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <ThreeBackground />
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container d-flex justify-content-start">
          <a className="navbar-brand" href="#home">handbob.github.io</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#docs">Docs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-info">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header id="home" className="home-header text-center">
        <div className="container">
          <h1>handbob.github.io</h1>
          <p>Your one-stop destination for all things development. Whether you're a game developer, AI enthusiast, or web wizard, you'll find the resources and community you need to succeed.</p>
          <a href="#services" className="btn btn-outline-light mt-3">Explore Resources</a>
        </div>
      </header>

      <section id="services" className="services-section">
        <div className="container">
          <h2 className="text-center mb-5">Developer Resources</h2>
          <div className="row text-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-box p-4">
                <i className="bi bi-code-slash service-icon mb-3"></i>
                <h3>Open Source Projects</h3>
                <p>Contribute to or use our community-driven open-source projects.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-box p-4">
                <i className="bi bi-people service-icon mb-3"></i>
                <h3>Forums & Community</h3>
                <p>Join discussions, share knowledge, and get help from fellow developers.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-box p-4">
                <i className="bi bi-tools service-icon mb-3"></i>
                <h3>Developer Tools</h3>
                <p>Access a range of tools and resources to enhance your development workflow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="text-center mb-5">Projects</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="project-placeholder">
                <img src="https://via.placeholder.com/300x200" alt="AI Machine Learning Model" className="img-fluid" />
                <div className="project-coming-soon-overlay">Coming Soon</div>
                <p>PyTrainer</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="project-placeholder">
                <img src="https://via.placeholder.com/300x200" alt="Todo List Backend App" className="img-fluid" />
                <div className="project-coming-soon-overlay">Coming Soon</div>
                <p>JTask</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="project-placeholder">
                <img src="https://via.placeholder.com/300x200" alt="Personal Website" className="img-fluid" />
                <div className="project-coming-soon-overlay">Coming Soon</div>
                <p>handbob.github.io</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="project-placeholder">
                <img src="https://via.placeholder.com/300x200" alt="Logging system" className="img-fluid" />
                <div className="project-coming-soon-overlay">Coming Soon</div>
                <p>PyFolderSync</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="project-placeholder">
                <img src="https://via.placeholder.com/300x200" alt="AutoLab project" className="img-fluid" />
                <div className="project-coming-soon-overlay">Coming Soon</div>
                <p>TestAutoLab</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="project-placeholder">
                <img src="https://via.placeholder.com/300x200" alt="PyBioVariant project" className="img-fluid" />
                <div className="project-coming-soon-overlay">Coming Soon</div>
                <p>PyBioVariant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="docs" className="docs-section">
        <div className="container">
          <h2 className="text-center mb-5">Documentation</h2>
          <div className="row text-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="doc-box p-4">
                <h3>Getting Started</h3>
                <p>Everything you need to know to begin your journey.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="doc-box p-4">
                <h3>API Reference</h3>
                <p>Detailed API documentation for all our tools and projects.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="doc-box p-4">
                <h3>Tutorials</h3>
                <p>Step-by-step guides to help you build and learn.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="issue-tracker" className="issue-tracker-section">
        <div className="container text-center">
          <h2 className="mb-4">Issue Tracker</h2>
          <p>Found a bug or have a feature request? Let us know!</p>
          <a href="https://github.com/fusionby/issues" className="btn btn-outline-light mt-3">Report an Issue</a>
        </div>
      </section>

      <footer id="contact-info" className="footer-section text-center">
        <div className="container">
          <h3>Get in Touch</h3>
          <p>Have questions? Want to contribute? Connect with us!</p>
          <p>Email: support@mail.com | Join our <a href="https://discord.com" className="text-decoration-none">Discord Community</a></p>
          <div className="social-links">
            <a href="https://github.com/handbob" className="social-link" aria-label="GitHub"><i className="bi bi-github"></i></a>
            <a href="https://www.instagram.com" className="social-link" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com" className="social-link" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://x.com" className="social-link" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="https://www.reddit.com" className="social-link" aria-label="Reddit"><i className="bi bi-reddit"></i></a>
            <a href="https://discord.com" className="social-link" aria-label="Discord"><i className="bi bi-discord"></i></a>
          </div>
          <p>&copy; 2024 handbob.github.io. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export { Home };
